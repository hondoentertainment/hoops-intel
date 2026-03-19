export const config = { runtime: 'edge' };

export default function handler(req: Request) {
  const url = new URL(req.url);
  const name = url.searchParams.get('name') ?? 'NBA Player';
  const team = url.searchParams.get('team') ?? '';
  const stats = url.searchParams.get('stats') ?? '';
  const rank = url.searchParams.get('rank') ?? '';
  const score = url.searchParams.get('score') ?? '';

  // Escape special XML/SVG characters
  const esc = (s: string) =>
    s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');

  const safeName = esc(name);
  const safeTeam = esc(team);
  const safeStats = esc(stats);

  // Rank badge — only rendered when rank is provided
  const rankBadge = rank
    ? `
  <!-- Rank badge -->
  <rect x="860" y="60" width="280" height="52" rx="6" fill="rgba(14,165,233,0.18)" stroke="#0EA5E9" stroke-width="1.5"/>
  <text x="1000" y="93" font-family="'Barlow Condensed', 'Arial Narrow', Arial, sans-serif" font-size="24" font-weight="700" fill="#0EA5E9" text-anchor="middle" letter-spacing="2">PULSE RANK #${esc(rank)}</text>`
    : '';

  // Score text — only rendered when score is provided
  const scoreText = score
    ? `<text x="100" y="580" font-family="'Barlow Condensed', 'Arial Narrow', Arial, sans-serif" font-size="18" fill="rgba(255,255,255,0.35)" letter-spacing="1">PULSE INDEX ${esc(score)}</text>`
    : '';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <!-- Background -->
  <rect width="1200" height="630" fill="#050D1A"/>

  <!-- Electric blue left border strip -->
  <rect x="0" y="0" width="8" height="630" fill="#0EA5E9"/>

  <!-- Subtle grid texture overlay -->
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(14,165,233,0.04)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- Bottom accent bar -->
  <rect x="0" y="590" width="1200" height="40" fill="rgba(14,165,233,0.06)"/>

  <!-- Top label: HOOPS INTEL -->
  <text x="40" y="60" font-family="'Barlow Condensed', 'Arial Narrow', Arial, sans-serif" font-size="20" font-weight="700" fill="rgba(255,255,255,0.5)" letter-spacing="4">HOOPS INTEL</text>

  ${rankBadge}

  <!-- Team abbreviation -->
  ${safeTeam ? `<text x="40" y="170" font-family="'Barlow Condensed', 'Arial Narrow', Arial, sans-serif" font-size="48" font-weight="700" fill="#0EA5E9" letter-spacing="6">${safeTeam}</text>` : ''}

  <!-- Player name -->
  <text x="40" y="310" font-family="'Barlow Condensed', 'Arial Narrow', Arial, sans-serif" font-size="96" font-weight="700" fill="#FFFFFF" letter-spacing="-1">${safeName}</text>

  <!-- Divider line -->
  <line x1="40" y1="340" x2="1160" y2="340" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>

  <!-- Stats line -->
  ${safeStats ? `<text x="40" y="410" font-family="'Courier New', 'Lucida Console', monospace" font-size="32" font-weight="600" fill="#F59E0B" letter-spacing="1">${safeStats}</text>` : ''}

  ${scoreText}

  <!-- Bottom bar: site URL -->
  <text x="40" y="617" font-family="'Barlow Condensed', 'Arial Narrow', Arial, sans-serif" font-size="18" fill="rgba(255,255,255,0.35)" letter-spacing="2">hoopsintel.net</text>

  <!-- Bottom bar right: edition label -->
  <text x="1160" y="617" font-family="'Barlow Condensed', 'Arial Narrow', Arial, sans-serif" font-size="18" fill="rgba(14,165,233,0.6)" letter-spacing="1" text-anchor="end">NBA INTELLIGENCE DASHBOARD</text>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
