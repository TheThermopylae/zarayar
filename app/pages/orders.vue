<template>
  <main>
    <Skeleton
      width="full"
      height="8rem"
      v-if="pending"
      v-for="item in 5"
      :key="item"
      class="mb-3"
    ></Skeleton>
    <OrdersOrderCard v-for="item in data" :key="item._id" :data="item" v-else />
  </main>
</template>

<script setup>
useHead({
  title: 'خرید و فروش ها |'
})

definePageMeta({
  title: 'خرید و فروش ها'
})

let { data, pending } = useLazyFetch('/api/user/orders/getOrders', {
  credentials: 'include'
})
</script>
