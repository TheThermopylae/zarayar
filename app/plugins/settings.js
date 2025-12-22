export default defineNuxtPlugin(async nuxtApp => {
  let { settings } = useSettings()
  let headers = useRequestHeaders(['cookie'])

  try {
    let data = await $fetch('/api/admin/settings/get', {
      headers
    })

    settings.value = data
  } catch (error) {
    console.log(error)

    settings.value = null
  }
})
