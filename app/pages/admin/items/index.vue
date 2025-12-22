<template>
  <div>
    <div class="flex justify-between items-center mb-3">
      <p class="text-sm" v-if="items">
        تعداد {{ items.length }}
        <span
          v-text="
            !route.query.type
              ? 'مظنه'
              : route.query.type == 'coins'
              ? 'سکه'
              : route.query.type == 'silvers'
              ? 'نقره'
              : ''
          "
        ></span>
        در لیست
        <span
          v-text="
            !route.query.type
              ? 'مظنه'
              : route.query.type == 'coins'
              ? 'سکه'
              : route.query.type == 'silvers'
              ? 'نقره'
              : ''
          "
        ></span>
        ها یافت شد
      </p>
      <AdminItemsCategoryDrawer
        :data="items"
        :categories="categories"
        @success="showSuccess"
        @warn="showWarn"
      />
    </div>
    <main class="space-y-3">
      <!-- <Skeleton
        v-if="pending"
        width="100%"
        height="110px"
        v-for="item in 10"
        :key="item"
      ></Skeleton> -->
      <AdminItemsItemCard
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
  title: 'مدیریت آیتم ها |'
})

definePageMeta({
  title: 'مدیریت آیتم ها',
  layout: false
})

let route = useRoute()

let { data: items, pending } = await useFetch(
  '/api/admin/currency/getCurrency',
  {
    credentials: 'include'
  }
)

// console.log(items.value)

let {
  data: categories,
  pending: catPen,
  refresh
} = await useFetch('/api/admin/itemsCategory/get', {
  credentials: 'include'
})

console.log(categories.value)

let { showToast } = useToastComp()

async function showSuccess (text) {
  await refresh()
  showToast(text)
}

function showWarn (text) {
  showToast('warn', 'اخطار', text)
}
</script>
