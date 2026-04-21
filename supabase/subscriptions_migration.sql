-- Premium tier ("Hoops Intel Pro") subscription state.
-- Rows upserted by api/stripe-webhook.ts when Stripe sends events.
-- Read by the client via the usual anon key + RLS policy below.

create table if not exists public.subscriptions (
  user_id uuid primary key references auth.users(id) on delete cascade,
  stripe_customer_id text unique,
  stripe_subscription_id text unique,
  plan text not null check (plan in ('monthly', 'annual')),
  status text not null check (
    status in ('trialing', 'active', 'past_due', 'canceled', 'unpaid', 'incomplete')
  ),
  current_period_end timestamptz,
  cancel_at_period_end boolean default false,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

alter table public.subscriptions enable row level security;

-- A user may read their own subscription row (client-side gating).
create policy "Users can read own subscription"
  on public.subscriptions for select
  using (auth.uid() = user_id);

-- Only the service role (Stripe webhook + admin) may write.
create policy "Service role writes only"
  on public.subscriptions for all
  using (false);

create index if not exists idx_subscriptions_status on public.subscriptions(status);
