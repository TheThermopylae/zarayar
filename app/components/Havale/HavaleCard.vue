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
            d="M12.756 3.75H4.41239C2.66585 3.75 1.25 5.24238 1.25 7.08333V8.75M1.25 8.75V12.9167C1.25 14.7576 2.66585 16.25 4.41239 16.25H13.7019C15.3393 16.25 16.6667 14.8509 16.6667 13.125V12.2461M1.25 8.75H12.756"
            stroke="#616161"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M16.6666 4.16669L16.6666 9.58335M16.6666 4.16669L18.7499 6.25002M16.6666 4.16669L14.5833 6.25002"
            stroke="#616161"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        حواله {{ props.data.weight }} گرم
      </div>
      <div class="text-2sm flex items-center gap-2">
        <span class="bg-[#EFEFEF] text-graydark px-2 py-1 rounded-10"
          >1404/05/13</span
        >
        <h4
          class="bg-pending text-[#966D22] px-2 py-1 rounded-10"
          v-if="props.data.status == 'pending'"
        >
          در حال بررسی
        </h4>
        <h4
          class="bg-confirmed px-2 py-1 rounded-10"
          v-else-if="props.data.status == 'confirmed'"
        >
          تایی شده
        </h4>
        <h4 class="bg-reject px-2 py-1 rounded-10" v-else>رد شده</h4>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2 text-sm text-graydark">
      <h4>
        گیرنده حواله:
        <span class="font-bold">{{ props.data.receiverName }}</span>
      </h4>
      <h4>
        نزد:
        <span class="font-bold">{{ userData.lname }}</span>
      </h4>
    </div>
  </article>
</template>

<script setup>
let props = defineProps(['data'])

let { userData } = userAuth()
</script>

<style>
.p-image-rotate-right-button,
.p-image-rotate-left-button {
  display: none !important;
}
</style>
