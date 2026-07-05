import type { SiteLocale } from '@/types'

export const siteConfig = {
  brandName: 'Tandapp',
  domain: 'https://tandapp.app',
  email: 'drodriguez.apps@gmail.com',
  googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.drodriguez.tandapp',
  appStoreUrl: 'https://apps.apple.com/us/app/tandapp-group-savings-tracker/id6763742265',
} as const

export function resolveCanonicalPath(locale: SiteLocale, path: string): string {
  const trimmed = path.replace(/\/$/, '') || ''

  if (locale === 'en') {
    return trimmed.startsWith('/en') ? trimmed : `/en${trimmed}`
  }

  return trimmed.startsWith('/es') ? trimmed : `/es${trimmed}`
}

export function alternatePath(locale: SiteLocale, path: string): string {
  const trimmed = path.replace(/\/$/, '') || ''

  if (locale === 'en') {
    const alt = trimmed.startsWith('/en') ? trimmed.replace(/^\/en/, '/es') : `/es${trimmed}`

    return alt
  }

  const alt = trimmed.startsWith('/es') ? trimmed.replace(/^\/es/, '/en') : `/en${trimmed}`

  return alt
}
