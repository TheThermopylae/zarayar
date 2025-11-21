<template>
  <div class="p-3 bg-white rounded-10 select-none">
    <div
      class="flex justify-between items-center text-sm cursor-pointer"
      @click="isOpen = !isOpen"
    >
      <div class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-gray-600 ml-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        {{ props.data.name }}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        class="transition"
        :class="{ 'rotate-180': isOpen }"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M12 4v16m0 0l6-6m-6 6l-6-6"
        />
      </svg>
    </div>
    <div class="mt-2" v-if="isOpen">
      <input
        type="text"
        placeholder="نام API"
        class="w-full bg-gray-100 rounded-xl py-2 px-3 text-sm text-gray-700 focus:outline-none mb-2"
        v-model="settingName"
      />
      <input
        type="text"
        placeholder="کلید API"
        class="w-full bg-gray-100 rounded-xl py-2 px-3 text-sm text-gray-700 focus:outline-none mb-2"
        v-model="props.data.apiKey"
      />
      <input
        type="text"
        placeholder="آی‌پی سرور"
        class="w-full bg-gray-100 rounded-xl py-2 px-3 text-sm text-gray-700 focus:outline-none mb-2"
        v-model="props.data.ip"
      />
      <input
        type="text"
        placeholder="آیدی سرویس"
        class="w-full bg-gray-100 rounded-xl py-2 px-3 text-sm text-gray-700 focus:outline-none mb-2"
        v-model="props.data.currencyId"
      />
      <div class="grid grid-cols-2 gap-2">
        <Button
          class="w-full !bg-red-500 !border-none !text-sm"
          label="حذف"
          @click="visible = true"
        />
        <Button
          class="w-full !bg-[#6CB4F5] !border-none !text-sm"
          label="ویرایش"
          @click="editSetting"
          :loading="editLoading"
        />
      </div>
    </div>
    <Dialog
      v-model:visible="visible"
      modal
      header="حذف ای پی آی"
      :style="{ width: '25rem' }"
    >
      <span class="text-surface-500 dark:text-surface-400 block mb-8"
        >آیا میخواهید این ای پی آی را حذف کنید؟</span
      >

      <div class="grid grid-cols-2 gap-2">
        <Button
          type="button"
          label="خیر"
          severity="secondary"
          @click="visible = false"
        ></Button>
        <Button
          class="!border-none !bg-[#6CB4F5]"
          type="button"
          label="بله"
          @click="removeSetting"
          :loading="removeLoading"
        ></Button>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
let props = defineProps(['data'])
let emit = defineEmits(['success', 'error'])

let settingName = ref(props.data.name)

let isOpen = ref(false)
let visible = ref(false)

let editLoading = ref(false)
let removeLoading = ref(false)

async function editSetting () {
  editLoading.value = true

  try {
    let data = await $fetch('/api/admin/settingsApi/editSettings', {
      credentials: 'include',
      method: 'POST',
      body: { ...props.data, id: props.data._id, name: settingName.value }
    })

    emit('success', 'تنظیمات با موفقیت ویرایش شد')
  } catch (err) {
    emit('error', err.message)
  } finally {
    editLoading.value = false
  }
}

async function removeSetting () {
  removeLoading.value = true

  try {
    let data = await $fetch('/api/admin/settingsApi/removeSettings', {
      credentials: 'include',
      method: 'POST',
      body: { id: props.data._id }
    })

    emit('success', 'تنظیمات با موفقیت حذف شد')
  } catch (err) {
    emit('error', err.message)
  } finally {
    removeLoading.value = false
  }
}
</script>
