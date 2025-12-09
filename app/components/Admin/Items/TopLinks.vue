<template>
  <section
    class="grid grid-cols-3 border-b border-strokesec text-center text-xs text-black"
  >
    <button
      class="py-3 border-b border-white"
      :class="{ '!border-[#966D22]': !route.query.type }"
      @click="router.push({})"
    >
      آبشده ها
    </button>
    <button
      class="py-3 border-b border-white"
      :class="{ '!border-[#966D22]': route.query.type == 'coins' }"
      @click="
        router.push({
          query: { type: 'coins' }
        })
      "
    >
      سکه ها
    </button>
    <button
      class="py-3 border-b border-white"
      :class="{ '!border-[#966D22]': route.query.type == 'silvers' }"
      @click="
        router.push({
          query: { type: 'silvers' }
        })
      "
    >
      نقره ها
    </button>
  </section>
</template>

<script setup>
let route = useRoute()
let router = useRouter()
</script>
