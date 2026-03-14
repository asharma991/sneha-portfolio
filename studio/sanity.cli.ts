import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  studioHost: 'snehag',
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'yourProjectId',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
})
