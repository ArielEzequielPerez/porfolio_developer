// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app:{
    head:{
      title: "Porfolio",      
    }
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/ui",
    "@formkit/nuxt",
  ],
  icon: {
    serverBundle: {
      collections: ["uil", "mdi"],
    },
  },

  formkit: {
    autoImport: true,
    defaultConfig: true,
  },
});
