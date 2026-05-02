import React, { useState } from "react";
import { clutchData, ClutchPlayer } from "../lib/clutchData";

function getMedalStyle(rank: number): React.CSSProperties | null {
  if (rank === 1) return { color: "#FFD700", fontWeight: 800 };
  if (rank === 2) return { color: "#C0C0C0", fontWeight: 800 };
  if (rank === 3) return { color: "#CD7F32", fontWeight: 800 };
  return null;
}

function getMedalEmoji(rank: number): string {
  if (rank === 1) return "\u{1F947}";
  if (rank === 2) return "\u{1F948}";
  if (rank === 3) return "\u{1F949}";
  return `${rank}`;
}

function ratingBarColor(rating: number): string {
  if (rating >= 85) return "#22c55e";
  if (rating >= 70) return "#84cc16";
  if (rating >= 60) return "#eab308";
  return "#ef4444";
}

function TrendArrow({ trend }: { trend: "up" | "down" | "stable" }) {
  if (trend === "up")
    return <span style={{ color: "#10b981", fontWeight: 700, fontSize: 18 }}>&#9650;</span>;
  if (trend === "down")
    return <span style={{ color: "#f43f5e", fontWeight: 700, fontSize: 18 }}>&#9660;</span>;
  return <span style={{ color: "#6b7280", fontWeight: 700, fontSize: 18 }}>&#9644;</span>;
}

function ClutchKingCard() {
  const { clutchKing, players } = clutchData;
  const kingPlayer = players.find((p) => p.player === clutchKing.player);
  const rating = kingPlayer?.clutchRating ?? 0;

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, rgba(255,215,0,0.08) 0%, rgba(255,215,0,0.02) 100%)",
        border: "1px solid rgba(255,215,0,0.25)",
        borderRadius: 16,
        padding: "32px 36px",
        marginBottom: 32,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -30,
          right: -10,
          fontSize: 140,
          opacity: 0.06,
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        &#128081;
      </div>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
        <div style={{ flex: "1 1 400px" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#FFD700", letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>
            Clutch King
          </div>
          <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
            {clutchKing.player}
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>
            {clutchKing.team}
          </div>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0, maxWidth: 600 }}>
            {clutchKing.description}
          </p>
        </div>
        <div style={{ textAlign: "center", flex: "0 0 auto" }}>
          <div style={{ fontSize: 64, fontWeight: 900, color: "#FFD700", lineHeight: 1 }}>
            {rating}
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,215,0,0.6)", letterSpacing: 1, marginTop: 4 }}>
            CLUTCH RATING
          </div>
        </div>
      </div>
    </div>
  );
}

function PlayerRow({ player, index, expanded, onToggle }: { player: ClutchPlayer; index: number; expanded: boolean; onToggle: () => void }) {
  const medalStyle = getMedalStyle(player.rank);
  const barColor = ratingBarColor(player.clutchRating);
  const rowBg = index % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)";

  return (
    <>
      <tr
        style={{ background: rowBg, cursor: "pointer", transition: "background 0.15s" }}
        onClick={onToggle}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = rowBg)}
      >
        <td style={{ padding: "12px 16px", textAlign: "center", fontSize: 16, ...(medalStyle ?? { color: "rgba(255,255,255,0.5)" }) }}>
          {getMedalEmoji(player.rank)}
        </td>
        <td style={{ padding: "12px 16px" }}>
          <span style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>{player.player}</span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginLeft: 8 }}>{player.team}</span>
        </td>
        <td style={{ padding: "12px 16px", width: 180 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ flex: 1, height: 8, borderRadius: 4, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
              <div
                style={{
                  width: `${player.clutchRating}%`,
                  height: "100%",
                  borderRadius: 4,
                  background: barColor,
                  transition: "width 0.4s ease",
                }}
              />
            </div>
            <span style={{ color: barColor, fontWeight: 700, fontSize: 13, minWidth: 28, textAlign: "right" }}>
              {player.clutchRating}
            </span>
          </div>
        </td>
        <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.8)", fontSize: 13, textAlign: "center" }}>
          {player.clutchPts.toFixed(1)}
        </td>
        <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.8)", fontSize: 13, textAlign: "center" }}>
          {player.clutchFgPct.toFixed(1)}%
        </td>
        <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.8)", fontSize: 13, textAlign: "center" }}>
          {player.clutchFtPct.toFixed(1)}%
        </td>
        <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.8)", fontSize: 13, textAlign: "center", fontWeight: 700 }}>
          {player.gameWinners}
        </td>
        <td style={{ padding: "12px 16px", fontSize: 13, textAlign: "center", fontWeight: 600, color: player.clutchPlusMinus >= 0 ? "#10b981" : "#f43f5e" }}>
          {player.clutchPlusMinus >= 0 ? "+" : ""}
          {player.clutchPlusMinus.toFixed(1)}
        </td>
        <td style={{ padding: "12px 16px", textAlign: "center" }}>
          <TrendArrow trend={player.trend} />
        </td>
      </tr>
      {expanded && (
        <tr style={{ background: "rgba(14,165,233,0.05)" }}>
          <td colSpan={9} style={{ padding: "12px 16px 12px 56px" }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, fontStyle: "italic" }}>
              <span style={{ color: "#0EA5E9", fontWeight: 600, fontStyle: "normal" }}>Biggest Moment:</span>{" "}
              {player.biggestMoment}
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

function RankingsTable() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const headerStyle: React.CSSProperties = {
    padding: "10px 16px",
    fontSize: 11,
    fontWeight: 700,
    color: "rgba(255,255,255,0.4)",
    letterSpacing: 1.2,
    textTransform: "uppercase",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    textAlign: "center",
  };

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 32,
      }}
    >
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 900 }}>
          <thead>
            <tr style={{ background: "rgba(255,255,255,0.02)" }}>
              <th style={{ ...headerStyle, width: 60, textAlign: "center" }}>Rank</th>
              <th style={{ ...headerStyle, textAlign: "left" }}>Player</th>
              <th style={{ ...headerStyle, width: 180 }}>Clutch Rating</th>
              <th style={{ ...headerStyle, width: 80 }}>C-PPG</th>
              <th style={{ ...headerStyle, width: 80 }}>FG%</th>
              <th style={{ ...headerStyle, width: 80 }}>FT%</th>
              <th style={{ ...headerStyle, width: 60 }}>GW</th>
              <th style={{ ...headerStyle, width: 70 }}>+/-</th>
              <th style={{ ...headerStyle, width: 60 }}>Trend</th>
            </tr>
          </thead>
          <tbody>
            {clutchData.players.map((player, idx) => (
              <PlayerRow
                key={player.rank}
                player={player}
                index={idx}
                expanded={expandedRow === player.rank}
                onToggle={() => setExpandedRow(expandedRow === player.rank ? null : player.rank)}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ padding: "10px 16px", fontSize: 11, color: "rgba(255,255,255,0.3)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        Click any row to reveal biggest moment. C-PPG = Clutch Points Per Game (final 5 min, score within 5). GW = Game Winners.
      </div>
    </div>
  );
}

function IceColdCard() {
  const { worstInClutch } = clutchData;

  return (
    <div
      style={{
        background: "linear-gradient(135deg, rgba(239,68,68,0.08) 0%, rgba(59,130,246,0.06) 100%)",
        border: "1px solid rgba(239,68,68,0.2)",
        borderRadius: 16,
        padding: "28px 32px",
        marginBottom: 32,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -20,
          right: 0,
          fontSize: 120,
          opacity: 0.06,
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        &#129398;
      </div>
      <div style={{ fontSize: 12, fontWeight: 700, color: "#ef4444", letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>
        Ice Cold &#10052;
      </div>
      <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
        {worstInClutch.player}
      </div>
      <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>
        {worstInClutch.team}
      </div>
      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: 0, maxWidth: 700 }}>
        {worstInClutch.description}
      </p>
    </div>
  );
}

function WeeklyHighlight() {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 12,
        padding: "28px 32px",
      }}
    >
      <div style={{ fontSize: 12, fontWeight: 700, color: "#0EA5E9", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
        Weekly Highlight
      </div>
      <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.8, margin: 0 }}>
        {clutchData.weeklyHighlight}
      </p>
    </div>
  );
}

export default function ClutchFactor() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--hi-bg-page, #050D1A)", color: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <h1
            style={{
              fontSize: 36,
              fontWeight: 900,
              letterSpacing: -0.5,
              margin: 0,
              background: "linear-gradient(135deg, #FFD700, #0EA5E9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            CLUTCH FACTOR
          </h1>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginTop: 6 }}>
            {clutchData.weekLabel} &middot; Generated {clutchData.generatedDate}
          </div>
        </div>

        {/* Clutch King */}
        <ClutchKingCard />

        {/* Rankings Table */}
        <RankingsTable />

        {/* Ice Cold */}
        <IceColdCard />

        {/* Weekly Highlight */}
        <WeeklyHighlight />
      </div>
    </div>
  );
}
