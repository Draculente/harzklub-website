import { graphql } from "src/lib/gql";

export const startseiteQuery = graphql(/* GraphQL */ `
  query startseiteQuery {
    startseite {
      title
      subtitle
      description
      text_part_one
      text_part_two
      task_section_description
      aufgaben {
        id
      }
      wandern_title
      wandern_text
      wandern_description
      tradition_description
      tradition_title
      tradition_text
      jugend_title
      jugend_subtitle
      jugend_description
      jugend_text
      mitgliedschaft_title
      mitgliedschaft_subtitle
      mitgliedschaft_text
    }
  }
`);

export const aufgabenQuery = graphql(/* GraphQL */ `
  query aufgabenQuery {
    aufgaben {
      id
      title
      image {
        id
        description
      }
      description
      link
    }
  }
`);

export const veranstaltungsQuery = graphql(/* GraphQL */ `
  query veranstaltungsQuery {
    veranstaltung {
      id
      ort
      slug
      date_created
      date_updated
      beschreibung
      duration
      recurring
      wiederholung
      human_readable_interval
      short_description
      datum
      titel
      mehr_info
      event_changes {
        info
        date_created
      }
      featured_image {
        id
        description
      }
      bildergalerie {
        directus_files_id {
          description
          title
          id
          location
        }
      }
    }
  }
`);

export const websiteMetaQuery = graphql(/* GraphQL */ `
  query websiteMetaQuery {
    meta {
      title
      description
      favicon {
        id
        type
      }
      opengraph_image {
        id
        description
      }
    }
  }
`);

export const downloadsQuery = graphql(/* GraphQL */ `
  query downloadsQuery {
    downloads(filter: { status: { _eq: "published" } }) {
      title
      file {
        id
      }
    }
  }
`);

export const footerQuery = graphql(/* GraphQL */ `
  query footerQuery {
    footer {
      copyright_text
      footer_text
      footer_links {
        name
        link
      }
      footer_social_links {
        icon
        link
      }
    }
  }
`);

export const aktuellesQuery = graphql(/* GraphQL */ `
  query aktuellesQuery {
    aktuelles {
      text
      subtitle
      description
      title
    }
  }
`);

export const impressumsQuery = graphql(/* GraphQL */ `
  query impressumsQuery {
    Impressum {
      description
      date_updated
      text
    }
  }
`);

export const getOneVeranstaltungQuery = graphql(/* GraphQL */ `
  query getOneVeranstaltungQuery($slug: String!) {
    veranstaltung(filter: { slug: { _eq: $slug } }) {
      id
      ort
      date_created
      date_updated
      slug
      beschreibung
      datum
      duration
      recurring
      event_changes {
        info
        date_created
        user_created
        user_updated
        date_updated
      }
      wiederholung
      titel
      featured_image {
        id
        description
      }
      bildergalerie {
        id
      }
    }
  }
`);

export const featuredEventQuery = graphql(/* GraphQL */ `
  query featuredEventQuery {
    featured_event {
      event {
        slug
        datum
        mehr_info
        beschreibung
        short_description
        featured_image {
          id
          description
        }
        titel
      }
    }
  }
`);

export const impressionsQuery = graphql(/* GraphQL */ `
  query impressionsQuery {
    impressions {
      title
      text
      description
      subtitle
      bildergalerie {
        directus_files_id {
          description
          title
          id
          location
          metadata
        }
      }
    }
  }
`);
