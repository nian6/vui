<template>
  <div>
    <v-radio-group v-model="radio1">
      <v-radio value="1" size="large" border>Option A</v-radio>
      <v-radio value="2" size="large" border>Option B</v-radio>
    </v-radio-group>
  </div>
  <div style="margin-top: 20px">
    <v-radio-group v-model="radio2">
      <v-radio value="1" border>Option A</v-radio>
      <v-radio value="2" border>Option B</v-radio>
    </v-radio-group>
  </div>
  <div style="margin-top: 20px">
    <v-radio-group v-model="radio3">
      <v-radio value="1" border size="small">Option A</v-radio>
      <v-radio value="2" border disabled size="small">Option B</v-radio>
    </v-radio-group>
  </div>
  <div style="margin-top: 20px">
    <v-radio-group v-model="radio4">
      <v-radio value="1" border disabled size="small">Option A</v-radio>
      <v-radio value="2" border disabled size="small">Option B</v-radio>
    </v-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const radio1 = ref('1');
const radio2 = ref('1');
const radio3 = ref('1');
const radio4 = ref('1');
</script>
