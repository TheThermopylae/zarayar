<template>
  <main>
    <div
      class="bg-[#FAFAFA] flex justify-between items-center p-3 border border-stroke rounded-10"
    >
      <p>ارسال اطلاعات ورود از طریق پیامک به مشتری</p>
      <Button label="ارسال" pt:root="!bg-white !border !text-secondary" />
    </div>
    <div
      class="bg-[#FAFAFA] flex justify-between items-center p-3 border border-stroke rounded-10 my-3"
    >
      <p>مانده حساب</p>
      <Button
        :label="!walletItems ? 'مشاهده' : 'بستن'"
        pt:root="!bg-white !border !text-secondary"
        @click="walletItems = !walletItems"
      />
    </div>
    <section class="grid grid-cols-2 gap-3" v-if="walletItems">
      <div class="border border-stroke rounded-10 text-center bg-[#FAFAFA] p-2">
        موجودی ریالی
        <span class="text-cgreen font-bold block mt-2">31،190،542،320</span>
      </div>
      <div class="border border-stroke rounded-10 text-center bg-[#FAFAFA] p-2">
        موجودی طلایی
        <span class="text-cgreen font-bold block mt-2">173.222</span>
      </div>
      <div
        class="border border-stroke rounded-10 bg-[#FAFAFA] p-2"
        v-for="item in wallet"
      >
        <div class="flex justify-between mb-1 pb-1 border-b border-stroke">
          {{ item.item }}
          <p>
            <span class="text-cgreen">{{ item.weight }}</span> گرم
          </p>
        </div>
        <div class="flex justify-between">
          معادل
          <p>
            <span class="text-cgreen">{{
              (item.weight * item.amount.$numberDecimal).toLocaleString()
            }}</span>
            ریال
          </p>
        </div>
      </div>
    </section>
    <div
      class="bg-[#FAFAFA] flex justify-between items-center p-3 border border-stroke rounded-10 my-3"
    >
      <p>50 تراکنش آخر</p>
      <Button
        :label="!showOrders ? 'مشاهده' : 'بستن'"
        pt:root="!bg-white !border !text-secondary"
        @click="showOrders = !showOrders"
      />
    </div>
    <section class="space-y-3" v-if="showOrders">
      <AdminUsersOrderCard
        v-for="item in orders.slice(0, 50)"
        :key="item._id"
        :data="item"
      />
    </section>
    <Toast />
  </main>
</template>

<script setup>
useHead({
  title: 'اطلاعات بیشتر کاربر |'
})

definePageMeta({
  title: 'اطلاعات بیشتر کاربر'
})

let { showToast } = useToastComp()
let route = useRoute()

let { data: wallet } = await useFetch('/api/admin/wallet/getWallet', {
  credentials: 'include',
  method: 'POST',
  body: { id: route.params.id }
})

let { data: orders } = await useFetch('/api/admin/orders/getUserOrders', {
  credentials: 'include',
  method: 'POST',
  body: { id: route.params.id }
})

let walletItems = ref(false)

let showOrders = ref(false)
</script>
