<template>
  <div class="box">
    <v-radio-group v-model="radio1">
      <v-radio value="1" size="large">Option 1</v-radio>
      <v-radio value="2" size="large">Option 2</v-radio>
    </v-radio-group>
  </div>
  <div class="box">
    <v-radio-group v-model="radio2">
      <v-radio value="1">Option 1</v-radio>
      <v-radio value="2">Option 2</v-radio>
    </v-radio-group>
  </div>
  <div class="box">
    <v-radio-group v-model="radio3">
      <v-radio value="1" size="small">Option 1</v-radio>
      <v-radio value="2" size="small">Option 2</v-radio>
    </v-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const radio1 = ref('1');
const radio2 = ref('1');
const radio3 = ref('1');
</script>

<style scoped>
.box {
  margin-left: 16px;
  margin-bottom: 8px;
}
</style>
