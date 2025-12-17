<template>
  <div class="layout">
    <v-container vertical>
      <v-header>Header</v-header>
      <v-main>Main</v-main>
    </v-container>
  </div>
</template>
<style scoped lang="scss">
.layout {
  .v-header,
  .v-main {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .v-header {
    background-color: var(--v-color-primary-light-7);
    color: var(--v-text-color-primary);
    text-align: center;
  }

  .v-main {
    background-color: var(--v-color-primary-light-9);
    color: var(--v-text-color-primary);
    text-align: center;
    height: 150px;
  }
}
</style>
