<template>
  <div class="p-3 rounded-10 border border-strokesec">
    <div
      class="flex justify-between items-center pb-2 border-b border-strokesec"
    >
      <h4>هادی غلامیان</h4>
      <div class="flex gap-2 text-xs">
        <span class="bg-main rounded-10 px-1.5 py-1">13:25</span>
        <span class="bg-main rounded-10 px-1.5 py-1">1404/08/21</span>
      </div>
    </div>
    <ul class="my-2 text-xs">
      <li class="h-10 px-2 flex justify-between items-center">
        دریافت کننده حواله
        <span>هادی غلامیان</span>
      </li>
      <li
        class="h-10 px-2 flex justify-between items-center bg-[#FAFAFA] rounded-10"
      >
        نزد (همکار)
        <span>توتونچی</span>
      </li>
      <li class="h-10 px-2 flex justify-between items-center">
        میزان حواله
        <span>47 گرم</span>
      </li>
      <li
        class="h-10 px-2 flex justify-between items-center bg-[#FAFAFA] rounded-10"
      >
        شماره سند
        <span>35642</span>
      </li>
      <li class="h-10 px-2 flex justify-between items-center">
        وضعیت حواله
        <span class="px-2 py-1 rounded-10 bg-pending text-primary"
          >در انتظار تایید</span
        >
      </li>
    </ul>
    <div class="grid grid-cols-3 gap-2">
      <Button label="تایید" pt:root="!bg-cgreen" />
      <Button pt:root="!bg-cred"> عدم تایید </Button>
      <Button
        label="مانده حساب"
        pt:root="!bg-white !border !border-[#83BCFF] !text-[#2F79CF]"
      />
    </div>
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
