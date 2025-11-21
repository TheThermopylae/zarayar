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
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          d="M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4zM3 6.5A1.5 1.5 0 0 1 4.5 5h11A1.5 1.5 0 0 1 17 6.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 13.5zM4.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm.5 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z"
        />
      </svg>
      <span class="text-sm text-gray-700">تصویر جواز کسب</span>
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
