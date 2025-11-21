export default defineEventHandler(async event => {
  const token = getCookie(event, 'token')
  const config = useRuntimeConfig()

  const incoming = await readMultipartFormData(event)
  const form = new FormData()

  incoming.forEach(item => {
    if (item.type) {
      // فقط یک فایل
      form.append(
        item.name,
        new File([item.data], item.filename, { type: item.type })
      )
    } else {
      form.append(item.name, item.data.toString())
    }
  })

  try {
    const res = await fetch(`${config.public.API_BASE_URL}/user/deposit`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: form
    })

    return await res.json()
  } catch (error) {
    return error
  }
})
