import { getTeamColor } from "../lib/teamColors";
import type { ShotCoordinate } from "../lib/playByPlay";

interface ShotChartProps {
  awayShots: ShotCoordinate[];
  homeShots: ShotCoordinate[];
  awayTeam: string;
  homeTeam: string;
}

const PAD = 6;
const VIEW = 100;

/**
 * ESPN doesn't publish a documented coordinate scale for NBA shot data, and it
 * has varied across sports/seasons in practice. Rather than assume a specific
 * court unit system (which silently mis-plots if wrong), we normalize each
 * team's shots against the min/max extent actually observed in this game's
 * data — a relative floor plot rather than an absolute one, but one that never
 * misrenders regardless of which coordinate convention ESPN used.
 */
function normalize(shots: ShotCoordinate[]): { x: number; y: number; made: boolean }[] {
  if (shots.length === 0) return [];
  const xs = shots.map((s) => s.x);
  const ys = shots.map((s) => s.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const spanX = maxX - minX || 1;
  const spanY = maxY - minY || 1;
  return shots.map((s) => ({
    x: PAD + ((s.x - minX) / spanX) * (VIEW - PAD * 2),
    y: PAD + ((s.y - minY) / spanY) * (VIEW - PAD * 2),
    made: s.made,
  }));
}

function ShotDots({ shots, color }: { shots: ShotCoordinate[]; color: string }) {
  return (
    <>
      {normalize(shots).map((s, i) =>
        s.made ? (
          <circle key={i} cx={s.x} cy={s.y} r={1.8} fill={color} fillOpacity={0.85} />
        ) : (
          <circle key={i} cx={s.x} cy={s.y} r={1.8} fill="none" stroke={color} strokeOpacity={0.55} strokeWidth={0.6} />
        ),
      )}
    </>
  );
}

export default function ShotChart({ awayShots, homeShots, awayTeam, homeTeam }: ShotChartProps) {
  const awayColor = getTeamColor(awayTeam);
  const homeColor = getTeamColor(homeTeam);
  const awayMade = awayShots.filter((s) => s.made).length;
  const homeMade = homeShots.filter((s) => s.made).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-2 text-xs">
        <span className="flex items-center gap-1.5" style={{ color: awayColor }}>
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: awayColor }} aria-hidden />
          {awayTeam} {awayMade}/{awayShots.length}
        </span>
        <span className="flex items-center gap-1.5" style={{ color: homeColor }}>
          {homeTeam} {homeMade}/{homeShots.length}
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: homeColor }} aria-hidden />
        </span>
      </div>
      <svg
        viewBox={`0 0 ${VIEW} ${VIEW}`}
        className="w-full rounded-lg"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
        role="img"
        aria-label={`Shot chart: ${awayTeam} ${awayMade} of ${awayShots.length}, ${homeTeam} ${homeMade} of ${homeShots.length}`}
      >
        <circle cx={VIEW / 2} cy={VIEW / 2} r={12} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={0.5} />
        <line x1={0} y1={VIEW / 2} x2={VIEW} y2={VIEW / 2} stroke="rgba(255,255,255,0.08)" strokeWidth={0.5} />
        <ShotDots shots={awayShots} color={awayColor} />
        <ShotDots shots={homeShots} color={homeColor} />
      </svg>
      <p className="text-[10px] mt-2" style={{ color: "rgba(255,255,255,0.35)" }}>
        Filled = made · outline = missed. Positions are relative to this game&apos;s shot spread, not true court scale.
      </p>
    </div>
  );
}
