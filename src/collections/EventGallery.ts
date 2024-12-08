import type { CollectionConfig } from 'payload'

export const EventGallery: CollectionConfig = {
  slug: 'event-gallery',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'eventType',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
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
      type: 'text',
      required: true,
    },
    {
      name: 'imageAlt',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    adminThumbnail: 'thumbnail',
    focalPoint: true,
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
      },
      {
        name: 'square',
        width: 500,
        height: 500,
      },
      {
        name: 'small',
        width: 600,
      },
      {
        name: 'medium',
        width: 900,
      },
      {
        name: 'large',
        width: 1400,
      },
      {
        name: 'xlarge',
        width: 1920,
      },
      {
        name: 'og',
        width: 1200,
        height: 630,
        crop: 'center',
      },
    ],
  },
}
