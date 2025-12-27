<template>
  <NuxtLoadingIndicator color="#DDB976" />
  <div class="relative overflow-x-hidden min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <Transition>
      <EnterApp
        v-if="hideEnterAppSec && route.path == '/auth/login'"
        @enter="hideEnterAppSec = false"
      />
    </Transition>
  </div>
</template>

<script setup>
let { settings } = useSettings()
let route = useRoute()

useHead({
  titleTemplate: `%s ${settings.value?.headerSettings.title || 'توتونچی'}`
})

let hideEnterAppSec = ref(settings.value?.introPage.isActive)
</script>

<style>
/* انیمیشن اسلایدی صفحات */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.page-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* .my-toast {
  backdrop-filter: blur(5px) saturate(180%) !important;
  background-color: rgba(255, 255, 255, 0.5) !important;
} */
</style>
