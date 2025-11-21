export default defineEventHandler(async event => {
  let token = getCookie(event, 'token')
  let config = useRuntimeConfig()
  let receiveBody = await readBody(event)

  try {
    let data = await $fetch(`${config.public.API_BASE_URL}/admin/banuser`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: {
        userId: receiveBody.id,
        text: receiveBody.text,
        permanent: true,
        duration: '1'
      },
      method: 'POST'
    })

    return data
  } catch (error) {
    return error
  }
})
