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
      v-if="!props.img"
      @click="triggerFileInput"
      class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-xl py-4 hover:bg-gray-50 transition w-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M16.5 21.936h-9a2.5 2.5 0 0 1-2.5-2.5V4.564a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v14.872a2.5 2.5 0 0 1-2.5 2.5m-9-18.872a1.5 1.5 0 0 0-1.5 1.5v14.872a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V4.564a1.5 1.5 0 0 0-1.5-1.5Z"
        />
        <path
          fill="currentColor"
          d="M12 12.563a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5m0-6a2.5 2.5 0 1 0 2.5 2.5a2.5 2.5 0 0 0-2.5-2.5m3 11.875H9a.5.5 0 0 1 0-1h6a.5.5 0 1 1 0 1"
        />
      </svg>
      <span class="text-sm text-gray-700">تصویر شناسنامه</span>
    </button>
    <img
      @click="triggerFileInput"
      v-else
      :src="props.img"
      alt="back id card img"
      class="w-full h-[109px] rounded-xl cursor-pointer"
    />
  </div>
</template>

<script setup>
const fileInput = ref(null)

let props = defineProps(['img'])
let emit = defineEmits(['selectedFile'])

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleFile = event => {
  const file = event.target.files[0]
  emit('selectedFile', file)
}
</script>
