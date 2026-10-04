import { teamColors } from "../lib/teamColors";

const TEAM_CODES = Object.keys(teamColors);

/** Standings-adjacent team index. Same chip treatment as the desk, no new chrome. */
export function TeamPageLinks({ id = "team-pages" }: { id?: string }) {
  return (
    <section aria-labelledby={id} className="mb-8">
      <h2 id={id} className="enhanced-kicker mb-3">
        Teams
      </h2>
      <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
        {TEAM_CODES.map((abbr) => (
          <li key={abbr}>
            <a
              href={`/team/${abbr.toLowerCase()}`}
              className="desk-chip"
              style={{ textDecoration: "none", color: "var(--hi-text,#0a0a0a)" }}
            >
              {abbr}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
