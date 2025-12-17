<script setup lang="ts">
import { VText } from 'vui';
</script>
<template>
  <div class="play-container">
    <v-text>你好</v-text>
    <v-text size="large">你好</v-text>
    <v-text size="small">你好</v-text>
  </div>
</template>
<style lang="scss">
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;

  #app {
    height: 100%;
    width: 100%;

    .play-container {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }
  }
}
</style>
