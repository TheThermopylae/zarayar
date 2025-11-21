<template>
  <TitleSection title="ثبت حواله" />
  <main class="space-y-4 bg-white rounded-xl p-3">
    <div class="p3">
      <HavaleNavLinks />
      <div class="bg-gray-50 rounded-2xl p-5 border border-gray-200 space-y-4">
        <h2
          class="text-sm text-[#7A8325] font-medium text-center border-b border-gray-200 pb-3"
        >
          اطلاعات تکمیلی حواله
        </h2>
        <div class="text-sm text-slate-500 text-right mt-2">
          اطلاعات تکمیلی (اختیاری)
        </div>

        <div class="relative">
          <Select
            v-model="data.itemType"
            :options="items"
            placeholder="آیتم مورد نظر"
            optionLabel="fa"
            pt:root="w-full !border-none !bg-gray-100 !text-sm !rounded-xl h-[44px]"
            pt:label="!flex !items-center !text-gray-600 !text-sm"
          />
        </div>

        <input
          type="text"
          placeholder="وزن"
          class="w-full bg-gray-100 rounded-xl py-3 px-4 text-sm text-gray-600 placeholder:text-gray-600 focus:outline-none text-right"
          v-model="data.weight"
        />

        <input
          type="text"
          placeholder="نام تحویل گیرنده"
          class="w-full bg-gray-100 rounded-xl py-3 px-4 text-sm text-gray-600 placeholder:text-gray-600 focus:outline-none text-right"
          v-model="data.receiverName"
        />

        <textarea
          rows="4"
          placeholder="توضیحات (اختیاری)"
          class="w-full bg-gray-100 rounded-xl py-3 px-4 text-sm text-gray-600 placeholder:text-gray-600 focus:outline-none resize-none text-right"
          v-model="data.description"
        ></textarea>
        <input
          type="file"
          accept="image/*"
          class="file-input file-input-ghost"
          @change="handleFiles"
        />
        <Button
          class="w-full !rounded-xl !bg-[#68C4FD] !text-sm hover:!bg-[#5ab5ec] !border-none"
          label="ثبت حواله"
          @click="submitHavale"
          :loading="loading"
        />
      </div>
    </div>
    <Toast />
  </main>
</template>

<script setup>
useHead({
  title: 'ثبت حواله |'
})

let items = ref([
  { fa: 'طلا', en: 'gold' },
  { fa: 'سکه', en: 'coin' },
  { fa: 'نقره', en: 'silver' }
])

let { showToast } = useToastComp()

let data = reactive({
  itemType: '',
  weight: '',
  receiverName: '',
  description: '',
  file: ''
})

let loading = ref(false)

function handleFiles (e) {
  const file = e.target.files[0]
  data.file = file
}

async function submitHavale () {
  if (!data.itemType || !data.weight || !data.receiverName || !data.file)
    showToast('warn', 'اخطار', 'باید فیلد های اجباری را پر کنید')
  else {
    loading.value = true

    try {
      let formData = new FormData()
      formData.append('itemType', data.itemType.en)
      formData.append('weight', data.weight)
      formData.append('receiverName', data.receiverName)
      formData.append('description', data.description)

      if (data.file) {
        formData.append('file', data.file)
      }

      let response = await $fetch('/api/user/havale/submit', {
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
