<template>
  <AuthOtpForm v-if="showOtp" :phone="phone" />
  <AuthLoginForm v-else @otpEmit="showOtpFunc" />
</template>

<script setup>
useHead({
  title: ' ورود به پنل |'
})

let phone = ref('')
let showOtp = ref(false)

function showOtpFunc (item) {
  phone.value = item
  showOtp.value = true
}
</script>
