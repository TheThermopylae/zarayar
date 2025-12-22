<template>
  <div>
    <main class="p-3 rounded-10 bg-white space-y-4">
      <div class="text-black flex justify-between items-center">
        <label>وضعیت فروش به مشتری</label>
        <input
          type="checkbox"
          v-model="form.isBuy"
          class="toggle border-[#BFBFBF] bg-[#BFBFBF] checked:border-[#7AB73E] checked:bg-[#7AB73E] text-white"
        />
      </div>
      <div
        class="text-black flex justify-between items-center border-b pb-4 border-[#61616140]"
      >
        <label>وضعیت خرید از مشتری</label>
        <input
          type="checkbox"
          v-model="form.isSell"
          class="toggle border-[#BFBFBF] bg-[#BFBFBF] checked:border-[#7AB73E] checked:bg-[#7AB73E] text-white"
        />
      </div>
      <div>
        <label class="block mb-1">عنوان</label>
        <input v-model="form.name" type="text" class="cinput text-center" />
      </div>
      <div>
        <label class="block mb-1">مقدار</label>
        <input
          v-model="form.amount"
          type="number"
          class="cinput text-left"
          style="direction: ltr"
        />
      </div>
      <div>
        <label class="block mb-1">درصد کارمزد خرید</label>
        <input
          v-model="form.profitBuy"
          type="number"
          class="cinput text-left"
          style="direction: ltr"
        />
      </div>
      <div>
        <label class="block mb-1">اصلاح کارمزد خرید</label>
        <input
          v-model="form.profitBuyAdjustment"
          type="number"
          class="cinput text-left"
          style="direction: ltr"
        />
      </div>
      <div>
        <label class="block mb-1">درصد کارمزد فروش</label>
        <input
          v-model="form.profitSell"
          type="number"
          class="cinput text-left"
          style="direction: ltr"
        />
      </div>
      <div>
        <label class="block mb-1">اصلاح کارمزد فروش</label>
        <input
          v-model="form.profitSellAdjustment"
          type="number"
          class="cinput text-left"
          style="direction: ltr"
        />
      </div>
      <div>
        <label class="block mb-1">حداقل میزان سفارش (گرم)</label>
        <input
          v-model="form.minOrderQty"
          type="number"
          class="cinput text-left"
          style="direction: ltr"
        />
      </div>
      <div>
        <label class="block mb-1">حداکثر مقدار سفارش</label>
        <input
          v-model="form.maxOrderQty"
          type="number"
          class="cinput text-left"
          style="direction: ltr"
        />
      </div>
      <div>
        <label class="block mb-1">میانگین سفارش روزانه</label>
        <input
          v-model="form.avgDailyOrderQty"
          type="number"
          class="cinput text-left"
          style="direction: ltr"
        />
      </div>
      <div>
        <label class="block mb-1">اختلاف قابل قبول</label>
        <input
          v-model="form.priceTolerancePercent"
          type="number"
          class="cinput text-left"
          style="direction: ltr"
        />
      </div>
      <div class="text-black flex justify-between items-center">
        <label>ثبت در حسابداری</label>
        <input
          type="checkbox"
          v-model="form.isAccounting"
          class="toggle border-[#BFBFBF] bg-[#BFBFBF] checked:border-[#7AB73E] checked:bg-[#7AB73E] text-white"
        />
      </div>
      <div
        class="text-black flex justify-between items-center border-b pb-4 border-[#61616140]"
      >
        <label>کنترل توسط شعبه اصلی</label>
        <input
          type="checkbox"
          v-model="form.isMainBranch"
          class="toggle border-[#BFBFBF] bg-[#BFBFBF] checked:border-[#7AB73E] checked:bg-[#7AB73E] text-white"
        />
      </div>
      <div>
        <label class="block mb-1">کد کالا در حسابداری</label>
        <input v-model="form.accountingItemCode" type="text" class="cinput" />
      </div>
      <div>
        <label class="block mb-1">نام کالا در حسابداری</label>
        <input v-model="form.accountingItemName" type="text" class="cinput" />
      </div>
      <div>
        <label class="block mb-1">آیتم مرتبط</label>
        <div class="grid grid-cols-2 gap-2">
          <button
            class="p-3 bg-[#F5F7FA] rounded-10 flex items-center gap-2"
            @click="form.relatedItem.enabled = true"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ invisible: !form.relatedItem.enabled }"
            >
              <path
                d="M8 12.1667L9.95956 14.1262C10.3501 14.5168 10.9833 14.5168 11.3738 14.1262L16 9.5"
                stroke="#616161"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M2 8C2 4.68629 4.68629 2 8 2H16C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16V8Z"
                stroke="#616161"
                stroke-width="1.5"
              />
            </svg>
            فعال
          </button>
          <button
            class="p-3 bg-[#F5F7FA] rounded-10 flex items-center gap-2"
            @click="form.relatedItem.enabled = false"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ invisible: form.relatedItem.enabled }"
            >
              <path
                d="M8 12.1667L9.95956 14.1262C10.3501 14.5168 10.9833 14.5168 11.3738 14.1262L16 9.5"
                stroke="#616161"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M2 8C2 4.68629 4.68629 2 8 2H16C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16V8Z"
                stroke="#616161"
                stroke-width="1.5"
              />
            </svg>
            غیر فعال
          </button>
        </div>
      </div>
      <!-- if form relatedItem is true -->
      <section v-if="form.relatedItem.enabled">
        <div class="mt-4">
          <label class="block mb-1">مظنه مرجع</label>
          <Select
            v-model="selectedRelated"
            :options="currency"
            optionLabel="name"
            filter
            pt:root="w-full !rounded-10 !bg-white !shadow-none !border-[#00000026]"
            pt:label="!text-graydark"
          >
            <template #dropdownicon>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="30" height="30" rx="10" fill="#F5F7FA" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="29"
                  height="29"
                  rx="9.5"
                  stroke="black"
                  stroke-opacity="0.1"
                />
                <path
                  d="M10.5417 12.2051L14.4716 16.3533C15.0304 16.9431 15.9697 16.9431 16.5285 16.3533L20.4584 12.2051"
                  stroke="#616161"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </template>
          </Select>
        </div>
        <div class="my-3">
          <label class="block mb-1">اختلاف درصد با مظنه مرجع</label>
          <input
            v-model="form.relatedItem.diffPercent"
            type="number"
            class="cinput text-left"
            style="direction: ltr"
          />
        </div>
      </section>
      <div>
        <label class="block mb-1">نگاشت به آیتم شعبه اصلی</label>
        <div class="grid grid-cols-2 gap-2">
          <button
            class="p-3 bg-[#F5F7FA] rounded-10 flex items-center gap-2"
            @click="form.mainBranchMapping.enabled = true"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ invisible: !form.mainBranchMapping.enabled }"
            >
              <path
                d="M8 12.1667L9.95956 14.1262C10.3501 14.5168 10.9833 14.5168 11.3738 14.1262L16 9.5"
                stroke="#616161"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M2 8C2 4.68629 4.68629 2 8 2H16C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16V8Z"
                stroke="#616161"
                stroke-width="1.5"
              />
            </svg>
            فعال
          </button>
          <button
            class="p-3 bg-[#F5F7FA] rounded-10 flex items-center gap-2"
            @click="form.mainBranchMapping.enabled = false"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ invisible: form.mainBranchMapping.enabled }"
            >
              <path
                d="M8 12.1667L9.95956 14.1262C10.3501 14.5168 10.9833 14.5168 11.3738 14.1262L16 9.5"
                stroke="#616161"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M2 8C2 4.68629 4.68629 2 8 2H16C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16V8Z"
                stroke="#616161"
                stroke-width="1.5"
              />
            </svg>
            غیر فعال
          </button>
        </div>
      </div>
      <section v-if="form.mainBranchMapping.enabled">
        <div class="mt-4">
          <label class="block mb-1">مظنه مرجع</label>
          <Select
            v-model="selectedBranch"
            :options="currency"
            optionLabel="name"
            filter
            pt:root="w-full !rounded-10 !bg-white !shadow-none !border-[#00000026]"
            pt:label="!text-graydark"
          >
            <template #dropdownicon>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="30" height="30" rx="10" fill="#F5F7FA" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="29"
                  height="29"
                  rx="9.5"
                  stroke="black"
                  stroke-opacity="0.1"
                />
                <path
                  d="M10.5417 12.2051L14.4716 16.3533C15.0304 16.9431 15.9697 16.9431 16.5285 16.3533L20.4584 12.2051"
                  stroke="#616161"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </template>
          </Select>
        </div>
      </section>
      <div class="my-3">
        <label class="block mb-1">تاریخ ثبت</label>
        <input
          v-model="form.requestDate"
          type="text"
          class="cinput text-left"
          style="direction: ltr"
          placeholder="1404/01/01"
        />
      </div>
      <div class="my-3">
        <label class="block mb-1">ترتیب نمایش در لیست</label>
        <input
          v-model="form.sortOrder"
          type="text"
          class="cinput text-left"
          style="direction: ltr"
        />
      </div>
      <Button @click="submit" label="ثبت" pt:root="w-full" :loading="loading" />
      <Toast />
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'افزودن مظنه |'
})

definePageMeta({
  title: 'افزودن مظنه'
})

let { showToast } = useToastComp()

let selectedRelated = ref(null)
let selectedBranch = ref(null)

let { data: currency } = await useFetch('/api/admin/currency/getCurrency', {
  credentials: 'include'
})

const form = reactive({
  name: '',
  isBuy: true,
  isSell: false,
  priceSource: 'api',
  amount: '',
  profitBuy: '',
  profitBuyAdjustment: '',
  profitSell: '',
  profitSellAdjustment: '',
  minOrderQty: '',
  maxOrderQty: '',
  avgDailyOrderQty: '',
  priceTolerancePercent: '',
  isAccounting: false,
  isMainBranch: false,
  accountingItemCode: '',
  accountingItemName: '',
  relatedItem: {
    enabled: false,
    itemId: '',
    itemName: '',
    diffPercent: ''
  },
  mainBranchMapping: {
    enabled: false,
    itemId: null,
    itemName: ''
  },
  requestDate: '',
  sortOrder: 0
})

// const { data: items } = await useFetch('/api/admin/currency/getCurrency', {
//   credentials: 'include'
// })

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
    (form.relatedItem.enabled && selectedRelated.value == null) ||
    (form.mainBranchMapping.enabled && selectedBranch.value == null) ||
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
          itemId: selectedRelated.value._id,
          itemName: selectedRelated.value.name,
          diffPercent: form.relatedItem.diffPercent
        },
        mainBranchMapping: {
          enabled: form.mainBranchMapping.enabled,
          itemId: selectedBranch.value._id,
          itemName: selectedBranch.value.name
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

:deep(.p-inputnumber-input) {
  text-align: center !important;
  background: none !important;
  border-top: none !important;
  border-bottom: none !important;
  border-radius: 0 !important;
  border-color: #bfbfbf !important;
}

:deep(.p-inputnumber-input:focus, .p-inputnumber-input:hover) {
  border-color: #bfbfbf !important;
}
</style>
