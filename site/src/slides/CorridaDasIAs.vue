<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>Corrida das IAs</h1>

    <AICompetition />
  </SlideSection>
</template>
