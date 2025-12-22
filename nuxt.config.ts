import tailwindcss from "@tailwindcss/vite";
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#966D22',
      100: '#966D22',
      200: '#966D22',
      300: '#966D22',
      400: '#966D22',
      500: '#966D22',
      600: '#966D22',
      700: '#966D22',
      800: '#966D22',
      900: '#966D22',
      950: '#966D22'
    },
  },
})

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['./app/assets/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      bodyAttrs: {
        dir: 'rtl'
      },
      link: [
        { rel: 'icon', href: '/favicon.png' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [
    '@primevue/nuxt-module'
  ],
  runtimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL || 'https://api.tutunchi.ir',
    public: {
      API_BASE_URL: process.env.API_BASE_URL
    },
  },
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: MyPreset,
        options: {
          prefix: 'p',
          darkModeSelector: false,

        }
      }
    }
  }
});