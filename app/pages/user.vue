<template>
  <TitleSection title="حساب کاربری" />
  <main class="space-y-5 py-4">
    <!-- پروفایل -->
    <div class="bg-white rounded-2xl p-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div
          class="w-12 h-12 rounded-full bg-gradient-to-br from-[#DDB976] to-[#E3C68A] flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
        <div class="text-right">
          <div class="text-sm text-slate-800 font-medium">کمیل ملکی</div>
          <div class="text-xs text-slate-400 mt-1">۹۵۵۳</div>
        </div>
      </div>
      <div
        class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M17 11H9.41l3.3-3.29a1 1 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l5 5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L9.41 13H17a1 1 0 0 0 0-2"
          />
        </svg>
        <i class="fa-solid fa-chevron-left text-[#D9B895]"></i>
      </div>
    </div>

    <!-- منوی اصلی -->
    <div class="bg-white rounded-2xl overflow-hidden divide-y divide-gray-100">
      <button
        class="w-full p-3 flex items-center justify-between hover:bg-gray-50"
      >
        <div class="flex items-center gap-3">
          <img src="/img/bill.svg" alt="" class="w-5 h-5" />
          <span class="text-gray-700 text-sm">خرید و فروش ها</span>
        </div>
        <div
          class="w-7 h-7 rounded-md bg-[#fff7ed] flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            class="text-[#D9B895]"
          >
            <path
              fill="currentColor"
              d="M17 11H9.41l3.3-3.29a1 1 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l5 5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L9.41 13H17a1 1 0 0 0 0-2"
            />
          </svg>
        </div>
      </button>

      <button
        class="w-full p-3 flex items-center justify-between hover:bg-gray-50"
      >
        <div class="flex items-center gap-3">
          <img src="/img/wallet-check.svg" alt="" class="w-5 h-5" />
          <span class="text-gray-700 text-sm">مانده حساب</span>
        </div>
        <div
          class="w-7 h-7 rounded-md bg-[#fff7ed] flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            class="text-[#D9B895]"
          >
            <path
              fill="currentColor"
              d="M17 11H9.41l3.3-3.29a1 1 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l5 5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L9.41 13H17a1 1 0 0 0 0-2"
            />
          </svg>
        </div>
      </button>

      <button
        class="w-full p-3 flex items-center justify-between hover:bg-gray-50"
      >
        <div class="flex items-center gap-3">
          <img src="/img/check.svg" alt="" class="w-5 h-5" />
          <span class="text-gray-700 text-sm">احراز هویت</span>
        </div>
        <div
          class="w-7 h-7 rounded-md bg-[#fff7ed] flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            class="text-[#D9B895]"
          >
            <path
              fill="currentColor"
              d="M17 11H9.41l3.3-3.29a1 1 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l5 5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L9.41 13H17a1 1 0 0 0 0-2"
            />
          </svg>
        </div>
      </button>

      <button
        class="w-full p-3 flex items-center justify-between hover:bg-gray-50"
      >
        <div class="flex items-center gap-3">
          <img src="/img/message.svg" alt="" class="w-5 h-5" />
          <span class="text-gray-700 text-sm">ارسال فیش</span>
        </div>
        <div
          class="w-7 h-7 rounded-md bg-[#fff7ed] flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            class="text-[#D9B895]"
          >
            <path
              fill="currentColor"
              d="M17 11H9.41l3.3-3.29a1 1 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l5 5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L9.41 13H17a1 1 0 0 0 0-2"
            />
          </svg>
        </div>
      </button>

      <button
        class="w-full p-3 flex items-center justify-between hover:bg-gray-50"
      >
        <div class="flex items-center gap-3">
          <img src="/img/add-box.svg" alt="" class="w-5 h-5" />
          <span class="text-gray-700 text-sm">ثبت حواله</span>
        </div>
        <div
          class="w-7 h-7 rounded-md bg-[#fff7ed] flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            class="text-[#D9B895]"
          >
            <path
              fill="currentColor"
              d="M17 11H9.41l3.3-3.29a1 1 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l5 5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L9.41 13H17a1 1 0 0 0 0-2"
            />
          </svg>
        </div>
      </button>

      <button
        class="w-full p-3 flex items-center justify-between hover:bg-gray-50"
      >
        <div class="flex items-center gap-3">
          <img src="/img/document.svg" alt="" class="w-5 h-5" />
          <span class="text-gray-700 text-sm">شرایط و قوانین</span>
        </div>
        <div
          class="w-7 h-7 rounded-md bg-[#fff7ed] flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            class="text-[#D9B895]"
          >
            <path
              fill="currentColor"
              d="M17 11H9.41l3.3-3.29a1 1 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l5 5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L9.41 13H17a1 1 0 0 0 0-2"
            />
          </svg>
        </div>
      </button>

      <button
        class="w-full p-3 flex items-center justify-between hover:bg-gray-50"
      >
        <div class="flex items-center gap-3">
          <img src="/img/comment.svg" alt="" class="w-5 h-5" />
          <span class="text-gray-700 text-sm">درباره ما</span>
        </div>
        <div
          class="w-7 h-7 rounded-md bg-[#fff7ed] flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            class="text-[#D9B895]"
          >
            <path
              fill="currentColor"
              d="M17 11H9.41l3.3-3.29a1 1 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l5 5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L9.41 13H17a1 1 0 0 0 0-2"
            />
          </svg>
        </div>
      </button>
    </div>

    <!-- خروج -->
    <div>
      <button
        class="w-full py-3 bg-white text-red-500 rounded-xl text-sm font-medium hover:bg-red-50 transition"
      >
        خروج از حساب کاربری
      </button>
    </div>
  </main>
</template>
