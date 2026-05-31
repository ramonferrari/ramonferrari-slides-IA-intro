<script setup lang="ts">
const props = defineProps<{
  type?: "info" | "warning" | "danger"
}>()

const colors = {
  info: "#35996e",
  warning: "#f59e0b",
  danger: "#ef4444",
}
</script>

<template>
  <div
    class="glass"
    :style="{
      borderColor: colors[type || 'info']
    }"
  >
    <slot />
  </div>
</template>