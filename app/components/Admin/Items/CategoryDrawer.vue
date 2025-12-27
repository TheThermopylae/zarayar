<template>
  <div>
    <Button
      pt:root="!bg-white !border !text-primary !text-sm"
      :label="`گروه بندی ${getPageTypeLabel()} ها`"
      @click="openDrawer"
    />

    <Drawer
      :blockScroll="true"
      v-model:visible="visible"
      :header="`${
        editingId ? 'ویرایش' : 'مدیریت'
      } گروه بندی ${getPageTypeLabel()} ها`"
      position="bottom"
      style="height: auto"
      pt:root="!text-sm"
      @hide="resetForm"
    >
      <div class="mb-2">
        <label for="title" class="block mb-1.5">عنوان گروه (اجباری)</label>
        <input
          v-model="form.title"
          type="text"
          class="cinput"
          id="title"
          placeholder="عنوان را وارد کنید"
        />
      </div>

      <div class="mb-2">
        <label class="block mb-1.5">آیتم ها</label>
        <MultiSelect
          v-model="form.items"
          :options="data"
          :maxSelectedLabels="3"
          option-label="name"
          option-value="_id"
          pt:root="w-full !rounded-10 !bg-white !shadow-none !border-[#00000026] !mt-1.5"
          pt:label="!text-graydark"
          emptyFilterMessage="آیتمی پیدا نشد"
          filter
          placeholder="انتخاب کنید"
        >
          <template #dropdownicon>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75066 3.12354e-06C3.91816 2.91231e-06 0.000654883 3.91751 0.000654672 8.75L0.000654066 22.6042C0.000653855 27.4367 3.91816 31.3542 8.75065 31.3542L22.6048 31.3542C27.4373 31.3542 31.3548 27.4367 31.3548 22.6042L31.3548 8.75C31.3548 3.91751 27.4373 3.94036e-06 22.6048 3.72913e-06L8.75066 3.12354e-06Z"
                fill="#DDDDDD"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6993 18.1948C16.1446 18.7803 15.2122 18.7803 14.6575 18.1948L7.7224 10.8744C7.30696 10.4359 6.61469 10.4172 6.17617 10.8326C5.73765 11.248 5.71894 11.9403 6.13438 12.3788L13.0695 19.6992C14.487 21.1955 16.8698 21.1955 18.2873 19.6992L25.2224 12.3788C25.6378 11.9403 25.6191 11.248 25.1806 10.8326C24.7421 10.4172 24.0498 10.4359 23.6344 10.8744L16.6993 18.1948Z"
                fill="#616161"
              />
            </svg>
          </template>
        </MultiSelect>
      </div>

      <div class="mb-2">
        <label for="order" class="block mb-1.5">ترتیب</label>
        <input
          v-model="form.sortOrder"
          type="number"
          class="cinput"
          id="order"
        />
      </div>

      <div class="flex gap-2 mt-4">
        <Button
          :label="editingId ? 'بروزرسانی تغییرات' : 'افزودن به لیست'"
          class="flex-1 !bg-secondary"
          @click="submitForm"
          :loading="loading"
        />
        <Button
          v-if="editingId"
          label="انصراف"
          class="w-1/3 !bg-gray-100 !text-gray-600 !border-transparent hover:!bg-gray-200"
          @click="resetForm"
        />
      </div>

      <div class="mt-6">
        <h3
          class="mb-2 pb-3 border-b border-stroke font-bold text-gray-700 text-sm"
        >
          لیست گروه‌های فعلی
        </h3>

        <div
          v-if="!categories?.length"
          class="text-center text-xs text-gray-400 py-4"
        >
          موردی یافت نشد.
        </div>

        <ul class="space-y-2 max-h-[300px] overflow-y-auto pl-1">
          <li
            v-for="item in categories"
            :key="item._id"
            class="flex justify-between items-center p-2 rounded hover:bg-gray-50 transition-colors border border-transparent"
            :class="{ '!border-secondary !bg-blue-50': item._id === editingId }"
          >
            <div class="flex flex-col">
              <span class="text-sm font-medium">{{ item.title }}</span>
              <span class="text-[10px] text-gray-400"
                >ترتیب: {{ item.sortOrder }}</span
              >
            </div>

            <div class="flex items-center gap-2">
              <Button
                pt:root="!bg-white !border !text-primary !text-xs w-16 h-8"
                label="ویرایش"
                @click="startEdit(item)"
              />
              <Button
                pt:root="!bg-white !border !border-cred !text-cred !text-xs w-16 h-8"
                label="حذف"
                @click="confirmDelete(item._id)"
              />
            </div>
          </li>
        </ul>
      </div>

      <Dialog
        v-model:visible="visibleDialog"
        modal
        header="حذف دسته بندی"
        :style="{ width: '25rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
        pt:root="!font-iransans"
      >
        <span class="block mb-5">
          آیا از حذف این دسته‌بندی اطمینان دارید؟
        </span>
        <div class="grid grid-cols-2 gap-2">
          <Button
            type="button"
            label="انصراف"
            severity="secondary"
            @click="visibleDialog = false"
            class="!text-sm"
          ></Button>
          <Button
            type="button"
            label="بله"
            severity="danger"
            @click="deleteCategory"
            :loading="deleteLoading"
            class="!text-sm"
          ></Button>
        </div>
      </Dialog>
    </Drawer>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const route = useRoute();

// ورودی‌ها
const props = defineProps(["data", "categories"]);
const emit = defineEmits(["success", "error", "refresh", "warn"]);

// استیت‌ها
const visible = ref(false);
const visibleDialog = ref(false);
const loading = ref(false);
const deleteLoading = ref(false); // لودینگ مخصوص حذف
const editingId = ref(null);
const deletingId = ref(null); // آیدی آیتمی که قراره حذف بشه

const form = reactive({
  title: "",
  items: [],
  sortOrder: "",
});

// باز کردن دراور
const openDrawer = () => {
  visible.value = true;
};

const getPageTypeLabel = () => {
  const type = route.query.type;
  const labels = { coins: "سکه", silvers: "نقره" };
  return labels[type] || "مظنه";
};

// --- توابع ---

function startEdit(item) {
  editingId.value = item._id;
  form.title = item.title;
  form.sortOrder = item.sortOrder;
  if (item.items && Array.isArray(item.items)) {
    form.items = item.items.map((i) =>
      i && typeof i === "object" ? i._id : i
    );
  } else {
    form.items = [];
  }
  const content = document.querySelector(".p-drawer-content");
  if (content) content.scrollTop = 0;
}

function resetForm() {
  editingId.value = null;
  form.title = "";
  form.items = [];
  form.sortOrder = "";
}

async function submitForm() {
  if (!form.title || !form.items.length || !form.sortOrder) {
    emit("warn", "لطفا تمام فیلدها را پر کنید.");
    return;
  }
  loading.value = true;
  try {
    const url = editingId.value
      ? `/api/admin/itemsCategory/update/${editingId.value}`
      : "/api/admin/itemsCategory/create";
    const method = editingId.value ? "PUT" : "POST";

    await $fetch(url, {
      credentials: "include",
      method: method,
      body: form,
    });

    emit(
      "success",
      method == "PUT" ? "دسته با موفقیت ویرایش شد" : "دسته با موفقیت اضافه شد"
    );
    resetForm();
  } catch (err) {
    console.log(err);
    emit("error", err.data?.message || "خطایی رخ داد");
  } finally {
    loading.value = false;
  }
}

// --- بخش جدید: مدیریت حذف با دیالوگ ---

// ۱. کلیک روی دکمه حذف در لیست -> باز کردن دیالوگ
function confirmDelete(id) {
  deletingId.value = id; // آیدی رو نگه میداریم
  visibleDialog.value = true; // دیالوگ رو باز میکنیم
}

// ۲. کلیک روی دکمه "بله" در دیالوگ -> انجام عملیات حذف
async function deleteCategory() {
  if (!deletingId.value) return;

  deleteLoading.value = true; // لودینگ دکمه حذف

  try {
    await $fetch(`/api/admin/itemsCategory/delete/${deletingId.value}`, {
      credentials: "include",
      method: "DELETE",
    });

    // اگر آیتمی که حذف شده توی فرم باز بود، فرم رو ببند
    if (editingId.value === deletingId.value) resetForm();

    emit("success", "دسته با موفقیت حذف شد");
    visibleDialog.value = false; // بستن دیالوگ بعد از موفقیت
  } catch (err) {
    console.error(err);
    emit("error", "خطا در حذف آیتم");
  } finally {
    deleteLoading.value = false;
    deletingId.value = null;
  }
}
</script>
