<template>
  <main>
    <div
      class="space-y-3 p-2 bg-[#F9F9FA] border border-[#00000033] rounded-2xl"
    >
      <div class="relative">
        <Select
          v-model="form.itemType"
          :options="items"
          placeholder="آیتم مورد نظر"
          optionLabel="fa"
          pt:root="w-full !border-[#00000033] !bg-white !text-sm !rounded-xl h-[44px]"
          pt:label="!flex !items-center !text-gray-600 !text-sm"
        />
      </div>
      <input
        type="number"
        placeholder="مقدار حواله"
        class="w-full bg-white rounded-xl border border-[#00000033] py-3 px-4 text-sm text-gray-600 placeholder:text-gray-600 focus:outline-none text-right"
        v-model="form.weight"
      />
      <input
        type="text"
        placeholder="نام تحویل گیرنده"
        class="w-full bg-white rounded-xl border border-[#00000033] py-3 px-4 text-sm text-gray-600 placeholder:text-gray-600 focus:outline-none text-right"
        v-model="form.receiverName"
      />
      <Button
        class="w-full !rounded-xl !bg-[#83BCFF] !text-sm !text-black !border-none"
        label="ثبت حواله"
        @click="submitHavale"
        :loading="loading"
      />
    </div>
    <p class="text-sm text-graydark mt-3 mb-5 flex items-center gap-1">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_893_3027)">
          <path
            d="M1.66675 6.66666C1.66675 3.90523 3.90533 1.66666 6.66675 1.66666H13.3334C16.0948 1.66666 18.3334 3.90523 18.3334 6.66666V13.3333C18.3334 16.0947 16.0948 18.3333 13.3334 18.3333H6.66675C3.90533 18.3333 1.66675 16.0947 1.66675 13.3333V6.66666Z"
            stroke="#D5AA51"
            stroke-width="1.5"
          />
          <path
            d="M10 5.83331L10 11.7539"
            stroke="#D5AA51"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M10 14.1667L10.0083 14.1667"
            stroke="#D5AA51"
            stroke-width="2"
            stroke-linecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_893_3027">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(8.74228e-07 20) rotate(-90)"
            />
          </clipPath>
        </defs>
      </svg>
      ثبت درخواست حواله به منظله انجام آن نیست و پس از بررسی و تایید جابه جا
      خواهد شد
    </p>
    <section>
      <div class="flex justify-between items-center text-graydark text-xs mb-2">
        <div class="flex items-center gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 5.83332C2.5 3.53214 4.36548 1.66666 6.66667 1.66666H13.3333C15.6345 1.66666 17.5 3.53214 17.5 5.83332V14.1667C17.5 16.4678 15.6345 18.3333 13.3333 18.3333H6.66667C4.36548 18.3333 2.5 16.4678 2.5 14.1667V5.83332Z"
              stroke="#BFBFBF"
              stroke-width="1.5"
            />
            <path
              d="M6.66675 6.83328H13.3334"
              stroke="#BFBFBF"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66675 10.1666H13.3334"
              stroke="#BFBFBF"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 13.5H12.5"
              stroke="#BFBFBF"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h2>حواله های ثبت شده اخیر</h2>
        </div>
        <NuxtLink to="/" class="flex items-center gap-2">
          مشاهده بیشتر
          <svg
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.80052 9.5L1.14032 6.03244C0.619894 5.53941 0.619893 4.71059 1.14032 4.21756L4.80052 0.75"
              stroke="#BFBFBF"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </NuxtLink>
      </div>
      <Skeleton
        width="100%"
        height="5rem"
        class="mb-2"
        v-for="item in 5"
        :key="item"
        v-if="pending"
      />
      <HavaleCard
        v-for="item in data"
        :key="item._id"
        :data="item"
        v-else-if="!pending && data.length > 0"
      />
      <p v-else class="text-center text-xs text-graydark">
        حواله ای وجود ندارد
      </p>
    </section>
    <Toast />
  </main>
</template>

<script setup>
useHead({
  title: 'ثبت حواله |'
})

definePageMeta({
  title: 'ثبت حواله'
})

let { data, refresh, pending } = await useFetch('/api/user/havale/getHavale', {
  credentials: 'include'
})

let items = ref([
  { fa: 'طلا', en: 'gold' },
  { fa: 'سکه', en: 'coin' },
  { fa: 'نقره', en: 'silver' }
])

let { showToast } = useToastComp()

let form = reactive({
  itemType: '',
  weight: '',
  receiverName: ''
})

let loading = ref(false)

async function submitHavale () {
  if (!form.itemType || !form.weight || !form.receiverName)
    showToast('warn', 'اخطار', 'باید فیلد های اجباری را پر کنید')
  else {
    loading.value = true

    try {
      let formData = new FormData()
      formData.append('itemType', form.itemType.en)
      formData.append('weight', form.weight)
      formData.append('receiverName', form.receiverName)
      formData.append('description', form.description)

      if (data.file) {
        formData.append('file', form.file)
      }

      let response = await $fetch('/api/user/havale/submit', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      })

      await refresh()
      showToast(response.message)
      for (let f in form) form[f] = ''
    } catch (err) {
      showToast('error', 'خطا', err.message)
    } finally {
      loading.value = false
    }
  }
}
</script>
