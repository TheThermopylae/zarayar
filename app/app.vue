<template>
  <NuxtLoadingIndicator color="#DDB976" />
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Transition>
      <EnterApp v-if="hideEnterAppSec" @enter="hideEnterAppSec = false" />
    </Transition>
  </div>
</template>

<script setup>
let { settings } = useSettings()

useHead({
  titleTemplate: `%s ${settings.value?.headerSettings.title || 'توتونچی'}`
})

let hideEnterAppSec = ref(settings.value?.introPage.isActive)
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
