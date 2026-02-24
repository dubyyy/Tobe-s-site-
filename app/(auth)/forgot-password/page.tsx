import { auth } from "@/lib/auth";
import { ForgotPasswordForm } from "./_components/ForgotPasswordForm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function ForgotPasswordPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    return redirect("/");
  }
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <ForgotPasswordForm />
    </div>
  );
}
