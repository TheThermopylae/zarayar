<template>
  <main>
    <section class="p-3 bg-[#F6F6F6] rounded-10 space-y-3">
      <div>
        <label for="item">مظنه</label>
        <Select
          v-model="form.item"
          :options="items"
          pt:root="w-full !rounded-10 !bg-white !shadow-none !border-[#00000026] !mt-1.5"
          pt:label="!text-graydark"
        >
          <template #dropdownicon>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75066 3.12354e-06C3.91816 2.91231e-06 0.000654883 3.91751 0.000654672 8.75L0.000654066 22.6042C0.000653855 27.4367 3.91816 31.3542 8.75065 31.3542L22.6048 31.3542C27.4373 31.3542 31.3548 27.4367 31.3548 22.6042L31.3548 8.75C31.3548 3.91751 27.4373 3.94036e-06 22.6048 3.72913e-06L8.75066 3.12354e-06Z"
                fill="#DDDDDD"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6993 18.1948C16.1446 18.7803 15.2122 18.7803 14.6575 18.1948L7.7224 10.8744C7.30696 10.4359 6.61469 10.4172 6.17617 10.8326C5.73765 11.248 5.71894 11.9403 6.13438 12.3788L13.0695 19.6992C14.487 21.1955 16.8698 21.1955 18.2873 19.6992L25.2224 12.3788C25.6378 11.9403 25.6191 11.248 25.1806 10.8326C24.7421 10.4172 24.0498 10.4359 23.6344 10.8744L16.6993 18.1948Z"
                fill="#616161"
              />
            </svg>
          </template>
        </Select>
      </div>
      <div>
        <label for="fee">فی (ریال)</label>
        <input
          id="fee"
          type="number"
          class="border border-[#00000026] rounded-10 p-2 h-10 block w-full bg-white mt-1.5"
        />
      </div>
    </section>
    <section class="border border-strokesec rounded-10 p-3 my-3">
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label for="type-trade">نوع معامله</label>
          <Select
            v-model="form.typeTrade"
            :options="typesTrade"
            pt:root="w-full !rounded-10 !bg-white !shadow-none !border-[#00000026] !mt-1.5"
            pt:label="!text-graydark"
          >
            <template #dropdownicon>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.75066 3.12354e-06C3.91816 2.91231e-06 0.000654883 3.91751 0.000654672 8.75L0.000654066 22.6042C0.000653855 27.4367 3.91816 31.3542 8.75065 31.3542L22.6048 31.3542C27.4373 31.3542 31.3548 27.4367 31.3548 22.6042L31.3548 8.75C31.3548 3.91751 27.4373 3.94036e-06 22.6048 3.72913e-06L8.75066 3.12354e-06Z"
                  fill="#DDDDDD"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.6993 18.1948C16.1446 18.7803 15.2122 18.7803 14.6575 18.1948L7.7224 10.8744C7.30696 10.4359 6.61469 10.4172 6.17617 10.8326C5.73765 11.248 5.71894 11.9403 6.13438 12.3788L13.0695 19.6992C14.487 21.1955 16.8698 21.1955 18.2873 19.6992L25.2224 12.3788C25.6378 11.9403 25.6191 11.248 25.1806 10.8326C24.7421 10.4172 24.0498 10.4359 23.6344 10.8744L16.6993 18.1948Z"
                  fill="#616161"
                />
              </svg>
            </template>
          </Select>
        </div>
        <div>
          <label for="weight">وزن (گرم)</label>
          <input
            id="weight"
            type="number"
            class="border border-[#00000026] rounded-10 p-2 h-10 block w-full bg-white mt-1.5"
          />
        </div>
        <div class="col-span-2">
          <label for="all-price">مبلغ کل (ریال)</label>
          <input
            id="all-price"
            type="number"
            class="border border-[#00000026] rounded-10 p-2 h-10 block w-full bg-white mt-1.5"
          />
        </div>
      </div>
    </section>
    <div>
      <label for="description">توضیحات</label>
      <textarea
        id="description"
        rows="3"
        class="border border-[#00000026] rounded-10 p-2 block w-full bg-white mt-1.5 resize-none"
      ></textarea>
    </div>
    <div class="grid grid-cols-2 gap-2 mt-3">
        <Button label="ثبت" />
        <Button label="لغو" pt:root="!bg-white !text-primary" @click="navigateTo('/admin/users')" />
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'معامله جدید |'
})

definePageMeta({
  title: 'معامله جدید'
})

let items = ref(['طلا', 'سکه', 'نقره'])
let typesTrade = ref(['میخرم', 'میفروشم'])

let form = reactive({
  item: '',
  fee: '',
  typeTrade: '',
  weight: '',
  allPrice: '',
  description: ''
})
</script>
