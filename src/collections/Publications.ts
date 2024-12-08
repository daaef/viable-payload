import type { CollectionConfig } from 'payload'

export const Publications: CollectionConfig = {
  slug: 'publications',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Annual Report',
          value: 'annual_report'
        },
        {
          label: 'Article',
          value: 'article'
        },
        {
          label: 'Document',
          value: 'document'
        }
      ]
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'link',
      type: 'text',
      required: true,
    },
    {
      name: 'imageSrc',
      type: 'text',
      required: true,
    },
    {
      name: 'keywords',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'keyword',
          type: 'text'
        }
      ]
    },
  ]
}
