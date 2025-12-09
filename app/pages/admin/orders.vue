<template>
  <section class="rounded-10 p-3 bg-white">
    <AdminOrdersOrderCard
      v-for="item in data"
      :key="item._id"
      :data="item"
      @success="successFunc"
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

let { data, refresh } = await useFetch('/api/admin/orders/getOrders', {
  credentials: 'include'
})

async function successFunc () {
  await refresh()
  showToast('وضعیت سفارش با موفقیت تغییر کرد')
}
</script>
