<template>
  <div>
    <div class="grid grid-cols-3 items-center text-xs">
      <div
        @click=";(visible = true), (side = 'buy')"
        class="text-center bg-white border border-stroke py-2 px-3 rounded-10 font-medium cursor-pointer text-[#96A825]"
      >
        <NumberFlow :value="props.data.amount" />
      </div>
      <h4 class="text-center text-graydark">{{ props.data.name }}</h4>
      <div
        @click=";(visible = true), (side = 'sell')"
        class="text-center bg-white border border-stroke py-2 px-3 rounded-10 font-medium cursor-pointer text-red-400"
      >
        <NumberFlow :value="props.data.amount" />
      </div>
    </div>
    <div>
      <Drawer
        v-model:visible="visible"
        position="bottom"
        style="height: auto"
        pt:header="!pb-0 !pt-2.5"
        pt:root="w-full !max-w-[500px] !rounded-t-2xl !text-black !select-none"
        @after-hide="value = ''"
      >
        <template #header>
          <h4 class="font-bold text-xl">
            <span v-text="side == 'buy' ? 'خرید' : 'فروش'"></span>
            {{ props.data.name }}
          </h4>
        </template>
        <p class="text-center mt-2 text-sm">
          هر مثقال طلای آبشده:
          <span :class="side == 'buy' ? 'text-cgreen' : 'text-red-400'">{{
            props.data.amount.toLocaleString()
          }}</span>
          ریال
        </p>
        <!-- value -->
        <div class="text-center my-3">
          <span class="font-bold">{{ displayValue }}</span> گرم
        </div>
        <div
          class="w-fit flex items-center gap-2 m-auto mb-3 bg-[#F5F5F5] rounded-10 p-2"
        >
          <svg
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
          {{
            (
              Math.round(
                props.data.amount *
                  (1 +
                    (props.data.profitBuy + props.data.profitBuyAdjustment) /
                      100)
              ) * value
            ).toLocaleString()
          }}
        </div>
        <div class="flex justify-center gap-4 mb-3">
          <div class="text-sm">
            حداقل:
            <span class="text-cgreen">{{ props.data.minOrderQty }}</span> گرم
          </div>
          <div class="text-sm">
            حداکثر:
            <span class="text-red-400">{{ props.data.maxOrderQty }}</span> گرم
          </div>
        </div>

        <!-- btns -->
        <div class="grid grid-cols-3 gap-4">
          <button
            v-for="key in keys"
            :key="key"
            class="text-xl"
            @click="handleInput(key)"
          >
            {{ key }}
          </button>

          <!-- حذف -->
          <button class="text-xl" @click="handleDelete">
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
          @click="submit"
          :loading="loading"
        />
      </Drawer>
    </div>
  </div>
</template>

<script setup>
import NumberFlow from '@number-flow/vue'

let visible = ref(false)
let props = defineProps(['data'])
let emit = defineEmits(['toast'])

const value = ref('')
let side = ref('')

// کلیدهای قابل نمایش
const keys = [9, 8, 7, 6, 5, 4, 3, 2, 1, '.', 0]

let loading = ref(false)

// مقداری که نمایش داده می‌شود
const displayValue = computed(() => value.value || '0')

function handleInput (input) {
  // --- قوانین نقطه ---
  if (input === '.') {
    // نقطه نباید اولین ورودی باشد
    if (value.value === '') return
    // نباید نقطه تکراری باشد
    if (value.value.includes('.')) return
  }

  // --- قوانین صفر ---
  if (input === 0) {
    // اگر اولین کاراکتر صفر است، صفر تکراری نده
    if (value.value === '0') return
  }

  // اگر مقدار "0" است و عدد جدید وارد می‌شود → صفر را حذف کن
  if (value.value === '0' && input !== '.' && input !== 0) {
    value.value = ''
  }

  // مقدار را اضافه کن
  value.value += input
}

function handleDelete () {
  value.value = value.value.slice(0, -1)
}

async function submit () {
  if (
    value.value < props.data.minOrderQty ||
    value.value > props.data.maxOrderQty
  )
    emit('toast', {
      type: 'warn',
      title: 'اخطار',
      text: `وزن وارد شده باید بین ${props.data.minOrderQty} و ${props.data.maxOrderQty} باشد`
    })
  else {
    try {
      loading.value = false

      let data = await $fetch('/api/user/orders/submit', {
        credentials: 'include',
        method: 'POST',
        body: {
          side: side.value,
          settlementType: 'cash',
          weightGram: value.value,
          currencyId: props.data._id
        }
      })

      emit('toast', {
        type: 'success',
        title: 'موفقیت آمیز',
        text: 'سفارش با موفقیت ثبت شد'
      })
      console.log(data)
      visible.value = false
    } catch (err) {
      console.log(err)
      emit('toast', {
        type: 'error',
        title: 'خطا',
        text: err.data.message
      })
    } finally {
      loading.value = false
    }
  }
}
</script>
