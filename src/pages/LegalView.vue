<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { useSeo } from '@/composables/useSeo'
import { getLegalDoc } from '@/data/legalContent'
import type { SiteLocale } from '@/types'

const props = defineProps<{
  type: 'privacy' | 'terms'
  locale: SiteLocale
  routePath: string
}>()

const { t } = useI18n()

const doc = computed(() => getLegalDoc(props.type, props.locale))

useSeo({
  title: doc.value.title,
  description: doc.value.summary,
  locale: props.locale,
  path: props.routePath,
})
</script>

<template>
  <article class="legal-page">
    <nav class="legal-breadcrumbs container" aria-label="Breadcrumb">
      <ol class="breadcrumb-list">
        <li>
          <RouterLink :to="`/${props.locale}`" class="breadcrumb-link">
            {{ t('nav.home') }}
          </RouterLink>
        </li>
        <li class="breadcrumb-separator" aria-hidden="true">/</li>
        <li class="breadcrumb-current" aria-current="page">
          {{ doc.title }}
        </li>
      </ol>
    </nav>

    <header class="legal-hero section section--warm">
      <div class="container legal-hero__inner">
        <p class="eyebrow">
          <span class="eyebrow__dot"></span>
          {{ t('footer.legal') }}
        </p>
        <h1 class="legal-hero__title">{{ doc.title }}</h1>
        <p class="legal-hero__date">
          {{ props.locale === 'es' ? 'Última actualización:' : 'Last updated:' }}
          {{ doc.lastUpdated }}
        </p>
        <p class="section-copy legal-hero__lead">{{ doc.summary }}</p>
      </div>
    </header>

    <section class="section">
      <div class="container legal-content">
        <div class="legal-body">
          <div v-for="(section, idx) in doc.sections" :key="idx" class="legal-section">
            <h2 class="legal-section__title">{{ section.title }}</h2>

            <p
              v-for="(paragraph, pIdx) in section.content"
              :key="pIdx"
              class="legal-section__paragraph"
            >
              {{ paragraph }}
            </p>

            <ul v-if="section.list && section.list.length > 0" class="legal-list">
              <li v-for="(item, itemIdx) in section.list" :key="itemIdx" class="legal-list__item">
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="legal-footer-nav">
            <RouterLink :to="`/${props.locale}`" class="legal-back-link">
              <span aria-hidden="true">&larr;</span>
              {{ props.locale === 'es' ? 'Volver al inicio' : 'Return to Home' }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped lang="scss">
.legal-breadcrumbs {
  padding-top: calc(var(--header-height) + 1.25rem);
  padding-bottom: 0.75rem;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.88rem;
  color: var(--color-text-muted);
}

.breadcrumb-link {
  color: var(--color-primary);
  font-weight: 500;
  transition: color 200ms ease;

  &:hover {
    color: var(--color-primary-dark);
  }
}

.breadcrumb-separator {
  opacity: 0.4;
}

.breadcrumb-current {
  color: var(--color-text);
  font-weight: 600;
}

.legal-hero {
  padding-top: 2rem;
  padding-bottom: 3rem;
}

.legal-hero__inner {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 820px;
}

.legal-hero__title {
  font-size: clamp(2rem, 4.5vw, 3rem);
  letter-spacing: -0.015em;
  color: var(--color-text);
}

.legal-hero__date {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-soft);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.legal-hero__lead {
  font-size: 1.12rem;
  line-height: 1.6;
  color: var(--color-text-muted);
  margin-top: 0.5rem;
}

.legal-content {
  max-width: 820px;
}

.legal-body {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.legal-section {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.legal-section__title {
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  color: var(--color-text);
  line-height: 1.3;
}

.legal-section__paragraph {
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text);
}

.legal-list {
  margin: 0.25rem 0;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.legal-list__item {
  font-size: 0.98rem;
  line-height: 1.6;
  color: var(--color-text);
}

.legal-footer-nav {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.legal-back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.92rem;
  color: var(--color-primary);
  transition: color 200ms ease;

  &:hover {
    color: var(--color-primary-dark);
  }
}
</style>
