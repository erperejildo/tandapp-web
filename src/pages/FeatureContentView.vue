<script setup lang="ts">
import { computed } from 'vue'

import { useSeo } from '@/composables/useSeo'
import { messages } from '@/i18n/messages'
import type { SiteLocale } from '@/types'

interface Section {
  title: string
  description?: string
  items?: { title: string; description: string }[]
  imageDescription?: string
}

const props = defineProps<{
  featureKey: 'onlineTandas' | 'groupSavings' | 'paymentTracking' | 'trust'
  locale: SiteLocale
  routePath: string
}>()

const content = computed(() => {
  const features = messages[props.locale].features
  return features[props.featureKey] as unknown as {
    title: string
    description: string
    sections: Record<string, Section>
  }
})

useSeo({
  title: content.value.title,
  description: content.value.description,
  locale: props.locale,
  path: props.routePath,
})

const featureImages: Record<string, string> = {
  onlineTandas: '/images/online_tandas.png',
  groupSavings: '/images/group_saving.png',
  paymentTracking: '/images/payment_tracking.png',
  trust: '/images/build_trust.png',
}

function placeholderUrl(w: number, h: number, description: string): string {
  const clean = encodeURIComponent(description)
  return `https://placehold.co/${w}x${h}?name=${clean}`
}
</script>

<template>
  <article class="feature-page" v-if="content">
    <header class="feature-page__hero section section--warm">
      <div class="container feature-page__hero-grid">
        <div class="feature-page__hero-text">
          <h1 class="feature-page__title">{{ content.title }}</h1>
          <p class="feature-page__lead section-copy">{{ content.description }}</p>
        </div>
        <img
          :src="featureImages[featureKey]"
          :alt="content.title"
          class="feature-page__hero-image"
          width="560"
          height="370"
          loading="eager"
        />
      </div>
    </header>

    <section
      v-for="(section, key) in content.sections"
      :key="key"
      class="section"
    >
      <div class="container">
        <div class="feature-page__section-copy">
          <h2 class="feature-page__section-title">{{ section.title }}</h2>
          <p v-if="section.description" class="section-copy">{{ section.description }}</p>
        </div>

        <div
          v-if="section.items && section.items.length > 0"
          class="feature-page__cards"
        >
          <div
            v-for="(item, idx) in section.items"
            :key="idx"
            class="feature-page__card"
          >
            <span class="feature-page__card-number">{{ idx + 1 }}</span>
            <h3 class="feature-page__card-title">{{ item.title }}</h3>
            <p class="feature-page__card-text">{{ item.description }}</p>
          </div>
        </div>

        <img
          v-if="section.imageDescription"
          :src="placeholderUrl(720, 400, section.imageDescription)"
          :alt="section.imageDescription"
          class="feature-page__section-image"
          width="720"
          height="400"
          loading="lazy"
        />
      </div>
    </section>

    <section class="section section--dark">
      <div class="container" style="text-align: center; display: grid; gap: 1rem; justify-items: center;">
        <h2 style="font-size: clamp(1.4rem, 3vw, 2rem);">
          {{ locale === 'es' ? 'Empieza a organizar tu tanda hoy' : 'Start organizing your tanda today' }}
        </h2>
        <p style="margin: 0; max-width: 50ch; color: rgba(255, 255, 255, 0.8);">
          {{ locale === 'es' ? 'Gratis. Sin anuncios molestos. Crea tu primer grupo en menos de un minuto.' : 'Free to use. No annoying ads. Create your first group in under a minute.' }}
        </p>
      </div>
    </section>
  </article>
</template>

<style scoped lang="scss">
.feature-page__hero {
  padding-top: calc(var(--header-height) + clamp(2rem, 4vw, 3.5rem));
}

.feature-page__hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 6vw, 4rem);
  align-items: center;
}

.feature-page__hero-text {
  display: grid;
  gap: 1rem;
}

.feature-page__title {
  font-size: clamp(2rem, 5vw, 3.2rem);
  color: var(--color-text);
}

.feature-page__lead {
  font-size: 1.15rem;
}

.feature-page__hero-image {
  border-radius: var(--radius-lg);
  width: 100%;
  height: auto;
  aspect-ratio: 56 / 37;
  object-fit: cover;
  box-shadow: var(--shadow-strong);
}

.feature-page__section-copy {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.feature-page__section-title {
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: var(--color-text);
}

.feature-page__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature-page__card {
  display: grid;
  gap: 0.75rem;
  padding: 1.75rem;
  border-radius: var(--radius-md);
  background: var(--color-card);
  box-shadow: var(--shadow-card);
  border: 1px solid var(--color-border);
}

.feature-page__card-number {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-primary);
  opacity: 0.25;
  line-height: 1;
}

.feature-page__card-title {
  font-size: 1.15rem;
  color: var(--color-text);
}

.feature-page__card-text {
  margin: 0;
  font-size: 0.94rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}

.feature-page__section-image {
  margin-top: 2.5rem;
  border-radius: var(--radius-lg);
  width: 100%;
  height: auto;
  aspect-ratio: 9 / 5;
  object-fit: cover;
  box-shadow: var(--shadow-card);
}

@media (max-width: 780px) {
  .feature-page__hero-grid {
    grid-template-columns: 1fr;
  }

  .feature-page__hero-image {
    order: -1;
    max-height: 260px;
    aspect-ratio: auto;
  }
}
</style>
