<template>
  <div>
    <section class="mb-5">
      <h2 class="mb-2 pb-2 border-b border-stroke">مشتریان دسته بندی</h2>
      <div class="flex justify-between">
        <h4>کمیل ملکی</h4>
        09357559553
      </div>
    </section>
    <section
      class="flex justify-between items-center mb-2 pb-2 border-b border-stroke"
    >
      <h2>ویژگی های دسته بندی</h2>
      <div class="flex gap-2">
        <div class="flex items-center gap-1.5">
          خرید
          <span class="bg-[#96A8254D] rounded-10 text-[#5A6804] p-1">فعال</span>
        </div>
        <div class="flex items-center gap-1.5">
          فروش
          <span class="bg-[#96A8254D] rounded-10 text-[#5A6804] p-1">فعال</span>
        </div>
      </div>
    </section>
    <section
      class="border border-stroke rounded-10 p-3 mb-3 last:m-0"
      v-for="item in 2"
    >
      <h3 class="pb-2 mb-2 border-b border-stroke">نقد فردایی</h3>
      <div class="grid grid-cols-2 gap-2">
        <div class="bg-[#F1F1F1] p-2 rounded-10">
          <h4>اختلاف قیمت</h4>
          <div
            class="bg-white flex justify-between rounded-10 border border-stroke p-2"
          >
            <h5>فروش</h5>
            0
          </div>
          <div
            class="bg-white flex justify-between rounded-10 border border-stroke p-2 mt-1"
          >
            <h5>فروش</h5>
            0
          </div>
        </div>
        <div class="bg-[#F1F1F1] p-2 rounded-10">
          <h4>حد مجاز معامله</h4>
          <div
            class="bg-white flex justify-between rounded-10 border border-stroke p-2"
          >
            <h5>حداقل</h5>
            0
          </div>
          <div
            class="bg-white flex justify-between rounded-10 border border-stroke p-2 mt-1"
          >
            <h5>حداکثر</h5>
            0
          </div>
        </div>
        <div class="bg-[#F1F1F1] p-2 rounded-10">
          <h4>حد مجاز روزانه</h4>
          <div
            class="bg-white flex justify-between rounded-10 border border-stroke p-2"
          >
            <h5>حداقل</h5>
            0
          </div>
        </div>
        <div class="bg-[#F1F1F1] p-2 rounded-10">
          <h4>تایید خودکار</h4>
          <div
            class="bg-white flex justify-between rounded-10 border border-stroke p-2"
          >
            <h5>حداکثر</h5>
            0
          </div>
        </div>
      </div>
    </section>
    <div class="grid grid-cols-2 gap-2 mt-6">
      <Button label="ویرایش" pt:root="!bg-secondary" />
      <Button label="حذف" pt:root="!border !border-primary !bg-white !text-primary" />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'بنکدار (فعال) |'
})

definePageMeta({
  title: 'بنکدار (فعال)'
})
</script>
