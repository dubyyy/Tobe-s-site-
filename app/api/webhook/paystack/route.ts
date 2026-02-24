import { prisma } from "@/lib/db";
import { env } from "@/lib/env";
import { headers } from "next/headers";
import crypto from "crypto";

export async function POST(req: Request) {
  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get("x-paystack-signature") as string;

  const hash = crypto
    .createHmac("sha512", env.PAYSTACK_SECRET_KEY)
    .update(body)
    .digest("hex");

  if (hash !== signature) {
    return new Response("Invalid signature", { status: 400 });
  }

  const event = JSON.parse(body);

  if (event.event === "charge.success") {
    const data = event.data;
    const metadata = data.metadata;

    const userId = metadata?.userId;

    if (!userId) {
      return new Response("Missing metadata", { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    if (metadata.type === 'subscription') {
      const subscriptionId = metadata?.subscriptionId;

      if (!subscriptionId) {
        return new Response("Missing subscription metadata", { status: 400 });
      }

      const startDate = new Date();
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + 1);

      await prisma.subscription.update({
        where: {
          id: subscriptionId,
        },
        data: {
          status: "Active",
          startDate: startDate,
          endDate: endDate,
          paystackReference: data.reference,
        },
      });
    } else {
      const courseId = metadata?.courseId;
      const enrollmentId = metadata?.enrollmentId;

      if (!courseId || !enrollmentId) {
        return new Response("Missing enrollment metadata", { status: 400 });
      }

      await prisma.enrollment.update({
        where: {
          id: enrollmentId,
        },
        data: {
          userId: user.id,
          courseId: courseId,
          amount: data.amount / 100,
          status: "Active",
        },
      });
    }
  }

  return new Response(null, { status: 200 });
}
