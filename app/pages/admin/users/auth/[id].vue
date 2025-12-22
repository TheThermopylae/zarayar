<template>
  <main class="bg-white rounded-2xl p-5 space-y-3">
    <NuxtLink
      v-if="verify.verified == 'pending'"
      :to="`/admin/users/auth/send-pics/${route.params.id}`"
      class="block m-auto mb-3 bg-green-100 text-green-500 px-3 py-1 rounded border border-green-500 w-fit"
      >آپلود مدارک</NuxtLink
    >
    <div class="grid grid-cols-2 items-center">
      <label>وضعیت احراز:</label>
      <Select
        v-model="data.status"
        :options="authStatus"
        pt:root="w-full !bg-gray-100 !border-none !rounded-md"
      />
    </div>
    <div
      class="gid grid-cols-2 items-center"
      v-if="Object.keys(verify.documents).length > 0"
    >
      <label>تصاویر مدارک:</label>
      <div class="grid grid-cols-4 mt-3 gap-3">
        <Image
          :src="`${config.public.API_BASE_URL}${verify.documents.birthcertificate}`"
          alt="birthcertificate img"
          pt:image="!rounded-10 !aspect-square"
          pt:rotateRightButton="!hidden"
          pt:rotateLeftButton="!hidden"
          preview
        />
        <Image
          :src="`${config.public.API_BASE_URL}${verify.documents.businessLicense}`"
          alt="businessLicense img"
          pt:image="!rounded-10 !aspect-square"
          pt:rotateRightButton="!hidden"
          pt:rotateLeftButton="!hidden"
          preview
        />
        <Image
          :src="`${config.public.API_BASE_URL}${verify.documents.nationalCardBack}`"
          alt="nationalCardBack img"
          pt:image="!rounded-10 !aspect-square"
          pt:rotateRightButton="!hidden"
          pt:rotateLeftButton="!hidden"
          preview
        />
        <Image
          :src="`${config.public.API_BASE_URL}${verify.documents.nationalCardFront}`"
          alt="nationalCardFront img"
          pt:image="!rounded-10 !aspect-square"
          pt:rotateRightButton="!hidden"
          pt:rotateLeftButton="!hidden"
          preview
        />
      </div>
    </div>
    <div class="grid grid-cols-2 items-center">
      <label to="note">متن احراز:</label>
      <input
        type="text"
        id="note"
        v-model="data.note"
        class="rounded-md bg-gray-100 px-3 py-2"
      />
    </div>
    <Button
      pt:root="!w-full"
      label="ارسال"
      :loading="loading"
      @click="sendDataFunc"
    />
    <Toast />
  </main>
</template>

<script setup>
useHead({
  title: `احراز هویت کاربر |`
})

definePageMeta({
  title: 'احراز هویت کاربر'
})

let { showToast } = useToastComp()
let route = useRoute()
let config = useRuntimeConfig()

let { data: verify, refresh } = await useFetch('/api/admin/auth/verification', {
  credentials: 'include',
  method: 'POST',
  body: { id: route.params.id }
})

console.log(verify.value)

let authStatus = ['approved', 'pending', 'rejected']

let data = reactive({
  status: verify.value.verified,
  note: verify.value.note
})

let loading = ref(false)

async function sendDataFunc () {
  if (!data.status || !data.note)
    showToast('warn', 'اخطار', 'باید تمامی فیلد ها را پر کنید')
  else {
    try {
      loading.value = true

      let result = await $fetch('/api/admin/auth/changeAuth', {
        credentials: 'include',
        method: 'POST',
        body: { id: route.params.id, status: data.status, note: data.note }
      })

      showToast(result.message)
      refresh()
    } catch (err) {
      showToast('error', 'خطا', err.message)
    } finally {
      loading.value = false
    }
  }
}
</script>
