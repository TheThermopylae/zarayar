// server/api/fcm/save-token.post.ts

export default defineEventHandler(async event => {
  const config = useRuntimeConfig()

  // ۱. خواندن توکن فایربیس که از کلاینت (پلاگین بالا) ارسال شده
  const body = await readBody(event)
  const clientFcmToken = body.deviceToken

  if (!clientFcmToken) {
    return { error: 'No device token provided' }
  }

  // ۲. خواندن توکن احراز هویت کاربر (مثلاً از کوکی یا هدر)
  // اگر از next-auth استفاده می‌کنی شاید لازم باشه از getServerSession استفاده کنی
  // اما طبق کد خودت، فرض می‌کنیم توکن توی کوکی 'token' یا 'next-auth.session-token' هست
  const userAuthToken = getCookie(event, 'token') // یا اسم کوکیِ توکنِت

  if (!userAuthToken) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  try {
    // ۳. ارسال درخواست به بک‌ند اصلی
    const response = await $fetch(
      `${config.public.API_BASE_URL}/user/device-token`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userAuthToken}` // ارسال توکن کاربر به بک‌ند
        },
        body: {
          deviceToken: clientFcmToken // توکن فایربیس رو میدیم به بک‌ند
        }
      }
    )

    return response
  } catch (error) {
    console.error('Backend API Error:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message
    })
  }
})
