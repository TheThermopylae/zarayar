<template>
  <section class="border border-strokesec p-3 rounded-10">
    <div class="max-w-[800px] flex-grow overflow-auto">
      <table class="w-full text-cnter text-xs md:text-sm">
        <thead>
          <tr class="brder-b border-strokesec">
            <th class="text-right pb-2">{{ props.data.name }}</th>
            <th class="text-right pb-2">وزنی (گرم)</th>
            <th class="text-right pb-2">ریالی (ریال)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <!-- <td class="bg[#F4F4F4] p-3 rounded-r-10">تراز کل</td> -->
            <!-- <td class="bg-[#F4F4F4] text-cred p-3">9،758.065- بد</td> -->
            <!-- <td class="bg-[#F4F4F4] text-cgreen p-3 rounded-l-10">
              801،740،662،680 بس
            </td> -->
          </tr>
          <tr class="text-cred">
            <td class="p-3">
              <h4 class="mb-1">
                فروش ({{ props.data.total.buy.count }})
              </h4>
              <!-- میانگین : -->
            </td>
            <td class="p-3">
              <h4 class="mb-1">{{ props.data.total.buy.weight }}</h4>
              <!-- 5 -->
            </td>
            <td class="p-3">
              <h4 class="mb-1">
                {{ props.data.total.buy.amount.toLocaleString() }}
              </h4>
              <!-- 291،861،720 -->
            </td>
          </tr>
          <tr>
            <td class="p-3 text-cgreen">
              <h4 class="mb-1">
                خرید ({{ props.data.total.buy.count }})
              </h4>
              <!-- میانگین : -->
            </td>
            <td class="p-3">
              <h4 class="mb-1">{{ props.data.total.buy.weight }}</h4>
              <!-- 5 -->
            </td>
            <td class="p-3">
              <h4 class="mb-1">
                {{ props.data.total.buy.amount.toLocaleString() }}
              </h4>
              <!-- 291،861،720 -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 class="text-center mt-3 pt-3 border-t border-strokesec">
      تعداد معاملات :
      {{ props.data.total.buy.count + props.data.total.sell.count }}
    </h3>
  </section>
</template>

<script setup>
let props = defineProps(['data'])
</script>
