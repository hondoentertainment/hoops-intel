-- Idempotent push dispatch log (rival tonight, playoff tip, close-game alerts).
create table if not exists public.push_dispatch_log (
  event_key text primary key,
  sent_at timestamptz not null default now()
);

alter table public.push_dispatch_log enable row level security;

create policy "Service role only push_dispatch_log"
  on public.push_dispatch_log
  for all
  using (false);

alter table public.series_snapshots
  add column if not exists tip_notified_game int,
  add column if not exists close_notified_game int;
