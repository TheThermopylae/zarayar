<template>
  <div>
    <div class="grid grid-cols-3 items-center text-xs">
      <div
        @click=";(visible = true), (side = 'buy'), (value = '')"
        class="text-center bg-white border border-stroke py-2 px-3 rounded-10 font-bold text-[16px] cursor-pointer text-[#96A825]"
      >
        <NumberFlow :value="props.data.amount" />
      </div>
      <h4 class="text-center text-graydark">{{ props.data.name }}</h4>
      <div
        @click=";(visible = true), (side = 'sell'), (value = '')"
        class="text-center bg-white border border-stroke py-2 px-3 rounded-10 font-bold text-[16px] cursor-pointer text-red-400"
      >
        <NumberFlow :value="props.data.amount" />
      </div>
    </div>

    <div>
      <Drawer
        v-model:visible="visible"
        position="bottom"
        style="height: 80vh"
        pt:header="!pb-0 !pt-2.5"
        pt:root="w-full !max-w-[500px] !rounded-t-2xl !text-black !select-none"
        pt:content="!h-full !flex !flex-col"
      >
        <template #header>
          <h4 class="font-bold text-xl">
            <span v-text="side == 'buy' ? 'خرید' : 'فروش'"></span>
            {{ props.data.name }}
          </h4>
        </template>

        <div class="flex flex-col h-full justify-between">
          <div class="mt-2 text-center">
            <p class="text-sm">
              هر مثقال طلای آبشده:
              <span :class="side == 'buy' ? 'text-cgreen' : 'text-red-400'">
                {{ props.data.amount.toLocaleString() }}
              </span>
              تومان
            </p>
          </div>

          <div
            class="flex-grow flex flex-col justify-center items-center gap-4"
          >
            <div class="text-center">
              <span class="font-bold text-3xl">{{ displayValue }}</span>
              <span class="mr-1">{{ gramInp ? 'گرم' : 'تومان' }}</span>
            </div>

            <div
              @click="toggleMode"
              class="w-fit flex items-center gap-2 bg-[#F5F5F5] rounded-10 p-2 px-4 cursor-pointer select-none active:bg-gray-200 transition"
            >
              <svg
                v-if="!gramInp"
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path
                    d="M16.5 5h3.9a.6.6 0 0 1 .6.6v14.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V5.6a.6.6 0 0 1 .6-.6h3.9"
                  />
                  <path
                    d="m16.279 6.329l.205-1.23a.6.6 0 0 0 0-.198l-.206-1.23A2 2 0 0 0 14.307 2H9.694a2 2 0 0 0-1.973 1.671l-.205 1.23a.6.6 0 0 0 0 .198l.205 1.23A2 2 0 0 0 9.694 8h4.612a2 2 0 0 0 1.973-1.671M12 8l-1-2.5"
                  />
                </g>
              </svg>
              <svg
                v-else
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.253357 7.18966C0.253357 5.56613 1.50115 4.25 3.04038 4.25H21.2827C22.8219 4.25 24.0697 5.56613 24.0697 7.18966V16.8103C24.0697 18.4339 22.8219 19.75 21.2827 19.75H3.04038C1.50115 19.75 0.253357 18.4339 0.253357 16.8103V7.18966ZM3.04038 5.85345C2.34073 5.85345 1.77355 6.45169 1.77355 7.18966V16.8103C1.77355 17.5483 2.34073 18.1466 3.04038 18.1466H21.2827C21.9823 18.1466 22.5495 17.5483 22.5495 16.8103V7.18966C22.5495 6.45169 21.9823 5.85345 21.2827 5.85345H3.04038Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.4688 7.5C16.4688 7.08579 16.8091 6.75 17.2288 6.75H17.7356C19.5547 6.75 21.0293 8.20507 21.0293 10C21.0293 10.4142 20.689 10.75 20.2692 10.75C19.8494 10.75 19.5091 10.4142 19.5091 10C19.5091 9.0335 18.7151 8.25 17.7356 8.25H17.2288C16.8091 8.25 16.4688 7.91421 16.4688 7.5Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.4688 16.5C16.4688 16.9142 16.8091 17.25 17.2288 17.25H17.7356C19.5547 17.25 21.0293 15.7949 21.0293 14C21.0293 13.5858 20.689 13.25 20.2692 13.25C19.8494 13.25 19.5091 13.5858 19.5091 14C19.5091 14.9665 18.7151 15.75 17.7356 15.75H17.2288C16.8091 15.75 16.4688 16.0858 16.4688 16.5Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.85431 7.5C7.85431 7.08579 7.514 6.75 7.09421 6.75H6.58748C4.76839 6.75 3.29373 8.20507 3.29373 10C3.29373 10.4142 3.63404 10.75 4.05383 10.75C4.47362 10.75 4.81392 10.4142 4.81392 10C4.81392 9.0335 5.60797 8.25 6.58748 8.25H7.09421C7.514 8.25 7.85431 7.91421 7.85431 7.5Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.85431 16.5C7.85431 16.9142 7.514 17.25 7.09421 17.25H6.58748C4.76839 17.25 3.29373 15.7949 3.29373 14C3.29373 13.5858 3.63404 13.25 4.05383 13.25C4.47362 13.25 4.81392 13.5858 4.81392 14C4.81392 14.9665 5.60797 15.75 6.58748 15.75H7.09421C7.514 15.75 7.85431 16.0858 7.85431 16.5Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.1615 10.2C11.154 10.2 10.3373 11.0059 10.3373 12C10.3373 12.9941 11.154 13.8 12.1615 13.8C13.169 13.8 13.9858 12.9941 13.9858 12C13.9858 11.0059 13.169 10.2 12.1615 10.2ZM9.12115 12C9.12115 10.3431 10.4824 9 12.1615 9C13.8407 9 15.2019 10.3431 15.2019 12C15.2019 13.6569 13.8407 15 12.1615 15C10.4824 15 9.12115 13.6569 9.12115 12Z"
                  fill="black"
                />
              </svg>

              <span v-if="gramInp">
                {{ Math.round(finalPrice).toLocaleString() }} تومان
              </span>
              <span v-else class="dir-ltr">
                {{ finalWeight.toFixed(4) }} گرم
              </span>
            </div>
          </div>

          <div class="mt-auto">
            <div class="grid grid-cols-3 gap-3 select-none" dir="ltr">
              <button
                v-for="key in keys"
                :key="key"
                class="text-xl h-14 w-full rounded-full transition-all duration-200 active:bg-gray-200 active:scale-95 flex items-center justify-center outline-none hover:bg-gray-50/50"
                @click="handleInput(key)"
              >
                {{ key }}
              </button>

              <button
                class="text-xl h-14 w-full rounded-full transition-all duration-200 active:bg-red-100 active:text-red-500 active:scale-95 flex items-center justify-center outline-none hover:bg-gray-50/50"
                @click="handleDelete"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  class="m-auto"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m13.5 10l4 4m0-4l-4 4m6.095 4.5H9.298a2 2 0 0 1-1.396-.568l-5.35-5.216a1 1 0 0 1 0-1.432l5.35-5.216A2 2 0 0 1 9.298 5.5h10.297c.95 0 2.223.541 2.223 1.625v9.75c0 1.084-1.273 1.625-2.223 1.625"
                  />
                </svg>
              </button>
            </div>

            <Button
              pt:root="!w-full !mt-3"
              :label="side == 'buy' ? 'خرید' : 'فروش'"
              @click="showSubmit"
            />
          </div>
        </div>
      </Drawer>

      <Drawer
        v-model:visible="visibleSubmit"
        header="تایید معامله"
        position="bottom"
        style="height: auto"
      >
        <div class="space-y-2">
          <div class="flex justify-between">
            <h4>نوع معامله</h4>
            <p>
              <span v-text="side == 'buy' ? 'خرید' : 'فروش'" />
              {{ props.data.name }}
            </p>
          </div>
          <div class="flex justify-between">
            <h4>وزن نهایی</h4>
            <span>
              {{ finalWeight.toFixed(4) }}
              گرم
            </span>
          </div>
        </div>
        <div
          class="border rounded-10 border-stroke bg-[#F9F9FA99] p-1 mt-3 space-y-1.5"
        >
          <div
            class="flex justify-between bg-white p-1.5 rounded-10 border border-stroke"
          >
            <h4>مظنه</h4>
            <span>
              {{ props.data.amount.toLocaleString() }}
              تومان
            </span>
          </div>
          <div
            class="flex justify-between bg-white p-1.5 rounded-10 border border-stroke"
          >
            <h4>مبلغ کل</h4>
            <span>{{ Math.round(finalPrice).toLocaleString() }} تومان</span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2 mt-2">
          <Button
            label="ثبت سفارش"
            pt:root="!bg-[#83BCFF]"
            @click="submit"
            :loading="loading"
          />
          <Button
            label="ویرایش"
            pt:root="!bg-white !border !border-[#83BCFF] !text-[#83BCFF]"
            @click="editOrder"
          />
        </div>
      </Drawer>

      <Drawer
        v-model:visible="visibleSuccessMessage"
        position="bottom"
        style="height: auto"
      >
        <div class="flex flex-col items-center mb-4">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.60425 25C2.60425 12.6311 12.6312 2.60413 25.0001 2.60413C37.369 2.60413 47.3959 12.6311 47.3959 25C47.3959 37.3688 37.369 47.3958 25.0001 47.3958C12.6312 47.3958 2.60425 37.3688 2.60425 25Z"
              fill="#96A825"
              fill-opacity="0.2"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M34.4383 18.6868C35.0485 19.297 35.0485 20.2863 34.4383 20.8965L24.8003 30.5345C23.3765 31.9582 21.0681 31.9582 19.6443 30.5344L15.5619 26.452C14.9517 25.8418 14.9517 24.8525 15.5619 24.2423C16.1721 23.6321 17.1614 23.6321 17.7716 24.2423L21.854 28.3247C22.0574 28.5281 22.3872 28.5281 22.5906 28.3247L32.2286 18.6868C32.8388 18.0766 33.8281 18.0766 34.4383 18.6868Z"
              fill="#96A825"
            />
          </svg>
          <p>معامله تایید شد</p>
        </div>
        <div class="space-y-2">
          <div class="flex justify-between">
            <h4>نوع معامله</h4>
            <p>
              <span v-text="side == 'buy' ? 'خرید' : 'فروش'" />
              {{ props.data.name }}
            </p>
          </div>
          <div class="flex justify-between">
            <h4>نوع معامله</h4>
            <span>{{ finalWeight.toFixed(4) }} گرم</span>
          </div>
        </div>
        <div
          class="border rounded-10 border-stroke bg-[#F9F9FA99] p-1 mt-3 space-y-1.5"
        >
          <div
            class="flex justify-between bg-white p-1.5 rounded-10 border border-stroke"
          >
            <h4>مظنه</h4>
            <span>{{ props.data.amount.toLocaleString() }} تومان</span>
          </div>
          <div
            class="flex justify-between bg-white p-1.5 rounded-10 border border-stroke"
          >
            <h4>مبلغ کل</h4>
            <span>{{ Math.round(finalPrice).toLocaleString() }} تومان</span>
          </div>
        </div>
        <Button
          label="متوجه شدم"
          pt:root="!mt-2 w-full !bg-secondary"
          @click=";(visibleSuccessMessage = false), (value = '')"
        />
      </Drawer>

      <Drawer
        v-model:visible="visibleErrorMessage"
        position="bottom"
        style="height: auto"
        pt:header="!pb-0"
      >
        <div class="flex flex-col items-center mb-4">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.60401 25C2.60401 12.6311 12.631 2.60419 24.9998 2.60419C37.3687 2.60419 47.3957 12.6311 47.3957 25C47.3957 37.3689 37.3687 47.3959 24.9998 47.3959C12.631 47.3959 2.60401 37.3689 2.60401 25Z"
              fill="#E84362"
              fill-opacity="0.2"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.6452 17.6451C18.2553 17.0349 19.2447 17.035 19.8549 17.6452L32.3548 30.1451C32.9649 30.7553 32.9649 31.7447 32.3547 32.3549C31.7445 32.9651 30.7552 32.965 30.145 32.3548L17.6451 19.8548C17.035 19.2447 17.035 18.2553 17.6452 17.6451Z"
              fill="#E84362"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.3549 17.6452C32.9651 18.2553 32.965 19.2447 32.3549 19.8549L19.8549 32.3548C19.2447 32.9649 18.2553 32.9649 17.6451 32.3547C17.0349 31.7445 17.035 30.7552 17.6452 30.145L30.1452 17.6451C30.7553 17.0349 31.7447 17.035 32.3549 17.6452Z"
              fill="#E84362"
            />
          </svg>
          <p>{{ errorMessage }}</p>
        </div>
        <Button
          label="متوجه شدم"
          pt:root="!mt-2 w-full !bg-secondary"
          @click=";(visibleErrorMessage = false), (value = '')"
        />
      </Drawer>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import NumberFlow from '@number-flow/vue'

let visible = ref(false)
let visibleSubmit = ref(false)
let visibleSuccessMessage = ref(false)
let visibleErrorMessage = ref(false)
let errorMessage = ref(null)

// true = ورودی گرم است
// false = ورودی مبلغ (تومان) است
let gramInp = ref(true)

let props = defineProps(['data', 'pending'])
let emit = defineEmits(['toast', 'success'])

const value = ref('')
let side = ref('')

const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0]
let loading = ref(false)

// مقدار نمایشی (عدد وارد شده با فرمت)
const displayValue = computed(() => {
  if (!value.value) return '0'
  return Number(value.value).toLocaleString()
})

// محاسبه قیمت نهایی هر گرم (با کارمزد)
const unitPrice = computed(() => {
  const basePrice = props.data.amount || 0

  // انتخاب درصد سود/زیان
  let profitPercent = 0
  if (side.value === 'buy') {
    profitPercent =
      (props.data.profitBuy || 0) + (props.data.profitBuyAdjustment || 0)
  } else {
    // فرض بر اینکه در آبجکت دیتای شما profitSell هم هست
    // اگر فقط profitBuy استفاده می‌شود، این شرط را بردارید
    profitPercent =
      (props.data.profitSell || 0) + (props.data.profitSellAdjustment || 0)
  }

  return basePrice * (1 + profitPercent / 100)
})

// محاسبه وزن نهایی (چیزی که به سرور ارسال می‌شود و در محاسبات استفاده می‌شود)
const finalWeight = computed(() => {
  const val = Number(value.value) || 0

  if (gramInp.value) {
    // اگر ورودی گرم است، خود عدد وزن است
    return val
  } else {
    // اگر ورودی تومان است: وزن = مبلغ / قیمت واحد
    const price = val
    return unitPrice.value > 0 ? price / unitPrice.value : 0
  }
})

// محاسبه قیمت نهایی کل (تومان)
const finalPrice = computed(() => {
  if (!gramInp.value) {
    // اگر ورودی تومان است، خود عدد قیمت است
    return Number(value.value) || 0
  } else {
    // اگر ورودی گرم است: قیمت = وزن * قیمت واحد
    return finalWeight.value * unitPrice.value
  }
})

// تغییر حالت (گرم / تومان)
function toggleMode () {
  gramInp.value = !gramInp.value
  value.value = '' // ریست کردن مقدار موقع تغییر حالت
}

function handleInput (input) {
  // قوانین نقطه
  if (input === '.') {
    if (value.value === '') return
    if (value.value.includes('.')) return
  }
  // قوانین صفر
  if (input === 0 && value.value === '0') return
  if (value.value === '0' && input !== '.' && input !== 0) {
    value.value = ''
  }

  value.value += input
}

function handleDelete () {
  value.value = value.value.slice(0, -1)
}

function editOrder () {
  visibleSubmit.value = false
  visible.value = true
}

function showSubmit () {
  // چک کردن اعتبار بر اساس وزن نهایی
  const w = finalWeight.value

  if (w <= 0) {
    return // یا نمایش خطا
  }

  if (w < props.data.minOrderQty || w > props.data.maxOrderQty) {
    emit('toast', {
      type: 'warn',
      title: 'اخطار',
      text: `وزن معامله باید بین ${props.data.minOrderQty} و ${props.data.maxOrderQty} گرم باشد`
    })
  } else {
    visible.value = false
    visibleSubmit.value = true
  }
}

async function submit () {
  try {
    loading.value = true

    let data = await $fetch('/api/user/orders/submit', {
      credentials: 'include',
      method: 'POST',
      body: {
        side: side.value,
        settlementType: 'cash',
        weightGram: finalWeight.value, // همیشه وزن محاسبه شده را ارسال می‌کنیم
        currencyId: props.data._id
      }
    })

    emit('toast', {
      type: 'success',
      title: 'موفقیت آمیز',
      text: 'سفارش با موفقیت ثبت شد'
    })
    emit('success')
    console.log(data)
    visibleSuccessMessage.value = true
  } catch (err) {
    console.log(err.data.data.message)
    errorMessage.value = err.data.data.message
    visibleErrorMessage.value = true
  } finally {
    visibleSubmit.value = false
    loading.value = false
  }
}
</script>
