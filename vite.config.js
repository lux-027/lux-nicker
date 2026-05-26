import { defineConfig } from 'vite'

export default defineConfig({
  root: '.', // Proje kök dizini
  server: {
    port: 3000, // Geliştirme sunucusu portu
    open: true, // Tarayıcıyı otomatik aç
    hot: true, // Hot-reload aktif
    host: true // Ağ üzerinden erişim
  },
  build: {
    outDir: 'dist', // Build çıktı dizini
    assetsDir: 'assets', // Asset dizini
    sourcemap: true, // Source map oluştur
    minify: 'esbuild' // Minify aracı
  },
  preview: {
    port: 4173, // Preview sunucusu portu
    open: true
  }
})
