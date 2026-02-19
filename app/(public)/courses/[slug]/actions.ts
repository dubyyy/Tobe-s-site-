"use server";

import { requireUser } from "@/app/data/user/require-user";
import arcjet, { fixedWindow } from "@/lib/arcjet";
import { prisma } from "@/lib/db";
import { env } from "@/lib/env";
import { paystack } from "@/lib/paystack";
import { ApiResponse } from "@/lib/types";
import { request } from "@arcjet/next";
import { redirect } from "next/navigation";

const aj = arcjet.withRule(
  fixedWindow({
    mode: "LIVE",
    window: "1m",
    max: 5,
  })
);

export async function enrollInCourseAction(
  courseId: string
): Promise<ApiResponse | never> {
  const user = await requireUser();

  let checkoutUrl: string;
  try {
    const req = await request();
    const decision = await aj.protect(req, {
      fingerprint: user.id,
    });

    if (decision.isDenied()) {
      return {
        status: "error",
        message: "You have been blocked",
      };
    }
    const course = await prisma.course.findUnique({
      where: {
        id: courseId,
      },
      select: {
        id: true,
        title: true,
        price: true,
        slug: true,
      },
    });

    if (!course) {
      return {
        status: "error",
        message: "Course not found",
      };
    }

    let paystackCustomerCode: string;
    const userWithPaystackCustomer = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
      select: {
        paystackCustomerCode: true,
      },
    });

    if (userWithPaystackCustomer?.paystackCustomerCode) {
      paystackCustomerCode = userWithPaystackCustomer.paystackCustomerCode;
    } else {
      const customer = await paystack.customer.create({
        email: user.email,
        first_name: user.name?.split(' ')[0] || user.name,
        last_name: user.name?.split(' ').slice(1).join(' ') || '',
      });

      paystackCustomerCode = customer.data.customer_code;

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          paystackCustomerCode: paystackCustomerCode,
        },
      });
    }

    const result = await prisma.$transaction(async (tx) => {
      const existingEnrollment = await tx.enrollment.findUnique({
        where: {
          userId_courseId: {
            userId: user.id,
            courseId: courseId,
          },
        },
        select: {
          status: true,
          id: true,
        },
      });

      if (existingEnrollment?.status === "Active") {
        return {
          status: "success",
          message: "You are alredy enrolled in this Course",
        };
      }

      let enrollment;

      if (existingEnrollment) {
        enrollment = await tx.enrollment.update({
          where: {
            id: existingEnrollment.id,
          },
          data: {
            amount: course.price,
            status: "Pending",
            updatedAt: new Date(),
          },
        });
      } else {
        enrollment = await tx.enrollment.create({
          data: {
            userId: user.id,
            courseId: course.id,
            amount: course.price,
            status: "Pending",
          },
        });
      }

      const transaction = await paystack.transaction.initialize({
        email: user.email,
        amount: course.price * 100,
        currency: 'NGN',
        callback_url: `${env.BETTER_AUTH_URL}/payment/success`,
        metadata: {
          userId: user.id,
          courseId: course.id,
          enrollmentId: enrollment.id,
          custom_fields: [
            {
              display_name: 'Course Title',
              variable_name: 'course_title',
              value: course.title,
            },
          ],
        },
      });

      return {
        enrollment: enrollment,
        checkoutUrl: transaction.data.authorization_url,
      };
    });

    checkoutUrl = result.checkoutUrl as string;
  } catch (error) {
    return {
      status: "error",
      message: "Failed to enroll in course. Please try again later.",
    };
  }

  redirect(checkoutUrl);
}
