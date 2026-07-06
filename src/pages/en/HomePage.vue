<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import StoreButton from '@/components/StoreButton.vue'
import { useSeo } from '@/composables/useSeo'
import { siteConfig } from '@/config/site'
import type { SiteLocale } from '@/types'

const locale = 'en' as SiteLocale

const { t } = useI18n({ useScope: 'global' })

useSeo({
  title: t('site.tagline'),
  description: t('site.description'),
  locale,
  path: '/en',
})

const features = [
  {
    to: '/en/features/online-tandas',
    icon: '&#8599;',
    title: t('features.onlineTandas.title'),
    description: t('features.onlineTandas.description'),
    image: '/images/online_tandas.png',
  },
  {
    to: '/en/features/group-savings',
    icon: '&#9826;',
    title: t('features.groupSavings.title'),
    description: t('features.groupSavings.description'),
    image: '/images/group_saving.png',
  },
  {
    to: '/en/features/payment-tracking',
    icon: '&#10003;',
    title: t('features.paymentTracking.title'),
    description: t('features.paymentTracking.description'),
    image: '/images/payment_tracking.png',
  },
  {
    to: '/en/features/trust',
    icon: '&#9829;',
    title: t('features.trust.title'),
    description: t('features.trust.description'),
    image: '/images/build_trust.png',
  },
]
</script>

<template>
  <div class="home">
    <section class="hero section section--warm">
      <div class="container hero__grid">
        <div class="hero__text">
          <p class="eyebrow">
            <span class="eyebrow__dot"></span>
            {{ t('home.eyebrow') }}
          </p>
          <h1 class="hero__title">{{ t('home.title') }}</h1>
          <p class="hero__lead section-copy">{{ t('home.lead') }}</p>

          <div class="hero__actions">
            <StoreButton :store="'google'" :href="siteConfig.googlePlayUrl">
              {{ t('actions.googlePlay') }}
            </StoreButton>
            <StoreButton :store="'apple'" :href="siteConfig.appStoreUrl">
              {{ t('actions.appStore') }}
            </StoreButton>
          </div>

          <p class="hero__free-badge">{{ t('home.freeBadge') }}</p>
        </div>

        <img
          src="/images/main.png"
          alt="Three friends smiling while organizing their tanda on Tandapp"
          class="hero__image"
          width="560"
          height="450"
          loading="eager"
        />
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="features-header">
          <h2 class="features-header__title">{{ t('home.featureTitle') }}</h2>
          <p class="section-copy">{{ t('home.featureLead') }}</p>
        </div>

        <div class="features-grid">
          <RouterLink
            v-for="feature in features"
            :key="feature.to"
            :to="feature.to"
            class="feature-card"
          >
            <img
              :src="feature.image"
              :alt="feature.title"
              class="feature-card__image"
              width="400"
              height="260"
              loading="lazy"
            />
            <div class="feature-card__body">
              <div class="feature-card__header">
                <span class="feature-card__icon" v-html="feature.icon"></span>
                <h3 class="feature-card__title">{{ feature.title }}</h3>
              </div>
              <p class="feature-card__text">{{ feature.description }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container cta">
        <h2 class="cta__title">{{ t('home.ctaTitle') }}</h2>
        <p class="cta__lead">{{ t('home.ctaLead') }}</p>
        <div class="cta__actions">
          <StoreButton :store="'google'" :href="siteConfig.googlePlayUrl">
            {{ t('actions.googlePlay') }}
          </StoreButton>
          <StoreButton :store="'apple'" :href="siteConfig.appStoreUrl">
            {{ t('actions.appStore') }}
          </StoreButton>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.hero {
  padding-top: calc(var(--header-height) + clamp(2rem, 4vw, 3.5rem));
}

.hero__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 6vw, 4rem);
  align-items: center;
}

.hero__text {
  display: grid;
  gap: 1rem;
}

.hero__title {
  font-size: clamp(2rem, 5vw, 3.4rem);
  letter-spacing: -0.01em;
}

.hero__lead {
  font-size: 1.18rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 0.75rem;
}

.hero__free-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0.25rem 0 0;
  font-size: 0.82rem;
  font-weight: 600;
  color: #0a5650;

  &::before {
    content: '';
    display: inline-block;
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    background: var(--color-accent);
  }
}

.hero__image {
  border-radius: var(--radius-lg);
  width: 100%;
  height: auto;
  aspect-ratio: 56 / 45;
  object-fit: cover;
  box-shadow: var(--shadow-strong);
}

.features-header {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  text-align: center;
  justify-items: center;
}

.features-header__title {
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.feature-card {
  display: grid;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--color-card);
  box-shadow: var(--shadow-card);
  border: 1px solid var(--color-border);
  transition: var(--transition-surface);
}

.feature-card:hover,
.feature-card:focus-visible {
  transform: translateY(-4px);
  box-shadow: var(--shadow-strong);
}

.feature-card__image {
  width: 100%;
  height: auto;
  aspect-ratio: 20 / 13;
  object-fit: cover;
}

.feature-card__body {
  display: grid;
  gap: 0.65rem;
  padding: 1.5rem;
}

.feature-card__header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.feature-card__icon {
  font-size: 1.4rem;
  color: var(--color-accent);
  line-height: 1;
  flex-shrink: 0;
}

.feature-card__title {
  font-size: 1.15rem;
}

.feature-card__text {
  margin: 0;
  font-size: 0.92rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}

.cta {
  text-align: center;
  justify-items: center;
  display: grid;
  gap: 1rem;
}

.cta__title {
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
}

.cta__lead {
  margin: 0;
  max-width: 50ch;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.08rem;
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  justify-content: center;
  margin-top: 0.5rem;
}

@media (max-width: 780px) {
  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__image {
    order: -1;
    max-height: 280px;
    aspect-ratio: auto;
  }

  .features-grid {
    grid-template-columns: 1fr;
    max-width: 440px;
    margin-inline: auto;
  }
}
</style>
