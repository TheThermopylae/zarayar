<template>
  <TitleSection title="خرید-فروش" />
  <section
    class="bg-white rounded-10 p-3 flex justify-between items-center mb-2"
  >
    <div>
      <div class="flex gap-2 items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          v-if="findWallet.itemType == 'gold'"
        >
          <path
            d="M3.77214 13.1838C3.90825 12.7754 4.29039 12.5 4.72082 12.5H9.2793C9.70973 12.5 10.0919 12.7754 10.228 13.1838L11.5613 17.1838C11.7772 17.8313 11.2952 18.5 10.6126 18.5H3.38749C2.70493 18.5 2.22296 17.8313 2.4388 17.1838L3.77214 13.1838Z"
            stroke="#966D22"
            stroke-width="1.5"
          />
          <path
            d="M13.7721 13.1838C13.9082 12.7754 14.2904 12.5 14.7208 12.5H19.2793C19.7097 12.5 20.0919 12.7754 20.228 13.1838L21.5613 17.1838C21.7772 17.8313 21.2952 18.5 20.6126 18.5H13.3875C12.7049 18.5 12.223 17.8313 12.4388 17.1838L13.7721 13.1838Z"
            stroke="#966D22"
            stroke-width="1.5"
          />
          <path
            d="M8.77214 5.68377C8.90825 5.27543 9.29039 5 9.72082 5H14.2793C14.7097 5 15.0919 5.27543 15.228 5.68377L16.5613 9.68377C16.7772 10.3313 16.2952 11 15.6126 11H8.38749C7.70493 11 7.22296 10.3313 7.4388 9.68377L8.77214 5.68377Z"
            stroke="#966D22"
            stroke-width="1.5"
          />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          v-else
        >
          <path
            d="M12.45 5.15998C12.45 6.62905 10.2383 7.81996 7.51003 7.81996C4.78176 7.81996 2.57007 6.62905 2.57007 5.15998C2.57007 3.69091 4.78176 2.5 7.51003 2.5C10.2383 2.5 12.45 3.69091 12.45 5.15998Z"
            stroke="#D5AA51"
            stroke-width="1.44299"
          />
          <path
            d="M7.51003 12.3796C10.2383 12.3796 12.45 11.1887 12.45 9.71963V5.15967C12.45 6.62873 10.2383 7.81965 7.51003 7.81965C4.78176 7.81965 2.57007 6.62873 2.57007 5.15967V9.71963C2.57007 11.1887 4.78176 12.3796 7.51003 12.3796Z"
            stroke="#D5AA51"
            stroke-width="1.44299"
          />
          <path
            d="M7.51003 16.9397C10.2383 16.9397 12.45 15.7488 12.45 14.2797V9.71973C12.45 11.1888 10.2383 12.3797 7.51003 12.3797C4.78176 12.3797 2.57007 11.1888 2.57007 9.71973V14.2797C2.57007 15.7488 4.78176 16.9397 7.51003 16.9397Z"
            stroke="#D5AA51"
            stroke-width="1.44299"
          />
          <path
            d="M7.51003 21.4997C10.2383 21.4997 12.45 20.3088 12.45 18.8397V14.2798C12.45 15.7489 10.2383 16.9398 7.51003 16.9398C4.78176 16.9398 2.57007 15.7489 2.57007 14.2798V18.8397C2.57007 20.3088 4.78176 21.4997 7.51003 21.4997Z"
            stroke="#D5AA51"
            stroke-width="1.44299"
          />
          <circle
            cx="17.1432"
            cy="17.2252"
            r="4.275"
            stroke="#D5AA51"
            stroke-width="1.5"
          />
        </svg>
        <span class="text-sm text-gray-700">{{ findWallet.item }}</span>
      </div>
    </div>
    <div
      class="flex items-center gap-1 text-[#96A825] text-sm"
      v-if="route.query.side == 'buy'"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 10.192q-.846 0-1.423-.576Q10 9.039 10 8.192q0-.846.577-1.423T12 6.192t1.423.577T14 8.192t-.577 1.423t-1.423.577m-6.365 3.193q-.667 0-1.141-.475t-.475-1.14V4.615q0-.667.475-1.141T5.634 3h12.75q.667 0 1.141.475T20 4.615v7.154q0 .666-.475 1.141t-1.14.475zm1-1h10.75q0-.671.474-1.144q.475-.472 1.141-.472V5.616q-.671 0-1.143-.475T17.385 4H6.635q0 .671-.475 1.143q-.474.473-1.14.473v5.153q.67 0 1.143.475t.472 1.14m-1.616 0V4zm7 8.616l3.289-3.288l-.689-.689l-2.1 2.1v-3.97H11.5v3.97l-2.1-2.1l-.688.689z"
        />
      </svg>
      خرید
    </div>
    <div class="flex items-center gap-1 text-[#DA8999] text-sm" v-else>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        class="rotate-180"
      >
        <path
          fill="currentColor"
          d="M12 10.192q-.846 0-1.423-.576Q10 9.039 10 8.192q0-.846.577-1.423T12 6.192t1.423.577T14 8.192t-.577 1.423t-1.423.577m-6.365 3.193q-.667 0-1.141-.475t-.475-1.14V4.615q0-.667.475-1.141T5.634 3h12.75q.667 0 1.141.475T20 4.615v7.154q0 .666-.475 1.141t-1.14.475zm1-1h10.75q0-.671.474-1.144q.475-.472 1.141-.472V5.616q-.671 0-1.143-.475T17.385 4H6.635q0 .671-.475 1.143q-.474.473-1.14.473v5.153q.67 0 1.143.475t.472 1.14m-1.616 0V4zm7 8.616l3.289-3.288l-.689-.689l-2.1 2.1v-3.97H11.5v3.97l-2.1-2.1l-.688.689z"
        />
      </svg>
      فروش
    </div>
  </section>
  <main class="space-y-3">
    <div class="bg-white p-3 rounded-2xl space-y-3">
      <div class="space-y-2">
        <input
          class="bg-gray-100 rounded-lg p-3 text-center text-sm text-gray-800 block w-full"
          placeholder="وزن"
          v-model="data.weight"
        />
        <input
          class="bg-gray-100 rounded-lg p-3 text-center text-sm text-gray-800 block w-full"
          placeholder="مقدار"
          v-model="data.amount"
        />

        <input
          class="bg-gray-100 rounded-lg p-3 text-center text-sm text-gray-800 block w-full"
          placeholder="توضیحات"
          v-model="data.description"
        />
      </div>
      <Button
        pt:root="w-full !bg-[#B4DB8C] !text-sm !border-none"
        label="ثبت و ادامه"
        @click="createOrderFunc"
        :loading="loading"
      />
    </div>
    <Toast />
  </main>
</template>

<script setup>
let { showToast } = useToastComp()
let route = useRoute()

let data = reactive({
  walletId: route.params.id,
  weight: '',
  amount: '',
  side: route.query.side,
  description: ''
})

let { data: wallet } = await useFetch('/api/admin/wallet/getWallet', {
  credentials: 'include',
  method: 'POST',
  body: { id: route.query.user }
})

let findWallet = computed(() => {
  return wallet.value.find(item => item._id == route.params.id)
})

let loading = ref(false)

async function createOrderFunc () {
  if (!data.weight || !data.amount || !data.description)
    showToast('warn', 'اخطار', 'باید تمامی فیلد ها را پر کنید')
  else {
    console.log(data)

    try {
      loading.value = true
      let result = await $fetch('/api/admin/orders/create', {
        credentials: 'include',
        method: 'POST',
        body: data
      })

      console.log(result)
      showToast(result.message)
    } catch (err) {
      showToast('error', 'خطا', err.message)
    } finally {
      loading.value = false
    }
  }
}
</script>
