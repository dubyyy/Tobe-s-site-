"use client";

import { Button } from "@/components/ui/button";
import { tryCatch } from "@/hooks/try-catch";
import { useTransition } from "react";
import { subscribeAction } from "../actions";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function SubscribeButton() {
  const [pending, startTransition] = useTransition();

  function onSubmit() {
    startTransition(async () => {
      const { data: result, error } = await tryCatch(subscribeAction());

      if (error) {
        toast.error("An unexpected error occurred. Please try again.");
        return;
      }

      if (result.status === "error") {
        toast.error(result.message);
      }
    });
  }

  return (
    <Button onClick={onSubmit} disabled={pending} className="w-full" size="lg">
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin mr-2" />
          Processing...
        </>
      ) : (
        "Subscribe Now"
      )}
    </Button>
  );
}
