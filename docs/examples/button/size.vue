<script setup lang="ts"></script>
<template>
  <p class="button-box">
    <v-button size="large">Large</v-button>
    <v-button>Default</v-button>
    <v-button size="small">Small</v-button>
    <v-button size="large" type="primary">Large</v-button>
    <v-button type="primary">Default</v-button>
    <v-button size="small" type="primary">Small</v-button>
  </p>
  <p class="button-box">
    <v-button size="large" round>Large</v-button>
    <v-button round>Default</v-button>
    <v-button size="small" round>Small</v-button>
    <v-button size="large" type="primary" round>Large</v-button>
    <v-button type="primary" round>Default</v-button>
    <v-button size="small" type="primary" round>Small</v-button>
  </p>
</template>
<style scoped>
.button-box {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
