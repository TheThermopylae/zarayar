<template>
  <div>
    <TitleSection title="ویرایش آیتم" />
    <main class="p-3 rounded-10 bg-white space-y-4">
      <div
        class="bg-[#F5F7FA] p-2 rounded-10 text-gray-500 flex justify-between items-center"
      >
        <label>آیا اسناد این آیتم در حسابداری ثبت شود</label>
        <input
          type="checkbox"
          v-model="form.isAccounting"
          class="toggle border-[#BFBFBF] bg-[#BFBFBF] checked:border-[#7AB73E] checked:bg-[#7AB73E] text-white"
        />
      </div>
      <div
        class="bg-[#F5F7FA] p-2 rounded-10 text-gray-500 flex justify-between items-center"
      >
        <label>مدیریت وضعیت آیتم با شعبه اصلی</label>
        <input
          type="checkbox"
          v-model="form.isMainBranch"
          class="toggle border-[#BFBFBF] bg-[#BFBFBF] checked:border-[#7AB73E] checked:bg-[#7AB73E] text-white"
        />
      </div>
      <div>
        <label class="block mb-1 req">نام آیتم</label>
        <input
          v-model="form.name"
          type="text"
          class="bg-[#F5F7FA] p-2 rounded-10 w-full text-center"
        />
      </div>

      <!-- خرید -->
      <div
        class="bg-[#F5F7FA] p-2 rounded-10 text-gray-500 flex justify-between items-center"
      >
        <label>فعال بودن آیتم برای خرید</label>
        <input
          type="checkbox"
          v-model="form.isBuy"
          class="toggle border-[#BFBFBF] bg-[#BFBFBF] checked:border-[#7AB73E] checked:bg-[#7AB73E] text-white"
        />
      </div>
      <div
        class="bg-[#F5F7FA] p-2 rounded-10 text-gray-500 flex justify-between items-center"
      >
        <label>فعال بودن آیتم برای فروش</label>
        <input
          type="checkbox"
          v-model="form.isSell"
          class="toggle border-[#BFBFBF] bg-[#BFBFBF] checked:border-[#7AB73E] checked:bg-[#7AB73E] text-white"
        />
      </div>

      <div>
        <label class="block mb-1 req">مقدار</label>
        <input
          v-model.number="form.amount"
          type="number"
          class="bg-[#F5F7FA] p-2 rounded-10 w-full"
        />
      </div>

      <div>
        <label class="block mb-1 req">درصد کارمزد خرید</label>
        <input
          v-model.number="form.profitBuy"
          type="number"
          class="bg-[#F5F7FA] p-2 rounded-10 w-full"
        />
      </div>

      <div>
        <label class="block mb-1 req">اصلاح کارمزد خرید</label>
        <input
          v-model.number="form.profitBuyAdjustment"
          type="number"
          class="bg-[#F5F7FA] p-2 rounded-10 w-full"
        />
      </div>

      <div>
        <label class="block mb-1 req">درصد کارمزد فروش</label>
        <input
          v-model.number="form.profitSell"
          type="number"
          class="bg-[#F5F7FA] p-2 rounded-10 w-full"
        />
      </div>

      <div>
        <label class="block mb-1 req">اصلاح کارمزد فروش</label>
        <input
          v-model.number="form.profitBuyAdjustment"
          type="number"
          class="bg-[#F5F7FA] p-2 rounded-10 w-full"
        />
      </div>
      <!-- کمینه / بیشینه -->
      <div>
        <label class="block mb-1 req">حداقل میزان سفارش</label>
        <input
          v-model.number="form.minOrderQty"
          type="number"
          class="bg-[#F5F7FA] p-2 rounded-10 w-full"
        />
      </div>
      <div>
        <label class="block mb-1 req">حداکثر میزان سفارش</label>
        <input
          v-model.number="form.maxOrderQty"
          type="number"
          class="bg-[#F5F7FA] p-2 rounded-10 w-full"
        />
      </div>
      <div>
        <label class="block mb-1 req"> میزان سفارش روزانه</label>
        <input
          v-model.number="form.avgDailyOrderQty"
          type="number"
          class="bg-[#F5F7FA] p-2 rounded-10 w-full"
        />
      </div>
      <div>
        <label class="block mb-1 req"
          >میزان اختلاف فی با برد قیمت در درخواست مشتری</label
        >
        <input
          v-model.number="form.priceTolerancePercent"
          type="number"
          class="bg-[#F5F7FA] p-2 rounded-10 w-full"
        />
      </div>
      <div>
        <label class="block mb-1 req">کد کالا در سیستم حسابداری</label>
        <input
          v-model="form.accountingItemCode"
          type="text"
          class="bg-[#F5F7FA] p-2 rounded-10 w-full"
        />
      </div>
      <div>
        <label class="block mb-1 req">نام کالا در سیستم حسابداری</label>
        <input
          v-model="form.accountingItemName"
          type="text"
          class="bg-[#F5F7FA] p-2 rounded-10 w-full"
        />
      </div>

      <!-- آیتم مرتبط -->
      <div class="flex items-center gap-2">
        <label class="block mb-1">آیتم مرتبط</label>
        <input
          type="checkbox"
          v-model="form.relatedItem.enabled"
          class="toggle border-[#BFBFBF] bg-[#BFBFBF] checked:border-[#7AB73E] checked:bg-[#7AB73E] text-white"
        />
      </div>
      <div v-if="form.relatedItem.enabled">
        <div class="mb-4">
          <label class="block mb-1 req">آیتم مرتبط</label>
          <Select
            v-model="selectedItem"
            :options="items"
            optionLabel="name"
            filter
            placeholder="آیتم را انتخاب کنید"
            pt:root="w-full !border-none !shadow-none !bg-[#F5F7FA] !rounded-10 !h-10"
            pt:label="!p-2 !text-sm"
          />
        </div>
        <div>
          <label class="block mb-1 req">اختلاف درصد با آیتم مرتبط</label>
          <input
            v-model="form.relatedItem.diffPercent"
            type="number"
            class="bg-[#F5F7FA] p-2 rounded-10 w-full"
          />
        </div>
      </div>
      <!-- مین برنچینگ -->
      <div class="flex items-center gap-2 mt-4">
        <label class="block mb-1">نگاشت به آیتم شعبه اصلی</label>
        <input
          type="checkbox"
          v-model="form.mainBranchMapping.enabled"
          class="toggle border-[#BFBFBF] bg-[#BFBFBF] checked:border-[#7AB73E] checked:bg-[#7AB73E] text-white"
        />
      </div>
      <div class="mt-4" v-if="form.mainBranchMapping.enabled">
        <div class="mb-4">
          <label class="block mb-1 req">آیتم شعبه اصلی</label>
          <Select
            v-model="selectedItemBranching"
            :options="items"
            optionLabel="name"
            filter
            placeholder="آیتم را انتخاب کنید"
            pt:root="w-full !border-none !shadow-none !bg-[#F5F7FA] !rounded-10 !h-10"
            pt:label="!p-2 !text-sm"
          />
        </div>
      </div>

      <!-- دکمه ثبت -->
      <div>
        <label class="block mb-1 req">تاریخ ثبت</label>
        <DatePickerIr
          v-model="form.requestDate"
          format="jYYYY/jMM/jDD"
          locale="fa"
          color="black"
        />
      </div>
      <div>
        <label class="block mb-1">ترتیب نمایش در لیست</label>
        <input
          v-model="form.sortOrder"
          type="number"
          class="bg-[#F5F7FA] p-2 rounded-10 w-full"
        />
      </div>
      <Button
        @click="submit"
        label="ثبت"
        pt:root="!bg-[#B0E37C] !text-black !border-none !w-full !mt-3"
        :loading="loading"
      />
      <Toast />
    </main>
  </div>
</template>

<script setup>
let route = useRoute()
let { showToast } = useToastComp()

let { data } = await useFetch('/api/admin/currency/getCurrencyById', {
  method: 'POST',
  credentials: 'include',
  body: { id: route.params.id }
})

console.log(data.value)

const form = reactive({
  name: data.value.name,
  isBuy: data.value.isBuy,
  isSell: data.value.isSell,
  priceSource: 'api',
  amount: data.value.amount,
  profitBuy: data.value.profitBuy,
  profitBuyAdjustment: data.value.profitBuyAdjustment,
  profitSell: data.value.profitSell,
  profitSellAdjustment: data.value.profitSellAdjustment,
  minOrderQty: data.value.minOrderQty,
  maxOrderQty: data.value.maxOrderQty,
  avgDailyOrderQty: data.value.avgDailyOrderQty,
  priceTolerancePercent: data.value.priceTolerancePercent,
  isAccounting: data.value.isAccounting,
  isMainBranch: data.value.isMainBranch,
  accountingItemCode: data.value.accountingItemCode,
  accountingItemName: data.value.accountingItemName,
  relatedItem: {
    enabled: data.value.relatedItem.enabled,
    itemId: data.value.relatedItem.itemId,
    itemName: { name: data.value.relatedItem.itemName },
    diffPercent: data.value.relatedItem.diffPercent
  },
  mainBranchMapping: {
    enabled: data.value.mainBranchMapping.enabled,
    itemId: data.value.mainBranchMapping.itemId,
    itemName: { name: data.value.mainBranchMapping.itemName }
  },
  requestDate: data.value.requestDate,
  sortOrder: data.value.sortOrder
})

const { data: items } = await useFetch('/api/admin/currency/getCurrency', {
  credentials: 'include'
})

let selectedItem = ref(
  items.value?.find(item => item._id === data.value.relatedItem.itemId) || null
)
let selectedItemBranching = ref(
  items.value?.find(item => item._id === data.value.mainBranchMapping.itemId) ||
    null
)

let loading = ref(false)

async function submit () {
  if (
    !form.name ||
    !form.amount ||
    !form.profitBuy ||
    !form.profitBuyAdjustment ||
    !form.profitSell ||
    !form.profitSellAdjustment ||
    !form.minOrderQty ||
    !form.maxOrderQty ||
    !form.avgDailyOrderQty ||
    !form.priceTolerancePercent ||
    !form.accountingItemCode ||
    !form.accountingItemName ||
    (form.relatedItem.enabled && selectedItem.value == null) ||
    (form.mainBranchMapping.enabled && selectedItemBranching.value == null) ||
    !form.requestDate
  ) {
    showToast('warn', 'اخطار', 'باید تمامی فیلد های اجباری را پر کنید')
    return
  }
  try {
    loading.value = true

    let data = await $fetch('/api/admin/currency/addCurrency', {
      credentials: 'include',
      method: 'POST',
      body: {
        ...form,
        relatedItem: {
          enabled: form.relatedItem.enabled,
          itemId: selectedItem.value._id,
          itemName: selectedItem.value.name,
          diffPercent: form.relatedItem.diffPercent
        },
        mainBranchMapping: {
          enabled: form.mainBranchMapping.enabled,
          itemId: selectedItemBranching.value._id,
          itemName: selectedItemBranching.value.name
        }
      }
    })

    showToast(data.message)
  } catch (err) {
    showToast('error', 'خطا', err.message)
    console.log(err)
  } finally { 
    loading.value = false
  }
}
</script>

<style scoped>
.icon {
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
}

label {
  color: #616161;
}
</style>
