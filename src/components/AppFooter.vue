<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import { siteConfig } from '@/config/site'

const { t } = useI18n()
const route = useRoute()

const currentLocale = computed(() => (route.path.startsWith('/es') ? 'es' : 'en'))

type FooterLink = { label: string; to: string }

const enLinks: FooterLink[] = [
  { label: 'Home', to: '/en' },
  { label: 'Online Tandas', to: '/en/features/online-tandas' },
  { label: 'Group Savings', to: '/en/features/group-savings' },
  { label: 'Payment Tracking', to: '/en/features/payment-tracking' },
  { label: 'Build Trust', to: '/en/features/trust' },
]

const esLinks: FooterLink[] = [
  { label: 'Inicio', to: '/es' },
  { label: 'Tandas en Línea', to: '/es/caracteristicas/tandas-en-linea' },
  { label: 'Ahorro Grupal', to: '/es/caracteristicas/ahorro-grupal' },
  { label: 'Control de Pagos', to: '/es/caracteristicas/control-pagos' },
  { label: 'Confianza', to: '/es/caracteristicas/confianza' },
]

const footerLinks = computed(() => (currentLocale.value === 'es' ? esLinks : enLinks))
</script>

<template>
  <footer class="app-footer">
    <div class="container app-footer__grid">
      <div class="app-footer__intro">
        <p class="app-footer__brand">{{ siteConfig.brandName }}</p>
        <p class="app-footer__hint">{{ t('footer.legalHint') }}</p>
        <p class="app-footer__free">{{ t('footer.free') }}</p>
      </div>

      <div class="app-footer__column">
        <p class="app-footer__label">Tandapp</p>
        <RouterLink
          v-for="link in footerLinks"
          :key="link.to"
          class="app-footer__link"
          :to="link.to"
        >
          {{ link.label }}
        </RouterLink>
      </div>

      <div class="app-footer__column">
        <p class="app-footer__label">Download</p>
        <a class="app-footer__link" :href="siteConfig.googlePlayUrl" target="_blank" rel="noopener">
          Google Play
        </a>
        <a class="app-footer__link" :href="siteConfig.appStoreUrl" target="_blank" rel="noopener">
          App Store
        </a>
      </div>
    </div>

    <div class="container app-footer__bottom">
      <p class="app-footer__copyright">
        2026 <a href="https://axislabs.eu/" target="_blank" rel="noopener">Axis Labs</a>
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app-footer {
  background: var(--color-footer-bg);
  color: var(--color-footer-text);
  padding: clamp(2.5rem, 6vw, 4.5rem) 0 1.5rem;
  border-top: 1px solid var(--color-border-dark);
}

.app-footer__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) repeat(2, minmax(0, 0.8fr));
  gap: 2rem 3rem;
}

.app-footer__brand {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 700;
  line-height: 0.9;
  color: var(--color-footer-text);
}

.app-footer__intro {
  display: grid;
  gap: 0.75rem;
}

.app-footer__hint,
.app-footer__free {
  margin: 0;
  max-width: 44ch;
  font-size: 0.92rem;
}

.app-footer__hint {
  color: var(--color-footer-text-muted);
}

.app-footer__free {
  font-weight: 600;
  color: var(--color-footer-text);
  margin-top: 0.25rem;
}

.app-footer__column {
  display: grid;
  align-content: start;
  gap: 0.7rem;
}

.app-footer__label {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.app-footer__link {
  font-size: 0.92rem;
  color: var(--color-footer-text-muted);
  font-weight: 500;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.app-footer__link:hover,
.app-footer__link:focus-visible {
  color: var(--color-accent);
}

.app-footer__bottom {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border-dark);
}

.app-footer__copyright {
  margin: 0;
  font-size: 0.82rem;
  color: var(--color-footer-text-muted);
}

@media (max-width: 780px) {
  .app-footer__grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
