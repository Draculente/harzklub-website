import type { ID } from "@directus/sdk";
import slugify from "slugify";
import { directus, Html } from "src/utils/directus";
import { formatDate } from "src/utils/format-date";

enum Info {
  Info = "infos",
  NoInfo = "no_info",
}

export interface Veranstaltung extends Record<string, any> {
  id?: ID;
  titel?: string;
  datum?: Date;
  date_created?: Date;
  ort?: String;
  mehr_info?: Info;
  beschreibung?: Html;
  bildergalerie?: Array<ID>;
  slug?: string;
  formattedDate?: string;
  featured_image?: ID;
}

let veranstaltungen: Veranstaltung[] = [];

try {
  const res = await directus.items("veranstaltung").readByQuery();
  veranstaltungen =
    res.data?.map((e) => {
      return {
        ...e,
        slug: slugify(e?.titel ?? "error", {
          replacement: "-", // replace spaces with replacement character, defaults to `-`
          remove: undefined, // remove characters that match regex, defaults to `undefined`
          lower: true, // convert to lower case, defaults to `false`
          strict: false, // strip special characters except replacement, defaults to `false`
          locale: "de", // language code of the locale to use
          trim: true, // trim leading and trailing replacement chars, defaults to `true`
        }),
        formattedDate: formatDate(new Date(e?.datum ?? "1970")),
      };
    }) ?? [];
} catch (error) {
  console.error(error);
  throw new Error("Error while fetching veranstaltungen");
}

export default veranstaltungen;
