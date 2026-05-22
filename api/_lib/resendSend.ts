/** Minimal Resend helper for transactional mail from API routes. */

export async function sendResendEmail(opts: {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FORM_FROM_EMAIL ?? "Hoops Intel <onboarding@resend.dev>";
  if (!key) return false;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: Array.isArray(opts.to) ? opts.to : [opts.to],
      reply_to: opts.replyTo,
      subject: opts.subject,
      html: opts.html,
    }),
  });

  if (!res.ok) {
    console.warn("[resend]", res.status, await res.text().catch(() => ""));
    return false;
  }
  return true;
}
