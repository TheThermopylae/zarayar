<template>
  <div class="p-3 rounded-10 border border-strokesec">
    <div
      class="flex justify-between items-center pb-2 border-b border-strokesec"
    >
      <h4 class="text-sm">
        <span
          class="px-2 py-0.5 rounded-10 bg-[#E7F2A7] text-xs font-bold"
          v-if="props.data.side == 'buy'"
          >خرید</span
        >
        <span
          class="px-2 py-0.5 rounded-10 bg-reject text-[#80182B] text-xs font-bold"
          v-else
          >فروش</span
        >
        نقد فردایی
      </h4>
      <div class="flex gap-2 text-xs">
        <span class="bg-main rounded-10 px-1.5 py-1">13:25</span>
        <span class="bg-main rounded-10 px-1.5 py-1">1404/08/21</span>
      </div>
    </div>
    <ul class="my-2 text-xs">
      <li class="h-10 px-2 flex justify-between items-center">
        نام و نام خانوادگی
        <span>هادی غلامیان</span>
      </li>
      <li
        class="h-10 px-2 flex justify-between items-center bg-[#FAFAFA] rounded-10"
      >
        وزن | تعداد
        <span>{{ props.data.weight }} گرم</span>
      </li>
      <li class="h-10 px-2 flex justify-between items-center">
        مظنه
        <span>{{ props.data.unitPrice.toLocaleString() }}</span>
      </li>
      <li
        class="h-10 px-2 flex justify-between items-center bg-[#FAFAFA] rounded-10"
      >
        مبلغ کل
        <span>{{ props.data.totalPrice.toLocaleString() }}</span>
      </li>
      <li
        class="h-10 px-2 flex justify-between items-center gap-5 bg-[#FAFAFA] rounded-10"
      >
        <h4 class="flex items-center gap-2">
          وضعیت
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.75 8.25C15.75 12.3921 12.3921 15.75 8.25 15.75C4.10786 15.75 0.75 12.3921 0.75 8.25C0.75 4.10786 4.10786 0.75 8.25 0.75C12.3921 0.75 15.75 4.10786 15.75 8.25Z"
              stroke="#616161"
              stroke-width="1.5"
            />
            <path
              d="M8.25 4.5L8.25 9.82849"
              stroke="#616161"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M8.25 12L8.2575 12"
              stroke="#616161"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </h4>
        <!-- <p class="p-1 bg-white border border-strokesec rounded-10 flex-grow">
          تایید شده توسط آقای جوینده
        </p> -->
        <span
          class="px-2 py-1 rounded-10 bg-pending text-[#5A6804]"
          v-if="props.data.status == 'pending'"
          >در انتظار تایید</span
          >
          <span class="px-2 py-1 rounded-10 bg-[#96A8254D] text-[#5A6804]"
          v-else-if="props.data.status == 'confirmed'"
          >تایید شده</span
        >
          <span class="px-2 py-1 rounded-10 bg-[#96A8254D] text-[#5A6804]"
          v-else
          >رد شده</span
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
let props = defineProps(['data'])
</script>
