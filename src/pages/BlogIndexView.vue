<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import StoreButton from '@/components/StoreButton.vue'
import { useSeo } from '@/composables/useSeo'
import { siteConfig } from '@/config/site'
import { getBlogPostsByLocale } from '@/data/blogPosts'
import type { SiteLocale } from '@/types'

const props = defineProps<{
  locale: SiteLocale
}>()

const { t } = useI18n()

useSeo({
  title: t('blog.title'),
  description: t('blog.lead'),
  locale: props.locale,
  path: `/${props.locale}/blog`,
})

const posts = computed(() => getBlogPostsByLocale(props.locale))

function formatDate(dateStr: string, locale: SiteLocale): string {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-MX' : 'en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
}
</script>

<template>
  <div class="blog-index">
    <section class="blog-hero section section--warm">
      <div class="container blog-hero__inner">
        <p class="eyebrow">
          <span class="eyebrow__dot"></span>
          {{ t('blog.eyebrow') }}
        </p>
        <h1 class="blog-hero__title">{{ t('blog.title') }}</h1>
        <p class="section-copy blog-hero__lead">{{ t('blog.lead') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="posts-grid">
          <article v-for="post in posts" :key="post.slug" class="post-card">
            <div class="post-card__meta">
              <span class="post-card__category">{{ post.category }}</span>
              <span class="post-card__divider">•</span>
              <time class="post-card__date" :datetime="post.date">
                {{ formatDate(post.date, props.locale) }}
              </time>
              <span class="post-card__divider">•</span>
              <span class="post-card__read-time">
                {{ t('blog.minRead', { minutes: post.readTimeMinutes }) }}
              </span>
            </div>

            <h2 class="post-card__title">
              <RouterLink :to="`/${props.locale}/blog/${post.slug}`" class="post-card__title-link">
                {{ post.title }}
              </RouterLink>
            </h2>

            <p class="post-card__excerpt">{{ post.excerpt }}</p>

            <div class="post-card__footer">
              <RouterLink :to="`/${props.locale}/blog/${post.slug}`" class="post-card__read-link">
                {{ t('blog.readMore') }}
                <span class="post-card__arrow" aria-hidden="true">&rarr;</span>
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container blog-cta">
        <h2 class="blog-cta__title">{{ t('blog.ctaTitle') }}</h2>
        <p class="blog-cta__lead">{{ t('blog.ctaLead') }}</p>
        <div class="blog-cta__actions">
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
.blog-hero {
  padding-top: calc(var(--header-height) + clamp(2.5rem, 5vw, 4rem));
  text-align: center;
}

.blog-hero__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.blog-hero__title {
  font-size: clamp(2.2rem, 5.5vw, 3.4rem);
  letter-spacing: -0.01em;
}

.blog-hero__lead {
  max-width: 58ch;
  font-size: 1.15rem;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.post-card {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: var(--radius-md);
  background: var(--color-card);
  box-shadow: var(--shadow-card);
  border: 1px solid var(--color-border);
  transition: var(--transition-surface);
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-strong);
  border-color: rgba(15, 106, 98, 0.3);
}

.post-card__meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.post-card__category {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.76rem;
  color: var(--color-primary);
  background: var(--color-header-link-hover-bg);
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-pill);
}

.post-card__divider {
  opacity: 0.4;
}

.post-card__title {
  margin: 0 0 1rem;
  font-size: clamp(1.25rem, 2.2vw, 1.5rem);
  line-height: 1.3;
}

.post-card__title-link {
  color: var(--color-text);
  transition: color 200ms ease;

  &:hover {
    color: var(--color-primary);
  }
}

.post-card__excerpt {
  margin: 0 0 1.5rem;
  font-size: 0.96rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  flex-grow: 1;
}

.post-card__footer {
  margin-top: auto;
}

.post-card__read-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.92rem;
  color: var(--color-primary);
  transition:
    gap 200ms ease,
    color 200ms ease;

  &:hover {
    color: var(--color-primary-dark);
    gap: 0.65rem;
  }
}

.post-card__arrow {
  transition: transform 200ms ease;
}

.blog-cta {
  text-align: center;
  justify-items: center;
  display: grid;
  gap: 1rem;
}

.blog-cta__title {
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
}

.blog-cta__lead {
  margin: 0;
  max-width: 50ch;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.08rem;
}

.blog-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  justify-content: center;
  margin-top: 0.5rem;
}

@media (max-width: 780px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
