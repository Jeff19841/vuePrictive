<template>
  <div
    class="border-4 border-stone-700 w-[48%] h-[200px] bg-slate-300 shadow-md rounded-xl flex flex-col justify-between px-2.5 py-1.5"
  >
    <!-- ?代表有可能還不存在 -->
    <div class="text-2xl font-bold text-center px-5 mb-2">
      {{ props?.todoListItem?.title || "XX" }}
    </div>
    <div class="text-center flex-1 overflow-hidden mb-2">
      {{ props?.todoListItem?.content || "???" }}
    </div>
    <div class="text-right">顯示更多</div>
  </div>
</template>

<script setup>
const props = defineProps(["todoListItem"]);
</script>

<style scoped></style>
