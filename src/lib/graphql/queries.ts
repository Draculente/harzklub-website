import { graphql } from "src/lib/gql";

export const startseiteQuery = graphql(/* GraphQL */ `
  query startseiteQuery {
    startseite {
      title
      subtitle
      wandern_title
      wandern_text
      tradition_description
      aufgaben {
        id
      }
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
