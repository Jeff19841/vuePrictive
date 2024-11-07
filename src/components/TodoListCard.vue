<template>
  <div
    class="flex h-[200px] w-[48%] flex-col justify-between rounded-xl border-4 border-stone-700 bg-slate-300 px-2.5 py-1.5 shadow-md"
  >
    <!-- ?代表有可能還不存在 -->
    <div class="mb-2 px-5 text-center text-2xl font-bold">
      {{ props?.todoListItem?.title || "XX" }}
    </div>
    <div class="mb-2 flex-1 overflow-hidden text-center">
      {{ props?.todoListItem?.content || "???" }}
    </div>
    <div class="text-right">顯示更多</div>
  </div>
</template>

<script setup>
const props = defineProps(["todoListItem"]);
</script>

<style scoped></style>
