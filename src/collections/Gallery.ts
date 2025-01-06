import type { CollectionConfig } from "payload"

export const Gallery: CollectionConfig = {
  slug: "gallery",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "picture-title",
      type: "text",
    },
  ],
  upload: true,
}
