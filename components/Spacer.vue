<script setup lang="ts">
defineProps<{
  h?: number
}>()
</script>

<template>
  <div :style="{ height: `${h || 24}px` }" />
</template>