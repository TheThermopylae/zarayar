<template>
  <section
    class=" p-4 rounded-10 border "
  >
    <slot />

    <ul class="text-[#616161]">
      <li v-for="item in props.data" class="mb2 last:m-0">
        <h4>{{ item }}</h4>
      </li>
    </ul>
  </section>
</template>

<script setup>
let props = defineProps(['data', 'titleColor'])
</script>
