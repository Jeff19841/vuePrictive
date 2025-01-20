<script setup lang="ts">
// =================資料庫原檔=================
const SignItemData = [
  {
    user: "小明",
    password: 1234,
    name: "王曉明",
    idCard: "A1231239765",
    date: 20031205,
  },
  {
    user: "曉諭",
    password: 897345,
    name: "陳諭明",
    idCard: "X123476448",
    date: 19981022,
  },
];
</script>
<template>
  <section class="h-screen w-full overflow-auto bg-green-700 p-[100px]">
    <div class="flex h-auto w-full flex-wrap">
      <section class="flex-1 rounded-2xl bg-gray-600 p-12">
        <h1 class="my-8 text-center text-4xl font-bold text-white">註冊帳號</h1>
        <!-- 表單填寫區 -->
        <div class="p-auto m-auto mt-2 flex w-1/2 flex-col gap-5">
          <input
            type="text"
            placeholder="帳號名稱"
            class="solid black rounded-sm border-black bg-slate-300 px-10 py-3 pb-3 text-center"
          />
          <input
            type="password"
            placeholder="密碼"
            class="solid black rounded-sm border-black bg-slate-300 px-10 py-3 pb-3 text-center"
          />
          <input
            type="text"
            placeholder="真實姓名"
            class="solid black rounded-sm border-black bg-slate-300 px-10 py-3 pb-3 text-center"
          />
          <input
            type="text"
            placeholder="身分證字號"
            class="solid black rounded-sm border-black bg-slate-300 px-10 py-3 pb-3 text-center"
          />
          <input
            type="date"
            placeholder="入伍日期(年日月)"
            class="solid black rounded-sm border-black bg-slate-300 px-10 py-3 pb-3 text-center"
          />
        </div>
        <!-- 按鈕 -->
        <div class="mt-2 flex justify-end gap-5">
          <button class="flex rounded-md bg-gray-300 p-2">確定註冊</button>
        </div>
      </section>
    </div>
    {{ SignItemData }}
  </section>
</template>
<style scoped></style>
