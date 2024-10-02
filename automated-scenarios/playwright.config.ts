import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: 'tests',
    fullyParallel: true,
    use: {
        trace: 'on-first-retry'
    },
});