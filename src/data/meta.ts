import type { ID } from "@directus/sdk";
import { directus } from "src/utils/directus";

export interface WebsiteMeta extends Record<string, any> {
  id?: ID;
  title?: string;
  description?: string;
  favicon?: ID;
  opengraph_image?: ID;
}

let websiteMeta: WebsiteMeta = {};

try {
  const res = await directus.items("meta").readByQuery();
  websiteMeta = res.data ?? {};
} catch (error) {
  console.error(error);
  throw new Error("Error while fetching website-meta");
}

export default websiteMeta;
