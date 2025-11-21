<template>
  <!-- <div class="w-full max-w-[530px] bg-transparent"> -->
  <div class="rounded-2xl p-3">
    <TitleSection title="کاربران" />
    <div
      class="grid grid-cols-3 items-center mt-3 text-sm text-slate-500 gap-2"
    >
      <p class="justify-self-start min-w-[44px]">203</p>
      <NuxtLink
        to="/admin/users/add"
        class="justify-self-center px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg shadow-sm"
      >
        افزودن حساب
      </NuxtLink>
      <p class="justify-self-end min-w-[88px]">
        تعداد صفحات : <span class="font-medium">5</span>
      </p>
    </div>
    <div class="my-3">
      <div class="relative">
        <input
          type="search"
          aria-label="جستجو"
          placeholder="جستجو..."
          class="w-full rounded-xl bg-white border border-gray-100 py-3 pr-12 pl-4 text-sm text-right placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
        />
        <button
          type="submit"
          aria-label="جستجو"
          class="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-slate-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </button>
      </div>
    </div>
    <main class="space-y-3 max-w-3xl mx-auto">
      <AdminUsersUserCard
        v-for="item in data"
        :data="item"
        :key="item"
        @success="refreshUsers"
      />
    </main>
    <Toast />
  </div>
</template>

<script setup>
let { showToast } = useToastComp()

let { data, refresh } = await useFetch('/api/admin/users/getUsers', {
  credentials: 'include'
})

function refreshUsers (text) {
  showToast(text)
  refresh()
}
</script>
