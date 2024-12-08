import type { CollectionConfig } from 'payload'

export const JoinUsContent: CollectionConfig = {
  slug: 'join-us-content',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'value',
      type: 'text',
      required: true,
    },
  ],
}
