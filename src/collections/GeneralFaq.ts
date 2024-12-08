import type { CollectionConfig } from 'payload'

export const GeneralFaq: CollectionConfig = {
  slug: 'general-questions',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'text',
      required: true,
    },
    {
      name: 'points',
      type: 'array',
      fields: [
        {
          name: 'point',
          type: 'text'
        }
      ]
    },
    {
      name: 'paragraphs',
      type: 'array',
      fields: [
        {
          name: 'point',
          type: 'text'
        }
      ]
    },
  ]
}
