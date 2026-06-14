// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app:{
    head:{
      title: "Porfolio",
      link: [
        { rel: 'icon', type: 'image/png', href: '/dev_favicon.svg' }
      ]
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
