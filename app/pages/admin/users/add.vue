<template>
  <TitleSection title="افزودن کاربر" />
  <section class="p-3 rounded-t-lg bg-white min-h-full">
    <form @submit.prevent>
      <Select
        v-model="data.Accounttype"
        :options="types"
        placeholder="نوع حساب"
        class="w-full"
        pt:root="!border-none !shadow-none !bg-[#F5F7FA] !rounded-10 !mb-3"
      />
      <Select
        v-model="data.Accountgroup"
        :options="group"
        placeholder="گروه حساب"
        class="w-full"
        pt:root="!border-none !shadow-none !bg-[#F5F7FA] !rounded-10 !mb-3"
      />
      <input
        type="text"
        placeholder="نام"
        v-model="data.fname"
        class="bg-[#F5F7FA] rounded-10 w-full block py-2 px-3 mb-3"
      />
      <input
        type="text"
        placeholder="نام خانوادگی"
        v-model="data.lname"
        class="bg-[#F5F7FA] rounded-10 w-full block py-2 px-3 mb-3"
      />
      <input
        type="text"
        inputmode="numeric"
        placeholder="شماره موبایل"
        v-model="data.phone"
        @input="data.phone = data.phone.replace(/[^0-9]/g, '')"
        class="bg-[#F5F7FA] rounded-10 w-full block py-2 px-3 mb-3"
      />
      <input
        type="text"
        inputmode="numeric"
        placeholder="کد ملی"
        v-model="data.nationalityid"
        @input="data.nationalityid = data.nationalityid.replace(/[^0-9]/g, '')"
        class="bg-[#F5F7FA] rounded-10 w-full block py-2 px-3 mb-3"
      />
      <input
        type="text"
        placeholder="نام کاربری"
        v-model="data.username"
        class="bg-[#F5F7FA] rounded-10 w-full block py-2 px-3 mb-6"
      />
      <Button
        label="افزودن"
        @click="addUserFunc"
        pt:root="!w-full !rounded-10"
        :loading="loading"
      />
    </form>
    <Toast />
  </section>
</template>

<script setup>
let { showToast } = useToastComp()

let types = ['مشتری', 'ادمین', 'اپراتور', 'حسابدار']
let group = ['همکار', 'کاربر جدید', 'نماینده فروش']

let data = reactive({
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
