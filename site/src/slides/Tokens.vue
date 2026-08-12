<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>Ela lê em pedaços: tokens</h1>

    <TokenBlocks />

    <p style="text-align: center; margin-top: 1.2rem; font-size: 0.95rem; color: var(--rf-text-muted);">token = menor unidade processada · por isso ela tropeça em soletração e contas</p>
  </SlideSection>
</template>
