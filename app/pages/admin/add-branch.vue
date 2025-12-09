<template>
  <div>
    <section class="p-3 rounded-t-lg bg-white min-h-full text-sm">
      <form @submit.prevent class="space-y-3">
        <div>
          <label class="block mb-1.5">دسته بندی را انتخاب کنید</label>
          <Select
            :options="branch"
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
          <label class="block mb-1.5">عنوان شعبه جدید</label>
          <input type="text" class="cinput" />
        </div>
        <div>
          <div class="flex justify-between items-center mb-1.5">
            <label class="block">آدرس دامنه :</label>
            <input type="checkbox" class="toggle-switch" v-model="showDomain" />
          </div>
          <input
            type="text"
            class="cinput"
            style="direction: ltr"
            placeholder="https://yourdomain.com"
            v-if="showDomain"
          />
        </div>
        <div>
          <div class="flex justify-between items-center mb-1.5">
            <label class="block">زیر دامنه :</label>
            <input
              type="checkbox"
              class="toggle-switch"
              v-model="showSubDomain"
            />
          </div>
          <input
            type="text"
            class="cinput"
            style="direction: ltr"
            placeholder="https://yourdomain.com"
            v-if="showSubDomain"
          />
        </div>
        <div>
          <label>امکان ویرایش مظنه ها</label>
          <div class="grid grid-cols-2 gap-3 mt-1.5">
            <div class="flex items-center gap-2 bg-[#F5F7FA] rounded-10 p-2.5">
              <input type="checkbox" class="checkbox-c" />
              غیرفعال
            </div>
            <div class="flex items-center gap-2 bg-[#F5F7FA] rounded-10 p-2.5">
              <input type="checkbox" class="checkbox-c" />
              دریافت از شعبه اصلی
            </div>
          </div>
        </div>
        <div>
          <label>مدیریت معامله ها ( تایید، رد کردن )</label>
          <div class="grid grid-cols-2 gap-3 mt-1.5">
            <div class="flex items-center gap-2 bg-[#F5F7FA] rounded-10 p-2.5">
              <input type="checkbox" class="checkbox-c" />
              توسط مدیریت شعبه
            </div>
            <div class="flex items-center gap-2 bg-[#F5F7FA] rounded-10 p-2.5">
              <input type="checkbox" class="checkbox-c" />
              تایید از شعبه اصلی
            </div>
          </div>
        </div>
        <div class="mt-6">
          <div class="flex justify-between items-center mb-1.5">
            <label class="block">تعیین سود شعبه (درصدی)</label>
            <input
              type="checkbox"
              class="toggle-switch"
              v-model="showProfitPercent"
            />
          </div>
          <div class="grid grid-cols-2 gap-3" v-if="showProfitPercent">
            <input type="text" class="cinput" placeholder="سود خرید" />
            <input type="text" class="cinput" placeholder="سود فروش" />
          </div>
        </div>
        <div>
          <div class="flex justify-between items-center mb-1.5">
            <label class="block">تعیین سود شعبه (قیمتی)</label>
            <input
              type="checkbox"
              class="toggle-switch"
              v-model="showProfitPrice"
            />
          </div>
          <div class="grid grid-cols-2 gap-3" v-if="showProfitPrice">
            <input type="text" class="cinput" placeholder="سود خرید" />
            <input type="text" class="cinput" placeholder="سود فروش" />
          </div>
        </div>
        <Button
          label="ایجاد شعبه"
          pt:root="w-full !bg-[#83BCFF] !border-none"
        />
      </form>
      <Toast />
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'افزودن شعبه جدید |'
})

definePageMeta({
  title: 'افزودن شعبه جدید'
})

let { showToast } = useToastComp()

let branch = ['test', 'test 2', 'test 3']

let showDomain = ref(false)
let showSubDomain = ref(false)

let showProfitPercent = ref(false)
let showProfitPrice = ref(false)

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
