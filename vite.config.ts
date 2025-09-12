import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/GMC/', // <-- debe coincidir con el nombre de tu repo (case-sensitive)
})
