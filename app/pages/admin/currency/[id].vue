<template>
  <TitleSection title="افزودن آیتم" />
  <main class="p-3 rounded-10 bg-white space-y-4">
    <!-- نام آیتم -->
    <div>
      <label class="block mb-1">نام آیتم</label>
      <input
        v-model="data.name"
        type="text"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full text-center"
      />
    </div>

    <!-- خرید -->
    <div
      class="bg-[#F5F7FA] p-2 rounded-10 text-gray-500 flex justify-between items-center"
    >
      <label>خرید</label>
      <input
        type="checkbox"
        v-model="data.isBuy"
        class="toggle border-[#BFBFBF] bg-[#BFBFBF] checked:border-[#7AB73E] checked:bg-[#7AB73E] text-white"
      />
    </div>

    <!-- قیمت -->
    <div>
      <label class="block mb-1">مبلغ</label>
      <input
        v-model.number="data.price"
        type="number"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
    </div>

    <!-- مبلغ -->
    <div>
      <label class="block mb-1">میزان</label>
      <input
        v-model.number="data.amount"
        type="number"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
    </div>

    <!-- تعدیلات -->

    <div>
      <label class="block mb-1">میزان افزایش | کاهش مبلغ</label>
      <input
        v-model.number="data.amountAdjustment"
        type="number"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
      <label class="block mb-1">سود</label>
      <input
        v-model.number="data.profit"
        type="number"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
    </div>
    <div>
      <label class="block mb-1">میزان افزایش | کاهش سود</label>
      <input
        v-model.number="data.profitAdjustment"
        type="number"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
    </div>
    <!-- کمینه / بیشینه -->
    <div>
      <label class="block mb-1">حداقل میزان سفارش</label>
      <input
        v-model.number="data.minOrderQty"
        type="number"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
    </div>
    <div>
      <label class="block mb-1">حداکثر میزان سفارش</label>
      <input
        v-model.number="data.maxOrderQty"
        type="number"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
    </div>
    <div>
      <label class="block mb-1"> میزان سفارش روزانه</label>
      <input
        v-model.number="data.avgDailyOrderQty"
        type="number"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
    </div>
    <div>
      <label class="block mb-1"
        >میزان اختلاف فی با برد قیمت در درخواست مشتری</label
      >
      <input
        v-model.number="data.priceTolerancePercent"
        type="number"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
    </div>
    <div>
      <label class="block mb-1">کد کالا در سیستم حسابداری</label>
      <input
        v-model="data.accountingItemCode"
        type="text"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
    </div>
    <div>
      <label class="block mb-1">نام کالا در سیستم حسابداری</label>
      <input
        v-model="data.accountingItemName"
        type="text"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
    </div>

    <!-- دکمه ثبت -->
    <Button
      @click="updateCurrency"
      label="ثبت"
      pt:root="!bg-[#B0E37C] !text-black !border-none !w-full"
      :loading="loading"
    />
    <Toast />
  </main>
</template>

<script setup>
let { showToast } = useToastComp()
let route = useRoute()


let { data } = await useFetch('/api/admin/currency/getCurrencyById', {
  credentials: 'include',
  method: 'POST',
  body: { id: route.params.id }
})

const items = ref([])

let loading = ref(false)

async function updateCurrency () {
  try {
    loading.value = true

    let result = await $fetch('/api/admin/currency/updateCurrency', {
      credentials: 'include',
      method: 'POST',
      body: data.value
    })

    return navigateTo('/admin/items')
  } catch (err) {
    showToast('error', 'خطا', err.message)
    console.log(err)
  } finally {
    loading.value = false
  }
}
</script>
