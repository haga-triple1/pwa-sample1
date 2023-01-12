import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/pwa-sample1",
  build: {
		rollupOptions: {
			input: {
				sample1: resolve(__dirname, "pages",'manifest', 'index.html'),
				sample2: resolve(__dirname, "pages",'manifest-sw', 'index.html'),
			},
		},
		assetsInlineLimit: 0
	},
})
