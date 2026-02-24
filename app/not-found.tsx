import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileQuestion } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-1 justify-center items-center p-4">
      <Card className="max-w-md w-full">
        <CardContent className="pt-6">
          <div className="w-full flex justify-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
              <FileQuestion className="size-8 text-primary" />
            </div>
          </div>
          <div className="mt-4 text-center">
            <h1 className="text-4xl font-bold">404</h1>
            <h2 className="text-xl font-semibold mt-2">Page Not Found</h2>
            <p className="text-sm mt-2 text-muted-foreground text-balance">
              The page you are looking for does not exist or has been moved.
            </p>
            <div className="flex flex-col gap-2 mt-6">
              <Link
                href="/"
                className={buttonVariants({ className: "w-full" })}
              >
                Go to Homepage
              </Link>
              <Link
                href="/courses"
                className={buttonVariants({
                  variant: "outline",
                  className: "w-full",
                })}
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
