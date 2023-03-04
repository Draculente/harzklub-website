import type { Veranstaltung } from "@lib/gql/graphql";
import ics from "ics";
import sanitizeHtml from "sanitize-html";

export function createEventAsync(e: ics.EventAttributes): Promise<string> {
  return new Promise((resolve, reject) => {
    ics.createEvent(e, (error, value) => {
      if (error) {
        reject(error);
      }
      resolve(value);
    });
  });
}

export function createEventsAsync(e: ics.EventAttributes[]): Promise<string> {
  return new Promise((resolve, reject) => {
    ics.createEvents(e, (error, value) => {
      if (error) {
        reject(error);
      }
      resolve(value);
    });
  });
}

export function icsAttributesFromVeranstaltung(
  veranstaltung: Veranstaltung | any
): ics.EventAttributes {
  return {
    start: ics.convertTimestampToArray(veranstaltung.datum, "local"),
    duration: { minutes: veranstaltung.duration ?? 30 },
    title: veranstaltung.titel ?? "Harzklub Hohegeiss Event",
    description: sanitizeHtml(
      veranstaltung.beschreibung || "Wir freuen uns auf euch!",
      {
        allowedTags: [],
      }
    ),
    location: veranstaltung.ort ?? "Kein Ort vorhanden",
    url: `https://www.harzklub-hohegeiss.de/veranstaltung/${veranstaltung.slug}`,
    recurrenceRule: veranstaltung.recurring
      ? veranstaltung.wiederholung ?? undefined
      : undefined,
    busyStatus: "BUSY",
    organizer: {
      name: "Harzklub Hohegeiß",
      email: "info@harzklub-hohegeiss.de",
    },
  };
}
