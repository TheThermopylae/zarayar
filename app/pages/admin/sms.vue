<template>
  <main>
    <section class="flex justify-between p-2 bg-[#FAFAFA] rounded-10">
      <h4>شارژ پنل پیامک:</h4>
      1587 عدد
    </section>
    <section class="p-2 bg-[#FAFAFA] rounded-10 my-3">
      <label class="block mb-1.5">نام مجموعه</label>
      <input type="text" class="cinput" />
    </section>
    <section class="p-2 bg-[#FAFAFA] rounded-10 my-3">
      <label class="block mb-1.5"
        >ارسال پیامک شروع | پایان فعالیت برای تمامی مشتریان</label
      >
      <div class="grid grid-cols-2 gap-3">
        <Button label="ارسال پیامک شروع" pt:root="!bg-[#83BCFF] !border-none" />
        <Button label="ارسال پیامک پایان" pt:root="!bg-[#83BCFF] !border-none" />
      </div>
    </section>
    <section class="p-2 bg-[#FAFAFA] rounded-10">
      <label class="block mb-1.5"
        >ارسال پیامک بهترین قیمت معامله</label
      >
      <div class="grid grid-cols-2 gap-3">
        <Button label="بهترین قیمت خرید" pt:root="!bg-[#B4DB8C] !border-none" />
        <Button label="بهترین قیمت فروش" pt:root="!bg-[#E84362] !border-none" />
      </div>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: 'مدیریت ارتباط با مشتری |'
})

definePageMeta({
  title: 'مدیریت ارتباط با مشتری'
})
</script>
