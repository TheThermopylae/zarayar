<template>
  <div>
    <div class="flex justify-between items-center mb-3">
      <p class="text-sm">تعداد 3 دسته بندی در لیست دسته بندی مشتریان یافت شد</p>
    </div>
    <main class="space-y-3">
      <!-- <Skeleton
        v-if="pending"
        width="100%"
        height="110px"
        v-for="item in 10"
        :key="item"
      ></Skeleton> -->
      <AdminCategoriesCategoryCard
        @success="showToast('آیتم بروز شد')"
        v-for="item in items"
        :key="item"
        :data="item"
      />
      <Toast />
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'دسته بندی مشتریان |'
})

definePageMeta({
  title: 'دسته بندی مشتریان'
})

let route = useRoute()

import { io } from 'socket.io-client'
let config = useRuntimeConfig()

let items = ref([1, 2, 3, 4, 5])

// let { data: currencies, pending } = await useLazyFetch(
//   '/api/admin/currency/getCurrency',
//   {
//     credentials: 'include'
//   }
// )

let { showToast } = useToastComp()

// const socket = io(config.public.API_BASE_URL)

// socket.on('price:update', items => {
//   currencies.value = items
// })
</script>
