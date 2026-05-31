<script setup lang="ts">
defineProps<{
  clause: string
  risk?: string
}>()
</script>

<template>
  <div class="glass">

    <div class="rf-clause-header">
      Clause {{ clause }}
      ·
      {{ risk || "medium" }}
    </div>

    <div class="rf-clause-content">
      <slot />
    </div>

  </div>
</template>

<style scoped>
.rf-clause-header {
  margin-bottom: 1rem;
  color: var(--rf-primary);
  letter-spacing: 0.08em;
}

.rf-clause-content {
  line-height: 1.8;
}
</style>