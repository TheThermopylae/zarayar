<template>
  <section
    class="grid grid-cols-2 border-b border-strokesec text-center text-xs text-black"
  >
    <NuxtLink
      :to="`/admin/customers-categories/features/${route.params.id}`"
      class="py-3 border-b border-white"
      activeClass="!border-primary"
    >
      ویزگی های دسته بندی
    </NuxtLink>
    <NuxtLink
      :to="`/admin/customers-categories/customers/${route.params.id}`"
      class="py-3 border-b border-white"
      activeClass="!border-primary"
    >
      مشتری های دسته بندی
    </NuxtLink>
  </section>
</template>

<script setup>
let route = useRoute()
</script>
