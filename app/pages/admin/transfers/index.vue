<template>
  <div>
    <AdminTransfersFilterDrawer />
    <p class="my-4 text-sm">تعداد 53 حواله در لیست حواله ها یافت شد</p>
    <main class="space-y-3">
      <AdminTransfersTransferCard v-for="item in 5" />
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
  title: 'مدیریت حواله ها |'
})

definePageMeta({
  title: 'مدیریت حواله ها'
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
