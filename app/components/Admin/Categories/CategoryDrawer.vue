<template>
  <div>
    <Button
      pt:root="!bg-white !border !text-primary !text-sm"
      :label="`گروه بندی ${
        !route.query.type
          ? 'مظنه'
          : route.query.type == 'coins'
          ? 'سکه'
          : route.query.type == 'silvers'
          ? 'نقره'
          : ''
      } ها`"
      @click="visible = true"
    />
    <Drawer
      v-model:visible="visible"
      :header="`گروه بندی ${
        !route.query.type
          ? 'مظنه'
          : route.query.type == 'coins'
          ? 'سکه'
          : route.query.type == 'silvers'
          ? 'نقره'
          : ''
      } ها`"
      position="bottom"
      style="height: auto"
      pt:root="!text-sm"
    >
      <div class="mb-2">
        <label for="title" class="block mb-1.5">عنوان گروه (اجباری)</label>
        <input type="text" class="cinput" id="title" />
      </div>
      <Button label="افزودن به لیست" class="w-full !bg-secondary" />
      <div class="mt-5">
        <h3 class="mb-2 pb-3 border-b border-stroke">گروه ها</h3>
        <ul class="space-y-2">
          <li class="flex justify-between items-center" v-for="item in 3">
            آبشده نقره
            <div class="flex items-center gap-2">
              <Button
                pt:root="!bg-white !border !text-primary !text-sm w-20"
                label="ویرایش"
              />
              <Button
                pt:root="!bg-white !border !border-cred !text-cred !text-sm w-20"
                label="حذف"
              />
            </div>
          </li>
        </ul>
      </div>
    </Drawer>
  </div>
</template>

<script setup>
let route = useRoute()

let visible = ref(false)
</script>
