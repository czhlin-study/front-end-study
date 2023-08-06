<template>
  <div>
    <Hello /><span class="title">{{ msg }}</span>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Hello from "./Hello";
const msg = ref("world!");
</script>
<style lang="scss" scoped>
.title {
  color: aqua;
}
</style>
