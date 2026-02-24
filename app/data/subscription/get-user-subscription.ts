import "server-only";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { headers } from "next/headers";

export async function getUserActiveSubscription() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return null;
  }

  const subscription = await prisma.subscription.findFirst({
    where: {
      userId: session.user.id,
      status: "Active",
      endDate: {
        gte: new Date(),
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return subscription;
}

export async function checkUserHasActiveSubscription(): Promise<boolean> {
  const subscription = await getUserActiveSubscription();
  return subscription !== null;
}
