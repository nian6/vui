<template>
  <div class="box">
    <v-radio v-model="radio" disabled value="disabled">Option A</v-radio>
    <v-radio v-model="radio" disabled value="selected and disabled">
      Option B
    </v-radio>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const radio = ref('selected and disabled');
</script>

<style scoped>
.box {
  display: flex;
  gap: 32px;
}
</style>
