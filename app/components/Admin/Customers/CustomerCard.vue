<template>
  <article class="p-3 rounded-10 border border-[#00000033] mb-2 last:m-0">
    <h4 class="mb-2 pb-2 border-b border-[#00000033]">
      {{ props.data.fname }} {{ props.data.lname }}
    </h4>
    <ul class="text-xs text-[#616161]">
      <li class="flex justify-between p-3">
        <h5>وزن خرید : {{ props.data.totalBuyWeight.toLocaleString() }} گرم</h5>
        <h5>
          وزن فروش : {{ props.data.totalSellWeight.toLocaleString() }} گرم
        </h5>
      </li>
      <li class="bg-[#FAFAFA] p-3 rounded">
        <h5>تعداد درخواست خرید : {{ props.data.buyCount.toLocaleString() }}</h5>
      </li>
      <li class="p-3">
        <h5>
          تعداد درخواست فروش : {{ props.data.sellCount.toLocaleString() }}
        </h5>
      </li>
      <li class="bg-[#FAFAFA] p-3 rounded">
        <h5>
          تعداد کل درخواست ها :
          {{ props.data.totalOrderCount.toLocaleString() }}
        </h5>
      </li>
    </ul>
  </article>
</template>

<script setup>
let props = defineProps(['data'])
</script>
