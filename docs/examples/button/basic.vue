<script lang="ts" setup></script>
<template>
  <p class="button-box">
    <v-button>Default</v-button>
    <v-button type="primary">Primary</v-button>
    <v-button type="success">Success</v-button>
    <v-button type="info">Info</v-button>
    <v-button type="warning">Warning</v-button>
    <v-button type="danger">Danger</v-button>
  </p>

  <p class="button-box">
    <v-button plain>Plain</v-button>
    <v-button type="primary" plain>Primary</v-button>
    <v-button type="success" plain>Success</v-button>
    <v-button type="info" plain>Info</v-button>
    <v-button type="warning" plain>Warning</v-button>
    <v-button type="danger" plain>Danger</v-button>
  </p>

  <p class="button-box">
    <v-button round>Round</v-button>
    <v-button type="primary" round>Primary</v-button>
    <v-button type="success" round>Success</v-button>
    <v-button type="info" round>Info</v-button>
    <v-button type="warning" round>Warning</v-button>
    <v-button type="danger" round>Danger</v-button>
  </p>
</template>
<style scoped>
.button-box {
  display: flex;
  gap: 8px;
}
</style>
