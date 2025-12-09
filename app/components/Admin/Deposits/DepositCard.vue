<template>
  <article class="p-3 rounded-10 bg-[#F5F7FA]">
    <div class="flex items-center gap-2 text-sm">
      <div
        class="size-10 rounded-full flex items-center justify-center bg-white"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.75 6.5C6.75 3.6005 9.1005 1.25 12 1.25C14.8995 1.25 17.25 3.6005 17.25 6.5C17.25 9.3995 14.8995 11.75 12 11.75C9.1005 11.75 6.75 9.3995 6.75 6.5Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.25 18.5714C4.25 15.6325 6.63249 13.25 9.57143 13.25H14.4286C17.3675 13.25 19.75 15.6325 19.75 18.5714C19.75 20.8792 17.8792 22.75 15.5714 22.75H8.42857C6.12081 22.75 4.25 20.8792 4.25 18.5714Z"
            fill="#BFBFBF"
          />
        </svg>
      </div>
      {{ props.data._id }}
    </div>
    <p class="text-sm my-3">توضیحات: {{ props.data.description }}</p>
    <Image
      :src="`${config.public.API_BASE_URL}${props.data.file}`"
      preview
      pt:root="!size-14"
      pt:image="!rounded-10"
      pt:previewMask="!rounded-10"
    />
    <div
      class="flex justify-between items-center border-t border-gray-300 mt-3 pt-3"
    >
      <div class="flex gap-3">
        <Button
          pt:root="!size-10 !bg-gray-400 !border-none"
          :disabled="loading"
          @click="changeTransferFunc('pending')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" stroke-width="1.5">
              <path
                d="M17.201 2H6.8c-1.458 0-2.737.985-2.795 2.404c-.074 1.785 1.182 2.97 2.5 4.083c1.825 1.54 2.737 2.31 2.832 3.284q.023.229 0 .458c-.095.975-1.007 1.744-2.832 3.284c-1.355 1.143-2.578 2.207-2.5 4.083C4.062 21.016 5.34 22 6.799 22H17.2c1.458 0 2.737-.985 2.796-2.404c.046-1.13-.373-2.254-1.262-3.036c-.405-.357-.826-.698-1.24-1.047c-1.824-1.54-2.736-2.31-2.831-3.284a2.3 2.3 0 0 1 0-.458c.095-.975 1.008-1.744 2.832-3.284c1.34-1.131 2.577-2.229 2.5-4.083C19.939 2.984 18.66 2 17.202 2Z"
              />
              <path
                stroke-linecap="round"
                d="M9 21.638c0-.442 0-.663.088-.856a1 1 0 0 1 .046-.09c.107-.183.288-.312.65-.571c1.006-.719 1.51-1.078 2.081-1.116q.135-.009.27 0c.572.038 1.075.397 2.08 1.116c.363.259.544.388.651.571q.026.045.046.09c.088.193.088.414.088.856V22H9z"
              />
            </g>
          </svg>
        </Button>
        <Button
          pt:root="!size-10 !bg-gray-400 !border-none"
          :disabled="loading"
          @click="changeTransferFunc('approved')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 2048 2048"
          >
            <path
              fill="currentColor"
              d="M640 1755L19 1133l90-90l531 530L1939 275l90 90z"
            />
          </svg>
        </Button>
        <Button
          pt:root="!size-10 !bg-gray-400 !border-none"
          :disabled="loading"
          @click="changeTransferFunc('rejected')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
            />
          </svg>
        </Button>
      </div>
      <span
        class="text-sm"
        v-text="
          props.data.status == 'approved'
            ? 'تایید شده'
            : props.data.status == 'pending'
            ? 'در انتظار'
            : 'رد شده'
        "
        :class="{
          'text-green-500': props.data.status == 'approved',
          'text-yellow-500': props.data.status == 'pending',
          'text-red-500': props.data.status == 'rejected'
        }"
      ></span>
    </div>
  </article>
</template>

<script setup>
let { showToast } = useToastComp()

let props = defineProps(['data'])
let emit = defineEmits(['success'])

let config = useRuntimeConfig()

let loading = ref(false)

async function changeTransferFunc (status) {
  try {
    loading.value = true

    let data = await $fetch('/api/admin/deposits/changeDeposit', {
      credentials: 'include',
      method: 'POST',
      body: { id: props.data._id, status }
    })

    emit('success', data.message)
  } catch (err) {
    showToast('error', 'خطا', err.message)
    console.log(err)
  } finally {
    loading.value = false
  }
}
</script>
