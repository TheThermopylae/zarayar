<template>
  <main class="space-y-3">
    <div
      class="text-center flex justify-between bg-white rounded-xl p-2 border border-gray-100"
    >
      <button id="grami" class="w-full bg-gray-200 p-3 rounded-lg">گرمی</button>
      <button id="number" class="w-full p-3 rounded-lg">تعدادی</button>
    </div>
    <AdminCurrencyItemCard
      @success="refreshItems"
      v-for="item in items"
      :key="item._id"
      :data="item"
    />
    <Toast />
  </main>
</template>

<script setup>
let { data: items, refresh } = await useFetch(
  '/api/admin/currency/getCurrency',
  {
    credentials: 'include'
  }
)
let { showToast } = useToastComp()

async function refreshItems () {
  showToast('آیتم با موفقیت حذف شد')
  await refresh()
}
console.log(items.value)
</script>
