<template>
  <article class="border border-gray-300 rounded-10 p-3 mb-2 last:m-0">
    <div class="flex justify-between text-sm border-b border-stroke mb-2 pb-2">
      <div class="flex items-center gap-2 font-bold text-graydark text-xs">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1667 17.0834H5.83341C3.33341 17.0834 1.66675 15.8334 1.66675 12.9167V7.08335C1.66675 4.16669 3.33341 2.91669 5.83341 2.91669H14.1667C16.6667 2.91669 18.3334 4.16669 18.3334 7.08335V12.9167C18.3334 15.8334 16.6667 17.0834 14.1667 17.0834Z"
            stroke="#616161"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.6416 6.474L11.0191 10.0459C10.4189 10.5097 9.58116 10.5097 8.98094 10.0459L4.3584 6.474"
            stroke="#616161"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        فیش
      </div>
      <div class="text-2sm flex items-center gap-2">
        <span class="bg-[#EFEFEF] text-graydark px-2 py-1 rounded-10"
          >13:17</span
        >
        <span class="bg-[#EFEFEF] text-graydark px-2 py-1 rounded-10"
          >1404/05/13</span
        >
        <NuxtLink
          class="bg-[#83BCFF] text-[#002F4C] px-2 py-1 rounded-10"
          :to="`${config.public.API_BASE_URL}${props.data.file}`"
          target="_blank"
          >مشاهده</NuxtLink
        >
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2 text-sm text-graydark">
      <h4>
        عنوان:
        <span class="font-bold">{{ props.data.title }}</span>
      </h4>
      <h4>
        توضیحات:
        <span class="font-bold">{{ props.data.description }}</span>
      </h4>
    </div>
  </article>
</template>

<script setup>
let props = defineProps(['data'])

let { userData } = userAuth()

let config = useRuntimeConfig()
</script>

<style>
.p-image-rotate-right-button,
.p-image-rotate-left-button {
  display: none !important;
}
</style>
