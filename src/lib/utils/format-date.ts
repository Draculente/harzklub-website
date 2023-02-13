export function formatDate(date: Date): string {
  return date.toLocaleDateString("de-DE", {
    month: "2-digit",
    day: "2-digit",
  });
}

//https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
