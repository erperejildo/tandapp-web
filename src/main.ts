import { createI18n } from 'vue-i18n'
import { ViteSSG } from 'vite-ssg'

import App from './App.vue'
import { defaultLocale, messages, resolvePreferredLocale } from './i18n/messages'
import { routes } from './router/routes'
import './styles/main.scss'

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to, _from, savedPosition) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
        }
      }

      return savedPosition ?? { top: 0 }
    },
  },
  ({ app, router, isClient }) => {
    const i18n = createI18n({
      legacy: false,
      locale: resolvePreferredLocale(),
      fallbackLocale: defaultLocale,
      messages,
    })

    app.use(i18n)

    router.beforeEach((to) => {
      const pathLocale = to.path.startsWith('/es') ? 'es' : 'en'

      if (i18n.global.locale.value !== pathLocale) {
        i18n.global.locale.value = pathLocale
      }
    })
  },
)
