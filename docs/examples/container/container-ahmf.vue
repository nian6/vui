<template>
  <div class="layout">
    <v-container>
      <v-aside width="200px">Aside</v-aside>
      <v-container vertical>
        <v-header>Header</v-header>
        <v-main>Main</v-main>
        <v-footer>Main</v-footer>
      </v-container>
    </v-container>
  </div>
</template>
<style scoped lang="scss">
.layout {
  .v-main,
  .v-aside,
  .v-header,
  .v-footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .v-main {
    background-color: var(--v-color-primary-light-9);
    color: var(--v-text-color-primary);
    text-align: center;
    height: 150px;
  }

  .v-aside {
    background-color: var(--v-color-primary-light-8);
    color: var(--v-text-color-primary);
    text-align: center;
  }

  .v-header,
  .v-footer {
    background-color: var(--v-color-primary-light-7);
    color: var(--v-text-color-primary);
    text-align: center;
  }
}
</style>
