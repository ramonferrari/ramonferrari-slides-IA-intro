<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>No fundo: qual a próxima palavra?</h1>

    <NextTokenBars />

    <p style="text-align: center; margin-top: 0.8rem; font-size: 0.98rem; font-style: italic; color: var(--rf-text-secondary);">ele gera o texto mais <b style="color: var(--rf-primary);">plausível</b>, não necessariamente o <b style="color: var(--rf-highlight);">verdadeiro</b></p>
  </SlideSection>
</template>
