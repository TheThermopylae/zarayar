<template>
  <article class="border border-gray-300 rounded-10 p-3 mb-2 last:m-0">
    <h4 class="text-yellow-500" v-if="props.data.status == 'pending'">
      در حال بررسی
    </h4>
    <h4 class="text-green-500" v-else-if="props.data.status == 'confirmed'">
      تایی شده
    </h4>
    <h4 class="text-red-500" v-else>رد شده</h4>

    <div class="grid grid-cols-2 gap-2 my-3">
      <div class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M46.5 0v139.6h23.3c0-23.3 0-69.8 23.3-93.1c23.2-23.3 46.5-23.3 69.8-23.3h46.5v395.6c0 34.9-11.6 69.8-46.5 69.8h-22.8l-.5 23.2h232.7v-23.3H349c-34.9 0-46.5-34.9-46.5-69.8V23.3H349c23.3 0 46.5 0 69.8 23.3s23.3 69.8 23.3 93.1h23.3V0z"
          />
        </svg>
         عنوان: {{ props.data.title }}
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