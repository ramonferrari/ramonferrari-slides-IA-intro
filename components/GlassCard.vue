<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  }>()
</script>

<template>
  <div class="glass rf-card">
    
    <div v-if="subtitle" class="rf-card-subtitle">
      {{ subtitle }}
    </div>

    <h3 v-if="title" class="rf-card-title">
      {{ title }}
    </h3>

    <div class="rf-card-content">
      <slot />
    </div>

  </div>
</template>

<style scoped>
.rf-card {
  width: 100%;
  align-self: start;
}

.rf-card-subtitle {
  color: var(--rf-primary);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
  font-family: "JetBrains Mono", monospace;
}

.rf-card-title {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--rf-text);
  letter-spacing: -0.03em;
}

.rf-card-content {
  color: var(--rf-muted);
  line-height: 1.7;
}
</style>