export default defineEventHandler(async event => {
  let token = getCookie(event, 'token')
  let config = useRuntimeConfig()
  let body = await readBody(event)

  try {
    let data = await $fetch(`${config.public.API_BASE_URL}/admin/customers`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      method: 'POST',
      body
    })

    return data
  } catch (error) {

    return error
  }
})
