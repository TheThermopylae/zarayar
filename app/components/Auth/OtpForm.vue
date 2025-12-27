<template>
  <main class="flex items-center justify-center flex-col gap-4 h-screen">
    <h1 class="font-bold text-2xl">زرعیار</h1>
    <form
      class="bg-white/80 rounded-2xl p-6 border border-stroke w-full max-w-md"
    >
      <p class="mb-2">کد پیامک شده را وارد کنید</p>

      <div class="space-y-3">
        <InputOtp v-model="otp" :length="5" dir="ltr" :integerOnly="true" />

        <div class="pt-2">
          <Button
            pt:root="!w-full"
            label="ورود"
            :disabled="otp.length < 5"
            :loading="loading"
            @click="otpFunc"
          />
        </div>
        <div class="mt-4 text-xs text-slate-400">
          ورود شما تحت قوانین و مقررات سایت است.
        </div>
      </div>
    </form>
  </main>
</template>

<script setup>
let { userData } = userAuth()
let { showToast } = useToastComp()

let emit = defineEmits(['otpEmit'])
let props = defineProps(['phone'])

let otp = ref('')

let loading = ref(false)

async function otpFunc () {
  try {
    loading.value = true

    let data = await $fetch(`/api/auth/otp`, {
      method: 'POST',
      body: { phone: props.phone, otp: otp.value }
    })

    userData.value = data
    return navigateTo('/')
  } catch (err) {
    showToast('error', 'خطا', err.msg)
  } finally {
    loading.value = false
  }
}
</script>

<style>
.p-inputotp-input {
  background: white !important;
  flex-grow: 1 !important;
  border-color: #e4e4e4 !important;
}
</style>
