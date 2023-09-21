<script setup>
import CopyOfDialogFromLibrary from './components/CopyOfDialogFromLibrary.vue';
import CopyOfSelectFromLibrary from './components/CopyOfSelectFromLibrary.vue';
import items from './items';
import { ref } from 'vue';

const model = ref(true);
const dialogToShow = ref('lib');
</script>

<template>
  <v-app>
    <v-app-bar color="primary" title="Dialog Test"></v-app-bar>
    <v-btn style="z-index: 2500; top: 50px" @click="dialogToShow = 'lib'">
      Click to Show Dialog imported from Library
    </v-btn>
    <v-btn style="z-index: 2500; top: 55px" @click="dialogToShow = 'local'">
      Click to Show Dialog defined locally
    </v-btn>
    <v-main>
      <CopyOfDialogFromLibrary
        v-if="dialogToShow === 'local'"
        v-model="model"
        title="Locally Defined Dialog"
      >
        <template #content>
          <v-select
            label="Standard vuetify select component. Will show"
            :items="items"
            variant="outlined"
            item-title="text"
            item-value="value"
          ></v-select>

          <CopyOfSelectFromLibrary
            label="Locally defined select component. Will show"
            :items="items"
          >
          </CopyOfSelectFromLibrary>

          <StandardSelect label="Library defined select component. Will not show" :items="items">
          </StandardSelect>
        </template>
      </CopyOfDialogFromLibrary>

      <StandardDialog v-model="model" title="Library Defined Dialog" v-if="dialogToShow === 'lib'">
        <template #content>
          <v-select
            label="Standard vuetify select component. Will not show"
            :items="items"
            variant="outlined"
            item-title="text"
            item-value="value"
          ></v-select>

          <CopyOfSelectFromLibrary label="Locally defined select component. Will not show" :items="items"> </CopyOfSelectFromLibrary>

          <StandardSelect label="Library defined select component. Will show" :items="items"> </StandardSelect>
        </template>
      </StandardDialog>
    </v-main>
  </v-app>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
