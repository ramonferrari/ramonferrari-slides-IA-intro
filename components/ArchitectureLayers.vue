<script setup lang="ts">
defineProps<{
  layers: string[]
}>()
</script>

<template>
  <div class="rf-layers">

    <div
      v-for="(layer, i) in layers"
      :key="i"
      class="glass rf-layer"
    >
      {{ layer }}
    </div>

  </div>
</template>

<style scoped>
.rf-layers {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.rf-layer {
  text-align: center;
  font-weight: 600;
}
</style>