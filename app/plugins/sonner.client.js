import { defineNuxtPlugin } from '#app'
import { Toaster, toast } from 'vue-sonner'

export default defineNuxtPlugin((nuxtApp) => {
  // رجیستر کردن کامپوننت توستر به صورت گلوبال
  nuxtApp.vueApp.component('Toaster', Toaster)

  // تغییر نام از $toast به $sonner برای جلوگیری از تداخل با PrimeVue
  return {
    provide: {
      sonner: toast
    }
  }
})