<template>
  <header class="p-3 border-b border-[#DEDEDE] items-center">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <Button unstyled v-if="route.path == '/admin'" @click="visible = true">
          <template #icon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H21"
                stroke="#616161"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M3 12H21"
                stroke="#616161"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M3 18H21"
                stroke="#616161"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </template>
        </Button>
        <button @click="backBtn" v-else>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.302 7.55208C1.302 4.1003 4.10022 1.30208 7.552 1.30208L17.4478 1.30208C20.8996 1.30208 23.6978 4.1003 23.6978 7.55208L23.6978 17.4479C23.6978 20.8997 20.8996 23.6979 17.4478 23.6979L7.552 23.6979C4.10022 23.6979 1.302 20.8997 1.302 17.4479L1.302 7.55208Z"
              fill="#BFBFBF"
              fill-opacity="0.6"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.3496 12.5045C20.3496 12.7117 20.2673 12.9104 20.1208 13.0569L14.9125 18.2653C14.6074 18.5704 14.1127 18.5704 13.8076 18.2653C13.5025 17.9602 13.5025 17.4655 13.8076 17.1604L17.6823 13.2858L5.43146 13.2858C4.99998 13.2858 4.65021 12.936 4.65021 12.5045C4.65021 12.073 4.99998 11.7233 5.43146 11.7233L17.6823 11.7233L13.8076 7.8486C13.5025 7.5435 13.5025 7.04884 13.8076 6.74375C14.1127 6.43865 14.6074 6.43865 14.9125 6.74375L20.1208 11.9521C20.2673 12.0986 20.3496 12.2973 20.3496 12.5045Z"
              fill="#616161"
            />
          </svg>
        </button>
        <h1 class="font-bold text-[#616161]">{{ route.meta.title }}</h1>
      </div>
      <div
        class="flex items-center gap-2 text-xs"
        v-if="route.path == '/admin'"
      >
        <button
          class="px-2 py-1.5 rounded-10 text-graydark bg-[#EFEFEF] flex items-center gap-2"
          @click="showMenu = !showMenu"
        >
          <svg
            width="4"
            height="13"
            viewBox="0 0 4 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.75 0.75C2.30228 0.75 2.75 1.19772 2.75 1.75C2.75 2.30228 2.30228 2.75 1.75 2.75C1.19772 2.75 0.75 2.30228 0.75 1.75C0.75 1.19772 1.19772 0.75 1.75 0.75Z"
              stroke="#616161"
              stroke-width="1.5"
            />
            <path
              d="M1.75 5.41663C2.30228 5.41663 2.75 5.86434 2.75 6.41663C2.75 6.96891 2.30228 7.41663 1.75 7.41663C1.19772 7.41663 0.75 6.96891 0.75 6.41663C0.75 5.86434 1.19772 5.41663 1.75 5.41663Z"
              stroke="#616161"
              stroke-width="1.5"
            />
            <path
              d="M1.75 10.0833C2.30228 10.0833 2.75 10.531 2.75 11.0833C2.75 11.6355 2.30228 12.0833 1.75 12.0833C1.19772 12.0833 0.75 11.6355 0.75 11.0833C0.75 10.531 1.19772 10.0833 1.75 10.0833Z"
              stroke="#616161"
              stroke-width="1.5"
            />
          </svg>
          ابزار ها
        </button>
        <span
          class="px-2 py-1.5 rounded-10 text-graydark bg-[#EFEFEF] flex items-center gap-2"
        >
          مشتری آنلاین 37
        </span>
      </div>
      <div
        class="flex items-center gap-2 text-xs"
        v-else-if="route.path == '/admin/users'"
      >
        <NuxtLink
          to="/admin/users/add"
          class="rounded-10 px-2 py-1.5 bg-[#B4DB8C]"
          >افزودن مشتری</NuxtLink
        >
        <span
          class="px-2 py-1.5 rounded-10 text-graydark bg-[#EFEFEF] flex items-center gap-2"
        >
          تعداد کاربران : 203
        </span>
      </div>
      <NuxtLink
        v-else-if="route.path == '/admin/transfers'"
        to="/"
        class="px-2 py-1 rounded bg-secondary text-xs"
      >
        مدیریت لیست همکاران
      </NuxtLink>
      <NuxtLink
        v-else-if="route.path == '/admin/trades/reports'"
        to="/"
        class="px-2 py-1 rounded bg-secondary text-xs"
      >
        خروجی
      </NuxtLink>
      <NuxtLink
        v-else-if="route.path == '/admin/customers-categories'"
        to="/admin/customers-categories/add"
        class="px-2 py-1 rounded bg-secondary text-xs"
      >
        افزودن دسته بندی
      </NuxtLink>
    </div>
    <div
      v-if="route.path == '/admin' && showMenu"
      class="grid grid-cols-3 gap-2 flex-wrap text-xs mt-3"
    >
      <button
        @click="visibleAdmin = true"
        class="flex flex-col items-center gap-2 border border-strokesec p-2 rounded-10 bg-[#FAFAFA]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.23633 11.1036C1.23635 13.5059 2.10202 15.724 3.55078 17.4738C5.46895 19.8568 8.48308 21.3844 11.8525 21.424L11.8877 21.4366C11.99 21.4735 12.1383 21.5269 12.3232 21.5919C12.6933 21.722 13.2117 21.8999 13.8037 22.0939C14.9802 22.4795 16.4769 22.9359 17.6895 23.1896C18.3032 23.3179 18.9312 23.1715 19.4102 22.8605C19.8875 22.5503 20.3017 22.0125 20.3018 21.3175C20.3018 20.9048 20.1358 20.4987 19.9736 20.1857C19.8013 19.853 19.5794 19.5255 19.3711 19.2452C19.2692 19.1081 19.1674 18.9787 19.0723 18.8615C21.3192 16.982 22.7363 14.2063 22.7363 11.1036C22.7363 7.55149 20.8867 4.43186 18.0732 2.58606C16.3323 1.42267 14.2427 0.763794 11.9863 0.763794C6.07467 0.763794 1.23633 5.36156 1.23633 11.1036ZM17.3369 16.4279C16.9798 16.2183 16.8599 15.7588 17.0693 15.4015C17.8138 14.1316 18.2363 12.6663 18.2363 11.1036C18.2363 9.53638 17.8134 8.06753 17.0693 6.79504C16.8602 6.43748 16.9803 5.97778 17.3379 5.76868C17.6954 5.55959 18.1552 5.67968 18.3643 6.03723C19.2386 7.5323 19.7363 9.2618 19.7363 11.1036C19.7363 12.9412 19.2384 14.6674 18.3633 16.1603C18.1538 16.5176 17.6942 16.6373 17.3369 16.4279Z"
            fill="#616161"
          />
        </svg>
        پیام مدیریت
      </button>
      <NuxtLink
        to="/admin/settings"
        class="flex flex-col items-center gap-2 border border-strokesec p-2 rounded-10 bg-[#FAFAFA]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.1152 3.00684C13.7872 1.87733 15.2585 1.45622 16.418 2.1416L18.1426 3.12891C19.4149 3.85624 19.846 5.48716 19.1191 6.74512V6.74609C18.7444 7.39263 18.803 7.80559 18.9199 8.00879C19.037 8.212 19.3651 8.46973 20.1104 8.46973C21.5618 8.46992 22.7598 9.65346 22.7598 11.1201V12.8799C22.7598 14.3314 21.577 15.5301 20.1104 15.5303C19.3656 15.5303 19.0372 15.7871 18.9199 15.9902C18.8029 16.1933 18.7442 16.607 19.1191 17.2539L19.1211 17.2578C19.8443 18.5234 19.4158 20.1433 18.1426 20.8711L16.417 21.8584C15.2576 22.5433 13.7871 22.1225 13.1152 20.9932L13.1113 20.9854L13.001 20.7959L12.999 20.793C12.6291 20.1477 12.2434 19.9922 12.0088 19.9922C11.773 19.9922 11.3839 20.149 11.0088 20.7959L10.8945 20.9932C10.2226 22.1226 8.75215 22.5435 7.59277 21.8584L5.86816 20.8711C4.59587 20.1438 4.16386 18.5128 4.89062 17.2549L4.8916 17.2539C5.26642 16.6071 5.20687 16.1933 5.08984 15.9902C4.97251 15.7871 4.64472 15.5304 3.90039 15.5303C2.43361 15.5303 1.25 14.3315 1.25 12.8799V11.1201C1.25 9.66847 2.43361 8.46973 3.90039 8.46973C4.64533 8.46964 4.97276 8.21196 5.08984 8.00879C5.20678 7.80565 5.26627 7.39262 4.8916 6.74609L4.89062 6.74512C4.16387 5.48722 4.59502 3.85628 5.86719 3.12891L7.59277 2.1416C8.75215 1.45652 10.2226 1.87744 10.8945 3.00684L10.8994 3.01465L11.0088 3.2041L11.0107 3.20703C11.3806 3.85218 11.7663 4.00769 12.001 4.00781C12.2367 4.00781 12.6259 3.85102 13.001 3.2041L13.1152 3.00684ZM12 9C10.3431 9 9 10.3431 9 12C9.00002 13.6568 10.3432 15 12 15C13.6568 15 15 13.6568 15 12C15 10.3431 13.6569 9 12 9Z"
            fill="#616161"
          />
        </svg>
        تنظیمات
      </NuxtLink>
      <NuxtLink
        to="/admin/orders"
        class="flex flex-col items-center gap-2 border border-strokesec p-2 rounded-10 bg-[#FAFAFA]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.06022 12.9466C3.29842 12.232 3.96716 11.75 4.72042 11.75H9.2789C10.0322 11.75 10.7009 12.232 10.9391 12.9466L12.2724 16.9466C12.6502 18.0798 11.8067 19.25 10.6122 19.25H3.38708C2.19261 19.25 1.34916 18.0798 1.72689 16.9466L3.06022 12.9466Z"
            fill="#616161"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.0602 12.9466C13.2984 12.232 13.9672 11.75 14.7204 11.75H19.2789C20.0322 11.75 20.7009 12.232 20.9391 12.9466L22.2724 16.9466C22.6502 18.0798 21.8067 19.25 20.6122 19.25H13.3871C12.1926 19.25 11.3492 18.0798 11.7269 16.9466L13.0602 12.9466Z"
            fill="#616161"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.06022 5.4466C8.29842 4.732 8.96716 4.25 9.72042 4.25H14.2789C15.0322 4.25 15.7009 4.732 15.9391 5.4466L17.2724 9.4466C17.6502 10.5798 16.8067 11.75 15.6122 11.75H8.38708C7.19261 11.75 6.34916 10.5798 6.72689 9.4466L8.06022 5.4466Z"
            fill="#616161"
          />
        </svg>
        معاملات امروز
      </NuxtLink>
      <NuxtLink
        to="/admin/users"
        class="flex flex-col items-center gap-2 border border-strokesec p-2 rounded-10 bg-[#FAFAFA]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.75 6.5C6.75 3.6005 9.1005 1.25 12 1.25C14.8995 1.25 17.25 3.6005 17.25 6.5C17.25 9.3995 14.8995 11.75 12 11.75C9.1005 11.75 6.75 9.3995 6.75 6.5Z"
            fill="#616161"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.25 18.5714C4.25 15.6325 6.63249 13.25 9.57143 13.25H14.4286C17.3675 13.25 19.75 15.6325 19.75 18.5714C19.75 20.8792 17.8792 22.75 15.5714 22.75H8.42857C6.12081 22.75 4.25 20.8792 4.25 18.5714Z"
            fill="#616161"
          />
        </svg>
        مدیریت کاربران
      </NuxtLink>
      <NuxtLink
        to="/admin/users"
        class="flex flex-col items-center gap-2 border border-strokesec p-2 rounded-10 bg-[#FAFAFA]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 1.25C19.1756 1.25 21.75 3.82436 21.75 7V17C21.75 20.1756 19.1756 22.75 16 22.75H8C4.82436 22.75 2.25 20.1756 2.25 17V7C2.25 3.82436 4.82436 1.25 8 1.25H16ZM9 15.4502C8.58579 15.4502 8.25 15.786 8.25 16.2002C8.25013 16.6143 8.58587 16.9502 9 16.9502H15C15.4141 16.9502 15.7499 16.6143 15.75 16.2002C15.75 15.786 15.4142 15.4502 15 15.4502H9ZM8 11.4502C7.58579 11.4502 7.25 11.786 7.25 12.2002C7.25013 12.6143 7.58587 12.9502 8 12.9502H16C16.4141 12.9502 16.7499 12.6143 16.75 12.2002C16.75 11.786 16.4142 11.4502 16 11.4502H8ZM8 7.4502C7.58579 7.4502 7.25 7.78598 7.25 8.2002C7.25013 8.6143 7.58587 8.9502 8 8.9502H16C16.4141 8.9502 16.7499 8.6143 16.75 8.2002C16.75 7.78598 16.4142 7.4502 16 7.4502H8Z"
            fill="#616161"
          />
        </svg>
        گزارشات
      </NuxtLink>
      <NuxtLink
        to="/"
        class="flex flex-col items-center gap-2 border border-strokesec p-2 rounded-10 bg-[#FAFAFA]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.77214 13.1838C3.90825 12.7754 4.29039 12.5 4.72082 12.5H9.2793C9.70973 12.5 10.0919 12.7754 10.228 13.1838L11.5613 17.1838C11.7772 17.8313 11.2952 18.5 10.6126 18.5H3.38749C2.70493 18.5 2.22296 17.8313 2.4388 17.1838L3.77214 13.1838Z"
            stroke="#966D22"
            stroke-width="1.5"
          />
          <path
            d="M13.7721 13.1838C13.9082 12.7754 14.2904 12.5 14.7208 12.5H19.2793C19.7097 12.5 20.0919 12.7754 20.228 13.1838L21.5613 17.1838C21.7772 17.8313 21.2952 18.5 20.6126 18.5H13.3875C12.7049 18.5 12.223 17.8313 12.4388 17.1838L13.7721 13.1838Z"
            stroke="#966D22"
            stroke-width="1.5"
          />
          <path
            d="M8.77214 5.68377C8.90825 5.27543 9.29039 5 9.72082 5H14.2793C14.7097 5 15.0919 5.27543 15.228 5.68377L16.5613 9.68377C16.7772 10.3313 16.2952 11 15.6126 11H8.38749C7.70493 11 7.22296 10.3313 7.4388 9.68377L8.77214 5.68377Z"
            stroke="#966D22"
            stroke-width="1.5"
          />
        </svg>
        طلا
      </NuxtLink>
      <NuxtLink
        to="/"
        class="flex flex-col items-center gap-2 border border-strokesec p-2 rounded-10 bg-[#FAFAFA]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.4502 5.15998C12.4502 6.62905 10.2385 7.81996 7.51027 7.81996C4.78201 7.81996 2.57031 6.62905 2.57031 5.15998C2.57031 3.69091 4.78201 2.5 7.51027 2.5C10.2385 2.5 12.4502 3.69091 12.4502 5.15998Z"
            stroke="#966D22"
            stroke-width="1.44299"
          />
          <path
            d="M7.51027 12.3794C10.2385 12.3794 12.4502 11.1885 12.4502 9.71939V5.15942C12.4502 6.62849 10.2385 7.8194 7.51027 7.8194C4.78201 7.8194 2.57031 6.62849 2.57031 5.15942V9.71939C2.57031 11.1885 4.78201 12.3794 7.51027 12.3794Z"
            stroke="#966D22"
            stroke-width="1.44299"
          />
          <path
            d="M7.51027 16.9397C10.2385 16.9397 12.4502 15.7488 12.4502 14.2797V9.71973C12.4502 11.1888 10.2385 12.3797 7.51027 12.3797C4.78201 12.3797 2.57031 11.1888 2.57031 9.71973V14.2797C2.57031 15.7488 4.78201 16.9397 7.51027 16.9397Z"
            stroke="#966D22"
            stroke-width="1.44299"
          />
          <path
            d="M7.51027 21.5C10.2385 21.5 12.4502 20.3091 12.4502 18.84V14.28C12.4502 15.7491 10.2385 16.94 7.51027 16.94C4.78201 16.94 2.57031 15.7491 2.57031 14.28V18.84C2.57031 20.3091 4.78201 21.5 7.51027 21.5Z"
            stroke="#966D22"
            stroke-width="1.44299"
          />
          <circle
            cx="17.1432"
            cy="17.225"
            r="4.275"
            stroke="#966D22"
            stroke-width="1.5"
          />
        </svg>
        طلا
      </NuxtLink>
    </div>
    <Drawer v-model:visible="visible" pt:root="!rounded-none" position="right">
      <template #header>
        <img src="/img/logo.png" alt="logo" />
      </template>
      <ul>
        <li>
          <NuxtLink
            to="/admin"
            :class="{ 'bg-primary text-white': route.path == '/admin' }"
            class="block px-3 py-2 rounded-md"
            >مدیریت سامانه</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/admin/add-branch"
            active-class="bg-primary text-white"
            class="block px-3 py-2 rounded-md"
            >افزودن شعبه</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/admin/add-operator"
            active-class="bg-primary text-white"
            class="block px-3 py-2 rounded-md"
            >افزودن اوپراتور</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/admin/daily-trades-balance"
            active-class="bg-primary text-white"
            class="block px-3 py-2 rounded-md"
            >تراز روزانه</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/admin/sms"
            active-class="bg-primary text-white"
            class="block px-3 py-2 rounded-md"
            >مدیریت اس ام اس ها</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/admin/users"
            active-class="bg-primary text-white"
            class="block px-3 py-2 rounded-md"
            >مدیریت کاربران</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/admin/transfers"
            active-class="bg-primary text-white"
            class="block px-3 py-2 rounded-md"
            >مدیریت حواله ها</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/admin/transfers"
            active-class="bg-primary text-white"
            class="block px-3 py-2 rounded-md"
            >مدیریت فیش ها</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/admin/trades"
            active-class="bg-primary text-white"
            class="block px-3 py-2 rounded-md"
            >مدیریت معامله ها</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/admin/trades/reports"
            active-class="bg-primary text-white"
            class="block px-3 py-2 rounded-md"
            >گزارشات معامله ها</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/admin/orders"
            active-class="bg-primary text-white"
            class="block px-3 py-2 rounded-md"
            >خرید و فروش ها</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/admin/items"
            active-class="bg-primary text-white"
            class="block px-3 py-2 rounded-md"
            >مدیریت آیتم ها</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/admin/customers-categories"
            active-class="bg-primary text-white"
            class="block px-3 py-2 rounded-md"
            >دسته بندی مشتریان</NuxtLink
          >
        </li>
      </ul>
    </Drawer>
    <!-- admin message -->
    <Drawer
      @after-hide="adminMessage = ''"
      v-model:visible="visibleAdmin"
      header="پیام مدیر سیستم"
      position="bottom"
      style="height: auto"
    >
      <textarea
        class="bg-[#F3F3F3] p-3 rounded-10 block w-full resize-x-none"
        v-model="adminMessage"
        maxlength="500"
      />

      <span class="block my-2">{{ adminMessage.length }} / 500</span>
      <Button
        label="ثبت و ذخیره پیام"
        @click="visibleAdmin = false"
        pt:root="!bg-[#B0E37C] w-full"
      />
    </Drawer>
  </header>
</template>

<script setup>
let route = useRoute()

let showMenu = ref(false)

let visible = ref(false)

let visibleAdmin = ref(false)

let adminMessage = ref('')

function backBtn () {
  history.back()
}
</script>
