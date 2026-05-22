-- Referrer-host rollups for publisher analytics dashboard.

create or replace function public.embed_agg_by_referrer(day_count integer default 8)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(
    jsonb_agg(
      jsonb_build_object(
        'host', coalesce(nullif(trim(referrer_host), ''), '(direct)'),
        'loads', cnt
      )
      order by cnt desc
    ),
    '[]'::jsonb
  )
  from (
    select coalesce(e.referrer_host, '') as referrer_host, count(*)::int as cnt
    from public.embed_analytics_events e
    where e.created_at >= now() - make_interval(days => greatest(day_count, 1))
    group by coalesce(e.referrer_host, '')
    order by cnt desc
    limit 25
  ) s;
$$;

revoke all on function public.embed_agg_by_referrer(integer) from public;
grant execute on function public.embed_agg_by_referrer(integer) to service_role;
