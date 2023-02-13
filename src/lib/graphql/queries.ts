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
      beschreibung
      datum
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