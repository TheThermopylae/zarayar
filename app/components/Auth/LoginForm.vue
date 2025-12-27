<template>
  <main class="flex items-center justify-center flex-col gap-4 h-screen">
    <h1 class="font-bold text-2xl">زرعیار</h1>
    <form
      class="bg-white/80 border border-stroke rounded-2xl p-6 w-full max-w-md"
    >
      <div class="flex items-center gap-3 mb-4">
        <div
          class="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-[#DDB976] to-[#DDB976] text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              d="M10.5 20.5H2l2-7h4.5zm11.5 0h-8.5l2-7H20zm-5.75-10h-8.5l2-7h4.5z"
            />
          </svg>
        </div>
        <div>
          <h2 class="text-lg text-slate-800">ورود به پنل</h2>
          <p class="text-xs text-slate-500">با حساب کاربری خود وارد شوید</p>
        </div>
      </div>

      <div class="space-y-3">
        <div>
          <label class="text-xs text-slate-600 mb-1 block">شماره تلفن</label>
          
          <input
            type="text"
            inputmode="numeric"
            placeholder="مثال: 0912xxxxxxx"
            v-model="phone"
            @input="phone = $event.target.value.replace(/[^0-9]/g, '')"
            class="w-full rounded-xl border border-[#e4e4e4] px-4 py-3 focus:outline-none"
            maxlength="11"
          />
          
        </div>

        <div class="pt-2">
          <Button
            pt:root="!w-full"
            label="ارسال کد"
            :disabled="!phone || phone.length < 11"
            :loading="loading"
            @click="loginFunc"
          />
        </div>

        <div class="mt-4 text-xs text-slate-400">
          ورود شما تحت قوانین و مقررات سایت است.
        </div>
      </div>
    </form>
    <Toast />
  </main>
</template>

<script setup>
let { showToast } = useToastComp()
let config = useRuntimeConfig()
let emit = defineEmits(['otpEmit'])

let phone = ref('')
let loading = ref(false)

async function loginFunc () {
  try {
    loading.value = true

    let data = await $fetch(`${config.public.API_BASE_URL}/auth`, {
      method: 'POST',
      body: { phone: phone.value }
    })

    showToast(data.msg)
    emit('otpEmit', phone.value)
  } catch (err) {
    console.log(err)
    showToast('error', 'خطا', err?.data?.msg || err?.msg || 'خطایی رخ داد')
  } finally {
    loading.value = false
  }
}
</script>