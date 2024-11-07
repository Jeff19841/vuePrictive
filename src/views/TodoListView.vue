<template>
  <section class="w-full h-screen p-[100px] bg-gray-900 overflow-auto">
    <!-- 顯示區 -->
    <div class="flex w-full h-auto bg-gray-900 gap-5 flex-wrap mb-5">
      <!-- 卡片群組編輯區 -->
      <section class="bg-green-800 p-12 rounded-2xl flex-1">
        <h1 class="text-4xl font-bold text-white my-8">顯示區</h1>
        <div class="flex flex-wrap gap-5">
          <TodoListCard
            v-for="todoListItem in todoListItemsData"
            :todoListItem="todoListItem"
          ></TodoListCard>
        </div>
      </section>
    </div>

    <!-- 操作區 -->
    <div class="flex w-full h-auto bg-gray-900 gap-5 flex-wrap">
      <!-- 卡片群組編輯區 -->
      <section class="bg-green-800 p-12 rounded-2xl flex-1">
        <h1 class="text-4xl font-bold text-white my-8">卡片群組編輯區</h1>
        <div class="flex justify-end">
          <!-- 新增卡片鈕 -->
          <button
            class="bg-gray-300 p-2 rounded-md mb-3 w-32"
            @click="pageStatus.isShowEditArea = !pageStatus.isShowEditArea"
          >
            {{ pageStatus.isShowEditArea ? "取消" : "新增一張卡片" }}
          </button>
        </div>
        <!-- box -->
        <div class="flex flex-wrap gap-5">
          <TodoListCard
            v-for="todoListItem in todoListItemsData"
            :todoListItem="todoListItem"
          ></TodoListCard>
          <button class="bg-gray-300 p-2 rounded-md">確定上傳本區卡片</button>
          <button class="bg-gray-300 p-2 rounded-md">取消</button>
        </div>
      </section>
      <!-- 單張卡片編輯區 -->
      <section class="bg-green-800 p-12 rounded-2xl flex-1">
        <h1 class="text-4xl font-bold text-white my-8">編輯區</h1>
        <!-- 編輯區 -->
        <div
          class="bg-slate-300 p-8 rounded-2xl editArea"
          v-if="pageStatus.isShowEditArea"
        >
          <div class="flex flex-col gap-y-5">
            <!-- 編輯區欄位 -->
            <div class="flex flex-col gap-y-5">
              <!-- 主題 -->
              <div class="flex">
                <h2 class="text-xl font-bold text-green-800 mb-2 mr-3">
                  主題:
                </h2>
                <input
                  type="text"
                  class="bg-transparent focus:outline-none flex-1 px-2 bg-green-200 rounded-lg"
                />
              </div>
              <!-- 內容 -->
              <div class="flex">
                <h2 class="text-xl font-bold text-green-800 mb-2 mr-3">
                  內容:
                </h2>
                <textarea
                  class="bg-transparent focus:outline-none flex-1 px-2 h-[200px] bg-green-200 rounded-lg"
                ></textarea>
              </div>
            </div>
            <!-- 編輯區按鈕 -->
            <div class="flex justify-end">
              <button class="p-2 rounded-md mr-3 bg-green-200 font-bold">
                取消
              </button>
              <button class="text-white p-2 rounded-md bg-green-800 font-bold">
                新增
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import TodoListCard from "@/components/TodoListCard.vue";

const todoListItemsData = reactive([
  {
    title: "動作",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae eaque odio suscipit eos consectetur, molestiae unde totam a sint cumque libero? Autem quae laboriosam enim similique exercitationem eaque iusto.",
  },
  {
    title: "黑幫",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae eaque odio suscipit eos consectetur, molestiae unde totam a sint cumque libero? Autem quae laboriosam enim similique exercitationem ",
  },
  {
    title: "動畫",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae eaque odio suscipit eos consectetur, molestiae unde totam a sint cumque libero? Autem quae laboriosam enim similique exercitationem eaq",
  },
  {
    title: "超級英雄",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae eaque odio suscipit eos consectetur, molestiae unde totam a sint cumque libero? Autem quae laboriosam enim similique exercitationem",
  },
  {
    title: "科幻",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae eaque odio suscipit eos consectetur, molestiae unde totam a sint cumque libero? Autem quae laboriosam enim similique exercitationem ",
  },
  {
    title: "家庭",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae eaque odio suscipit eos consectetur, molestiae unde totam a sint cumque libero? Autem quae laboriosam enim similique exercitationem e",
  },
]);
const pageStatus = reactive({
  isShowEditArea: false,
});
</script>

<style scoped></style>
