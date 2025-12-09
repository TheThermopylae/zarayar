<template>
  <div>
    <AdminTradesTabsSection />
    <AdminTradesTotalBalance />
    <section class="space-y-3 mt-3">
      <AdminTradesDataTable v-for="item in 2" />
    </section>
  </div>
</template>
