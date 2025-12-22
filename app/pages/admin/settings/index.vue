<template>
  <main class="p-3 bg-[#FAFAFA] rounded-10 border border-strokesec">
    <section class="mb-4 pb-4 border-b border-strokesec">
      <h4>عنوان هدر اپلیکیشن</h4>
      <div class="grid grid-cols-2 gap-3 mt-2">
        <div
          class="border border-strokesec rounded-10 p-2 bg-[#F5F7FA] flex items-center gap-2"
        >
          <input
            type="radio"
            name="header"
            class="radio"
            value="text"
            v-model="settings.headerSettings.mode"
          />
          متنی
        </div>
        <div
          class="border border-strokesec rounded-10 p-2 bg-[#F5F7FA] flex items-center gap-2"
        >
          <input
            type="radio"
            name="header"
            class="radio"
            value="logo"
            v-model="settings.headerSettings.mode"
          />
          لوگو
        </div>
        <input
          type="text"
          v-model="settings.headerSettings.title"
          class="cinput col-span-2"
          placeholder="عنوان"
        />
      </div>
      <div class="flex justify-between mt-3 gap-3">
        <input
          type="text"
          class="cinput"
          placeholder="فایل لوگو را آپلود کنید"
          v-model="settings.headerSettings.logoUrl"
        />
        <Button
          label="آپلود"
          pt:root="!bg-[#B4DB8C]"
          @click="submit"
          :disabled="loading"
        />
      </div>
    </section>
    <section class="mb-4 pb-4 border-b border-strokesec">
      <h4>عنوان صفحه اینترو اپلیکیشن</h4>
      <div class="grid grid-cols-2 gap-3 mt-2">
        <div
          class="border border-strokesec rounded-10 p-2 bg-[#F5F7FA] flex items-center gap-2"
        >
          <input
            type="radio"
            name="intro"
            class="radio"
            :value="true"
            v-model="settings.introPage.isActive"
          />
          فعال
        </div>
        <div
          class="border border-strokesec rounded-10 p-2 bg-[#F5F7FA] flex items-center gap-2"
        >
          <input
            type="radio"
            name="intro"
            class="radio"
            :value="false"
            v-model="settings.introPage.isActive"
          />
          غیر فعال
        </div>
        <input
          type="text"
          v-model="settings.introPage.title"
          class="cinput col-span-2"
          placeholder="عنوان اینترو"
        />
        <input
          type="text"
          v-model="settings.introPage.description"
          class="cinput col-span-2"
          placeholder="متن توضیحات"
        />
      </div>
      <div class="flex justify-between mt-3 gap-3">
        <input
          type="text"
          class="cinput"
          v-model="settings.introPage.imageUrl"
          placeholder="فایل لوگو را آپلود کنید"
        />
        <Button
          label="آپلود"
          pt:root="!bg-[#B4DB8C]"
          @click="submit"
          :disabled="loading"
        />
      </div>
    </section>
    <section class="space-y-3 mb-4 pb-4 border-b border-strokesec">
      <div class="flex justify-between items-center">
        ارسال پیامک معاملات به مشتریان
        <input
          type="checkbox"
          class="toggle-switch"
          v-model="settings.transactionOptions.sendSms"
        />
      </div>
      <div class="flex justify-between items-center">
        ثبت معاملات آبشده در حسابداری
        <input
          type="checkbox"
          class="toggle-switch"
          v-model="settings.transactionOptions.accountingMelted"
        />
      </div>
      <div class="flex justify-between items-center">
        ثبت معاملات سکه در حسابداری
        <input
          type="checkbox"
          class="toggle-switch"
          v-model="settings.transactionOptions.accountingCoin"
        />
      </div>
      <div class="flex justify-between items-center">
        ثبت معاملات نقره در حسابداری
        <input
          type="checkbox"
          class="toggle-switch"
          v-model="settings.transactionOptions.accountingSilver"
        />
      </div>
      <div class="flex justify-between items-center">
        توضیحات معامله
        <input
          type="checkbox"
          class="toggle-switch"
          v-model="settings.transactionOptions.showDescription"
        />
      </div>
      <div class="flex justify-between items-center">
        <div>
          ثبت نوع معامله در حسابداری
          <p class="text-sm text-gray-500">
            این امکان نوع معاملات آبشده (نقدی، کارتخوان و...) در حسابداری ثبت
            خواهد شد
          </p>
        </div>
        <input
          type="checkbox"
          class="toggle-switch"
          v-model="settings.transactionOptions.accountingType"
        />
      </div>
    </section>
    <section class="mb-4">
      <h4>واحد پول اپلیکیشن</h4>
      <div
        class="grid grid-cols-2 bg-[#FAFAFA] border border-stroke p-1 rounded-10 text-center mt-2"
      >
        <button
          class="p-2.5 border-stroke rounded-10"
          :class="{ 'bg-white border': settings.currency.unit == 'rial' }"
          @click=";(settings.currency.unit = 'rial'), submit"
        >
          ریال
        </button>
        <button
          class="p-2.5 border-stroke rounded-10"
          :class="{ 'bg-white border': settings.currency.unit == 'toman' }"
          @click=";(settings.currency.unit = 'toman'), submit"
        >
          تومان
        </button>
      </div>
    </section>
    <section class="mb-4 pb-4 border-b border-strokesec space-y-3">
      <h4 class="font-bold mb-1">بازه تغییرات مظنه و سود</h4>
      <p class="text-xs text-gray-500 mb-4">
        در این قسمت میتوانید پله افزایش و کاهش مظنه در پنل را تنظیم کنید.
      </p>
      <div class="text-sm">
        <h4 class="font-bold">
          آبشده <span class="text-gray-500 font-medium">(هزار تومان)</span>
        </h4>
        <input
          type="number"
          class="cinput text-center mt-2"
          v-model="settings.priceSteps.melted"
        />
      </div>
      <div class="text-sm">
        <h4 class="font-bold">
          سکه <span class="text-gray-500 font-medium">(هزار تومان)</span>
        </h4>
        <input
          type="number"
          class="cinput text-center mt-2"
          v-model="settings.priceSteps.coin"
        />
      </div>
      <div class="text-sm">
        <h4 class="font-bold">
          نقره (آبشده / ساچمه)
          <span class="text-gray-500 font-medium">(هزار تومان)</span>
        </h4>
        <input
          type="number"
          class="cinput text-center mt-2"
          v-model="settings.priceSteps.silverShot"
        />
      </div>
      <div class="text-sm">
        <h4 class="font-bold">
          نقره (شمس) <span class="text-gray-500 font-medium">(هزار تومان)</span>
        </h4>
        <input
          type="number"
          class="cinput text-center mt-2"
          v-model="settings.priceSteps.silverBar"
        />
      </div>
      <Button
        label="ثبت تغییرات"
        pt:root="!text-center !bg-[#B4DB8C] w-full"
        @click="submit"
        :disabled="loading"
      />
    </section>
    <section class="mb-4 pb-4 border-b border-strokesec space-y-3">
      <h4 class="font-bold mb-1">محدود سازی وزن / تعداد معاملات</h4>
      <p class="text-xs text-gray-500 mb-4">
        در این قسمت میتوانید وزن / تعداد معاملات را برای مشتریان محدود کنید.
      </p>
      <div class="text-sm">
        <h4 class="font-bold mb-1.5">آبشده</h4>
        <span class="text-gray-500">حداقل وزن در هر معامله</span>
        <input
          type="number"
          class="cinput text-center mt-2"
          v-model="settings.tradeLimits.melted.minWeight"
        />
        <span class="text-gray-500 block mt-2">حداکثر وزن در هر معامله</span>
        <input
          type="number"
          class="cinput text-center mt-2"
          v-model="settings.tradeLimits.melted.maxWeight"
        />
      </div>
      <div class="text-sm">
        <h4 class="font-bold mb-1.5">سکه</h4>
        <span class="text-gray-500">حداقل تعداد در هر معامله</span>
        <input
          type="number"
          class="cinput text-center mt-2"
          v-model="settings.tradeLimits.coin.minCount"
        />
        <span class="text-gray-500 block mt-2">حداکثر تعداد در هر معامله</span>
        <input
          type="number"
          class="cinput text-center mt-2"
          v-model="settings.tradeLimits.coin.maxCount"
        />
      </div>
      <div class="text-sm">
        <h4 class="font-bold mb-1.5">نقره</h4>
        <span class="text-gray-500">حداقل وزن در هر معامله</span>
        <input
          type="number"
          class="cinput text-center mt-2"
          v-model="settings.tradeLimits.silver.minWeight"
        />
        <span class="text-gray-500 block mt-2">حداکثر وزن در هر معامله</span>
        <input
          type="number"
          class="cinput text-center mt-2"
          v-model="settings.tradeLimits.silver.maxWeight"
        />
        <span class="text-gray-500 block mt-2">حداکثر تعداد در هر معامله</span>
        <input
          type="number"
          class="cinput text-center mt-2"
          v-model="settings.tradeLimits.silver.minCount"
        />
        <span class="text-gray-500 block mt-2">حداکثر تعداد در هر معامله</span>
        <input
          type="number"
          class="cinput text-center mt-2"
          v-model="settings.tradeLimits.silver.maxCount"
        />
      </div>
      <p class="flex items-center gap-2 text-xs">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_991_8981)">
            <path
              d="M15.5827 8.49996C15.5827 12.412 12.4114 15.5833 8.49935 15.5833C4.58733 15.5833 1.41602 12.412 1.41602 8.49996C1.41602 4.58794 4.58733 1.41663 8.49935 1.41663C12.4114 1.41663 15.5827 4.58794 15.5827 8.49996Z"
              stroke="#616161"
              stroke-width="1.5"
            />
            <path
              d="M8.5 4.95825L8.5 9.99071"
              stroke="#616161"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M8.5 12.0416L8.50708 12.0416"
              stroke="#616161"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_991_8981">
              <rect
                width="17"
                height="17"
                fill="white"
                transsettings="translate(7.43094e-07 17) rotate(-90)"
              />
            </clipPath>
          </defs>
        </svg>
        حداقل و حداکثر تعداد در معاملات شمش و وزن در معاملات آبشده نقره و ساچمه
        مورد استفاده قرار می گیرد
      </p>
      <Button
        label="ثبت تغییرات"
        pt:root="!text-center !bg-[#B4DB8C] w-full"
        @click="submit"
        :disabled="loading"
      />
    </section>
    <div
      class="flex justify-between items-center select-none cursor-pointer"
      @click="showNestedSettings = !showNestedSettings"
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
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke="#616161"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
            stroke="#616161"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h2>تنظیمات زیرمجموعه</h2>
      </div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :class="{ 'rotate-180': !showNestedSettings }"
      >
        <path
          d="M1.25 7.25C1.25 3.93629 3.93629 1.25 7.25 1.25L16.75 1.25C20.0637 1.25 22.75 3.93629 22.75 7.25L22.75 16.75C22.75 20.0637 20.0637 22.75 16.75 22.75L7.25 22.75C3.93629 22.75 1.25 20.0637 1.25 16.75L1.25 7.25Z"
          fill="#BFBFBF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.45397 9.17902C5.71587 8.9309 6.12932 8.94208 6.37744 9.20397L11.2096 14.3046C11.4245 14.5314 11.711 14.6446 12 14.6446C12.289 14.6446 12.5755 14.5314 12.7904 14.3046L17.6226 9.20398C17.8707 8.94208 18.2841 8.9309 18.546 9.17902C18.8079 9.42713 18.8191 9.84058 18.571 10.1025L13.7388 15.2031C13.2666 15.7016 12.632 15.951 12 15.951C11.368 15.951 10.7334 15.7016 10.2612 15.2031L5.42902 10.1025C5.1809 9.84058 5.19208 9.42713 5.45397 9.17902Z"
          fill="black"
        />
      </svg>
    </div>
    <div
      v-if="showNestedSettings"
      class="mt-3 mb-4 pb-4 border-b border-strokesec"
    >
      <div class="flex justify-between items-center mb-5">
        <div>
          <h3 class="font-bold">نمایش آیتم به صورت غیر فعال</h3>
          <p class="text-xs mt-1">
            سر در صورتی که سیستم بالا دستی آفلاین باشد آیتم نمایش داده شود اما
            به صورت خاکستری و با خط
          </p>
        </div>
        <input
          type="checkbox"
          class="toggle-switch"
          v-model="settings.subsetSettings.showInactiveItems"
        />
      </div>
      <section class="space-y-3">
        <div class="flex justify-between items-center">
          <h4>وضعیت اتصال</h4>
          <input
            type="checkbox"
            class="toggle-switch"
            v-model="settings.subsetSettings.connectionStatus"
          />
        </div>
        <div class="flex justify-between items-center">
          <h4>تایید یا رد</h4>
          <input
            type="checkbox"
            class="toggle-switch"
            v-model="settings.subsetSettings.confirmOrReject"
          />
        </div>
        <div class="flex justify-between items-center">
          <h4>معامله مستقل</h4>
          <input
            type="checkbox"
            class="toggle-switch"
            v-model="settings.subsetSettings.independentTrade"
          />
        </div>
      </section>
      <section class="mt-3 space-y-3">
        <div class="grid grid-cols-2 items-center">
          <h4>نام مغازه</h4>
          <input
            type="text"
            class="bg-white p-1 rounded-10 text-center"
            v-model="settings.subsetSettings.shopName"
          />
        </div>
        <div class="grid grid-cols-2 items-center">
          <h4>دامنه</h4>
          <input
            type="text"
            class="bg-white p-1 rounded-10 text-center"
            v-model="settings.subsetSettings.domain"
          />
        </div>
        <div class="grid grid-cols-2 items-center">
          <h4>کد و نام حساب من</h4>
          <input
            type="text"
            class="bg-white p-1 rounded-10 text-center"
            v-model="settings.subsetSettings.accountCode"
          />
        </div>
        <div class="grid grid-cols-2 items-center">
          <h4>کد و نام حساب اصلی</h4>
          <input
            type="text"
            class="bg-white p-1 rounded-10 text-center"
            v-model="settings.subsetSettings.mainAccountCode"
          />
        </div>
        <Button
          pt:root="!bg-[#B4DB8C] w-full"
          label="ثبت تغییرات"
          @click="submit"
          :disabled="loading"
        />
      </section>
    </div>
    <div
      class="flex justify-between items-center select-none cursor-pointer mt-3"
      @click="showCustomerSettings = !showCustomerSettings"
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
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke="#616161"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
            stroke="#616161"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h2>تنظیمات پنل مشتری</h2>
      </div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :class="{ 'rotate-180': !showCustomerSettings }"
      >
        <path
          d="M1.25 7.25C1.25 3.93629 3.93629 1.25 7.25 1.25L16.75 1.25C20.0637 1.25 22.75 3.93629 22.75 7.25L22.75 16.75C22.75 20.0637 20.0637 22.75 16.75 22.75L7.25 22.75C3.93629 22.75 1.25 20.0637 1.25 16.75L1.25 7.25Z"
          fill="#BFBFBF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.45397 9.17902C5.71587 8.9309 6.12932 8.94208 6.37744 9.20397L11.2096 14.3046C11.4245 14.5314 11.711 14.6446 12 14.6446C12.289 14.6446 12.5755 14.5314 12.7904 14.3046L17.6226 9.20398C17.8707 8.94208 18.2841 8.9309 18.546 9.17902C18.8079 9.42713 18.8191 9.84058 18.571 10.1025L13.7388 15.2031C13.2666 15.7016 12.632 15.951 12 15.951C11.368 15.951 10.7334 15.7016 10.2612 15.2031L5.42902 10.1025C5.1809 9.84058 5.19208 9.42713 5.45397 9.17902Z"
          fill="black"
        />
      </svg>
    </div>
    <div v-if="showCustomerSettings" class="mt-3">
      <div class="border border-strokesec p-3 rounded-10 my-3">
        مدت زمان تایید معامله
        <div class="flex justify-between mt-4">
          <div class="flex items-center gap-2">
            <input
              type="radio"
              name="time"
              class="radio"
              v-model="settings.customerPanel.confirmTimeout"
              value="30"
            />
            30
          </div>
          <div class="flex items-center gap-2">
            <input
              type="radio"
              name="time"
              class="radio"
              v-model="settings.customerPanel.confirmTimeout"
              value="60"
            />
            60
          </div>
          <div class="flex items-center gap-2">
            <input
              type="radio"
              name="time"
              class="radio"
              v-model="settings.customerPanel.confirmTimeout"
              value="90"
            />
            90
          </div>
          <div class="flex items-center gap-2">
            <input
              type="radio"
              name="time"
              class="radio"
              v-model="settings.customerPanel.confirmTimeout"
              value="120"
            />
            120
          </div>
          <div class="flex items-center gap-2">
            <input
              type="radio"
              name="time"
              class="radio"
              v-model="settings.customerPanel.confirmTimeout"
              value="150"
            />
            150
          </div>
        </div>
      </div>
      <div class="mb-4 pb-4 border-b border-strokesec">
        <h3>نوع نمایش آیتم ها</h3>
        <div
          class="grid grid-cols-2 bg-[#FAFAFA] border border-stroke p-1 rounded-10 text-center mt-2"
        >
          <button
            class="p-2.5 border-stroke rounded-10"
            :class="{
              'bg-white border': settings.customerPanel.displayType == 'list'
            }"
            @click=";(settings.customerPanel.displayType = 'list'), submit"
          >
            لیست
          </button>
          <button
            class="p-2.5 border-stroke rounded-10"
            :class="{
              'bg-white border': settings.customerPanel.displayType == 'grid'
            }"
            @click=";(settings.customerPanel.displayType = 'grid'), submit"
          >
            مربعی
          </button>
        </div>
      </div>
      <div class="flex justify-between items-center mb-5">
        <div>
          <h3 class="font-bold">موبایل ادمین</h3>
          <p class="text-xs mt-1">
            موبایل ادمین برای نمایش به مشتری در صورت آفلاین بودن ادمین
          </p>
        </div>
        <input
          type="checkbox"
          class="toggle-switch"
          v-model="settings.customerPanel.adminMobile.isActive"
        />
      </div>
      <input
        type="number"
        inputmode="numeric"
        class="cinput text-center mb-2"
        v-model="settings.customerPanel.adminMobile.numbers[0]"
      />
      <input
        type="number"
        inputmode="numeric"
        class="cinput text-center mb-2"
        v-model="settings.customerPanel.adminMobile.numbers[1]"
      />
      <Button
        pt:root="!bg-[#B4DB8C] w-full"
        label="ثبت"
        @click="submit"
        :disabled="loading"
      />
    </div>
    <div
      class="flex justify-between items-center select-none cursor-pointer mt-3"
      @click="showPublicSettings = !showPublicSettings"
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
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke="#616161"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
            stroke="#616161"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h2>تنظیمات عمومی</h2>
      </div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :class="{ 'rotate-180': !showPublicSettings }"
      >
        <path
          d="M1.25 7.25C1.25 3.93629 3.93629 1.25 7.25 1.25L16.75 1.25C20.0637 1.25 22.75 3.93629 22.75 7.25L22.75 16.75C22.75 20.0637 20.0637 22.75 16.75 22.75L7.25 22.75C3.93629 22.75 1.25 20.0637 1.25 16.75L1.25 7.25Z"
          fill="#BFBFBF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.45397 9.17902C5.71587 8.9309 6.12932 8.94208 6.37744 9.20397L11.2096 14.3046C11.4245 14.5314 11.711 14.6446 12 14.6446C12.289 14.6446 12.5755 14.5314 12.7904 14.3046L17.6226 9.20398C17.8707 8.94208 18.2841 8.9309 18.546 9.17902C18.8079 9.42713 18.8191 9.84058 18.571 10.1025L13.7388 15.2031C13.2666 15.7016 12.632 15.951 12 15.951C11.368 15.951 10.7334 15.7016 10.2612 15.2031L5.42902 10.1025C5.1809 9.84058 5.19208 9.42713 5.45397 9.17902Z"
          fill="black"
        />
      </svg>
    </div>
    <div v-if="showPublicSettings" class="mt-3">
      <div>
        <h3 class="font-bold">متن پیغام</h3>
        <textarea
          class="cinput mt-1.5 resize-none"
          v-model="settings.generalSettings.messageText"
        />
      </div>
      <div>
        <h3>مدت زمان نمایش پیغام</h3>
        <Select
          v-model="settings.generalSettings.messageDuration"
          :options="times"
          option-label="label"
          optionValue="value"
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
      <div class="my-3">
        <h3 class="font-bold">
          قوانین و شرایط اسفاده از اپلیکیشن را وارد کنید.
        </h3>
        <textarea
          class="cinput mt-1.5 resize-none"
          v-model="settings.generalSettings.termsText"
        />
      </div>
      <div class="mb-3">
        <h3 class="font-bold">
          متن آغازین برای نمایش در صفحه ورود برنامه را وارد کنید.
        </h3>
        <textarea
          class="cinput mt-1.5 resize-none"
          v-model="settings.generalSettings.loginText"
        />
      </div>
      <div>
        <h3 class="font-bold">درباره ما</h3>
        <textarea
          class="cinput mt-1.5 resize-none"
          v-model="settings.generalSettings.aboutUs"
        />
      </div>
      <Button
        pt:root="!bg-[#B4DB8C] w-full"
        label="ثبت"
        @click="submit"
        :disabled="loading"
      />
    </div>
    <Toast />
  </main>
</template>

<script setup>
useHead({
  title: 'تنظیمات |'
})

definePageMeta({
  title: 'تنظیمات'
})

let { showToast } = useToastComp()
let { settings } = useSettings()

// let settings = reactive({
//   // --- تنظیمات هدر ---
//   headerSettings: {
//     mode: 'text', // حالت نمایش: 'text' (متنی) یا 'logo' (لوگو)
//     title: 'پنل مدیریت', // متنی که در هدر نمایش داده می‌شود
//     logoUrl: '' // آدرس فایل لوگو (اگر آپلود شده باشد)
//   },

//   // --- تنظیمات اینترو (صفحه اول) ---
//   introPage: {
//     isActive: true, // تیک فعال/غیرفعال
//     title: '',
//     description: '',
//     imageUrl: ''
//   },

//   // --- سوییچ‌های تنظیمات کلی ---
//   transactionOptions: {
//     sendSms: true, // ارسال پیامک معاملات
//     accountingMelted: true, // ثبت آبشده در حسابداری
//     accountingCoin: false, // ثبت سکه (خاموش)
//     accountingSilver: false, // ثبت نقره (خاموش)
//     showDescription: true, // نمایش توضیحات معامله
//     accountingType: true // ثبت نوع معامله
//   },

//   // --- واحد پول ---
//   currency: {
//     unit: 'rial' // یا 'rial' یا 'toman'
//   },

//   // --- تنظیمات صدا ---
//   notificationSounds: {
//     onReceiveTrade: { active: true, soundFile: '' }, // هنگام دریافت معامله
//     onConfirmTrade: { active: true, soundFile: '' }, // هنگام تایید
//     onCancelTrade: { active: true, soundFile: '' }, // هنگام لغو
//     onPriceChange: { active: false, soundFile: '' }, // تغییر مظنه (غیرفعال)
//     onReceiveNotif: { active: true, soundFile: '' } // دریافت اعلان
//   },

//   // --- بازه تغییرات مظنه (پله‌های قیمت) ---
//   priceSteps: {
//     melted: 20, // آبشده
//     coin: 50, // سکه
//     silverShot: 10, // نقره ساچمه
//     silverBar: 10 // نقره شمش
//   },

//   // --- محدودیت‌های وزن و تعداد ---
//   tradeLimits: {
//     melted: { minWeight: 10, maxWeight: 5000 }, // حداقل و حداکثر وزن آبشده
//     coin: { minCount: 1, maxCount: 100 }, // حداقل و حداکثر تعداد سکه
//     silver: { minWeight: 50, maxWeight: 2000, minCount: 0, maxCount: 0 }
//   },

//   // --- تنظیمات زیرمجموعه ---
//   subsetSettings: {
//     showInactiveItems: true, // نمایش آیتم به صورت غیرفعال
//     connectionStatus: true, // وضعیت اتصال
//     confirmOrReject: false, // تایید یا رد
//     independentTrade: true, // معامله مستقل
//     shopName: 'اطلس گلد', // نام مغازه
//     domain: 'atlasgold.com', // دامنه
//     accountCode: '101', // کد حساب من
//     mainAccountCode: '999' // کد حساب اصلی
//   },

//   // --- پنل مشتری ---
//   customerPanel: {
//     confirmTimeout: 60, // زمان تایید: ۳۰، ۶۰، ۹۰، ۱۲۰، ۱۵۰
//     displayType: 'list', // نوع نمایش: 'list' (لیست) یا 'grid' (مربعی)
//     adminMobile: {
//       isActive: true, // نمایش موبایل ادمین
//       numbers: ['09375559553', '09335556699'] // لیست شماره‌ها
//     }
//   },

//   // --- متون عمومی ---
//   generalSettings: {
//     messageText: '',
//     messageDuration: 5, // مدت زمان نمایش پیغام
//     termsText: '',
//     loginText: '',
//     aboutUs: ''
//   }
// })

let sounds = ref(['1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3'])

let showNestedSettings = ref(true)
let showCustomerSettings = ref(true)
let showPublicSettings = ref(true)

let times = ref([
  { label: '1 روز', value: 1 },
  { label: '2 روز', value: 2 },
  { label: '3 روز', value: 3 },
  { label: '4 روز', value: 4 },
  { label: '5 روز', value: 5 },
  { label: '6 روز', value: 6 },
  { label: '7 روز', value: 7 },
  { label: '8 روز', value: 8 },
  { label: '9 روز', value: 9 },
  { label: '10 روز', value: 10 }
])

let loading = ref(false)

async function submit () {
  try {
    loading.value = true

    let data = await $fetch('/api/admin/settings/submit', {
      credentials: 'include',
      method: 'POST',
      body: settings.value
    })

    showToast(data.message)
    settings.value = data.data
  } catch (err) {
    showToast('error', 'خطا', err.data.message)
    console.log(err)
  } finally {
    loading.value = false
  }
}
</script>
