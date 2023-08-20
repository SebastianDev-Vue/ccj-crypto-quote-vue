<script setup lang="ts">
import { ref } from 'vue'

import Alert from '@/components/AlertComponent.vue'
import Spinner from '@/components/SpinnerComponent.vue'
import Quote from '@/components/QuoteComponent.vue'

import useCrypto from '@/composables/useCrypto'

const { currencies, cryptos, getQuote, quote, quotation,isLoading, showResult } = useCrypto()

const error = ref<string>('')

const quoteCrypto = (): void => {
  if (Object.values(quote).includes('')) {
    error.value = 'All Fields are required'
    return
  }

  error.value = ''
  getQuote()
}
</script>

<template>
  <div class="container">
    <h1 class="title"><span>Crypto</span> Quotation</h1>

    <main class="content">
      <Alert v-if="error">
        {{ error }}
      </Alert>

      <form class="form" @submit.prevent="quoteCrypto">
        <div class="field">
          <label for="currency">Currency:</label>
          <select id="currency" v-model="quote.currency">
            <option>-- Select --</option>
            <option v-for="currency in currencies" :key="currency.code" :value="currency.code">
              {{ currency.text }}
            </option>
          </select>
        </div>

        <div class="field">
          <label for="crypto">Crypto:</label>
          <select id="crypto" v-model="quote.crypto">
            <option>-- Select --</option>
            <option
              v-for="crypto in cryptos"
              :key="crypto.CoinInfo.Id"
              :value="crypto.CoinInfo.Name"
            >
              {{ crypto.CoinInfo.FullName }}
            </option>
          </select>
        </div>

        <input type="submit" value="Get a Quote" />
      </form>

      <Spinner v-if="isLoading" />

      <Quote v-if="showResult" :quotation="quotation"/>
    </main>
  </div>
</template>

<style scoped></style>
