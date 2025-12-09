export default defineEventHandler(async event => {
  let token = getCookie(event, 'token')
  let config = useRuntimeConfig()
  let bodyData = await readBody(event)

  try {
    let data = await $fetch(
      `${config.public.API_BASE_URL}/admin/transfer/${bodyData.id}/status`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: 'PATCH',
        body: { status: bodyData.status }
      }
    )

    return data
  } catch (error) {
    return error
  }
})
