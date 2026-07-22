-- Multi-pair rival targeting on push_subscriptions (up to N pairs per device).
-- Keep rival_abbr_a/b as denormalized first pair for cheap SQL prefilters.

alter table public.push_subscriptions
  add column if not exists rival_pairs jsonb not null default '[]'::jsonb;

update public.push_subscriptions
set rival_pairs = jsonb_build_array(
  jsonb_build_array(upper(trim(rival_abbr_a)), upper(trim(rival_abbr_b)))
)
where rival_abbr_a is not null
  and rival_abbr_b is not null
  and (rival_pairs is null or rival_pairs = '[]'::jsonb);
