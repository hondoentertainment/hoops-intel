-- Hoops Intel Community Migration
-- Adds profiles, discussion threads/comments, votes, and in-app notifications.

-- ═══════════════════════════════════════════════════════════
-- PROFILES
-- ═══════════════════════════════════════════════════════════

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  bio text,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

alter table public.profiles enable row level security;

create policy "Anyone can read profiles" on public.profiles
  for select using (true);

create policy "Users can upsert own profile" on public.profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

-- ═══════════════════════════════════════════════════════════
-- COMMUNITY THREADS
-- ═══════════════════════════════════════════════════════════

create table if not exists public.community_threads (
  id uuid default gen_random_uuid() primary key,
  scope_type text check (scope_type in ('game', 'edition')) not null,
  scope_key text not null,
  title text not null,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,
  unique(scope_type, scope_key)
);

alter table public.community_threads enable row level security;

create policy "Anyone can read community threads" on public.community_threads
  for select using (true);

create policy "Authenticated users can create threads" on public.community_threads
  for insert with check (auth.uid() is not null);

-- ═══════════════════════════════════════════════════════════
-- COMMUNITY COMMENTS
-- ═══════════════════════════════════════════════════════════

create table if not exists public.community_comments (
  id uuid default gen_random_uuid() primary key,
  thread_id uuid references public.community_threads(id) on delete cascade not null,
  author_id uuid references auth.users(id) on delete cascade not null,
  parent_id uuid references public.community_comments(id) on delete cascade,
  body text not null check (char_length(body) between 1 and 1000),
  created_at timestamptz default now() not null
);

alter table public.community_comments enable row level security;

create policy "Anyone can read community comments" on public.community_comments
  for select using (true);

create policy "Users can insert own comments" on public.community_comments
  for insert with check (auth.uid() = author_id);

create policy "Users can delete own comments" on public.community_comments
  for delete using (auth.uid() = author_id);

-- ═══════════════════════════════════════════════════════════
-- COMMENT VOTES
-- ═══════════════════════════════════════════════════════════

create table if not exists public.community_comment_votes (
  id uuid default gen_random_uuid() primary key,
  comment_id uuid references public.community_comments(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete cascade not null,
  value smallint not null check (value in (-1, 1)),
  created_at timestamptz default now() not null,
  unique(comment_id, user_id)
);

alter table public.community_comment_votes enable row level security;

create policy "Anyone can read comment votes" on public.community_comment_votes
  for select using (true);

create policy "Users can upsert own comment votes" on public.community_comment_votes
  for insert with check (auth.uid() = user_id);

create policy "Users can update own comment votes" on public.community_comment_votes
  for update using (auth.uid() = user_id);

create policy "Users can delete own comment votes" on public.community_comment_votes
  for delete using (auth.uid() = user_id);

create or replace view public.community_comment_vote_totals as
  select comment_id, coalesce(sum(value), 0)::int as score
  from public.community_comment_votes
  group by comment_id;

-- ═══════════════════════════════════════════════════════════
-- IN-APP COMMUNITY NOTIFICATIONS
-- ═══════════════════════════════════════════════════════════

create table if not exists public.community_notifications (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  actor_id uuid references auth.users(id) on delete set null,
  type text check (type in ('reply', 'mention')) not null,
  message text not null,
  target_path text not null,
  read_at timestamptz,
  created_at timestamptz default now() not null
);

alter table public.community_notifications enable row level security;

create policy "Users can read own community notifications" on public.community_notifications
  for select using (auth.uid() = user_id);

create policy "Authenticated users can insert community notifications" on public.community_notifications
  for insert with check (auth.uid() is not null and auth.uid() = actor_id);

create policy "Users can update own community notifications" on public.community_notifications
  for update using (auth.uid() = user_id);

create index if not exists idx_community_comments_thread_created
  on public.community_comments(thread_id, created_at desc);

create index if not exists idx_community_notifications_user_created
  on public.community_notifications(user_id, created_at desc);
