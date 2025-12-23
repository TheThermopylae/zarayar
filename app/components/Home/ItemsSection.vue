<template>
  <div>
    <div class="flex justify-between items-center text-2sm mb-2 gap-2">
      <div class="flex items-center gap-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 10.8333C17.5 14.9733 14.14 18.3333 10 18.3333C5.86 18.3333 2.5 14.9733 2.5 10.8333C2.5 6.69334 5.86 3.33334 10 3.33334C14.14 3.33334 17.5 6.69334 17.5 10.8333Z"
            stroke="#888888"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.7825 13.2184L10.4575 11.8309C10.0525 11.5909 9.7225 11.0134 9.7225 10.5409V7.46585"
            stroke="#888888"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 1.66666L18.1225 4.42552"
            stroke="#888888"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 1.66666L1.87754 4.42552"
            stroke="#888888"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        به روزرسانی قیمت: {{ date }}
      </div>
      
      <div class="h-[1px] flex-grow bg-stroke"></div>
      
      <div class="bg-green-500/20 flex items-center gap-2 rounded-10 px-2 py-1.5 text-green-500 overflow-visible">
        <div class="relative flex items-center justify-center size-[6px]">
           <span class="custom-halo absolute bg-green-500 rounded-full"></span>
           <span class="relative size-[6px] bg-green-500 rounded-full z-10"></span>
        </div>
        <span class="relative z-10 text-xs">زنده</span>
      </div>

    </div>

    <div
      class="grid grid-cols-3 border border-[#0000001A] rounded-10 px-3 py-2 text-sm mb-2"
    >
      <div class="flex justify-center items-center gap-2 font-bold text-cgreen">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.25 7.25C1.25 3.93629 3.93629 1.25 7.25 1.25H16.75C20.0637 1.25 22.75 3.93629 22.75 7.25V16.75C22.75 20.0637 20.0637 22.75 16.75 22.75H7.25C3.93629 22.75 1.25 20.0637 1.25 16.75V7.25Z"
            fill="#96A825"
            fill-opacity="0.35"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.67144 17.3329C6.53079 17.1922 6.45177 17.0015 6.45177 16.8025L6.45177 9.73148C6.45177 9.31727 6.78756 8.98148 7.20177 8.98148C7.61599 8.98148 7.95177 9.31727 7.95177 9.73148L7.95177 14.9919L16.2679 6.67577C16.5608 6.38288 17.0357 6.38288 17.3285 6.67577C17.6214 6.96866 17.6214 7.44354 17.3285 7.73643L9.01243 16.0525L14.2728 16.0525C14.6871 16.0525 15.0228 16.3883 15.0228 16.8025C15.0228 17.2168 14.6871 17.5525 14.2728 17.5525L7.20177 17.5525C7.00286 17.5525 6.81209 17.4735 6.67144 17.3329Z"
            fill="#5A6804"
          />
        </svg>
        بخرید
      </div>
      <div />
      <div class="flex justify-center items-center gap-2 font-bold text-cred">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.25 7.25C1.25 3.93629 3.93629 1.25 7.25 1.25H16.75C20.0637 1.25 22.75 3.93629 22.75 7.25V16.75C22.75 20.0637 20.0637 22.75 16.75 22.75H7.25C3.93629 22.75 1.25 20.0637 1.25 16.75V7.25Z"
            fill="#E84362"
            fill-opacity="0.35"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.67144 6.67576C6.53079 6.81641 6.45177 7.00718 6.45177 7.20609L6.45177 14.2772C6.45177 14.6914 6.78756 15.0272 7.20177 15.0272C7.61599 15.0272 7.95177 14.6914 7.95177 14.2772L7.95177 9.01675L16.2679 17.3329C16.5608 17.6258 17.0357 17.6258 17.3285 17.3329C17.6214 17.04 17.6214 16.5651 17.3285 16.2722L9.01243 7.95609L14.2728 7.95609C14.6871 7.95609 15.0228 7.6203 15.0228 7.20609C15.0228 6.79187 14.6871 6.45609 14.2728 6.45609L7.20177 6.45609C7.00286 6.45609 6.81209 6.53511 6.67144 6.67576Z"
            fill="#80182B"
          />
        </svg>
        بفروشید
      </div>
    </div>

    <div
      class="border border-[#0000001A] rounded-10 p-2 bg-[#FAFAFA] space-y-2.5"
    >
      <HomeGoldCard
        v-for="item in data"
        :data="item"
        :key="item._id"
        @toast="showToastFunc"
        @success="$emit('refreshOrders')"
      />
    </div>
    <Toast />
  </div>
</template>

<script setup>
import io from 'socket.io-client';

let { showToast } = useToastComp()
let config = useRuntimeConfig()

// 1. تعریف متغیر ری‌اکتیو برای ساعت
let date = ref('در حال دریافت...')

// 2. تابع برای گرفتن ساعت و دقیقه جاری
const updateTime = () => {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  date.value = `${hours}:${minutes}`
}

let { data, pending } = useLazyFetch('/api/admin/currency/getCurrency', {
  credentials: 'include'
})

// 3. اولین بار که صفحه لود میشه ساعت رو بگیر
updateTime()

const socket = io(config.public.API_BASE_URL, {
  transports: ["polling"], 
  withCredentials: true,
  path: "/socket.io/" 
});

socket.on('price:update', items => {
  data.value = items
  // 4. هر بار که دیتای جدید از سوکت اومد، ساعت رو هم آپدیت کن
  updateTime()
  console.log('kir')
})

function showToastFunc (toast) {
  showToast(toast.type, toast.title, toast.text)
}
</script>

<style scoped>
.custom-halo {
  width: 100%;
  height: 100%;
  opacity: 0.7;
  animation: pulse-big 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes pulse-big {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  70%, 100% {
    transform: scale(3.5);
    opacity: 0;
  }
}
</style>