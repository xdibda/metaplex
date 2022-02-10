import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
    css: [
        '~/@solana/wallet-adapter-vue-ui/styles.css'
    ],

    build: {
        transpile: ['@solana/*']
    }
})
