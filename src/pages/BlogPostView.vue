<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import StoreButton from '@/components/StoreButton.vue'
import { useSeo } from '@/composables/useSeo'
import { siteConfig } from '@/config/site'
import { getBlogPostBySlug } from '@/data/blogPosts'
import type { SiteLocale } from '@/types'

const props = defineProps<{
  slug: string
  locale: SiteLocale
  routePath: string
}>()

const { t } = useI18n()

const post = computed(() => {
  const found = getBlogPostBySlug(props.slug, props.locale)
  if (!found) {
    throw new Error(`Blog post not found: ${props.slug} (${props.locale})`)
  }
  return found
})

const canonicalUrl = computed(() => `${siteConfig.domain}${props.routePath}`)

const structuredData = computed(() => {
  const p = post.value
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      dateModified: p.date,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl.value,
      },
      author: {
        '@type': 'Organization',
        name: 'Tandapp Editorial Team',
        url: siteConfig.domain,
      },
      publisher: {
        '@type': 'Organization',
        name: siteConfig.brandName,
        url: siteConfig.domain,
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.domain}/icon.png`,
        },
      },
      inLanguage: props.locale,
      articleSection: p.category,
      keywords: p.keywords.join(', '),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: t('nav.home'),
          item: `${siteConfig.domain}/${props.locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: t('nav.blog'),
          item: `${siteConfig.domain}/${props.locale}/blog`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: p.title,
          item: canonicalUrl.value,
        },
      ],
    },
  ]

  if (p.faqs && p.faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: p.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    })
  }

  return schemas
})

useSeo({
  title: post.value.title,
  description: post.value.description,
  locale: props.locale,
  path: props.routePath,
  type: 'article',
  jsonLd: structuredData.value,
})

function formatDate(dateStr: string, locale: SiteLocale): string {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-MX' : 'en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
}
</script>

<template>
  <article class="blog-post">
    <!-- Breadcrumbs -->
    <nav class="blog-breadcrumbs container" aria-label="Breadcrumb">
      <ol class="breadcrumb-list">
        <li>
          <RouterLink :to="`/${props.locale}`" class="breadcrumb-link">
            {{ t('nav.home') }}
          </RouterLink>
        </li>
        <li class="breadcrumb-separator" aria-hidden="true">/</li>
        <li>
          <RouterLink :to="`/${props.locale}/blog`" class="breadcrumb-link">
            {{ t('nav.blog') }}
          </RouterLink>
        </li>
        <li class="breadcrumb-separator" aria-hidden="true">/</li>
        <li class="breadcrumb-current" aria-current="page">
          {{ post.category }}
        </li>
      </ol>
    </nav>

    <!-- Hero Header -->
    <header class="post-hero section section--warm">
      <div class="container post-hero__inner">
        <div class="post-hero__meta">
          <span class="post-hero__category">{{ post.category }}</span>
          <span class="post-hero__divider">•</span>
          <time class="post-hero__date" :datetime="post.date">
            {{ formatDate(post.date, props.locale) }}
          </time>
          <span class="post-hero__divider">•</span>
          <span class="post-hero__read-time">
            {{ t('blog.minRead', { minutes: post.readTimeMinutes }) }}
          </span>
        </div>

        <h1 class="post-hero__title">{{ post.title }}</h1>
        <p class="section-copy post-hero__lead">{{ post.excerpt }}</p>

        <!-- Extractable Definition Block (GEO / AEO Optimized) -->
        <div class="definition-box" role="region" aria-label="Summary definition">
          <div class="definition-box__badge">Quick Take</div>
          <p class="definition-box__text">{{ post.definitionBlock }}</p>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <section class="section">
      <div class="container post-content">
        <div class="post-body">
          <div v-for="(section, idx) in post.sections" :key="idx" class="content-section">
            <h2 v-if="section.title" class="content-section__title">
              {{ section.title }}
            </h2>

            <p class="content-section__paragraph">{{ section.content }}</p>

            <ul v-if="section.list && section.list.length > 0" class="content-list">
              <li v-for="(item, itemIdx) in section.list" :key="itemIdx" class="content-list__item">
                {{ item }}
              </li>
            </ul>

            <div v-if="section.table" class="table-wrapper">
              <table class="content-table">
                <thead>
                  <tr>
                    <th v-for="(header, hIdx) in section.table.headers" :key="hIdx">
                      {{ header }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, rIdx) in section.table.rows" :key="rIdx">
                    <td v-for="(cell, cIdx) in row" :key="cIdx">
                      {{ cell }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <aside v-if="section.callout" class="content-callout">
              <p class="content-callout__text">{{ section.callout }}</p>
            </aside>
          </div>

          <!-- FAQ Section -->
          <section v-if="post.faqs && post.faqs.length > 0" class="post-faqs">
            <h2 class="post-faqs__title">{{ t('blog.faqTitle') }}</h2>
            <div class="faqs-list">
              <div v-for="(faq, fIdx) in post.faqs" :key="fIdx" class="faq-item">
                <h3 class="faq-item__question">{{ faq.question }}</h3>
                <p class="faq-item__answer">{{ faq.answer }}</p>
              </div>
            </div>
          </section>

          <!-- Back to Blog Link -->
          <div class="post-back">
            <RouterLink :to="`/${props.locale}/blog`" class="post-back__link">
              <span aria-hidden="true">&larr;</span>
              {{ t('blog.backToBlog') }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- App CTA -->
    <section class="section section--dark">
      <div class="container post-cta">
        <h2 class="post-cta__title">{{ t('blog.ctaTitle') }}</h2>
        <p class="post-cta__lead">{{ t('blog.ctaLead') }}</p>
        <div class="post-cta__actions">
          <StoreButton :store="'google'" :href="siteConfig.googlePlayUrl">
            {{ t('actions.googlePlay') }}
          </StoreButton>
          <StoreButton :store="'apple'" :href="siteConfig.appStoreUrl">
            {{ t('actions.appStore') }}
          </StoreButton>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped lang="scss">
.blog-breadcrumbs {
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

.post-hero {
  padding-top: 2rem;
  padding-bottom: 3.5rem;
}

.post-hero__inner {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 820px;
}

.post-hero__meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.post-hero__category {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.76rem;
  color: var(--color-primary);
  background: var(--color-header-link-hover-bg);
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-pill);
}

.post-hero__divider {
  opacity: 0.4;
}

.post-hero__title {
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  line-height: 1.18;
  letter-spacing: -0.015em;
  color: var(--color-text);
}

.post-hero__lead {
  font-size: 1.18rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}

.definition-box {
  margin-top: 1rem;
  padding: 1.5rem 1.75rem;
  border-radius: var(--radius-md);
  background: #ffffff;
  border: 2px solid rgba(15, 106, 98, 0.25);
  box-shadow: var(--shadow-card);
}

.definition-box__badge {
  display: inline-block;
  margin-bottom: 0.65rem;
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary);
  background: var(--color-header-link-hover-bg);
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-pill);
}

.definition-box__text {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--color-text);
  font-weight: 500;
}

.post-content {
  max-width: 820px;
}

.post-body {
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
}

.content-section {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.content-section__title {
  font-size: clamp(1.4rem, 2.5vw, 1.85rem);
  color: var(--color-text);
  margin-top: 0.75rem;
  line-height: 1.25;
}

.content-section__paragraph {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--color-text);
}

.content-list {
  margin: 0.25rem 0 0.5rem;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.content-list__item {
  font-size: 1.02rem;
  line-height: 1.65;
  color: var(--color-text);
}

.table-wrapper {
  overflow-x: auto;
  margin: 1rem 0;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
}

.content-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--color-card);
  text-align: left;
  font-size: 0.94rem;

  th,
  td {
    padding: 1rem 1.25rem;
    border-bottom: 1px solid var(--color-border);
  }

  th {
    font-family: var(--font-heading);
    font-weight: 700;
    color: var(--color-primary);
    background: var(--color-canvas-warm);
  }

  tr:last-child td {
    border-bottom: none;
  }
}

.content-callout {
  padding: 1.35rem 1.6rem;
  border-radius: var(--radius-sm);
  background: rgba(15, 106, 98, 0.08);
  border-left: 4px solid var(--color-primary);
  margin: 0.75rem 0;
}

.content-callout__text {
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  font-weight: 500;
  color: var(--color-primary-dark);
}

.post-faqs {
  margin-top: 1.5rem;
  padding-top: 2rem;
  border-top: 2px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.post-faqs__title {
  font-size: clamp(1.4rem, 2.5vw, 1.85rem);
}

.faqs-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.faq-item {
  padding: 1.35rem 1.5rem;
  border-radius: var(--radius-sm);
  background: var(--color-card);
  border: 1px solid var(--color-border);
}

.faq-item__question {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  color: var(--color-text);
}

.faq-item__answer {
  margin: 0;
  font-size: 0.96rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.post-back {
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.post-back__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--color-primary);
  transition: color 200ms ease;

  &:hover {
    color: var(--color-primary-dark);
  }
}

.post-cta {
  text-align: center;
  justify-items: center;
  display: grid;
  gap: 1rem;
}

.post-cta__title {
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
}

.post-cta__lead {
  margin: 0;
  max-width: 50ch;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.08rem;
}

.post-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  justify-content: center;
  margin-top: 0.5rem;
}
</style>
