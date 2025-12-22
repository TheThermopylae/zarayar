// server/api/admin/itemsCategory/update/[id].put.js

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'token')
  const config = useRuntimeConfig()

  // ۱. گرفتن آیدی از نام فایل ([id])
  // چون اسم فایل [id] هست، ناکست اون رو میذاره اینجا:
  const id = getRouterParam(event, 'id')

  // ۲. گرفتن بادی
  const body = await readBody(event)

  try {
    // ۳. ارسال به بک‌ند اصلی
    const data = await $fetch(`${config.public.API_BASE_URL}/admin/currency-groups/${id}`, {
      method: 'DELETE', // یا POST بسته به بک‌ندت
      headers: {
        Authorization: `Bearer ${token}`
      },
      body
    })

    return data
  } catch (error) {
    return error
  }
})