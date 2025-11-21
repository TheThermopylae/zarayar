export default defineEventHandler(async event => {
  const token = getCookie(event, 'token')
  const config = useRuntimeConfig()
  const body = await readBody(event)

  try {
    const data = await $fetch(
      `${config.public.API_BASE_URL}/admin/user/${body.id}/verification`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: { status: body.status, note: body.note },
        method: 'PUT'
      }
    )

    return data
  } catch (error) {
    return error
  }
})
