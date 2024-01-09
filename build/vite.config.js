// vite.config.js for the lib

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [vue()],
    assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.otf', '**/*.eot', '**/*.ttf'],
    build: {
        cssCodeSplit: false,
        lib: {
            entry: path.resolve(__dirname, '../src/rollup.js'),
            name: 'VueTagsInput',
            fileName: (format) => `vue-tags-input.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                },
                assetFileNames: assetInfo => {
                    if (assetInfo.name.endsWith('.css'))
                        return 'assets/vue-tags-input.css'
                    else if (assetInfo.name.endsWith('.ttf') || assetInfo.name.endsWith('.eot') || assetInfo.name.endsWith('.woff') || assetInfo.name.endsWith('.woff2') || assetInfo.name.endsWith('.otf')) {
                        return 'assets/fonts/[hash][extname]';
                    } else
                        return 'assets/[hash][extname]';
                }
            }
        },
        sourcemap: true,
    },
    resolve: {
        alias: {
            vue: '@vue/runtime-dom',
            '@': path.resolve(__dirname, '../src/assets')
        },
    },
    css: {
        preprocessorOptions: {
            scss: {}
        },
        postcss: {
            to: 'vue-tags-input.css',
            plugins: [
                require('autoprefixer'),
            ],
        }
    },
});
