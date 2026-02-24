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

const MONTHLY_SUBSCRIPTION_PRICE = 5000;

export async function subscribeAction(): Promise<ApiResponse | never> {
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

    const existingActiveSubscription = await prisma.subscription.findFirst({
      where: {
        userId: user.id,
        status: "Active",
        endDate: {
          gte: new Date(),
        },
      },
    });

    if (existingActiveSubscription) {
      return {
        status: "error",
        message: "You already have an active subscription",
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

    const subscription = await prisma.subscription.create({
      data: {
        userId: user.id,
        amount: MONTHLY_SUBSCRIPTION_PRICE,
        status: "Pending",
      },
    });

    const transaction = await paystack.transaction.initialize({
      email: user.email,
      amount: MONTHLY_SUBSCRIPTION_PRICE * 100,
      currency: 'NGN',
      callback_url: `${env.BETTER_AUTH_URL}/payment/success`,
      metadata: {
        userId: user.id,
        subscriptionId: subscription.id,
        type: 'subscription',
        custom_fields: [
          {
            display_name: 'Subscription Type',
            variable_name: 'subscription_type',
            value: 'Monthly Platform Access',
          },
        ],
      },
    });

    checkoutUrl = transaction.data.authorization_url;
  } catch {
    return {
      status: "error",
      message: "Failed to process subscription. Please try again later.",
    };
  }

  redirect(checkoutUrl);
}
