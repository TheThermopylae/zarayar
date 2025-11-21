<template>
  <!-- start -->
  <div
    class="text-center bg-white rounded-xl p-3 border border-gray-100"
    :class="{ '!border-primary': userData._id == props.data._id }"
  >
    <div class="flex justify-between">
      <div class="flex gap-3 items-center">
        <svg
          v-if="props.data.role == 'USER'"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          v-else
        >
          <path
            fill="currentColor"
            d="M12 23C6.443 21.765 2 16.522 2 11V5l10-4l10 4v6c0 5.524-4.443 10.765-10 12M4 6v5a10.58 10.58 0 0 0 8 10a10.58 10.58 0 0 0 8-10V6l-8-3Z"
          />
          <circle cx="12" cy="8.5" r="2.5" fill="currentColor" />
          <path
            fill="currentColor"
            d="M7 15a5.78 5.78 0 0 0 5 3a5.78 5.78 0 0 0 5-3c-.025-1.896-3.342-3-5-3c-1.667 0-4.975 1.104-5 3"
          />
        </svg>
        <div class="text-right">
          <h2 class="text-lg">{{ props.data.phone }}</h2>
          <p class="text-gray-400">
            9812
            <span
              v-text="props.data.role == 'ADMIN' ? '(ادمین)' : '(کاربر)'"
            ></span>
          </p>
        </div>
      </div>
      <div
        class="flex items-center justify-between gap-3"
        v-if="userData._id != props.data._id"
      >
        <label class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" class="sr-only peer acctSwitch" checked />
          <div
            class="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-[#7AB73E] transition-colors"
          ></div>
          <span
            class="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow peer-checked:translate-x-5 transition-transform"
          ></span>
        </label>
        <button class="submenu" @click="showMenu = !showMenu">
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
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="flex justify-between flex-wrap gap-2 mt-5" v-if="showMenu">
      <div class="flex justify-between gap-3">
        <div class="bg-gray-200 p-3 rounded-lg">
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
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
        </div>
        <div class="bg-gray-200 p-3 rounded-lg">
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <NuxtLink :to="`/admin/users/auth/${props.data._id}`" class="bg-gray-200 p-3 rounded-lg">
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
                d="M21.25 8.814V6.758a3.083 3.083 0 0 0-3.083-3.083h-3.084m0 18.5h3.084a3.083 3.083 0 0 0 3.083-3.083v-2.056m-18.5 0v2.056a3.083 3.083 0 0 0 3.083 3.083h3.084m0-18.5H5.833A3.083 3.083 0 0 0 2.75 6.758v2.056"
              />
              <path
                d="M18.177 22.175c0-2.92-3.256-5.294-6.177-5.294s-6.176 2.373-6.176 5.294M12 14.234a3.53 3.53 0 1 0 0-7.06a3.53 3.53 0 0 0 0 7.06"
              />
            </g>
          </svg>
        </NuxtLink>
      </div>
      <div class="flex justify-between gap-3">
        <div
          class="bg-gray-200 p-3 rounded-lg size-12 flex-center cursor-pointer"
          @click="changeRule"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            class="flex-shrink-0"
            v-if="!loadingRole"
          >
            <path
              fill="currentColor"
              d="m12.07 18.577l2.407-2.402l-2.408-2.402l-.627.627l1.383 1.383q-1.161.006-2.064-.273q-.903-.28-1.447-.824q-.558-.557-.84-1.265t-.282-1.415q0-.425.094-.85t.274-.806l-.677-.6q-.29.529-.433 1.096T7.308 12q0 .891.346 1.759t1.023 1.555t1.779 1.02t2.263.339l-1.277 1.277zm4.067-4.327q.29-.529.432-1.096T16.712 12q0-.888-.344-1.765t-1.03-1.554q-.667-.687-1.775-1.017q-1.109-.331-2.263-.331l1.277-1.283l-.627-.627l-2.408 2.402l2.408 2.402l.627-.627l-1.388-1.388q1.155 0 2.067.281t1.455.828t.83 1.255t.286 1.418q0 .425-.093.85t-.274.806zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
          <span v-else>...</span>
        </div>
        <NuxtLink
          :to="`/admin/users/${props.data._id}`"
          class="bg-gray-200 p-3 rounded-lg"
        >
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
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </NuxtLink>
        <!-- trash -->
        <button class="bg-gray-200 p-3 rounded-lg" @click="deleteModal = true">
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
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
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
