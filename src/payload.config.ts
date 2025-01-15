// storage-adapter-import-placeholder
import { sqliteAdapter } from "@payloadcms/db-sqlite"
import { payloadCloudPlugin } from "@payloadcms/payload-cloud"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import path from "path"
import { buildConfig } from "payload"
import { fileURLToPath } from "url"
import sharp from "sharp"

import { Users } from "./collections/Users"
import { Gallery } from "./collections/Gallery"
import { Services } from "./collections/Services"
import { Faq } from "./collections/Faq"
import { migrations } from "./migrations"

import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Gallery, Services, Faq],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || "",
      authToken: process.env.DATABASE_TOKEN,
    },
    prodMigrations: migrations,
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
    vercelBlobStorage({
      enabled: !!process.env.BLOB_READ_WRITE_TOKEN, // Optional, defaults to true
      // Specify which collections should use Vercel Blob
      collections: {
        gallery: true,
        services: true,
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})
