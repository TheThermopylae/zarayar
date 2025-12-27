<template>
  <div>
    <button
      class="border border-strokesec rounded-10 p-3 w-full flex justify-between items-center"
      @click="visible = true"
    >
      <div class="flex items-center gap-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 2H6C4.34315 2 3 3.34315 3 5V6.54417C3 7.43969 3.40007 8.28839 4.09085 8.85829L7.36369 11.5584C8.05448 12.1283 8.45455 12.977 8.45455 13.8725V20.124C8.45455 21.7487 10.2893 22.6955 11.6135 21.754L14.7044 19.5563C15.232 19.1812 15.5455 18.5738 15.5455 17.9263V13.8725C15.5455 12.977 15.9455 12.1283 16.6363 11.5584L19.9091 8.85829C20.5999 8.28839 21 7.43969 21 6.54417V5C21 3.34315 19.6569 2 18 2Z"
            stroke="#616161"
            stroke-width="1.5"
          />
        </svg>
        فیلتر
      </div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 8.75958L10.5481 14.6159C11.3369 15.4486 12.663 15.4486 13.4519 14.6159L19 8.75959"
          stroke="#616161"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </button>
    <Drawer
      :blockScroll="true"
      v-model:visible="visible"
      position="bottom"
      pt:root="!text-graydark !text-sm !h-auto !rounded-t-2xl"
      pt:header="!p-3"
      pt:content="!p-3 !pt-0"
    >
      <form @submit.prevent class="space-y-2">
        <div>
          <label for="type">نوع معامله</label>
          <Select
            v-model="form.type"
            :options="types"
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
          <label for="name">نام و نام خانوادگی</label>
          <Select
            v-model="form.name"
            :options="names"
            pt:root="w-full !rounded-10 !bg-white !shadow-none !border-[#00000026] !mt-1.5"
            pt:label="!text-graydark"
            filter
            :emptyFilterMessage="'کاربری با این نام پیدا نشد'"
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
          <label for="weight-quantity">وزن / تعداد</label>
          <input
            type="text"
            id="weight-quantity"
            class="p-2 rounded-10 border border-stroke block mt-1.5 w-full"
            v-model="form.weight"
          />
        </div>
        <div>
          <label for="number">شماره سند</label>
          <input
            type="text"
            id="number"
            class="p-2 rounded-10 border border-stroke block mt-1.5 w-full"
            v-model="form.weight"
          />
        </div>
        <div>
          <label for="date">تاریخ معامله</label>
          <input
            type="text"
            id="date"
            class="p-2 rounded-10 border border-stroke block mt-1.5 w-full"
            v-model="form.weight"
          />
        </div>
        <div>
          <label for="user-status">وضعیت</label>
          <Select
            v-model="form.status"
            :options="userStatus"
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
        <div class="grid grid-cols-2 gap-2">
          <Button
            label="اعمال فیلتر"
            pt:root="!text-sm"
            @click="visible = false"
          />
          <Button
            label="ریست کردن"
            pt:root="!bg-white !text-primary !text-sm !border"
            @click="resetForm"
          />
        </div>
      </form>
    </Drawer>
  </div>
</template>

<script setup>
let visible = ref(false);

let types = ref(["لیست آبشده ها", "لیست قیمت ها", "لیست نقره ها"]);
let names = ref([
  "امیر برزگر",
  "تست تستی",
  "تست تست پور",
  "تست تستیان",
  "تست تست زاده",
]);

let userStatus = ref(["فعال", "غیر فعال"]);

let form = reactive({
  type: "",
  name: "",
  number: "",
  date: "",
  weight: "",
  status: "",
});

function resetForm() {
  for (let item in form) form[item] = "";
}
</script>
