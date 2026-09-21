import { writeFileSync } from 'node:fs'
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
        { url: '/en/blog', changefreq: 'weekly', priority: '0.9' },
        { url: '/en/blog/what-is-a-tanda-how-it-works', changefreq: 'monthly', priority: '0.8' },
        { url: '/en/blog/how-to-build-trust-in-a-tanda', changefreq: 'monthly', priority: '0.8' },
        { url: '/en/blog/how-to-start-and-organize-a-tanda-group', changefreq: 'monthly', priority: '0.8' },
        { url: '/en/blog/tanda-vs-traditional-savings', changefreq: 'monthly', priority: '0.8' },
        { url: '/es', changefreq: 'weekly', priority: '1.0' },
        { url: '/es/caracteristicas/tandas-en-linea', changefreq: 'monthly', priority: '0.8' },
        { url: '/es/caracteristicas/ahorro-grupal', changefreq: 'monthly', priority: '0.8' },
        { url: '/es/caracteristicas/control-pagos', changefreq: 'monthly', priority: '0.8' },
        { url: '/es/caracteristicas/confianza', changefreq: 'monthly', priority: '0.8' },
        { url: '/es/blog', changefreq: 'weekly', priority: '0.9' },
        { url: '/es/blog/que-es-una-tanda-como-funciona', changefreq: 'monthly', priority: '0.8' },
        { url: '/es/blog/como-generar-confianza-en-una-tanda', changefreq: 'monthly', priority: '0.8' },
        { url: '/es/blog/como-organizar-crear-grupo-tanda', changefreq: 'monthly', priority: '0.8' },
        { url: '/es/blog/tanda-vs-ahorro-tradicional', changefreq: 'monthly', priority: '0.8' },
      ]

      const domain = 'https://tandapp.net'
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
