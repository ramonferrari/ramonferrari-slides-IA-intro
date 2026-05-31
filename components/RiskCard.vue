<script setup lang="ts">
const props = defineProps<{
  level?: "low" | "medium" | "high"
  title: string
}>()
const colors = {
  low: "#35996e",
  medium: "#f59e0b",
  high: "#ef4444",
}
const color = colors[props.level || "medium"]
</script>
<template>
  <div
    class="glass rf-risk"
    :style="{
      borderColor: color + '55',
      boxShadow: `0 0 40px ${color}22`
    }"
  >
    <div
      class="rf-risk-level"
      :style="{ color }"
    >
      {{ level?.toUpperCase() || "MEDIUM" }}
    </div>
    <h3>
      {{ title }}
    </h3>
    <div class="rf-risk-content">
      <slot />
    </div>
  </div>
</template>
<style scoped>
.rf-risk-level {
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  margin-bottom: 0.8rem;
  font-family: "JetBrains Mono", monospace;
}
.rf-risk-content {
  margin-top: 1rem;
  line-height: 1.7;
}
</style>