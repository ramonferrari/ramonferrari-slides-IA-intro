<script setup lang="ts">
defineProps<{
  model?: string
}>()
</script>

<template>
  <div class="glass rf-stream">

    <div class="rf-header">
      {{ model || "General LLM" }}
    </div>

    <div class="rf-content">
      <slot />
      <span class="rf-cursor">▋</span>
    </div>

  </div>
</template>

<style scoped>
.rf-header {
  margin-bottom: 1rem;
  color: var(--rf-primary);
  letter-spacing: 0.1em;
  font-size: 0.75rem;
}

.rf-content {
  line-height: 1.8;
}

.rf-cursor {
  animation: blink 1s infinite;
  color: var(--rf-primary);
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>