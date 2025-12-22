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
      <span
        class="text-xs px-2 py-1 rounded-10 bg-pending text-[#5A6804]"
        v-if="props.data.status == 'pending'"
        >در انتظار تایید</span
      >
      <span
        class="text-xs px-2 py-1 rounded-10 bg-[#96A8254D] text-[#5A6804]"
        v-else-if="props.data.status == 'confirmed'"
        >تایید شده</span
      >
      <span
        class="text-xs px-2 py-1 rounded-10 bg-[#96A8254D] text-[#5A6804]"
        v-else
        >رد شده</span
      >
    </div>
    <ul class="my-2 text-xs">
      <li
        class="h-10 px-2 flex justify-between items-center bg-[#FAFAFA] rounded-10"
      >
        وزن
        <span>{{ props.data.weightGram }} گرم</span>
      </li>

      <li class="h-10 px-2 flex justify-between items-center">
        فی
        <span>{{ props.data.unitPrice.toLocaleString() }} ریال</span>
      </li>
      <li
        class="h-10 px-2 flex justify-between items-center bg-[#FAFAFA] rounded-10"
      >
        مبلغ کل
        <span>{{ props.data.totalPrice.toLocaleString() }} ریال</span>
      </li>
      <li class="h-10 px-2 flex justify-between items-center gap-5">
        تاریخ
        <span>
          {{ toPersianDate(props.data.createdAt) }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
let { toPersianDate } = usePersianDate()
let props = defineProps(['data'])
</script>
