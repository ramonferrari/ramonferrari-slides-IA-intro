<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="glass rf-doc">

    <div class="rf-doc-header">
      {{ title || "DOCUMENT" }}
    </div>

    <div class="rf-doc-content">
      <slot />
    </div>

  </div>
</template>

<style scoped>
.rf-doc-header {
  opacity: 0.6;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
}

.rf-doc-content {
  line-height: 1.8;
}
</style>