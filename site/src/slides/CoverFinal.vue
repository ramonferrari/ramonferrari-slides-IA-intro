<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id" hero>
    <CoverSlide
      title="Obrigado"
      subtitle="Perguntas?"
      presenter="R. M. Ferrari"
      date="Julho de 2026"
    />
  </SlideSection>
</template>
