<template>
  <div class="text-xs bg-white p-4 rounded-10" v-if="!pending">
    <div class="space-y-4 border-b border-gray-100 pb-4 mb-4">
      <div>
        <label class="block mb-1.5 font-bold">نام دسته بندی</label>
        <input
          type="text"
          class="cinput w-full p-2 border border-[#00000026] rounded-10 text-center"
          v-model="form.name"
        />
      </div>

      <div class="grid grid-cols-2 gap-2 my-2">
        <div
          class="flex justify-between items-center bg-[#F1F1F1] rounded-10 p-2"
        >
          وضعیت خرید
          <input
            type="checkbox"
            class="toggle-switch"
            v-model="form.buyStatus"
          />
        </div>
        <div
          class="flex justify-between items-center bg-[#F1F1F1] rounded-10 p-2"
        >
          وضعیت فروش
          <input
            type="checkbox"
            class="toggle-switch"
            v-model="form.sellStatus"
          />
        </div>
        <div
          class="flex justify-between items-center bg-[#F1F1F1] rounded-10 p-2 col-span-2 gap-1"
        >
          <div>
            حد مجاز معامله بر اساس اعتبار حسابداری
            <p class="text-2sm text-gray-500">
              در صورت قطع اتصال، حسابداری مشتریان این دسته امکان معامله نخواهند
              داشت
            </p>
          </div>
          <input
            type="checkbox"
            class="toggle-switch"
            v-model="form.accountingLimitEnabled"
          />
        </div>
      </div>
    </div>

    <div class="bg-gray-50 border border-gray-200 rounded-10 p-4 mb-4">
      <h3 class="font-bold text-gray-700 mb-3 border-b border-gray-200 pb-2">
        افزودن تنظیمات ارز جدید
      </h3>

      <div class="mb-4">
        <label class="block mb-1 text-sm">انتخاب ارز</label>
        <Dropdown
          v-model="tempLimit.currency"
          :options="currencies"
          optionLabel="name"
          optionValue="_id"
          placeholder="ارز مورد نظر را انتخاب کنید"
          class="w-full !rounded-10 border border-[#00000026]"
          filter
        />
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs mb-4"
      >
        <div class="bg-white p-2 rounded-lg border border-gray-100">
          <label class="block text-gray-500 mb-1">اختلاف خرید</label>
          <input
            type="number"
            v-model="tempLimit.priceDiffBuy"
            class="w-full bg-transparent border-b border-gray-300 outline-none py-1 ltr-dir"
            placeholder="0"
          />
        </div>
        <div class="bg-white p-2 rounded-lg border border-gray-100">
          <label class="block text-gray-500 mb-1">اختلاف فروش</label>
          <input
            type="number"
            v-model="tempLimit.priceDiffSell"
            class="w-full bg-transparent border-b border-gray-300 outline-none py-1 ltr-dir"
            placeholder="0"
          />
        </div>
        <div class="bg-white p-2 rounded-lg border border-gray-100">
          <label class="block text-gray-500 mb-1">سقف تایید خودکار</label>
          <input
            type="number"
            v-model="tempLimit.autoConfirmLimit"
            class="w-full bg-transparent border-b border-gray-300 outline-none py-1 ltr-dir"
          />
        </div>
        <div class="bg-white p-2 rounded-lg border border-gray-100">
          <label class="block text-gray-500 mb-1">حداقل سفارش</label>
          <input
            type="number"
            v-model="tempLimit.minAmount"
            class="w-full bg-transparent border-b border-gray-300 outline-none py-1 ltr-dir"
          />
        </div>
        <div class="bg-white p-2 rounded-lg border border-gray-100">
          <label class="block text-gray-500 mb-1">حداکثر هر سفارش</label>
          <input
            type="number"
            v-model="tempLimit.maxAmount"
            class="w-full bg-transparent border-b border-gray-300 outline-none py-1 ltr-dir"
          />
        </div>
        <div class="bg-white p-2 rounded-lg border border-gray-100">
          <label class="block text-gray-500 mb-1">حداکثر مجاز روزانه</label>
          <input
            type="number"
            v-model="tempLimit.dailyMaxAmount"
            class="w-full bg-transparent border-b border-gray-300 outline-none py-1 ltr-dir"
          />
        </div>

        <div
          class="flex items-center justify-between bg-white p-2 rounded-lg border border-gray-100"
        >
          <span class="text-gray-500">وضعیت فعال</span>
          <input
            type="checkbox"
            class="toggle-switch"
            v-model="tempLimit.isActive"
          />
        </div>
      </div>

      <Button
        @click="addCurrencyLimit"
        label="افزودن به لیست پایین"
        icon="pi pi-plus"
        pt:root="w-full !bg-gray-700 !border-gray-700 hover:!bg-gray-800"
      />
    </div>

    <div
      v-if="form.currencyLimits && form.currencyLimits.length > 0"
      class="space-y-3 mb-5"
    >
      <h3 class="font-bold text-gray-700 text-sm">تنظیمات ارزهای فعال:</h3>

      <div
        v-for="(limit, index) in form.currencyLimits"
        :key="limit.currency + index"
        class="bg-[#F1F1F1B2] p-2 rounded-10 relative group"
      >
        <div
          class="flex justify-between items-center mb-2 pb-2 border-b border-stroke"
        >
          <h2 class="font-bold">{{ getCurrencyName(limit.currency) }}</h2>
          <div class="flex gap-2 items-center">
            <button
              type="button"
              @click="editLimit(limit)"
              class="text-blue-500 text-xs px-2"
            >
              ویرایش
            </button>

            <button
              type="button"
              @click.prevent="removeLimit(index)"
              class="text-red-500 hover:bg-red-100 p-1 rounded-full transition"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.75 0.75L11.2549 11.2549"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M11.2549 0.75L0.749934 11.2548"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-2 text-2sm text-gray-600"
        >
          <div>خرید: {{ limit.priceDiffBuy }}</div>
          <div>فروش: {{ limit.priceDiffSell }}</div>
          <div>تایید خودکار: {{ limit.autoConfirmLimit }}</div>
          <div>وضعیت: {{ limit.isActive ? 'فعال' : 'غیرفعال' }}</div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2 mt-5">
      <Button
        label="ثبت تغییرات"
        @click="submit"
        pt:root="!bg-secondary w-full"
        :loading="loading"
      />
      <Button
        label="لغو"
        @click="$router.back()"
        pt:root="!bg-white !border !text-primary w-full"
      />
    </div>
    <Toast />
  </div>
  <div v-else class="p-5 text-center text-gray-500">
    در حال دریافت اطلاعات...
  </div>
</template>

<script setup>
useHead({ title: 'ویرایش دسته بندی' })
definePageMeta({ title: 'ویرایش دسته بندی' })

const { showToast } = useToastComp()
const route = useRoute()
const loading = ref(false)

// فرم اصلی که به UI متصل است
const form = ref({
  name: '',
  buyStatus: true,
  sellStatus: true,
  accountingLimitEnabled: false,
  currencyLimits: []
})

// دریافت داده‌های اولیه
const { data: serverData, pending } = await useFetch(
  '/api/admin/customers/getOneCategory',
  {
    credentials: 'include',
    method: 'POST',
    body: { id: route.params.id }
  }
)

const { data: currencies } = await useFetch('/api/admin/currency/getCurrency', {
  credentials: 'include'
})

// سینک کردن داده‌های سرور با فرم محلی (این بخش کلیدی برای حل مشکل است)
watch(
  serverData,
  newData => {
    if (newData) {
      // کپی کردن داده‌ها در فرم محلی برای جلوگیری از مشکلات ری‌اکتیویتی مستقیم
      form.value = {
        ...newData,
        // اطمینان از اینکه آرایه وجود دارد
        currencyLimits: newData.currencyLimits
          ? [...newData.currencyLimits]
          : []
      }
    }
  },
  { immediate: true }
)

// فرم موقت برای افزودن آیتم
const tempLimit = reactive({
  currency: null,
  isActive: true,
  priceDiffBuy: '',
  priceDiffSell: '',
  minAmount: '',
  maxAmount: '',
  dailyMaxAmount: '',
  autoConfirmLimit: ''
})

// توابع کمکی
function getCurrencyName (id) {
  if (!currencies.value) return 'ناشناس'
  const found = currencies.value.find(c => c._id === id)
  return found ? found.name : 'حذف شده' // پراپرتی name استفاده شد
}

function resetTempForm () {
  Object.assign(tempLimit, {
    currency: null,
    priceDiffBuy: '',
    priceDiffSell: '',
    minAmount: '',
    maxAmount: '',
    dailyMaxAmount: '',
    autoConfirmLimit: '',
    isActive: true
  })
}

// عملیات لیست
function addCurrencyLimit () {
  if (!tempLimit.currency) {
    showToast('warn', 'توجه', 'لطفا یک ارز را انتخاب کنید')
    return
  }

  // بررسی تکراری بودن
  const existsIndex = form.value.currencyLimits.findIndex(
    x => x.currency === tempLimit.currency
  )

  const newLimitObj = {
    currency: tempLimit.currency,
    isActive: tempLimit.isActive,
    priceDiffBuy: Number(tempLimit.priceDiffBuy) || 0,
    priceDiffSell: Number(tempLimit.priceDiffSell) || 0,
    minAmount: Number(tempLimit.minAmount) || 0,
    maxAmount: Number(tempLimit.maxAmount) || 0,
    dailyMaxAmount: Number(tempLimit.dailyMaxAmount) || 0,
    autoConfirmLimit: Number(tempLimit.autoConfirmLimit) || 0
  }

  if (existsIndex !== -1) {
    // ویرایش آیتم موجود
    form.value.currencyLimits[existsIndex] = newLimitObj
    showToast('info', 'بروزرسانی', 'تنظیمات این ارز بروز شد')
  } else {
    // افزودن آیتم جدید
    form.value.currencyLimits.push(newLimitObj)
  }

  resetTempForm()
}

function editLimit (limit) {
  tempLimit.currency = limit.currency
  tempLimit.isActive = limit.isActive
  tempLimit.priceDiffBuy = limit.priceDiffBuy
  tempLimit.priceDiffSell = limit.priceDiffSell
  tempLimit.minAmount = limit.minAmount
  tempLimit.maxAmount = limit.maxAmount
  tempLimit.dailyMaxAmount = limit.dailyMaxAmount
  tempLimit.autoConfirmLimit = limit.autoConfirmLimit

  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// تابع حذف با استفاده از فرم محلی
function removeLimit (index) {
  if (form.value.currencyLimits) {
    form.value.currencyLimits.splice(index, 1)
    showToast('info', 'حذف', 'آیتم حذف شد')
  }
}

// ارسال نهایی
async function submit () {
  try {
    loading.value = true

    // آماده‌سازی داده نهایی
    const payload = {
      ...form.value,
      currencyLimits: form.value.currencyLimits.map(limit => ({
        ...limit,
        // تبدیل نهایی به عدد برای اطمینان
        priceDiffBuy: Number(limit.priceDiffBuy),
        priceDiffSell: Number(limit.priceDiffSell),
        minAmount: Number(limit.minAmount),
        maxAmount: Number(limit.maxAmount),
        dailyMaxAmount: Number(limit.dailyMaxAmount),
        autoConfirmLimit: Number(limit.autoConfirmLimit)
      }))
    }

    await $fetch('/api/admin/customers/updateCategory', {
      credentials: 'include',
      method: 'POST',
      body: payload
    })

    showToast('success', 'موفقیت', 'دسته بندی با موفقیت بروز شد')
  } catch (err) {
    showToast('error', 'خطا', err.data?.message || err.message)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
:deep(.p-inputnumber-input) {
  text-align: center !important;
  background: none !important;
  border-top: none !important;
  border-bottom: none !important;
  border-radius: 0 !important;
  border-color: #bfbfbf !important;
}
.ltr-dir {
  direction: ltr;
  text-align: left;
}
</style>
