<template>
  <div>
    <div class="flex justify-between items-center mb-3">
      <p class="text-sm" v-if="data">
        تعداد {{ data?.length }} دسته بندی در لیست دسته بندی مشتریان یافت شد
      </p>
    </div>
    <main class="space-y-3">
      <Skeleton
        v-if="pending"
        width="100%"
        height="110px"
        v-for="item in 10"
        :key="item"
      ></Skeleton>
      <AdminCategoriesCategoryCard
        v-else
        @success="showSuccess"
        v-for="item in data"
        :key="item._id"
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

let items = ref([1, 2, 3, 4, 5])

let { data, refresh, pending } =await useFetch(
  '/api/admin/customers/getCategories',
  {
    credentials: 'include'
  }
)

console.log(data.value)

let { showToast } = useToastComp()

async function showSuccess (text) {
  await refresh()
  showToast(text)
}
</script>
