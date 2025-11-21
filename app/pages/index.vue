<template>
  <MainHeader />

  <main class="space-y-3">
    <div class="">
      <div
        class="text-center text-xs text-slate-500 bg-white rounded-xl p-3 border border-gray-100"
      >
        <div class="flex justify-center gap-3">
          <span class="border border-red-500 text-red-500 rounded-sm px-4"
            >زنده
          </span>
          <span> آپدیت قیمت در 16:31</span>
        </div>
        <div class="grid grid-cols-1 mt-3">
          <div class="bg-white rounded-xl p-2 space-y-1">
            <div class="flex items-center justify-between">
              <div
                class="text-center buy bg-gray-100 py-2 px-3 rounded-sm text-[14px] font-medium text-[#96A825]"
              >
                ۴۷,۱۲۴,۰۱۵
              </div>
              <div
                class="flex-1 text-center text-[12px] font-medium text-slate-500"
              >
                نقد فردایی
              </div>
              <div
                class="text-center sell bg-gray-100 py-2 px-3 rounded-sm text-[14px] font-medium text-rose-500"
              >
                ۴۷,۳۶۵,۳۲۰
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-2 space-y-1">
            <div class="flex items-center justify-between">
              <div
                class="text-center buy bg-gray-100 py-2 px-3 rounded-sm text-[14px] font-medium text-[#96A825]"
              >
                ۴۷,۱۲۴,۰۱۵
              </div>
              <div
                class="flex-1 text-center text-[12px] font-medium text-slate-500"
              >
                نقد فردایی
              </div>
              <div
                class="text-center sell bg-gray-100 py-2 px-3 rounded-sm text-[14px] font-medium text-rose-500"
              >
                ۴۷,۳۶۵,۳۲۰
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-4">
      <div
        class="flex items-center justify-between bg-white rounded-xl px-3 py-5"
      >
        <div class="flex items-center gap-3">
          <img src="/img/swap-vertical.svg" alt="" />
          <div class="text-right">
            <div class="text-sm text-[#96A825]">خرید</div>
            <div class="text-xs text-slate-400">نقد پس فردایی</div>
          </div>
        </div>

        <div class="flex-1 text-center">
          <div class="text-sm">۱۵ گرم</div>
          <div class="text-xs text-slate-500 mt-1">۴۷,۳۶۵,۳۲۲</div>
        </div>

        <div class="flex-shrink-0">
          <span
            class="inline-block px-4 py-2 rounded-lg bg-amber-100 text-black text-sm font-medium"
            >در انتظار تایید</span
          >
        </div>
      </div>
      <div
        class="flex items-center justify-between bg-white rounded-xl px-3 py-5"
      >
        <div class="flex items-center gap-3">
          <img src="/img/swap-vertical(1).svg" alt="" />
          <div class="text-right">
            <div class="text-sm text-[#E84362]">فروش</div>
            <div class="text-xs text-slate-400">نقد پس فردایی</div>
          </div>
        </div>

        <div class="flex-1 text-center">
          <div class="text-sm">۱۵ گرم</div>
          <div class="text-xs text-slate-500 mt-1">۴۷,۳۶۵,۳۲۲</div>
        </div>

        <div class="flex-shrink-0">
          <span
            class="px-6 py-2 rounded-lg bg-[#E7F2A7] text-black text-sm font-medium"
          >
            تایید شده</span
          >
        </div>
      </div>

      <div
        class="flex items-center justify-between bg-white rounded-xl px-3 py-5"
      >
        <div class="flex items-center gap-3">
          <img src="/img/swap-vertical.svg" alt="" />
          <div class="text-right">
            <div class="text-sm text-[#96A825]">خرید</div>
            <div class="text-xs text-slate-400">نقد پس فردایی</div>
          </div>
        </div>

        <div class="flex-1 text-center">
          <div class="text-sm">2 عدد</div>
          <div class="text-xs text-slate-500 mt-1">۴۷,۳۶۵,۳۲۲</div>
        </div>

        <div class="flex-shrink-0">
          <span
            class="px-8 py-2 rounded-lg bg-[#E8436280] text-black text-sm font-medium"
          >
            رد شده
          </span>
        </div>
      </div>
    </div>

    <div
      class="mt-4 rounded-xl p-3 flex gap-3 items-center text-[14px] text-gray-900 bg-[#FFF3DB]"
    >
      <img src="/img/warning-box.svg" alt="" />
      <p class="font-medium">
        همکاران گرامی در صورت خرید از کارتخوان مطابقت دادن کارت ملی الزامی
        میباشد همکاران گرامی برای جابه جایی ریالی صبور باشید.
      </p>
    </div>
  </main>

  <div id="purchaseOverlay" class="fixed inset-0 bg-black/40 hidden z-40"></div>

  <section
    id="purchasePanel"
    class="bg-white/80 backdrop-blur-md rounded-2xl p-5 hidden shadow-lg fixed left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[420px] transform translate-y-full transition-transform duration-300 ease-out z-50"
    aria-hidden="true"
  >
    <div class="flex items-center justify-between mb-3">
      <div>
        <h2 id="panelTitle" class="text-lg font-semibold text-slate-800">
          خرید طلا
        </h2>
        <p id="panelSubtitle" class="text-xs text-slate-500">
          مقدار (گرم) را وارد کنید تا قیمت نهایی را ببینید
        </p>
      </div>
      <div class="flex items-center gap-2">
        <div
          class="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-[#DDB976] to-[#DDB976] text-white"
        >
          <img src="/img/bullion.svg" alt="" />
        </div>
        <button id="closePanel" class="p-2 text-slate-500" aria-label="بستن">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>

    <div class="mb-4">
      <div class="rounded-xl border border-slate-200 p-3 bg-white">
        <div class="flex items-center justify-between">
          <div class="text-sm text-slate-500">مقدار</div>
          <div id="gramsDisplay" class="text-lg text-slate-800">0 گرم</div>
        </div>
        <div class="flex items-center justify-between mt-2">
          <div class="text-sm text-slate-500">قیمت هر گرم</div>
          <div id="pricePerGram" class="text-sm">--</div>
        </div>
        <div class="flex items-center justify-between mt-3 border-t pt-3">
          <div class="text-sm text-slate-500">قیمت کل</div>
          <div id="totalPrice" class="text-lg text-[#B77B00]">0 تومان</div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl p-3">
      <div id="inputField" class="text-center text-2xl text-slate-800 mb-3">
        0
      </div>

      <div class="grid grid-cols-3 text-lg gap-3">
        <button class="num-btn py-3">1</button>
        <button class="num-btn py-3">2</button>
        <button class="num-btn py-3">3</button>
        <button class="num-btn py-3">4</button>
        <button class="num-btn py-3">5</button>
        <button class="num-btn py-3">6</button>
        <button class="num-btn py-3">7</button>
        <button class="num-btn py-3">8</button>
        <button class="num-btn py-3">9</button>
        <button id="dotBtn" class="py-3 text-xl">.</button>
        <button class="num-btn py-3">0</button>
        <button id="delBtn" class="py-3">
          <i class="fa-solid fa-delete-left"></i>
        </button>
      </div>

      <div class="mt-4">
        <button
          id="confirmBtn"
          class="w-full rounded-lg py-3 text-white bg-gradient-to-r from-[#DDB976] to-[#DDB976]"
        >
          تأیید
        </button>
      </div>
    </div>
  </section>
</template>
