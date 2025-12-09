<template>
  <div class="p-3 rounded-10 border border-strokesec">
    <div
      class="flex justify-between items-center pb-2 border-b border-strokesec"
    >
      <h4 class="text-sm">
        <span class="px-2 py-0.5 rounded-10 bg-[#E7F2A7] text-xs font-bold"
          >خرید</span
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
        <span>17 گرم</span>
      </li>
      <li class="h-10 px-2 flex justify-between items-center">
        مظنه
        <span>500,000</span>
      </li>
      <li
        class="h-10 px-2 flex justify-between items-center bg-[#FAFAFA] rounded-10"
      >
        مبلغ کل
        <span>500,000</span>
      </li>
      <li class="h-10 px-2 flex justify-between items-center">
        مظنه
        <span>500,000</span>
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
        <p class="p-1 bg-white border border-strokesec rounded-10 flex-grow">
          تایید شده توسط آقای جوینده
        </p>
        <span class="px-2 py-1 rounded-10 bg-[#96A8254D] text-[#5A6804]"
          >تایید شده</span
        >
      </li>
    </ul>
    <Button label="حذف" pt:root="!bg-[#E8436226] !text-cred !border !border-cred w-full" />
  </div>

  <Drawer
    v-model:visible="visible"
    header="حذف دسته بندی"
    position="bottom"
    style="height: auto"
  >
    <p>آیا میخواهید این دسته بندی را حذف کنید؟</p>
    <div class="grid grid-cols-2 gap-2 mt-5">
      <Button label="بله" @click="visible = false" />
      <Button
        label="خیر"
        @click="visible = false"
        pt:root="!bg-[#E84362] !border-none"
      />
    </div>
  </Drawer>
</template>

<script setup>
import NumberFlow from '@number-flow/vue'

let { showToast } = useToastComp()
let props = defineProps(['data'])
let emit = defineEmits(['success'])

let visible = ref(false)
let loading = ref(false)

async function updateItemFunc () {
  try {
    let data = await $fetch('/api/admin/currency/updateCurrency', {
      credentials: 'include',
      method: 'POST',
      body: { ...props.data }
    })

    emit('success', data.message)
  } catch (err) {
    showToast('error', 'خطا', err.message)
  }
}

async function removeItemFunc () {
  try {
    loading.value = true

    let data = await $fetch('/api/admin/currency/removeCurrency', {
      credentials: 'include',
      method: 'POST',
      body: { id: props.data._id }
    })

    emit('success', data.message)
  } catch (err) {
    showToast('error', 'خطا', err.message)
  } finally {
    loading.value = true
  }
}
</script>
