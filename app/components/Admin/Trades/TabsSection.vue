<template>
  <section class="mb-3 flex justify-between gap-2">
    <button
      class="px-2.5 py-2 border border-strokesec rounded-10 flex-grow transition"
      :class="{ 'bg-secondary border-secondary text-white': tab == 0 }"
      @click="tab = 0"
    >
      امروز
    </button>
    <button
      class="px-2.5 py-2 border border-strokesec rounded-10 flex-grow transition"
      :class="{ 'bg-secondary border-secondary text-white': tab == 1 }"
      @click="tab = 1"
    >
      دیروز
    </button>
    <button
      class="px-2.5 py-2 border border-strokesec rounded-10 flex-grow transition"
      :class="{ 'bg-secondary border-secondary text-white': tab == 2 }"
      @click="tab = 2"
    >
      7 روز اخیر
    </button>
    <button
      class="px-2.5 py-2 border border-strokesec rounded-10 flex-grow transition"
      :class="{ 'bg-secondary border-secondary text-white': tab == 3 }"
      @click="tab = 3"
    >
      30 روز اخیر
    </button>
    <button
      class="px-2.5 py-2 border border-strokesec rounded-10 flex-grow transition"
      :class="{ 'bg-secondary border-secondary text-white': tab == 4 }"
      @click="tab = 4"
    >
      انتخاب تاریخ
    </button>
  </section>
</template>

<script setup>
let tab = ref(0)
</script>
