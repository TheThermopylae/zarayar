<template>
  <main class="border border-[#0000001A] bg-[#FAFAFA] rounded-10">
    <ul>
      <li class="flex justify-between p-4 border-b border-[#0000001A]">
        <h4>نام</h4>
        {{ userData.fname }}
      </li>
      <li class="flex justify-between p-4 border-b border-[#0000001A]">
        <h4>نام خانوادگی</h4>
        {{ userData.lname }}
      </li>
      <li class="flex justify-between p-4">
        <h4>شماره موبایل</h4>
        {{ userData.phone }}
      </li>
    </ul>
  </main>
</template>

<script setup>
useHead({
  title: 'حساب کاربری |'
})

definePageMeta({
  title: 'حساب کاربری'
})

let { userData } = userAuth()
</script>
