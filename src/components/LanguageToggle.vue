<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isSpanish = computed(() => route.path.startsWith('/es'))

const routeMap: Record<string, string> = {
  '/en': '/es',
  '/en/features/online-tandas': '/es/caracteristicas/tandas-en-linea',
  '/en/features/group-savings': '/es/caracteristicas/ahorro-grupal',
  '/en/features/payment-tracking': '/es/caracteristicas/control-pagos',
  '/en/features/trust': '/es/caracteristicas/confianza',
  '/es': '/en',
  '/es/caracteristicas/tandas-en-linea': '/en/features/online-tandas',
  '/es/caracteristicas/ahorro-grupal': '/en/features/group-savings',
  '/es/caracteristicas/control-pagos': '/en/features/payment-tracking',
  '/es/caracteristicas/confianza': '/en/features/trust',
}

const otherPath = computed(() => {
  const cleanPath = route.path.replace(/\/$/, '') || '/'

  return routeMap[cleanPath] ?? (isSpanish.value ? '/en' : '/es')
})

const otherLabel = computed(() => (isSpanish.value ? 'EN' : 'ES'))
</script>

<template>
  <a :href="otherPath" class="lang-toggle" :aria-label="`Switch to ${otherLabel}`">
    {{ otherLabel }}
  </a>
</template>

<style scoped lang="scss">
.lang-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--color-primary);
  background: var(--color-header-link-hover-bg);
  transition: var(--transition-surface);
  text-decoration: none;
  flex-shrink: 0;
}

.lang-toggle:hover,
.lang-toggle:focus-visible {
  background: var(--color-primary);
  color: var(--color-text-on-primary);
}
</style>
