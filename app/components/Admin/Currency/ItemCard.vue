<template>
  <div class="grami space-y-4">
    <div class="text-center bg-white rounded-xl p-3 border border-gray-100">
      <div class="flex justify-between items-center gap-3 mb-3">
        <div class="text-sm text-slate-700 flex gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 48 48"
            class="text-yellow-500"
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
          {{ props.data.name }}
        </div>
        <button @click="visible = true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28px"
            height="28px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m18 9l-.84 8.398c-.127 1.273-.19 1.909-.48 2.39a2.5 2.5 0 0 1-1.075.973C15.098 21 14.46 21 13.18 21h-2.36c-1.279 0-1.918 0-2.425-.24a2.5 2.5 0 0 1-1.076-.973c-.288-.48-.352-1.116-.48-2.389L6 9m7.5 6.5v-5m-3 5v-5m-6-4h4.615m0 0l.386-2.672c.112-.486.516-.828.98-.828h3.038c.464 0 .867.342.98.828l.386 2.672m-5.77 0h5.77m0 0H19.5"
            />
          </svg>
        </button>
      </div>
      <div class="border-t border-t-gray-300"></div>
      <div class="flex justify-between mt-5">
        <div class="flex items-center justify-between gap-3">
          <div class="text-sm text-slate-500">خرید</div>
          <input
            type="checkbox"
            @change="updateItemFunc"
            v-model="props.data.isBuy"
            class="toggle border-[#BFBFBF] bg-[#BFBFBF] checked:border-[#7AB73E] checked:bg-[#7AB73E] text-white"
          />
        </div>
        <div class="flex items-center justify-between gap-3">
          <div class="text-sm text-slate-500">فروش</div>
          <input
            type="checkbox"
            @change="updateItemFunc"
            v-model="props.data.isSell"
            class="toggle border-[#BFBFBF] bg-[#BFBFBF] checked:border-[#7AB73E] checked:bg-[#7AB73E] text-white"
          />
        </div>
        <NuxtLink :to="`/admin/currency/${props.data._id}`">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
    <Dialog
      v-model:visible="visible"
      modal
      header="حدف آیتم"
      style="width: 95%; max-width: 450px"
    >
      <span class="text-surface-500 dark:text-surface-400 block mb-8"
        >آیا میخواهید این آیتم را حذف کنید؟</span
      >

      <div class="grid grid-cols-2 gap-2">
        <Button
          type="button"
          label="خیر"
          severity="secondary"
          @click="visible = false"
        ></Button>
        <Button
          :loading="loading"
          type="button"
          label="بله"
          @click="removeItemFunc"
        ></Button>
      </div>
    </Dialog>
    <Toast />
  </div>
</template>

<script setup>
let { showToast } = useToastComp()
let props = defineProps(['data'])
let emit = defineEmits(['success'])

let visible = ref(false)
let loading = ref(false)

async function updateItemFunc () {
  try {
    let data = await $fetch('/api/admin/currency/updateCurrency', {
      credentials: 'include',
      method: 'POST',
      body: { ...props.data }
    })

    showToast(data.message)
  } catch (err) {
    showToast('error', 'خطا', err.message)
  }
}

async function removeItemFunc () {
  try {
    loading.value = true

    let data = await $fetch('/api/admin/currency/removeCurrency', {
      credentials: 'include',
      method: 'POST',
      body: { id: props.data._id }
    })

    emit('success')
  } catch (err) {
    showToast('error', 'خطا', err.message)
  } finally {
    loading.value = true
  }
}
</script>
