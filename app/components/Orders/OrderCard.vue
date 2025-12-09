<template>
  <div class="bg-white p-3 rounded-2xl mb-3 last:m-0">
    <div class="border border-gray-300 rounded-lg p-4">
      <div class="flex justify-between items-center">
        <div class="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 48 48"
            v-if="props.data.settlementType == 'gold'"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M5.42 28.395c.42-1.169 1.463-1.952 2.696-2.103C9.306 26.147 10.903 26 12.5 26s3.194.147 4.385.292c1.233.15 2.276.934 2.696 2.103c.642 1.787 1.552 4.891 2.127 9.313c.2 1.534-.875 2.902-2.416 3.033c-1.576.134-3.84.259-6.792.259s-5.215-.125-6.79-.26c-1.542-.13-2.617-1.498-2.418-3.032c.576-4.422 1.486-7.526 2.128-9.313m23 0c.42-1.169 1.463-1.952 2.696-2.103c1.19-.145 2.788-.292 4.384-.292s3.194.147 4.385.292c1.233.15 2.276.934 2.696 2.103c.642 1.787 1.552 4.891 2.127 9.313c.2 1.534-.875 2.902-2.416 3.033c-1.576.134-3.84.259-6.792.259s-5.215-.125-6.79-.26c-1.542-.13-2.617-1.498-2.418-3.032c.576-4.422 1.486-7.526 2.128-9.313m-11.5-19c.42-1.169 1.463-1.952 2.696-2.103C20.806 7.147 22.404 7 24 7s3.194.147 4.385.292c1.233.15 2.276.934 2.696 2.103c.642 1.787 1.552 4.891 2.127 9.313c.2 1.534-.875 2.902-2.416 3.033c-1.576.134-3.84.259-6.792.259s-5.215-.125-6.79-.26c-1.542-.13-2.617-1.498-2.418-3.032c.576-4.422 1.486-7.526 2.128-9.313"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            v-else-if="props.data.settlementType == 'cash'"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <path
                d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2"
              />
              <path
                d="M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6m6.5-2.99l.01-.011M5.5 12.01l.01-.011"
              />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            v-else
          >
            <path
              fill="currentColor"
              d="M12.005 4.003c6.075 0 11 2.686 11 6v4c0 3.314-4.925 6-11 6c-5.967 0-10.824-2.591-10.995-5.823l-.005-.177v-4c0-3.314 4.925-6 11-6m0 12c-3.72 0-7.01-1.008-9-2.55v.55c0 1.882 3.883 4 9 4c5.01 0 8.838-2.03 8.995-3.882l.005-.118l.001-.55c-1.99 1.542-5.28 2.55-9.001 2.55m0-10c-5.117 0-9 2.118-9 4s3.883 4 9 4s9-2.118 9-4s-3.883-4-9-4"
            />
          </svg>
          <p>
            :
            <span
              :class="{
                'text-[#96A825]': props.data.side == 'buy',
                'text-red-500': props.data.side == 'sell'
              }"
              v-text="props.data.side == 'buy' ? 'خرید' : 'فروش'"
            ></span>
          </p>
        </div>
        <span
          class="px-6 py-2 rounded-lg text-black text-sm font-medium"
          :class="{
            'bg-[#E7F2A7]': props.data.status == 'confirmed',
            'bg-yellow-400': props.data.status == 'pending',
            'bg-red-400': props.data.status == 'rejected'
          }"
          v-text="
            props.data.status == 'confirmed'
              ? 'تایید شده'
              : props.data.status == 'pending'
              ? 'در انتظار'
              : 'رد شده'
          "
        >
        </span>
      </div>
      <div class="flex justify-between my-3">
        <div class="flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6 19h12L16.575 9h-9.15zm6-12q.425 0 .713-.288T13 6t-.288-.712T12 5t-.712.288T11 6t.288.713T12 7m2.825 0h1.75q.75 0 1.3.5t.675 1.225l1.425 10q.125.9-.462 1.588T18 21H6q-.925 0-1.513-.687t-.462-1.588l1.425-10Q5.575 8 6.125 7.5t1.3-.5h1.75q-.075-.25-.125-.487T9 6q0-1.25.875-2.125T12 3t2.125.875T15 6q0 .275-.05.513T14.825 7M6 19h12z"
            />
          </svg>
          <span>وزن</span>
        </div>
        <span>{{ props.data.amount.toLocaleString() }} گرم</span>
      </div>
      <!-- <div class="space-y-3">
        <div class="flex justify-between">
          <div class="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 48 48"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
              >
                <path
                  d="M14.823 3.653C13.744 3.824 13 4.766 13 5.86a7.14 7.14 0 0 0 4.37 6.583C9.581 15.882 4 24.837 4 32.25C4 41.639 12.954 45 24 45s20-3.361 20-12.75c0-7.413-5.583-16.368-13.37-19.808A7.14 7.14 0 0 0 35 5.859c0-1.093-.744-2.035-1.823-2.206C31.357 3.364 28.225 3 24 3s-7.358.364-9.177.653"
                />
                <path d="M17 12.5s3 .5 7 .5s7-.5 7-.5" />
              </g>
            </svg>
            <span>وزن</span>
          </div>
          <span>20</span>
          <span>گرم</span>
        </div>

        <div class="flex justify-between">
          <div class="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" stroke-width="1.5">
                <path
                  d="M2.5 12c0-4.23 0-6.345 1.198-7.747q.256-.3.555-.555C5.655 2.5 7.77 2.5 12 2.5s6.345 0 7.747 1.198q.3.256.555.555C21.5 5.655 21.5 7.77 21.5 12s0 6.345-1.198 7.747q-.256.3-.555.555C18.345 21.5 16.23 21.5 12 21.5s-6.345 0-7.747-1.198q-.3-.256-.555-.555C2.5 18.345 2.5 16.23 2.5 12Z"
                />
                <path
                  stroke-linecap="round"
                  d="M14.71 10.061c-.099-.763-.975-1.995-2.55-1.995c-1.829 0-2.599 1.013-2.755 1.52c-.244.678-.195 2.071 1.95 2.223c2.68.19 3.754.506 3.618 2.147s-1.631 1.995-2.812 1.957s-3.113-.58-3.188-2.04m3-6.875V8.07m0 7.833v1.095"
                />
              </g>
            </svg>
            <span>وزن</span>
          </div>
          <span>200000232400 </span>
          <span>ریال</span>
        </div>

        <div class="flex justify-between">
          <div class="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
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
                  d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2"
                />
                <path
                  d="M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6m6.5-2.99l.01-.011M5.5 12.01l.01-.011"
                />
              </g>
            </svg>
            <span>وزن</span>
          </div>
          <span>20000000 </span>
          <span>ریال</span>
        </div>
      </div>

      <div class="flex justify-center gap-2 mt-5 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M17 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
          />
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.193-.013h4.113c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827q.39.03.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.945c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2.5A.75.75 0 0 1 7 1.75M5.71 4.89c-1.005.135-1.585.389-2.008.812S3.025 6.705 2.89 7.71q-.034.255-.058.539h18.336q-.024-.284-.058-.54c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14M2.75 12c0-.854 0-1.597.013-2.25h18.474c.013.653.013 1.396.013 2.25v2c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008s-1.003.677-2.009.812c-1.027.138-2.382.14-4.289.14h-4c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.027-.14-2.382-.14-4.289z"
            clip-rule="evenodd"
          />
        </svg>
        <p>11:54:32</p>
        <p>1404/07/16</p>
      </div> -->

      <div class="flex justify-between items-center mt-2 text-xs text-gray-400">
        <span>شماره سفارش : {{ props.data.orderNumber }}</span>
        <!-- <span>شماره ردیف سند : 123</span> -->
      </div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps(['data'])
</script>