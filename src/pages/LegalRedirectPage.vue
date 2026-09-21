<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { useSeo } from '@/composables/useSeo'
import { resolvePreferredLocale } from '@/i18n/messages'

const props = defineProps<{
  type: 'privacy' | 'terms'
}>()

useSeo({
  locale: 'en',
  path: props.type === 'privacy' ? '/privacy' : '/terms',
})

const router = useRouter()

let redirected = false

function redirectToLocaleLegal() {
  if (redirected) return
  redirected = true

  const locale = resolvePreferredLocale()
  if (props.type === 'privacy') {
    router.replace(locale === 'es' ? '/es/privacidad' : '/en/privacy')
  } else {
    router.replace(locale === 'es' ? '/es/terminos' : '/en/terms')
  }
}

onMounted(() => {
  redirectToLocaleLegal()
})
</script>

<template>
  <div class="redirect">
    <p>Loading...</p>
  </div>
</template>

<style scoped>
.redirect {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  font-family: var(--font-heading);
  color: var(--color-text-muted);
}

.redirect p {
  margin: 0;
  font-size: 1rem;
}
</style>
