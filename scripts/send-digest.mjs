#!/usr/bin/env node
// scripts/send-digest.mjs
// Generates and sends the Hoops Intel daily email digest.
//
// Usage:
//   node scripts/send-digest.mjs              # send to all subscribers
//   node scripts/send-digest.mjs --preview    # output HTML to stdout
//   node scripts/send-digest.mjs --test-email someone@example.com
//
// Required env vars (for sending):
//   RESEND_API_KEY       — API key from resend.com
//   SUPABASE_URL         — e.g. https://xyz.supabase.co  (optional, falls back to DIGEST_EMAILS)
//   SUPABASE_SERVICE_KEY — service-role key               (optional)
//   DIGEST_EMAILS        — comma-separated fallback list  (optional)

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ── CLI flags ─────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const isPreview = args.includes('--preview');
const testEmailIdx = args.indexOf('--test-email');
const testEmail = testEmailIdx !== -1 ? args[testEmailIdx + 1] : null;

// ── Parse pulseData.ts ────────────────────────────────────────────────────

function parsePulseData() {
  const filePath = resolve(__dirname, '../client/src/lib/pulseData.ts');
  const src = readFileSync(filePath, 'utf-8');

  // Extract exported const values by matching the pattern:
  //   export const NAME = <JSON or value>;
  function extractJSON(name) {
    // Match: export const <name> = <json>;
    // The value runs from the = to the next semicolon that closes the statement.
    const re = new RegExp(`export\\s+const\\s+${name}\\s*=\\s*`);
    const match = re.exec(src);
    if (!match) return null;

    const start = match.index + match[0].length;
    // Find the matching end — handle arrays and objects by tracking depth
    let depth = 0;
    let inString = false;
    let escape = false;
    let i = start;
    const firstChar = src[i];
    const isArrayOrObj = firstChar === '[' || firstChar === '{';

    if (isArrayOrObj) {
      for (; i < src.length; i++) {
        const ch = src[i];
        if (escape) { escape = false; continue; }
        if (ch === '\\') { escape = true; continue; }
        if (ch === '"') { inString = !inString; continue; }
        if (inString) continue;
        if (ch === '{' || ch === '[') depth++;
        if (ch === '}' || ch === ']') { depth--; if (depth === 0) { i++; break; } }
      }
    } else {
      // Simple value — find the semicolon
      i = src.indexOf(';', start);
    }

    const raw = src.slice(start, i).trim();
    // pulseData.ts uses TS object-literal syntax (unquoted keys, trailing
    // commas) which `JSON.parse` rejects. The literal is valid JS, so we
    // evaluate it in an isolated `new Function` scope. This mirrors the
    // approach used by `generate-edition.mjs`'s `extractExportLiteral`.
    try {
      return new Function(`"use strict"; return (${raw});`)();
    } catch {
      return null;
    }
  }

  return {
    pulseEdition: extractJSON('pulseEdition'),
    narrative: extractJSON('narrative'),
    pulseIndex: extractJSON('pulseIndex'),
    gameResults: extractJSON('gameResults'),
    gamePreviews: extractJSON('gamePreviews'),
    fantasyAlerts: extractJSON('fantasyAlerts'),
    tickerItems: extractJSON('tickerItems'),
  };
}

// ── HTML email template ───────────────────────────────────────────────────

function generateEmailHTML(data) {
  const { pulseEdition, narrative, pulseIndex, gameResults, gamePreviews, fantasyAlerts } = data;

  const edition = pulseEdition || { date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), edition: '' };
  const topPlayers = (pulseIndex || []).slice(0, 3);
  const topGames = (gameResults || []).slice(0, 3);
  const featuredPreview = (gamePreviews || []).find(g => g.featured) || (gamePreviews || [])[0];
  const topFantasy = (fantasyAlerts || []).find(a => a.urgency === 'high') || (fantasyAlerts || [])[0];

  // Team abbreviation to emoji-like colored dots for visual flair
  const trendIcon = (trend) => {
    if (trend === 'up') return '&#9650;'; // ▲
    if (trend === 'down') return '&#9660;'; // ▼
    return '&#9679;'; // ●
  };

  const trendColor = (trend) => {
    if (trend === 'up') return '#22c55e';
    if (trend === 'down') return '#ef4444';
    return '#94a3b8';
  };

  const urgencyBadge = (urgency) => {
    const colors = { high: '#ef4444', medium: '#f59e0b', low: '#22c55e' };
    return `<span style="display:inline-block;padding:2px 8px;border-radius:4px;background:${colors[urgency] || colors.medium};color:#fff;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">${urgency}</span>`;
  };

  const actionBadge = (action) => {
    const colors = { add: '#22c55e', stream: '#3b82f6', hold: '#f59e0b', drop: '#ef4444' };
    return `<span style="display:inline-block;padding:2px 8px;border-radius:4px;background:${colors[action] || '#64748b'};color:#fff;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">${action}</span>`;
  };

  // Build game results rows
  const gameResultsHTML = topGames.map(g => `
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #1e293b;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td style="font-size:16px;font-weight:700;color:#e2e8f0;">
              ${g.awayTeam} ${g.awayScore} &nbsp;@&nbsp; ${g.homeTeam} ${g.homeScore}
            </td>
            <td align="right" style="font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">
              Final
            </td>
          </tr>
          <tr>
            <td colspan="2" style="padding-top:6px;font-size:13px;color:#94a3b8;">
              <span style="color:#3b82f6;font-weight:600;">${g.topPerformer}</span> &mdash; ${g.topLine}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `).join('');

  // Build pulse index rows
  const pulseIndexHTML = topPlayers.map(p => `
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #1e293b;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td width="40" style="font-size:28px;font-weight:800;color:#3b82f6;vertical-align:top;padding-right:12px;">
              ${p.rank}
            </td>
            <td>
              <div style="font-size:16px;font-weight:700;color:#e2e8f0;">
                ${p.player}
                <span style="color:${trendColor(p.trend)};font-size:12px;margin-left:6px;">${trendIcon(p.trend)}</span>
              </div>
              <div style="font-size:13px;color:#94a3b8;margin-top:2px;">
                ${p.team} &middot; ${p.teamRecord}
              </div>
              <div style="font-size:13px;color:#cbd5e1;margin-top:4px;">
                ${p.keyStats}
              </div>
            </td>
            <td width="60" align="right" style="vertical-align:top;">
              <div style="background:#1e293b;border-radius:8px;padding:6px 10px;text-align:center;">
                <div style="font-size:20px;font-weight:800;color:#3b82f6;">${p.indexScore}</div>
                <div style="font-size:9px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Pulse</div>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `).join('');

  // Featured preview section
  const previewHTML = featuredPreview ? `
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:8px;">
      <tr>
        <td style="padding:16px;background:#1e293b;border-radius:8px;">
          <div style="font-size:12px;color:#3b82f6;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">
            ${featuredPreview.tv ? featuredPreview.tv + ' &middot; ' : ''}${featuredPreview.time}
          </div>
          <div style="font-size:20px;font-weight:800;color:#e2e8f0;margin-bottom:4px;">
            ${featuredPreview.awayTeam} @ ${featuredPreview.homeTeam}
          </div>
          <div style="font-size:13px;color:#94a3b8;margin-bottom:10px;">
            ${featuredPreview.spread} &middot; O/U ${featuredPreview.overUnder}
          </div>
          <div style="font-size:14px;color:#cbd5e1;line-height:1.5;">
            ${featuredPreview.storyline}
          </div>
          <div style="margin-top:10px;font-size:13px;color:#64748b;">
            Prediction: <span style="color:#3b82f6;font-weight:600;">${featuredPreview.prediction}</span>
          </div>
        </td>
      </tr>
    </table>
  ` : '';

  // Fantasy alert section
  const fantasyHTML = topFantasy ? `
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:8px;">
      <tr>
        <td style="padding:16px;background:#1e293b;border-radius:8px;">
          <div style="margin-bottom:8px;">
            ${actionBadge(topFantasy.action)} ${urgencyBadge(topFantasy.urgency)}
          </div>
          <div style="font-size:16px;font-weight:700;color:#e2e8f0;margin-bottom:4px;">
            ${topFantasy.player} <span style="color:#94a3b8;font-weight:400;font-size:13px;">${topFantasy.team}</span>
          </div>
          <div style="font-size:14px;color:#cbd5e1;line-height:1.5;">
            ${topFantasy.reason}
          </div>
        </td>
      </tr>
    </table>
  ` : '';

  // Narrative subhead — truncate if very long
  const subhead = narrative?.subhead || '';
  const truncatedSubhead = subhead.length > 300 ? subhead.slice(0, 297) + '...' : subhead;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Hoops Intel Daily Digest — ${edition.date}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#0f172a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#0f172a;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="padding:32px 24px 24px;text-align:center;border-bottom:2px solid #3b82f6;">
              <div style="font-size:32px;font-weight:900;letter-spacing:-1px;color:#e2e8f0;">
                <span style="color:#3b82f6;">HOOPS</span> INTEL
              </div>
              <div style="font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:2px;margin-top:6px;">
                Daily Digest
              </div>
              <div style="font-size:14px;color:#94a3b8;margin-top:8px;">
                ${edition.date} &middot; ${edition.edition}
              </div>
            </td>
          </tr>

          <!-- NARRATIVE OF THE NIGHT -->
          <tr>
            <td style="padding:24px 24px 0;">
              <div style="font-size:11px;font-weight:700;color:#3b82f6;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">
                Narrative of the Night
              </div>
              <div style="font-size:18px;font-weight:700;color:#e2e8f0;line-height:1.4;margin-bottom:12px;">
                ${narrative?.headline || ''}
              </div>
              <div style="font-size:14px;color:#94a3b8;line-height:1.6;">
                ${truncatedSubhead}
              </div>
              <div style="margin-top:16px;">
                <a href="https://hoopsintel.net" style="display:inline-block;padding:10px 24px;background:#3b82f6;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:6px;">
                  Read Full Edition &rarr;
                </a>
              </div>
            </td>
          </tr>

          <!-- DIVIDER -->
          <tr><td style="padding:24px 24px 0;"><div style="border-top:1px solid #1e293b;"></div></td></tr>

          <!-- PULSE INDEX TOP 3 -->
          <tr>
            <td style="padding:24px 24px 0;">
              <div style="font-size:11px;font-weight:700;color:#3b82f6;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">
                Pulse Index &mdash; Top 3
              </div>
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#0f172a;border:1px solid #1e293b;border-radius:8px;overflow:hidden;">
                ${pulseIndexHTML}
              </table>
            </td>
          </tr>

          <!-- DIVIDER -->
          <tr><td style="padding:24px 24px 0;"><div style="border-top:1px solid #1e293b;"></div></td></tr>

          <!-- LAST NIGHT'S RESULTS -->
          <tr>
            <td style="padding:24px 24px 0;">
              <div style="font-size:11px;font-weight:700;color:#3b82f6;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">
                Last Night's Results
              </div>
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#0f172a;border:1px solid #1e293b;border-radius:8px;overflow:hidden;">
                ${gameResultsHTML}
              </table>
            </td>
          </tr>

          <!-- DIVIDER -->
          <tr><td style="padding:24px 24px 0;"><div style="border-top:1px solid #1e293b;"></div></td></tr>

          <!-- TONIGHT'S FEATURED GAME -->
          <tr>
            <td style="padding:24px 24px 0;">
              <div style="font-size:11px;font-weight:700;color:#3b82f6;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">
                Tonight's Featured Game
              </div>
              ${previewHTML}
            </td>
          </tr>

          <!-- DIVIDER -->
          <tr><td style="padding:24px 24px 0;"><div style="border-top:1px solid #1e293b;"></div></td></tr>

          <!-- FANTASY ALERT -->
          <tr>
            <td style="padding:24px 24px 0;">
              <div style="font-size:11px;font-weight:700;color:#3b82f6;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">
                Fantasy Alert
              </div>
              ${fantasyHTML}
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding:32px 24px 24px;">
              <div style="border-top:1px solid #1e293b;padding-top:24px;text-align:center;">
                <div style="font-size:18px;font-weight:800;color:#3b82f6;margin-bottom:8px;">
                  HOOPS INTEL
                </div>
                <div style="font-size:12px;color:#64748b;line-height:1.6;">
                  Daily NBA Intelligence &middot; Data-Driven Analysis
                </div>
                <div style="margin-top:16px;">
                  <a href="https://hoopsintel.net" style="color:#3b82f6;text-decoration:none;font-size:13px;font-weight:600;">
                    hoopsintel.net
                  </a>
                </div>
                <div style="margin-top:16px;font-size:11px;color:#475569;">
                  You received this because you subscribed to the Hoops Intel Daily Digest.
                  <br>
                  <a href="https://hoopsintel.net/unsubscribe?email={{EMAIL}}" style="color:#64748b;text-decoration:underline;">
                    Unsubscribe
                  </a>
                </div>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── Subscriber fetching ───────────────────────────────────────────────────

async function fetchSubscribers() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_KEY;

  if (supabaseUrl && serviceKey) {
    const res = await fetch(
      `${supabaseUrl}/rest/v1/digest_subscribers?active=eq.true&select=email`,
      {
        headers: {
          apikey: serviceKey,
          Authorization: `Bearer ${serviceKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`[digest] Supabase fetch failed ${res.status}: ${text}`);
      return [];
    }

    const rows = await res.json();
    return rows.map(r => r.email);
  }

  // Fallback: comma-separated env var
  const fallback = process.env.DIGEST_EMAILS;
  if (fallback) {
    return fallback.split(',').map(e => e.trim()).filter(Boolean);
  }

  return [];
}

// ── Email sending via Resend ──────────────────────────────────────────────

async function sendEmail(to, subject, html) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[digest] RESEND_API_KEY not set — skipping send');
    return false;
  }

  // Personalize unsubscribe link
  const personalizedHTML = html.replace(/\{\{EMAIL\}\}/g, encodeURIComponent(to));

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Hoops Intel <digest@hoopsintel.net>',
      to: [to],
      subject,
      html: personalizedHTML,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    console.error(`[digest] Resend error ${res.status} for ${to}: ${text}`);
    return false;
  }

  return true;
}

// ── Main ──────────────────────────────────────────────────────────────────

async function main() {
  console.log('[digest] Parsing pulseData.ts...');
  const data = parsePulseData();

  if (!data.pulseEdition) {
    console.error('[digest] Failed to parse pulseEdition — aborting');
    process.exit(1);
  }

  console.log(`[digest] Edition: ${data.pulseEdition.date} (${data.pulseEdition.edition})`);

  const html = generateEmailHTML(data);
  const subject = `Hoops Intel Daily Digest — ${data.pulseEdition.date}`;

  // Preview mode: print HTML to stdout and exit
  if (isPreview) {
    process.stdout.write(html);
    return;
  }

  // Check for Resend API key
  if (!process.env.RESEND_API_KEY) {
    console.log('[digest] RESEND_API_KEY not set — skipping email send');
    console.log('[digest] Use --preview to output the HTML, or set RESEND_API_KEY to send');
    return;
  }

  // Determine recipients
  let recipients;
  if (testEmail) {
    recipients = [testEmail];
    console.log(`[digest] Test mode — sending to ${testEmail}`);
  } else {
    recipients = await fetchSubscribers();
    if (recipients.length === 0) {
      console.log('[digest] No subscribers found — nothing to send');
      console.log('[digest] Set SUPABASE_URL + SUPABASE_SERVICE_KEY, or DIGEST_EMAILS env var');
      return;
    }
    console.log(`[digest] Sending to ${recipients.length} subscriber(s)`);
  }

  let sent = 0;
  let failed = 0;

  for (const email of recipients) {
    const ok = await sendEmail(email, subject, html);
    if (ok) {
      sent++;
      console.log(`[digest] Sent to ${email}`);
    } else {
      failed++;
    }
  }

  console.log(`[digest] Done — sent: ${sent}, failed: ${failed}`);

  if (failed > 0) {
    process.exit(1);
  }
}

main().catch(err => {
  console.error('[digest] Fatal error:', err);
  process.exit(1);
});
