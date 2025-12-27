<template>
  <ClientOnly>
    <AdminTheHeader />
    <div class="mt-[52px]">
      <AdminHomeTopLinks v-if="route.path == '/admin'" />
      <AdminItemsTopLinks v-if="route.path == '/admin/items'" />
      <AdminCategoriesTopLinks
        v-if="
          route.path.startsWith('/admin/customers-categories/features') ||
          route.path.startsWith('/admin/customers-categories/customers')
        "
      />
      <div class="max-w-[640px] m-auto p-3">
        <slot />
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
let route = useRoute();
</script>
