<template>
  <TitleSection title="فیش | قبض های ارسالی" />
  <main class="p-3 rounded-10 bg-white space-y-3">
    <AdminDepositsDepositCard
      v-for="item in data"
      :key="item._id"
      :data="item"
      @success="successFunc"
    />
  </main>
  <Toast />
</template>

<script setup>
useHead({
  title: 'فیش ها |'
})

let { showToast } = useToastComp()

let { data, refresh } = await useFetch('/api/admin/deposits/getDeposits', {
  credentials: 'include'
})

async function successFunc (text) {
  await refresh()
  showToast(text)
}
</script>
