<template>
  <div
    class="flex gap-2 items-center bg-transparent rounded-xl mb-4 text-center"
  >
    <NuxtLink
      to="/fish/submit"
      class="flex-1 py-3 rounded-xl bg-white border border-gray-300 text-gray-600 text-sm font-medium"
      activeClass="!bg-gray-300"
    >
      ثبت فیش
    </NuxtLink>
    <NuxtLink
      to="/fish"
      class="flex-1 py-3 rounded-xl bg-white border border-gray-300 text-gray-600 text-sm font-medium"
      activeClass="!bg-gray-300"
    >
      فیش های من
    </NuxtLink>
  </div>
</template>
