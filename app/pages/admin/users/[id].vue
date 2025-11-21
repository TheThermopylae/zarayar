<template>
  <TitleSection title="ویرایش کاربر" />
  <form @submit.prevent class="bg-white p-3 rounded-10 text-sm">
    <div class="grid grid-cols-2 items-center mb-2">
      <label for="fname">نام:</label>
      <input
        type="text"
        v-model="data.fname"
        id="fname"
        class="bg-gray-100 p-2 rounded-10"
      />
    </div>
    <div class="grid grid-cols-2 items-center mb-2">
      <label for="lname">نام خانوادگی:</label>
      <input
        type="text"
        v-model="data.lname"
        id="lname"
        class="bg-gray-100 p-2 rounded-10"
      />
    </div>
    <div class="grid grid-cols-2 items-center mb-2">
      <label for="phone"> شماره موبایل:</label>
      <input
        id="phone"
        type="text"
        inputmode="numeric"
        v-model="data.phone"
        class="bg-gray-100 p-2 rounded-10"
      />
    </div>
    <div class="grid grid-cols-2 items-center mb-2">
      <label for="code-meli"> کد ملی:</label>
      <input
        id="code-meli"
        type="text"
        inputmode="numeric"
        v-model="data.nationalityid"
        @input="data.nationalityid = data.nationalityid.replace(/[^0-9]/g, '')"
        class="bg-gray-100 p-2 rounded-10"
      />
    </div>
    <div class="grid grid-cols-2 items-center mb-2">
      <label for="code-meli">نوع حساب:</label>
      <Select
        v-model="data.Accounttype"
        :options="types"
        placeholder="نوع حساب"
        pt:root="!border-none !shadow-none !bg-gray-100 !rounded-10"
        pt:label="!text-sm"
      />
    </div>
    <div class="grid grid-cols-2 items-center mb-2">
      <label for="code-meli"> وضعیت حساب:</label>
      <Select
        v-model="data.Accountgroup"
        :options="group"
        placeholder="گروه حساب"
        pt:root="!border-none !shadow-none !bg-gray-100 !rounded-10"
        pt:label="!text-sm"
      />
    </div>
    <div class="grid grid-cols-2 items-center mb-4">
      <label for="code-meli"> وضعیت بن:</label>
      <Button
        @click="banUserFunc"
        label="بن"
        pr:root="!place-content-end"
        :loading="banLoading"
        v-if="!banInfo.alreadyBanned"
      />
      <Button
        @click="unbanUserFunc"
        label="رفع بن"
        pr:root="!place-content-end"
        :loading="banLoading"
        v-else
      />
    </div>
    <Button
      label="ویرایش کاربر"
      @click="editUserFunc"
      pt:root="!w-full !rounded-10 !text-sm"
      :loading="loading"
    />
  </form>
</template>

<script setup>
useHead({
  title: 'ویرایش کاربر |'
})

let { showToast } = useToastComp()

let types = ['مشتری', 'ادمین', 'اپراتور', 'حسابدار']
let group = ['همکار', 'کاربر جدید', 'نماینده فروش']

let route = useRoute()

let { data } = await useFetch('/api/admin/users/getEditUser', {
  credential: 'include',
  method: 'POST',
  body: { id: route.params.id }
})

let { data: banInfo, refresh } = await useFetch('/api/admin/ban/banInfo', {
  credential: 'include',
  method: 'POST',
  body: { id: route.params.id }
})

let { data: verification } = await useFetch('/api/admin/auth/verification', {
  credential: 'include',
  method: 'POST',
  body: { id: route.params.id }
})

console.log(verification.value)

let loading = ref(false)
let banLoading = ref(false)

async function editUserFunc () {
  try {
    loading.value = true

    let result = await $fetch('/api/admin/users/editUser', {
      credentials: 'include',
      method: 'POST',
      body: { id: data.value._id, ...data.value }
    })

    showToast(result.message)
  } catch (err) {
    showToast('error', 'خطا', err.messsage)
    console.log(err)
  } finally {
    loading.value = false
  }
}

async function banUserFunc () {
  try {
    banLoading.value = true

    let result = await $fetch('/api/admin/ban/banUser', {
      credentials: 'include',
      method: 'POST',
      body: {
        id: data.value._id,
        duration: 7,
        permanent: false,
        text: 'نقض قوانین'
      }
    })

    showToast(result.message)
    refresh()
  } catch (err) {
    showToast('error', 'خطا', err.messsage)
    console.log(err)
  } finally {
    banLoading.value = false
  }
}

async function unbanUserFunc () {
  console.log(banInfo.value)

  try {
    loading.value = true

    let result = await $fetch('/api/admin/ban/unbanUser', {
      credentials: 'include',
      method: 'POST',
      body: { id: banInfo.value._id }
    })

    showToast(result.message)
    refresh()
  } catch (err) {
    showToast('error', 'خطا', err.messsage)
    console.log(err)
  } finally {
    loading.value = false
  }
}
</script>
