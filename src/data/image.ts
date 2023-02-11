import type { ID } from "@directus/sdk";
import { directus } from "src/utils/directus";

export interface Image extends Record<string, any> {
  id: ID;
  title: string;
  type: string;
  filename_disk: string;
  width: number;
  height: number;
  description: string;
}

export const fetchImageMeta = async (id: ID): Promise<Image> => {
  try {
    const res = await fetch(`${import.meta.env.DIRECTUS_HOST}/files/${id}`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error while fetching image meta");
  }
};
