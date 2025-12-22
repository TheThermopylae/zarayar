export default defineNuxtPlugin(async nuxtApp => {
  let { userData } = userAuth()
  let headers = useRequestHeaders(['cookie'])
  
  // ۱. دسترسی به مسیر فعلی برای جلوگیری از لوپ
  const route = useRoute()

  try {
    let data = await $fetch('/api/auth/me', {
      headers
    })

    userData.value = data.user
  } catch (error) {
    userData.value = null

    // ۲. اگر کاربر لاگین نبود و الان هم توی صفحه لاگین نیست، ریدایرکت بشه
    // فرض کردم آدرس صفحه لاگینت '/auth/login' هست. اگر '/login' هست تغییرش بده
    if (route.path !== '/auth/login') {
      return navigateTo('/auth/login')
    }
  }
})