<template>
  <div>
    <section>
      <AdminHomeItemsSection @error="showError" :items="items" />
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

let { showToast } = useToastComp()

let { data: items, pending } = await useFetch(
  '/api/admin/currency/getCurrency',
  {
    credentials: 'include'
  }
)

console.log(items.value)

function showError (text) {
  showToast('error', 'خطا', text)
}
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
