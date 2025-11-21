<template>
  <TitleSection :title="user.phone" />
  <section class="flex justify-between items-center bg-white p-3 rounded-10">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6H21"
        stroke="#232323"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M3 12H21"
        stroke="#232323"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M3 18H21"
        stroke="#232323"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
    لیست آیتم ها
    <div></div>
  </section>
  <section class="my-2 p-3 bg-white rounded-10" v-if="buySellLinks">
    <div class="grid grid-cols-2 gap-3">
      <div class="text-center text-green-700">
        {{ buySellLinks.item }}
        <NuxtLink
          :to="{
            path: `/admin/users/items/buy-sell/${buySellLinks._id}`,
            query: { side: 'buy', user: user._id }
          }"
          class="bg-green-200 block w-full p-2 rounded-10 mt-1"
          >خرید</NuxtLink
        >
      </div>
      <div class="text-center text-red-700">
        {{ buySellLinks.item }}
        <NuxtLink
          :to="{
            path: `/admin/users/items/buy-sell`,
            query: { side: 'sell', user: user._id }
          }"
          class="bg-red-200 block w-full p-2 rounded-10 mt-1"
          >فروش</NuxtLink
        >
      </div>
    </div>
  </section>
  <section class="p-3 rounded-10 bg-white grid grid-cols-2 gap-2">
    <div
      class="bg-gray-100 flex gap-2 items-center rounded-xl px-3 py-3 cursor-pointer"
      v-for="item in data"
      :key="item._id"
      @click="buySellLinks = item"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        v-if="item.itemType == 'gold'"
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
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        v-else
      >
        <path
          d="M12.45 5.15998C12.45 6.62905 10.2383 7.81996 7.51003 7.81996C4.78176 7.81996 2.57007 6.62905 2.57007 5.15998C2.57007 3.69091 4.78176 2.5 7.51003 2.5C10.2383 2.5 12.45 3.69091 12.45 5.15998Z"
          stroke="#D5AA51"
          stroke-width="1.44299"
        />
        <path
          d="M7.51003 12.3796C10.2383 12.3796 12.45 11.1887 12.45 9.71963V5.15967C12.45 6.62873 10.2383 7.81965 7.51003 7.81965C4.78176 7.81965 2.57007 6.62873 2.57007 5.15967V9.71963C2.57007 11.1887 4.78176 12.3796 7.51003 12.3796Z"
          stroke="#D5AA51"
          stroke-width="1.44299"
        />
        <path
          d="M7.51003 16.9397C10.2383 16.9397 12.45 15.7488 12.45 14.2797V9.71973C12.45 11.1888 10.2383 12.3797 7.51003 12.3797C4.78176 12.3797 2.57007 11.1888 2.57007 9.71973V14.2797C2.57007 15.7488 4.78176 16.9397 7.51003 16.9397Z"
          stroke="#D5AA51"
          stroke-width="1.44299"
        />
        <path
          d="M7.51003 21.4997C10.2383 21.4997 12.45 20.3088 12.45 18.8397V14.2798C12.45 15.7489 10.2383 16.9398 7.51003 16.9398C4.78176 16.9398 2.57007 15.7489 2.57007 14.2798V18.8397C2.57007 20.3088 4.78176 21.4997 7.51003 21.4997Z"
          stroke="#D5AA51"
          stroke-width="1.44299"
        />
        <circle
          cx="17.1432"
          cy="17.2252"
          r="4.275"
          stroke="#D5AA51"
          stroke-width="1.5"
        />
      </svg>
      <span class="text-sm text-gray-700">{{ item.item }}</span>
    </div>
  </section>
</template>

<script setup>
let route = useRoute()

let { data: user } = await useFetch('/api/admin/users/getEditUser', {
  credentials: 'include',
  method: 'POST',
  body: { id: route.params.id }
})

let { data } = await useFetch('/api/admin/wallet/getWallet', {
  credentials: 'include',
  method: 'POST',
  body: { id: route.params.id }
})

console.log(data.value)

let buySellLinks = ref(null)
</script>
