import type { CollectionConfig } from "payload";

export const Faqs: CollectionConfig = {
  slug: "faqs",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "subject",
      type: "select",
      required: true,
      options: [
        {
          label: "Donating",
          value: "donating",
        },
        {
          label: "Volunteering",
          value: "volunteering",
        },
        {
          label: "Problems",
          value: "problems",
        },
        {
          label: "General",
          value: "general",
        },
        {
          label: "Funding",
          value: "funding",
        },
        {
          label: "Contributions",
          value: "contributions",
        },
      ],
    },
    {
      name: "question",
      type: "text",
      required: true,
    },
    {
      name: "answer",
      type: "richText",
      required: true,
    },
  ],
};
