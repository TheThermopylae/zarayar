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
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.66667 10.1666H13.3333"
            stroke="#BFBFBF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 13.4999H12.5"
            stroke="#BFBFBF"
            stroke-width="1.5"
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
      </NuxtLink>
    </div>

    <template v-if="props.pending">
      <Skeleton
        v-for="item in 3"
        :key="item"
        width="100%"
        height="4rem"
        class="mb-2 !rounded-10"
      />
    </template>

    <template v-else-if="props.data && props.data.length > 0">
      <article
        class="px-2 py-3 rounded-2xl border border-stroke mb-2 last:m-0"
        v-for="item in props.data"
        :key="item._id"
      >
        <div
          class="flex items-center justify-between text-xs border-b border-stroke pb-2 mb-2"
          :class="item.side == 'buy' ? 'text-cgreen' : 'text-cred'"
        >
          <div class="flex items-center gap-2 font-bold">
            <h4>
              <span v-text="item.side == 'buy' ? 'خرید' : 'فروش'"></span>
              {{ item.currencyId.name }}
            </h4>
          </div>
          <div class="flex items-center gap-1">
            <span class="bg-[#EFEFEF] text-graydark px-2 py-1 rounded-10">
              {{ toPersianDate(item.createdAt).split(",")[1] }}
            </span>
          </div>
        </div>
        <p class="text-xs text-graydark">
          <span v-text="item.side == 'buy' ? 'خرید' : 'فروش'"></span> پس فردایی
          به وزن {{ item.weightGram }} گرم در مظنه
          {{ item.unitPrice.toLocaleString() }} ریال به مبلغ
          {{ item.totalPrice.toLocaleString() }}
          ریال
        </p>
      </article>
    </template>

    <div v-else class="flex flex-col items-center py-4">
      <img src="/no-orders.svg" class="w-1/2 opacity-50" />
      <p class="mt-2 text-sm text-gray-500">
        امروز معامله جدیدی ثبت نکرده‌اید.
      </p>
    </div>
  </section>
</template>

<script setup>
let { toPersianDate } = usePersianDate();
// برای اطمینان props را تعریف کنید (هرچند در ستاپ اختیاری است اما برای IDE خوب است)
const props = defineProps(["data", "pending"]);
</script>