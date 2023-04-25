/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  test: {
    globals: true, // use `describe, it, test` without importing them
    environment: "jsdom",
    setupFiles: "./src/__tests__/setup.js",
  },
});