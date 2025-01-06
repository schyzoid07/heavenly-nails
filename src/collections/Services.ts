import type { CollectionConfig } from "payload"

export const Services: CollectionConfig = {
  slug: "services",
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
      name: "title",
      type: "text",
    },
    {
      name: "description",
      type: "text",
    },
  ],
  upload: true,
}
