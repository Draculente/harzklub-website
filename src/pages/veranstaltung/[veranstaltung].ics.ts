import type ics from "ics";
import { getOneVeranstaltungQuery } from "@lib/graphql/queries";
import { veranstaltungsQuery } from "@lib/graphql/queries";
import gqlClient from "@lib/utils/gql-client";
import {
  createEventAsync,
  icsAttributesFromVeranstaltung,
} from "@lib/utils/ics-helper";
import type { APIRoute } from "astro";

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

  const event: ics.EventAttributes =
    icsAttributesFromVeranstaltung(veranstaltung);

  try {
    const icsEvent = await createEventAsync(event);

    return {
      body: icsEvent,
    };
  } catch (error) {
    throw new Error("Error while creating ics file for: " + veranstaltung.slug);
  }
};
