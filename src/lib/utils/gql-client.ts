import { GraphQLClient } from "graphql-request";

console.log("Using Directus host:", import.meta.env.DIRECTUS_HOST);

export default new GraphQLClient(`${import.meta.env.DIRECTUS_HOST}/graphql`);
