<script setup lang="ts">
import type { CryptoData } from '@/interfaces/cryptos'

// eslint-disable-next-line
const { quotation } = defineProps<{ quotation: CryptoData | null }>()
</script>

<template>
  <div class="container-result">
    <h2>Quotation</h2>

    <div class="result">
      <img :src="`https://cryptocompare.com/${quotation?.IMAGEURL}`" alt="Crypto Logo" />

      <div>
        <p>
          Price: <span>{{ quotation?.PRICE }}</span>
        </p>
        <p>
          Highest price day <span>{{ quotation?.HIGHDAY }}</span>
        </p>
        <p>
          Lowest price day: <span>{{ quotation?.LOWDAY }}</span>
        </p>
        <p>
          Variation last 24 hours: <span>{{ quotation?.CHANGEPCT24HOUR }}%</span>
        </p>
        <p>
          Last Updated: <span>{{ quotation?.LASTUPDATE }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
