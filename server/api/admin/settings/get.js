export default defineEventHandler(async event => {
  let token = getCookie(event, 'token')
  let config = useRuntimeConfig()

  try {
    let data = await $fetch(`${config.public.API_BASE_URL}/setting/v2`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return data.data
  } catch (error) {
    console.log(error)
    return error
  }
})
