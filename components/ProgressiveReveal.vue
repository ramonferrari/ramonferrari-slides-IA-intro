<script setup lang="ts">
defineProps<{
  step?: number
}>()
</script>

<template>
  <div v-click="[step || 1]" class="glass">
    <slot />
  </div>
</template>