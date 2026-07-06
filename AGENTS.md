# AGENTS.md — Tandapp Web

## Overview

Static marketing site for **Tandapp**, a free group savings (tanda) coordination app. The site is bilingual (EN / ES), pre-rendered at build time, and deployed to GitHub Pages via GitHub Actions.

- Domain: `https://tandapp.app`
- App: free, does NOT hold or process money — just coordination records
- Store links: [Google Play](https://play.google.com/store/apps/details?id=com.drodriguez.tandapp) · [App Store](https://apps.apple.com/us/app/tandapp-group-savings-tracker/id6763742265)

---

## Tech stack

| Layer        | Choice                                                                 |
| ------------ | ---------------------------------------------------------------------- |
| Framework    | Vue 3 (Composition API, `<script setup>`)                              |
| SSG          | `vite-ssg` (builds 11 HTML files via `vite-ssg build`)                 |
| Routing      | `vue-router` — route map in `src/router/routes.ts`                     |
| Head / SEO   | `@unhead/vue` **v2** (`useHead` composable)                            |
| i18n         | `vue-i18n` in Composition API mode (`legacy: false`)                    |
| Styling      | SCSS (via `sass-embedded`), scoped `<style>` in components              |
| Linting      | ESLint + Oxlint + Prettier                                             |
| TypeScript   | Vue TSC for type-checking                                              |
| CI/CD        | GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`)          |
| Package mgr  | npm (see `package.json` for scripts)                                   |

**Critical version constraint:** `@unhead/vue` must stay on `^2.x`. Version 3+ is incompatible with `vite-ssg@28`. Do not upgrade without also migrating `vite-ssg`.

---

## Project structure

```
tandapp-web/
├── index.html              # HTML shell — locale redirect script + base SEO meta
├── vite.config.ts          # SSG config, sitemap generation in onFinished hook
├── package.json            # scripts: dev, build-only (SSG), type-check, lint, format
├── .github/workflows/      # deploy.yml — auto-deploys on push to master/main
├── public/
│   ├── icon.png            # App icon (512×512, used in header + favicon)
│   ├── 404.html            # Static 404 for GitHub Pages (noindex)
│   ├── robots.txt          # Allow all + sitemap pointer
│   └── images/
│       ├── main.png        # Hero screenshot
│       ├── online_tandas.png, group_saving.png, payment_tracking.png,
│       │   build_trust.png  # Feature page screenshots
│       ├── google-play.svg # Google Play icon (Bootstrap Icons)
│       └── apple.svg       # Apple icon (Bootstrap Icons)
└── src/
    ├── main.ts             # ViteSSG entry — creates app, router, i18n
    ├── App.vue             # Shell: AppHeader + <RouterView> + AppFooter
    ├── types/index.ts      # SiteLocale = 'en' | 'es', SiteConfig interface
    ├── config/site.ts      # siteConfig (domain, store URLs), resolveCanonicalPath, alternatePath
    ├── i18n/messages.ts    # ALL translatable strings + resolvePreferredLocale + persistLocale
    ├── composables/
    │   └── useSeo.ts       # useSeo() — sets title, canonical, hreflang, OG, structured data
    ├── router/
    │   └── routes.ts       # 11 routes (see route table below)
    ├── components/
    │   ├── AppHeader.vue       # Fixed header, locale-aware nav links, LanguageToggle
    │   ├── AppFooter.vue       # Footer with links, legal hint, copyright
    │   ├── LanguageToggle.vue  # EN↔ES button with explicit route mapping
    │   └── StoreButton.vue     # Google Play / App Store pill buttons (external SVG icons)
    ├── pages/
    │   ├── RedirectPage.vue        # Root `/` — detects locale, redirects
    │   ├── FeatureContentView.vue  # Shared page for all 8 feature sub-pages
    │   ├── NotFoundPage.vue        # Catch-all 404 with noindex
    │   ├── en/HomePage.vue         # EN landing
    │   └── es/HomePage.vue         # ES landing
    └── styles/
        ├── _tokens.scss    # CSS custom properties (colors, fonts, shadows, spacing)
        └── main.scss       # Global resets, typography, utility classes
```

---

## Route structure (11 pages)

| Path                                      | Component               | Props                                              |
| ----------------------------------------- | ----------------------- | --------------------------------------------------- |
| `/`                                       | `RedirectPage.vue`      | —                                                   |
| `/en`                                     | `en/HomePage.vue`       | —                                                   |
| `/en/features/online-tandas`              | `FeatureContentView.vue` | `featureKey: onlineTandas, locale: en`             |
| `/en/features/group-savings`              | `FeatureContentView.vue` | `featureKey: groupSavings, locale: en`             |
| `/en/features/payment-tracking`           | `FeatureContentView.vue` | `featureKey: paymentTracking, locale: en`         |
| `/en/features/trust`                      | `FeatureContentView.vue` | `featureKey: trust, locale: en`                    |
| `/es`                                     | `es/HomePage.vue`        | —                                                   |
| `/es/caracteristicas/tandas-en-linea`     | `FeatureContentView.vue` | `featureKey: onlineTandas, locale: es`             |
| `/es/caracteristicas/ahorro-grupal`       | `FeatureContentView.vue` | `featureKey: groupSavings, locale: es`             |
| `/es/caracteristicas/control-pagos`        | `FeatureContentView.vue` | `featureKey: paymentTracking, locale: es`         |
| `/es/caracteristicas/confianza`           | `FeatureContentView.vue` | `featureKey: trust, locale: es`                    |
| `/:pathMatch(.*)*`                        | `NotFoundPage.vue`       | —                                                   |

`FeatureContentView.vue` uses `featureKey` to read sections from `messages.en.features[featureKey]` or `messages.es.features[featureKey]`. All 8 feature pages render from this single component.

---

## i18n conventions

- All user-facing strings MUST live in `src/i18n/messages.ts` under the `en` and `es` keys.
- The `messages` export is typed `as const` for narrow TS inference.
- Locale is determined by URL path: `/es` → `es`, everything else → `en`.
- `resolvePreferredLocale()` checks localStorage then browser language.
- `persistLocale()` writes to `localStorage('site-locale')` on every locale change.
- LanguageToggle uses an **explicit route map** (`routeMap`) to translate EN paths ↔ ES paths. Do NOT use string-replace logic — it breaks when paths differ structurally (e.g. `/en/features/X` vs `/es/caracteristicas/Y`).
- The footer legal hint and "free to use" disclaimer must appear on every page.

### Spanish: use neutral Mexican / Latin American Spanish

- No `vosotros` conjugations.
- No Spain-specific vocabulary (`ordenador`, `coche`, `móvil`, `vale`, `guay`, etc.).
- Use present indicative over Spain-style subjunctive where it sounds unnatural (e.g. "Sin anuncios molestos", not "Sin anuncios que molesten").

---

## SEO strategy

Summary of SEO patterns for the website.

### How it works

- Every page calls `useSeo()` from `src/composables/useSeo.ts`.
- `useSeo` sets the following in the `<head>` via `useHead` from `@unhead/vue`:
  - `<title>` with format `{Page Title} | Tandapp`
  - `<html lang="{locale}">`
  - Canonical link (full absolute URL, locale-aware)
  - Alternate hreflang links (current locale + opposite locale + x-default)
  - Meta description
  - OG: title, description, type, url, locale, alternate locale, site_name, image
  - Twitter card (summary_large_image) — title, description, image
  - JSON-LD structured data (`SoftwareApplication`, free, FinanceApplication)
  - Optionally: `noIndex: true` adds `robots: noindex`
- `index.html` has a redirect script at the top: if the path doesn't begin with `/en` or `/es`, it detects the locale and redirects. This runs before any JS framework loads.
- `vite.config.ts` generates `sitemap.xml` in the `onFinished` build hook with all 10 canonical URLs.

### When adding a new page

Add the route to `src/router/routes.ts`, add the sitemap entry in `vite.config.ts`'s `sitemapPaths` array, and call `useSeo()` in the page component with the appropriate `locale`, `path`, `title`, and `description`.

### When modifying SEO fields on a page

Edit the `useSeo()` call in the page component, or edit the `useSeo()` composable if the change applies site-wide.

### Key SEO files

- `src/composables/useSeo.ts` — the reusable SEO composable
- `src/config/site.ts` — canonical/alternate path helpers, domain, store URLs
- `index.html` — static meta tags that serve as fallback for pre-rendering
- `public/robots.txt` — allow all crawlers
- `public/404.html` — noindex 404 page
- `vite.config.ts` — sitemap generation in `ssgOptions.onFinished`

---

## Design tokens

All colors, fonts, radii, shadows, and spacing live in `src/styles/_tokens.scss` as CSS custom properties on `:root`.

Key colors:

| Token                           | Value     | Usage                                    |
| ------------------------------- | --------- | ---------------------------------------- |
| `--color-primary`               | `#0f6a62` | Teal — links, buttons, active states     |
| `--color-primary-dark`          | `#0d5850` | Hover/pressed states                     |
| `--color-primary-light`         | `#148f83` | Subtle highlights                        |
| `--color-accent`                | `#cc785c` | Terracotta — CTAs, feature card icons, emphasis |
| `--color-canvas`                | `#f7f0e7` | Light beige page background              |
| `--color-canvas-warm`           | `#f4efe5` | Warmer section background                |
| `--color-card`                  | `#fffcf7` | Card/panel background                    |
| `--color-text`                  | `#1f2a2a` | Body text                                |
| `--color-text-muted`            | `#5a6d6c` | Secondary text                           |
| `--color-footer-bg`             | `#14312f` | Footer background                        |
| `--color-header-link`           | `#2e4140` | Navigation link color                    |

Fonts: headings use **Sora**, body uses **DM Sans** (both loaded from Google Fonts).
The site is **light-mode only** — no dark mode CSS exists.

---

## Build & deploy

### Locally

```bash
npm run dev          # Vite dev server
npm run build-only   # vite-ssg build (no type check)
npm run build        # type-check + vite-ssg build
npm run type-check   # vue-tsc --build
npm run lint         # Oxlint + ESLint
npm run format       # Prettier
```

Build output goes to `dist/`. The SSG renders all 11 HTML files.

### CI/CD

`.github/workflows/deploy.yml`:
1. Checkout + cancel competing `pages-build-deployment` runs
2. Setup Node LTS, `npm ci`
3. `npm run type-check` + `npm run build`
4. Upload `dist/` as Pages artifact
5. Deploy to GitHub Pages with 3 retry attempts (30s and 60s waits between retries)

Triggered on push to `master` or `main`.

---

## Critical constraints

1. **No JavaScript-dependent content.** All text must be in the pre-rendered HTML. `vite-ssg` ensures this.
2. **No contact form** — the site is features + store links only.
3. **App is free** — must be prominently stated on every page.
4. **Legal disclaimer** — footer must always include: "Tandapp does not hold pooled money or process payments. It keeps private tanda coordination clear, documented, and easier to verify."
5. **Images** — use `placehold.co` for new placeholder images (descriptive names); replace with real images once available. Production images live in `public/images/`.
6. **Store buttons** — use external SVGs from `public/images/google-play.svg` and `public/images/apple.svg`. Do not inline SVGs for store icons; always reference the files.
7. **OG image** — must exist at `public/og-image.png` (1200×630). Not yet created.
8. **icon.png** — the app icon (favicon + header logo). Currently a 512×512 PNG with rounded corners and white padding. May not work well as an Android adaptive icon.
9. **`vite.config.ts` must exist** — it's critical for the build. Do not delete it.
10. **`@unhead/vue` must stay on v2** — `vite-ssg@28` is incompatible with v3+.
