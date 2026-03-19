import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    host: '0.0.0.0',
    allowedHosts: ['paradisiacal-discretionally-hiram.ngrok-free.dev'],
    cors: true,
  },
  plugins: [
    react(),
    tailwindcss()
  ],

})
