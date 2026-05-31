<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>

<template>
  <div class="rf-timeline">

    <div
      v-for="(item, i) in items"
      :key="i"
      class="glass rf-timeline-item"
    >
      <div class="rf-index">
        {{ i + 1 }}
      </div>

      {{ item }}
    </div>

  </div>
</template>

<style scoped>
.rf-timeline {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.rf-index {
  color: var(--rf-primary);
  font-weight: 700;
  margin-bottom: 0.5rem;
}
</style>