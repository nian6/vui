<template>
  <v-radio-group v-model="radio">
    <v-radio :value="3">Option A</v-radio>
    <v-radio :value="6">Option B</v-radio>
    <v-radio :value="9">Option C</v-radio>
  </v-radio-group>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const radio = ref(3);
</script>
