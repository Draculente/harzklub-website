export const getFileUrl = (id?: string): string | undefined => {
  if (!id) return undefined;
  return `${import.meta.env.DIRECTUS_HOST}/assets/${id}`;
};

export function addWeeks(date: Date, weeks: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + weeks * 7);
  return result;
}
