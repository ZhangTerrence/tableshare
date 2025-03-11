// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "TableShare",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: {
    enabled: true,
  },
  modules: ["@nuxthub/core", "nuxt-auth-utils", "@nuxt/ui", "@nuxt/image"],
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
