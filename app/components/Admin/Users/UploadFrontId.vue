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
      class="border border-[#00000033] w-full p-4 rounded-10 !cursor-default"
    >
      <div class="flex items-center gap-9">
        <div
          v-if="!props.img"
          class="p-2 bg-[#EDEDED] rounded-10 relative cursor-pointer"
          @click="triggerFileInput"
        >
          <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect width="45" height="45" fill="url(#pattern0_931_3882)" />
            <defs>
              <pattern
                id="pattern0_931_3882"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0_931_3882"
                  transform="scale(0.00409836)"
                />
              </pattern>
              <image
                id="image0_931_3882"
                width="244"
                height="244"
                preserveAspectRatio="none"
                xlink:href="data:image/png;base64,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"
              />
            </defs>
          </svg>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute left-0 bottom-0 -translate-x-1/2"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.39795e-07 10.75C9.39795e-07 4.81294 4.81294 9.39795e-07 10.75 9.39795e-07C16.6871 9.39795e-07 21.5 4.81294 21.5 10.75C21.5 16.6871 16.6871 21.5 10.75 21.5C4.81294 21.5 9.39795e-07 16.6871 9.39795e-07 10.75Z"
              fill="#DDB976"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.75 5.75744C11.1642 5.75744 11.5 6.09323 11.5 6.50744L11.5 14.9927C11.5 15.4069 11.1642 15.7427 10.75 15.7427C10.3357 15.7427 9.99996 15.4069 9.99996 14.9927L10 6.50744C10 6.09322 10.3358 5.75744 10.75 5.75744Z"
              fill="#966D22"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.75 10.75C15.75 11.1642 15.4142 11.5 15 11.5L6.51476 11.5C6.10055 11.5 5.76476 11.1642 5.76477 10.75C5.76477 10.3357 6.10056 9.99996 6.51477 9.99996L15 10C15.4142 10 15.75 10.3358 15.75 10.75Z"
              fill="#966D22"
            />
          </svg>
        </div>
        <img
          v-else
          @click="triggerFileInput"
          :src="props.img"
          alt="back id card img"
          class="size-[61px] rounded-xl cursor-pointer"
        />
        <div class="flex flex-col">
          <h3>تصویر روی کارت ملی</h3>
          <button
            class="text-[#2F79CF] mt-3 !text-right"
            @click="triggerFileInput"
          >
            انتخاب تصویر
          </button>
        </div>
      </div>
    </button>
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
