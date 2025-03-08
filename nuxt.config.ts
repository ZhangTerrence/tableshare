// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxthub/core", "@nuxt/ui"],
  hub: {
    database: true,
  },
  nitro: {
    experimental: {
      tasks: true,
    },
  },
});
