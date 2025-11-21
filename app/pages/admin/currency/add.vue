<template>
  <TitleSection title="افزودن آیتم" />
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
      <label class="block mb-1">نام آیتم</label>
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

    <!-- قیمت -->
    <label class="block mb-1">مبلغ</label>
    <div class="relative">
      <input
        v-model.number="form.price"
        type="number"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
      >
        <path
          d="M1 7.15385C1 5.96431 1.89543 5 3 5H21C22.1046 5 23 5.96431 23 7.15385V16.8462C23 18.0357 22.1046 19 21 19H3C1.89543 19 1 18.0357 1 16.8462V7.15385Z"
          stroke="#616161"
          stroke-width="1.5"
        />
        <path
          d="M17 7.5H17.5C18.8807 7.5 20 8.61929 20 10"
          stroke="#616161"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M17 16.5H17.5C18.8807 16.5 20 15.3807 20 14"
          stroke="#616161"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M7 7.5H6.5C5.11929 7.5 4 8.61929 4 10"
          stroke="#616161"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M7 16.5H6.5C5.11929 16.5 4 15.3807 4 14"
          stroke="#616161"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12Z"
          stroke="#616161"
          stroke-width="1.5"
        />
      </svg>
    </div>

    <label class="block mb-1">میزان</label>
    <div class="relative">
      <input
        v-model.number="form.amount"
        type="number"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
    </div>

    <!-- تعدیلات -->

    <label class="block mb-1">میزان افزایش | کاهش مبلغ</label>
    <div class="relative">
      <input
        v-model.number="form.amountAdjustment"
        type="number"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
      >
        <path
          d="M17.9151 20V4M17.9151 4L22.4999 8.5848M17.9151 4L13.3303 8.5848"
          stroke="#616161"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.08504 4V20M7.08504 20L11.6698 15.4152M7.08504 20L2.50024 15.4152"
          stroke="#616161"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <label class="block mb-1">سود</label>
    <div class="relative">
      <input
        v-model.number="form.profit"
        type="number"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
      >
        <path
          d="M11.991 4V20.1676"
          stroke="#616161"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.5 15.2274C7.5 16.9699 8.84733 18.3711 10.5 18.3711H13.8772C15.3143 18.3711 16.482 17.1495 16.482 15.6226C16.482 13.9879 15.7635 13.3951 14.7036 13.0178L9.2964 11.1316C8.23653 10.7544 7.51798 10.1795 7.51798 8.52682C7.51798 7.01784 8.68561 5.77832 10.1227 5.77832H13.5C15.1527 5.77832 16.5 7.17952 16.5 8.92203"
          stroke="#616161"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <label class="block mb-1">میزان افزایش | کاهش سود</label>
    <div class="relative">
      <input
        v-model.number="form.profitAdjustment"
        type="number"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
      >
        <path
          d="M17.9151 20V4M17.9151 4L22.4999 8.5848M17.9151 4L13.3303 8.5848"
          stroke="#616161"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.08504 4V20M7.08504 20L11.6698 15.4152M7.08504 20L2.50024 15.4152"
          stroke="#616161"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <!-- کمینه / بیشینه -->
    <div>
      <label class="block mb-1">حداقل میزان سفارش</label>
      <input
        v-model.number="form.minOrderQty"
        type="number"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
    </div>
    <div>
      <label class="block mb-1">حداکثر میزان سفارش</label>
      <input
        v-model.number="form.maxOrderQty"
        type="number"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
    </div>
    <div>
      <label class="block mb-1"> میزان سفارش روزانه</label>
      <input
        v-model.number="form.avgDailyOrderQty"
        type="number"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
    </div>
    <div>
      <label class="block mb-1"
        >میزان اختلاف فی با برد قیمت در درخواست مشتری</label
      >
      <input
        v-model.number="form.priceTolerancePercent"
        type="number"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
    </div>
    <div>
      <label class="block mb-1">کد کالا در سیستم حسابداری</label>
      <input
        v-model="form.accountingItemCode"
        type="text"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
    </div>
    <div>
      <label class="block mb-1">نام کالا در سیستم حسابداری</label>
      <input
        v-model="form.accountingItemName"
        type="text"
        class="bg-[#F5F7FA] p-2 rounded-10 w-full"
      />
    </div>

    <!-- آیتم مرتبط -->
    <!-- <div>
      <label class="flex items-center gap-2 mb-2">
        <input type="checkbox" v-model="form.relatedItem.enabled" /> فعال‌سازی
        آیتم مرتبط
      </label>

      <div v-if="form.relatedItem.enabled">
        <label class="block mb-1">انتخاب آیتم مرتبط</label>
        <select
          v-model="form.relatedItem.itemId"
          class="bg-[#F5F7FA] p-2 rounded-10 w-full"
        >
          <option value="" disabled>یک مورد انتخاب کنید</option>
          <option v-for="item in items" :key="item._id" :value="item._id">
            {{ item.name }}
          </option>
        </select>

        <label class="block mt-3 mb-1">درصد اختلاف</label>
        <input
          v-model.number="form.relatedItem.diffPercent"
          type="number"
          class="bg-[#F5F7FA] p-2 rounded-10 w-full"
        />
      </div>
    </div> -->

    <!-- دکمه ثبت -->
    <DatePickerIr v-model="form.requestDate" format="jYYYY/jMM/jDD" locale="fa" />
    <Button
      @click="submit"
      label="ثبت"
      pt:root="!bg-[#B0E37C] !text-black !border-none !w-full !mt-3"
      :loading="loading"
    />
    <Toast />
  </main>
</template>

<script setup>
let { showToast } = useToastComp()

const form = reactive({
  name: '',
  isBuy: true,
  isSell: false,
  priceSource: 'api',
  price: '',
  amount: '',
  amountAdjustment: '',
  profit: '',
  profitAdjustment: '',
  minOrderQty: '',
  maxOrderQty: '',
  avgDailyOrderQty: '',
  priceTolerancePercent: '',
  isAccounting: false,
  isMainBranch: false,
  accountingItemCode: '',
  accountingItemName: '',
  relatedItem: {
    enabled: true,
    itemId: '66a1b2c3d4e5f6078899aa11',
    itemName: 'نقدی دوشنبه',
    diffPercent: -1.2
  },
  mainBranchMapping: {
    enabled: false,
    itemId: null,
    itemName: ''
  },
  requestDate: '',
  sortOrder: '',
  apiIp: '10.0.0.12',
  apiKey: 'a1b2c3d4e5f6g7h8'
})

const items = ref([])

let loading = ref(false)

async function submit () {
  try {
    loading.value = true

    let data = await $fetch('/api/admin/currency/addCurrency', {
      credentials: 'include',
      method: 'POST',
      body: form
    })

    console.log(data)
    showToast(data.message)
  } catch (err) {
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
