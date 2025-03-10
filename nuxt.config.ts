// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxthub/core", "@nuxt/ui", "nuxt-auth-utils"],
  hub: {
    database: true,
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  nitro: {
    experimental: {
      tasks: true,
    },
  },
});
