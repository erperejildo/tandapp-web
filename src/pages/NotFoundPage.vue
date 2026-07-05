<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { useSeo } from '@/composables/useSeo'

const { t } = useI18n({ useScope: 'global' })

useSeo({
  title: t('notFound.title'),
  locale: 'en',
  path: '/404',
  noIndex: true,
})
</script>

<template>
  <div class="not-found section">
    <div class="container">
      <h1>404</h1>
      <p class="section-copy">{{ t('notFound.lead') }}</p>
      <RouterLink to="/en" class="not-found__link">{{ t('notFound.cta') }}</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  padding-top: calc(var(--header-height) + 4rem);
  text-align: center;
}

.not-found h1 {
  font-size: 5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.not-found__link {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-pill);
  background: var(--color-primary);
  color: var(--color-text-on-primary);
  font-weight: 700;
  transition: var(--transition-surface);
}

.not-found__link:hover,
.not-found__link:focus-visible {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-strong);
}
</style>
