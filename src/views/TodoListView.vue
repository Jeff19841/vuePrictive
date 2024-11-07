<template>
  <section class="h-screen w-full overflow-auto bg-gray-900 p-[100px]">
    <!-- 操作區 -->
    <div class="flex h-auto w-full flex-wrap gap-5 bg-gray-900">
      <!-- 卡片群組編輯區 -->
      <section class="flex-1 rounded-2xl bg-green-800 p-12">
        <h1 class="my-8 text-4xl font-bold text-white">卡片群組編輯區</h1>
        <div class="flex justify-end">
          <!-- 新增卡片鈕 -->
          <button
            v-if="pageStatus.mode != 'normal'"
            class="mb-3 w-32 rounded-md bg-gray-300 p-2"
            @click="pageStatus.mode = 'normal'"
          >
            取消
          </button>
          <!-- 新增卡片鈕 -->
          <button
            v-else
            class="mb-3 w-32 rounded-md bg-gray-300 p-2"
            @click="pageStatus.mode = 'creating'"
          >
            進入新增模式
          </button>
        </div>
        <!-- box -->
        <div class="flex flex-wrap gap-5">
          <TodoListCard
            v-for="(todoListItem, key) in todoListItemsData"
            :todoListItem="todoListItem"
            :key="key"
            @click="goToEditing(key)"
          ></TodoListCard>
          <button class="rounded-md bg-gray-300 p-2">確定上傳本區卡片</button>
          <button class="rounded-md bg-gray-300 p-2">取消</button>
        </div>
      </section>
      <!-- 單張卡片編輯區 -->
      <section class="flex-1 rounded-2xl bg-green-800 p-12">
        <h1 class="my-8 text-4xl font-bold text-white">
          編輯區{{ pageStatus.mode }}
        </h1>
        <!-- 編輯區 -->
        <div
          class="editArea rounded-2xl bg-slate-300 p-8"
          v-if="pageStatus.mode != 'normal'"
        >
          <div class="flex flex-col gap-y-5">
            <!-- 編輯區欄位 -->
            <div class="flex flex-col gap-y-5">
              <!-- 主題 -->
              <div class="flex">
                <h2 class="mb-2 mr-3 text-xl font-bold text-green-800">
                  主題:
                </h2>
                <input
                  type="text"
                  class="flex-1 rounded-lg bg-green-200 bg-transparent px-2 focus:outline-none"
                />
              </div>
              <!-- 內容 -->
              <div class="flex">
                <h2 class="mb-2 mr-3 text-xl font-bold text-green-800">
                  內容:
                </h2>
                <textarea
                  class="h-[200px] flex-1 rounded-lg bg-green-200 bg-transparent px-2 focus:outline-none"
                ></textarea>
              </div>
            </div>
            <!-- 編輯區按鈕 -->
            <div class="flex justify-end">
              <button
                @click="pageStatus.mode = 'normal'"
                class="mr-3 rounded-md bg-green-200 p-2 font-bold"
              >
                取消
              </button>
              <button class="rounded-md bg-green-800 p-2 font-bold text-white">
                新增
              </button>
            </div>
          </div>
        </div>
      </section>
      <!-- 顯示區 -->
      <section class="mb-5 flex h-auto w-full flex-wrap gap-5 bg-gray-900">
        <!-- 卡片群組編輯區 -->
        <section class="flex-1 rounded-2xl bg-green-800 p-12">
          <h1 class="my-8 text-4xl font-bold text-white">顯示區</h1>
          <div class="flex flex-wrap gap-5">
            <TodoListCard
              v-for="todoListItem in todoListItemsData"
              :todoListItem="todoListItem"
            ></TodoListCard>
          </div>
        </section>
      </section>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
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
  mode: "normal", // normal, editing, creating
});

function goToEditing(key) {
  alert(
    `我要準備編輯第${key + 1}個成員了,它的標題是：${todoListItemsData[key].title}`,
  );

  pageStatus.mode = "editing";
}
</script>

<style scoped></style>
