import type { CollectionConfig } from 'payload'

export const TeamDetails: CollectionConfig = {
  slug: 'team-details',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'circle',
      type: 'select',
      required: true,
      options: [
        {
          label: 'IT',
          value: 'it',
        },
        {
          label: 'People',
          value: 'people',
        },
        {
          label: 'Project Development',
          value: 'project-development',
        },
        {
          label: 'External Communications',
          value: 'external-communications',
        },
        {
          label: 'Fundraising',
          value: 'fundraising',
        },
        {
          label: 'Legal',
          value: 'legal',
        },
        {
          label: 'Finance',
          value: 'finance',
        },
        {
          label: 'Program & Daily Operations',
          value: 'program-and-daily-operations',
        },
      ]
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'memberName',
      type: 'text',
      required: true,
    },
    {
      name: 'linkedInLink',
      type: 'text',
      required: true,
    },
    {
      name: 'profilePicture',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
