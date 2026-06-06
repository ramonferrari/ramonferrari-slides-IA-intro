<template>
  <div class="rf-center h-full px-20" :style="{ '--hero-gap': gap }">

    <div v-if="eyebrow" class="cinematic-eyebrow rf-reveal">
      <span class="eyebrow-inner">
        <AnimatedNumber :value="eyebrow" :padding="4" />
      </span>
    </div>

    <h1 class="rf-hero rf-reveal-2 hero-title">
      {{ title }}
    </h1>

    <div v-if="subtitle" class="hero-subtitle rf-reveal-3">
      {{ subtitle }}
    </div>

  </div>
</template>

<script setup lang="ts">
defineProps({
  eyebrow: String,
  title:   String,
  subtitle: String,
  gap:     { type: String, default: '1.2rem' },
})
</script>

<style scoped>
.cinematic-eyebrow {
  margin-bottom: var(--hero-gap);
  display: flex;
  align-items: center;
}

.eyebrow-inner {
  font-family: "JetBrains Mono", monospace;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.6em;
  text-transform: uppercase;
  color: var(--rf-highlight);
  padding: 0 0 4px 0;
  border-bottom: 2px solid var(--rf-highlight);
}

.hero-title {
  margin-top: 0;
  margin-bottom: 0.5rem;
  line-height: 1;
  color: var(--rf-text-primary);
}

.hero-subtitle {
  font-size: 1.8rem;
  font-weight: 300;
  color: var(--rf-text-secondary);
  opacity: 0;
  max-width: 800px;
  line-height: 1.4;
  letter-spacing: 0.02em;
}

</style>
