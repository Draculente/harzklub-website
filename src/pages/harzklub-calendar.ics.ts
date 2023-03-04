import { veranstaltungsQuery } from "@lib/graphql/queries";
import gqlClient from "@lib/utils/gql-client";
import {
  createEventsAsync,
  icsAttributesFromVeranstaltung,
} from "@lib/utils/ics-helper";
import type { APIRoute } from "astro";
import type ics from "ics";
import sanitizeHtml from "sanitize-html";

export const get: APIRoute = async function get({ params, request }) {
  const { veranstaltung: veranstaltungen } = await gqlClient.request(
    veranstaltungsQuery
  );

  const events: ics.EventAttributes[] = veranstaltungen.map(
    icsAttributesFromVeranstaltung
  );

  try {
    const icsFile = await createEventsAsync(events);

    return {
      body: icsFile,
    };
  } catch (error) {
    throw new Error("Error while creating complete ics file.");
  }
};
