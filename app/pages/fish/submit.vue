<template>
  <TitleSection title="ارسال فیش" />

  <main class="space-y-4 bg-white rounded-xl p-3">
    <FishNavLinks />
    <div class="p-3">
      <!-- فرم ارسال -->
      <div class="bg-gray-50 rounded-2xl p-4 border border-gray-200">
        <label class="block text-sm mb-2">فایل</label>
        <input
          type="file"
          accept="image/*"
          class="file-input file-input-ghost"
          @change="handleFiles"
        />

        <div class="mt-5 text-slate-600 text-sm text-right">
          اطلاعات تکمیلی (اختیاری)
        </div>

        <div class="mt-3">
          <input
            id="title"
            type="text"
            placeholder="عنوان"
            class="w-full bg-gray-100 rounded-xl py-3 px-4 text-sm placeholder:text-slate-400 text-slate-700 focus:outline-none text-right"
            v-model="data.title"
          />
        </div>

        <div class="mt-3">
          <textarea
            id="desc"
            placeholder="توضیحات"
            rows="4"
            class="w-full bg-gray-100 rounded-xl py-3 px-4 text-sm placeholder:text-slate-400 text-slate-700 focus:outline-none resize-none text-right"
            v-model="data.description"
          ></textarea>
        </div>
        <div class="mt-4">
          <Button
            class="w-full py-3 rounded-xl bg-[#68C4FD] text-white text-sm font-medium hover:bg-[#5ab2eb] transition"
            label="ارسال"
            :loading="loading"
            @click="submitFish"
          />
        </div>
      </div>
    </div>
    <Toast />
  </main>
</template>

<script setup>
useHead({
  title: 'ثبت فیش |'
})

let { showToast } = useToastComp()

let data = reactive({
  title: '',
  description: '',
  file: ''
})

let loading = ref(false)

function handleFiles (e) {
  const file = e.target.files[0]
  data.file = file
}

async function submitFish () {
  if (!data.file)
    showToast('warn', 'اخطار', 'باید یک فایل جهت ارسال فیش انتخاب کنید')
  else {
    loading.value = true

    try {
      let formData = new FormData()
      formData.append('title', data.title)
      formData.append('description', data.description)
      if (data.file) {
        formData.append('file', data.file)
      }

      let response = await $fetch('/api/user/fish/submit', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      })

      showToast(response.message)
      for (let f in data) data[f] = ''
    } catch (err) {
      showToast('error', 'خطا', err.message)
    } finally {
      loading.value = false
    }
  }
}
</script>
