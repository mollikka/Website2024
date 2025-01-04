import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,
    baseURL: 'http://127.0.0.1:1111',
  },
  timeout: 60000,
});
