<template>
  <div>
    <section class="p-3 rounded-t-lg bg-white min-h-full text-sm">
      <form @submit.prevent class="space-y-3">
        <div>
          <label class="block mb-1.5">نام</label>
          <input type="text" class="cinput" v-model="data.fname" />
        </div>
        <div>
          <label class="block mb-1.5">نام خانوادگی</label>
          <input type="text" class="cinput" v-model="data.lname" />
        </div>

        <div>
          <label class="block mb-1.5">شماره موبایل</label>
          <input
            type="number"
            inputmode="numeric"
            class="cinput"
            v-model="data.phone"
          />
        </div>
        <div>
          <label class="block mb-1.5">کد ملی</label>
          <input
            type="number"
            inputmode="numeric"
            class="cinput"
            v-model="data.nationalityid"
          />
        </div>
        <div>
          <label class="block mb-1.5">دسته بندی را انتخاب کنید</label>
          <Select
            v-model="data.Accountgroup"
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
          <label class="block mb-1.5">نوع حساب را انتخاب کنید</label>
          <Select
            v-model="data.Accounttype"
            :options="accountTypes"
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
          <label class="block mb-1.5">نقش کاربر را انتخاب کنید</label>
          <Select
            v-model="data.role"
            :options="roles"
            optionLabel="fa"
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
          <label class="block mb-1.5">رمز عبور</label>
          <input type="text" class="cinput" v-model="data.password" />
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div
            class="bg-[#F6F6F6] p-2 rounded-10 flex justify-between items-center"
          >
            مشاهده مانده حساب
            <input
              type="checkbox"
              class="toggle-switch"
              v-model="data.canViewBalance"
            />
          </div>
          <div
            class="bg-[#F6F6F6] p-2 rounded-10 flex justify-between items-center"
          >
            مشاهده تاریخچه معاملات
            <input
              type="checkbox"
              class="toggle-switch"
              v-model="data.transactionHistory"
            />
          </div>
        </div>
        <p class="flex items-center gap-2">
          <input type="checkbox" checked="checked" class="checkbox" />
          ارسال اطلاعات ورود از طریق پیامک به مشتری
        </p>
        <Button
          label="افزودن"
          pt:root="w-full !bg-[#83BCFF] !border-none"
          @click="addUserFunc"
          :loading="loading"
        />
      </form>
      <Toast />
    </section>
  </div>
</template>

<script setup>
let route = useRoute()

let { showToast } = useToastComp()

let categories = ['مشتری', 'ادمین', 'اپراتور', 'حسابدار']
let accountTypes = ref(['مشتری', 'ادمین'])
let roles = ref([
  { fa: 'کاربر عادی', en: 'USER' },
  { fa: 'ادمین', en: 'ADMIN' }
])

let { data } = await useFetch('/api/admin/users/getEditUser', {
  credential: 'include',
  method: 'POST',
  body: { id: route.params.id }
})

let loading = ref(false)

async function addUserFunc () {
  if (
    !data.value.fname ||
    !data.value.lname ||
    !data.value.nationalityid ||
    !data.value.Accounttype ||
    !data.value.Accountgroup ||
    !data.value.role ||
    !data.value.password
  ) {
    showToast('warn', 'اخطار', 'باید تمامی فیلد ها را پر کنید')
  } else {
    try {
      loading.value = true

      let result = await $fetch('/api/admin/users/editUser', {
        credentials: 'include',
        method: 'POST',
        body: { ...data.value, role: data.value.role.en }
      })

      showToast(result.msg)
    } catch (err) {
      showToast('error', 'خطا', err.messsage)
      console.log(err)
    } finally {
      loading.value = false
    }
  }
}

useHead({
  title: `${
    data.value.fname && data.value.lname
      ? data.value.fname + ' ' + data.value.lname
      : 'ویرایش کاربر'
  } |`
})

definePageMeta({
  title: 'ویرایش کاربر'
})
</script>
