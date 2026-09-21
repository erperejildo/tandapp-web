<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { useSeo } from '@/composables/useSeo'
import { resolvePreferredLocale } from '@/i18n/messages'

useSeo({
  locale: 'en',
  path: '/blog',
})

const router = useRouter()

let redirected = false

function redirectToLocaleBlog() {
  if (redirected) return
  redirected = true

  const locale = resolvePreferredLocale()
  router.replace(`/${locale}/blog`)
}

onMounted(() => {
  redirectToLocaleBlog()
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
