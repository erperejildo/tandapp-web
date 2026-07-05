<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import LanguageToggle from '@/components/LanguageToggle.vue'
import { siteConfig } from '@/config/site'
import type { SiteLocale } from '@/types'
import { persistLocale } from '@/i18n/messages'

const { t, locale } = useI18n()

useHead({
  title: siteConfig.brandName,
})

watch(
  locale,
  (newLocale) => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLocale
      persistLocale(newLocale as SiteLocale)
    }
  },
  { immediate: true },
)
</script>

<template>
  <a class="visually-hidden" href="#main-content">Skip to content</a>

  <div class="app-shell">
    <AppHeader />

    <main id="main-content">
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
