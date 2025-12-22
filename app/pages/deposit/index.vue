<template>
  <main>
    <div>
      <!-- فرم ارسال -->
      <div class="bg-[#FAFAFA] rounded-2xl p-4 border border-[#0000001A] mb-5">
        <FishUploadPic
          @selectedFile="selectFileFunc"
          :img="showImg"
        ></FishUploadPic>

        <div class="mt-3">
          <input
            id="title"
            type="text"
            placeholder="عنوان"
            class="w-full bg-white border border-stroke rounded-xl py-3 px-4 text-sm text-slate-700 placeholder:text-slate-700 focus:outline-none text-right"
            v-model="form.title"
          />
        </div>

        <div class="mt-3">
          <textarea
            id="desc"
            placeholder="توضیحات"
            rows="4"
            class="w-full bg-white border border-stroke rounded-xl py-3 px-4 text-sm text-slate-700 placeholder:text-slate-700 focus:outline-none resize-none text-right"
            v-model="form.description"
          ></textarea>
        </div>
        <div class="mt-4">
          <Button
            class="w-full !rounded-xl !bg-secondary"
            label="ارسال"
            :loading="loading"
            @click="submitFish"
          />
        </div>
      </div>
    </div>
    <section>
      <div class="flex justify-between items-center text-graydark text-xs mb-2">
        <div class="flex items-center gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 5.83332C2.5 3.53214 4.36548 1.66666 6.66667 1.66666H13.3333C15.6345 1.66666 17.5 3.53214 17.5 5.83332V14.1667C17.5 16.4678 15.6345 18.3333 13.3333 18.3333H6.66667C4.36548 18.3333 2.5 16.4678 2.5 14.1667V5.83332Z"
              stroke="#BFBFBF"
              stroke-width="1.5"
            />
            <path
              d="M6.66675 6.83328H13.3334"
              stroke="#BFBFBF"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66675 10.1666H13.3334"
              stroke="#BFBFBF"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 13.5H12.5"
              stroke="#BFBFBF"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h2>فیش های ثبت شده اخیر</h2>
        </div>
        <NuxtLink to="/" class="flex items-center gap-2">
          مشاهده بیشتر
          <svg
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.80052 9.5L1.14032 6.03244C0.619894 5.53941 0.619893 4.71059 1.14032 4.21756L4.80052 0.75"
              stroke="#BFBFBF"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </NuxtLink>
      </div>
      <Skeleton
        width="100%"
        height="5rem"
        class="mb-2"
        v-for="item in 5"
        :key="item"
        v-if="pending"
      />
      <FishCard
        v-for="item in data"
        :key="item._id"
        :data="item"
        v-else-if="!pending && data.length > 0"
      />
      <p v-else class="text-center text-xs text-graydark">فیش ای وجود ندارد</p>
    </section>
    <Toast />
  </main>
</template>

<script setup>
useHead({
  title: 'ارسال فیش |'
})

definePageMeta({
  title: 'ارسال فیش'
})

let { data, refresh, pending } = await useFetch('/api/user/fish/getFish', {
  credentials: 'include'
})

let { showToast } = useToastComp()

let form = reactive({
  title: '',
  description: '',
  file: ''
})

let loading = ref(false)

let showImg = ref(null)

function selectFileFunc (item) {
  if (!item) return

  form.file = item

  if (item instanceof File) {
    const reader = new FileReader()

    reader.onload = e => {
      showImg.value = e.target.result
    }

    reader.onerror = error => {
      console.error('Error converting file to Base64:', error)
      showToast('error', 'خطا', 'تبدیل تصویر با مشکل مواجه شد')
    }

    reader.readAsDataURL(item)
  } else if (typeof item === 'string') {
    showImg.value = item
  }
}

async function submitFish () {
  if (!form.file || !form.title || !form.description)
    showToast(
      'warn',
      'اخطار',
      'باید تمامی فیلد ها را پر و یک فایل را انتخاب کنید'
    )
  else {
    loading.value = true

    try {
      let formData = new FormData()
      formData.append('title', form.title)
      formData.append('description', form.description)
      formData.append('file', form.file)

      let response = await $fetch('/api/user/fish/submit', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      })

      await refresh()
      showToast(response.message)
      for (let f in form) form[f] = ''
      showImg.value = null
    } catch (err) {
      showToast('error', 'خطا', err.message)
    } finally {
      loading.value = false
    }
  }
}
</script>
