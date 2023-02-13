export const getFileUrl = (id?: string): string | undefined => {
  if (!id) return undefined;
  return `${import.meta.env.DIRECTUS_HOST}/assets/${id}`;
};
