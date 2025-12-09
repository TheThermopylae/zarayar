<template>
  <!-- start -->
  <!-- :class="{ '!border-primary': userData?._id == props.data?._id }" -->
  <div class="bg-[#FAFAFA] rounded-xl p-3 border border-strokesec">
    <div class="flex justify-between">
      <div class="flex gap-3 items-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.625 5.41667C5.625 3.00043 7.58375 1.04167 10 1.04167C12.4162 1.04167 14.375 3.00043 14.375 5.41667C14.375 7.83292 12.4162 9.79167 10 9.79167C7.58375 9.79167 5.625 7.83292 5.625 5.41667Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.54199 15.4762C3.54199 13.0271 5.5274 11.0417 7.97652 11.0417H12.0241C14.4733 11.0417 16.4587 13.0271 16.4587 15.4762C16.4587 17.3993 14.8997 18.9583 12.9765 18.9583H7.02414C5.101 18.9583 3.54199 17.3993 3.54199 15.4762Z"
            fill="#BFBFBF"
          />
        </svg>
        کمیل ملکی
      </div>
      <!-- v-if="userData?._id != props.data?._id" -->
      <div class="flex items-center justify-between gap-3">
        <button class="submenu" @click="showMenu = !showMenu">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.75 12C2.75 10.7574 3.75736 9.75 5 9.75C6.24264 9.75 7.25 10.7574 7.25 12C7.25 13.2426 6.24264 14.25 5 14.25C3.75736 14.25 2.75 13.2426 2.75 12ZM5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75C5.41421 12.75 5.75 12.4142 5.75 12C5.75 11.5858 5.41421 11.25 5 11.25Z"
              fill="#616161"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12ZM12 11.25C11.5858 11.25 11.25 11.5858 11.25 12C11.25 12.4142 11.5858 12.75 12 12.75C12.4142 12.75 12.75 12.4142 12.75 12C12.75 11.5858 12.4142 11.25 12 11.25Z"
              fill="#616161"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.75 12C16.75 10.7574 17.7574 9.75 19 9.75C20.2426 9.75 21.25 10.7574 21.25 12C21.25 13.2426 20.2426 14.25 19 14.25C17.7574 14.25 16.75 13.2426 16.75 12ZM19 11.25C18.5858 11.25 18.25 11.5858 18.25 12C18.25 12.4142 18.5858 12.75 19 12.75C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25Z"
              fill="#616161"
            />
          </svg>
        </button>
        <input
          type="checkbox"
          class="toggle-switch"
        />
      </div>
    </div>
    <div class="pt-2 mt-2 border-t border-strokesec" v-if="showMenu">
      <ul class="text-sm">
        <li class="p-2 flex justify-between items-center h-9">
          آخرین بازدید
          <span class="flex items-center gap-2">
            <div class="size-2.5 rounded-full bg-cgreen"></div>
            آنلاین
          </span>
        </li>
        <li
          class="p-2 flex justify-between items-center h-9 bg-[#F2F2F2] rounded-10"
        >
          آخرین معامله
          <span class="flex items-center gap-2"> 7 ساعت قبل </span>
        </li>
        <li class="p-2 flex justify-between items-center h-9">
          شماره موبایل
          <span class="flex items-center gap-2">09357559553</span>
        </li>
        <li
          class="p-2 flex justify-between items-center h-9 bg-[#F2F2F2] rounded-10"
        >
          کد ملی
          <span class="flex items-center gap-2">---</span>
        </li>
        <li class="p-2 flex justify-between items-center h-9">
          کد حسابداری
          <span class="flex items-center gap-2">5236</span>
        </li>
        <li
          class="p-2 flex justify-between items-center h-9 bg-[#F2F2F2] rounded-10"
        >
          دسته بندی
          <span class="flex items-center gap-2">مشتری</span>
        </li>
        <li class="p-2 flex justify-between items-center h-9">
          وضعیت مشتری
          <span
            class="border border-cgreen rounded-10 bg-[#96A8254D] text-cgreen px-1 py-0.5"
            >فعال</span
          >
        </li>
      </ul>
      <div class="grid grid-cols-2 gap-2 text-xs mt-2">
        <NuxtLink
          to="/admin/users/trade/123"
          class="flex justify-center items-center gap-2 rounded-10 border border-strokesec p-2"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.9082 0.75L6.90815 13.0662"
              stroke="#232323"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M13.0664 6.90808L0.750254 6.90803"
              stroke="#232323"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          معامله جدید
        </NuxtLink>
        <NuxtLink
          to="/"
          class="flex justify-center items-center gap-2 rounded-10 border border-strokesec p-2"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2354 1.22559C10.87 0.591427 11.8987 0.591191 12.5332 1.22559L14.2119 2.90527C14.8465 3.53988 14.8465 4.56852 14.2119 5.20312L5.51074 13.9053C5.24907 14.1668 4.90586 14.331 4.53809 14.3711L1.67383 14.6836C1.14448 14.7412 0.697337 14.294 0.754883 13.7646L1.06738 10.9004C1.10747 10.5326 1.27164 10.1894 1.5332 9.92773L10.2354 1.22559Z"
              stroke="#232323"
              stroke-width="1.5"
            />
            <path
              d="M10.2344 1.22559C10.8689 0.591363 11.8977 0.591256 12.5322 1.22559L14.2119 2.90527C14.8463 3.53978 14.8461 4.56855 14.2119 5.20312L12.8945 6.52051L8.91699 2.54297L10.2344 1.22559Z"
              stroke="#232323"
              stroke-width="1.5"
            />
          </svg>
          ویرایش
        </NuxtLink>
        <NuxtLink
          to="/"
          class="flex justify-center items-center gap-2 rounded-10 border border-strokesec p-2"
        >
          <svg
            width="15"
            height="4"
            viewBox="0 0 15 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 1.9375C0.75 1.28166 1.28166 0.75 1.9375 0.75C2.59334 0.75 3.125 1.28166 3.125 1.9375C3.125 2.59334 2.59334 3.125 1.9375 3.125C1.28166 3.125 0.75 2.59334 0.75 1.9375Z"
              stroke="#616161"
              stroke-width="1.5"
            />
            <path
              d="M6.29199 1.9375C6.29199 1.28166 6.82365 0.75 7.47949 0.75C8.13533 0.75 8.66699 1.28166 8.66699 1.9375C8.66699 2.59334 8.13533 3.125 7.47949 3.125C6.82365 3.125 6.29199 2.59334 6.29199 1.9375Z"
              stroke="#616161"
              stroke-width="1.5"
            />
            <path
              d="M11.834 1.9375C11.834 1.28166 12.3656 0.75 13.0215 0.75C13.6773 0.75 14.209 1.28166 14.209 1.9375C14.209 2.59334 13.6773 3.125 13.0215 3.125C12.3656 3.125 11.834 2.59334 11.834 1.9375Z"
              stroke="#616161"
              stroke-width="1.5"
            />
          </svg>
          بیشتر
        </NuxtLink>
        <NuxtLink
          to="/"
          class="flex justify-center items-center gap-2 rounded-10 border border-strokesec p-2"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.58144 9.22981L5.45223 10.1968C5.70695 10.2816 5.9453 10.4027 6.16025 10.5548C6.29839 10.6526 6.42687 10.7632 6.54383 10.8853C6.81116 11.1642 7.01829 11.5029 7.143 11.8847L8.11168 14.7505C8.93945 17.2295 12.4267 17.1768 13.2016 14.6978L16.4599 4.23659C16.7759 3.2026 16.4575 2.20353 15.8035 1.54196C15.1453 0.876138 14.1472 0.552161 13.1135 0.878467L2.61666 4.13111C0.150951 4.90471 0.115732 8.40347 2.58144 9.22981Z"
              stroke="#232323"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          ارسال پیامک
        </NuxtLink>
      </div>
    </div>
    <Dialog v-model:visible="deleteModal" modal header="حذف کاربر">
      <span class="text-surface-500 dark:text-surface-400 block mb-8"
        >آیا میخواهید این کاربر را حذف کنید؟</span
      >
      <div class="grid grid-cols-2 gap-2">
        <Button
          type="button"
          label="خیر"
          severity="secondary"
          @click="deleteModal = false"
        />
        <Button
          type="button"
          label="بله"
          :loading="loadingDelete"
          @click="deleteUserFunc"
        />
      </div>
    </Dialog>
    <Toast />
  </div>
  <!-- end -->
</template>

<script setup>
useHead({
  title: ''
})

let { userData } = userAuth()
let { showToast } = useToastComp()

let props = defineProps(['data'])
let emit = defineEmits(['success'])

let showMenu = ref(false)

let deleteModal = ref(false)
let loadingDelete = ref(false)

let loadingRole = ref(false)

async function deleteUserFunc () {
  try {
    loadingDelete.value = true

    let data = await $fetch('/api/admin/users/deleteUser', {
      method: 'POST',
      credentials: 'include',
      body: { id: props.data._id }
    })

    emit('success', 'کاربر با موفقیت حذف شد')
    deleteModal.value = false
  } catch (err) {
    showToast('error', 'خطا', err.msg)
  } finally {
    loadingDelete.value = false
  }
}

async function changeRule () {
  try {
    loadingRole.value = true

    let data = await $fetch('/api/admin/users/changeRole', {
      method: 'POST',
      credentials: 'include',
      body: { id: props.data._id }
    })

    emit('success', 'نقش کاربر با موفقیت عوض شد')
  } catch (err) {
    showToast('error', 'خطا', err.msg)
  } finally {
    loadingRole.value = false
  }
}
</script>
