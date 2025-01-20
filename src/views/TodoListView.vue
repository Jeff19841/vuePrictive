<template>
  <section class="h-screen w-full overflow-auto bg-blue-900 p-[100px]">
    <!-- 操作區 -->
    <!-- TODO flex -->
    <div class="h-auto w-full flex-wrap gap-5">
      <!-- 卡片群組編輯區 -->
      <section class="flex-1 rounded-2xl bg-green-800 p-12">
        <h1 class="my-8 text-4xl font-bold text-white">卡片群組編輯區</h1>
        <!-- 全選/反選 -->
        <div class="flex justify-between">
          <div class="">
            <button
              class="mb-3 mr-3 w-16 rounded-md bg-gray-300 p-2"
              @click="pageAction.selectAll"
            >
              全選
            </button>
            <button
              class="mb-3 w-16 rounded-md bg-gray-300 p-2"
              @click="pageAction.selectDisAll"
            >
              反選
            </button>
          </div>
          <!-- 新增mode鈕 -->
          <div class="flex justify-end">
            <button
              class="mb-3 w-32 rounded-md bg-gray-300 p-2"
              @click="pageAction.isShowCreating"
            >
              {{ dataStatus.mode === "normal" ? "進入新增模式" : "取消" }}
            </button>
          </div>
        </div>
        <!-- 卡片區 -->
        <div class="flex flex-wrap gap-5">
          <TodoListCard
            v-for="(todoListItem, key) in pageData.editItemList"
            :todoListItem="todoListItem"
            :key="key"
            @editEditArea="pageAction.editEditArea(key)"
            @deleteCard="pageAction.deleteCard(key)"
          >
          </TodoListCard>
        </div>
        <!-- 卡片編輯區確定上傳/取消按鈕 -->
        <div class="mt-2 flex justify-end gap-5">
          <button
            class="flex rounded-md bg-gray-300 p-2"
            @click="pageAction.renewDisplayDataList"
          >
            確定上傳本區卡片
          </button>
        </div>
      </section>
      <!-- 單張卡片編輯區 -->
      <section class="flex-1 rounded-2xl bg-green-800 p-12">
        <h1 class="my-8 text-4xl font-bold text-white">
          編輯區:{{ showupMode }}
        </h1>
        <!-- 編輯區 -->
        <div>
          <!-- 卡片編輯區 -->
          <EditArea
            :inputItem="pageData.inputItem"
            v-if="dataStatus.mode != 'normal'"
            @finishEditingOrCreating="pageAction.finishEditingOrCreating"
            @cancelEditArea="pageAction.clearUpEditArea"
          >
          </EditArea>
        </div>
      </section>
      <!-- 顯示區 -->
      <section class="mb-5 flex h-auto w-full flex-wrap gap-5">
        <section class="flex-1 rounded-2xl bg-green-800 p-12">
          <h1 class="my-8 text-4xl font-bold text-white">顯示區</h1>
          <div class="flex flex-wrap gap-5">
            <TodoListCard
              v-for="(showListItem, key) in pageData.displayItemList"
              :todoListItem="showListItem"
              :key="key"
            ></TodoListCard>
          </div>
        </section>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import EditArea from "@/components/EditArea.vue";
import TodoListCard from "@/components/TodoListCard.vue";
import { computed, reactive } from "vue";
// ============定義資料結構============
interface TodoListItem {
  id: number;
  title: string;
  content: string;
  isDisplay?: boolean;
  isClick?: boolean;
}
interface InputItem {
  id: number;
  title: string;
  content: string;
}
interface pageData {
  editItemList: TodoListItem;
  displayItemList: TodoListItem;
  inputItem: InputItem;
}
interface DataStatus {
  mode: "normal" | "editing" | "creating";
}
// 來自資料庫的資料(不能更動)
const todoListItemsData = [
  {
    id: 1,
    title: "動作",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae eaque odio suscipit eos consectetur, molestiae unde totam a sint cumque libero? Autem quae laboriosam enim similique exercitationem eaque iusto.",
  },
  {
    id: 2,
    title: "黑幫",
    ti: "ji3",
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
    title: "喜劇",
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
// 資料區
interface PageData {
  editItemList: EditableItem[];
  displayItemList: InputItem[];
  inputItem: InputItem;
}

interface EditableItem extends InputItem {
  isDisplay: boolean;
  isClick: boolean;
}

const pageData = reactive<PageData>({
  editItemList: [],
  displayItemList: [],
  inputItem: {
    id: 0,
    title: "",
    content: "",
  },
});
// 初始化資料新增內容
pageData.editItemList = todoListItemsData.map((item) => {
  return { ...item, isDisplay: false, isClick: false };
});
const showupMode = computed(() => {
  if (dataStatus.mode == "normal") return "";
  if (dataStatus.mode == "creating") return "新增模式";
  return "編輯模式";
});

// ============Status============
const dataStatus = reactive({ mode: "normal" }); //normal, editing, creating

// ============functions============
const pageAction = {
  // 清空
  clearUpEditArea() {
    pageData.inputItem.title = "";
    pageData.inputItem.content = "";
    dataStatus.mode = "normal";
  },

  // 編輯模式更新
  updateItemList(item: EditableItem) {
    const indexId = pageData.editItemList.findIndex((i) => i.id === item.id);
    // findIndex找到不存在的值會return -1
    if (indexId !== -1) {
      pageData.editItemList[indexId] = item;
    } else {
      pageData.editItemList.push(item);
    }
  },

  finishEditingOrCreating() {
    const newItem: EditableItem = {
      id:
        dataStatus.mode === "creating"
          ? pageData.editItemList.length + 1
          : pageData.inputItem.id,
      title: pageData.inputItem.title,
      content: pageData.inputItem.content,
      isDisplay: false,
      isClick: false,
    };
    pageAction.updateItemList(newItem);
    pageAction.clearUpEditArea();
  },

  //   卡片上編輯紐
  editEditArea(key: number) {
    pageData.inputItem = { ...pageData.editItemList[key] };
    dataStatus.mode = "editing";
  },

  //   確定刪除
  deleteCard(key: number) {
    let isConfirmed = confirm("確定刪除");
    if (isConfirmed) {
      pageData.editItemList.splice(key, 1);
      this.clearUpEditArea();
    }
  },
  //   更新顯示區
  renewDisplayDataList() {
    const filteredList = pageData.editItemList
      .filter((item) => item.isClick)
      .map((item) => ({ ...item, isDisplay: true }));

    pageData.displayItemList.splice(
      0,
      pageData.displayItemList.length,
      ...filteredList,
    );
  },
  //   全選
  selectAll() {
    pageData.editItemList = pageData.editItemList.map((item) => {
      return { ...item, isClick: true };
    });
  },
  //   反選
  selectDisAll() {
    pageData.editItemList = pageData.editItemList.map((item) => {
      return { ...item, isClick: !item.isClick };
    });
  },
  //   進入新增/取消紐
  isShowCreating() {
    if (dataStatus.mode == "normal") {
      dataStatus.mode = "creating";
    } else {
      this.clearUpEditArea();
    }
  },
};
</script>

<style lang="scss" scoped></style>
