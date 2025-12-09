<template>
  <div class="space-y-3">
    <AdminCategoriesCustomerCard
      v-for="item in items"
      :key="item"
      @removeCustomer="items.pop()"
    />
  </div>
</template>

<script setup>
useHead({
  title: 'ویرایش (بنکدار) |'
})

definePageMeta({
  title: 'ویرایش (بنکدار)'
})

let items = ref([1, 2, 3, 4])
</script>
