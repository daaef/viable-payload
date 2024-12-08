import type { CollectionConfig } from 'payload'

export const ProblemsFaq: CollectionConfig = {
  slug: 'problems-faq',
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
      name: 'answer2',
      type: 'text',
      required: true,
    },
    {
      name: 'points',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'point',
          type: 'text'
        }
      ]
    },
  ]
}
