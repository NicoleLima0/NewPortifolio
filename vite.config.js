// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 👈 1. Importe o 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { // 👈 2. Adicione esta seção 'resolve'
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})