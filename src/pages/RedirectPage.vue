<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { resolvePreferredLocale } from '@/i18n/messages'

const router = useRouter()

let redirected = false

function redirectToLocale() {
  if (redirected) return
  redirected = true

  const locale = resolvePreferredLocale()

  router.replace(`/${locale}`)
}

onMounted(() => {
  redirectToLocale()
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

  &::after {
    content: '';
    display: inline-block;
    animation: dots 1.5s steps(3, end) infinite;
  }
}

@keyframes dots {
  0% { content: '.'; }
  33% { content: '..'; }
  66% { content: '...'; }
}
</style>
