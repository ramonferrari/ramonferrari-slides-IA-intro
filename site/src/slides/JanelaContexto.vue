<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>A janela de contexto é uma mesa</h1>

    <Contextdesk />
  </SlideSection>
</template>
