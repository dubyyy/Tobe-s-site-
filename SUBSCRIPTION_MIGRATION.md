# Subscription Model Migration Guide

This platform has been converted from per-course pricing to a subscription-based access model.

## What Changed

### Database Changes
- Added `Subscription` model to track user subscriptions
- Made `Course.price` field optional (no longer required)
- Users now subscribe to access ALL courses instead of buying individual courses

### Pricing Model
- **Old**: Users paid per course (e.g., $49.99 per course)
- **New**: Users pay ₦5,000/month for unlimited access to all courses

## Migration Steps

### 1. Run Database Migration

```bash
# Create the migration
pnpm prisma migrate dev --name add_subscription_model

# Or if you want to push changes without migration
pnpm prisma db push
```

### 2. Update Existing Data (Optional)

If you have existing courses with prices, you can either:
- Keep the prices for reference (they won't be displayed)
- Set them to NULL in the database

```sql
-- Optional: Clear all course prices
UPDATE "Course" SET price = NULL;
```

### 3. Environment Variables

Ensure your `.env` file has:
```
PAYSTACK_SECRET_KEY=your_paystack_secret_key
```

## How It Works Now

### For Users

1. **Browse Courses**: Anyone can view course listings and details
2. **Subscribe**: Users must subscribe (₦5,000/month) to access any course
3. **Access All Courses**: Once subscribed, users have unlimited access to ALL courses
4. **Dashboard**: Shows all available courses (no enrollment needed)

### For Admins

1. **Create Courses**: Price field is now optional when creating courses
2. **Course Management**: All existing functionality remains the same
3. **Subscriptions**: View subscription status in the database

## Key Routes

- `/subscribe` - Subscription payment page
- `/payment/success` - Post-payment success page
- `/dashboard` - User dashboard (requires active subscription)
- `/courses` - Public course browsing
- `/courses/[slug]` - Individual course page with subscription CTA

## Payment Flow

1. User clicks "Subscribe to Access" on course page or "Subscribe Now" on subscribe page
2. Redirected to Paystack checkout (₦5,000)
3. After payment, webhook activates subscription
4. Subscription valid for 30 days from payment
5. User gains access to all courses

## Webhook Configuration

Update your Paystack webhook URL to:
```
https://your-domain.com/api/webhook/paystack
```

The webhook now handles both:
- Course enrollments (legacy, if still needed)
- Subscription activations (new primary flow)

## Database Schema

```prisma
model Subscription {
  id                String             @id @default(uuid())
  userId            String
  status            SubscriptionStatus @default(Pending)
  amount            Int
  startDate         DateTime?
  endDate           DateTime?
  paystackReference String?            @unique
  createdAt         DateTime           @default(now())
  updatedAt         DateTime           @updatedAt
  User              User               @relation(fields: [userId], references: [id], onDelete: Cascade)
}

enum SubscriptionStatus {
  Pending
  Active
  Expired
  Cancelled
}
```

## Testing

1. Create a test user
2. Navigate to `/subscribe`
3. Complete payment with Paystack test card
4. Verify subscription is activated
5. Access dashboard and course content

## Subscription Price

To change the subscription price, update:
- `app/(public)/subscribe/actions.ts` - `MONTHLY_SUBSCRIPTION_PRICE` constant
- `app/(public)/subscribe/page.tsx` - Display price

Current price: ₦5,000/month

## Future Enhancements

- Add subscription management page (cancel, view history)
- Add different subscription tiers (monthly, yearly)
- Add automatic renewal handling
- Add subscription expiry notifications
- Add grace period for expired subscriptions
