/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useConfetti } from "@/hooks/use-confetti";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function PaymentSuccessful() {
  const { triggerConfetti } = useConfetti();

  useEffect(() => {
    triggerConfetti();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-1 justify-center items-center">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
            <CheckCircle className="h-6 w-6 text-green-500" />
          </div>
          <CardTitle className="text-2xl">Payment Successful!</CardTitle>
          <CardDescription className="text-base mt-2">
            Your subscription is now active
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-sm text-muted-foreground">
            You now have unlimited access to all courses on the platform. Start learning today!
          </p>
          <div className="flex flex-col gap-2">
            <Link
              href="/courses"
              className={buttonVariants({ className: "w-full" })}
            >
              Browse All Courses
            </Link>
            <Link
              href="/dashboard"
              className={buttonVariants({ variant: "outline", className: "w-full" })}
            >
              Go to Dashboard
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
