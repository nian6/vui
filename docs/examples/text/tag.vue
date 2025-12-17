<template>
  <div class="text-box">
    <v-text>span</v-text>
    <v-text tag="p">This is a paragraph.</v-text>
    <v-text tag="b">Bold</v-text>
    <v-text tag="i">Italic</v-text>
    <v-text>
      This is
      <v-text tag="sub" size="small">subscript</v-text>
    </v-text>
    <v-text>
      This is
      <v-text tag="sup" size="small">superscript</v-text>
    </v-text>
    <v-text tag="ins">Inserted</v-text>
    <v-text tag="del">Deleted</v-text>
    <v-text tag="mark">Marked</v-text>
  </div>
</template>
<style scoped>
.text-box {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
</style>
