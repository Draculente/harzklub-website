export const UNDER_CONSTRUCTION = "/im-aufbau";
export const DEFAULT_AUFGABEN_SECTION_LINK = UNDER_CONSTRUCTION;
export const MITMACHEN = UNDER_CONSTRUCTION;
export const IMPRESSUM = "/impressum";
export const DOWNLOADS = "/downloads";
export const ORG_LOGO_LINK = "https://harzklub.de/";
export const ERROR_PAGE = "/error";

export enum Seite {
  Startseite,
  Aktuelles,
  Heimatgruppe,
  Jugendgruppe,
  Wanderungen,
  DerHarz,
  UeberUns,
  Error,
  Impressum,
}

export default function l(seite: Seite): string {
  return pages.find((p) => p.page === seite)?.href ?? ERROR_PAGE;
}

export type SeitenInfo = {
  href: string;
  page: Seite;
  name: string;
  menu?: boolean;
};

export const pages: Array<SeitenInfo> = [
  { page: Seite.Impressum, href: IMPRESSUM, name: "Impressum" },
  { page: Seite.Error, href: ERROR_PAGE, name: "Error" },
  { page: Seite.Startseite, href: "/", name: "Startseite", menu: true },
  { page: Seite.Aktuelles, href: "/aktuelles", name: "Aktuelles", menu: true },
  {
    page: Seite.Heimatgruppe,
    href: UNDER_CONSTRUCTION,
    name: "Heimatgruppe",
    menu: true,
  },
  {
    page: Seite.Jugendgruppe,
    href: UNDER_CONSTRUCTION,
    name: "Jugendgruppe",
    menu: true,
  },
  {
    page: Seite.Wanderungen,
    href: UNDER_CONSTRUCTION,
    name: "Wanderungen",
    menu: true,
  },
  // { page: Seite.DerHarz, href: UNDER_CONSTRUCTION, "/de name: "Der Harz" },
  {
    page: Seite.UeberUns,
    href: UNDER_CONSTRUCTION,
    name: "Über uns",
    menu: true,
  },
];
