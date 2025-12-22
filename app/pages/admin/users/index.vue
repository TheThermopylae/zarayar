<template>
  <div>
    <AdminUsersFilterDrawer :data="filterData" @refreshFilter="refresh" />
    <p class="text-xs mb-5" v-if="data">
      تعداد {{ data.count }} مشتری در لیست مشتریان یافت شد.
    </p>
    <main class="space-y-3">
      <Skeleton
        v-for="item in 5"
        :key="5"
        width="100%"
        height="3rem"
        v-if="pending"
      />
      <AdminUsersUserCard
        v-else
        v-for="item in data.users"
        :data="item"
        :key="item"
        @successRefresh="refreshUsers"
        @success="showSuccessToast"
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

let filterData = ref({
  fullname: '',
  phone: '',
  nationalityid: '',
  accountCode: '',
  accountGroup: '',
  status: ''
})

let { data, refresh, pending } = useLazyFetch(() => '/api/admin/users/filter', {
  credentials: 'include',
  method: 'POST',
  body: filterData,
  watch: false // 👈 مهم
})

console.log(data.value)

function refreshUsers (text) {
  showToast(text)
  refresh()
}

function showSuccessToast (text) {
  showToast(text)
}
</script>
