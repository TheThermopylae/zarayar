<template>
  <div>
    <AuthOtpForm v-if="showOtp" :phone="phone" />
    <AuthLoginForm v-else @otpEmit="showOtpFunc" />
  </div>
</template>

<script setup>
useHead({
  title: ' ورود به پنل |'
})

definePageMeta({
  layout: false
})

let phone = ref('')
let showOtp = ref(false)

function showOtpFunc (item) {
  phone.value = item
  showOtp.value = true
}
</script>
