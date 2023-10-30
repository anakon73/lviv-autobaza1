import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
  plugins: [handlebars({
    partialDirectory: resolve(__dirname, 'src/partials'),
  })],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        catalog: resolve(__dirname, 'catalog/index.html'),
        product: resolve(__dirname, 'product/index.html'),
        services: resolve(__dirname, 'services/index.html'),
        contacts: resolve(__dirname, 'contacts/index.html'),
        registration: resolve(__dirname, 'registration/index.html'),
        authentication: resolve(__dirname, 'authentication/index.html'),
        'reset-password': resolve(__dirname, 'reset-password/index.html'),
        'sms-confirm': resolve(__dirname, 'sms-confirm/index.html'),
        reviews: resolve(__dirname, 'reviews/index.html'),
        results: resolve(__dirname, 'results/index.html'),
        cart: resolve(__dirname, 'cart/index.html'),
      }
    }
  }
})
