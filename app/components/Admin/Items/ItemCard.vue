<template>
  <div class="p-3 rounded-10 border border-stroke">
    <h4 class="pb-2 border-b border-stroke">کیلویی</h4>
    <ul class="my-2">
      <li class="h-10 p-2 flex items-center">گروه</li>
      <li
        class="h-10 px-2 flex justify-between items-center bg-[#FAFAFA] rounded-10"
      >
        قیمت فروش به مشتری
        <span>48.300</span>
      </li>
      <li class="h-10 px-2 flex justify-between items-center">
        سود خرید از مشتری
        <span>-100</span>
      </li>
      <li
        class="h-10 px-2 flex justify-between items-center bg-[#FAFAFA] rounded-10"
      >
        وضعیت فروش به مشتری
        <span class="rounded-10 px-1.5 py-0.5 border bg-[#96A8254D]">فعال</span>
      </li>
      <li class="h-10 px-2 flex justify-between items-center">
        وضعیت خرید از مشتری
        <span class="rounded-10 px-1.5 py-0.5 border bg-[#96A8254D]">فعال</span>
      </li>
    </ul>
    <div class="grid grid-cols-2 gap-2">
      <Button
        label="ویرایش"
        pt:root="!bg-white !border !text-primary"
      />
      <Button
        label="حذف"
        @click="visible = true"
        pt:root="!bg-white !border !border-[#E84362] !text-[#E84362]"
      />
    </div>
  </div>

  <Drawer
    v-model:visible="visible"
    header="حذف آیتم"
    position="bottom"
    style="height: auto"
  >
    <p>آیا میخواهید این آیتم را حذف کنید؟</p>
    <div class="grid grid-cols-2 gap-2 mt-5">
      <Button
        label="بله"
        @click="visible = false"
      />
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
