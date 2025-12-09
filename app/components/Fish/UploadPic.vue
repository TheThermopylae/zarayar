<template>
  <div>
    <input
      type="file"
      ref="fileInput"
      class="hidden"
      @change="handleFile"
      accept="image/*"
    />
    <button
      @click="triggerFileInput"
      class="bg-[#B4DB8C] rounded-10 py-3 text-center w-full"
    >
      انتخاب فایل
    </button>
  </div>
</template>

<script setup>
const fileInput = ref(null)

let emit = defineEmits(['selectedFile'])

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleFile = event => {
  const file = event.target.files[0]
  emit('selectedFile', file)
}
</script>
