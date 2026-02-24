"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full min-h-screen flex flex-1 justify-center items-center p-4">
      <Card className="max-w-md w-full">
        <CardContent className="pt-6">
          <div className="w-full flex justify-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="size-8 text-destructive" />
            </div>
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold">Something went wrong</h2>
            <p className="text-sm mt-2 text-muted-foreground text-balance">
              An unexpected error occurred. Please try again or return to the
              homepage.
            </p>
            <div className="flex flex-col gap-2 mt-6">
              <button
                onClick={reset}
                className={buttonVariants({ className: "w-full" })}
              >
                Try Again
              </button>
              <Link
                href="/"
                className={buttonVariants({
                  variant: "outline",
                  className: "w-full",
                })}
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
