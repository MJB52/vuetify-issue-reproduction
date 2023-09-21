<template>
    <v-select
      variant="outlined"
      :items="items"
      :label="label"
      item-title="text"
      item-value="value"
    >
    </v-select>
  </template>

  <script>
  import { defineComponent } from 'vue';


  export default defineComponent({
    name: 'CopyOfSelectFromLibrary',
    props: {
      label: {
        type: String,
        default: undefined,
      },
      items: {
        type: Array,
        required: true,
      },
    },
  });
  </script>

  <style scoped></style>
