<template>
  <TitleSection title="افزودن تنظیمات" />
  <main class="space-y-4 bg-white p-3 rounded-10">
    <input
      type="text"
      placeholder="نام API"
      class="w-full bg-gray-100 rounded-xl py-2 px-3 text-sm text-gray-700 focus:outline-none mb-2"
      v-model="data.name"
    />
    <input
      type="text"
      placeholder="کلید API"
      class="w-full bg-gray-100 rounded-xl py-2 px-3 text-sm text-gray-700 focus:outline-none mb-2"
      v-model="data.apiKey"
    />
    <input
      type="text"
      placeholder="آدرس ای پی آی"
      class="w-full bg-gray-100 rounded-xl py-2 px-3 text-sm text-gray-700 focus:outline-none mb-2"
      v-model="data.apiurl"
    />
    <input
      type="text"
      placeholder="آی‌پی سرور"
      class="w-full bg-gray-100 rounded-xl py-2 px-3 text-sm text-gray-700 focus:outline-none mb-2"
      v-model="data.ip"
    />
    <input
      type="text"
      placeholder="آیدی سرویس"
      class="w-full bg-gray-100 rounded-xl py-2 px-3 text-sm text-gray-700 focus:outline-none mb-2"
      v-model="data.currencyId"
    />
    <Button
      class="w-full !text-sm"
      label="افزودن"
      @click="addSettingFunc"
      :loading="loading"
    />
    <Toast />
  </main>
</template>

<script setup>
let { showToast } = useToastComp()
let data = reactive({
  name: '',
  apiKey: '',
  apiurl: '',
  ip: '10.0.0.5',
  currencyId: ''
})

let loading = ref(false)

async function addSettingFunc () {
  loading.value = true

  try {
    let result = await $fetch('/api/admin/settingsApi/addSettings', {
      credentials: 'include',
      method: 'POST',
      body: data
    })

    showToast('تنظیمات با موفقیت اضافه شد')
  } catch (err) {
    showToast('error', 'خطا', err.message)
  } finally {
    loading.value = false
  }
}
</script>
