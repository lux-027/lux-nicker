import { defineConfig } from 'vite'
import { resolve } from 'path'

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
    minify: 'esbuild', // Minify aracı
    // Vercel/Vite build sırasında tüm HTML sayfalarını dist'e dahil et (MPA)
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog.html'),
        blogYazisi1: resolve(__dirname, 'blog-yazisi-1.html'),
        blogYazisi2: resolve(__dirname, 'blog-yazisi-2.html'),
        blogYazisi3: resolve(__dirname, 'blog-yazisi-3.html'),
        blog2026: resolve(__dirname, 'blog-2026-populer-nick-stilleri.html'),
        blogEmoji: resolve(__dirname, 'blog-emoji-kullanim-psikolojisi.html'),
        blogSembol: resolve(__dirname, 'blog-sembollerle-profili-ozellestir.html'),
        hakkimizda: resolve(__dirname, 'hakkimizda.html'),
        gizlilik: resolve(__dirname, 'gizlilik.html'),
        kullanimSartlari: resolve(__dirname, 'kullanim-sartlari.html')
      }
    }
  },
  preview: {
    port: 4173, // Preview sunucusu portu
    open: true
  }
})
