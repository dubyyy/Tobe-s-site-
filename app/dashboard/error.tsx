"use client";

import { buttonVariants } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function DashboardError({
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
    <div className="flex flex-col flex-1 h-full items-center justify-center rounded-md border-dashed border p-8 text-center animate-in fade-in-50">
      <div className="flex size-16 items-center justify-center rounded-full bg-destructive/10">
        <AlertTriangle className="size-8 text-destructive" />
      </div>
      <h2 className="mt-4 text-xl font-semibold">Something went wrong</h2>
      <p className="mb-6 mt-2 text-sm text-muted-foreground text-balance max-w-sm">
        An error occurred while loading this page. Please try again or go back
        to your dashboard.
      </p>
      <div className="flex gap-2">
        <button onClick={reset} className={buttonVariants()}>
          Try Again
        </button>
        <Link
          href="/dashboard"
          className={buttonVariants({ variant: "outline" })}
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
