<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id" hero>
    <CoverSlide
      title="A era da IA Generativa"
      subtitle="O que muda quando computadores passam a gerar conteúdo?"
      presenter="R. M. Ferrari"
      date="Julho de 2026"
    />
  </SlideSection>
</template>
