-- Pick'em settlement RPC + embed load timeseries (requires prior embed + picks DDL).

-- ── Settle all pending rows for one game ─────────────────────────────────
create or replace function public.settle_picks_for_game(p_game_id text, p_correct_team text)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare n int;
begin
  update public.picks
     set correct_team = upper(trim(p_correct_team)),
         is_correct   = upper(trim(picked_team)) = upper(trim(p_correct_team))
   where game_id = p_game_id
     and correct_team is null;
  get diagnostics n = row_count;
  return coalesce(n, 0);
end;
$$;

revoke all on function public.settle_picks_for_game(text, text) from public;
grant execute on function public.settle_picks_for_game(text, text) to service_role;

-- ── Daily rollup for publisher dashboard charts ───────────────────────────
create or replace function public.embed_agg_timeseries(day_count integer default 14)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(
    jsonb_agg(
      jsonb_build_object(
        'day', to_char(day, 'YYYY-MM-DD'),
        'pulse', pulse,
        'ticker', ticker,
        'injury', injury
      )
      order by day
    ),
    '[]'::jsonb
  )
  from (
    select
      date_trunc('day', e.created_at) as day,
      sum(case when e.widget_id = 'pulse'   then 1 else 0 end)::int as pulse,
      sum(case when e.widget_id = 'ticker'  then 1 else 0 end)::int as ticker,
      sum(case when e.widget_id = 'injury'  then 1 else 0 end)::int as injury
    from public.embed_analytics_events e
    where e.created_at >= now() - make_interval(days => greatest(day_count, 1))
    group by date_trunc('day', e.created_at)
  ) buckets;
$$;

revoke all on function public.embed_agg_timeseries(integer) from public;
grant execute on function public.embed_agg_timeseries(integer) to service_role;
