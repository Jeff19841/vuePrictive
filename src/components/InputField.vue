<script setup lang="ts">
import { defineProps } from "vue";

interface InputItem {
  user: string;
  password: number;
  name: string;
  idCard: string;
  date: string;
}

const props = defineProps<{ inputItem: InputItem }>();
</script>
<template></template>
<style scoped></style>
