-- Digest subscribers table for the Hoops Intel email digest system.
-- Stores email addresses of users who opt in to the daily morning newsletter.

create table if not exists public.digest_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  favorite_teams text[] not null default '{}'
);

-- Index for the most common query: fetch all active subscribers
create index if not exists idx_digest_subscribers_active
  on public.digest_subscribers (active)
  where active = true;

-- Enable Row Level Security
alter table public.digest_subscribers enable row level security;

-- Policy: authenticated users can insert their own row
create policy "Users can subscribe themselves"
  on public.digest_subscribers
  for insert
  to authenticated
  with check (auth.jwt() ->> 'email' = email);

-- Policy: authenticated users can update their own row (toggle active, set teams)
create policy "Users can update their own subscription"
  on public.digest_subscribers
  for update
  to authenticated
  using (auth.jwt() ->> 'email' = email)
  with check (auth.jwt() ->> 'email' = email);

-- Policy: authenticated users can read their own row
create policy "Users can read their own subscription"
  on public.digest_subscribers
  for select
  to authenticated
  using (auth.jwt() ->> 'email' = email);

-- Policy: service role can read all rows (used by the digest script)
-- The service role bypasses RLS by default, but this makes intent explicit.
create policy "Service role can read all subscriptions"
  on public.digest_subscribers
  for select
  to service_role
  using (true);
