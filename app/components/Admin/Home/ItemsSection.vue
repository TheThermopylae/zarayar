<template>
  <div class="p-2 rounded-10 border border-strokesec text-xs">
    <div class="flex justify-between items-center p-2 rounded-10 bg-[#F4F4F4]">
      <h2>معاملات آبشده</h2>
      <input
        type="checkbox"
        class="toggle border-none bg-[#BFBFBF] checked:bg-[#7AB73E] text-white"
      />
    </div>

    <div class="grid grid-cols-2 bg-main rounded-10 p-1 my-2">
      <button
        class="p-1.5 rounded-10 transition"
        :class="{ 'bg-white': activeTab == 0 }"
        @click="activeTab = 0"
      >
        مظنه های فعال (1)
      </button>
      <button
        class="p-1.5 rounded-10 transition"
        :class="{ 'bg-white': activeTab == 1 }"
        @click="activeTab = 1"
      >
        مظنه های غیرفعال (5)
      </button>
    </div>

    <draggable
      v-model="myItems"
      item-key="_id"
      tag="div"
      class="space-y-2"
      :animation="300"
    >
      <template #item="{ element }">
        <div class="bg-main rounded-10 p-2 mb-2 last:m-0">
          <div
            class="flex justify-between items-center border-b border-strokesec pb-2 mb-2"
          >
            <div class="flex items-center gap-2">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="cursor-pointer"
              >
                <g clip-path="url(#clip0_951_5868)">
                  <path
                    d="M1.0625 8.5L15.9375 8.5M1.0625 8.5L2.85198 10.625M1.0625 8.5L2.85198 6.375M15.9375 8.5L14.148 10.625M15.9375 8.5L14.148 6.375"
                    stroke="#616161"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.5 1.0625L8.5 15.9375M8.5 1.0625L6.375 2.85197M8.5 1.0625L10.625 2.85198M8.5 15.9375L6.375 14.148M8.5 15.9375L10.625 14.148"
                    stroke="#616161"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_951_5868">
                    <rect width="17" height="17" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {{ element.name || element.title }}
            </div>
            <div class="flex items-center gap-2">
              بروزرسانی 3 ثانیه قبل
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.83301 9.56152C9.00661 9.56152 9.95801 8.61013 9.95801 7.43652C9.95801 6.26292 9.00661 5.31152 7.83301 5.31152C6.6594 5.31152 5.70801 6.26292 5.70801 7.43652C5.70801 8.61013 6.6594 9.56152 7.83301 9.56152Z"
                  stroke="#616161"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M0.75 8.05995V6.81329C0.75 6.07662 1.35208 5.46745 2.09583 5.46745C3.37792 5.46745 3.90208 4.56079 3.2575 3.4487C2.88917 2.8112 3.10875 1.98245 3.75333 1.61412L4.97875 0.912871C5.53833 0.579954 6.26083 0.778288 6.59375 1.33787L6.67167 1.47245C7.30917 2.58454 8.3575 2.58454 9.00208 1.47245L9.08 1.33787C9.41292 0.778288 10.1354 0.579954 10.695 0.912871L11.9204 1.61412C12.565 1.98245 12.7846 2.8112 12.4162 3.4487C11.7717 4.56079 12.2958 5.46745 13.5779 5.46745C14.3146 5.46745 14.9237 6.06954 14.9237 6.81329V8.05995C14.9237 8.79662 14.3217 9.40579 13.5779 9.40579C12.2958 9.40579 11.7717 10.3125 12.4162 11.4245C12.7846 12.0691 12.565 12.8908 11.9204 13.2591L10.695 13.9604C10.1354 14.2933 9.41292 14.095 9.08 13.5354L9.00208 13.4008C8.36458 12.2887 7.31625 12.2887 6.67167 13.4008L6.59375 13.5354C6.26083 14.095 5.53833 14.2933 4.97875 13.9604L3.75333 13.2591C3.10875 12.8908 2.88917 12.062 3.2575 11.4245C3.90208 10.3125 3.37792 9.40579 2.09583 9.40579C1.35208 9.40579 0.75 8.79662 0.75 8.05995Z"
                  stroke="#616161"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div class="flex items-center gap-2 text-2sm">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.67274 9.33846C2.76916 9.04922 3.03984 8.85413 3.34473 8.85413H6.57365C6.87854 8.85413 7.14922 9.04922 7.24564 9.33846L8.19008 12.1718C8.34297 12.6305 8.00157 13.1041 7.5181 13.1041H2.40028C1.9168 13.1041 1.57541 12.6305 1.7283 12.1718L2.67274 9.33846Z"
                stroke="#D5AA51"
                stroke-width="1.5"
              />
              <path
                d="M9.75477 9.33846C9.85119 9.04922 10.1219 8.85413 10.4268 8.85413H13.6557C13.9606 8.85413 14.2313 9.04922 14.3277 9.33846L15.2721 12.1718C15.425 12.6305 15.0836 13.1041 14.6001 13.1041H9.48231C8.99884 13.1041 8.65744 12.6305 8.81033 12.1718L9.75477 9.33846Z"
                stroke="#D5AA51"
                stroke-width="1.5"
              />
              <path
                d="M6.21376 4.02596C6.31017 3.73672 6.58085 3.54163 6.88574 3.54163H10.1147C10.4196 3.54163 10.6902 3.73672 10.7867 4.02596L11.7311 6.8593C11.884 7.31797 11.5426 7.79163 11.0591 7.79163H5.9413C5.45782 7.79163 5.11642 7.31797 5.26931 6.8593L6.21376 4.02596Z"
                stroke="#D5AA51"
                stroke-width="1.5"
              />
            </svg>
            آبشده نقد فردا مظنه خودکار
          </div>
          <div class="grid grid-cols-2 gap-3 mt-2">
            <div class="bg-white border border-strokesec rounded-10 p-2">
              <div
                class="flex justify-between items-center border-b border-strokesec pb-2 mb-2"
              >
                درصد کارمزد خرید
                <input
                  type="checkbox"
                  v-model="element.isBuy"
                  class="toggle border-none bg-[#BFBFBF] checked:bg-[#7AB73E] text-white"
                  @change="sendRequest(element)"
                />
              </div>
              <div
                class="border border-strokesec rounded-10 p-2 flex justify-between gap-1"
              >
                <button
                  type="button"
                  @click="changeValue(element, 'profitBuy', 1)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    class="text-cgreen"
                  >
                    <path
                      fill="currentColor"
                      d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19"
                    />
                  </svg>
                </button>
                <InputNumber
                  v-model="element.amount"
                  inputId="integeronly"
                  fluid
                />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    class="text-[#E84362] rotate-180"
                  >
                    <path
                      fill="currentColor"
                      d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="bg-white border border-strokesec rounded-10 p-2">
              <div
                class="flex justify-between items-center border-b border-strokesec pb-2 mb-2"
              >
                کارمزد سود فروش
                <input
                  type="checkbox"
                  v-model="element.isSell"
                  class="toggle border-none bg-[#BFBFBF] checked:bg-[#7AB73E] text-white"
                  @change="sendRequest(element)"
                />
              </div>
              <div
                class="border border-strokesec rounded-10 p-2 flex justify-between gap-1"
              >
                <button
                  type="button"
                  @click="changeValue(element, 'profitSell', 1)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    class="text-cgreen"
                  >
                    <path
                      fill="currentColor"
                      d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19"
                    />
                  </svg>
                </button>
                <InputNumber
                  v-model="element.amount"
                  inputId="integeronly"
                  fluid
                />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    class="text-[#E84362] rotate-180"
                  >
                    <path
                      fill="currentColor"
                      d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import draggable from 'vuedraggable'

let props = defineProps(['items'])
let emit = defineEmits(['error'])

let activeTab = ref(0)

// متغیر لوکال برای درگ اند دراپ
const myItems = ref(props.items || [])

// همگام سازی پراپس با متغیر لوکال
watch(
  () => props.items,
  newVal => {
    myItems.value = newVal || []
  }
)

let debounceTimer = null

// تابع مدیریت تغییر مقادیر و ارسال درخواست
const changeValue = (item, field, amount) => {
  if (!item[field]) item[field] = 0

  // محاسبه مقدار جدید
  const newValue = item[field] + amount
  if (newValue >= 0) {
    item[field] = newValue
    sendRequest(item)
  }
}

// تابع ارسال درخواست به سرور با تاخیر
const sendRequest = item => {
  if (debounceTimer) clearTimeout(debounceTimer)

  debounceTimer = setTimeout(async () => {
    try {
      await $fetch('/api/admin/currency/updateCurrency', {
        method: 'POST',
        body: item
      })
    } catch (error) {
      emit('error')
      console.log(error)
    }
  }, 500)
}
</script>
