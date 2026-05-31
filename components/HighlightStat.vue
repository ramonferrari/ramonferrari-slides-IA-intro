<script setup lang="ts">
defineProps<{
  value: string
  caption: string
}>()
</script>

<template>
  <div class="rf-highlight">

    <div class="rf-value">
      {{ value }}
    </div>

    <div class="rf-caption">
      {{ caption }}
    </div>

  </div>
</template>

<style scoped>
.rf-highlight {
  text-align: center;
  margin-top: 4rem;
}

.rf-value {
  font-size: 7rem;
  font-weight: 700;
  color: var(--rf-primary);
  line-height: 1;
}

.rf-caption {
  margin-top: 1rem;
  opacity: 0.7;
  font-size: 1.3rem;
}
</style>