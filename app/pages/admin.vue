<template>
  <div>
    <NuxtLayout name="admin">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

useHead({
  titleTemplate: `%s پنل ادمین`
})
</script>
