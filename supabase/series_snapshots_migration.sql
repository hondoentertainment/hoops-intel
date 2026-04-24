-- Run this in Supabase SQL editor to enable playoff series push dispatching.
-- Used by scripts/check-playoff-series.mjs to diff series state across runs.

create table if not exists public.series_snapshots (
  series_id text primary key,
  higher_wins int not null,
  lower_wins int not null,
  status text not null,
  elimination_notified_game int,
  clincher_notified boolean default false,
  updated_at timestamptz default now()
);

alter table public.series_snapshots enable row level security;

-- Only the service role writes; no user access required.
create policy "Service role only" on public.series_snapshots using (false);

-- Bracket picks — extends the existing picks pattern with a bracket layer.
-- Users submit one row per series prediction; accuracy is settled when the
-- series resolves.
create table if not exists public.bracket_picks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  series_id text not null,
  picked_team text not null,
  picked_in_games int check (picked_in_games between 4 and 7),
  correct_team text,
  is_correct boolean,
  created_at timestamptz default now(),
  unique(user_id, series_id)
);

alter table public.bracket_picks enable row level security;

create policy "Users can manage own bracket picks"
  on public.bracket_picks for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create or replace view public.bracket_leaderboard as
select
  user_id,
  count(*) filter (where is_correct is not null) as total_settled,
  count(*) filter (where is_correct = true) as correct_series,
  round(
    100.0 * count(*) filter (where is_correct = true)
    / nullif(count(*) filter (where is_correct is not null), 0),
    1
  ) as accuracy_pct
from public.bracket_picks
group by user_id;

-- Optional: expose bracket leaderboard to the anon role for the Pick'em page.
-- Grant in the SQL editor if the client fetch should work for logged-out users:
--   grant usage on schema public to anon;
--   grant select on public.bracket_leaderboard to anon;
