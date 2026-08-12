<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>Já é presente, não futuro</h1>

    <div class="grid grid-cols-3 gap-4 mt-10">
      <MetricCard value="~78%" label="das organizações já usam GenAI em ao menos 1 função" />
      <MetricCard value="US$ 395 bi" label="mercado global estimado em 2026" />
      <MetricCard value="+327%" label="crescimento de sistemas multi-agente em < 4 meses" />
    </div>
  </SlideSection>
</template>
