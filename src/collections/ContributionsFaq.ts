import type { CollectionConfig } from 'payload'

export const ContributionsFaq: CollectionConfig = {
  slug: 'contributions',
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
  ]
}
