<template>
  <div>
    <AdminTradesTotalBalance />

    <section class="space-y-3 mt-3">
      <AdminTradesDataTable v-for="item in 2" />
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'گزارشات |'
})

definePageMeta({
  title: 'گزارشات'
})
</script>
