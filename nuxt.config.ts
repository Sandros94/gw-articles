import twTypo from '@tailwindcss/typography'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    experimental: {
      openAPI: true,
    },
    rollupConfig: {
      external: ['canvas'],
    },
  },
  devtools: { enabled: true },
  extends: ['github:sandros94/ui'],
  modules: [
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxthub/core',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  hub: {
    kv: true,
    cache: true,
  },
  tailwindcss: {
    config: {
      content: [],
      plugins: [twTypo],
    },
  },
  ui: {
    icons: 'all',
  },
})
