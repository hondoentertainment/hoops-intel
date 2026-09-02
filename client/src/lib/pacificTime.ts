/** Pacific wall-clock helpers. Actions crons are fixed UTC; labels must follow DST. */

export const PACIFIC_TZ = "America/Los_Angeles";

/** `daily-update.yml` cron `0 13 * * *` — 5:00 AM PST / 6:00 AM PDT. */
export const EDITION_CRON_UTC_HOUR = 13;
export const EDITION_PUBLISH_MINUTE = 3;

export function formatPacificTime(date: Date, includeMinutes = true): string {
  const time = date.toLocaleTimeString("en-US", {
    timeZone: PACIFIC_TZ,
    hour: "numeric",
    ...(includeMinutes ? { minute: "2-digit" as const } : {}),
  });
  return `${time} PT`;
}

/** Instant the morning edition is treated as published on `now`'s UTC calendar day. */
export function editionPublishAt(now = new Date()): Date {
  return new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      EDITION_CRON_UTC_HOUR,
      EDITION_PUBLISH_MINUTE,
      0,
    ),
  );
}

/** e.g. "6:03 AM PT" during PDT, "5:03 AM PT" during PST. */
export function editionPublishLabel(now = new Date()): string {
  return formatPacificTime(editionPublishAt(now));
}

/** e.g. "6 AM PT" during PDT — digest/edition hour without minutes. */
export function editionHourLabel(now = new Date()): string {
  const at = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), EDITION_CRON_UTC_HOUR, 0, 0),
  );
  return formatPacificTime(at, false);
}
