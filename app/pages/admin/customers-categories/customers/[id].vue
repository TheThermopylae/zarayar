<template>
  <div class="space-y-3">
    <div class="pb-3 border-stroke" :class="{ 'border-b': users.length > 0 }">
      <MultiSelect
        v-model="selectUsers"
        :options="getUsers"
        pt:root="w-full !rounded-10 !bg-white !shadow-none !border-[#00000026]"
        pt:label="!text-graydark"
        filter
        placeholder="کاربران را انتخاب کنید"
        :maxSelectedLabels="5"
        optionLabel="lname"
        option-value="_id"
      >
        <template #dropdownicon>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="30" height="30" rx="10" fill="#F5F7FA" />
            <rect
              x="0.5"
              y="0.5"
              width="29"
              height="29"
              rx="9.5"
              stroke="black"
              stroke-opacity="0.1"
            />
            <path
              d="M10.5417 12.2051L14.4716 16.3533C15.0304 16.9431 15.9697 16.9431 16.5285 16.3533L20.4584 12.2051"
              stroke="#616161"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </template>
      </MultiSelect>
      <Button
        label="ثبت"
        :loading="loading"
        pt:root="w-full !mt-3"
        @click="
          submit('کاربران انتخاب شده با موفقیت اضافه شدند', {
            ...data,
            user: selectUsers
          })
        "
        :disabled="selectUsers.length <= 0"
      />
    </div>

    <AdminCategoriesCustomerCard
      v-for="(item, index) in users"
      :data="item"
      :key="item._id"
      @removeCustomer="removeUser(index)"
    />
    <Toast />
  </div>
</template>

<script setup>
useHead({
  title: 'ویرایش دسته بندی'
})

definePageMeta({
  title: 'ویرایش دسته بندی'
})

let { showToast } = useToastComp()

let route = useRoute()

let { data: getUsers } = await useFetch('/api/admin/users/getUsers', {
  credentials: 'include'
})

let { data, refresh } = await useFetch('/api/admin/customers/getOneCategory', {
  credentials: 'include',
  method: 'POST',
  body: { id: route.params.id }
})

let selectUsers = ref([])
let users = ref(data.value.users)

let loading = ref(false)

async function submit (text, body) {
  try {
    loading.value = true

    let result = await $fetch('/api/admin/customers/updateCategory', {
      credentials: 'include',
      method: 'POST',
      body
    })

    await refresh()
    users.value = data.value.user
    showToast(text)
  } catch (err) {
    showToast('error', 'خطا', err.data.message)
  } finally {
    loading.value = false
  }
}

async function removeUser (index, _id) {
  users.value.splice(index, 1)
  await submit('کاربر از لیست مشتریان دسته بندی حذف شد', {
    ...data.value,
    user: users.value
  })
}
</script>
