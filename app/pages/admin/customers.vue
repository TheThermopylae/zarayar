<template>
  <main class="bg-white p-3 rounded-10">
    <TitleSection title="آمار معاملات مشتریانّ" />
    <Skeleton
      v-for="item in 2"
      :key="item"
      height="10rem"
      width="100%"
      class="mb-2"
      v-if="pending"
    />
    <div v-else>
      <AdminCustomersCount
        :data="data.stats.activeUsers"
        class="bg-linear-to-b from-white to-[#96A825]/50 border-[#96A825] mb-3"
      >
        <h2 class="text-center font-bold text-[#5A6804] text-lg">
          {{ data.stats.activeCount }} مشتری فعال
        </h2>
      </AdminCustomersCount>
      <AdminCustomersCount
        :data="data.stats.inactiveUsers"
        class="bg-linear-to-b from-white to-[#E84362]/50 border-[#E84362] mb-3"
      >
        <h2 class="text-center font-bold text-[#80182B] text-lg">
          {{ data.stats.inactiveCount }} مشتری غیر فعال
        </h2>
      </AdminCustomersCount>
    </div>
    <AdminCustomersDesSection />
    <AdminCustomersCustomerCard
      v-for="item in data?.customers"
      :key="item._id"
      :data="item"
    />
  </main>
</template>

<script setup>
let { data, pending } = useLazyFetch('/api/admin/customers/getCustomers', {
  credentials: 'include'
})
</script>
