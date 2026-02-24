import { auth } from "@/lib/auth";
import { SignupForm } from "./_components/SignupForm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function SignupPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    return redirect("/");
  }
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <SignupForm />
    </div>
  );
}
