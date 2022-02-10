<template>
    <wallet-provider :wallets="wallets" auto-connect>
        <button>Connect wallet</button>
    </wallet-provider>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { getPhantomWallet, getSolflareWallet } from '@solana/wallet-adapter-wallets'
import { WalletProvider } from '@solana/wallet-adapter-vue'

const route = useRoute()

const wallets = [
    getPhantomWallet(),
    getSolflareWallet(),
]
</script>

<style scoped>

</style>
