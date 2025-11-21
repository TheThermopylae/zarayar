<template>
  <TitleSection title="حواله های من" />
  <main class="bg-white p-3 rounded-10">
    <HavaleNavLinks />
    <HavaleCard v-for="item in data" :key="item._id" :data="item" />
  </main>
</template>

<script setup>
let { data } = await useFetch('/api/user/havale/getHavale', {
  credentials: 'include'
})
</script>
