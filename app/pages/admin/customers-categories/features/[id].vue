<template>
  <div class="text-xs">
    <div>
      <label for="title" class="block mb-1.5">نام دسته بندی</label>
      <input type="text" class="cinput" id="title" />
    </div>
    <div class="grid grid-cols-2 gap-2 my-2">
      <div
        class="flex justify-between items-center bg-[#F1F1F1] rounded-10 p-2"
      >
        وضعیت خرید
        <input type="checkbox" class="toggle-switch" />
      </div>
      <div
        class="flex justify-between items-center bg-[#F1F1F1] rounded-10 p-2"
      >
        وضعیت فروش
        <input type="checkbox" class="toggle-switch" />
      </div>
      <div
        class="flex justify-between items-center bg-[#F1F1F1] rounded-10 p-2 col-span-2 gap-1"
      >
        <div>
          حد مجاز معامله بر اساس اعتبار حسابداری
          <p class="text-2sm">
            در صورت قطع اتصال حسابداری مشتریان این دسته امکان معامله نخواهند
            داشت
          </p>
        </div>
        <input type="checkbox" class="toggle-switch" />
      </div>
    </div>
    <Button label="انتخاب آیتم های دسته بندی" pt:root="!bg-secondary w-full" />
    <div class="mt-5 bg-[#F1F1F1B2] p-2 rounded-10">
      <div
        class="flex justify-between items-center mb-2 pb-2 border-b border-stroke"
      >
        <h2>بنکدار</h2>
        <button>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 0.75L11.2549 11.2549"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M11.2549 0.75L0.749934 11.2548"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
      <div class="grid grid-cols-3 gap-2">
        <ul class="flex flex-col justify-between">
          <li class="bg-white p-1 rounded-10"><button>اختلاف قیمت</button></li>
          <li><button>حد مجاز معامله</button></li>
          <li><button>تایید خودکار</button></li>
          <li><button>تایید خودکار</button></li>
        </ul>
        <div class="h-full col-span-2 bg-white rounded-10 p-2">
          <div class="flex items-center gap-3">
            <div class="text-center">
              <h4>فروش</h4>
              52,320
            </div>
            <div
              class="border border-strokesec rounded-10 p-2 flex justify-between gap-1 flex-grow"
            >
              <button>
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
              <InputNumber inputId="integeronly" fluid />
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
          <div class="flex items-center gap-3 mt-3">
            <div class="text-center">
              <h4>فروش</h4>
              52,320
            </div>
            <div
              class="border border-strokesec rounded-10 p-2 flex justify-between gap-1 flex-grow"
            >
              <button>
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
              <InputNumber inputId="integeronly" fluid />
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
    </div>
    <div class="grid grid-cols-2 gap-2 mt-5">
      <Button label="ثبت تغییرات" pt:root="!bg-secondary" />
      <Button label="لغو" pt:root="!bg-white !border !text-primary" />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'ویرایش (بنکدار) |'
})

definePageMeta({
  title: 'ویرایش (بنکدار)'
})
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

:deep(.p-inputnumber-input:focus, .p-inputnumber-input:hover) {
  border-color: #bfbfbf !important;
}
</style>
