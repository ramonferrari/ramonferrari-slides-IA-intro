<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>E ela já trabalha nos bastidores</h1>

    <SensorFlow />

    <p style="text-align: center; margin-top: 1.4rem; font-size: 1.15rem; color: var(--rf-text-primary);">
      Isso é IA. E <span style="color: var(--rf-primary); font-weight: 700;">não tem nada de generativa</span>.
    </p>
  </SlideSection>
</template>
