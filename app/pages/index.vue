<template>
  <div>
    <HomeWarnSection />
    <HomeItemsSection @refreshOrders="refresh" />
    <HomeRecentOrders :data="todayOrders" :pending="pending" />
  </div>
</template>

<script setup>
useHead({
  title: 'صفحه اصلی |'
})

definePageMeta({
  title: 'زرعیار آبشده'
})

let { data, refresh, pending } = await useFetch('/api/user/orders/getOrders', {
  credentials: 'include'
})

const now = new Date()

const year = now.getFullYear()
const month = now.getMonth() + 1
const day = now.getDate()

let todayOrders = computed(() => {
  return data.value
    ? data.value.filter(
        order => order.createdAt.split('T')[0] == `${year}-${month}-${day}`
      )
    : []
})

console.log(todayOrders.value)
</script>
