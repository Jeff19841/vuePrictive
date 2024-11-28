<template>
  <section class="h-screen w-full overflow-auto bg-blue-900 p-[100px]">
    <!-- 操作區 -->
    <div class="flex h-auto w-full flex-wrap gap-5">
      <!-- 卡片群組編輯區 -->
      <section class="flex-1 rounded-2xl bg-green-800 p-12">
        <h1 class="my-8 text-4xl font-bold text-white">
          卡片群組編輯區(學員用)
        </h1>
        <!-- 全選/反選按鈕 -->
        <div class="flex justify-between">
          <div class="">
            <button class="mb-3 mr-3 w-16 rounded-md bg-gray-300 p-2">
              全選
            </button>
            <button class="mb-3 w-16 rounded-md bg-gray-300 p-2">反選</button>
          </div>
          <!-- 新增mode鈕 -->
          <div class="flex justify-end">
            <button class="mb-3 w-32 rounded-md bg-gray-300 p-2">取消</button>
            <button class="mb-3 w-32 rounded-md bg-gray-300 p-2">
              進入新增模式
            </button>
          </div>
        </div>
        <!-- 卡片區 -->
        <div class="flex flex-wrap gap-5">
          <TodoListCard> </TodoListCard>
        </div>
        <!-- 卡片編輯區確定上傳/取消按鈕 -->
        <div class="flex justify-end gap-5">
          <button class="flex rounded-md bg-gray-300 p-2">
            確定上傳本區卡片
          </button>
        </div>
      </section>
      <!-- 單張卡片編輯區 -->
      <section class="flex-1 rounded-2xl bg-green-800 p-12">
        <h1 class="my-8 text-4xl font-bold text-white">編輯區</h1>
        <!-- 編輯區卡片component -->
        <div>
          <EditCard> </EditCard>
        </div>
      </section>
      <!-- 顯示區 -->
      <section class="mb-5 flex h-auto w-full flex-wrap gap-5">
        <!-- 卡片群組編輯區 -->
        <section class="flex-1 rounded-2xl bg-green-800 p-12">
          <h1 class="my-8 text-4xl font-bold text-white">顯示區</h1>
          <div class="flex flex-wrap gap-5">
            <TodoListCard></TodoListCard>
          </div>
        </section>
      </section>
    </div>
  </section>
</template>

<script setup>
import TodoListCard from "@/components/TodoListTemplateView/TodoListCard.vue";
import EditCard from "@/components/TodoListTemplateView/EditCard.vue";
// 來自資料庫的資料(不能更動)
const todoListItemsData = [
  {
    id: 1,
    title: "動作 ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae eaque odio suscipit eos consectetur, molestiae unde totam a sint cumque libero? Autem quae laboriosam enim similique exercitationem eaque iusto.",
  },
  {
    id: 2,
    title: "黑幫",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae eaque odio suscipit eos consectetur, molestiae unde totam a sint cumque libero? Autem quae laboriosam enim similique exercitationem ",
  },
  {
    id: 3,
    title: "動畫",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae eaque odio suscipit eos consectetur, molestiae unde totam a sint cumque libero? Autem quae laboriosam enim similique exercitationem eaq",
  },
  {
    id: 4,
    title: "超級英雄",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae eaque odio suscipit eos consectetur, molestiae unde totam a sint cumque libero? Autem quae laboriosam enim similique exercitationem",
  },
  {
    id: 5,
    title: "科幻",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae eaque odio suscipit eos consectetur, molestiae unde totam a sint cumque libero? Autem quae laboriosam enim similique exercitationem ",
  },
];
// ============DATA============

// 初始化資料

// ============Status============

// ============functions============
</script>

<style scoped></style>
