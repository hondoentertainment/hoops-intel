-- Multi-favorite push targeting + Guest Pulse public display override.

alter table public.push_subscriptions
  add column if not exists team_abbrs text[] not null default '{}';

-- Backfill from scalar first favorite.
update public.push_subscriptions
set team_abbrs = array[upper(trim(team_abbr))]
where team_abbr is not null
  and trim(team_abbr) <> ''
  and (team_abbrs is null or cardinality(team_abbrs) = 0);

alter table public.guest_pulse_submissions
  add column if not exists published_pitch text;

comment on column public.guest_pulse_submissions.published_pitch is
  'Optional editor-facing body for the public feed; when null, pitch is shown.';
