import type ics from "ics";
import { getOneVeranstaltungQuery } from "@lib/graphql/queries";
import { veranstaltungsQuery } from "@lib/graphql/queries";
import gqlClient from "@lib/utils/gql-client";
import {
  createEventAsync,
  icsAttributesFromVeranstaltung,
} from "@lib/utils/ics-helper";
import type { APIRoute } from "astro";
import { Feed } from "feed";
import { getFileUrl } from "@lib/utils/helper";

export async function getStaticPaths() {
  return (await gqlClient.request(veranstaltungsQuery)).veranstaltung.map(
    (e) => {
      return {
        params: { veranstaltung: e.slug },
        props: e,
      };
    }
  );
}

export const get: APIRoute = async function get({ params, request }) {
  const { veranstaltung: veranstaltungen } = await gqlClient.request(
    getOneVeranstaltungQuery,
    {
      slug: params.veranstaltung ?? "",
    }
  );

  const veranstaltung = veranstaltungen[0];

  const url = `${import.meta.env.SITE}veranstaltung/${veranstaltung.slug}`;

  const feed = new Feed({
    title: `Harzklub Hohegeiss | ${veranstaltung.titel}`,
    description: veranstaltung.beschreibung ?? "Keine Beschreibung",
    id: url,
    link: url,
    language: "de", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: getFileUrl(veranstaltung.featured_image?.id),
    favicon: getFileUrl(veranstaltung.featured_image?.id),
    copyright: "All rights reserved, Harzklub Hohegeiss",
  });

  feed.addItem({
    title: veranstaltung.titel ?? "Kein Titel",
    id: veranstaltung.date_created,
    link: url,
    description: veranstaltung.beschreibung ?? "Keine Beschreibung",
    date: new Date(veranstaltung.date_created),
  });

  veranstaltung?.event_changes?.forEach((event) => {
    feed.addItem({
      title: "Veranstaltung geändert",
      id: event?.date_created,
      link: url,
      description:
        event?.info ?? "Keine Beschreibung, bitte schau auf der Website nach.",
      date: new Date(event?.date_updated ?? event?.date_created),
    });
  });

  try {
    return {
      type: "application/rss+xml",
      body: feed.rss2(),
    };
  } catch (error) {
    throw new Error("Error while creating ics file for: " + veranstaltung.slug);
  }
};
