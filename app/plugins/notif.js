// plugins/fcm.client.js

export default defineNuxtPlugin(async (nuxtApp) => {
  const { getDeviceToken, listenForMessages } = useFcm()
  
  // گوش دادن به پیام‌ها
  listenForMessages()

  try {
    // ۱. گرفتن توکن از فایربیس (در مرورگر کاربر)
    const fireToken = await getDeviceToken()

    if (fireToken) {
      // ۲. ارسال توکن به سمت سرورِ ناکست (نه مستقیم به بک‌ند، چون می‌خوایم پروکسی کنیم)
      await $fetch('/api/user/save-device-token', { // یک آدرس جدید در server/api می‌سازیم
        method: 'POST',
        body: {
          deviceToken: fireToken // توکن رو میذاریم توی بادی
        }
        // نکته: کوکی‌های HttpOnly خودکار ارسال میشن، نیاز به هدر دستی نیست
        // مگر اینکه کوکی معمولی باشه که باز هم مرورگر می‌فرسته.
      })
      console.log('FCM Token sent to Nuxt Server')
    }
  } catch (err) {
    console.error('FCM Error:', err)
  }
})