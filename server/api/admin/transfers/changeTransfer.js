export default defineEventHandler(async event => {
  let token = getCookie(event, 'token')
  let config = useRuntimeConfig()
  let body = await readBody(event)

  try {
    let data = await $fetch(
      `${config.public.API_BASE_URL}/admin/transfer/${body.id}/status/${body.status}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: 'PATCH',
      }
    )

    return data
  } catch (error) {
    return error
  }
})
