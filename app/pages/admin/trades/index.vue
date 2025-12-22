<template>
  <div>
    <AdminTradesFilterDrawer />
    <p class="my-4 text-sm">تعداد 1053 معامله در لیست معامله ها یافت شد</p>
    <main class="space-y-3">
      <Skeleton v-for="item in 3" width="100%" height="14rem" v-if="pending" />
      <AdminTradesArchiveTradeCard
        v-else
        v-for="item in data"
        :key="item._id"
        :data="item"
        @success="successFunc"
      />
    </main>
    <Toast />
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

let { data, refresh, pending } = useLazyFetch(
  '/api/admin/orders/getOrders',
  {
    credentials: 'include'
  }
)

console.log(data.value)

async function successFunc (text) {
  await refresh()
  showToast(text)
}
</script>
