// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxthub/core",
    "nuxt-auth-utils",
    "nuxt-codemirror",
  ],

  css: ["~/assets/css/main.css"],

  hub: {
    database: true,
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-27",
});