<template>
  <TitleSection title="پیام ها" />
  <main class="bg-white rounded-2xl p-4 text-right">
    <div class="flex justify-start items-center gap-2 mb-8">
      <button
        class="px-4 py-1.5 rounded-full bg-gray-100 text-sm text-gray-700 border border-gray-200"
      >
        رویداد ها
      </button>
      <button
        class="px-4 py-1.5 rounded-full bg-gray-100 text-sm text-gray-700 border border-gray-200"
      >
        فعالیت ها
      </button>
      <button
        class="px-4 py-1.5 rounded-full bg-gray-100 text-sm text-gray-700 border border-gray-200"
      >
        خوانده نشده
      </button>
      <button
        class="px-4 py-1.5 rounded-full bg-gray-100 text-sm text-gray-700 border border-gray-200"
      >
        همه
      </button>
    </div>
    <div
      class="flex flex-col items-center justify-center py-20 text-center text-gray-500 space-y-3"
    >
      <div
        class="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center"
      >
        <img src="/img/notification-direct.svg" alt="" />
      </div>
      <div class="text-gray-700 text-base font-medium">
        پیام جدید وجود ندارد!
      </div>
      <div class="text-gray-400 text-sm">در حال حاضر هیچ پیام جدیدی ندارید</div>
    </div>
  </main>
</template>
