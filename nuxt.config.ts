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
        { rel: 'icon', href: '/favicon.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  routeRules: {
    // هر درخواستی که به /api-proxy/ شروع بشه رو بفرست به سرور اصلی
    '/api-proxy/**': {
      proxy: 'https://api.tutunchi.ir/**'
    }
  },
  modules: [
    '@primevue/nuxt-module',
    '@vite-pwa/nuxt',
  ],
  runtimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL || 'https://api.tutunchi.ir',
    public: {
      API_BASE_URL: process.env.API_BASE_URL
    },
  },

  // تنظیمات PWA
  pwa: {
    registerType: 'autoUpdate',
    injectRegister: 'auto',

    // نکته: برای اینکه در محیط دولوپمنت کار کند این بخش ضروری است
    devOptions: {
      enabled: true,
      type: 'module' // معمولا برای Vite این گزینه بهتر است
    },

    manifest: {
      name: 'tutunchi',
      short_name: 'tutunchi',
      description: 'this is an app for buy and sell gold items',
      theme_color: '#966D22', // بهتر است با رنگ Primary هماهنگ باشد
      background_color: '#ffffff',
      display: 'standalone', // برای حذف نوار آدرس مرورگر در موبایل
      orientation: 'portrait',
      start_url: '/',
      icons: [
        {
          src: '/favicon.png', // مطمئن شو این فایل در پوشه public وجود دارد
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'], // کش کردن فایل‌های استاتیک
    },
    client: {
      installPrompt: true,
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