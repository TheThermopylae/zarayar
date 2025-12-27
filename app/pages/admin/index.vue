<template>
  <div>
    <AdminTabs />

    <section class="mt-4">
      <Transition name="fade" mode="out-in">
        <div v-if="!route.query.type" key="tab-currency">
          <Skeleton
            v-if="pending"
            v-for="item in 3"
            :key="item"
            width="100%"
            height="9rem"
            class="mb-2"
          />
          <AdminHomeItemsSection v-else @error="showError" :items="items" />
        </div>

        <div
          v-else-if="route.query.type === 'trades'"
          key="tab-trades"
          class="space-y-2"
        >
          <Skeleton
            v-if="orderPending"
            v-for="item in 3"
            :key="item"
            width="100%"
            height="9rem"
            class="mb-2"
          />
          <AdminOrdersOrderCard
            v-eles
            v-for="item in orders"
            :key="item._id"
            :data="item"
          />
        </div>
      </Transition>
    </section>
  </div>
</template>

<script setup>
const route = useRoute();

useHead({
  title: "مدیریت سامانه |",
});

definePageMeta({
  title: "مدیریت سامانه",
});

let { showToast } = useToastComp();

let { data: items, pending } = useLazyFetch("/api/admin/currency/getCurrency", {
  credentials: "include",
});

let { data: orders, pending: orderPending } = await useFetch(
  "/api/admin/orders/getOrders",
  {
    credentials: "include",
  }
);

console.log(orders.value);

function showError(text) {
  showToast("error", "خطا", text);
}
</script>

<style>
/* استایل‌های قبلی شما */
.p-inputnumber-input {
  text-align: center !important;
  background: none !important;
  border-top: none !important;
  border-bottom: none !important;
  border-radius: 0 !important;
  border-color: #bfbfbf !important;
}
.p-inputnumber-input:focus,
.p-inputnumber-input:hover {
  border-color: #bfbfbf !important;
}

/* -------------------------------------- */
/* استایل‌های انیمیشن (جدید) */
/* -------------------------------------- */

/* حالت فعال انیمیشن (مدت زمان و نوع حرکت) */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

/* حالت شروع ورود و پایان خروج (شفافیت و کمی حرکت به پایین/بالا) */
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px); /* کمی از پایین میاد */
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px); /* کمی به بالا میره */
}
</style>