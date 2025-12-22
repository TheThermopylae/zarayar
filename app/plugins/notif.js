const { getDeviceToken, listenForMessages } = useFcm()

export default defineNuxtPlugin(async nuxtApp => {
  // listenForMessages()
  // const token = await getDeviceToken()

  // if (token) {
  //   // ۳. ارسال به بک‌اند (همون API که گفتی)
  //   await $fetch('/api/user/save-device-token', {
  //     // آدرس فرضی بک‌اند
  //     method: 'POST',
  //     body: {
  //       deviceToken: token
  //     },
  //     headers: {
  //       // احتمالا توکن احراز هویت هم میخواد
  //     }
  //   })
  // }
})
