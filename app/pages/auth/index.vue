<template>
  <TitleSection title="احراز هویت" />

  <main class="bg-white rounded-2xl p-5 space-y-5">
    <div class="grid grid-cols-2 gap-3 text-center">
      <button
        class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-xl py-4 hover:bg-gray-50 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3rem"
          height="3rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M14.154 12.462h4.077v-1h-4.077zm0-2.77h4.077v-1h-4.077zm-8.385 5.616h6.616v-.166q0-.875-.88-1.355t-2.428-.48t-2.429.48t-.879 1.355zm3.308-3.616q.633 0 1.066-.433q.434-.434.434-1.067t-.434-1.066t-1.066-.434t-1.066.434t-.434 1.066t.434 1.067t1.066.433M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm0-1h14.769q.23 0 .423-.192t.192-.424V6.616q0-.231-.192-.424T19.385 6H4.615q-.23 0-.423.192T4 6.616v10.769q0 .23.192.423t.423.192M4 18V6z"
          />
        </svg>
        <span class="text-sm text-gray-700">تصویر روی کارت ملی</span>
      </button>

      <button
        class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-xl py-4 hover:bg-gray-50 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3rem"
          height="3rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M14.154 12.462h4.077v-1h-4.077zm0-2.77h4.077v-1h-4.077zm-8.385 5.616h6.616v-.166q0-.875-.88-1.355t-2.428-.48t-2.429.48t-.879 1.355zm3.308-3.616q.633 0 1.066-.433q.434-.434.434-1.067t-.434-1.066t-1.066-.434t-1.066.434t-.434 1.066t.434 1.067t1.066.433M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm0-1h14.769q.23 0 .423-.192t.192-.424V6.616q0-.231-.192-.424T19.385 6H4.615q-.23 0-.423.192T4 6.616v10.769q0 .23.192.423t.423.192M4 18V6z"
          />
        </svg>
        <span class="text-sm text-gray-700">تصویر پشت کارت ملی</span>
      </button>

      <button
        class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-xl py-4 hover:bg-gray-50 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3rem"
          height="3rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M14.154 12.462h4.077v-1h-4.077zm0-2.77h4.077v-1h-4.077zm-8.385 5.616h6.616v-.166q0-.875-.88-1.355t-2.428-.48t-2.429.48t-.879 1.355zm3.308-3.616q.633 0 1.066-.433q.434-.434.434-1.067t-.434-1.066t-1.066-.434t-1.066.434t-.434 1.066t.434 1.067t1.066.433M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm0-1h14.769q.23 0 .423-.192t.192-.424V6.616q0-.231-.192-.424T19.385 6H4.615q-.23 0-.423.192T4 6.616v10.769q0 .23.192.423t.423.192M4 18V6z"
          />
        </svg>
        <span class="text-sm text-gray-700">تصویر روی کارت ملی</span>
      </button>

      <button
        class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-xl py-4 hover:bg-gray-50 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3rem"
          height="3rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M14.154 12.462h4.077v-1h-4.077zm0-2.77h4.077v-1h-4.077zm-8.385 5.616h6.616v-.166q0-.875-.88-1.355t-2.428-.48t-2.429.48t-.879 1.355zm3.308-3.616q.633 0 1.066-.433q.434-.434.434-1.067t-.434-1.066t-1.066-.434t-1.066.434t-.434 1.066t.434 1.067t1.066.433M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm0-1h14.769q.23 0 .423-.192t.192-.424V6.616q0-.231-.192-.424T19.385 6H4.615q-.23 0-.423.192T4 6.616v10.769q0 .23.192.423t.423.192M4 18V6z"
          />
        </svg>
        <span class="text-sm text-gray-700">تصویر صفحه اول شناسنامه</span>
      </button>

      <button
        class="col-span-2 flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-xl py-4 hover:bg-gray-50 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3rem"
          height="3rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M14.154 12.462h4.077v-1h-4.077zm0-2.77h4.077v-1h-4.077zm-8.385 5.616h6.616v-.166q0-.875-.88-1.355t-2.428-.48t-2.429.48t-.879 1.355zm3.308-3.616q.633 0 1.066-.433q.434-.434.434-1.067t-.434-1.066t-1.066-.434t-1.066.434t-.434 1.066t.434 1.067t1.066.433M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm0-1h14.769q.23 0 .423-.192t.192-.424V6.616q0-.231-.192-.424T19.385 6H4.615q-.23 0-.423.192T4 6.616v10.769q0 .23.192.423t.423.192M4 18V6z"
          />
        </svg>
        <span class="text-sm text-gray-700">تصویر جواز کسب</span>
      </button>
    </div>

    <button
      class="w-full py-3 rounded-xl bg-[#68C4FD] text-white font-medium text-base hover:bg-[#5ab5ec] transition"
    >
      ارسال
    </button>
  </main>
</template>
