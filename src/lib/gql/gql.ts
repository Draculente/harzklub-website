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
    "\n  query startseiteQuery {\n    startseite {\n      title\n      subtitle\n      description\n      text_part_one\n      text_part_two\n      task_section_description\n      aufgaben {\n        id\n      }\n      wandern_title\n      wandern_text\n      wandern_description\n      tradition_description\n      tradition_title\n      tradition_text\n      jugend_title\n      jugend_subtitle\n      jugend_description\n      jugend_text\n      mitgliedschaft_title\n      mitgliedschaft_subtitle\n      mitgliedschaft_text\n    }\n  }\n": types.StartseiteQueryDocument,
    "\n  query aufgabenQuery {\n    aufgaben {\n      id\n      title\n      image {\n        id\n        description\n      }\n      description\n      link\n    }\n  }\n": types.AufgabenQueryDocument,
    "\n  query veranstaltungsQuery {\n    veranstaltung {\n      id\n      ort\n      slug\n      beschreibung\n      datum\n      titel\n      featured_image {\n        id\n        description\n      }\n      bildergalerie {\n        id\n      }\n    }\n  }\n": types.VeranstaltungsQueryDocument,
    "\n  query websiteMetaQuery {\n    meta {\n      title\n      description\n      favicon {\n        id\n        type\n      }\n      opengraph_image {\n        id\n        description\n      }\n    }\n  }\n": types.WebsiteMetaQueryDocument,
    "\n  query downloadsQuery {\n    downloads(filter: { status: { _eq: \"published\" } }) {\n      title\n      file {\n        id\n      }\n    }\n  }\n": types.DownloadsQueryDocument,
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
export function graphql(source: "\n  query startseiteQuery {\n    startseite {\n      title\n      subtitle\n      description\n      text_part_one\n      text_part_two\n      task_section_description\n      aufgaben {\n        id\n      }\n      wandern_title\n      wandern_text\n      wandern_description\n      tradition_description\n      tradition_title\n      tradition_text\n      jugend_title\n      jugend_subtitle\n      jugend_description\n      jugend_text\n      mitgliedschaft_title\n      mitgliedschaft_subtitle\n      mitgliedschaft_text\n    }\n  }\n"): (typeof documents)["\n  query startseiteQuery {\n    startseite {\n      title\n      subtitle\n      description\n      text_part_one\n      text_part_two\n      task_section_description\n      aufgaben {\n        id\n      }\n      wandern_title\n      wandern_text\n      wandern_description\n      tradition_description\n      tradition_title\n      tradition_text\n      jugend_title\n      jugend_subtitle\n      jugend_description\n      jugend_text\n      mitgliedschaft_title\n      mitgliedschaft_subtitle\n      mitgliedschaft_text\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query aufgabenQuery {\n    aufgaben {\n      id\n      title\n      image {\n        id\n        description\n      }\n      description\n      link\n    }\n  }\n"): (typeof documents)["\n  query aufgabenQuery {\n    aufgaben {\n      id\n      title\n      image {\n        id\n        description\n      }\n      description\n      link\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query veranstaltungsQuery {\n    veranstaltung {\n      id\n      ort\n      slug\n      beschreibung\n      datum\n      titel\n      featured_image {\n        id\n        description\n      }\n      bildergalerie {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query veranstaltungsQuery {\n    veranstaltung {\n      id\n      ort\n      slug\n      beschreibung\n      datum\n      titel\n      featured_image {\n        id\n        description\n      }\n      bildergalerie {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query websiteMetaQuery {\n    meta {\n      title\n      description\n      favicon {\n        id\n        type\n      }\n      opengraph_image {\n        id\n        description\n      }\n    }\n  }\n"): (typeof documents)["\n  query websiteMetaQuery {\n    meta {\n      title\n      description\n      favicon {\n        id\n        type\n      }\n      opengraph_image {\n        id\n        description\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query downloadsQuery {\n    downloads(filter: { status: { _eq: \"published\" } }) {\n      title\n      file {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query downloadsQuery {\n    downloads(filter: { status: { _eq: \"published\" } }) {\n      title\n      file {\n        id\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;