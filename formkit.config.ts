import { defineFormKitConfig } from '@formkit/vue'
import { createI18nPlugin, es } from '@formkit/i18n'


export default defineFormKitConfig({
  plugins: [
    createI18nPlugin({
      locale: es
    })
  ]
})