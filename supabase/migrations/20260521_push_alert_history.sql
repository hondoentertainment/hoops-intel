-- Recent push alert dispatches (one row per push-notify batch, not per subscription).

create table if not exists public.push_alert_history (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  topic text not null,
  title text not null,
  body text not null,
  url text,
  team_abbr text
);

create index if not exists push_alert_history_created_at_idx
  on public.push_alert_history (created_at desc);

alter table public.push_alert_history enable row level security;

create policy "Service role only push_alert_history"
  on public.push_alert_history
  for all
  using (false);
