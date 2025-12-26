<template>
  <section class="mt-5">
    <div
      class="flex justify-between items-center gap-2 text-xs mb-3 text-graydark"
    >
      <div class="flex items-center gap-1">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="text-red-500"
        >
          <path
            d="M2.5 5.83335C2.5 3.53217 4.36548 1.66669 6.66667 1.66669H13.3333C15.6345 1.66669 17.5 3.53217 17.5 5.83335V14.1667C17.5 16.4679 15.6345 18.3334 13.3333 18.3334H6.66667C4.36548 18.3334 2.5 16.4679 2.5 14.1667V5.83335Z"
            stroke="#BFBFBF"
            stroke-width="1.5"
          />
          <path
            d="M6.66667 6.83331H13.3333"
            stroke="#BFBFBF"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.66667 10.1666H13.3333"
            stroke="#BFBFBF"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 13.4999H12.5"
            stroke="#BFBFBF"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h2>معاملات امروز</h2>
      </div>
      <div class="h-[1px] flex-grow bg-stroke"></div>

      <NuxtLink
        to="/orders"
        class="flex items-center gap-2 bg-[#F5F7FA] px-2 py-1.5 rounded-10"
      >
        مشاهده بیشتر
        <svg
          width="6"
          height="11"
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.80052 9.5L1.14032 6.03244C0.619894 5.53941 0.619893 4.71059 1.14032 4.21756L4.80052 0.75"
            stroke="#BFBFBF"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </NuxtLink>
    </div>

    <article
      class="px-2 py-3 rounded-2xl border border-stroke mb-2 last:m-0"
      v-if="props.data.length > 0"
      v-for="item in props.data"
      :key="item._id"
    >
      <div
        class="flex items-center justify-between text-xs border-b border-stroke pb-2 mb-2"
        :class="item.side == 'buy' ? 'text-cgreen' : 'text-cred'"
      >
        <div class="flex items-center gap-2 font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 9.867L8.186 6.053a1.5 1.5 0 0 0-1.061-.44M2.25 9.868l3.814-3.814c.293-.293.677-.44 1.061-.44m0 13.395V5.614m9.75-.124v13.394m4.875-4.253l-3.814 3.814c-.293.293-.677.44-1.061.44M12 14.63l3.814 3.814c.293.293.677.44 1.061.44"
            />
          </svg>
          <h4>
            <span v-text="item.side == 'buy' ? 'خرید' : 'فروش'"></span>
            {{ item.currencyId.name }}
          </h4>
        </div>
        <div class="flex items-center gap-1">
          <span class="bg-[#EFEFEF] text-graydark px-2 py-1 rounded-10">{{
            toPersianDate(item.createdAt).split(',')[1]
          }}</span>
          <span
            class="text-[#966D22] bg-pending px-2 py-1 rounded-10"
            v-if="item.status == 'pending'"
            >در انتظار تایید</span
          >
          <span
            class="text-cred bg-reject px-2 py-1 rounded-10"
            v-else-if="item.status == 'rejected'"
            >رد شده</span
          >
          <span class="text-cgreen bg-confirm px-2 py-1 rounded-10" v-else
            >تایید شده</span
          >
        </div>
      </div>
      <p class="text-xs text-graydark">
        <span v-text="item.side == 'buy' ? 'خرید' : 'فروش'"></span> پس فردایی به
        وزن {{ item.weightGram }} گرم در مظنه
        {{ item.unitPrice.toLocaleString() }} ریال به مبلغ
        {{ item.totalPrice.toLocaleString() }}
        ریال
      </p>
    </article>
    <div v-else class="flex flex-col items-center">
      <img src="/no-orders.svg" />
      <p class="mt-2 text-sm">امروز معامله جدیدی در اپلیکیشن باز نکرده اید.</p>
    </div>
  </section>
</template>

<script setup>
let { toPersianDate } = usePersianDate()
let props = defineProps(['data', 'pending'])
</script>
