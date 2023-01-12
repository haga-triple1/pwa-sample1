import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/pwa-sample1",
  build: {
		assetsInlineLimit: 0,
		assetsDir: "."
	},
})
