<template>
  <div>
    <AdminTradesFilterDrawer />
    <p class="my-4 text-sm">تعداد 1053 معامله در لیست معامله ها یافت شد</p>
    <main class="space-y-3">
      <AdminTradesArchiveTradeCard v-for="item in 5" />
    </main>
    <Toast />
    <!-- v-for="item in data"
    :key="item._id"
    :data="item"
    @success="successFunc" -->
  </div>
</template>

<script setup>
useHead({
  title: 'آرشیو معاملات |'
})

definePageMeta({
  title: 'آرشیو معاملات'
})

let { showToast } = useToastComp()

let { data, refresh } = await useFetch('/api/admin/transfers/getTransfers', {
  credentials: 'include'
})

async function successFunc (text) {
  await refresh()
  showToast(text)
}
</script>
