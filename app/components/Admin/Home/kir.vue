<template>
  <div
    class="flex justify-between flex-wrap gap-2 bg-[#E0E5BE] opacity-100 w-full sm:w-[500px] p-3 rounded-10 font-sans"
  >
    <p class="text-sm">خرید | کمیل ملکی 50 گرم | مظنه 623،320،523 ریال</p>
    <div class="flex gap-2 font-bold">
      <button
        class="bg-white text-cgreen p-2 rounded-10 text-xs w-[40px] text-center"
        @click="$emit('confirm')"
      >
        تایید
      </button>
      <button
        class="bg-white text-cred p-2 rounded-10 text-xs w-[40px] text-center"
        @click="$emit('close')"
      >
        لغو
      </button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['confirm', 'close'])
</script>
