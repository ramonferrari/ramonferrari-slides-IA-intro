<script setup lang="ts">
defineProps<{
  value: string
  label: string
}>()
</script>
<template>
  <div class="glass rf-metric">
    <div class="rf-value">
      <AnimatedNumber :value="value" />
    </div>
    <div class="rf-label">
      {{ label }}
    </div>
  </div>
</template>
<style scoped>
.rf-metric {
  text-align: center;
}
.rf-value {
  font-size: 3rem;
  font-weight: 700;
  color: var(--rf-primary);
  line-height: 1;
  letter-spacing: -0.05em;
}
.rf-label {
  margin-top: 1rem;
  color: var(--rf-secondary);
  font-size: 0.95rem;
}
</style>
