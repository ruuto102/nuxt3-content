// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Yoshi7.Blog'
    }
  },
  $development: {
    app: {
      head: {
        title: 'DEV'
      }
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/image"],

  content: {}
})