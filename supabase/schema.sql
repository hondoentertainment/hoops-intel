-- Hoops Intel Database Schema for Supabase
-- Run this in the Supabase SQL editor to set up the database

-- ═══════════════════════════════════════════════════════════
-- USER FAVORITES
-- ═══════════════════════════════════════════════════════════

create table if not exists public.user_favorites (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  type text check (type in ('team', 'player')) not null,
  value text not null,
  created_at timestamptz default now() not null,
  unique(user_id, type, value)
);

alter table public.user_favorites enable row level security;

create policy "Users can read own favorites" on public.user_favorites
  for select using (auth.uid() = user_id);

create policy "Users can insert own favorites" on public.user_favorites
  for insert with check (auth.uid() = user_id);

create policy "Users can delete own favorites" on public.user_favorites
  for delete using (auth.uid() = user_id);

-- ═══════════════════════════════════════════════════════════
-- REACTIONS (synced across users)
-- ═══════════════════════════════════════════════════════════

create table if not exists public.reactions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  item_id text not null,
  reaction text check (reaction in ('fire', 'cold', 'goat', 'cap')) not null,
  created_at timestamptz default now() not null,
  unique(user_id, item_id) -- one reaction per user per item
);

alter table public.reactions enable row level security;

create policy "Anyone can read reactions" on public.reactions
  for select using (true);

create policy "Users can upsert own reactions" on public.reactions
  for insert with check (auth.uid() = user_id);

create policy "Users can update own reactions" on public.reactions
  for update using (auth.uid() = user_id);

create policy "Users can delete own reactions" on public.reactions
  for delete using (auth.uid() = user_id);

-- Aggregated view for efficient counting
create or replace view public.reaction_counts as
  select item_id, reaction, count(*)::int as count
  from public.reactions
  group by item_id, reaction;

-- ═══════════════════════════════════════════════════════════
-- EMAIL DIGEST PREFERENCES
-- ═══════════════════════════════════════════════════════════

create table if not exists public.digest_preferences (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null unique,
  enabled boolean default true not null,
  favorite_only boolean default false not null,
  updated_at timestamptz default now() not null
);

alter table public.digest_preferences enable row level security;

create policy "Users can read own digest prefs" on public.digest_preferences
  for select using (auth.uid() = user_id);

create policy "Users can upsert own digest prefs" on public.digest_preferences
  for insert with check (auth.uid() = user_id);

create policy "Users can update own digest prefs" on public.digest_preferences
  for update using (auth.uid() = user_id);

-- ═══════════════════════════════════════════════════════════
-- PUSH SUBSCRIPTIONS (Web Push)
-- ═══════════════════════════════════════════════════════════

create table if not exists public.push_subscriptions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  endpoint text not null unique,
  p256dh text not null,
  auth_key text not null,
  created_at timestamptz default now() not null
);

alter table public.push_subscriptions enable row level security;

create policy "Users can manage own push subs" on public.push_subscriptions
  for all using (auth.uid() = user_id);

-- ═══════════════════════════════════════════════════════════
-- PULSE INDEX HISTORY (daily snapshots)
-- ═══════════════════════════════════════════════════════════

create table if not exists public.pulse_snapshots (
  id uuid default gen_random_uuid() primary key,
  date date not null,
  rank int not null,
  player text not null,
  team text not null,
  index_score numeric(5,1) not null,
  key_stats text,
  created_at timestamptz default now() not null,
  unique(date, rank)
);

-- Anyone can read history, only the bot can write
alter table public.pulse_snapshots enable row level security;

create policy "Anyone can read pulse snapshots" on public.pulse_snapshots
  for select using (true);

-- Index for efficient player trend queries
create index if not exists idx_pulse_snapshots_player on public.pulse_snapshots(player, date desc);
create index if not exists idx_pulse_snapshots_date on public.pulse_snapshots(date desc);

-- ═══════════════════════════════════════════════════════════
-- EDITION ARCHIVE (for database-backed archive)
-- ═══════════════════════════════════════════════════════════

create table if not exists public.editions (
  id text primary key,
  date date not null unique,
  display_date text not null,
  headline text not null,
  subheadline text,
  games_count int default 0,
  top_story text,
  top_player text,
  top_stat_line text,
  tags text[] default '{}',
  players text[] default '{}',
  teams text[] default '{}',
  full_data jsonb, -- complete pulseData.ts content as JSON
  created_at timestamptz default now() not null
);

alter table public.editions enable row level security;

create policy "Anyone can read editions" on public.editions
  for select using (true);

create index if not exists idx_editions_date on public.editions(date desc);
