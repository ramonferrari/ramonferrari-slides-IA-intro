<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>O que a IA sabe</h1>

    <div style="position: relative; width: 100%; height: min(58vh, 480px); min-height: 340px;">
      <AIKnowledge />
    </div>
  </SlideSection>
</template>
