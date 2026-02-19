import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db";
import { emailOTP } from "better-auth/plugins";
import { resend } from "./resend";
import { admin } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),

  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp }) {
        await resend.emails.send({
          from: "Tobeszn Academy <onboarding@resend.dev>",
          to: [email],
          subject: "Tobeszn Academy - Verify your email",
          html: `<p>Your OTP is <strong>${otp}</strong></p>`,
        });
      },
    }),
    admin(),
  ],
});
