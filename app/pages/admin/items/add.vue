<template>
  <div>
    <!-- <TitleSection title="افزودن آیتم" /> -->
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
        <input
          v-model="form.name"
          type="text"
          class="border border-[#00000026] p-2 rounded-10 w-full text-center"
        />
      </div>

      <!-- خرید -->

      <div>
        <label class="block mb-1">نوع</label>
        <Select
          v-model="type"
          :options="types"
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
      <div>
        <label class="block mb-1">عیار</label>
        <input
          v-model.number="form.profitBuy"
          type="number"
          class="border border-[#00000026] p-2 rounded-10 w-full"
        />
      </div>
      <div>
        <label class="block mb-1">تاریخ ثبت سند در حسابداری</label>
        <Select
          v-model="submitDay"
          :options="days"
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
      <div>
        <label class="block mb-1">بروزرسانی مظنه</label>
        <div class="grid grid-cols-2 gap-2">
          <button
            class="p-3 bg-[#F5F7FA] rounded-10 flex items-center gap-2"
            @click="update = 'manual'"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ invisible: update !== 'manual' }"
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
            دستی
          </button>
          <button
            class="p-3 bg-[#F5F7FA] rounded-10 flex items-center gap-2"
            @click="update = 'auto'"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ invisible: update !== 'auto' }"
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
            اتوماتیک
          </button>
        </div>
      </div>
      <!-- if update be auto -->
      <section v-if="update == 'auto'">
        <div>
          <label class="block mb-1">نوع اتصال</label>
          <Select
            v-model="connectType"
            :options="connectTypes"
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
        <div class="mt-4">
          <label class="block mb-1">مظنه مرجع</label>
          <Select
            v-model="selectedItem"
            :options="items"
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
        <div class="my-4">
          <label class="block mb-1">اختلاف فروش از مظنه مرجع</label>
          <div
            class="border border-strokesec rounded-10 p-2 flex justify-between gap-1"
          >
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                class="text-cgreen"
                @click="value += 5"
              >
                <path
                  fill="currentColor"
                  d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19"
                />
              </svg>
            </button>
            <InputNumber v-model="value" inputId="integeronly" fluid />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                class="text-[#E84362] rotate-180"
                @click="decrease"
              >
                <path
                  fill="currentColor"
                  d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="my-4">
          <label class="block mb-1">اختلاف خرید از مظنه مرجع</label>
          <div
            class="border border-strokesec rounded-10 p-2 flex justify-between gap-1"
          >
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                class="text-cgreen"
                @click="value += 5"
              >
                <path
                  fill="currentColor"
                  d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19"
                />
              </svg>
            </button>
            <InputNumber v-model="value" inputId="integeronly" fluid />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                class="text-[#E84362] rotate-180"
                @click="decrease"
              >
                <path
                  fill="currentColor"
                  d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section v-else>
        <div class="my-4">
          <label class="block mb-1">اختلاف خرید شما</label>
          <div
            class="border border-strokesec rounded-10 p-2 flex justify-between gap-1"
          >
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                class="text-cgreen"
                @click="value += 5"
              >
                <path
                  fill="currentColor"
                  d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19"
                />
              </svg>
            </button>
            <InputNumber v-model="value" inputId="integeronly" fluid />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                class="text-[#E84362] rotate-180"
                @click="decrease"
              >
                <path
                  fill="currentColor"
                  d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="my-4">
          <label class="block mb-1">قیمت خرید شما</label>
          <div
            class="border border-strokesec rounded-10 p-2 flex justify-between gap-1"
          >
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                class="text-cgreen"
                @click="value += 5"
              >
                <path
                  fill="currentColor"
                  d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19"
                />
              </svg>
            </button>
            <InputNumber v-model="value" inputId="integeronly" fluid />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                class="text-[#E84362] rotate-180"
                @click="decrease"
              >
                <path
                  fill="currentColor"
                  d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
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

let types = ref(['قطعی', 'شکسته'])
let type = ref(null)

let days = ref([
  'روز جاری (نقدی)',
  'یک روز دیگر (فردایی)',
  'دو روز دیگر (پس فردایی)',
  'سه روز دیگر',
  'چهار روز دیگر',
  'پنج روز دیگر',
  'شش روز دیگر',
  'هفت روز دیگر'
])
let submitDay = ref(null)

let update = ref('auto')

let connectTypes = ref(['test', 'test 2', 'test 3'])
let connectType = ref(null)

let items = ref(['test', 'test 2', 'test 3'])
let selectedItem = ref(null)

let value = ref(10)

function decrease () {
  if (value.value - 5 >= 0) value.value -= 5
  else value.value = 0
}

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
  sortOrder: ''
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
