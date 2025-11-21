<template>
  <article class="border border-gray-300 rounded-10 p-3 mb-2 last:m-0">
    <div class="flex justify-between text-sm font-bold">
      <div>
        <h4 v-if="props.data.itemType == 'gold'">طلا</h4>
        <h4 v-else-if="props.data.itemType == 'coin'">سکه</h4>
        <h4 v-else>نقره</h4>
      </div>
      <h4 class="text-yellow-500" v-if="props.data.status == 'pending'">
        در حال بررسی
      </h4>
      <h4 class="text-green-500" v-else-if="props.data.status == 'confirmed'">
        تایی شده
      </h4>
      <h4 class="text-red-500" v-else>رد شده</h4>
    </div>
    <div class="grid grid-cols-2 gap-2 my-3">
      <div class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <circle cx="12" cy="5" r="3" />
            <path
              d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"
            />
          </g>
        </svg>
        وزن: {{ props.data.weight }}
      </div>
      <div class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M8 8.5c3.85 0 7 2.5 7 4.5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2c0-2 3.15-4.5 7-4.5M8 10c-1.61 0-3.064.526-4.092 1.234C2.798 12.001 2.5 12.733 2.5 13a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5c0-.267-.297-1-1.408-1.766C11.064 10.526 9.609 10 8 10m0-9a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m0 1.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4"
          />
        </svg>
        دریافت کننده: {{ props.data.receiverName }}
      </div>
      <p class="col-span-2">توضیحات: {{ props.data.description }}</p>
    </div>
    <Image
      :src="`${config.public.API_BASE_URL}${props.data?.file}`"
      alt="Image"
      pt:root="!size-20"
      pt:image="!rounded-10"
      preview
    />
  </article>
</template>

<script setup>
let props = defineProps(['data'])

let config = useRuntimeConfig()
</script>

<style>
.p-image-rotate-right-button,
.p-image-rotate-left-button {
  display: none !important;
}
</style>
