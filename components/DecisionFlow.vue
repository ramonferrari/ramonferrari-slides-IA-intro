<script setup lang="ts">
defineProps<{
  steps: string[]
}>()
</script>

<template>
  <div class="rf-decision-flow">

    <div
      v-for="(step, i) in steps"
      :key="i"
      class="glass rf-decision-step"
    >
      {{ step }}

      <div
        v-if="i < steps.length - 1"
        class="rf-arrow"
      >
        ↓
      </div>
    </div>

  </div>
</template>

<style scoped>
.rf-decision-flow {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 700px;
}

.rf-decision-step {
  text-align: center;
  position: relative;
}

.rf-arrow {
  margin-top: 1rem;
  opacity: 0.6;
  font-size: 1.5rem;
}
</style>