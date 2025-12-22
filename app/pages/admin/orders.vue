<template>
  <section class="rounded-10 p-3 bg-white space-y-3">
    <Skeleton v-for="item in 3" width="100%" height="14rem" v-if="pending" />
    <AdminOrdersOrderCard
      v-else
      v-for="item in data"
      :key="item._id"
      :data="item"
      @success="successFunc"
      @error="errorFunc"
    />
    <Toast />
  </section>
</template>

<script setup>
useHead({
  title: 'خرید و فروش ها |'
})

definePageMeta({
  title: 'خرید و فروش ها'
})

let { showToast } = useToastComp()

let { data, refresh, pending } = await useFetch('/api/admin/orders/getOrders', {
  credentials: 'include'
})

console.log(data.value)

async function successFunc () {
  await refresh()
  showToast('وضعیت سفارش با موفقیت تغییر کرد')
}

async function errorFunc (text) {
  showToast('error', 'خطا', text)
}
</script>
