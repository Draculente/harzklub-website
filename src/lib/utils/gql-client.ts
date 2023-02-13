import { GraphQLClient } from "graphql-request";

export default new GraphQLClient(`${import.meta.env.DIRECTUS_HOST}/graphql`);
