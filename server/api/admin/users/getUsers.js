export default defineEventHandler(async event => {
  let token = getCookie(event, 'token')
  let config = useRuntimeConfig()

  try {
    let data = await $fetch(`${config.public.API_BASE_URL}/admin/user`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return data.users
  } catch (error) {
    return error
  }
})
