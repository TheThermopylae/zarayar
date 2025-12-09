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
      <h1 class="font-bold text-[#616161]">{{ route.meta.title }}</h1>
    </div>
    <div class="flex items-center gap-3">
      <NuxtLink
        to="/"
        class="border border-cgreen text-cgreen px-1.5 py-1 text-2sm rounded-10 hover:bg-cgreen hover:text-white transition"
      >
        مدیر آنلاین
      </NuxtLink>
      <NuxtLink to="/">
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
    <Drawer v-model:visible="visible" header="Right Drawer" position="right">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </Drawer>
  </header>
</template>

<script setup>
let route = useRoute()

let visible = ref(false)

function backBtn () {
  history.back()
}
</script>
