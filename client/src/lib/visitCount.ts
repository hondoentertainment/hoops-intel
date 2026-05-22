const KEY = "hi-visit-count";

export function incrementVisitCount(): number {
  try {
    const n = Number(localStorage.getItem(KEY) || "0") + 1;
    localStorage.setItem(KEY, String(n));
    return n;
  } catch {
    return 1;
  }
}

export function readVisitCount(): number {
  try {
    return Number(localStorage.getItem(KEY) || "0");
  } catch {
    return 0;
  }
}
