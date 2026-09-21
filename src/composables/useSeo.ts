import type { SiteLocale } from '@/types'
import { useHead } from '@unhead/vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { alternatePath, resolveCanonicalPath, siteConfig } from '@/config/site'

interface PageSeoInput {
  title?: string
  description?: string
  locale?: SiteLocale
  path?: string
  image?: string
  type?: 'website' | 'article'
  jsonLd?: Record<string, unknown>[]
  noIndex?: boolean
}

export function useSeo(input: PageSeoInput = {}) {
  const { t } = useI18n()
  const locale = input.locale ?? ('en' as SiteLocale)
  const path = input.path ?? '/'
  const canonical = resolveCanonicalPath(locale, path)
  const alternate = alternatePath(locale, path)
  const oppositeLocale = locale === 'en' ? 'es' : 'en'
  const oppositeLocaleCanonical = resolveCanonicalPath(oppositeLocale, alternate)

  const pageTitle = computed(() => input.title ?? t('site.tagline'))
  const pageDescription = computed(() => input.description ?? t('site.description'))
  const fullTitle = computed(() => `${pageTitle.value} | ${siteConfig.brandName}`)

  const defaultSchemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.brandName,
      url: siteConfig.domain,
      logo: `${siteConfig.domain}/icon.png`,
      sameAs: [siteConfig.googlePlayUrl, siteConfig.appStoreUrl],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteConfig.brandName,
      url: siteConfig.domain,
      inLanguage: ['en', 'es'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: siteConfig.brandName,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Android, iOS',
      offers: {
        '@type': 'Offer',
        price: '0',
      },
      description: pageDescription.value,
      url: siteConfig.domain,
    },
  ]

  const scripts = (input.jsonLd ?? defaultSchemas).map((schema) => ({
    type: 'application/ld+json',
    innerHTML: JSON.stringify(schema),
  }))

  useHead({
    title: fullTitle.value,
    htmlAttrs: {
      lang: locale,
    },
    link: [
      {
        rel: 'canonical',
        href: `${siteConfig.domain}${canonical}`,
      },
      {
        rel: 'alternate',
        hreflang: locale,
        href: `${siteConfig.domain}${canonical}`,
      },
      {
        rel: 'alternate',
        hreflang: oppositeLocale,
        href: `${siteConfig.domain}${oppositeLocaleCanonical}`,
      },
      {
        rel: 'alternate',
        hreflang: 'x-default',
        href: `${siteConfig.domain}/en`,
      },
    ],
    meta: [
      {
        name: 'description',
        content: pageDescription.value,
      },
      {
        property: 'og:title',
        content: fullTitle.value,
      },
      {
        property: 'og:description',
        content: pageDescription.value,
      },
      {
        property: 'og:type',
        content: input.type ?? 'website',
      },
      {
        property: 'og:url',
        content: `${siteConfig.domain}${canonical}`,
      },
      {
        property: 'og:locale',
        content: locale === 'es' ? 'es_ES' : 'en_US',
      },
      {
        property: 'og:locale:alternate',
        content: locale === 'es' ? 'en_US' : 'es_ES',
      },
      {
        property: 'og:site_name',
        content: siteConfig.brandName,
      },
      {
        property: 'og:image',
        content: input.image ?? `${siteConfig.domain}/og-image.png`,
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: fullTitle.value,
      },
      {
        name: 'twitter:description',
        content: pageDescription.value,
      },
      {
        name: 'twitter:image',
        content: input.image ?? `${siteConfig.domain}/og-image.png`,
      },
    ],
    script: scripts,
    ...(input.noIndex
      ? {
          meta: [
            {
              name: 'robots',
              content: 'noindex',
            },
          ],
        }
      : {}),
  })

  return { pageTitle, pageDescription, fullTitle }
}
