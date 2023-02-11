import { Directus, ID } from "@directus/sdk";
import type { Veranstaltung } from "src/data/veranstaltungen";

export type Html = string;

type Collections = {
  veranstaltung: Veranstaltung;
};

export const directus = new Directus<Collections>(
  import.meta.env.DIRECTUS_HOST
);

export const getFileUrl = (id: ID) => {
  return `${import.meta.env.DIRECTUS_HOST}/assets/${id}`;
};
