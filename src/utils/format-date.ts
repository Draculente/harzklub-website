export function formatDate(date: Date): string {
  return date.toLocaleDateString("de-DE", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
