<template>
  <p>基础文字按钮</p>
  <p class="button-box">
    <v-button text>Plain</v-button>
    <v-button text type="primary">Primary</v-button>
    <v-button text type="success">Success</v-button>
    <v-button text type="info">Info</v-button>
    <v-button text type="warning">Warning</v-button>
    <v-button text type="danger">Danger</v-button>
  </p>

  <p>有背景颜色</p>
  <p class="button-box">
    <v-button text bg>Plain</v-button>
    <v-button text bg type="primary">Primary</v-button>
    <v-button text bg type="success">Success</v-button>
    <v-button text bg type="info">Info</v-button>
    <v-button text bg type="warning">Warning</v-button>
    <v-button text bg type="danger">Danger</v-button>
  </p>

  <p>禁用状态</p>
  <p class="button-box">
    <v-button text disabled>Round</v-button>
    <v-button text disabled type="primary">Primary</v-button>
    <v-button text disabled type="success">Success</v-button>
    <v-button text disabled type="info">Info</v-button>
    <v-button text disabled type="warning">Warning</v-button>
    <v-button text disabled type="danger">Danger</v-button>
  </p>
</template>
<style scoped>
.button-box {
  display: flex;
  gap: 8px;
}
</style>
