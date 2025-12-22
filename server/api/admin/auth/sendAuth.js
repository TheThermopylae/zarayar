export default defineEventHandler(async event => {
  const token = getCookie(event, 'token')
  const config = useRuntimeConfig()

  const formData = await readMultipartFormData(event)
  const form = new FormData()

  // استخراج id
  const id = formData.find(item => item.name === 'id')?.data.toString()

  // ساخت form جدید شامل عکس‌ها
  formData.forEach(item => {
    if (item.type) {
      form.append(
        item.name,
        new File([item.data], item.filename, { type: item.type })
      )
    } else {
      form.append(item.name, item.data)
    }
  })

  try {
    const data = await fetch(
      `${config.public.API_BASE_URL}/admin/user/${id}/authentication`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: form
      }
    )

    return data
  } catch (error) {
    return error
  }
})
