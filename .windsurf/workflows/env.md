---
description: Environment variable setup for Vercel deployment
---

# Environment Variable Setup Workflow

## 1. Local Development Setup
- Copy `.env.example` to `.env.local`
- Fill in all required environment variables
- Run `pnpm dev` to test locally

## 2. Vercel Production Setup
- Go to Vercel Dashboard → Project → Settings → Environment Variables
- Add all required variables from `.env.example`
- Important: Set `BETTER_AUTH_URL` to your deployed URL (e.g., `https://your-app.vercel.app`)
- Set environment scope to Production

## 3. Required Variables
- `DATABASE_URL` - PostgreSQL connection string
- `BETTER_AUTH_SECRET` - Random secret key
- `BETTER_AUTH_URL` - Deployed app URL
- `RESEND_API_KEY` - Email service API key
- `ARCJET_KEY` - Security service key
- `AWS_ACCESS_KEY_ID` - AWS access key
- `AWS_SECRET_ACCESS_KEY` - AWS secret key
- `AWS_ENDPOINT_URL_S3` - S3 endpoint
- `AWS_ENDPOINT_URL_IAM` - IAM endpoint
- `AWS_REGION` - AWS region
- `PAYSTACK_SECRET_KEY` - Payment processor key
- `NEXT_PUBLIC_S3_BUCKET_NAME_IMAGES` - S3 bucket name

## 4. Deploy
- Push changes to trigger deployment
- Monitor build logs for success
- Test application functionality

## 5. Troubleshooting
- If build fails, check environment variables are properly set in Vercel
- Ensure all required variables are marked as "Available" in production
- Check variable names match exactly (case-sensitive)