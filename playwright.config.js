// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 0,
  workers: 1,
  reporter: 'html',
  expect:{
    timeout: 10 * 1000
  },
  use: {
    browserName:'chromium',
    headless:false,
    screenshot:'only-on-failure',
    trace: 'on',
  },

});

