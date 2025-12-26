<template>
  <div class="fixed top-0 right-bg z-50 bg-white flex w-full h-full">
    <div
      class="absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 text-center w-full"
    >
      <img
        :src="settings?.introPage.imageUrl"
        class="block m-auto rounded-10"
      />
      <h1 class="font-bold text-4xl mt-6 mb-3">
        {{ settings?.introPage.title }}
      </h1>
      <h2>{{ settings?.introPage.description }}</h2>
    </div>
    <button
      class="bg-[#DDB976] rounded-2xl p-2 text-black flex items-center gap-5 absolute left-1/2 -translate-x-1/2 bottom-14 font-bold"
      @click="$emit('enter')"
    >
      ورود به برنامه
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.06398e-05 17.9167C2.15049e-05 8.02157 8.02159 3.83392e-06 17.9167 4.69897e-06C27.8118 5.56403e-06 35.8334 8.02157 35.8334 17.9167C35.8334 27.8118 27.8118 35.8333 17.9167 35.8333C8.02158 35.8333 1.97748e-05 27.8118 2.06398e-05 17.9167Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.5955 17.6027C15.4015 17.769 15.4015 18.0691 15.5955 18.2354L20.7859 22.6843C21.31 23.1335 21.3707 23.9227 20.9215 24.4468C20.4722 24.971 19.6831 25.0317 19.1589 24.5824L13.9686 20.1336C12.6105 18.9695 12.6105 16.8686 13.9686 15.7046L19.1589 11.2557C19.6831 10.8064 20.4722 10.8671 20.9215 11.3913C21.3707 11.9154 21.31 12.7046 20.7859 13.1538L15.5955 17.6027Z"
          fill="#232323"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
let { settings } = useSettings()

onMounted(() => (document.body.style.overflow = 'hidden'))
onBeforeUnmount(() => (document.body.style.overflow = 'auto'))
</script>
