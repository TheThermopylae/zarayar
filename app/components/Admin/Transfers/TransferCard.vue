<template>
  <div class="p-3 rounded-10 border border-strokesec">
    <div
      class="flex justify-between items-center pb-2 border-b border-strokesec"
    >
      <h4>{{ props.data.receiverName }}</h4>
      <div class="flex gap-2 text-xs">
        <span class="bg-main rounded-10 px-1.5 py-1">13:25</span>
        <span class="bg-main rounded-10 px-1.5 py-1">1404/08/21</span>
      </div>
    </div>
    <ul class="my-2 text-xs">
      <li class="h-10 px-2 flex justify-between items-center">
        دریافت کننده حواله
        <span>{{ props.data.receiverName }}</span>
      </li>
      <li
        class="h-10 px-2 flex justify-between items-center bg-[#FAFAFA] rounded-10"
      >
        نزد (همکار)
        <span>{{ props.data.accountHolderName }}</span>
      </li>
      <li class="h-10 px-2 flex justify-between items-center">
        میزان حواله
        <span>{{ props.data.weight }} گرم</span>
      </li>
      <!-- <li
        class="h-10 px-2 flex justify-between items-center bg-[#FAFAFA] rounded-10"
      >
        شماره سند
        <span>35642</span>
      </li> -->
      <li class="h-10 px-2 flex justify-between items-center">
        وضعیت حواله
        <span
          v-if="props.data.status == 'pending'"
          class="px-2 py-1 rounded-10 bg-pending text-primary"
          >در انتظار تایید</span
        >
        <span
          v-else-if="props.data.status == 'rejected'"
          class="px-2 py-1 rounded-10 bg-cred text-reject"
          >رد شده</span
        >
        <span v-else class="px-2 py-1 rounded-10 bg-cgreen text-confirm"
          >تایید شده</span
        >
      </li>
    </ul>
    <div class="grid grid-cols-3 gap-2" v-if="props.data.status == 'pending'">
      <Button
        label="تایید"
        pt:root="!bg-cgreen"
        @click="changeStatus('approved')"
        :disabled="loading"
      />
      <Button
        pt:root="!bg-cred"
        @click="changeStatus('reject')"
        :disabled="loading"
      >
        عدم تایید
      </Button>
      <Button
        label="مانده حساب"
        pt:root="!bg-white !border !border-[#83BCFF] !text-[#2F79CF]"
      />
    </div>
  </div>
</template>

<script setup>
let props = defineProps(['data'])
let emit = defineEmits(['success'])

let loading = ref(false)

async function changeStatus (status) {
  try {
    loading.value = false

    let data = await $fetch('/api/admin/transfers/changeTransfer', {
      credentials: 'include',
      method: 'POST',
      body: { id: props.data._id, status }
    })

    emit('success', 'وضعیت حواله با موفقیت بروز شد')
  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false
  }
}
</script>
