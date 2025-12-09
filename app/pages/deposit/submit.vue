<template>
  <TitleSection title="ارسال فیش" />

  <main class="space-y-4 bg-white rounded-xl p-3">
    <FishNavLinks />

  </main>
</template>

<script setup>
useHead({
  title: 'ثبت فیش |'
})

let { showToast } = useToastComp()

let data = reactive({
  title: '',
  description: '',
  file: ''
})

let loading = ref(false)

function handleFiles (e) {
  const file = e.target.files[0]
  data.file = file
}

async function submitFish () {
  if (!data.file)
    showToast('warn', 'اخطار', 'باید یک فایل جهت ارسال فیش انتخاب کنید')
  else {
    loading.value = true

    try {
      let formData = new FormData()
      formData.append('title', data.title)
      formData.append('description', data.description)
      if (data.file) {
        formData.append('file', data.file)
      }

      let response = await $fetch('/api/user/fish/submit', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      })

      showToast(response.message)
      for (let f in data) data[f] = ''
    } catch (err) {
      showToast('error', 'خطا', err.message)
    } finally {
      loading.value = false
    }
  }
}
</script>
