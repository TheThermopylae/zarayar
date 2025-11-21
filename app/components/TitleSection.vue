<template>
  <header class="py-4">
    <div class="grid grid-cols-3 items-center">
      <button class="bg-gray-200 p-2 rounded-lg w-fit" @click="backFunc">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"
          />
        </svg>
      </button>
      <h1 class="text-lg text-slate-800 text-center">
        {{ props.title }}
      </h1>
      <div class="flex justify-end">
        <slot name="left-btn" />
      </div>
    </div>
  </header>
</template>

<script setup>
let props = defineProps(['title'])

const backFunc = () => history.back()
</script>
