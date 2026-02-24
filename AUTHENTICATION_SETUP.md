# Authentication Setup Guide

This application now supports multiple authentication methods:
- **Google OAuth** (optional)
- **Email/Password**
- **Email OTP (One-Time Password)**
- **Password Reset via Email**

## Environment Variables

### Required (already configured)
```env
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=http://localhost:3000
RESEND_API_KEY=your-resend-api-key
```

### Optional - Google OAuth
```env
# Google OAuth (optional - will hide Google button if not configured)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED=true
```

## Setting up Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** > **Credentials**
4. Click **Create Credentials** > **OAuth 2.0 Client ID**
5. Configure the consent screen if you haven't already
6. Select **Web application** as the application type
7. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (for development)
   - `https://yourdomain.com/api/auth/callback/google` (for production)
8. Copy the **Client ID** and **Client Secret** to your `.env` file

## Features

### Login Page (`/login`)
- Sign in with Google (OAuth)
- Sign in with Email/Password
- Sign in with Email OTP
- Link to Forgot Password
- Link to Sign Up

### Sign Up Page (`/signup`)
- Create account with Google
- Create account with Email/Password (requires name, email, password)

### Forgot Password (`/forgot-password`)
- Enter email to receive password reset link via Resend
- Link sent to email with token

### Reset Password (`/reset-password`)
- Set new password using token from email
- Password validation (min 8 characters)

## How It Works

1. **Google OAuth**: Users click "Continue with Google" and are redirected to Google's OAuth consent screen
2. **Email/Password**: Users can create accounts with email/password and sign in directly
3. **Email OTP**: Users receive a one-time code via email (using Resend) to verify their identity
4. **Password Reset**: Users request a reset link sent via Resend, then set a new password

All authentication flows are handled by Better Auth with Prisma adapter.
