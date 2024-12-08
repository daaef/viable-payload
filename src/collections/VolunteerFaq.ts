import type { CollectionConfig } from 'payload'

export const VolunteerFaq: CollectionConfig = {
  slug: 'volunteer-faq',
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
