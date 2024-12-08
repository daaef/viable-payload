// storage-adapter-import-placeholder
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Details } from '@/collections/Details'
import { JoinUsContent } from '@/collections/JoinUsContent'
import { Publications } from '@/collections/Publications'
import { Testimony } from '@/collections/Testimony'
import { EventGallery } from '@/collections/EventGallery'
import { ContributionsFaq } from '@/collections/ContributionsFaq'
import { DonatingFaq } from '@/collections/DonatingFaq'
import { FundingFaq } from '@/collections/FundingFaq'
import { GeneralFaq } from '@/collections/GeneralFaq'
import { ProblemsFaq } from '@/collections/ProblemsFaq'
import { VolunteerFaq } from '@/collections/VolunteerFaq'
import { Acknowledgements } from '@/collections/Acknowledgements'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Acknowledgements, Details, JoinUsContent, Publications, Testimony, EventGallery, ContributionsFaq, DonatingFaq, FundingFaq, GeneralFaq, ProblemsFaq, VolunteerFaq],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  cors: '*'
})
