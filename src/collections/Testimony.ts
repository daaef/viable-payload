import type { CollectionConfig } from 'payload'

export const Testimony: CollectionConfig = {
  slug: 'testimony',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media'
    },
    {
      name: 'imgs',
      type: 'array',
      fields: [
        {
          name: 'img',
          type: 'upload',
          relationTo: 'media'
        }
      ]
    },

  ]
}
