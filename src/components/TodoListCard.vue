<template>
  <div
    class="group flex h-[200px] w-[48%] flex-col justify-start gap-y-4 rounded-xl border-4 border-stone-700 bg-slate-300 px-2 py-1.5 shadow-md"
  >
    <!-- ?代表有可能還不存在 -->
    <div class="flex justify-between overflow-hidden px-5 text-2xl font-bold">
      <!--勾選與標題 -->
      <div class="flex max-w-[60%] gap-3">
        <!-- 勾選 -->
        <label class="pt-1" v-if="listItemData.isDisplay != true">
          <!-- v-model -->
          <input
            v-model="listItemData.isClick"
            class="h-6 w-6 rounded-2xl"
            type="checkbox"
          />
        </label>
        <!-- 標題 -->
        <div class="line-clamp-1">
          {{ listItemData?.title || "XX" }}
        </div>
      </div>
      <!-- 編輯鈕和刪除鈕 -->
      <div
        v-if="listItemData.isDisplay != true"
        class="hidden shrink-0 gap-4 group-hover:flex"
      >
        <!-- 編輯鈕 -->
        <button @click="$emit('editCard', 1)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
        <button @click="$emit('deleteEditingCard', 1)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- 內容 -->
    <div class="mb-2 line-clamp-4 overflow-hidden break-words px-5 text-start">
      {{ listItemData?.content || "???" }}
    </div>
  </div>
</template>

<script setup>
const { isShowEditIcon, listItemData } = defineProps({
  isShowEditIcon: {
    type: Boolean,
    default: false,
  },
  listItemData: {
    type: Object,
  },
  componentType: {
    type: String,
    default: "edit", // edit, display
  },
  clickedCheckbox: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped></style>
