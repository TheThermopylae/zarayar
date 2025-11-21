<template>
  <TitleSection title="ارسال مدارک" />
  <main class="bg-white rounded-2xl p-5 space-y-5">
    <div class="grid grid-cols-2 gap-3 text-center">
      <AdminUsersUploadFrontId
        :img="showFrontCardImg"
        @selectedFile="selectCardFront"
      />
      <AdminUsersUploadBackId
        :img="showBackCardImg"
        @selectedFile="selectCardBack"
      />
      <AdminUsersUploadBrthcertificate
        :img="showCertificateImg"
        @selectedFile="selectCertificate"
      />
      <AdminUsersUploadPermissionCard
        :img="showPermission"
        @selectedFile="selectPermission"
      />
    </div>
    <Button
      label="ارسال"
      pt:root="!w-full"
      @click="sendData"
      :loading="loading"
    />
    <Toast />
  </main>
</template>

<script setup>
let { showToast } = useToastComp()
let route = useRoute()

let data = reactive({
  nationalCardFront: '',
  nationalCardBack: '',
  birthcertificate: '',
  businessLicense: ''
})

let showFrontCardImg = ref('')
let showBackCardImg = ref('')
let showCertificateImg = ref('')
let showPermission = ref('')

function selectCardFront (item) {
  if (!item) return

  data.nationalCardFront = item

  if (item instanceof File) {
    const reader = new FileReader()

    reader.onload = e => {
      showFrontCardImg.value = e.target.result
    }

    reader.readAsDataURL(item)
  } else if (typeof item === 'string') {
    showFrontCardImg.value = item
  }
}

function selectCardBack (item) {
  if (!item) return

  data.nationalCardBack = item

  if (item instanceof File) {
    const reader = new FileReader()

    reader.onload = e => {
      showBackCardImg.value = e.target.result
    }

    reader.readAsDataURL(item)
  } else if (typeof item === 'string') {
    showBackCardImg.value = item
  }
}

function selectCertificate (item) {
  if (!item) return

  data.birthcertificate = item

  if (item instanceof File) {
    const reader = new FileReader()

    reader.onload = e => {
      showCertificateImg.value = e.target.result
    }

    reader.readAsDataURL(item)
  } else if (typeof item === 'string') {
    showCertificateImg.value = item
  }
}

function selectPermission (item) {
  if (!item) return

  data.businessLicense = item

  if (item instanceof File) {
    const reader = new FileReader()

    reader.onload = e => {
      showPermission.value = e.target.result
    }

    reader.readAsDataURL(item)
  } else if (typeof item === 'string') {
    showPermission.value = item
  }
}

let loading = ref(false)

async function sendData () {
  try {
    if (
      !data.nationalCardFront ||
      !data.nationalCardBack ||
      !data.birthcertificate ||
      !data.businessLicense
    )
      showToast('warn', 'اخطار', 'باید تمامی تصاویر خواسته شده را وارد کنید')
    else {
      loading.value = true

      let formData = new FormData()

      formData.append('id', route.params.id)
      formData.append('nationalCardFront', data.nationalCardFront)
      formData.append('nationalCardBack', data.nationalCardBack)
      formData.append('birthcertificate', data.birthcertificate)
      formData.append('businessLicense', data.businessLicense)

      let result = await $fetch('/api/admin/auth/sendAuth', {
        credentials: 'include',
        method: 'POST',
        body: formData
      })

      showToast(result.message)
    }
  } catch (err) {
    showToast('error', 'خطا', err.message)
  } finally {
    loading.value = false
  }
}
</script>
