/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query startseiteQuery {\n    startseite {\n      title\n      subtitle\n      description\n      text_part_one\n      text_part_two\n      task_section_description\n      aufgaben {\n        id\n      }\n      wandern_title\n      wandern_text\n      wandern_description\n      wandern_link\n      tradition_description\n      tradition_title\n      tradition_text\n      heimat_link\n      jugend_title\n      jugend_subtitle\n      jugend_description\n      jugend_text\n      jugend_link\n      mitgliedschaft_title\n      mitgliedschaft_subtitle\n      mitgliedschaft_text\n    }\n  }\n": types.StartseiteQueryDocument,
    "\n  query aufgabenQuery {\n    aufgaben {\n      id\n      title\n      image {\n        id\n        description\n      }\n      description\n      link\n    }\n  }\n": types.AufgabenQueryDocument,
    "\n  query veranstaltungsQuery {\n    veranstaltung {\n      id\n      ort\n      slug\n      date_created\n      date_updated\n      beschreibung\n      duration\n      recurring\n      wiederholung\n      human_readable_interval\n      short_description\n      datum\n      titel\n      mehr_info\n      event_changes {\n        info\n        date_created\n      }\n      featured_image {\n        id\n        description\n      }\n      bildergalerie {\n        directus_files_id {\n          description\n          title\n          id\n          location\n        }\n      }\n    }\n  }\n": types.VeranstaltungsQueryDocument,
    "\n  query websiteMetaQuery {\n    meta {\n      title\n      description\n      favicon {\n        id\n        type\n      }\n      opengraph_image {\n        id\n        description\n      }\n    }\n  }\n": types.WebsiteMetaQueryDocument,
    "\n  query downloadsQuery {\n    downloads(filter: { status: { _eq: \"published\" } }) {\n      title\n      file {\n        id\n      }\n    }\n  }\n": types.DownloadsQueryDocument,
    "\n  query footerQuery {\n    footer {\n      copyright_text\n      footer_text\n      footer_links {\n        name\n        sorting\n        link\n      }\n      footer_social_links {\n        icon\n        link\n      }\n    }\n  }\n": types.FooterQueryDocument,
    "\n  query aktuellesQuery {\n    aktuelles {\n      text\n      subtitle\n      description\n      title\n    }\n  }\n": types.AktuellesQueryDocument,
    "\n  query impressumsQuery {\n    Impressum {\n      description\n      date_updated\n      text\n    }\n  }\n": types.ImpressumsQueryDocument,
    "\n  query getOneVeranstaltungQuery($slug: String!) {\n    veranstaltung(filter: { slug: { _eq: $slug } }) {\n      id\n      ort\n      date_created\n      date_updated\n      slug\n      beschreibung\n      datum\n      duration\n      recurring\n      event_changes {\n        info\n        date_created\n        user_created\n        user_updated\n        date_updated\n      }\n      wiederholung\n      titel\n      featured_image {\n        id\n        description\n      }\n      bildergalerie {\n        id\n      }\n    }\n  }\n": types.GetOneVeranstaltungQueryDocument,
    "\n  query featuredEventQuery {\n    featured_event {\n      event {\n        slug\n        datum\n        mehr_info\n        beschreibung\n        short_description\n        featured_image {\n          id\n          description\n        }\n        titel\n      }\n    }\n  }\n": types.FeaturedEventQueryDocument,
    "\n  query impressionsQuery {\n    impressions {\n      title\n      text\n      description\n      subtitle\n      bildergalerie {\n        directus_files_id {\n          description\n          title\n          id\n          location\n          metadata\n        }\n      }\n    }\n  }\n": types.ImpressionsQueryDocument,
    "\n  query groupPagesQuery {\n    group_page {\n      slug\n      title\n      description\n      subtitle\n      header_images {\n        directus_files_id {\n          id\n          description\n        }\n      }\n      gp_event {\n        veranstaltung {\n          titel\n          datum\n          featured_image {\n            id\n          }\n          slug\n          short_description\n          recurring\n          wiederholung\n        }\n      }\n      group_section {\n        title\n        description\n        bilder {\n          directus_files_id {\n            id\n            description\n          }\n        }\n      }\n    }\n  }\n": types.GroupPagesQueryDocument,
    "\n  query getMemberPageQuery {\n    member_page {\n      description\n      title\n      subtitle\n      member_option_heading\n      member_options {\n        name\n        price\n        description\n      }\n      member_benefits {\n        text\n      }\n      benefits_heading\n    }\n  }\n": types.GetMemberPageQueryDocument,
    "\n  query wanderungenQuery {\n     wanderung{\n      titel\n      id\n      strecke\n      schwierigkeitsgrad\n      natur\n      dauer\n      barrierefrei\n      date_created\n      date_updated\n      description\n      link\n      featured_image {\n        id\n        description\n      }\n      wander_step {\n        id\n        description\n        bilder {\n          directus_files_id {\n            id\n            description\n            title\n            location\n            metadata\n          }\n        }\n      }\n     }}\n     ": types.WanderungenQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query startseiteQuery {\n    startseite {\n      title\n      subtitle\n      description\n      text_part_one\n      text_part_two\n      task_section_description\n      aufgaben {\n        id\n      }\n      wandern_title\n      wandern_text\n      wandern_description\n      wandern_link\n      tradition_description\n      tradition_title\n      tradition_text\n      heimat_link\n      jugend_title\n      jugend_subtitle\n      jugend_description\n      jugend_text\n      jugend_link\n      mitgliedschaft_title\n      mitgliedschaft_subtitle\n      mitgliedschaft_text\n    }\n  }\n"): (typeof documents)["\n  query startseiteQuery {\n    startseite {\n      title\n      subtitle\n      description\n      text_part_one\n      text_part_two\n      task_section_description\n      aufgaben {\n        id\n      }\n      wandern_title\n      wandern_text\n      wandern_description\n      wandern_link\n      tradition_description\n      tradition_title\n      tradition_text\n      heimat_link\n      jugend_title\n      jugend_subtitle\n      jugend_description\n      jugend_text\n      jugend_link\n      mitgliedschaft_title\n      mitgliedschaft_subtitle\n      mitgliedschaft_text\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query aufgabenQuery {\n    aufgaben {\n      id\n      title\n      image {\n        id\n        description\n      }\n      description\n      link\n    }\n  }\n"): (typeof documents)["\n  query aufgabenQuery {\n    aufgaben {\n      id\n      title\n      image {\n        id\n        description\n      }\n      description\n      link\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query veranstaltungsQuery {\n    veranstaltung {\n      id\n      ort\n      slug\n      date_created\n      date_updated\n      beschreibung\n      duration\n      recurring\n      wiederholung\n      human_readable_interval\n      short_description\n      datum\n      titel\n      mehr_info\n      event_changes {\n        info\n        date_created\n      }\n      featured_image {\n        id\n        description\n      }\n      bildergalerie {\n        directus_files_id {\n          description\n          title\n          id\n          location\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query veranstaltungsQuery {\n    veranstaltung {\n      id\n      ort\n      slug\n      date_created\n      date_updated\n      beschreibung\n      duration\n      recurring\n      wiederholung\n      human_readable_interval\n      short_description\n      datum\n      titel\n      mehr_info\n      event_changes {\n        info\n        date_created\n      }\n      featured_image {\n        id\n        description\n      }\n      bildergalerie {\n        directus_files_id {\n          description\n          title\n          id\n          location\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query websiteMetaQuery {\n    meta {\n      title\n      description\n      favicon {\n        id\n        type\n      }\n      opengraph_image {\n        id\n        description\n      }\n    }\n  }\n"): (typeof documents)["\n  query websiteMetaQuery {\n    meta {\n      title\n      description\n      favicon {\n        id\n        type\n      }\n      opengraph_image {\n        id\n        description\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query downloadsQuery {\n    downloads(filter: { status: { _eq: \"published\" } }) {\n      title\n      file {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query downloadsQuery {\n    downloads(filter: { status: { _eq: \"published\" } }) {\n      title\n      file {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query footerQuery {\n    footer {\n      copyright_text\n      footer_text\n      footer_links {\n        name\n        sorting\n        link\n      }\n      footer_social_links {\n        icon\n        link\n      }\n    }\n  }\n"): (typeof documents)["\n  query footerQuery {\n    footer {\n      copyright_text\n      footer_text\n      footer_links {\n        name\n        sorting\n        link\n      }\n      footer_social_links {\n        icon\n        link\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query aktuellesQuery {\n    aktuelles {\n      text\n      subtitle\n      description\n      title\n    }\n  }\n"): (typeof documents)["\n  query aktuellesQuery {\n    aktuelles {\n      text\n      subtitle\n      description\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query impressumsQuery {\n    Impressum {\n      description\n      date_updated\n      text\n    }\n  }\n"): (typeof documents)["\n  query impressumsQuery {\n    Impressum {\n      description\n      date_updated\n      text\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getOneVeranstaltungQuery($slug: String!) {\n    veranstaltung(filter: { slug: { _eq: $slug } }) {\n      id\n      ort\n      date_created\n      date_updated\n      slug\n      beschreibung\n      datum\n      duration\n      recurring\n      event_changes {\n        info\n        date_created\n        user_created\n        user_updated\n        date_updated\n      }\n      wiederholung\n      titel\n      featured_image {\n        id\n        description\n      }\n      bildergalerie {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query getOneVeranstaltungQuery($slug: String!) {\n    veranstaltung(filter: { slug: { _eq: $slug } }) {\n      id\n      ort\n      date_created\n      date_updated\n      slug\n      beschreibung\n      datum\n      duration\n      recurring\n      event_changes {\n        info\n        date_created\n        user_created\n        user_updated\n        date_updated\n      }\n      wiederholung\n      titel\n      featured_image {\n        id\n        description\n      }\n      bildergalerie {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query featuredEventQuery {\n    featured_event {\n      event {\n        slug\n        datum\n        mehr_info\n        beschreibung\n        short_description\n        featured_image {\n          id\n          description\n        }\n        titel\n      }\n    }\n  }\n"): (typeof documents)["\n  query featuredEventQuery {\n    featured_event {\n      event {\n        slug\n        datum\n        mehr_info\n        beschreibung\n        short_description\n        featured_image {\n          id\n          description\n        }\n        titel\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query impressionsQuery {\n    impressions {\n      title\n      text\n      description\n      subtitle\n      bildergalerie {\n        directus_files_id {\n          description\n          title\n          id\n          location\n          metadata\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query impressionsQuery {\n    impressions {\n      title\n      text\n      description\n      subtitle\n      bildergalerie {\n        directus_files_id {\n          description\n          title\n          id\n          location\n          metadata\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query groupPagesQuery {\n    group_page {\n      slug\n      title\n      description\n      subtitle\n      header_images {\n        directus_files_id {\n          id\n          description\n        }\n      }\n      gp_event {\n        veranstaltung {\n          titel\n          datum\n          featured_image {\n            id\n          }\n          slug\n          short_description\n          recurring\n          wiederholung\n        }\n      }\n      group_section {\n        title\n        description\n        bilder {\n          directus_files_id {\n            id\n            description\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query groupPagesQuery {\n    group_page {\n      slug\n      title\n      description\n      subtitle\n      header_images {\n        directus_files_id {\n          id\n          description\n        }\n      }\n      gp_event {\n        veranstaltung {\n          titel\n          datum\n          featured_image {\n            id\n          }\n          slug\n          short_description\n          recurring\n          wiederholung\n        }\n      }\n      group_section {\n        title\n        description\n        bilder {\n          directus_files_id {\n            id\n            description\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getMemberPageQuery {\n    member_page {\n      description\n      title\n      subtitle\n      member_option_heading\n      member_options {\n        name\n        price\n        description\n      }\n      member_benefits {\n        text\n      }\n      benefits_heading\n    }\n  }\n"): (typeof documents)["\n  query getMemberPageQuery {\n    member_page {\n      description\n      title\n      subtitle\n      member_option_heading\n      member_options {\n        name\n        price\n        description\n      }\n      member_benefits {\n        text\n      }\n      benefits_heading\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query wanderungenQuery {\n     wanderung{\n      titel\n      id\n      strecke\n      schwierigkeitsgrad\n      natur\n      dauer\n      barrierefrei\n      date_created\n      date_updated\n      description\n      link\n      featured_image {\n        id\n        description\n      }\n      wander_step {\n        id\n        description\n        bilder {\n          directus_files_id {\n            id\n            description\n            title\n            location\n            metadata\n          }\n        }\n      }\n     }}\n     "): (typeof documents)["\n  query wanderungenQuery {\n     wanderung{\n      titel\n      id\n      strecke\n      schwierigkeitsgrad\n      natur\n      dauer\n      barrierefrei\n      date_created\n      date_updated\n      description\n      link\n      featured_image {\n        id\n        description\n      }\n      wander_step {\n        id\n        description\n        bilder {\n          directus_files_id {\n            id\n            description\n            title\n            location\n            metadata\n          }\n        }\n      }\n     }}\n     "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;