<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>Modelo leve × pro</h1>

    <ModelComparison />
  </SlideSection>
</template>
