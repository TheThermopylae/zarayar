<template>
  <details class="rounded-xl ring-1 ring-gray-200 p-3 space-y-3">
    <summary
      class="list-none flex items-center justify-between border-b pb-2 border-b-gray-300"
    >
      <div class="flex items-center gap-2">
        <!-- <img src="../img/gold.svg" alt="" /> -->
        <span class="text-sm text-gray-800">
          {{ props.data.item }}
        </span>
      </div>
      <div class="flex items-center gap-2">
        <input
          type="checkbox"
          class="toggle border-[#BFBFBF] bg-[#BFBFBF] checked:border-[#96A825] checked:bg-[#96A825] text-white"
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="cursor-pointer z-50"
          @click="$emit('close')"
        >
          <path
            d="M1.25 7.25C1.25 3.93629 3.93629 1.25 7.25 1.25H16.75C20.0637 1.25 22.75 3.93629 22.75 7.25V16.75C22.75 20.0637 20.0637 22.75 16.75 22.75H7.25C3.93629 22.75 1.25 20.0637 1.25 16.75V7.25Z"
            fill="#E84362"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.18299 7.18299C7.42696 6.93901 7.82253 6.93901 8.06651 7.18299L16.817 15.9335C17.061 16.1775 17.061 16.573 16.817 16.817C16.573 17.061 16.1775 17.061 15.9335 16.817L7.18299 8.06651C6.93901 7.82253 6.93901 7.42696 7.18299 7.18299Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.817 7.18299C17.061 7.42697 17.061 7.82254 16.817 8.06652L8.0665 16.817C7.82252 17.061 7.42695 17.061 7.18298 16.817C6.939 16.573 6.93901 16.1775 7.18299 15.9335L15.9335 7.18298C16.1775 6.939 16.573 6.93901 16.817 7.18299Z"
            fill="white"
          />
        </svg>
      </div>
    </summary>

    <div class="flex items-center gap-2 px-1">
      <span class="text-sm text-gray-700">معامله</span>
      <input
        type="checkbox"
        class="toggle border-[#BFBFBF] bg-[#BFBFBF] checked:border-[#96A825] checked:bg-[#96A825] text-white"
        v-model="props.data.tradeEnabled"
      />
    </div>

    <div class="space-y-2">
      <input
        type="text"
        class="w-full p-3 border border-gray-300 bg-gray-100 rounded-xl text-sm text-gray-700 text-center focus:outline-none"
        placeholder="درصد سود آیتم"
        v-model="props.data.profitPercent"
      />

      <input
        type="text"
        class="w-full p-3 border border-gray-300 bg-gray-100 rounded-xl text-sm text-gray-700 text-center focus:outline-none"
        placeholder="حداقل مبلغ مجاز برای هر سفارش روی این آیتم"
        v-model="props.data.minOrderAmount"
      />

      <input
        type="text"
        class="w-full p-3 border border-gray-300 bg-gray-100 rounded-xl text-sm text-gray-700 text-center focus:outline-none"
        placeholder="حداکثر مبلغ مجاز برای هر سفارش روی این آیتم"
        v-model="props.data.maxOrderAmount"
      />

      <input
        type="text"
        class="w-full p-3 border border-gray-300 bg-gray-100 rounded-xl text-sm text-gray-700 text-center focus:outline-none"
        placeholder="سقف مجموع مبلغ سفارش های امروز روی این آیتم"
        v-model="props.data.dailyOrderLimit"
      />
    </div>

    <Button
      class="w-full !border-gray-300 !rounded-xl !bg-[#B4DB8C] !text-slate-800 !text-sm"
      label="ذخیره"
      :loading="loading"
      @click="editWalletFunc"
    />
  </details>
</template>

<script setup>
let props = defineProps(['data'])
let { showToast } = useToastComp()

console.log(props.data)

let loading = ref(false)

async function editWalletFunc () {
  try {
    loading.value = true

    let result = await $fetch('/api/admin/wallet/editWallet', {
      credentials: 'include',
      method: 'POST',
      body: { ...props.data }
    })

    showToast(result.message)
  } catch (err) {
    showToast(err.message)
  } finally {
    loading.value = false
  }
}
</script>
