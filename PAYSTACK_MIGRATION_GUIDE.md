# Paystack Migration Guide

## Migration Complete! 🎉

Your LMS has been successfully migrated from Stripe to Paystack. Here's what was changed:

### Changes Made:

1. **Dependencies**
   - ✅ Removed `stripe` package
   - ✅ Installed `paystack-api` package

2. **Environment Variables**
   - ✅ Replaced `STRIPE_SECRET_KEY` with `PAYSTACK_SECRET_KEY`
   - ✅ Removed `STRIPE_WEBHOOK_SECRET` (Paystack uses secret key for webhook verification)

3. **Database Schema**
   - ✅ Changed `stripeCustomerId` to `paystackCustomerCode` in User model
   - ✅ Removed `stripePriceId` from Course model (Paystack doesn't require pre-created products)

4. **Code Changes**
   - ✅ Created `lib/paystack.ts` (replaced `lib/stripe.ts`)
   - ✅ Updated enrollment action to use Paystack transaction initialization
   - ✅ Updated course creation to remove Stripe product creation
   - ✅ Updated webhook handler at `app/api/webhook/paystack/route.ts`

---

## Next Steps:

### 1. Update Your Environment Variables

Create or update your `.env` file with:

```env
# Remove these Stripe variables:
# STRIPE_SECRET_KEY=
# STRIPE_WEBHOOK_SECRET=

# Add this Paystack variable:
PAYSTACK_SECRET_KEY=your_paystack_secret_key_here
```

**Get your Paystack Secret Key:**
1. Go to https://dashboard.paystack.com/settings/developer
2. Copy your **Secret Key** (starts with `sk_`)
3. Add it to your `.env` file

### 2. Run Database Migration

After setting up your environment variables, run:

```bash
pnpm prisma migrate dev --name migrate_to_paystack
```

This will:
- Rename `stripeCustomerId` to `paystackCustomerCode`
- Remove `stripePriceId` from courses
- Update your database schema

### 3. Configure Paystack Webhook

1. Go to https://dashboard.paystack.com/settings/developer
2. Set your webhook URL to: `https://yourdomain.com/api/webhook/paystack`
3. Paystack will automatically verify webhooks using your secret key

### 4. Important Notes

**Currency:** The integration now uses NGN (Nigerian Naira). If you need a different currency, update this line in `app/(public)/courses/[slug]/actions.ts`:

```typescript
currency: 'NGN',  // Change to 'USD', 'GHS', 'ZAR', etc.
```

**Pricing:** Paystack amounts are in kobo (smallest currency unit). The code multiplies by 100:
```typescript
amount: course.price * 100,  // e.g., 5000 NGN = 500000 kobo
```

**Webhook Events:** The webhook listens for `charge.success` events. You may want to add handlers for:
- `charge.failed`
- `refund.processed`
- `subscription.*` (if you add subscriptions later)

### 5. Test the Integration

1. Create a test course
2. Try enrolling in the course
3. Complete payment on Paystack's test checkout
4. Verify enrollment status updates to "Active"

**Test Cards:** Use Paystack test cards from https://paystack.com/docs/payments/test-payments/

---

## File Changes Summary

### Modified Files:
- `lib/env.ts` - Updated environment variables
- `lib/paystack.ts` - New Paystack client (was `lib/stripe.ts`)
- `prisma/schema.prisma` - Updated database schema
- `app/(public)/courses/[slug]/actions.ts` - Enrollment logic
- `app/admin/courses/create/actions.ts` - Course creation logic
- `app/api/webhook/paystack/route.ts` - Webhook handler (was `/stripe/`)
- `package.json` - Updated dependencies

### Removed:
- Stripe dependency
- Stripe-specific fields and logic

---

## Troubleshooting

**Issue:** "Environment variable not found: PAYSTACK_SECRET_KEY"
- **Solution:** Make sure you've added `PAYSTACK_SECRET_KEY` to your `.env` file

**Issue:** Webhook not working
- **Solution:** Verify your webhook URL in Paystack dashboard and ensure it's publicly accessible

**Issue:** Payment initialization fails
- **Solution:** Check that your Paystack secret key is valid and has the correct permissions

---

## Support

- Paystack Documentation: https://paystack.com/docs
- Paystack API Reference: https://paystack.com/docs/api
- Test Mode: Use test keys (starting with `sk_test_`) for development
