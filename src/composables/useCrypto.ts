import { ref, onMounted, reactive, computed } from 'vue'

import type { CryptoData, Datum } from '@/interfaces/cryptos'

interface Currency {
  code: string
  text: string
}

const useCrypto = () => {
  const cryptos = ref<Datum[]>([])

  const currencies = ref<Currency[]>([
    { code: 'USD', text: 'United Sates Dollar' },
    { code: 'COP', text: 'Colombian Peso' },
    { code: 'EUR', text: 'Euro' },
    { code: 'GBP', text: 'Pound Sterling' }
  ])

  const quotation = ref<CryptoData | null>(null)
  const isLoading = ref<boolean>(false)

  const quote = reactive({
    currency: '',
    crypto: ''
  })

  onMounted(async () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

    const resp = await fetch(url)
    const { Data } = await resp.json()
    cryptos.value = Data
  })

  const getQuote = async (): Promise<void> => {
    isLoading.value = true
    quotation.value = null

    try {
      const { currency, crypto } = quote

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`

      const resp = await fetch(url)
      const { DISPLAY } = await resp.json()

      quotation.value = DISPLAY[crypto][currency]
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  const showResult = computed(
    () => quotation.value !== null && Object.values(quotation.value).length > 0
  )

  return {
    cryptos,
    currencies,
    getQuote,
    isLoading,
    quotation,
    quote,
    showResult
  }
}

export default useCrypto
