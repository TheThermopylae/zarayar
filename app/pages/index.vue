<template>
  <div>
    <HomeWarnSection />
    <HomeItemsSection @refreshOrders="refresh" />
    <HomeRecentOrders :data="data" :pending="pending" />
  </div>
</template>

<script setup>
useHead({
  title: 'صفحه اصلی |'
})

definePageMeta({
  title: 'زرعیار آبشده'
})

let { data, refresh, pending } = useLazyFetch('/api/user/orders/getOrders', {
  credentials: 'include'
})
</script>
