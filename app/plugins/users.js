export default defineNuxtPlugin(async nuxtApp => {
  let { users } = useUsers()
  let config = useRuntimeConfig()

  try {
    let data = await $fetch(`${config.public.API_BASE_URL}/online-users`, {
      credentials: 'include'
    })

    users.value = data
  } catch (error) {
    console.log(error)
    users.value = null
  }
})
