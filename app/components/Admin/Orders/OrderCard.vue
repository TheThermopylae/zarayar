<template>
  <article
    class="p-2 border border-[#302b2b33] rounded-10 text-xs mb-2 last:m-0"
  >
    <span v-if="props.data.status == 'confirmed'" class="text-[#96A825] font-bold text-sm">تایید شده</span>
    <span v-else-if="props.data.status == 'rejected'" class="text-[#E84362] font-bold text-sm">لغو شده</span>
    <span v-else class="text-blue-500 font-bold text-sm">در انتظار</span>
    <div class="grid grid-cols-2 gap-3 mt-3">
      <div class="flex items-center gap-1">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.25 7.25C1.25 3.93629 3.93629 1.25 7.25 1.25H16.75C20.0637 1.25 22.75 3.93629 22.75 7.25V16.75C22.75 20.0637 20.0637 22.75 16.75 22.75H7.25C3.93629 22.75 1.25 20.0637 1.25 16.75V7.25Z"
            fill="#BFBFBF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.531 5.46918C15.8239 5.17629 16.2988 5.17629 16.5917 5.46918L20.0304 8.90786C20.3233 9.20075 20.3233 9.67562 20.0304 9.96852C19.7375 10.2614 19.2626 10.2614 18.9697 9.96852L16.8114 7.81017V17.9998C16.8114 18.414 16.4756 18.7498 16.0614 18.7498C15.6471 18.7498 15.3114 18.414 15.3114 17.9998V7.81017L13.153 9.96852C12.8601 10.2614 12.3852 10.2614 12.0924 9.96852C11.7995 9.67562 11.7995 9.20075 12.0924 8.90786L15.531 5.46918Z"
            fill="#232323"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.40834 18.5303C7.70124 18.8232 8.17611 18.8232 8.469 18.5303L11.9077 15.0917C12.2006 14.7988 12.2006 14.3239 11.9077 14.031C11.6148 13.7381 11.1399 13.7381 10.847 14.031L8.68867 16.1893V5.99973C8.68867 5.58552 8.35289 5.24973 7.93867 5.24973C7.52446 5.24973 7.18867 5.58552 7.18867 5.99973V16.1893L5.03033 14.031C4.73744 13.7381 4.26256 13.7381 3.96967 14.031C3.67678 14.3239 3.67678 14.7988 3.96967 15.0917L7.40834 18.5303Z"
            fill="#232323"
          />
        </svg>
        <span
          v-text="props.data.settlementType == 'cash' ? 'پول' : 'طلا'"
        ></span>
      </div>
      <div class="flex items-center gap-1">
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
            d="M8.06059 5.4466C8.29879 4.732 8.96753 4.25 9.72078 4.25H14.2793C15.0325 4.25 15.7013 4.732 15.9395 5.4466L17.2728 9.4466C17.6505 10.5798 16.8071 11.75 15.6126 11.75H8.38745C7.19297 11.75 6.34953 10.5798 6.72725 9.4466L8.06059 5.4466ZM9.72078 5.75C9.61318 5.75 9.51764 5.81886 9.48361 5.92094L8.15028 9.92094C8.09632 10.0828 8.21681 10.25 8.38745 10.25H15.6126C15.7832 10.25 15.9037 10.0828 15.8498 9.92094L14.5164 5.92094C14.4824 5.81886 14.3869 5.75 14.2793 5.75H9.72078Z"
            fill="#BFBFBF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.06059 12.9466C3.29879 12.232 3.96753 11.75 4.72078 11.75H9.27926C10.0325 11.75 10.7013 12.232 10.9395 12.9466L12.2728 16.9466C12.6505 18.0798 11.8071 19.25 10.6126 19.25H3.38745C2.19297 19.25 1.34953 18.0798 1.72725 16.9466L3.06059 12.9466ZM4.72078 13.25C4.61318 13.25 4.51764 13.3189 4.48361 13.4209L3.15028 17.4209C3.09632 17.5828 3.21681 17.75 3.38745 17.75H10.6126C10.7832 17.75 10.9037 17.5828 10.8498 17.4209L9.51644 13.4209C9.48241 13.3189 9.38687 13.25 9.27926 13.25H4.72078Z"
            fill="#616161"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.0606 12.9466C13.2988 12.232 13.9675 11.75 14.7208 11.75H19.2793C20.0325 11.75 20.7013 12.232 20.9395 12.9466L22.2728 16.9466C22.6505 18.0798 21.8071 19.25 20.6126 19.25H13.3875C12.193 19.25 11.3495 18.0798 11.7273 16.9466L13.0606 12.9466ZM14.7208 13.25C14.6132 13.25 14.5176 13.3189 14.4836 13.4209L13.1503 17.4209C13.0963 17.5828 13.2168 17.75 13.3875 17.75H20.6126C20.7832 17.75 20.9037 17.5828 20.8498 17.4209L19.5164 13.4209C19.4824 13.3189 19.3869 13.25 19.2793 13.25H14.7208Z"
            fill="#616161"
          />
        </svg>
        {{ props.data.weight }}
      </div>
      <div class="flex items-center gap-1">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.25 7.25C1.25 3.93629 3.93629 1.25 7.25 1.25H16.75C20.0637 1.25 22.75 3.93629 22.75 7.25V16.75C22.75 20.0637 20.0637 22.75 16.75 22.75H7.25C3.93629 22.75 1.25 20.0637 1.25 16.75V7.25Z"
            fill="#BFBFBF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.3595 8.61123C19.4756 8.33098 19.4114 8.00839 19.1969 7.79389L15.3762 3.97314C15.0833 3.68025 14.6084 3.68025 14.3155 3.97314C14.0226 4.26603 14.0226 4.74091 14.3155 5.0338L16.8559 7.57422L5.33297 7.57422C4.91876 7.57422 4.58297 7.91 4.58297 8.32422C4.58297 8.73843 4.91876 9.07422 5.33297 9.07422L18.6666 9.07422C18.97 9.07422 19.2434 8.89149 19.3595 8.61123Z"
            fill="#232323"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.64036 15.3952C4.75645 15.1149 5.02993 14.9322 5.33327 14.9322L18.6669 14.9322C19.0811 14.9322 19.4169 15.268 19.4169 15.6822C19.4169 16.0964 19.0811 16.4322 18.6669 16.4322L7.14393 16.4322L9.68435 18.9726C9.97725 19.2655 9.97725 19.7404 9.68435 20.0333C9.39146 20.3262 8.91659 20.3262 8.62369 20.0333L4.80294 16.2125C4.58845 15.998 4.52428 15.6754 4.64036 15.3952Z"
            fill="#232323"
          />
        </svg>
        {{ props.data.amount }}
      </div>
    </div>
    <div class="grid grid-cols-2 gap-3 mt-3">
      <Button
        label="تایید کردن معامله"
        :disabled="loading"
        pt:root="!bg-[#96A825] !border-none !rounded-10"
        @click="changeOrder('confirmed')"
      >
        <template #icon>
          <svg
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.375 9.82579L7.2209 12.4007C7.90432 13.019 9.01235 13.019 9.69577 12.4007L16.625 6.13135"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </template>
      </Button>
      <Button
        label="رد کردن معامله"
        :disabled="loading"
        pt:root="!bg-[#E84362] !border-none !rounded-10"
        @click="changeOrder('rejected')"
      >
        <template #icon>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.62512 5.62061L14.3792 14.3747"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M14.3792 5.62061L5.62503 14.3746"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </template>
      </Button>
    </div>
  </article>
</template>

<script setup>
let props = defineProps(['data'])
let emit = defineEmits(['success'])

let loading = ref(false)

async function changeOrder (status) {
  loading.value = true

  try {
    let data = await $fetch('/api/admin/orders/changeOrder', {
      credentials: 'include',
      method: 'POST',
      body: { id: props.data._id, status }
    })

    console.log(data)
    emit('success')
  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false
  }
}
</script>
