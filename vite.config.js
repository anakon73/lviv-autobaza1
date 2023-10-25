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
        services: resolve(__dirname, 'services/index.html'),
        contacts: resolve(__dirname, 'contacts/index.html'),
        registration: resolve(__dirname, 'registration/index.html')
      }
    }
  }
})
