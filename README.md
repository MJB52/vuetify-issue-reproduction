# Minimal reproduction of issue

- Run pnpm run dev
- Open http://http://localhost:5173

# When the dialog that is definied in the vuetify-example-lib is opened, the v-select component defined locally will be shown with the incorrect z-index, but the one defined in the vuetify-example-lib will be shown correctly.
# When the dialog that is defined locally is opened, the v-select component defined in the vuetify-example-lib will be shown with the incorrect z-index, but the one defined locally will be shown correctly.