import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    includedRoutes(paths) {
      return paths.filter((path) => !path.includes(':') && !path.includes('*'))
    },
    onFinished() {
      const sitemapPaths = [
        { url: '/en', changefreq: 'weekly', priority: '1.0' },
        { url: '/en/features/online-tandas', changefreq: 'monthly', priority: '0.8' },
        { url: '/en/features/group-savings', changefreq: 'monthly', priority: '0.8' },
        { url: '/en/features/payment-tracking', changefreq: 'monthly', priority: '0.8' },
        { url: '/en/features/trust', changefreq: 'monthly', priority: '0.8' },
        { url: '/es', changefreq: 'weekly', priority: '1.0' },
        { url: '/es/caracteristicas/tandas-en-linea', changefreq: 'monthly', priority: '0.8' },
        { url: '/es/caracteristicas/ahorro-grupal', changefreq: 'monthly', priority: '0.8' },
        { url: '/es/caracteristicas/control-pagos', changefreq: 'monthly', priority: '0.8' },
        { url: '/es/caracteristicas/confianza', changefreq: 'monthly', priority: '0.8' },
      ]

      const domain = 'https://tandapp.app'
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapPaths
  .map(
    (entry) => `  <url>
    <loc>${domain}${entry.url}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

      const distDir = resolve('dist')

      writeFileSync(resolve(distDir, 'sitemap.xml'), sitemap)
    },
  },
})
