import tailwindcss from "@tailwindcss/vite";
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#DDB976',
      100: '#DDB976',
      200: '#DDB976',
      300: '#DDB976',
      400: '#DDB976',
      500: '#DDB976',
      600: '#DDB976',
      700: '#DDB976',
      800: '#DDB976',
      900: '#DDB976',
      950: '#DDB976'
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
    }
  },
  modules: [
    '@primevue/nuxt-module'
  ],
  runtimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL || 'http://api.goldiko.com',
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
          cssLayer: false
        }
      }
    }
  }
});