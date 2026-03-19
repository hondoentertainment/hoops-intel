-- Run in Supabase SQL editor
create table if not exists public.picks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  edition_date text not null,           -- "2026-03-18"
  game_id text not null,                -- e.g. "LAL-HOU-20260318"
  picked_team text not null,            -- team abbreviation
  correct_team text,                    -- filled in after game finishes (null = pending)
  is_correct boolean,                   -- null = pending, true/false = settled
  created_at timestamptz default now(),
  unique(user_id, edition_date, game_id)
);
alter table public.picks enable row level security;
create policy "Users can manage own picks"
  on public.picks for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Leaderboard view (public accuracy stats by user)
create or replace view public.pick_leaderboard as
select
  user_id,
  count(*) filter (where is_correct is not null) as total_settled,
  count(*) filter (where is_correct = true) as correct_picks,
  round(
    100.0 * count(*) filter (where is_correct = true)
    / nullif(count(*) filter (where is_correct is not null), 0),
    1
  ) as accuracy_pct,
  count(*) filter (where is_correct is not null and is_correct = (
    lag(is_correct) over (partition by user_id order by created_at)
  )) as current_streak
from public.picks
group by user_id;
