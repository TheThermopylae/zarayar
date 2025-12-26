<template>
  <TitleSection title="ارسال اعلان" />
  <form @submit.prevent class="bg-white p-3 rounded-10 text-sm">
    <div>
      <label for="title">عنوان:</label>
      <input
        type="text"
        id="title"
        class="w-full block mt-2 bg-gray-100 rounded-10 p-2"
        v-model="data.title"
      />
    </div>
    <div class="my-3">
      <label for="text">متن:</label>
      <textarea
        id="text"
        class="w-full block mt-2 bg-gray-100 rounded-10 p-2"
        v-model="data.text"
      ></textarea>
    </div>
    <div class="my-3">
      <label for="text">ارسال برای:</label>
      <div class="grid grid-cols-2 gap-2 mt-2">
        <Button label="همه" @click="data.member = 'users'">
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 15 15"
              v-if="data.member == 'users'"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="square"
                d="m1 7l4.5 4.5L14 3"
                stroke-width="1"
              />
            </svg>
          </template>
        </Button>
        <Button label="کاربر" @click="data.member = 'user'">
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 15 15"
              v-if="data.member == 'user'"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="square"
                d="m1 7l4.5 4.5L14 3"
                stroke-width="1"
              />
            </svg>
          </template>
        </Button>
      </div>
    </div>
    <Select
      v-if="data.member == 'user'"
      v-model="data.userid"
      :options="users"
      optionLabel="_id"
      placeholder="کاربر را انتخاب کنید"
      pt:root="w-full !border-none !bg-gray-100 !rounded-10 !mb-2"
      pt:label="!text-sm"
    />
    <div class="border-t border-gray-300 mt-3 pt-3">
      <Button label="ارسال" @click="sendNotifFunc" pt:root="w-full" />
    </div>
  </form>
</template>

<script setup>
// let sendFor = ref('users')

let { data: users } = await useFetch('/api/admin/users/getUsers', {
  credentials: 'include'
})

 
let data = reactive({
  member: 'users',
  title: '',
  text: ''
})

async function sendNotifFunc () {
  let result = await $fetch('/api/admin/notifs/sendNotif', {
    credentials: 'include',
    method: 'POST',
    body: data
  })

  console.log(result)
}
</script>
