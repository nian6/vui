<script setup lang="ts"></script>
<template>
  <p class="button-box">
    <v-button disabled>Default</v-button>
    <v-button disabled type="primary">Primary</v-button>
    <v-button disabled type="success">Success</v-button>
    <v-button disabled type="info">Info</v-button>
    <v-button disabled type="warning">Warning</v-button>
    <v-button disabled type="danger">Danger</v-button>
  </p>
  <p class="button-box">
    <v-button disabled plain>Plain</v-button>
    <v-button disabled plain type="primary">Primary</v-button>
    <v-button disabled plain type="success">Success</v-button>
    <v-button disabled plain type="info">Info</v-button>
    <v-button disabled plain type="warning">Warning</v-button>
    <v-button disabled plain type="danger">Danger</v-button>
  </p>
</template>
<style scoped>
.button-box {
  display: flex;
  gap: 8px;
}
</style>
