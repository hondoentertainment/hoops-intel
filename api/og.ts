export const config = { runtime: 'edge' };

export default async function handler(req: Request) {
  const url = new URL(req.url);
  const player = url.searchParams.get('player');
  const type = url.searchParams.get('type');
  const gameId = url.searchParams.get('gameId');
  const team = url.searchParams.get('team');

  if (type === 'game' && gameId) {
    return new Response(gameSvg(gameId), { headers: svgHeaders() });
  }
  if (type === 'team' && team) {
    return new Response(teamSvg(team), { headers: svgHeaders() });
  }

  // Determine which SVG to serve
  let svgPath: string;
  if (player) {
    svgPath = `/og/players/${player}.svg`;
  } else if (type === 'edition') {
    svgPath = '/og/edition.svg';
  } else {
    // Default: serve the main OG image
    svgPath = '/og-image.svg';
  }

  // In Vercel, we serve static files from public/ — build the fetch URL
  const origin = url.origin;
  const fetchUrl = `${origin}${svgPath}`;

  try {
    const res = await fetch(fetchUrl);
    if (!res.ok) {
      // Fallback to generic OG image
      const fallbackRes = await fetch(`${origin}/og-image.svg`);
      if (!fallbackRes.ok) {
        return new Response(genericFallbackSvg(), {
          headers: svgHeaders(),
        });
      }
      const fallbackSvg = await fallbackRes.text();
      return new Response(fallbackSvg, {
        headers: svgHeaders(),
      });
    }

    const svg = await res.text();
    return new Response(svg, {
      headers: svgHeaders(),
    });
  } catch {
    return new Response(genericFallbackSvg(), {
      headers: svgHeaders(),
    });
  }
}

function svgHeaders(): HeadersInit {
  return {
    'Content-Type': 'image/svg+xml',
    'Cache-Control': 'public, max-age=3600, s-maxage=86400',
  };
}

function genericFallbackSvg(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#F6F4EF"/>
  <rect x="0" y="0" width="1200" height="14" fill="#C8102E"/>
  <rect x="56" y="48" width="1088" height="534" fill="none" stroke="#827C70" stroke-width="2"/>
  <text x="96" y="160" font-family="Georgia, Palatino, serif" font-size="28" fill="#686359" letter-spacing="4">DAILY NBA DESK</text>
  <text x="96" y="300" font-family="Georgia, Palatino, serif" font-size="84" fill="#14120B" font-weight="700">Hoops Intel</text>
  <text x="96" y="370" font-family="Georgia, Palatino, serif" font-size="32" fill="#686359">Scores, Pulse Index, injuries, and tonight's slate.</text>
  <text x="96" y="510" font-family="Georgia, Palatino, serif" font-size="28" fill="#14120B">hoopsintel.net</text>
</svg>`;
}

function escapeSvg(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function gameSvg(gameId: string): string {
  const [away = "NBA", home = "GAME", date = ""] = gameId.split("-");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#F6F4EF"/>
  <rect x="0" y="0" width="1200" height="14" fill="#C8102E"/>
  <rect x="52" y="52" width="1096" height="526" fill="none" stroke="#827C70" stroke-width="2"/>
  <text x="80" y="140" font-family="Georgia, Palatino, serif" font-size="24" fill="#686359" letter-spacing="4">HOOPS INTEL GAME CENTER</text>
  <text x="80" y="310" font-family="Georgia, Palatino, serif" font-size="96" fill="#14120B" font-weight="700">${escapeSvg(away)}</text>
  <text x="500" y="310" font-family="Georgia, Palatino, serif" font-size="42" fill="#686359">at</text>
  <text x="620" y="310" font-family="Georgia, Palatino, serif" font-size="96" fill="#14120B" font-weight="700">${escapeSvg(home)}</text>
  <text x="80" y="400" font-family="Georgia, Palatino, serif" font-size="28" fill="#686359">Score context, injuries, and desk notes</text>
  <text x="80" y="520" font-family="Georgia, Palatino, serif" font-size="24" fill="#14120B">${escapeSvg(date)} · hoopsintel.net/game/${escapeSvg(gameId)}</text>
</svg>`;
}

function teamSvg(team: string): string {
  const code = team.toUpperCase();
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#F6F4EF"/>
  <rect x="0" y="0" width="1200" height="14" fill="#C8102E"/>
  <text x="72" y="150" font-family="Georgia, Palatino, serif" font-size="24" fill="#686359" letter-spacing="4">HOOPS INTEL TEAM DESK</text>
  <text x="72" y="340" font-family="Georgia, Palatino, serif" font-size="140" fill="#14120B" font-weight="700">${escapeSvg(code)}</text>
  <text x="72" y="420" font-family="Georgia, Palatino, serif" font-size="32" fill="#686359">Scores, injuries, Pulse players, and archive notes</text>
  <text x="72" y="530" font-family="Georgia, Palatino, serif" font-size="24" fill="#14120B">hoopsintel.net/team/${escapeSvg(code.toLowerCase())}</text>
</svg>`;
}
