<template>
  <header
    class="p-3 border-b border-[#DEDEDE] flex justify-between items-center"
  >
    <div class="flex items-center gap-2">
      <Button unstyled @click="visible = true" v-if="route.path == '/'">
        <template #icon
          ><svg
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
      <h1
        class="font-bold text-[#616161]"
        v-if="settings?.headerSettings.mode == 'text'"
      >
        <span>{{ settings?.headerSettings.title }} |</span>
        {{ route.meta.title }}
      </h1>
      <img v-else :src="settings?.headerSettings.logoUrl" alt="logo" />
    </div>
    <div class="flex items-center gap-3">
      <span
        class="border border-cgreen text-cgreen bg-cgreen/20 px-1.5 py-1 text-2sm rounded-10"
      >
        مدیر آنلاین
      </span>
      <NuxtLink to="/notifications">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7357 19.5806C14.7357 19.8839 14.6581 20.1843 14.5074 20.4646C14.3566 20.7449 14.1357 20.9995 13.8572 21.2141C13.5786 21.4286 13.2479 21.5987 12.884 21.7148C12.5201 21.8309 12.13 21.8907 11.7361 21.8907C11.3422 21.8907 10.9522 21.8309 10.5882 21.7148C10.2243 21.5987 9.89365 21.4286 9.61511 21.2141C9.33658 20.9995 9.11563 20.7449 8.96489 20.4646C8.81414 20.1843 8.73656 19.8839 8.73656 19.5806"
            stroke="#616161"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M18.7917 10.9117C18.8915 11.7458 19.1224 12.5611 19.4775 13.3269L19.7422 13.8976C20.7517 16.0745 19.437 18.619 17.0774 19.0552L16.9172 19.0848C13.4921 19.7179 9.98006 19.7179 6.55501 19.0848C4.17611 18.6451 2.91756 16.0132 4.06872 13.8854L4.29512 13.467C4.9133 12.3243 5.23702 11.0457 5.23702 9.74658L5.23702 8.42529C5.23702 6.2015 6.49566 4.16929 8.48656 3.17855C10.2178 2.31704 12.1996 2.15685 14.0268 2.70383"
            stroke="#616161"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <circle
            cx="17.8599"
            cy="6.03676"
            r="2.5"
            stroke="#616161"
            stroke-width="1.5"
          />
        </svg>
      </NuxtLink>
    </div>
    <Drawer
      v-model:visible="visible"
      pt:root="!rounded-none !bg-[#F2F3F6]"
      pt:content="!relative"
      position="full"
    >
      <template #header>
        <h4 class="absolute left-1/2 -translate-x-1/2">پروفایل</h4>
      </template>
      <section
        class="rounded-2xl p-3 bg-white flex flex-col items-center font-bold"
      >
        <div
          class="size-12 flex justify-center items-center bg-[#EFEFEF] rounded-full mb-2"
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.5 4.01038C14.4797 4.01038 12.0312 6.45882 12.0312 9.47913C12.0312 12.4994 14.4797 14.9479 17.5 14.9479C20.5203 14.9479 22.9688 12.4994 22.9688 9.47913C22.9688 6.45882 20.5203 4.01038 17.5 4.01038ZM9.84375 9.47913C9.84375 5.2507 13.2716 1.82288 17.5 1.82288C21.7284 1.82288 25.1562 5.2507 25.1562 9.47913C25.1562 13.7076 21.7284 17.1354 17.5 17.1354C13.2716 17.1354 9.84375 13.7076 9.84375 9.47913Z"
              fill="#616161"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.198 27.0833C6.198 22.7973 9.67246 19.3229 13.9584 19.3229H21.0417C25.3277 19.3229 28.8022 22.7973 28.8022 27.0833C28.8022 30.4488 26.0739 33.177 22.7084 33.177H12.2917C8.92626 33.177 6.198 30.4488 6.198 27.0833ZM13.9584 21.5104C10.8806 21.5104 8.3855 24.0055 8.3855 27.0833C8.3855 29.2407 10.1344 30.9895 12.2917 30.9895H22.7084C24.8658 30.9895 26.6147 29.2407 26.6147 27.0833C26.6147 24.0055 24.1196 21.5104 21.0417 21.5104H13.9584Z"
              fill="#616161"
            />
          </svg>
        </div>
        {{ userData.fname || 'بدون' }} {{ userData?.lname || 'نام' }}
      </section>
      <ul class="mt-4 space-y-[1px]">
        <li v-if="userData.role == 'ADMIN'">
          <NuxtLink
            @click="visible = false"
            to="/admin"
            class="p-3 bg-white flex justify-between items-center rounded-t-2xl"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.25 8C1.25 4.27208 4.27208 1.25 8 1.25H16C19.7279 1.25 22.75 4.27208 22.75 8V16C22.75 19.7279 19.7279 22.75 16 22.75H8C4.27208 22.75 1.25 19.7279 1.25 16V8ZM8 2.75C5.10051 2.75 2.75 5.10051 2.75 8V16C2.75 18.8995 5.10051 21.25 8 21.25H16C18.8995 21.25 21.25 18.8995 21.25 16V8C21.25 5.10051 18.8995 2.75 16 2.75H8Z"
                  fill="#616161"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 7.00732C12.4142 7.00732 12.75 7.34311 12.75 7.75732L12.75 16.2426C12.75 16.6568 12.4142 16.9926 12 16.9926C11.5857 16.9926 11.25 16.6568 11.25 16.2426L11.25 7.75731C11.25 7.3431 11.5858 7.00731 12 7.00732Z"
                  fill="#616161"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.9999 12C16.9999 12.4142 16.6641 12.75 16.2499 12.75L7.76464 12.75C7.35043 12.75 7.01464 12.4142 7.01464 12C7.01465 11.5857 7.35043 11.25 7.76465 11.25L16.2499 11.25C16.6641 11.25 16.9999 11.5858 16.9999 12Z"
                  fill="#616161"
                />
              </svg>
              پنل ادمین
            </div>
            <DrawerArrow />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            @click="visible = false"
            to="/orders"
            class="p-3 bg-white flex justify-between items-center"
            :class="{ 'rounded-t-2xl': userData.role != 'ADMIN' }"
          >
            <div class="flex items-center gap-2">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0.75C0 0.335786 0.335786 0 0.75 0H18.75C19.1642 0 19.5 0.335786 19.5 0.75C19.5 1.16421 19.1642 1.5 18.75 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75Z"
                  fill="#616161"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.5 14.25C6.5 13.8358 6.83579 13.5 7.25 13.5H12.25C12.6642 13.5 13 13.8358 13 14.25C13 14.6642 12.6642 15 12.25 15H7.25C6.83579 15 6.5 14.6642 6.5 14.25Z"
                  fill="#616161"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.5 11.25C5.5 10.8358 5.83579 10.5 6.25 10.5H13.25C13.6642 10.5 14 10.8358 14 11.25C14 11.6642 13.6642 12 13.25 12H6.25C5.83579 12 5.5 11.6642 5.5 11.25Z"
                  fill="#616161"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.5 8.25C4.5 7.83579 4.83579 7.5 5.25 7.5H14.25C14.6642 7.5 15 7.83579 15 8.25C15 8.66421 14.6642 9 14.25 9H5.25C4.83579 9 4.5 8.66421 4.5 8.25Z"
                  fill="#616161"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.75 3C2.16421 3 2.5 3.33579 2.5 3.75V15.75C2.5 17.5449 3.95507 19 5.75 19H13.75C15.5449 19 17 17.5449 17 15.75V3.75C17 3.33579 17.3358 3 17.75 3C18.1642 3 18.5 3.33579 18.5 3.75V15.75C18.5 18.3734 16.3734 20.5 13.75 20.5H5.75C3.12665 20.5 1 18.3734 1 15.75V3.75C1 3.33579 1.33579 3 1.75 3Z"
                  fill="#616161"
                />
              </svg>
              خرید و فروش ها
            </div>
            <DrawerArrow />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            @click="visible = false"
            to="/remaining"
            class="p-3 bg-white flex justify-between items-center"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 6.25C6.75816 6.25 6.52888 6.26842 6.31145 6.3041C6.30415 6.3053 6.29684 6.30639 6.2895 6.30737C5.19556 6.4538 4.32635 6.95388 3.72467 7.70685C3.11906 8.46475 2.75 9.52358 2.75 10.8333C2.75 11.2475 2.41421 11.5833 2 11.5833C1.58579 11.5833 1.25 11.2475 1.25 10.8333C1.25 9.24175 1.70094 7.83658 2.55283 6.77048C3.40651 5.70213 4.6283 5.01896 6.07956 4.8221C6.37866 4.77366 6.6857 4.75 7 4.75H17C17.2705 4.75 17.5642 4.7604 17.8613 4.8114C19.3248 4.99743 20.5604 5.67626 21.4256 6.7456C22.2906 7.81478 22.75 9.22942 22.75 10.8333V16.1667C22.75 17.9231 22.199 19.4509 21.1722 20.5463C20.1412 21.646 18.6856 22.25 17 22.25H9.5C9.08579 22.25 8.75 21.9142 8.75 21.5C8.75 21.0858 9.08579 20.75 9.5 20.75H17C18.3144 20.75 19.3588 20.2873 20.0778 19.5204C20.801 18.7491 21.25 17.6102 21.25 16.1667V10.8333C21.25 9.51458 20.8744 8.44921 20.2594 7.68905C19.6483 6.93367 18.7659 6.43507 17.6577 6.29762C17.6446 6.296 17.6317 6.29404 17.6187 6.29174C17.4426 6.26043 17.2435 6.25 17 6.25H7Z"
                  fill="#616161"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.78003 14.93C9.78003 13.7537 8.8264 12.8 7.65003 12.8C6.67534 12.8 5.85356 13.4547 5.60043 14.3483C5.4184 14.3166 5.23115 14.3 5.04003 14.3C4.69511 14.3 4.36277 14.3539 4.05099 14.4538C4.28423 12.6741 5.80667 11.3 7.65003 11.3C9.65482 11.3 11.28 12.9253 11.28 14.93C11.28 16.7734 9.90602 18.2959 8.1263 18.5291C8.22613 18.2173 8.28003 17.885 8.28003 17.54C8.28003 17.3489 8.26348 17.1617 8.23174 16.9796C9.12535 16.7265 9.78003 15.9047 9.78003 14.93Z"
                  fill="#616161"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.77015 15.6801C5.94651 15.6801 6.90015 16.6337 6.90015 17.8101C6.90015 18.9864 5.94651 19.9401 4.77015 19.9401C3.59378 19.9401 2.64015 18.9864 2.64015 17.8101C2.64015 16.6337 3.59378 15.6801 4.77015 15.6801ZM8.40015 17.8101C8.40015 15.8053 6.77494 14.1801 4.77015 14.1801C2.76535 14.1801 1.14015 15.8053 1.14015 17.8101C1.14015 19.8148 2.76535 21.4401 4.77015 21.4401C6.77494 21.4401 8.40015 19.8148 8.40015 17.8101Z"
                  fill="#616161"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.61129 7.06296C2.37353 4.91701 3.8201 2.91654 5.94664 2.68093L15.7912 1.59023C17.9177 1.35462 19.7671 2.98993 20.0049 5.13588L20.094 5.94048L18.6031 6.10565L18.514 5.30105C18.3579 3.89205 17.1756 2.94601 15.9563 3.0811L6.11182 4.17181C4.89253 4.3069 3.94606 5.48878 4.10216 6.89778L2.61129 7.06296Z"
                  fill="#616161"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.25 13.5C15.25 11.9812 16.4812 10.75 18 10.75H21.1429C22.0305 10.75 22.75 11.4695 22.75 12.3571V14.6429C22.75 15.5305 22.0305 16.25 21.1429 16.25H18C16.4812 16.25 15.25 15.0188 15.25 13.5ZM16.75 13.5C16.75 14.1904 17.3096 14.75 18 14.75H21.1429C21.202 14.75 21.25 14.702 21.25 14.6429V12.3571C21.25 12.298 21.202 12.25 21.1429 12.25H18C17.3096 12.25 16.75 12.8096 16.75 13.5Z"
                  fill="#616161"
                />
              </svg>
              مانده حساب
            </div>
            <DrawerArrow />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            @click="visible = false"
            to="/auth"
            class="p-3 bg-white flex justify-between items-center"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.5303 7.21967C19.8232 7.51256 19.8232 7.98744 19.5303 8.28033L11.6112 16.1995C10.5373 17.2734 8.79607 17.2734 7.72213 16.1995L4.46967 12.947C4.17678 12.6541 4.17678 12.1792 4.46967 11.8863C4.76256 11.5934 5.23744 11.5934 5.53033 11.8863L8.78279 15.1388C9.27094 15.6269 10.0624 15.6269 10.5506 15.1388L18.4697 7.21967C18.7626 6.92678 19.2374 6.92678 19.5303 7.21967Z"
                  fill="#616161"
                />
              </svg>
              احراز هویت
            </div>
            <DrawerArrow />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            @click="visible = false"
            to="/deposit"
            class="p-3 bg-white flex justify-between items-center"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.1278 6.18272C21.1276 6.18332 21.1275 6.18392 21.1273 6.18453L17.013 19.3941C16.2487 21.8391 12.8232 21.8799 12.0108 19.4469L12.01 19.4443L10.7875 15.8277C10.3768 14.5746 9.39515 13.6266 8.17816 13.2212C8.17775 13.2211 8.17735 13.221 8.17694 13.2208L4.55221 11.9998C2.12266 11.1856 2.16644 7.74528 4.58179 6.98644C4.58215 6.98632 4.58252 6.98621 4.58289 6.98609L17.8396 2.87828L17.8434 2.87709C19.8553 2.24193 21.755 4.12582 21.1278 6.18272ZM17.3938 1.44605C20.5863 0.43985 23.5345 3.43998 22.5618 6.62293L18.4449 19.8409C17.2516 23.6581 11.8683 23.7518 10.5886 19.9235C10.5884 19.923 10.5882 19.9225 10.5881 19.922L9.36534 16.3046L9.36293 16.2973C9.10562 15.5096 8.48677 14.9048 7.70334 14.6441L7.70072 14.6432L4.07556 13.4221C4.07563 13.4221 4.07549 13.4221 4.07556 13.4221C0.276533 12.1487 0.321192 6.75107 4.13385 5.55487L17.3918 1.44668C17.3925 1.44647 17.3931 1.44626 17.3938 1.44605Z"
                  fill="#616161"
                />
              </svg>
              ارسال فیش
            </div>
            <DrawerArrow />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            @click="visible = false"
            to="/deposit"
            class="p-3 bg-white flex justify-between items-center"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.25 8C1.25 4.27208 4.27208 1.25 8 1.25H16C19.7279 1.25 22.75 4.27208 22.75 8V16C22.75 19.7279 19.7279 22.75 16 22.75H8C4.27208 22.75 1.25 19.7279 1.25 16V8ZM8 2.75C5.10051 2.75 2.75 5.10051 2.75 8V16C2.75 18.8995 5.10051 21.25 8 21.25H16C18.8995 21.25 21.25 18.8995 21.25 16V8C21.25 5.10051 18.8995 2.75 16 2.75H8Z"
                  fill="#616161"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 7.00732C12.4142 7.00732 12.75 7.34311 12.75 7.75732L12.75 16.2426C12.75 16.6568 12.4142 16.9926 12 16.9926C11.5857 16.9926 11.25 16.6568 11.25 16.2426L11.25 7.75731C11.25 7.3431 11.5858 7.00731 12 7.00732Z"
                  fill="#616161"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.9999 12C16.9999 12.4142 16.6641 12.75 16.2499 12.75L7.76464 12.75C7.35043 12.75 7.01464 12.4142 7.01464 12C7.01465 11.5857 7.35043 11.25 7.76465 11.25L16.2499 11.25C16.6641 11.25 16.9999 11.5858 16.9999 12Z"
                  fill="#616161"
                />
              </svg>
              ثبت حواله
            </div>
            <DrawerArrow />
          </NuxtLink>
        </li>
        <li>
          <button
            @click=";(visible = false), (visibleRoles = true)"
            class="p-3 bg-white flex justify-between items-center w-full"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.25 7C2.25 3.82436 4.82436 1.25 8 1.25H16C19.1756 1.25 21.75 3.82436 21.75 7V17C21.75 20.1756 19.1756 22.75 16 22.75H8C4.82436 22.75 2.25 20.1756 2.25 17V7ZM8 2.75C5.65279 2.75 3.75 4.65279 3.75 7V17C3.75 19.3472 5.65279 21.25 8 21.25H16C18.3472 21.25 20.25 19.3472 20.25 17V7C20.25 4.65279 18.3472 2.75 16 2.75H8Z"
                  fill="#616161"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.25 8.19995C7.25 7.78574 7.58579 7.44995 8 7.44995H16C16.4142 7.44995 16.75 7.78574 16.75 8.19995C16.75 8.61416 16.4142 8.94995 16 8.94995H8C7.58579 8.94995 7.25 8.61416 7.25 8.19995Z"
                  fill="#616161"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.25 12.2C7.25 11.7857 7.58579 11.45 8 11.45H16C16.4142 11.45 16.75 11.7857 16.75 12.2C16.75 12.6142 16.4142 12.95 16 12.95H8C7.58579 12.95 7.25 12.6142 7.25 12.2Z"
                  fill="#616161"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.25 16.2C8.25 15.7857 8.58579 15.45 9 15.45H15C15.4142 15.45 15.75 15.7857 15.75 16.2C15.75 16.6142 15.4142 16.95 15 16.95H9C8.58579 16.95 8.25 16.6142 8.25 16.2Z"
                  fill="#616161"
                />
              </svg>
              قوانین و مقررات
            </div>
            <DrawerArrow />
          </button>
        </li>
        <li>
          <button
            @click=";(visible = false), (visibleAbout = true)"
            class="p-3 bg-white flex justify-between items-center w-full rounded-b-2xl"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.23608 11.1035C1.23608 5.36145 6.07442 0.763794 11.9861 0.763793C14.2425 0.763793 16.332 1.42282 18.0729 2.58622C20.8864 4.43202 22.7361 7.55138 22.7361 11.1035C22.7361 14.2062 21.3192 16.9816 19.0723 18.8611C19.1675 18.9783 19.269 19.1077 19.3709 19.2449C19.5792 19.5252 19.8006 19.853 19.973 20.1858C20.1352 20.4989 20.3017 20.9047 20.3017 21.3174C20.3017 22.0128 19.8871 22.5508 19.4095 22.861C18.9305 23.172 18.3029 23.318 17.6891 23.1896C16.4766 22.9359 14.9798 22.4798 13.8033 22.0942C13.2114 21.9002 12.6935 21.7217 12.3235 21.5917C12.1384 21.5267 11.9901 21.4737 11.8877 21.4368L11.8521 21.4239C8.48258 21.3844 5.4687 19.8567 3.55054 17.4736C2.10176 15.7239 1.23608 13.5058 1.23608 11.1035ZM12.2446 19.9707L12.2537 19.974L12.2825 19.9845L12.3958 20.0255C12.4949 20.0612 12.6396 20.1129 12.8208 20.1765C13.1832 20.3039 13.6908 20.4789 14.2705 20.6688C15.4373 21.0513 16.8689 21.4855 17.9962 21.7213C18.1925 21.7624 18.4194 21.7153 18.5925 21.6029C18.7669 21.4897 18.8017 21.374 18.8017 21.3174C18.8017 21.2727 18.7725 21.1294 18.6412 20.8759C18.52 20.642 18.35 20.3859 18.1669 20.1395C17.9858 19.8958 17.803 19.6763 17.6646 19.517C17.5957 19.4378 17.5387 19.3744 17.4995 19.3314C17.4799 19.31 17.4648 19.2937 17.455 19.2831L17.4443 19.2717L17.4421 19.2694C17.2926 19.1118 17.2187 18.8972 17.2396 18.6809C17.2605 18.4647 17.3741 18.2682 17.551 18.1422C19.8029 16.5385 21.2361 13.9797 21.2361 11.1035C21.2361 8.08955 19.6689 5.42615 17.2476 3.83878L17.2419 3.83502C15.747 2.83535 13.9466 2.26379 11.9861 2.26379C6.8432 2.26379 2.73608 6.2483 2.73608 11.1035C2.73608 13.1397 3.46896 15.0247 4.70895 16.5207L4.71611 16.5293C6.37274 18.5898 9.01167 19.9247 11.9861 19.9247C12.0743 19.9247 12.1618 19.9403 12.2446 19.9707C12.2446 19.9707 12.2446 19.9707 12.2446 19.9707Z"
                  fill="#616161"
                />
              </svg>
              درباره ی ما
            </div>
            <DrawerArrow />
          </button>
        </li>
      </ul>
      <div class="absolute bottom-3 right-0 p-5 w-full">
        <button
          class="bg-[#E8436233] w-full px-3 py-2 text-[#E84362] border border-[#E84362] text-center rounded-2xl"
          @click="showDialog"
        >
          خروج از حساب
        </button>
      </div>
    </Drawer>

    <Drawer
      v-model:visible="visibleRoles"
      header="قوانین و مقررات"
      position="bottom"
      style="height: auto"
    >
      <div class="flex items-center gap-2 mb-2">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.60425 25C2.60425 12.6311 12.6312 2.60413 25.0001 2.60413C37.369 2.60413 47.3959 12.6311 47.3959 25C47.3959 37.3688 37.369 47.3958 25.0001 47.3958C12.6312 47.3958 2.60425 37.3688 2.60425 25Z"
            fill="#E3C78E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25 13.0208C25.8629 13.0208 26.5625 13.7203 26.5625 14.5833L26.5625 29.3846C26.5625 30.2475 25.8629 30.9471 25 30.9471C24.1371 30.9471 23.4375 30.2475 23.4375 29.3846L23.4375 14.5833C23.4375 13.7203 24.1371 13.0208 25 13.0208Z"
            fill="#966D22"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.9168 35.4166C22.9168 34.266 23.8495 33.3333 25.0001 33.3333H25.0209C26.1715 33.3333 27.1043 34.266 27.1043 35.4166C27.1043 36.5672 26.1715 37.4999 25.0209 37.4999H25.0001C23.8495 37.4999 22.9168 36.5672 22.9168 35.4166Z"
            fill="black"
          />
        </svg>
        <div>
          <h3 class="font-bold">
            {{ settings?.introPage.title }}
          </h3>
          <p class="text-xs">شرایط و قوانین استفاده از سرویس ها و خدمات</p>
        </div>
      </div>
      <p
        class="max-h-52 overflow-auto p-3 border border-strokesec rounded-10 bg-[#FAFAFA]"
      >
        {{ settings?.generalSettings.termsText }}
      </p>
    </Drawer>
    <Drawer
      v-model:visible="visibleAbout"
      header="درباره ما"
      position="bottom"
      style="height: auto"
    >
      <div class="flex items-center gap-2 mb-2">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.60425 25C2.60425 12.6311 12.6312 2.60413 25.0001 2.60413C37.369 2.60413 47.3959 12.6311 47.3959 25C47.3959 37.3688 37.369 47.3958 25.0001 47.3958C12.6312 47.3958 2.60425 37.3688 2.60425 25Z"
            fill="#E3C78E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25 13.0208C25.8629 13.0208 26.5625 13.7203 26.5625 14.5833L26.5625 29.3846C26.5625 30.2475 25.8629 30.9471 25 30.9471C24.1371 30.9471 23.4375 30.2475 23.4375 29.3846L23.4375 14.5833C23.4375 13.7203 24.1371 13.0208 25 13.0208Z"
            fill="#966D22"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.9168 35.4166C22.9168 34.266 23.8495 33.3333 25.0001 33.3333H25.0209C26.1715 33.3333 27.1043 34.266 27.1043 35.4166C27.1043 36.5672 26.1715 37.4999 25.0209 37.4999H25.0001C23.8495 37.4999 22.9168 36.5672 22.9168 35.4166Z"
            fill="black"
          />
        </svg>
        <div>
          <h3 class="font-bold">
            {{ settings.introPage.title }}
          </h3>
          <p class="text-xs">درباره مجموعه ی ما</p>
        </div>
      </div>
      <p
        class="max-h-52 overflow-auto p-3 border border-strokesec rounded-10 bg-[#FAFAFA]"
      >
        {{ settings.generalSettings.aboutUs }}
      </p>
    </Drawer>
    <Drawer
      position="bottom"
      v-model:visible="dialogVisible"
      modal
      header="خروج از حساب"
      style="height: auto"
    >
      <span class="text-surface-500 dark:text-surface-400 block mb-8"
        >آیا میخواهید از حساب خود خارج شوید؟</span
      >
      <div class="grid grid-cols-2 gap-2">
        <Button
          type="button"
          label="خیر"
          severity="secondary"
          @click="dialogVisible = false"
        />
        <Button
          type="button"
          label="بله"
          @click="logout"
          pt:root="!bg-red-500"
        />
      </div>
    </Drawer>
  </header>
</template>

<script setup>
let { settings } = useSettings()
let { userData } = userAuth()

let route = useRoute()

let visible = ref(false)

let visibleRoles = ref(false)
let visibleAbout = ref(false)

let dialogVisible = ref(false)

function backBtn () {
  return navigateTo('/')
}

function showDialog () {
  visible.value = false
  dialogVisible.value = true
}

async function logout () {
  let data = await $fetch('/api/logout')
  visible.value = false
  dialogVisible.value = false
  return navigateTo('/auth/login')
}
</script>
