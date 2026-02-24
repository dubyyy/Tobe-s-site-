import { checkUserHasActiveSubscription } from "@/app/data/subscription/get-user-subscription";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { SubscribeButton } from "./_components/SubscribeButton";

export default async function SubscribePage() {
  const hasActiveSubscription = await checkUserHasActiveSubscription();

  if (hasActiveSubscription) {
    redirect("/courses");
  }

  return (
    <div className="mt-10 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Badge className="mb-4">Premium Access</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Get Unlimited Access to All Courses
        </h1>
        <p className="text-xl text-muted-foreground">
          Subscribe once and unlock every course on the platform
        </p>
      </div>

      <Card className="max-w-md mx-auto">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl">Monthly Subscription</CardTitle>
          <CardDescription className="text-base mt-2">
            Full access to all current and future courses
          </CardDescription>
          <div className="mt-6">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl font-bold">₦5,000</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h4 className="font-semibold">Everything included:</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="rounded-full p-1 bg-green-500/10 text-green-500 mt-0.5">
                  <CheckIcon className="size-4" />
                </div>
                <span className="text-sm">Access to all courses on the platform</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-full p-1 bg-green-500/10 text-green-500 mt-0.5">
                  <CheckIcon className="size-4" />
                </div>
                <span className="text-sm">New courses added regularly at no extra cost</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-full p-1 bg-green-500/10 text-green-500 mt-0.5">
                  <CheckIcon className="size-4" />
                </div>
                <span className="text-sm">Full lifetime access as long as subscription is active</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-full p-1 bg-green-500/10 text-green-500 mt-0.5">
                  <CheckIcon className="size-4" />
                </div>
                <span className="text-sm">Access on mobile and desktop</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-full p-1 bg-green-500/10 text-green-500 mt-0.5">
                  <CheckIcon className="size-4" />
                </div>
                <span className="text-sm">Certificates of completion</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-full p-1 bg-green-500/10 text-green-500 mt-0.5">
                  <CheckIcon className="size-4" />
                </div>
                <span className="text-sm">Cancel anytime, no questions asked</span>
              </li>
            </ul>
          </div>

          <SubscribeButton />

          <p className="text-xs text-center text-muted-foreground">
            Secure payment powered by Paystack. Cancel anytime from your account settings.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
