export const getFileUrl = (id?: string): string | undefined => {
  if (!id) return undefined;
  return `${import.meta.env.DIRECTUS_HOST}/assets/${id}`;
};

export function addWeeks(date: Date, weeks: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + weeks * 7);
  return result;
}

export function getSchwierigkeit(schwierigkeit?: string) {
  switch (schwierigkeit) {
    case "easy":
      return "Genießer";
    case "medium":
      return "Wanderer";
    case "hard":
      return "Sportler";
    default:
      return "Wanderer";
  }
}

export function dauerToString(dauer?: number): string {
  if (dauer) {
    if (dauer < 2) {
      return "Spaziergang";
    } else if (dauer < 5) {
      return `Mehrstündig`;
    } else {
      return `Ganztägig`;
    }
  } else {
    return "Wanderung";
  }
}