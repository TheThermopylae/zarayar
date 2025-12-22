<template>
  <TitleSection title="تنظیمات">
    <template #left-btn>
      <NuxtLink
        to="/admin/settings/add"
        class="border border-green-500 bg-green-50 text-green-500 rounded px-4 py-1 hover:bg-green-100 transition"
        >افزودن</NuxtLink
      >
    </template>
  </TitleSection>
  <main class="space-y-4">
    <AdminApiCard
      v-for="item in data"
      :key="item._id"
      :data="item"
      @success="successFunc"
      @error="showError"
    />
    <Toast />
  </main>
</template>

<script setup>
let { showToast } = useToastComp()
let { data, refresh } = await useFetch('/api/admin/settingsApi/getSettings', {
  credentials: 'include'
})

async function successFunc (text) {
  await refresh()
  showToast(text)
}

async function showError (text) {
  showToast('error', 'خطا', text)
}
</script>
