export default defineEventHandler(async event => {
  let token = getCookie(event, 'token')
  let config = useRuntimeConfig()
  let body = await readBody(event)

  console.log(body)

  try {
    let data = await $fetch(
      `${config.public.API_BASE_URL}/admin/wallet/${body._id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: 'PATCH',
        body
      }
    )

    return data
  } catch (error) {
    return error
  }
})
