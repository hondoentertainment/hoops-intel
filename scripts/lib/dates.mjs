// Shared date helpers for all generation scripts.
// Supports GENERATION_DATE / HOOPS_EDITION_DATE (YYYY-MM-DD) for backfill.
// Calendar math stays on the Pacific publication day. Formatting a PT
// wall-clock Date with toISOString() rolls the day forward after 17:00 PT.
export { toESPNDate, toISODate, toDisplayDate } from "./daily-dates.mjs";
