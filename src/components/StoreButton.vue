<script setup lang="ts">
defineProps<{
  store: 'google' | 'apple'
  href: string
}>()
</script>

<template>
  <a :href="href" target="_blank" rel="noopener" class="store-button" :class="`store-button--${store}`">
    <img
      v-if="store === 'google'"
      src="/images/google-play.svg"
      alt=""
      class="store-button__icon"
      aria-hidden="true"
    />
    <img
      v-else
      src="/images/apple.svg"
      alt=""
      class="store-button__icon"
      aria-hidden="true"
    />
    <span class="store-button__text">
      <slot />
    </span>
  </a>
</template>

<style scoped lang="scss">
.store-button {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  min-height: 3rem;
  padding: 0.65rem 1.5rem;
  border-radius: var(--radius-pill);
  font-weight: 700;
  font-size: 0.9rem;
  transition: var(--transition-surface);
  color: var(--color-text-on-primary);
  background: #141e1e;
  box-shadow: var(--shadow-card);
}

.store-button:hover,
.store-button:focus-visible {
  transform: translateY(-2px);
  box-shadow: var(--shadow-strong);
  background: #1a2827;
}

.store-button__icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  filter: brightness(0) invert(1);
}
</style>
