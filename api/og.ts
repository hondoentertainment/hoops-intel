export const config = { runtime: 'edge' };

export default async function handler(req: Request) {
  const url = new URL(req.url);
  const player = url.searchParams.get('player');
  const type = url.searchParams.get('type');

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
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0EA5E9"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="4" fill="url(#accent)"/>
  <rect x="60" y="240" width="64" height="64" rx="10" fill="url(#accent)"/>
  <text x="92" y="284" font-family="Arial Black, sans-serif" font-size="30" fill="white" text-anchor="middle" font-weight="900">HI</text>
  <text x="144" y="270" font-family="Arial Black, sans-serif" font-size="56" fill="white" font-weight="900" letter-spacing="2">HOOPS INTEL</text>
  <text x="144" y="305" font-family="Arial, sans-serif" font-size="20" fill="#0EA5E9" font-weight="600" letter-spacing="4">THE DAILY NBA INTELLIGENCE BRIEFING</text>
  <text x="60" y="400" font-family="Arial, sans-serif" font-size="22" fill="rgba(255,255,255,0.5)">Scores · Pulse Index Rankings · Injury Wire · Game Previews</text>
  <text x="60" y="560" font-family="monospace" font-size="18" fill="#0EA5E9">hoopsintel.net</text>
  <rect x="0" y="626" width="1200" height="4" fill="url(#accent)"/>
</svg>`;
}
