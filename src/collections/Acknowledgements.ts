import type { CollectionConfig } from 'payload'

export const Acknowledgements: CollectionConfig = {
  slug: 'acknowledgements',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ]
}
