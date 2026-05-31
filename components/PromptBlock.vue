<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="glass">

    <div class="rf-prompt-title">
      {{ title || "PROMPT" }}
    </div>

    <pre><slot /></pre>

  </div>
</template>

<style scoped>
.rf-prompt-title {
  margin-bottom: 1rem;
  letter-spacing: 0.12em;
  font-size: 0.75rem;
  opacity: 0.7;
}
</style>