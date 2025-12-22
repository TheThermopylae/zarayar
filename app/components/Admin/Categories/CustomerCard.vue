<template>
  <div class="p-3 rounded-10 border border-stroke text-sm">
    <div
      class="flex justify-between items-center border-b border-stroke mb-2 pb-2"
    >
      <h4>{{ props.data.fname }} {{ props.data.lname }}</h4>
      <button @click="$emit('removeCustomer')">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.75 0.75L11.2549 11.2549"
            stroke="#616161"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M11.2549 0.75L0.749934 11.2548"
            stroke="#616161"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
    <div class="flex justify-between">
      <h4>شماره موبایل</h4>
      {{ props.data.phone }}
    </div>
  </div>
</template>

<script setup>
let props = defineProps(['data'])
</script>
