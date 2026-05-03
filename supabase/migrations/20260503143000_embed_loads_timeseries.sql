-- Daily embed load counts per widget (calendar UTC days), newest day first.

create or replace function public.embed_loads_timeseries(p_day_count integer)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  with dc as (
    select least(greatest(coalesce(p_day_count, 8), 1), 90)::int as n
  ),
  day_series as (
    select ((timezone('utc', now()))::date - gs.i)::date as d
    from dc,
    lateral generate_series(0, dc.n - 1) as gs(i)
  ),
  agg as (
    select
      (date_trunc('day', e.created_at at time zone 'utc'))::date as d,
      e.widget_id::text as widget_id,
      count(*)::int as cnt
    from public.embed_analytics_events e
    cross join dc
    where e.created_at >= (((timezone('utc', now()))::date - (dc.n - 1))::timestamp at time zone 'utc')
      and e.created_at < (((timezone('utc', now()))::date + 1)::timestamp at time zone 'utc')
    group by 1, e.widget_id
  ),
  per_day as (
    select
      d,
      coalesce(sum(cnt) filter (where widget_id = 'pulse'), 0)::int as pulse,
      coalesce(sum(cnt) filter (where widget_id = 'ticker'), 0)::int as ticker,
      coalesce(sum(cnt) filter (where widget_id = 'injury'), 0)::int as injury
    from agg
    group by d
  )
  select coalesce(
    (
      select jsonb_agg(
        jsonb_build_object(
          'd', to_char(ds.d, 'YYYY-MM-DD'),
          'pulse', coalesce(pd.pulse, 0),
          'ticker', coalesce(pd.ticker, 0),
          'injury', coalesce(pd.injury, 0)
        )
        order by ds.d desc
      )
      from day_series ds
      left join per_day pd on pd.d = ds.d
    ),
    '[]'::jsonb
  );
$$;

revoke all on function public.embed_loads_timeseries(integer) from public;
grant execute on function public.embed_loads_timeseries(integer) to service_role;
