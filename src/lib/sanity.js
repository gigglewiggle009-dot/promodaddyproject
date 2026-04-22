import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: "jgnb2lgk",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  perspective: "published",
});

const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}