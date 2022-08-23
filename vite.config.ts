import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact(),     VitePWA({
		includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
		manifest: {
		  name: 'My Quote of Today',
		  short_name: '오늘의명언',
		  description: '내가좋아하는 책속 구절을 관리하기',
		  theme_color: '#ffffff',
		  icons: [
			{
			  src: 'pwa-192x192.png',
			  sizes: '192x192',
			  type: 'image/png'
			},
			{
			  src: 'pwa-512x512.png',
			  sizes: '512x512',
			  type: 'image/png'
			}
		  ]
		}
	  })],
});