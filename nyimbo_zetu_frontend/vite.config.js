import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import graphqlLoader from "vite-plugin-graphql-loader";


import vueDevTools from 'vite-plugin-vue-devtools'

import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss(), graphqlLoader()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
