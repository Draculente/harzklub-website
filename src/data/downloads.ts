import type { ID } from "@directus/sdk";
import { directus } from "src/utils/directus";

export interface Download extends Record<string, any> {
  id?: ID;
  status?: string;
  title?: string;
  file?: ID;
}

let downloads: Download[] = [];

try {
  const res = await directus.items("downloads").readByQuery();
  downloads = res.data ?? [];
} catch (error) {
  console.error(error);
  throw new Error("Error while fetching downloads");
}

export default downloads;
