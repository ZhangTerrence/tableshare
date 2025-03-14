/** @type {import("tailwindcss").Config} */
export default {
  theme: { extend: {} },
  content: {
    files: [
      // all directories and extensions will correspond to your Nuxt config
      "./components/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "./layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "./pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "./plugins/**/*.{js,ts,mjs}",
      "./composables/**/*.{js,ts,mjs}",
      "./utils/**/*.{js,ts,mjs}",
      "./app.{vue,js,jsx,mjs,ts,tsx}",
      "./error.{vue,js,jsx,mjs,ts,tsx}",
      "./app.config.{js,ts,mjs}",
      "./app/spa-loading-template.html",
    ],
  },
  plugins: [],
};
