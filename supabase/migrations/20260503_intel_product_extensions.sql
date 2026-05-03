-- Hoops Intel: embed analytics + guest Pulse queue rows + push subscription prefs
-- Apply in Supabase SQL editor or via migration tooling after prior migrations.

-- ═══════════════════════════════════════════════════════════
-- EMBED ANALYTICS (iframe / widget loads)
-- ═══════════════════════════════════════════════════════════

create table if not exists public.embed_analytics_events (
  id uuid primary key default gen_random_uuid(),
  widget_id text not null check (widget_id in ('pulse', 'ticker', 'injury')),
  referrer_host text,
  created_at timestamptz not null default now()
);

create index if not exists idx_embed_analytics_created
  on public.embed_analytics_events (created_at desc);

alter table public.embed_analytics_events enable row level security;

-- Inserts occur only via service role from Vercel (no anon policies).

create or replace function public.embed_agg_last_days(day_count integer default 8)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(
    jsonb_object_agg(widget_id, cnt),
    '{}'::jsonb
  )
  from (
    select e.widget_id::text as widget_id, count(*)::int as cnt
    from public.embed_analytics_events e
    where e.created_at >= now() - make_interval(days => greatest(day_count, 1))
    group by e.widget_id
  ) s;
$$;

revoke all on function public.embed_agg_last_days(integer) from public;
grant execute on function public.embed_agg_last_days(integer) to service_role;

-- ═══════════════════════════════════════════════════════════
-- GUEST PULSE SUBMISSIONS (queue / moderation handoff)
-- ═══════════════════════════════════════════════════════════

create table if not exists public.guest_pulse_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text,
  email text,
  pitch text not null,
  status text not null default 'received' check (status in ('received', 'reviewing', 'accepted', 'declined')),
  notes text default ''
);

create index if not exists idx_guest_pulse_status on public.guest_pulse_submissions (status, created_at desc);

alter table public.guest_pulse_submissions enable row level security;

-- Service role inserts from contact-intake; editors use dashboard SQL or future admin UI.

-- ═══════════════════════════════════════════════════════════
-- PUSH SUBSCRIPTION PREFS (topic allow-list + rivalry targeting)
-- ═══════════════════════════════════════════════════════════

alter table public.push_subscriptions
  add column if not exists team_abbr text;

alter table public.push_subscriptions
  add column if not exists player_slug text;

alter table public.push_subscriptions
  add column if not exists notify_topics text[];

alter table public.push_subscriptions
  add column if not exists rival_abbr_a text;

alter table public.push_subscriptions
  add column if not exists rival_abbr_b text;
