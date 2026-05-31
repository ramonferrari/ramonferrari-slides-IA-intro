<template>
  <div class="rf-center h-full px-20" :style="{ '--hero-gap': gap }">

    <div class="rf-eyebrow rf-reveal hero-eyebrow">
      {{ eyebrow }}
    </div>

    <h1 class="rf-hero text-white rf-reveal-2 hero-title">
      {{ title }}
    </h1>

  </div>
</template>

<script setup>
defineProps({
  eyebrow: String,
  title:   String,
  gap:     { type: String, default: '1.5rem' },
})
</script>

<style scoped>
/* Adjust gap between eyebrow and title via the `gap` prop */
.hero-eyebrow { margin-bottom: var(--hero-gap); }
.hero-title   { margin-top: 0; }
</style>
