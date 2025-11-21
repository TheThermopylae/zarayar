<template>
  <TitleSection title="مدیریت معامله ها" />
  <section class="rounded-10 p-3 bg-white">
    <AdminOrdersOrderCard
      v-for="item in data"
      :key="item._id"
      :data="item"
      @success="successFunc"
    />
  </section>
  <Toast />
</template>

<script setup>
let { showToast } = useToastComp()

let { data, refresh } = await useFetch('/api/admin/orders/getOrders', {
  credentials: 'include'
})

console.log(data.value)

async function successFunc () {
  await refresh()
  showToast('وضعیت سفارش با موفقیت تغییر کرد')
}
</script>
