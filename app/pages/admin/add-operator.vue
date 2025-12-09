<template>
  <div class="p-3 border border-stroke rounded-10">
    <form @submit.prevent class="space-y-3 text-sm">
      <input
        type="text"
        class="bg-[#FAFAFA] rounded-10 p-3 w-full block"
        placeholder="نام و نام خانوادگی"
      />
      <input
        type="text"
        class="bg-[#FAFAFA] rounded-10 p-3 w-full block"
        placeholder="شماره موبایل"
      />
      <input
        type="text"
        class="bg-[#FAFAFA] rounded-10 p-3 w-full block"
        placeholder="کد ملی"
      />
      <div>
        <h4>دسترسی ها</h4>
        <div class="grid grid-cols-2 gap-3 mt-1.5 text-xs">
          <div
            class="p-3 border border-strokesec rounded-10 bg-[#F1F1F1] flex justify-between items-center"
          >
            <label>امکان تایید معامله</label>
            <input type="checkbox" class="toggle-switch" />
          </div>
          <div
            class="p-3 border border-strokesec rounded-10 bg-[#F1F1F1] flex justify-between items-center"
          >
            <label>امکان لغو معامله</label>
            <input type="checkbox" class="toggle-switch" />
          </div>
          <div
            class="p-3 border border-strokesec rounded-10 bg-[#F1F1F1] flex justify-between items-center col-span-2"
          >
            <label>وضعیت اپراتور (فعال)</label>
            <input type="checkbox" class="toggle-switch" />
          </div>
        </div>
      </div>
      <Button label="اضافه کردن" pt:root="!bg-[#B4DB8C] w-full" />
    </form>
  </div>
</template>
