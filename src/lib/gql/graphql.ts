/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** ISO8601 Date values */
  Date: any;
  /** BigInt value */
  GraphQLBigInt: any;
  /** GeoJSON value */
  GraphQLGeoJSON: any;
  /** A Float or a String */
  GraphQLStringOrFloat: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Impressum = {
  __typename?: 'Impressum';
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** Wenn leer gelassen wird der default Eintrag aus "meta" genommen. Sollte nicht länger als zwei Sätze und 155 Zeichen sein. Wird nicht im Design angezeigt, sondern ist nur ein Meta-Information für Google und Co */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Sinn des Impressums ist es klar erkenntlich zu machen, wer der oder die Verantwortlichen für die Inhalte einer Website sind. Es ist gesetzlich vorgegeben, welche Informationen vorhanden sein müssen. Informiere dich also gut, bevor du hier Änderungen vornimmst! */
  text?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  create_wegeschaden_item?: Maybe<Wegeschaden>;
  create_wegeschaden_items: Array<Wegeschaden>;
};


export type MutationCreate_Wegeschaden_ItemArgs = {
  data: Create_Wegeschaden_Input;
};


export type MutationCreate_Wegeschaden_ItemsArgs = {
  data?: InputMaybe<Array<Create_Wegeschaden_Input>>;
  filter?: InputMaybe<Wegeschaden_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  Impressum?: Maybe<Impressum>;
  aktuelles?: Maybe<Aktuelles>;
  aufgaben: Array<Aufgaben>;
  aufgaben_aggregated: Array<Aufgaben_Aggregated>;
  aufgaben_by_id?: Maybe<Aufgaben>;
  der_harz: Array<Der_Harz>;
  der_harz_aggregated: Array<Der_Harz_Aggregated>;
  der_harz_by_id?: Maybe<Der_Harz>;
  downloads: Array<Downloads>;
  downloads_aggregated: Array<Downloads_Aggregated>;
  downloads_by_id?: Maybe<Downloads>;
  event_changes: Array<Event_Changes>;
  event_changes_aggregated: Array<Event_Changes_Aggregated>;
  event_changes_by_id?: Maybe<Event_Changes>;
  featured_event?: Maybe<Featured_Event>;
  footer?: Maybe<Footer>;
  footer_link: Array<Footer_Link>;
  footer_link_aggregated: Array<Footer_Link_Aggregated>;
  footer_link_by_id?: Maybe<Footer_Link>;
  footer_social_link: Array<Footer_Social_Link>;
  footer_social_link_aggregated: Array<Footer_Social_Link_Aggregated>;
  footer_social_link_by_id?: Maybe<Footer_Social_Link>;
  group_page: Array<Group_Page>;
  group_page_aggregated: Array<Group_Page_Aggregated>;
  group_page_by_id?: Maybe<Group_Page>;
  group_page_veranstaltung: Array<Group_Page_Veranstaltung>;
  group_page_veranstaltung_aggregated: Array<Group_Page_Veranstaltung_Aggregated>;
  group_page_veranstaltung_by_id?: Maybe<Group_Page_Veranstaltung>;
  group_section: Array<Group_Section>;
  group_section_aggregated: Array<Group_Section_Aggregated>;
  group_section_by_id?: Maybe<Group_Section>;
  group_section_files: Array<Group_Section_Files>;
  group_section_files_aggregated: Array<Group_Section_Files_Aggregated>;
  group_section_files_by_id?: Maybe<Group_Section_Files>;
  impressions?: Maybe<Impressions>;
  impressions_files: Array<Impressions_Files>;
  impressions_files_aggregated: Array<Impressions_Files_Aggregated>;
  impressions_files_by_id?: Maybe<Impressions_Files>;
  meta?: Maybe<Meta>;
  presse: Array<Presse>;
  presse_aggregated: Array<Presse_Aggregated>;
  presse_by_id?: Maybe<Presse>;
  startseite?: Maybe<Startseite>;
  startseite_aufgaben: Array<Startseite_Aufgaben>;
  startseite_aufgaben_aggregated: Array<Startseite_Aufgaben_Aggregated>;
  startseite_aufgaben_by_id?: Maybe<Startseite_Aufgaben>;
  veranstaltung: Array<Veranstaltung>;
  veranstaltung_aggregated: Array<Veranstaltung_Aggregated>;
  veranstaltung_by_id?: Maybe<Veranstaltung>;
  veranstaltung_files: Array<Veranstaltung_Files>;
  veranstaltung_files_aggregated: Array<Veranstaltung_Files_Aggregated>;
  veranstaltung_files_by_id?: Maybe<Veranstaltung_Files>;
  wander_step: Array<Wander_Step>;
  wander_step_aggregated: Array<Wander_Step_Aggregated>;
  wander_step_by_id?: Maybe<Wander_Step>;
  wander_step_files: Array<Wander_Step_Files>;
  wander_step_files_aggregated: Array<Wander_Step_Files_Aggregated>;
  wander_step_files_by_id?: Maybe<Wander_Step_Files>;
  wanderung: Array<Wanderung>;
  wanderung_aggregated: Array<Wanderung_Aggregated>;
  wanderung_by_id?: Maybe<Wanderung>;
  wegeschaden: Array<Wegeschaden>;
  wegeschaden_aggregated: Array<Wegeschaden_Aggregated>;
  wegeschaden_by_id?: Maybe<Wegeschaden>;
};


export type QueryAufgabenArgs = {
  filter?: InputMaybe<Aufgaben_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAufgaben_AggregatedArgs = {
  filter?: InputMaybe<Aufgaben_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAufgaben_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryDer_HarzArgs = {
  filter?: InputMaybe<Der_Harz_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryDer_Harz_AggregatedArgs = {
  filter?: InputMaybe<Der_Harz_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryDer_Harz_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryDownloadsArgs = {
  filter?: InputMaybe<Downloads_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryDownloads_AggregatedArgs = {
  filter?: InputMaybe<Downloads_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryDownloads_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryEvent_ChangesArgs = {
  filter?: InputMaybe<Event_Changes_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEvent_Changes_AggregatedArgs = {
  filter?: InputMaybe<Event_Changes_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEvent_Changes_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryFooter_LinkArgs = {
  filter?: InputMaybe<Footer_Link_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFooter_Link_AggregatedArgs = {
  filter?: InputMaybe<Footer_Link_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFooter_Link_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryFooter_Social_LinkArgs = {
  filter?: InputMaybe<Footer_Social_Link_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFooter_Social_Link_AggregatedArgs = {
  filter?: InputMaybe<Footer_Social_Link_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFooter_Social_Link_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryGroup_PageArgs = {
  filter?: InputMaybe<Group_Page_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGroup_Page_AggregatedArgs = {
  filter?: InputMaybe<Group_Page_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGroup_Page_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryGroup_Page_VeranstaltungArgs = {
  filter?: InputMaybe<Group_Page_Veranstaltung_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGroup_Page_Veranstaltung_AggregatedArgs = {
  filter?: InputMaybe<Group_Page_Veranstaltung_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGroup_Page_Veranstaltung_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryGroup_SectionArgs = {
  filter?: InputMaybe<Group_Section_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGroup_Section_AggregatedArgs = {
  filter?: InputMaybe<Group_Section_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGroup_Section_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryGroup_Section_FilesArgs = {
  filter?: InputMaybe<Group_Section_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGroup_Section_Files_AggregatedArgs = {
  filter?: InputMaybe<Group_Section_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGroup_Section_Files_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryImpressions_FilesArgs = {
  filter?: InputMaybe<Impressions_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryImpressions_Files_AggregatedArgs = {
  filter?: InputMaybe<Impressions_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryImpressions_Files_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryPresseArgs = {
  filter?: InputMaybe<Presse_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPresse_AggregatedArgs = {
  filter?: InputMaybe<Presse_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPresse_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryStartseite_AufgabenArgs = {
  filter?: InputMaybe<Startseite_Aufgaben_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStartseite_Aufgaben_AggregatedArgs = {
  filter?: InputMaybe<Startseite_Aufgaben_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStartseite_Aufgaben_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryVeranstaltungArgs = {
  filter?: InputMaybe<Veranstaltung_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryVeranstaltung_AggregatedArgs = {
  filter?: InputMaybe<Veranstaltung_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryVeranstaltung_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryVeranstaltung_FilesArgs = {
  filter?: InputMaybe<Veranstaltung_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryVeranstaltung_Files_AggregatedArgs = {
  filter?: InputMaybe<Veranstaltung_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryVeranstaltung_Files_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryWander_StepArgs = {
  filter?: InputMaybe<Wander_Step_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWander_Step_AggregatedArgs = {
  filter?: InputMaybe<Wander_Step_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWander_Step_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryWander_Step_FilesArgs = {
  filter?: InputMaybe<Wander_Step_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWander_Step_Files_AggregatedArgs = {
  filter?: InputMaybe<Wander_Step_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWander_Step_Files_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryWanderungArgs = {
  filter?: InputMaybe<Wanderung_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWanderung_AggregatedArgs = {
  filter?: InputMaybe<Wanderung_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWanderung_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryWegeschadenArgs = {
  filter?: InputMaybe<Wegeschaden_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWegeschaden_AggregatedArgs = {
  filter?: InputMaybe<Wegeschaden_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWegeschaden_By_IdArgs = {
  id: Scalars['ID'];
};

export type Aktuelles = {
  __typename?: 'aktuelles';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** Die Meta-Beschreibung für Google & Co. Sollte nicht länger als zwei Sätze und 155 Zeichen sein. */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  subtitle?: Maybe<Scalars['String']>;
  /** Der Text, der unter der Überschrift zu sehen ist. */
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type Aufgaben = {
  __typename?: 'aufgaben';
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Directus_Files>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type AufgabenImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Aufgaben_Aggregated = {
  __typename?: 'aufgaben_aggregated';
  avg?: Maybe<Aufgaben_Aggregated_Fields>;
  avgDistinct?: Maybe<Aufgaben_Aggregated_Fields>;
  count?: Maybe<Aufgaben_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Aufgaben_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Aufgaben_Aggregated_Fields>;
  min?: Maybe<Aufgaben_Aggregated_Fields>;
  sum?: Maybe<Aufgaben_Aggregated_Fields>;
  sumDistinct?: Maybe<Aufgaben_Aggregated_Fields>;
};

export type Aufgaben_Aggregated_Count = {
  __typename?: 'aufgaben_aggregated_count';
  date_updated?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
};

export type Aufgaben_Aggregated_Fields = {
  __typename?: 'aufgaben_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Aufgaben_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Aufgaben_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Aufgaben_Filter>>>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  link?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']>;
};

export type Create_Wegeschaden_Input = {
  beschreibung?: InputMaybe<Scalars['String']>;
  bild?: InputMaybe<Scalars['String']>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
  geloest?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  ort?: InputMaybe<Scalars['GraphQLGeoJSON']>;
  sort?: InputMaybe<Scalars['Int']>;
  user_updated?: InputMaybe<Scalars['String']>;
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Der_Harz = {
  __typename?: 'der_harz';
  body?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  featured_image?: Maybe<Directus_Files>;
  id: Scalars['ID'];
  schlagwoerter?: Maybe<Scalars['JSON']>;
  schlagwoerter_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  titel?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type Der_HarzFeatured_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Der_Harz_Aggregated = {
  __typename?: 'der_harz_aggregated';
  avg?: Maybe<Der_Harz_Aggregated_Fields>;
  avgDistinct?: Maybe<Der_Harz_Aggregated_Fields>;
  count?: Maybe<Der_Harz_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Der_Harz_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Der_Harz_Aggregated_Fields>;
  min?: Maybe<Der_Harz_Aggregated_Fields>;
  sum?: Maybe<Der_Harz_Aggregated_Fields>;
  sumDistinct?: Maybe<Der_Harz_Aggregated_Fields>;
};

export type Der_Harz_Aggregated_Count = {
  __typename?: 'der_harz_aggregated_count';
  body?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  featured_image?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  schlagwoerter?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  titel?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Der_Harz_Aggregated_Fields = {
  __typename?: 'der_harz_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Der_Harz_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Der_Harz_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Der_Harz_Filter>>>;
  body?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  featured_image?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  schlagwoerter?: InputMaybe<String_Filter_Operators>;
  schlagwoerter_func?: InputMaybe<Count_Function_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  titel?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: Maybe<Scalars['GraphQLBigInt']>;
  folder?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Scalars['String']>;
  modified_on?: Maybe<Scalars['Date']>;
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uploaded_by?: Maybe<Scalars['String']>;
  uploaded_on?: Maybe<Scalars['Date']>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<Number_Filter_Operators>;
  folder?: InputMaybe<String_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<String_Filter_Operators>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<String_Filter_Operators>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Downloads = {
  __typename?: 'downloads';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  file?: Maybe<Directus_Files>;
  id: Scalars['ID'];
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type DownloadsFileArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Downloads_Aggregated = {
  __typename?: 'downloads_aggregated';
  count?: Maybe<Downloads_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Downloads_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
};

export type Downloads_Aggregated_Count = {
  __typename?: 'downloads_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  file?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Downloads_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Downloads_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Downloads_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  file?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Event_Changes = {
  __typename?: 'event_changes';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  event?: Maybe<Veranstaltung>;
  id: Scalars['ID'];
  info?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type Event_ChangesEventArgs = {
  filter?: InputMaybe<Veranstaltung_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Event_Changes_Aggregated = {
  __typename?: 'event_changes_aggregated';
  avg?: Maybe<Event_Changes_Aggregated_Fields>;
  avgDistinct?: Maybe<Event_Changes_Aggregated_Fields>;
  count?: Maybe<Event_Changes_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Event_Changes_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Event_Changes_Aggregated_Fields>;
  min?: Maybe<Event_Changes_Aggregated_Fields>;
  sum?: Maybe<Event_Changes_Aggregated_Fields>;
  sumDistinct?: Maybe<Event_Changes_Aggregated_Fields>;
};

export type Event_Changes_Aggregated_Count = {
  __typename?: 'event_changes_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  event?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  info?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Event_Changes_Aggregated_Fields = {
  __typename?: 'event_changes_aggregated_fields';
  event?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Event_Changes_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Event_Changes_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Event_Changes_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  event?: InputMaybe<Veranstaltung_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  info?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Featured_Event = {
  __typename?: 'featured_event';
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  event?: Maybe<Veranstaltung>;
  id: Scalars['ID'];
  user_updated?: Maybe<Scalars['String']>;
};


export type Featured_EventEventArgs = {
  filter?: InputMaybe<Veranstaltung_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Footer = {
  __typename?: 'footer';
  copyright_text?: Maybe<Scalars['String']>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  footer_links?: Maybe<Array<Maybe<Footer_Link>>>;
  footer_links_func?: Maybe<Count_Functions>;
  footer_social_links?: Maybe<Array<Maybe<Footer_Social_Link>>>;
  footer_social_links_func?: Maybe<Count_Functions>;
  /** Der Text, der im Footer unter dem Logo angezeigt wird. */
  footer_text?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type FooterFooter_LinksArgs = {
  filter?: InputMaybe<Footer_Link_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type FooterFooter_Social_LinksArgs = {
  filter?: InputMaybe<Footer_Social_Link_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Footer_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Footer_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Footer_Filter>>>;
  copyright_text?: InputMaybe<String_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  footer_links?: InputMaybe<Footer_Link_Filter>;
  footer_links_func?: InputMaybe<Count_Function_Filter_Operators>;
  footer_social_links?: InputMaybe<Footer_Social_Link_Filter>;
  footer_social_links_func?: InputMaybe<Count_Function_Filter_Operators>;
  footer_text?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Footer_Link = {
  __typename?: 'footer_link';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  footer?: Maybe<Footer>;
  id: Scalars['ID'];
  /** Der Link zur Seite auf den der Eintrag verweisen soll. Am besten relativ. */
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** Der Wert nachdem die Links sortiert werden. Je größer die Zahl, desto weiter hinten der Link. */
  sorting?: Maybe<Scalars['Int']>;
};


export type Footer_LinkFooterArgs = {
  filter?: InputMaybe<Footer_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Footer_Link_Aggregated = {
  __typename?: 'footer_link_aggregated';
  avg?: Maybe<Footer_Link_Aggregated_Fields>;
  avgDistinct?: Maybe<Footer_Link_Aggregated_Fields>;
  count?: Maybe<Footer_Link_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Footer_Link_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Footer_Link_Aggregated_Fields>;
  min?: Maybe<Footer_Link_Aggregated_Fields>;
  sum?: Maybe<Footer_Link_Aggregated_Fields>;
  sumDistinct?: Maybe<Footer_Link_Aggregated_Fields>;
};

export type Footer_Link_Aggregated_Count = {
  __typename?: 'footer_link_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  footer?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  /** Der Link zur Seite auf den der Eintrag verweisen soll. Am besten relativ. */
  link?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  /** Der Wert nachdem die Links sortiert werden. Je größer die Zahl, desto weiter hinten der Link. */
  sorting?: Maybe<Scalars['Int']>;
};

export type Footer_Link_Aggregated_Fields = {
  __typename?: 'footer_link_aggregated_fields';
  footer?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  /** Der Wert nachdem die Links sortiert werden. Je größer die Zahl, desto weiter hinten der Link. */
  sorting?: Maybe<Scalars['Float']>;
};

export type Footer_Link_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Footer_Link_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Footer_Link_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  footer?: InputMaybe<Footer_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  link?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  sorting?: InputMaybe<Number_Filter_Operators>;
};

export type Footer_Social_Link = {
  __typename?: 'footer_social_link';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  footer?: Maybe<Footer>;
  /** Das Icon. Als Iconsfont wird Remixicons genutzt: https://remixicon.com/ . Wenn ein Icon in der Liste fehlt, kannst du den Namen aus Remixicons kopieren (der Name, der hinter hinter dem = steht, z.B. "ri-mastodon-fill") */
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Der Link auf den das Icon verweisen soll. */
  link?: Maybe<Scalars['String']>;
};


export type Footer_Social_LinkFooterArgs = {
  filter?: InputMaybe<Footer_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Footer_Social_Link_Aggregated = {
  __typename?: 'footer_social_link_aggregated';
  avg?: Maybe<Footer_Social_Link_Aggregated_Fields>;
  avgDistinct?: Maybe<Footer_Social_Link_Aggregated_Fields>;
  count?: Maybe<Footer_Social_Link_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Footer_Social_Link_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Footer_Social_Link_Aggregated_Fields>;
  min?: Maybe<Footer_Social_Link_Aggregated_Fields>;
  sum?: Maybe<Footer_Social_Link_Aggregated_Fields>;
  sumDistinct?: Maybe<Footer_Social_Link_Aggregated_Fields>;
};

export type Footer_Social_Link_Aggregated_Count = {
  __typename?: 'footer_social_link_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  footer?: Maybe<Scalars['Int']>;
  /** Das Icon. Als Iconsfont wird Remixicons genutzt: https://remixicon.com/ . Wenn ein Icon in der Liste fehlt, kannst du den Namen aus Remixicons kopieren (der Name, der hinter hinter dem = steht, z.B. "ri-mastodon-fill") */
  icon?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  /** Der Link auf den das Icon verweisen soll. */
  link?: Maybe<Scalars['Int']>;
};

export type Footer_Social_Link_Aggregated_Fields = {
  __typename?: 'footer_social_link_aggregated_fields';
  footer?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Footer_Social_Link_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Footer_Social_Link_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Footer_Social_Link_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  footer?: InputMaybe<Footer_Filter>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  link?: InputMaybe<String_Filter_Operators>;
};

export type Geometry_Filter_Operators = {
  _eq?: InputMaybe<Scalars['GraphQLGeoJSON']>;
  _intersects?: InputMaybe<Scalars['GraphQLGeoJSON']>;
  _intersects_bbox?: InputMaybe<Scalars['GraphQLGeoJSON']>;
  _neq?: InputMaybe<Scalars['GraphQLGeoJSON']>;
  _nintersects?: InputMaybe<Scalars['GraphQLGeoJSON']>;
  _nintersects_bbox?: InputMaybe<Scalars['GraphQLGeoJSON']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Group_Page = {
  __typename?: 'group_page';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** Die Meta-Description für Google und Co */
  description?: Maybe<Scalars['String']>;
  events?: Maybe<Array<Maybe<Group_Page_Veranstaltung>>>;
  events_func?: Maybe<Count_Functions>;
  group_section?: Maybe<Array<Maybe<Group_Section>>>;
  group_section_func?: Maybe<Count_Functions>;
  id: Scalars['ID'];
  slug?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type Group_PageEventsArgs = {
  filter?: InputMaybe<Group_Page_Veranstaltung_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Group_PageGroup_SectionArgs = {
  filter?: InputMaybe<Group_Section_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Group_Page_Aggregated = {
  __typename?: 'group_page_aggregated';
  avg?: Maybe<Group_Page_Aggregated_Fields>;
  avgDistinct?: Maybe<Group_Page_Aggregated_Fields>;
  count?: Maybe<Group_Page_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Group_Page_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Group_Page_Aggregated_Fields>;
  min?: Maybe<Group_Page_Aggregated_Fields>;
  sum?: Maybe<Group_Page_Aggregated_Fields>;
  sumDistinct?: Maybe<Group_Page_Aggregated_Fields>;
};

export type Group_Page_Aggregated_Count = {
  __typename?: 'group_page_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  /** Die Meta-Description für Google und Co */
  description?: Maybe<Scalars['Int']>;
  events?: Maybe<Scalars['Int']>;
  group_section?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Group_Page_Aggregated_Fields = {
  __typename?: 'group_page_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Group_Page_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Group_Page_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Group_Page_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  events?: InputMaybe<Group_Page_Veranstaltung_Filter>;
  events_func?: InputMaybe<Count_Function_Filter_Operators>;
  group_section?: InputMaybe<Group_Section_Filter>;
  group_section_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  subtitle?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Group_Page_Veranstaltung = {
  __typename?: 'group_page_veranstaltung';
  group_page_id?: Maybe<Group_Page>;
  id: Scalars['ID'];
  veranstaltung_id?: Maybe<Veranstaltung>;
};


export type Group_Page_VeranstaltungGroup_Page_IdArgs = {
  filter?: InputMaybe<Group_Page_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Group_Page_VeranstaltungVeranstaltung_IdArgs = {
  filter?: InputMaybe<Veranstaltung_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Group_Page_Veranstaltung_Aggregated = {
  __typename?: 'group_page_veranstaltung_aggregated';
  avg?: Maybe<Group_Page_Veranstaltung_Aggregated_Fields>;
  avgDistinct?: Maybe<Group_Page_Veranstaltung_Aggregated_Fields>;
  count?: Maybe<Group_Page_Veranstaltung_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Group_Page_Veranstaltung_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Group_Page_Veranstaltung_Aggregated_Fields>;
  min?: Maybe<Group_Page_Veranstaltung_Aggregated_Fields>;
  sum?: Maybe<Group_Page_Veranstaltung_Aggregated_Fields>;
  sumDistinct?: Maybe<Group_Page_Veranstaltung_Aggregated_Fields>;
};

export type Group_Page_Veranstaltung_Aggregated_Count = {
  __typename?: 'group_page_veranstaltung_aggregated_count';
  group_page_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  veranstaltung_id?: Maybe<Scalars['Int']>;
};

export type Group_Page_Veranstaltung_Aggregated_Fields = {
  __typename?: 'group_page_veranstaltung_aggregated_fields';
  group_page_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  veranstaltung_id?: Maybe<Scalars['Float']>;
};

export type Group_Page_Veranstaltung_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Group_Page_Veranstaltung_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Group_Page_Veranstaltung_Filter>>>;
  group_page_id?: InputMaybe<Group_Page_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  veranstaltung_id?: InputMaybe<Veranstaltung_Filter>;
};

export type Group_Section = {
  __typename?: 'group_section';
  bilder?: Maybe<Array<Maybe<Group_Section_Files>>>;
  bilder_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']>;
  group_page?: Maybe<Group_Page>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type Group_SectionBilderArgs = {
  filter?: InputMaybe<Group_Section_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Group_SectionGroup_PageArgs = {
  filter?: InputMaybe<Group_Page_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Group_Section_Aggregated = {
  __typename?: 'group_section_aggregated';
  avg?: Maybe<Group_Section_Aggregated_Fields>;
  avgDistinct?: Maybe<Group_Section_Aggregated_Fields>;
  count?: Maybe<Group_Section_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Group_Section_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Group_Section_Aggregated_Fields>;
  min?: Maybe<Group_Section_Aggregated_Fields>;
  sum?: Maybe<Group_Section_Aggregated_Fields>;
  sumDistinct?: Maybe<Group_Section_Aggregated_Fields>;
};

export type Group_Section_Aggregated_Count = {
  __typename?: 'group_section_aggregated_count';
  /** Bitte am besten 3 Bilder! */
  bilder?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  group_page?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Group_Section_Aggregated_Fields = {
  __typename?: 'group_section_aggregated_fields';
  group_page?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Group_Section_Files = {
  __typename?: 'group_section_files';
  directus_files_id?: Maybe<Directus_Files>;
  group_section_id?: Maybe<Group_Section>;
  id: Scalars['ID'];
};


export type Group_Section_FilesDirectus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Group_Section_FilesGroup_Section_IdArgs = {
  filter?: InputMaybe<Group_Section_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Group_Section_Files_Aggregated = {
  __typename?: 'group_section_files_aggregated';
  avg?: Maybe<Group_Section_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<Group_Section_Files_Aggregated_Fields>;
  count?: Maybe<Group_Section_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Group_Section_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Group_Section_Files_Aggregated_Fields>;
  min?: Maybe<Group_Section_Files_Aggregated_Fields>;
  sum?: Maybe<Group_Section_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<Group_Section_Files_Aggregated_Fields>;
};

export type Group_Section_Files_Aggregated_Count = {
  __typename?: 'group_section_files_aggregated_count';
  directus_files_id?: Maybe<Scalars['Int']>;
  group_section_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Group_Section_Files_Aggregated_Fields = {
  __typename?: 'group_section_files_aggregated_fields';
  group_section_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Group_Section_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Group_Section_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Group_Section_Files_Filter>>>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  group_section_id?: InputMaybe<Group_Section_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Group_Section_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Group_Section_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Group_Section_Filter>>>;
  bilder?: InputMaybe<Group_Section_Files_Filter>;
  bilder_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  group_page?: InputMaybe<Group_Page_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Impressions = {
  __typename?: 'impressions';
  bildergalerie?: Maybe<Array<Maybe<Impressions_Files>>>;
  bildergalerie_func?: Maybe<Count_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** Die Meta-Beschreibung für Google & Co. */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  subtitle?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type ImpressionsBildergalerieArgs = {
  filter?: InputMaybe<Impressions_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Impressions_Files = {
  __typename?: 'impressions_files';
  directus_files_id?: Maybe<Directus_Files>;
  id: Scalars['ID'];
  impressions_id?: Maybe<Impressions>;
};


export type Impressions_FilesDirectus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Impressions_FilesImpressions_IdArgs = {
  filter?: InputMaybe<Impressions_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Impressions_Files_Aggregated = {
  __typename?: 'impressions_files_aggregated';
  avg?: Maybe<Impressions_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<Impressions_Files_Aggregated_Fields>;
  count?: Maybe<Impressions_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Impressions_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Impressions_Files_Aggregated_Fields>;
  min?: Maybe<Impressions_Files_Aggregated_Fields>;
  sum?: Maybe<Impressions_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<Impressions_Files_Aggregated_Fields>;
};

export type Impressions_Files_Aggregated_Count = {
  __typename?: 'impressions_files_aggregated_count';
  directus_files_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  impressions_id?: Maybe<Scalars['Int']>;
};

export type Impressions_Files_Aggregated_Fields = {
  __typename?: 'impressions_files_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  impressions_id?: Maybe<Scalars['Float']>;
};

export type Impressions_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Impressions_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Impressions_Files_Filter>>>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  impressions_id?: InputMaybe<Impressions_Filter>;
};

export type Impressions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Impressions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Impressions_Filter>>>;
  bildergalerie?: InputMaybe<Impressions_Files_Filter>;
  bildergalerie_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  subtitle?: InputMaybe<String_Filter_Operators>;
  text?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Meta = {
  __typename?: 'meta';
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** Sollte auf einer Unterseite mal eine Beschreibung fehlen, wird diese hier angezeigt. Die Beschreibung ist die, die auch bei z.B. Google auftaucht. Sie sollte aus nicht mehr als zwei Sätzen und 155 Zeichen bestehen. */
  description?: Maybe<Scalars['String']>;
  favicon?: Maybe<Directus_Files>;
  id: Scalars['ID'];
  opengraph_image?: Maybe<Directus_Files>;
  /** Kurzer, knackiger Titel, der automatisch um den Titel der jeweiligen Unterseite ergänzt wird */
  title?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type MetaFaviconArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MetaOpengraph_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Presse = {
  __typename?: 'presse';
  body?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  status?: Maybe<Scalars['String']>;
  titel?: Maybe<Scalars['String']>;
};

export type Presse_Aggregated = {
  __typename?: 'presse_aggregated';
  avg?: Maybe<Presse_Aggregated_Fields>;
  avgDistinct?: Maybe<Presse_Aggregated_Fields>;
  count?: Maybe<Presse_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Presse_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Presse_Aggregated_Fields>;
  min?: Maybe<Presse_Aggregated_Fields>;
  sum?: Maybe<Presse_Aggregated_Fields>;
  sumDistinct?: Maybe<Presse_Aggregated_Fields>;
};

export type Presse_Aggregated_Count = {
  __typename?: 'presse_aggregated_count';
  body?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  titel?: Maybe<Scalars['Int']>;
};

export type Presse_Aggregated_Fields = {
  __typename?: 'presse_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Presse_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Presse_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Presse_Filter>>>;
  body?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  titel?: InputMaybe<String_Filter_Operators>;
};

export type Startseite = {
  __typename?: 'startseite';
  aufgaben?: Maybe<Array<Maybe<Startseite_Aufgaben>>>;
  aufgaben_func?: Maybe<Count_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** Wenn leer gelassen wird der default Eintrag aus "meta" genommen. Sollte nicht länger als zwei Sätze und 155 Zeichen sein. Wird nicht im Design angezeigt, sondern ist nur ein Meta-Information für Google und Co */
  description?: Maybe<Scalars['String']>;
  heimat_link?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  jugend_description?: Maybe<Scalars['String']>;
  jugend_link?: Maybe<Scalars['String']>;
  jugend_subtitle?: Maybe<Scalars['String']>;
  jugend_text?: Maybe<Scalars['String']>;
  jugend_title?: Maybe<Scalars['String']>;
  mitgliedschaft_subtitle?: Maybe<Scalars['String']>;
  mitgliedschaft_text?: Maybe<Scalars['String']>;
  mitgliedschaft_title?: Maybe<Scalars['String']>;
  /** Der Subtitle steht im Design eventuell ÜBER dem Titel. */
  subtitle?: Maybe<Scalars['String']>;
  task_section_description?: Maybe<Scalars['String']>;
  text_part_one?: Maybe<Scalars['String']>;
  text_part_two?: Maybe<Scalars['String']>;
  /** Der große, dicke Titel am Anfang der Startseite */
  title?: Maybe<Scalars['String']>;
  tradition_description?: Maybe<Scalars['String']>;
  tradition_text?: Maybe<Scalars['String']>;
  tradition_title?: Maybe<Scalars['String']>;
  wandern_description?: Maybe<Scalars['String']>;
  wandern_link?: Maybe<Scalars['String']>;
  wandern_text?: Maybe<Scalars['String']>;
  wandern_title?: Maybe<Scalars['String']>;
};


export type StartseiteAufgabenArgs = {
  filter?: InputMaybe<Startseite_Aufgaben_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Startseite_Aufgaben = {
  __typename?: 'startseite_aufgaben';
  collection?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  item?: Maybe<Startseite_Aufgaben_Item_Union>;
  startseite_id?: Maybe<Startseite>;
};


export type Startseite_AufgabenStartseite_IdArgs = {
  filter?: InputMaybe<Startseite_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Startseite_Aufgaben_Aggregated = {
  __typename?: 'startseite_aufgaben_aggregated';
  avg?: Maybe<Startseite_Aufgaben_Aggregated_Fields>;
  avgDistinct?: Maybe<Startseite_Aufgaben_Aggregated_Fields>;
  count?: Maybe<Startseite_Aufgaben_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Startseite_Aufgaben_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Startseite_Aufgaben_Aggregated_Fields>;
  min?: Maybe<Startseite_Aufgaben_Aggregated_Fields>;
  sum?: Maybe<Startseite_Aufgaben_Aggregated_Fields>;
  sumDistinct?: Maybe<Startseite_Aufgaben_Aggregated_Fields>;
};

export type Startseite_Aufgaben_Aggregated_Count = {
  __typename?: 'startseite_aufgaben_aggregated_count';
  collection?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  item?: Maybe<Scalars['Int']>;
  startseite_id?: Maybe<Scalars['Int']>;
};

export type Startseite_Aufgaben_Aggregated_Fields = {
  __typename?: 'startseite_aufgaben_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  startseite_id?: Maybe<Scalars['Float']>;
};

export type Startseite_Aufgaben_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Startseite_Aufgaben_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Startseite_Aufgaben_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item__aufgaben?: InputMaybe<Aufgaben_Filter>;
  startseite_id?: InputMaybe<Startseite_Filter>;
};

export type Startseite_Aufgaben_Item_Union = Aufgaben;

export type Startseite_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Startseite_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Startseite_Filter>>>;
  aufgaben?: InputMaybe<Startseite_Aufgaben_Filter>;
  aufgaben_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  heimat_link?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  jugend_description?: InputMaybe<String_Filter_Operators>;
  jugend_link?: InputMaybe<String_Filter_Operators>;
  jugend_subtitle?: InputMaybe<String_Filter_Operators>;
  jugend_text?: InputMaybe<String_Filter_Operators>;
  jugend_title?: InputMaybe<String_Filter_Operators>;
  mitgliedschaft_subtitle?: InputMaybe<String_Filter_Operators>;
  mitgliedschaft_text?: InputMaybe<String_Filter_Operators>;
  mitgliedschaft_title?: InputMaybe<String_Filter_Operators>;
  subtitle?: InputMaybe<String_Filter_Operators>;
  task_section_description?: InputMaybe<String_Filter_Operators>;
  text_part_one?: InputMaybe<String_Filter_Operators>;
  text_part_two?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  tradition_description?: InputMaybe<String_Filter_Operators>;
  tradition_text?: InputMaybe<String_Filter_Operators>;
  tradition_title?: InputMaybe<String_Filter_Operators>;
  wandern_description?: InputMaybe<String_Filter_Operators>;
  wandern_link?: InputMaybe<String_Filter_Operators>;
  wandern_text?: InputMaybe<String_Filter_Operators>;
  wandern_title?: InputMaybe<String_Filter_Operators>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _icontains?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
};

export type Veranstaltung = {
  __typename?: 'veranstaltung';
  beschreibung?: Maybe<Scalars['String']>;
  bildergalerie?: Maybe<Array<Maybe<Veranstaltung_Files>>>;
  bildergalerie_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  datum?: Maybe<Scalars['Date']>;
  datum_func?: Maybe<Datetime_Functions>;
  /** Die Dauer der Veranstaltung in Minuten */
  duration?: Maybe<Scalars['Int']>;
  event_changes?: Maybe<Array<Maybe<Event_Changes>>>;
  event_changes_func?: Maybe<Count_Functions>;
  featured_image?: Maybe<Directus_Files>;
  /** Wie der Termin wiederholt wird. */
  human_readable_interval?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Sobald der Event in der Vergangenheit liegt und diese Veranstaltung um Bilder und oder einer Zusammenfassung ergänzt wurde, bitte umstellen. */
  mehr_info?: Maybe<Scalars['String']>;
  ort?: Maybe<Scalars['String']>;
  recurring?: Maybe<Scalars['Boolean']>;
  short_description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  titel?: Maybe<Scalars['String']>;
  /** Wenn das Event wiederkehrend ist, kann man hier das Intervall einstellen. */
  wiederholung?: Maybe<Scalars['String']>;
};


export type VeranstaltungBildergalerieArgs = {
  filter?: InputMaybe<Veranstaltung_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type VeranstaltungEvent_ChangesArgs = {
  filter?: InputMaybe<Event_Changes_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type VeranstaltungFeatured_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Veranstaltung_Aggregated = {
  __typename?: 'veranstaltung_aggregated';
  avg?: Maybe<Veranstaltung_Aggregated_Fields>;
  avgDistinct?: Maybe<Veranstaltung_Aggregated_Fields>;
  count?: Maybe<Veranstaltung_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Veranstaltung_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Veranstaltung_Aggregated_Fields>;
  min?: Maybe<Veranstaltung_Aggregated_Fields>;
  sum?: Maybe<Veranstaltung_Aggregated_Fields>;
  sumDistinct?: Maybe<Veranstaltung_Aggregated_Fields>;
};

export type Veranstaltung_Aggregated_Count = {
  __typename?: 'veranstaltung_aggregated_count';
  beschreibung?: Maybe<Scalars['Int']>;
  bildergalerie?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  datum?: Maybe<Scalars['Int']>;
  /** Die Dauer der Veranstaltung in Minuten */
  duration?: Maybe<Scalars['Int']>;
  event_changes?: Maybe<Scalars['Int']>;
  featured_image?: Maybe<Scalars['Int']>;
  /** Wie der Termin wiederholt wird. */
  human_readable_interval?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  /** Sobald der Event in der Vergangenheit liegt und diese Veranstaltung um Bilder und oder einer Zusammenfassung ergänzt wurde, bitte umstellen. */
  mehr_info?: Maybe<Scalars['Int']>;
  ort?: Maybe<Scalars['Int']>;
  recurring?: Maybe<Scalars['Int']>;
  short_description?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  titel?: Maybe<Scalars['Int']>;
  /** Wenn das Event wiederkehrend ist, kann man hier das Intervall einstellen. */
  wiederholung?: Maybe<Scalars['Int']>;
};

export type Veranstaltung_Aggregated_Fields = {
  __typename?: 'veranstaltung_aggregated_fields';
  /** Die Dauer der Veranstaltung in Minuten */
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Veranstaltung_Files = {
  __typename?: 'veranstaltung_files';
  directus_files_id?: Maybe<Directus_Files>;
  id: Scalars['ID'];
  veranstaltung_id?: Maybe<Veranstaltung>;
};


export type Veranstaltung_FilesDirectus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Veranstaltung_FilesVeranstaltung_IdArgs = {
  filter?: InputMaybe<Veranstaltung_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Veranstaltung_Files_Aggregated = {
  __typename?: 'veranstaltung_files_aggregated';
  avg?: Maybe<Veranstaltung_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<Veranstaltung_Files_Aggregated_Fields>;
  count?: Maybe<Veranstaltung_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Veranstaltung_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Veranstaltung_Files_Aggregated_Fields>;
  min?: Maybe<Veranstaltung_Files_Aggregated_Fields>;
  sum?: Maybe<Veranstaltung_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<Veranstaltung_Files_Aggregated_Fields>;
};

export type Veranstaltung_Files_Aggregated_Count = {
  __typename?: 'veranstaltung_files_aggregated_count';
  directus_files_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  veranstaltung_id?: Maybe<Scalars['Int']>;
};

export type Veranstaltung_Files_Aggregated_Fields = {
  __typename?: 'veranstaltung_files_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  veranstaltung_id?: Maybe<Scalars['Float']>;
};

export type Veranstaltung_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Veranstaltung_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Veranstaltung_Files_Filter>>>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  veranstaltung_id?: InputMaybe<Veranstaltung_Filter>;
};

export type Veranstaltung_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Veranstaltung_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Veranstaltung_Filter>>>;
  beschreibung?: InputMaybe<String_Filter_Operators>;
  bildergalerie?: InputMaybe<Veranstaltung_Files_Filter>;
  bildergalerie_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  datum?: InputMaybe<Date_Filter_Operators>;
  datum_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  event_changes?: InputMaybe<Event_Changes_Filter>;
  event_changes_func?: InputMaybe<Count_Function_Filter_Operators>;
  featured_image?: InputMaybe<Directus_Files_Filter>;
  human_readable_interval?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  mehr_info?: InputMaybe<String_Filter_Operators>;
  ort?: InputMaybe<String_Filter_Operators>;
  recurring?: InputMaybe<Boolean_Filter_Operators>;
  short_description?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  titel?: InputMaybe<String_Filter_Operators>;
  wiederholung?: InputMaybe<String_Filter_Operators>;
};

export type Wander_Step = {
  __typename?: 'wander_step';
  bilder?: Maybe<Array<Maybe<Wander_Step_Files>>>;
  bilder_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
  wanderung?: Maybe<Wanderung>;
};


export type Wander_StepBilderArgs = {
  filter?: InputMaybe<Wander_Step_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Wander_StepWanderungArgs = {
  filter?: InputMaybe<Wanderung_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Wander_Step_Aggregated = {
  __typename?: 'wander_step_aggregated';
  avg?: Maybe<Wander_Step_Aggregated_Fields>;
  avgDistinct?: Maybe<Wander_Step_Aggregated_Fields>;
  count?: Maybe<Wander_Step_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Wander_Step_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Wander_Step_Aggregated_Fields>;
  min?: Maybe<Wander_Step_Aggregated_Fields>;
  sum?: Maybe<Wander_Step_Aggregated_Fields>;
  sumDistinct?: Maybe<Wander_Step_Aggregated_Fields>;
};

export type Wander_Step_Aggregated_Count = {
  __typename?: 'wander_step_aggregated_count';
  bilder?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
  wanderung?: Maybe<Scalars['Int']>;
};

export type Wander_Step_Aggregated_Fields = {
  __typename?: 'wander_step_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  wanderung?: Maybe<Scalars['Float']>;
};

export type Wander_Step_Files = {
  __typename?: 'wander_step_files';
  directus_files_id?: Maybe<Directus_Files>;
  id: Scalars['ID'];
  wander_step_id?: Maybe<Wander_Step>;
};


export type Wander_Step_FilesDirectus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Wander_Step_FilesWander_Step_IdArgs = {
  filter?: InputMaybe<Wander_Step_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Wander_Step_Files_Aggregated = {
  __typename?: 'wander_step_files_aggregated';
  avg?: Maybe<Wander_Step_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<Wander_Step_Files_Aggregated_Fields>;
  count?: Maybe<Wander_Step_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Wander_Step_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Wander_Step_Files_Aggregated_Fields>;
  min?: Maybe<Wander_Step_Files_Aggregated_Fields>;
  sum?: Maybe<Wander_Step_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<Wander_Step_Files_Aggregated_Fields>;
};

export type Wander_Step_Files_Aggregated_Count = {
  __typename?: 'wander_step_files_aggregated_count';
  directus_files_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  wander_step_id?: Maybe<Scalars['Int']>;
};

export type Wander_Step_Files_Aggregated_Fields = {
  __typename?: 'wander_step_files_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  wander_step_id?: Maybe<Scalars['Float']>;
};

export type Wander_Step_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Wander_Step_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Wander_Step_Files_Filter>>>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  wander_step_id?: InputMaybe<Wander_Step_Filter>;
};

export type Wander_Step_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Wander_Step_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Wander_Step_Filter>>>;
  bilder?: InputMaybe<Wander_Step_Files_Filter>;
  bilder_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
  wanderung?: InputMaybe<Wanderung_Filter>;
};

export type Wanderung = {
  __typename?: 'wanderung';
  barrierefrei?: Maybe<Scalars['Boolean']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** Dauer in Stunden */
  dauer?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  featured_image?: Maybe<Directus_Files>;
  id: Scalars['ID'];
  /** Link zum externen Anbieter */
  link?: Maybe<Scalars['String']>;
  natur?: Maybe<Scalars['String']>;
  schwierigkeitsgrad?: Maybe<Scalars['String']>;
  /** Die Länge der Strecke in Kilometern */
  strecke?: Maybe<Scalars['Float']>;
  titel?: Maybe<Scalars['String']>;
  wander_step?: Maybe<Array<Maybe<Wander_Step>>>;
  wander_step_func?: Maybe<Count_Functions>;
};


export type WanderungFeatured_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type WanderungWander_StepArgs = {
  filter?: InputMaybe<Wander_Step_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Wanderung_Aggregated = {
  __typename?: 'wanderung_aggregated';
  avg?: Maybe<Wanderung_Aggregated_Fields>;
  avgDistinct?: Maybe<Wanderung_Aggregated_Fields>;
  count?: Maybe<Wanderung_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Wanderung_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Wanderung_Aggregated_Fields>;
  min?: Maybe<Wanderung_Aggregated_Fields>;
  sum?: Maybe<Wanderung_Aggregated_Fields>;
  sumDistinct?: Maybe<Wanderung_Aggregated_Fields>;
};

export type Wanderung_Aggregated_Count = {
  __typename?: 'wanderung_aggregated_count';
  barrierefrei?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  /** Dauer in Stunden */
  dauer?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  /** Das Bild wird unter anderem in der Übersicht der aller Wanderungen angezeigt. */
  featured_image?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  /** Link zum externen Anbieter */
  link?: Maybe<Scalars['Int']>;
  natur?: Maybe<Scalars['Int']>;
  schwierigkeitsgrad?: Maybe<Scalars['Int']>;
  /** Die Länge der Strecke in Kilometern */
  strecke?: Maybe<Scalars['Int']>;
  titel?: Maybe<Scalars['Int']>;
  wander_step?: Maybe<Scalars['Int']>;
};

export type Wanderung_Aggregated_Fields = {
  __typename?: 'wanderung_aggregated_fields';
  /** Dauer in Stunden */
  dauer?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  /** Die Länge der Strecke in Kilometern */
  strecke?: Maybe<Scalars['Float']>;
};

export type Wanderung_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Wanderung_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Wanderung_Filter>>>;
  barrierefrei?: InputMaybe<Boolean_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  dauer?: InputMaybe<Number_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  featured_image?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  link?: InputMaybe<String_Filter_Operators>;
  natur?: InputMaybe<String_Filter_Operators>;
  schwierigkeitsgrad?: InputMaybe<String_Filter_Operators>;
  strecke?: InputMaybe<Number_Filter_Operators>;
  titel?: InputMaybe<String_Filter_Operators>;
  wander_step?: InputMaybe<Wander_Step_Filter>;
  wander_step_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Wegeschaden = {
  __typename?: 'wegeschaden';
  beschreibung?: Maybe<Scalars['String']>;
  bild?: Maybe<Directus_Files>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  geloest?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ort?: Maybe<Scalars['GraphQLGeoJSON']>;
  sort?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type WegeschadenBildArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Wegeschaden_Aggregated = {
  __typename?: 'wegeschaden_aggregated';
  avg?: Maybe<Wegeschaden_Aggregated_Fields>;
  avgDistinct?: Maybe<Wegeschaden_Aggregated_Fields>;
  count?: Maybe<Wegeschaden_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Wegeschaden_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Wegeschaden_Aggregated_Fields>;
  min?: Maybe<Wegeschaden_Aggregated_Fields>;
  sum?: Maybe<Wegeschaden_Aggregated_Fields>;
  sumDistinct?: Maybe<Wegeschaden_Aggregated_Fields>;
};

export type Wegeschaden_Aggregated_Count = {
  __typename?: 'wegeschaden_aggregated_count';
  beschreibung?: Maybe<Scalars['Int']>;
  bild?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  geloest?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  ort?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Wegeschaden_Aggregated_Fields = {
  __typename?: 'wegeschaden_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Wegeschaden_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Wegeschaden_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Wegeschaden_Filter>>>;
  beschreibung?: InputMaybe<String_Filter_Operators>;
  bild?: InputMaybe<Directus_Files_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  geloest?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  ort?: InputMaybe<Geometry_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type StartseiteQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type StartseiteQueryQuery = { __typename?: 'Query', startseite?: { __typename?: 'startseite', title?: string | null, subtitle?: string | null, description?: string | null, text_part_one?: string | null, text_part_two?: string | null, task_section_description?: string | null, wandern_title?: string | null, wandern_text?: string | null, wandern_description?: string | null, wandern_link?: string | null, tradition_description?: string | null, tradition_title?: string | null, tradition_text?: string | null, heimat_link?: string | null, jugend_title?: string | null, jugend_subtitle?: string | null, jugend_description?: string | null, jugend_text?: string | null, jugend_link?: string | null, mitgliedschaft_title?: string | null, mitgliedschaft_subtitle?: string | null, mitgliedschaft_text?: string | null, aufgaben?: Array<{ __typename?: 'startseite_aufgaben', id: string } | null> | null } | null };

export type AufgabenQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AufgabenQueryQuery = { __typename?: 'Query', aufgaben: Array<{ __typename?: 'aufgaben', id: string, title?: string | null, description?: string | null, link?: string | null, image?: { __typename?: 'directus_files', id: string, description?: string | null } | null }> };

export type VeranstaltungsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type VeranstaltungsQueryQuery = { __typename?: 'Query', veranstaltung: Array<{ __typename?: 'veranstaltung', id: string, ort?: string | null, slug?: string | null, date_created?: any | null, date_updated?: any | null, beschreibung?: string | null, duration?: number | null, recurring?: boolean | null, wiederholung?: string | null, human_readable_interval?: string | null, short_description?: string | null, datum?: any | null, titel?: string | null, mehr_info?: string | null, event_changes?: Array<{ __typename?: 'event_changes', info?: string | null, date_created?: any | null } | null> | null, featured_image?: { __typename?: 'directus_files', id: string, description?: string | null } | null, bildergalerie?: Array<{ __typename?: 'veranstaltung_files', directus_files_id?: { __typename?: 'directus_files', description?: string | null, title?: string | null, id: string, location?: string | null } | null } | null> | null }> };

export type WebsiteMetaQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type WebsiteMetaQueryQuery = { __typename?: 'Query', meta?: { __typename?: 'meta', title?: string | null, description?: string | null, favicon?: { __typename?: 'directus_files', id: string, type?: string | null } | null, opengraph_image?: { __typename?: 'directus_files', id: string, description?: string | null } | null } | null };

export type DownloadsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type DownloadsQueryQuery = { __typename?: 'Query', downloads: Array<{ __typename?: 'downloads', title?: string | null, file?: { __typename?: 'directus_files', id: string } | null }> };

export type FooterQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQueryQuery = { __typename?: 'Query', footer?: { __typename?: 'footer', copyright_text?: string | null, footer_text?: string | null, footer_links?: Array<{ __typename?: 'footer_link', name?: string | null, link?: string | null } | null> | null, footer_social_links?: Array<{ __typename?: 'footer_social_link', icon?: string | null, link?: string | null } | null> | null } | null };

export type AktuellesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AktuellesQueryQuery = { __typename?: 'Query', aktuelles?: { __typename?: 'aktuelles', text?: string | null, subtitle?: string | null, description?: string | null, title?: string | null } | null };

export type ImpressumsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ImpressumsQueryQuery = { __typename?: 'Query', Impressum?: { __typename?: 'Impressum', description?: string | null, date_updated?: any | null, text?: string | null } | null };

export type GetOneVeranstaltungQueryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetOneVeranstaltungQueryQuery = { __typename?: 'Query', veranstaltung: Array<{ __typename?: 'veranstaltung', id: string, ort?: string | null, date_created?: any | null, date_updated?: any | null, slug?: string | null, beschreibung?: string | null, datum?: any | null, duration?: number | null, recurring?: boolean | null, wiederholung?: string | null, titel?: string | null, event_changes?: Array<{ __typename?: 'event_changes', info?: string | null, date_created?: any | null, user_created?: string | null, user_updated?: string | null, date_updated?: any | null } | null> | null, featured_image?: { __typename?: 'directus_files', id: string, description?: string | null } | null, bildergalerie?: Array<{ __typename?: 'veranstaltung_files', id: string } | null> | null }> };

export type FeaturedEventQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedEventQueryQuery = { __typename?: 'Query', featured_event?: { __typename?: 'featured_event', event?: { __typename?: 'veranstaltung', slug?: string | null, datum?: any | null, mehr_info?: string | null, beschreibung?: string | null, short_description?: string | null, titel?: string | null, featured_image?: { __typename?: 'directus_files', id: string, description?: string | null } | null } | null } | null };

export type ImpressionsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ImpressionsQueryQuery = { __typename?: 'Query', impressions?: { __typename?: 'impressions', title?: string | null, text?: string | null, description?: string | null, subtitle?: string | null, bildergalerie?: Array<{ __typename?: 'impressions_files', directus_files_id?: { __typename?: 'directus_files', description?: string | null, title?: string | null, id: string, location?: string | null, metadata?: any | null } | null } | null> | null } | null };

export type GroupPagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GroupPagesQueryQuery = { __typename?: 'Query', group_page: Array<{ __typename?: 'group_page', slug?: string | null, title?: string | null, description?: string | null, subtitle?: string | null, events?: Array<{ __typename?: 'group_page_veranstaltung', veranstaltung_id?: { __typename?: 'veranstaltung', titel?: string | null, datum?: any | null, slug?: string | null, short_description?: string | null, recurring?: boolean | null, wiederholung?: string | null, featured_image?: { __typename?: 'directus_files', id: string } | null } | null } | null> | null, group_section?: Array<{ __typename?: 'group_section', title?: string | null, description?: string | null, bilder?: Array<{ __typename?: 'group_section_files', directus_files_id?: { __typename?: 'directus_files', id: string, description?: string | null } | null } | null> | null } | null> | null }> };


export const StartseiteQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"startseiteQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startseite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"text_part_one"}},{"kind":"Field","name":{"kind":"Name","value":"text_part_two"}},{"kind":"Field","name":{"kind":"Name","value":"task_section_description"}},{"kind":"Field","name":{"kind":"Name","value":"aufgaben"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wandern_title"}},{"kind":"Field","name":{"kind":"Name","value":"wandern_text"}},{"kind":"Field","name":{"kind":"Name","value":"wandern_description"}},{"kind":"Field","name":{"kind":"Name","value":"wandern_link"}},{"kind":"Field","name":{"kind":"Name","value":"tradition_description"}},{"kind":"Field","name":{"kind":"Name","value":"tradition_title"}},{"kind":"Field","name":{"kind":"Name","value":"tradition_text"}},{"kind":"Field","name":{"kind":"Name","value":"heimat_link"}},{"kind":"Field","name":{"kind":"Name","value":"jugend_title"}},{"kind":"Field","name":{"kind":"Name","value":"jugend_subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"jugend_description"}},{"kind":"Field","name":{"kind":"Name","value":"jugend_text"}},{"kind":"Field","name":{"kind":"Name","value":"jugend_link"}},{"kind":"Field","name":{"kind":"Name","value":"mitgliedschaft_title"}},{"kind":"Field","name":{"kind":"Name","value":"mitgliedschaft_subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"mitgliedschaft_text"}}]}}]}}]} as unknown as DocumentNode<StartseiteQueryQuery, StartseiteQueryQueryVariables>;
export const AufgabenQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"aufgabenQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aufgaben"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]} as unknown as DocumentNode<AufgabenQueryQuery, AufgabenQueryQueryVariables>;
export const VeranstaltungsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"veranstaltungsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"veranstaltung"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ort"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}},{"kind":"Field","name":{"kind":"Name","value":"date_updated"}},{"kind":"Field","name":{"kind":"Name","value":"beschreibung"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"recurring"}},{"kind":"Field","name":{"kind":"Name","value":"wiederholung"}},{"kind":"Field","name":{"kind":"Name","value":"human_readable_interval"}},{"kind":"Field","name":{"kind":"Name","value":"short_description"}},{"kind":"Field","name":{"kind":"Name","value":"datum"}},{"kind":"Field","name":{"kind":"Name","value":"titel"}},{"kind":"Field","name":{"kind":"Name","value":"mehr_info"}},{"kind":"Field","name":{"kind":"Name","value":"event_changes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featured_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bildergalerie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directus_files_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location"}}]}}]}}]}}]}}]} as unknown as DocumentNode<VeranstaltungsQueryQuery, VeranstaltungsQueryQueryVariables>;
export const WebsiteMetaQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"websiteMetaQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"opengraph_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<WebsiteMetaQueryQuery, WebsiteMetaQueryQueryVariables>;
export const DownloadsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"downloadsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"downloads"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"published","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<DownloadsQueryQuery, DownloadsQueryQueryVariables>;
export const FooterQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"footerQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"copyright_text"}},{"kind":"Field","name":{"kind":"Name","value":"footer_text"}},{"kind":"Field","name":{"kind":"Name","value":"footer_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"footer_social_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]}}]} as unknown as DocumentNode<FooterQueryQuery, FooterQueryQueryVariables>;
export const AktuellesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"aktuellesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aktuelles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<AktuellesQueryQuery, AktuellesQueryQueryVariables>;
export const ImpressumsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"impressumsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Impressum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date_updated"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<ImpressumsQueryQuery, ImpressumsQueryQueryVariables>;
export const GetOneVeranstaltungQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOneVeranstaltungQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"veranstaltung"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ort"}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}},{"kind":"Field","name":{"kind":"Name","value":"date_updated"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"beschreibung"}},{"kind":"Field","name":{"kind":"Name","value":"datum"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"recurring"}},{"kind":"Field","name":{"kind":"Name","value":"event_changes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}},{"kind":"Field","name":{"kind":"Name","value":"user_created"}},{"kind":"Field","name":{"kind":"Name","value":"user_updated"}},{"kind":"Field","name":{"kind":"Name","value":"date_updated"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wiederholung"}},{"kind":"Field","name":{"kind":"Name","value":"titel"}},{"kind":"Field","name":{"kind":"Name","value":"featured_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bildergalerie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetOneVeranstaltungQueryQuery, GetOneVeranstaltungQueryQueryVariables>;
export const FeaturedEventQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"featuredEventQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featured_event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"datum"}},{"kind":"Field","name":{"kind":"Name","value":"mehr_info"}},{"kind":"Field","name":{"kind":"Name","value":"beschreibung"}},{"kind":"Field","name":{"kind":"Name","value":"short_description"}},{"kind":"Field","name":{"kind":"Name","value":"featured_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"titel"}}]}}]}}]}}]} as unknown as DocumentNode<FeaturedEventQueryQuery, FeaturedEventQueryQueryVariables>;
export const ImpressionsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"impressionsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"impressions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"bildergalerie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directus_files_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ImpressionsQueryQuery, ImpressionsQueryQueryVariables>;
export const GroupPagesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"groupPagesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"group_page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"veranstaltung_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"titel"}},{"kind":"Field","name":{"kind":"Name","value":"datum"}},{"kind":"Field","name":{"kind":"Name","value":"featured_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"short_description"}},{"kind":"Field","name":{"kind":"Name","value":"recurring"}},{"kind":"Field","name":{"kind":"Name","value":"wiederholung"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"group_section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"bilder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directus_files_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GroupPagesQueryQuery, GroupPagesQueryQueryVariables>;