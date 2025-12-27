<template>
  <div>
    <HomeWarnSection />
    <HomeItemsSection @refreshOrders="refresh" />

    <HomeRecentOrders :data="todayOrders" :pending="pending || !today" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

useHead({
  title: "صفحه اصلی |",
});

definePageMeta({
  title: "زرعیار آبشده",
});

let { data, refresh, pending } = useLazyFetch("/api/user/orders/getOrders", {
  credentials: "include",
});

// 1. مقدار اولیه را null می‌گذاریم تا سرور هیچ تاریخی محاسبه نکند
const today = ref(null);

onMounted(() => {
  // 2. تاریخ فقط و فقط در مرورگر کاربر محاسبه می‌شود
  today.value = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
});

const todayOrders = computed(() => {
  // اگر هنوز تاریخ محاسبه نشده یا دیتا نیامده، خالی برگردان
  if (!data.value || !today.value) return [];

  return data.value.filter((item) => item.createdAt.startsWith(today.value));
});
</script> 