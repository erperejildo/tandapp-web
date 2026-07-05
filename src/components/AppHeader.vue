<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import LanguageToggle from '@/components/LanguageToggle.vue'

const route = useRoute()

const currentLocale = computed(() => (route.path.startsWith('/es') ? 'es' : 'en'))

type NavItem = { label: string; to: string }

const enNav: NavItem[] = [
  { label: 'Home', to: '/en' },
  { label: 'Online Tandas', to: '/en/features/online-tandas' },
  { label: 'Group Savings', to: '/en/features/group-savings' },
  { label: 'Payment Tracking', to: '/en/features/payment-tracking' },
  { label: 'Build Trust', to: '/en/features/trust' },
]

const esNav: NavItem[] = [
  { label: 'Inicio', to: '/es' },
  { label: 'Tandas en Línea', to: '/es/caracteristicas/tandas-en-linea' },
  { label: 'Ahorro Grupal', to: '/es/caracteristicas/ahorro-grupal' },
  { label: 'Control de Pagos', to: '/es/caracteristicas/control-pagos' },
  { label: 'Confianza', to: '/es/caracteristicas/confianza' },
]

const navItems = computed(() => (currentLocale.value === 'es' ? esNav : enNav))
</script>

<template>
  <header class="app-header">
    <div class="container app-header__inner">
      <RouterLink :to="`/${currentLocale}`" class="app-header__brand" aria-label="Tandapp home">
        <img src="/icon.png" alt="Tandapp" class="app-header__logo" width="36" height="36" loading="eager" />
        <span class="app-header__name">Tandapp</span>
      </RouterLink>

      <nav class="app-header__nav" aria-label="Main navigation">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="app-header__link"
          active-class="app-header__link--active"
          :exact="item.to === `/${currentLocale}`"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="app-header__actions">
        <LanguageToggle />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--header-height);
  background: rgba(247, 240, 231, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.app-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.app-header__brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.app-header__logo {
  border-radius: 8px;
  flex-shrink: 0;
}

.app-header__name {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  color: #141e1e;
}

.app-header__nav {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.app-header__link {
  padding: 0.45rem 0.85rem;
  border-radius: var(--radius-pill);
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--color-header-link);
  transition: var(--transition-surface);
}

.app-header__link:hover,
.app-header__link:focus-visible {
  color: #141e1e;
  background: var(--color-header-link-hover-bg);
}

.app-header__link--active {
  color: var(--color-primary);
  background: var(--color-header-link-hover-bg);
  font-weight: 600;
}

@media (max-width: 780px) {
  .app-header__nav {
    display: none;
  }

  .app-header__actions {
    margin-left: auto;
  }
}

.app-header__actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
