<template>
  <article class="p-2 border border-strokesec rounded-10 text-xs mb-2 last:m-0">
    <div
      class="flex items-center justify-between border-b border-strokesec pb-2 mb-2"
    >
      <h4
        class="bg-[#96A8254D] text-[#5A6804] text-xs font-bold px-2 py-1.5 rounded"
      >
        خرید نقد یکشنبه
      </h4>
      <div class="flex items-end gap-1">
        120
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.75 8.25C15.75 12.39 12.39 15.75 8.25 15.75C4.11 15.75 0.75 12.39 0.75 8.25C0.75 4.11 4.11 0.75 8.25 0.75C12.39 0.75 15.75 4.11 15.75 8.25Z"
            stroke="#616161"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.0327 10.6349L8.70766 9.24745C8.30266 9.00745 7.97266 8.42995 7.97266 7.95745V4.88245"
            stroke="#616161"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <ul>
      <li class="h-10 flex justify-between items-center p-2">
        وزن
        <p><span class="font-bold">15</span> گرم</p>
      </li>
      <li
        class="h-10 flex justify-between items-center p-2 bg-[#F6F6F6] rounded-10"
      >
        مظنه
        <p><span class="font-bold">5,000,000</span> ریال</p>
      </li>
      <li class="h-10 flex justify-between items-center p-2">
        مبلغ کل
        <p><span class="font-bold">10,000,000</span> ریال</p>
      </li>
      <li
        class="h-10 flex justify-between items-center p-2 bg-[#F6F6F6] rounded-10"
      >
        مشتری
        <button
          class="text-[#002F4C] bg-[#83BCFF4D] border border-[#1FA2FF] p-1 rounded"
        >
          مشاهده مانده
        </button>
        <p>هادی فرامرزی</p>
      </li>
      <li class="h-10 flex justify-between items-center p-2">
        شعبه درخواست
        <p>فرشیدنیا</p>
      </li>
      <li
        class="h-10 flex justify-between items-center p-2 bg-[#F6F6F6] rounded-10"
      >
        وضعیت معامله
        <span
          class="bg-[#DDB9764D] border border-[#D5AA51] rounded text-[#966D22] p-1"
          >در انتظار تایید</span
        >
      </li>
    </ul>
    <div class="grid grid-cols-3 gap-3 mt-3">
      <button class="bg-cgreen p-2 rounded-10 text-white">تایید</button>
      <button class="bg-[#E84362] p-2 rounded-10 text-white">لغو</button>
      <button
        class="flex justify-center items-center gap-1 border border-[#E84362] text-[#E84362] rounded-10 p-2"
      >
        به دلیل
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.52502 10.2948C9.23977 10.5959 8.76024 10.5959 8.47498 10.2948L4.90835 6.53002C4.69469 6.3045 4.33867 6.29488 4.11314 6.50853C3.88762 6.72219 3.878 7.07821 4.09165 7.30374L7.65828 11.0685C8.38727 11.838 9.61273 11.838 10.3417 11.0685L13.9084 7.30374C14.122 7.07821 14.1124 6.72219 13.8869 6.50853C13.6613 6.29488 13.3053 6.3045 13.0917 6.53002L9.52502 10.2948Z"
            fill="#E84362"
          />
        </svg>
      </button>
    </div>
  </article>
</template>

<script setup>
let props = defineProps(['data'])
let emit = defineEmits(['success', 'error'])

let loading = ref(false)

async function changeOrder (status) {
  loading.value = true

  try {
    let data = await $fetch('/api/admin/orders/changeOrder', {
      credentials: 'include',
      method: 'POST',
      body: { id: props.data._id, status }
    })

    emit('success')
  } catch (err) {
    emit('error')
  } finally {
    loading.value = false
  }
}
</script>
