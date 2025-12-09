<template>
  <div>
    <section class="p-3 rounded-t-lg bg-white min-h-full text-sm">
      <form @submit.prevent class="space-y-3">
        <div>
          <label class="block mb-1.5">نام و نام خانوادگی</label>
          <input
            type="text"
            class="border border-strokesec rounded-10 p-2 w-full"
          />
        </div>
        <div>
          <label class="block mb-1.5">شماره موبایل</label>
          <input
            type="number"
            class="border border-strokesec rounded-10 p-2 w-full"
          />
        </div>
        <div>
          <label class="block mb-1.5">کد حسابداری</label>
          <input
            type="text"
            class="border border-strokesec rounded-10 p-2 w-full"
          />
        </div>
        <div>
          <label class="block mb-1.5">کد ملی</label>
          <input
            type="number"
            class="border border-strokesec rounded-10 p-2 w-full"
          />
        </div>
        <div>
          <label class="block mb-1.5">دسته بندی را انتخاب کنید</label>
          <Select
            v-model="form"
            :options="categories"
            pt:root="w-full !rounded-10 !bg-white !shadow-none !border-[#00000026] !mt-1.5"
            pt:label="!text-graydark !text-sm"
          >
            <template #dropdownicon>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.75066 3.12354e-06C3.91816 2.91231e-06 0.000654883 3.91751 0.000654672 8.75L0.000654066 22.6042C0.000653855 27.4367 3.91816 31.3542 8.75065 31.3542L22.6048 31.3542C27.4373 31.3542 31.3548 27.4367 31.3548 22.6042L31.3548 8.75C31.3548 3.91751 27.4373 3.94036e-06 22.6048 3.72913e-06L8.75066 3.12354e-06Z"
                  fill="#DDDDDD"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.6993 18.1948C16.1446 18.7803 15.2122 18.7803 14.6575 18.1948L7.7224 10.8744C7.30696 10.4359 6.61469 10.4172 6.17617 10.8326C5.73765 11.248 5.71894 11.9403 6.13438 12.3788L13.0695 19.6992C14.487 21.1955 16.8698 21.1955 18.2873 19.6992L25.2224 12.3788C25.6378 11.9403 25.6191 11.248 25.1806 10.8326C24.7421 10.4172 24.0498 10.4359 23.6344 10.8744L16.6993 18.1948Z"
                  fill="#616161"
                />
              </svg>
            </template>
          </Select>
        </div>
        <div>
          <label class="block mb-1.5">تعداد ورود های همزمان</label>
          <Select
            v-model="form"
            :options="loginsCount"
            pt:root="w-full !rounded-10 !bg-white !shadow-none !border-[#00000026] !mt-1.5"
            pt:label="!text-graydark !text-sm"
          >
            <template #dropdownicon>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.75066 3.12354e-06C3.91816 2.91231e-06 0.000654883 3.91751 0.000654672 8.75L0.000654066 22.6042C0.000653855 27.4367 3.91816 31.3542 8.75065 31.3542L22.6048 31.3542C27.4373 31.3542 31.3548 27.4367 31.3548 22.6042L31.3548 8.75C31.3548 3.91751 27.4373 3.94036e-06 22.6048 3.72913e-06L8.75066 3.12354e-06Z"
                  fill="#DDDDDD"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.6993 18.1948C16.1446 18.7803 15.2122 18.7803 14.6575 18.1948L7.7224 10.8744C7.30696 10.4359 6.61469 10.4172 6.17617 10.8326C5.73765 11.248 5.71894 11.9403 6.13438 12.3788L13.0695 19.6992C14.487 21.1955 16.8698 21.1955 18.2873 19.6992L25.2224 12.3788C25.6378 11.9403 25.6191 11.248 25.1806 10.8326C24.7421 10.4172 24.0498 10.4359 23.6344 10.8744L16.6993 18.1948Z"
                  fill="#616161"
                />
              </svg>
            </template>
          </Select>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div
            class="bg-[#F6F6F6] p-2 rounded-10 flex justify-between items-center"
          >
            مشاهده مانده حساب
            <input type="checkbox" class="toggle-switch" />
          </div>
          <div
            class="bg-[#F6F6F6] p-2 rounded-10 flex justify-between items-center"
          >
            مشاهده گردش حساب
            <input type="checkbox" class="toggle-switch" />
          </div>
          <div
            class="bg-[#F6F6F6] p-2 rounded-10 flex justify-between items-center col-span-2"
          >
            وضعیت مشتری (فعال / غیرفعال)
            <input type="checkbox" class="toggle-switch" />
          </div>
          <div class="bg-[#F6F6F6] p-2 rounded-10 col-span-2">
            <div class="flex justify-between items-center">
              ورود با رمز عبور
              <input type="checkbox" class="toggle-switch" />
            </div>
            <div class="flex items-center gap-2 mt-2">
              <input
                type="text"
                class="bg-white rounded-10 p-1 border border-strokesec w-3/5 text-center"
              />
              <button
                class="border border-[#3B95FF] rounded-10 p-1 text-[#2F79CF] flex justify-center items-center gap-2 flex-grow"
              >
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8892 12.0833C13.4233 12.0833 14.667 10.8148 14.667 9.25V3.58333C14.667 2.01853 13.4233 0.75 11.8892 0.75H7.44477C5.91065 0.75 4.66699 2.01853 4.66699 3.58333"
                    stroke="#2F79CF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1.33301 6.91666C1.33301 5.35185 2.57666 4.08333 4.11079 4.08333H8.55523C10.0894 4.08333 11.333 5.35185 11.333 6.91666V12.5833C11.333 14.1481 10.0894 15.4167 8.55523 15.4167H4.11079C2.57666 15.4167 1.33301 14.1481 1.33301 12.5833V6.91666Z"
                    stroke="#2F79CF"
                    stroke-width="1.5"
                  />
                </svg>
                کپی کردن
              </button>
            </div>
          </div>
        </div>
        <p class="flex items-center gap-2">
          <input type="checkbox" checked="checked" class="checkbox" />
          ارسال اطلاعات ورود از طریق پیامک به مشتری
        </p>
        <Button label="افزودن" pt:root="w-full !bg-[#83BCFF] !border-none" />
      </form>
      <Toast />
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'افزودن مشتری جدید |'
})

definePageMeta({
  title: 'افزودن مشتری جدید'
})

let { showToast } = useToastComp()

let categories = ['مشتری', 'ادمین', 'اپراتور', 'حسابدار']
let loginsCount = ['یک دستگاه', 'دو دستگاه', 'سه دستگاه']

let form = reactive({
  fname: '',
  lname: '',
  username: '',
  phone: '',
  nationalityid: '',
  Accounttype: '',
  Accountgroup: ''
})

let loading = ref(false)

async function addUserFunc () {
  try {
    loading.value = true

    let result = await $fetch('/api/admin/users/addUser', {
      credentials: 'include',
      method: 'POST',
      body: data
    })

    showToast(result.message)

    data.fname = ''
    data.lname = ''
    data.username = ''
    data.phone = ''
    data.nationalityid = ''
    data.Accounttype = ''
    data.Accountgroup = ''
  } catch (err) {
    showToast('error', 'خطا', err.messsage)
    console.log(err)
  } finally {
    loading.value = false
  }
}
</script>
