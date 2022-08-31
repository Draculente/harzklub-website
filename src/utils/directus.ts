
import { Directus, ID, TypeMap } from "@directus/sdk";

enum Info {
    Info = "infos",
    NoInfo = "no_info"
}

type Html = string

export type Veranstaltung = {
    id: ID,
    titel: String,
    datum: Date,
    date_created: Date,
    ort: String,
    mehr_info: Info,
    beschreibung?: Html,
    bildergalerie?: Array<ID>
}

type Collections = {
    veranstaltung: Veranstaltung 
}

export const directus = new Directus<Collections>(import.meta.env.DIRECTUS_HOST);

