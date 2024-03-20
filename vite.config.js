import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                club: resolve(__dirname, 'club.html'),
                forInvestors: resolve(__dirname, 'forInvestors.html'),
            }
        }
    }
});