import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
	host: '0.0.0.0',
    cors: true,
    https: {
        key: import.meta.env.VITE_SSL_KEY,
        cert: import.meta.env.VITE_SSL_CERT,
    }
  }
})
