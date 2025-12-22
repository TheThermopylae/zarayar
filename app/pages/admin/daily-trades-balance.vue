<template>
  <div>
    <!-- <AdminTradesTabsSection /> -->
    <!-- <AdminTradesTotalBalance /> -->
    <section class="space-y-3 mt-3">
      <AdminTradesDataTable
        v-for="item in data.data"
        :key="item._id"
        :data="item"
      />
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'تراز |'
})

definePageMeta({
  title :'تراز'
})

let { data } = await useFetch('/api/admin/orders/balance', {
  credentials: 'include'
})

console.log(data.value)
</script>
