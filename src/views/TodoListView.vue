<template>
  <section class="h-screen w-full overflow-auto bg-gray-900 p-[100px]">
    <!-- 操作區 -->
    <div class="flex h-auto w-full flex-wrap gap-5 bg-gray-900">
      <!-- 卡片群組編輯區 -->
      <section class="flex-1 rounded-2xl bg-green-800 p-12">
        <h1 class="my-8 text-4xl font-bold text-white">卡片群組編輯區</h1>
        <!-- TODO全選/反選 -->
        <div class="flex justify-between">
          <div class="">
            <button
              @click="pageAction.selectAll"
              class="mb-3 mr-3 w-16 rounded-md bg-gray-300 p-2"
            >
              全選
            </button>
            <button
              @click="pageAction.selectReAll"
              class="mb-3 w-16 rounded-md bg-gray-300 p-2"
            >
              反選
            </button>
          </div>
          <!-- 新增mode鈕 -->
          <div class="flex justify-end">
            <button
              v-if="pageStatus.mode !== 'normal'"
              class="mb-3 w-32 rounded-md bg-gray-300 p-2"
              @click="pageAction.clearCard"
            >
              取消
            </button>
            <button
              v-else
              class="mb-3 w-32 rounded-md bg-gray-300 p-2"
              @click="pageStatus.mode = 'creating'"
            >
              進入新增模式
            </button>
          </div>
        </div>
        <!-- 卡片區 -->
        <div class="flex flex-wrap gap-5">
          <TodoListCard
            v-for="(todoListItem, key) in pageData.editItemList"
            :listItemData="todoListItem"
            :key="key"
            @editCard="pageAction.goToEditing(key)"
            @deleteEditingCard="pageAction.deleteCard(key)"
          >
          </TodoListCard>
        </div>
        <!-- 卡片編輯區確定上傳/取消按鈕 -->
        <div class="flex justify-end gap-5">
          <button
            class="flex rounded-md bg-gray-300 p-2"
            @click="pageAction.renewDisplayItemList"
          >
            確定上傳本區卡片
          </button>
          <!-- <button class="rounded-md bg-gray-300 p-2">
            取消
          </button> -->
        </div>
      </section>
      <!-- 單張卡片編輯區 -->
      <section class="flex-1 rounded-2xl bg-green-800 p-12">
        <h1 class="my-8 text-4xl font-bold text-white">
          編輯區{{ pageStatus.showUpCreatingMode }}
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
                  class="flex-1 rounded-lg bg-green-200 px-2 focus:outline-none"
                  v-model="pageData.inputData.title"
                />
              </div>
              <!-- 內容 -->
              <div class="flex">
                <h2 class="mb-2 mr-3 text-xl font-bold text-green-800">
                  內容:
                </h2>
                <textarea
                  v-model="pageData.inputData.content"
                  class="h-[200px] flex-1 rounded-lg bg-green-200 px-2 focus:outline-none"
                ></textarea>
              </div>
            </div>
            <!-- 編輯區按鈕 -->
            <div class="flex justify-end">
              <button
                @click="clearCard"
                class="mr-3 rounded-md bg-green-200 p-2 font-bold"
              >
                取消
              </button>
              <button
                class="rounded-md bg-green-800 p-2 font-bold text-white"
                @click="pageAction.finishEditingOrCreating"
              >
                完成
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
              v-for="(showListItem, key) in pageData.displayItemList"
              :listItemData="showListItem"
              :key="key"
            ></TodoListCard>
          </div>
        </section>
      </section>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import TodoListCard from "@/components/TodoListCard.vue";
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
const pageData = reactive({
  editItemList: [],
  displayItemList: [],
  inputData: {
    id: 0,
    title: "",
    content: "",
  },
});

// 初始化資料
pageData.editItemList = todoListItemsData.map((item) => {
  return {
    ...item,
    isDisplay: false,
    isClick: false,
  };
});

// ============Status============
const pageStatus = reactive({
  mode: "normal", //normal,editing,creating
  showUpCreatingMode: computed(() => {
    if (pageStatus.mode === "normal") return "";
    else if (pageStatus.mode === "editing") return ":編輯模式";
    else return ":新增模式";
  }),
});

// ============functions============
const pageAction = reactive({
  // 清空
  clearCard() {
    pageStatus.mode = "normal";
    pageData.inputData.id = 0;
    pageData.inputData.title = "";
    pageData.inputData.content = "";
  },
  //   編輯模式資料
  goToEditing: (key) => {
    const selectedCard = pageData.editItemList[key];
    // TODO  why!!??
    // pageData.inputData.id = selectedCard.id;
    // pageData.inputData.title = selectedCard.title;
    // pageData.inputData.content = selectedCard.content;
    pageData.inputData = { ...selectedCard };

    pageStatus.mode = "editing";
  },
  // 確定編輯/新增判斷
  finishEditingOrCreating() {
    if (pageStatus.mode === "creating") {
      pageData.editItemList.push({
        // TODO +1 ?? why!!??
        id: pageData.editItemList.length + 1,
        title: pageData.inputData.title,
        content: pageData.inputData.content,
      });
    } else if (pageStatus.mode === "editing") {
      const index = pageData.editItemList.findIndex(
        (item) => item.id === pageData.inputData.id,
      );
      pageData.editItemList[index] = {
        ...pageData.inputData,
      };
    }
    pageAction.clearCard();
  },
  // 刪除卡片
  deleteCard(key) {
    const confirmed = confirm("確定刪除?");
    if (confirmed) {
      pageData.editItemList.splice(key, 1);
    }
  },
  // 更新顯示區
  renewDisplayItemList() {
    // TODO  why!!?? 更新上傳條件
    // 擴充todoListItemsData為formatShowListItemData
    let formattedEditItemList = pageData.editItemList.map((item) => {
      return { ...item, isDisplay: true };
    });

    formattedEditItemList = formattedEditItemList.filter((item) => {
      return item.isClick == true;
    });

    pageData.displayItemList.splice(
      0,
      pageData.displayItemList.length,
      ...formattedEditItemList,
    );
  },
  // TODO  why!!??why!!??why!!??why!!??why!!??
  selectAll: () => {
    pageData.editItemList = pageData.editItemList.map((item) => {
      return {
        ...item,
        isClick: true,
      };
    });
  },
  selectReAll: () => {
    pageData.editItemList = pageData.editItemList.map((item) => {
      return {
        ...item,
        isClick: !item.isClick,
      };
    });
  },
});
</script>

<style scoped></style>
