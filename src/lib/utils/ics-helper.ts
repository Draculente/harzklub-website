import type { Veranstaltung } from "@lib/gql/graphql";
import ics from "ics";
import { DateTime } from "luxon";

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

function convertTime(time: string): ics.DateArray {
  return ics.convertTimestampToArray(
    DateTime.fromISO(time).setZone("Europe/Berlin").toJSDate().getTime(),
    "utc"
  );
}

export function icsAttributesFromVeranstaltung(
  veranstaltung: Veranstaltung | any
): ics.EventAttributes {
  return {
    start: convertTime(veranstaltung.datum),
    calName: "Harzklub Hohegeiß",
    created: convertTime(veranstaltung.date_created),
    lastModified: convertTime(veranstaltung.date_updated),
    uid: `info+${veranstaltung.id}@harzklub-hohegeiss.de`,
    startOutputType: "utc",
    duration: { minutes: veranstaltung.duration ?? 30 },
    title: veranstaltung.titel ?? "Harzklub Hohegeiss Event",
    description: veranstaltung.short_description ?? "Wir freuen uns auf euch!",
    location: veranstaltung.ort ?? "Kein Ort vorhanden",
    url: `https://www.harzklub-hohegeiss.de/veranstaltung/${veranstaltung.slug}`,
    recurrenceRule: veranstaltung.wiederholung ?? undefined,
    busyStatus: "BUSY",
    organizer: {
      name: "Harzklub Hohegeiß",
      email: "info@harzklub-hohegeiss.de",
    },
  };
}
