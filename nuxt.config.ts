// https://nuxt.com/docs/api/configuration/nuxt-config
import Lara from "@primevue/themes/lara";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@primevue/nuxt-module'],
  primevue: {
    options: {
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: '.dark-mode-app'
        }
      },
      ripple: true
    },
    autoImport: true
  }
})
