<template>
  <section
    class="grid grid-cols-2 border-b border-strokesec text-center text-xs text-black"
  >
    <button
      class="py-3 border-[#966D22]"
      :class="{ 'border-b': !route.query.type }"
      @click="
        router.push({
          path: '/admin'
        })
      "
    >
      مظنه
    </button>
    <button
      class="flex items-center gap-2 justify-center py-3 border-[#966D22]"
      :class="{ 'border-b': route.query.type == 'trades' }"
      @click="
        router.push({
          path: '/admin',
          query: { type: 'trades' }
        })
      "
    >
      معاملات
      <span class="size-6 bg-[#E84362] rounded-md text-white flex-center"
        >125</span
      >
    </button>
  </section>
</template>

<script setup>
let route = useRoute()
let router = useRouter()
</script>
