import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: 'tests',
    fullyParallel: true,
    use: {
        // headless: false,
        trace: 'on-first-retry'
    },

});