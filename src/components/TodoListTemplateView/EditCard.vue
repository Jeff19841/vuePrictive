<template>
  <!-- 編輯區 -->
  <div class="rounded-2xl bg-slate-300 p-8">
    <div class="flex flex-col gap-y-5">
      <!-- 編輯區欄位 -->
      <div class="flex flex-col gap-y-5">
        <!-- 主題 -->
        <div class="flex">
          <h2 class="mb-2 mr-3 text-xl font-bold text-green-800">主題:</h2>
          <input
            class="flex-1 rounded-lg bg-green-200 px-2 focus:outline-none"
            type="text"
          />
        </div>
        <!-- 內容 -->
        <div class="flex">
          <h2 class="mb-2 mr-3 text-xl font-bold text-green-800">內容:</h2>
          <textarea
            class="h-[200px] flex-1 rounded-lg bg-green-200 px-2 focus:outline-none"
          ></textarea>
        </div>
      </div>
      <!-- 編輯區按鈕 -->
      <div class="flex justify-end">
        <button class="mr-3 rounded-md bg-green-200 p-2 font-bold">取消</button>
        <button class="rounded-md bg-green-800 p-2 font-bold text-white">
          完成
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts"></script>
<style></style>
