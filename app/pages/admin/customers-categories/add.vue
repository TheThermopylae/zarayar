<template>
  <div>
    <main class="p-3 rounded-10 bg-white space-y-6">
      <div class="space-y-4 border-b border-gray-100 pb-4">
        <h3 class="font-bold text-gray-700">اطلاعات پایه</h3>
        <div>
          <label class="block mb-1 text-sm">عنوان دسته‌بندی</label>
          <input
            v-model="form.title"
            type="text"
            placeholder="مثلا: بنکدار، همکاری"
            class="border border-[#00000026] p-2 rounded-10 w-full text-center"
          />
        </div>
        <div>
          <label class="block mb-1 text-sm">کاربران عضو</label>
          <MultiSelect
            v-model="form.user"
            :options="users"
            pt:root="w-full !rounded-10 !bg-white !shadow-none !border-[#00000026]"
            pt:label="!text-graydark"
            filter
            :maxSelectedLabels="5"
            optionLabel="lname"
            option-value="_id"
            placeholder="کاربران را انتخاب کنید"
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
          </MultiSelect>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div
            class="flex items-center justify-between bg-gray-50 p-3 rounded-10 border border-gray-100"
          >
            <span class="text-sm">وضعیت خرید (کل گروه)</span>
            <input
              type="checkbox"
              class="toggle-switch"
              v-model="form.buyStatus"
            />
          </div>
          <div
            class="flex items-center justify-between bg-gray-50 p-3 rounded-10 border border-gray-100"
          >
            <span class="text-sm">وضعیت فروش (کل گروه)</span>
            <input
              type="checkbox"
              class="toggle-switch"
              v-model="form.sellStatus"
            />
          </div>
          <div
            class="flex items-center justify-between bg-gray-50 p-3 rounded-10 border border-gray-100 col-span-1 md:col-span-2"
          >
            <span class="text-sm">بررسی سقف اعتبار حسابداری</span>
            <input
              type="checkbox"
              class="toggle-switch"
              v-model="form.accountingLimitEnabled"
            />
          </div>
        </div>
      </div>

      <div class="bg-gray-50 border border-gray-200 rounded-10 p-4">
        <h3 class="font-bold text-gray-700 mb-3 border-b border-gray-200 pb-2">
          تنظیمات ارز جدید
        </h3>

        <div class="mb-4">
          <label class="block mb-1 text-sm">انتخاب ارز</label>
          <Select
            v-model="tempLimit.currencyId"
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
              class="w-full bg-transparent border-b border-gray-300 focus:border-primary outline-none py-1 ltr-dir"
              placeholder="0"
            />
          </div>
          <div class="bg-white p-2 rounded-lg border border-gray-100">
            <label class="block text-gray-500 mb-1">اختلاف فروش</label>
            <input
              type="number"
              v-model="tempLimit.priceDiffSell"
              class="w-full bg-transparent border-b border-gray-300 focus:border-primary outline-none py-1 ltr-dir"
              placeholder="0"
            />
          </div>
          <div class="bg-white p-2 rounded-lg border border-gray-100">
            <label class="block text-gray-500 mb-1">سقف تایید خودکار</label>
            <input
              type="number"
              v-model="tempLimit.autoConfirmLimit"
              class="w-full bg-transparent border-b border-gray-300 focus:border-primary outline-none py-1 ltr-dir"
            />
          </div>
          <div class="bg-white p-2 rounded-lg border border-gray-100">
            <label class="block text-gray-500 mb-1">حداقل سفارش</label>
            <input
              type="number"
              v-model="tempLimit.minAmount"
              class="w-full bg-transparent border-b border-gray-300 focus:border-primary outline-none py-1 ltr-dir"
            />
          </div>
          <div class="bg-white p-2 rounded-lg border border-gray-100">
            <label class="block text-gray-500 mb-1">حداکثر هر سفارش</label>
            <input
              type="number"
              v-model="tempLimit.maxAmount"
              class="w-full bg-transparent border-b border-gray-300 focus:border-primary outline-none py-1 ltr-dir"
            />
          </div>
          <div class="bg-white p-2 rounded-lg border border-gray-100">
            <label class="block text-gray-500 mb-1">حداکثر مجاز روزانه</label>
            <input
              type="number"
              v-model="tempLimit.dailyMaxAmount"
              class="w-full bg-transparent border-b border-gray-300 focus:border-primary outline-none py-1 ltr-dir"
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

      <div v-if="form.currencyLimits.length > 0" class="space-y-3">
        <h3 class="font-bold text-gray-700 text-sm">آیتم‌های اضافه شده:</h3>

        <div
          v-for="(item, index) in form.currencyLimits"
          :key="index"
          class="flex justify-between items-center bg-white border border-gray-200 p-3 rounded-10 shadow-sm"
        >
          <div class="text-sm">
            <span class="font-bold ml-2">{{ item.currencyName }}</span>
            <span class="text-xs text-gray-500"
              >(اختلاف: {{ item.priceDiffBuy }} /
              {{ item.priceDiffSell }})</span
            >
          </div>
          <button
            @click="removeCurrencyLimit(index)"
            class="text-red-500 hover:text-red-700 text-xs bg-red-50 px-2 py-1 rounded-md transition"
          >
            حذف
          </button>
        </div>
      </div>

      <div class="pt-4 border-t border-gray-100">
        <Button
          @click="submit"
          label="ثبت نهایی دسته بندی"
          pt:root="w-full"
          :loading="loading"
        />
      </div>

      <Toast />
    </main>
  </div>
</template>

<script setup>
useHead({ title: 'افزودن مظنه |' })
definePageMeta({ title: 'افزودن مظنه' })

let { showToast } = useToastComp()

// دریافت یوزرها و ارزها
let { data: users } = await useFetch('/api/admin/users/getUsers', {
  credentials: 'include'
})
let { data: currencies } = await useFetch('/api/admin/currency/getCurrency', {
  credentials: 'include'
})

// فرم اصلی (آرایه ارزها اولش خالیه)
const form = reactive({
  title: '',
  user: [],
  buyStatus: true,
  sellStatus: true,
  accountingLimitEnabled: false,
  currencyLimits: []
})

// متغیر موقت برای فرم ورودی (قبل از زدن دکمه افزودن)
const tempLimit = reactive({
  currencyId: null,
  isActive: true,
  priceDiffBuy: '',
  priceDiffSell: '',
  minAmount: '',
  maxAmount: '',
  dailyMaxAmount: '',
  autoConfirmLimit: ''
})

// --- تابع افزودن به لیست ---
function addCurrencyLimit () {
  // ۱. اعتبارسنجی: ارزی انتخاب شده؟
  if (!tempLimit.currencyId) {
    showToast('warn', 'توجه', 'لطفا یک ارز را انتخاب کنید')
    return
  }

  // ۲. اعتبارسنجی: قبلاً اضافه شده؟
  const exists = form.currencyLimits.find(
    x => x.currency === tempLimit.currencyId
  )
  if (exists) {
    showToast('error', 'خطا', 'این ارز قبلاً به لیست اضافه شده است')
    return
  }

  // ۳. پیدا کردن نام ارز برای نمایش
  const selectedCurrencyObj = currencies.value.find(
    c => c._id === tempLimit.currencyId
  )

  // ۴. افزودن به آرایه اصلی
  form.currencyLimits.push({
    currency: tempLimit.currencyId,
    currencyName: selectedCurrencyObj ? selectedCurrencyObj.title : 'ناشناس', // فقط برای نمایش
    isActive: tempLimit.isActive,
    priceDiffBuy: Number(tempLimit.priceDiffBuy) || 0,
    priceDiffSell: Number(tempLimit.priceDiffSell) || 0,
    minAmount: Number(tempLimit.minAmount) || 0,
    maxAmount: Number(tempLimit.maxAmount) || 0,
    dailyMaxAmount: Number(tempLimit.dailyMaxAmount) || 0,
    autoConfirmLimit: Number(tempLimit.autoConfirmLimit) || 0
  })

  // ۵. ریست کردن فرم موقت برای ورودی بعدی
  tempLimit.currencyId = null
  tempLimit.priceDiffBuy = ''
  tempLimit.priceDiffSell = ''
  // بقیه فیلدها اگه دوست داشتی ریست بشن یا مقادیر پیشفرض بمونن
}

// --- تابع حذف از لیست ---
function removeCurrencyLimit (index) {
  form.currencyLimits.splice(index, 1)
}

let loading = ref(false)

async function submit () {
  if (!form.title || form.user.length <= 0) {
    showToast('warn', 'اخطار', 'باید یک عنوان و حداقل یک کاربر را انتخاب کنید')
    return
  }

  // چک کنیم که حداقل یک ارز اضافه کرده باشه (اختیاری)
  if (form.currencyLimits.length === 0) {
    showToast('warn', 'اخطار', 'لطفا حداقل تنظیمات یک ارز را اضافه کنید')
    return
  }

  try {
    loading.value = true

    // آماده‌سازی پلود (حذف فیلدهای اضافی مثل currencyName که فقط واسه نمایش بود)
    const finalCurrencyLimits = form.currencyLimits.map(item => ({
      currency: item.currency,
      isActive: item.isActive,
      priceDiffBuy: item.priceDiffBuy,
      priceDiffSell: item.priceDiffSell,
      minAmount: item.minAmount,
      maxAmount: item.maxAmount,
      dailyMaxAmount: item.dailyMaxAmount,
      autoConfirmLimit: item.autoConfirmLimit
    }))

    const payload = {
      name: form.title,
      users: form.user,
      buyStatus: form.buyStatus,
      sellStatus: form.sellStatus,
      accountingLimitEnabled: form.accountingLimitEnabled,
      currencyLimits: finalCurrencyLimits
    }

    let data = await $fetch('/api/admin/customers/addCategory', {
      credentials: 'include',
      method: 'POST',
      body: payload
    })

    showToast('success', 'موفقیت', 'دسته بندی با موفقیت اضافه شد')
  } catch (err) {
    showToast('error', 'خطا', err.message)
    console.log(err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* استایل ساده برای اینپوت های عددی */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.ltr-dir {
  direction: ltr;
  text-align: left;
}
</style>
