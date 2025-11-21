<template>
  <TitleSection title="فیش های من" />
  <main class="bg-white p-3 rounded-10">
    <FishNavLinks />
    <FishCard v-for="item in data" :key="item._id" :data="item" />
  </main>
</template>

<script setup>
let { data } = await useFetch('/api/user/fish/getFish', {
  credentials: 'include'
})

console.log(data.value)
</script>
