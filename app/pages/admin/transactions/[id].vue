<template>
  <TitleSection title="تراکنش ها" />
  <main>
    <div class="bg-white p-3 rounded-2xl space-y-3">
      <div class="space-y-3">
        <div
          class="flex items-center justify-between flex-row-reverse bg-gray-100 border border-gray-300 rounded-xl p-3 text-sm text-gray-700"
        >
          <div class="flex items-center gap-2">
            <span>از</span>
            <span>1404/07/19</span>
            <span>تا</span>
            <span>1404/07/19</span>
          </div>
          <button class="bg-gray-100 rounded-lg p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
          </button>
        </div>

        <div class="bg-gray-100 border border-gray-300 rounded-xl p-3 text-sm">
          <div class="flex justify-between items-center text-[#96A825] mb-2">
            <div class="flex items-center gap-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 1.25C18.6234 1.25 20.75 3.37665 20.75 6V20.4648C20.75 21.7269 19.7269 22.75 18.4648 22.75C18.0137 22.75 17.5726 22.6165 17.1973 22.3662L12.6934 19.3633C12.2736 19.0835 11.7264 19.0835 11.3066 19.3633L6.80273 22.3662C6.42736 22.6165 5.9863 22.75 5.53516 22.75C4.27311 22.75 3.25001 21.7269 3.25 20.4648V6C3.25 3.37665 5.37665 1.25 8 1.25H16ZM9 6.75C8.58579 6.75 8.25 7.08579 8.25 7.5C8.25 7.91421 8.58579 8.25 9 8.25H15C15.4142 8.25 15.75 7.91421 15.75 7.5C15.75 7.08579 15.4142 6.75 15 6.75H9Z"
                  fill="#96A825"
                />
              </svg>
              تایید شده
            </div>
            {{ data.itemsconfirmed }}
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-1 text-gray-700">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6C4 3.79086 5.79086 2 8 2H16C18.2091 2 20 3.79086 20 6V20.4648C20 21.3127 19.3127 22 18.4648 22C18.1617 22 17.8654 21.9103 17.6133 21.7422L13.1094 18.7396C12.4376 18.2917 11.5624 18.2917 10.8906 18.7396L6.38675 21.7422C6.13457 21.9103 5.83827 22 5.53518 22C4.68733 22 4 21.3127 4 20.4648V6Z"
                  stroke="#616161"
                  stroke-width="1.5"
                />
                <path
                  d="M9 7.5H15"
                  stroke="#616161"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>

              تایید شده
            </div>
            {{ data.itemspending }}
          </div>
        </div>

        <div
          class="flex items-center justify-between bg-gray-100 border border-gray-300 rounded-xl p-3 text-sm"
        >
          <div class="flex items-center gap-1 text-gray-700">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 1.25C18.6234 1.25 20.75 3.37665 20.75 6V20.4648C20.75 21.7269 19.7269 22.75 18.4648 22.75C18.0137 22.75 17.5726 22.6165 17.1973 22.3662L12.6934 19.3633C12.2736 19.0835 11.7264 19.0835 11.3066 19.3633L6.80273 22.3662C6.42736 22.6165 5.9863 22.75 5.53516 22.75C4.27311 22.75 3.25001 21.7269 3.25 20.4648V6C3.25 3.37665 5.37665 1.25 8 1.25H16ZM9 6.75C8.58579 6.75 8.25 7.08579 8.25 7.5C8.25 7.91421 8.58579 8.25 9 8.25H15C15.4142 8.25 15.75 7.91421 15.75 7.5C15.75 7.08579 15.4142 6.75 15 6.75H9Z"
                fill="#616161"
              />
            </svg>
            تعداد کل
          </div>
          {{ data.data.length }}
        </div>
      </div>

      <div
        class="border border-gray-300 rounded-lg p-4"
        v-for="item in data.data"
        v-if="data.data.length > 0"
      >
        <div class="right-accent-green"></div>

        <div class="flex justify-between items-center mb-5">
          <div class="flex gap-2">
            <p>نقد شنبه : <span class="text-[#96A825]">خرید</span></p>
          </div>

          <span
            class="px-6 py-2 rounded-lg bg-[#E7F2A7] text-black text-sm font-medium"
          >
            تایید شده</span
          >
        </div>

        <div class="space-y-3">
          <div class="flex justify-between">
            <div class="flex gap-3">
              <span>وزن</span>
            </div>
            <span>20</span>
            <span>گرم</span>
          </div>

          <div class="flex justify-between">
            <div class="flex gap-3">
              <span>وزن</span>
            </div>
            <span>200000232400 </span>
            <span>ریال</span>
          </div>

          <div class="flex justify-between">
            <div class="flex gap-3">
              <span>وزن</span>
            </div>
            <span>20000000 </span>
            <span>ریال</span>
          </div>
        </div>

        <div class="flex justify-center gap-2 mt-5 items-center">
          <p>11:54:32</p>
          <p>1404/07/16</p>
        </div>

        <div
          class="flex justify-between items-center mt-2 text-xs text-gray-400"
        >
          <span>شماره فاکتور : ٠١٢٣٤٥٦٧٨٩</span>
          <span>شماره ردیف سند : 123</span>
        </div>
      </div>
      <p v-else class="text-center">تراکنشی وجود ندارد</p>
    </div>
  </main>
</template>

<script setup>
let route = useRoute()

let { data } = await useFetch('/api/admin/transactions/getTransactions', {
  crededtials: 'include',
  method: 'POST',
  body: { id: route.params.id }
})
</script>
