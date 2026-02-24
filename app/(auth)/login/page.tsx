import { auth } from "@/lib/auth";
import { LoginForm } from "./_components/LoginForm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    return redirect("/");
  }
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="max-w-md w-full mx-auto">
        <LoginForm />
      </div>
    </div>
  );
}
