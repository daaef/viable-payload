import type { CollectionConfig } from 'payload'

export const EventsAndNews: CollectionConfig = {
  slug: 'events-and-news',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'eventType',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Event',
          value: 'event',
        },
        {
          label: 'News',
          value: 'news',
        },
      ]
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'eventDate',
      type: 'date',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'href',
      type: 'text',
      required: true,
    },
    {
      name: 'imageSrc',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'imageAlt',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}
