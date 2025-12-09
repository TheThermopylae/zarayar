<template>
  <div >
    <section>
      <AdminHomeItemsSection class="mb-2" />
      <AdminHomeItemsSection />
    </section>
  </div>
</template>

<script setup>

useHead({
  title: 'مدیریت سامانه |'
})

definePageMeta({
  title: 'مدیریت سامانه'
})
</script>

<style>
.p-inputnumber-input {
  text-align: center !important;
  background: none !important;
  border-top: none !important;
  border-bottom: none !important;
  border-radius: 0 !important;
  border-color: #bfbfbf !important;
}
.p-inputnumber-input:focus,
.p-inputnumber-input:hover {
  border-color: #bfbfbf !important;
}
</style>
