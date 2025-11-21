<template>
  <TitleSection title="مدیریت کاربر">
    <template #left-btn>
      <Button
        label="ذخیره"
        pt:root="!bg-[#B4DB8C] !border-none !rounded-10"
        :loading="loading"
        @click="editUserFunc"
      >
        <template #icon>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.25 7.25C1.25 3.93629 3.93629 1.25 7.25 1.25H16.75C20.0637 1.25 22.75 3.93629 22.75 7.25V16.75C22.75 20.0637 20.0637 22.75 16.75 22.75H7.25C3.93629 22.75 1.25 20.0637 1.25 16.75V7.25Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.0183 8.17565C18.2525 8.40985 18.2525 8.78956 18.0183 9.02376L11.6861 15.3559C10.8274 16.2147 9.43512 16.2147 8.57639 15.356L5.9757 12.7553C5.7415 12.5211 5.7415 12.1414 5.9757 11.9072C6.2099 11.673 6.58961 11.673 6.82381 11.9072L9.4245 14.5078C9.81483 14.8982 10.4477 14.8982 10.838 14.5078L17.1702 8.17565C17.4044 7.94145 17.7841 7.94145 18.0183 8.17565Z"
              fill="#282F00"
            />
          </svg>
        </template>
      </Button>
    </template>
  </TitleSection>
  <main class="space-y-3 bg-white p-3 rounded-lg text-center">
    <input
      type="text"
      v-model="data.fname"
      class="w-full h-11 bg-gray-100 rounded-xl px-4 text-sm text-gray-800 text-right focus:outline-none"
    />
    <input
      type="text"
      v-model="data.lname"
      class="w-full h-11 bg-gray-100 rounded-xl px-4 text-sm text-gray-800 text-right focus:outline-none"
    />

    <input
      type="text"
      value="۹۵۵۳"
      class="w-full h-11 bg-gray-100 rounded-xl px-4 text-sm text-gray-800 text-right focus:outline-none"
    />

    <input
      type="text"
      v-model="data.phone"
      class="w-full h-11 bg-gray-100 rounded-xl px-4 text-sm text-gray-800 text-right focus:outline-none"
    />
    <div
      class="rounded-xl bg-[#1E1E1E] text-white flex items-center justify-between p-3 cursor-pointer select-none"
      @click="moreData = !moreData"
    >
      <span class="text-sm">اطلاعات بیشتر</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="transition"
        :class="{ 'rotate-180': moreData }"
      >
        <path
          d="M7.25 1.25C3.93629 1.25 1.25 3.93629 1.25 7.25L1.25 16.75C1.25 20.0637 3.93629 22.75 7.25 22.75L16.75 22.75C20.0637 22.75 22.75 20.0637 22.75 16.75L22.75 7.25C22.75 3.93629 20.0637 1.25 16.75 1.25L7.25 1.25Z"
          fill="#BFBFBF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.7 13.7262C12.3197 14.1277 11.6803 14.1277 11.3 13.7262L6.54447 8.70654C6.25959 8.40584 5.78489 8.39301 5.48419 8.67788C5.18349 8.96275 5.17066 9.43745 5.45554 9.73815L10.211 14.7579C11.183 15.7838 12.817 15.7838 13.789 14.7579L18.5445 9.73815C18.8293 9.43745 18.8165 8.96275 18.5158 8.67788C18.2151 8.39301 17.7404 8.40584 17.4555 8.70654L12.7 13.7262Z"
          fill="black"
        />
      </svg>
    </div>

    <div v-if="moreData" class="space-y-3">
      <input
        type="text"
        v-model="data.phone"
        class="w-full h-11 bg-gray-100 rounded-xl px-4 text-sm text-gray-800 text-right focus:outline-none"
      />

      <input
        type="text"
        value="۴"
        class="w-full h-11 bg-gray-100 rounded-xl px-4 text-sm text-gray-800 text-right focus:outline-none"
      />

      <input
        type="text"
        value="۱۳۳۶۵۴۸۵۸۵"
        class="w-full h-11 bg-gray-100 rounded-xl px-4 text-sm text-gray-800 text-right focus:outline-none"
      />

      <div class="flex items-center gap-2">
        <Select
          v-model="data.Accountgroup"
          :options="groups"
          pt:root="!w-full !bg-gray-100 !text-gray-800 !rounded-xl !shadow-none !border-none"
          pt:label="!text-right !text-sm  !h-11 !flex !items-center"
          pt:overlay="!text-sm"
        />
        <button
          class="w-11 h-11 bg-[#B4DB8C] rounded-xl flex items-center justify-center"
        >
          <span
            class="w-6 h-6 bg-white rounded-md flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </span>
        </button>
      </div>
      <Select
        v-model="data.Accounttype"
        :options="types"
        pt:root="!w-full !bg-gray-100 !text-gray-800 !rounded-xl !shadow-none !border-none"
        pt:label="!text-right !text-sm  !h-11 !flex !items-center"
        pt:overlay="!text-sm"
      />
    </div>
    <div class="flex items-center justify-between">
      <span class="text-sm text-gray-800">مجوز معامله</span>
      <input
        type="checkbox"
        checked="checked"
        class="toggle border-[#BFBFBF] bg-[#BFBFBF] checked:border-[#96A825] checked:bg-[#96A825] text-white"
        v-model="data.canTrade"
      />
    </div>
    <div class="flex items-center justify-between">
      <span class="text-sm text-gray-800">مجوز نمایش مانده و ریز حساب</span>
      <input
        type="checkbox"
        checked="checked"
        class="toggle border-[#BFBFBF] bg-[#BFBFBF] checked:border-[#96A825] checked:bg-[#96A825] text-white"
        v-model="data.canViewBalance"
      />
    </div>
    <button class="w-full h-11 rounded-xl bg-rose-300 text-sm">
      حذف تمامی دستگاه ها
    </button>
    <button class="w-full h-11 rounded-xl bg-[#B4DB8C] text-sm">
      ایجاد مجوز ورود به سیستم
    </button>
    <!-- item -->

    <div
      class="rounded-xl bg-[#1E1E1E] text-white flex items-center justify-between p-3 cursor-pointer mb-0 text-sm"
      @click="showItems = !showItems"
    >
      لیست آیتم های مجاز مشتری
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="transition"
        :class="{ 'rotate-180': showItems }"
      >
        <path
          d="M7.25 1.25C3.93629 1.25 1.25 3.93629 1.25 7.25L1.25 16.75C1.25 20.0637 3.93629 22.75 7.25 22.75L16.75 22.75C20.0637 22.75 22.75 20.0637 22.75 16.75L22.75 7.25C22.75 3.93629 20.0637 1.25 16.75 1.25L7.25 1.25Z"
          fill="#BFBFBF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.7 13.7262C12.3197 14.1277 11.6803 14.1277 11.3 13.7262L6.54447 8.70654C6.25959 8.40584 5.78489 8.39301 5.48419 8.67788C5.18349 8.96275 5.17066 9.43745 5.45554 9.73815L10.211 14.7579C11.183 15.7838 12.817 15.7838 13.789 14.7579L18.5445 9.73815C18.8293 9.43745 18.8165 8.96275 18.5158 8.67788C18.2151 8.39301 17.7404 8.40584 17.4555 8.70654L12.7 13.7262Z"
          fill="black"
        />
      </svg>
    </div>
    <div v-if="showItems" class="mt-2">
      <p class="text-center text-sm text-gray-700 mb-2">
        لیست آیتم های مجاز مشتری
      </p>
      <div class="flex items-center gap-3">
        <div class="relative flex-1">
          <input
            type="text"
            placeholder="کد حسابداری تمامی آیتم ها"
            class="w-full h-11 bg-gray-100 rounded-xl pr-4 pl-10 text-sm text-gray-800 text-right focus:outline-none"
          />
          <span
            class="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-gray-200 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h10.5"
              />
            </svg>
          </span>
        </div>
        <button
          class="inline-flex items-center gap-2 bg-[#B4DB8C] text-slate-800 rounded-xl px-4 h-11"
        >
          <span class="text-sm">ثبت و ذخیره</span>
          <span
            class="w-6 h-6 rounded-md bg-white/80 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-slate-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </span>
        </button>
      </div>
      <div class="grid grid-cols-2 gap-2 bg-white p-2 pb-0 rounded-lg">
        <div
          class="bg-gray-100 flex gap-2 items-center rounded-xl px-3 py-3 cursor-pointer"
          v-for="item in wallet"
          :key="item._id"
          @click="addItemFunc(item)"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-if="item.itemType == 'gold'"
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
          <span class="text-sm text-gray-700">{{ item.item }}</span>
        </div>
      </div>
    </div>

    <div class="space-y-4">
      <AdminUsersEditItemWallet
        v-for="(item, index) in items"
        :key="item._id"
        :data="item"
        @close="items.splice(index, 1)"
      />
    </div>
    <Toast />
  </main>
</template>

<script setup>
let { showToast } = useToastComp()
let route = useRoute()

let moreData = ref(false)
let showItems = ref(false)

let groups = ['همکار', 'کاربر جدید', 'نماینده فروش']
let types = ['مشتری', 'ادمین', 'اپراتور', 'حسابدار']

let { data } = await useFetch('/api/admin/users/getEditUser', {
  credentials: 'include',
  method: 'POST',
  body: { id: route.params.id }
})

let { data: wallet } = await useFetch('/api/admin/wallet/getWallet', {
  credentials: 'include',
  method: 'POST',
  body: { id: route.params.id }
})

let loading = ref(false)

let items = ref([])

function addItemFunc (item) {
  let hasItem = items.value.some(itemWallet => itemWallet._id == item._id)
  if (!hasItem) items.value.push(item)
}

async function editUserFunc () {
  try {
    loading.value = true

    let result = await $fetch('/api/admin/users/editUser', {
      credentials: 'include',
      method: 'POST',
      body: { id: data.value._id, ...data.value }
    })

    showToast('کاربر با موفقیت ویرایش شد')
  } catch (err) {
    showToast('error', 'خطا', err.messsage)
    console.log(err)
  } finally {
    loading.value = false
  }
}
</script>
