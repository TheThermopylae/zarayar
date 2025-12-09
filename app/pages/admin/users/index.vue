<template>
  <div>
    <AdminUsersFilterDrawer />
    <p class="text-xs my-5">تعداد 203 مشتری در لیست مشتریان یافت شد.</p>
    <main class="space-y-3">
      <AdminUsersUserCard
        v-for="item in data"
        :data="item"
        :key="item"
        @success="refreshUsers"
      />
    </main>
    <Toast />
  </div>
</template>

<script setup>
useHead({
  title: 'مدیریت کاربران |'
})

definePageMeta({
  title: 'مدیریت کاربران'
})

let { showToast } = useToastComp()

// let { data, refresh } = await useFetch('/api/admin/users/getUsers', {
//   credentials: 'include'
// })

let data = ref([1, 2, 3])

function refreshUsers (text) {
  showToast(text)
  refresh()
}
</script>
