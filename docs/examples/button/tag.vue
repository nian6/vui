<template>
  <div class="button-box">
    <v-button>button</v-button>
    <v-button tag="div" role="button" tabindex="0">div</v-button>
    <v-button type="primary" tag="a" href="#" target="_blank">a</v-button>
  </div>
</template>
<style scoped>
.button-box {
  display: flex;
  gap: 8px;
}
</style>
