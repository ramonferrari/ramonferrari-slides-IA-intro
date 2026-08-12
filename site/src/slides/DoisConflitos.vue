<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>Os Dois Conflitos da IA</h1>

    <div class="flex items-center gap-4 mt-4 conflitos-row" style="font-size: 0.85rem; line-height: 1.5;">
      <div class="glass p-4 flex-1" style="border-color: var(--rf-primary); text-align: center;">
        <span style="color: var(--rf-primary); font-weight: 700;">🧠 Fiel ao treinamento</span><br><br>
        Ser completa. Agradar. Parecer confiante. Nunca deixar uma pergunta sem resposta.
      </div>

      <div class="conflito-vs">vs</div>

      <div class="glass p-4 flex-1" style="border-color: var(--rf-highlight); text-align: center;">
        <span style="color: var(--rf-highlight); font-weight: 700;">📋 Seguir suas instruções</span><br><br>
        Ser precisa. Dizer "não encontrei". Citar a fonte. Usar só o que está no documento.
      </div>
    </div>
  </SlideSection>
</template>

<style scoped>
.conflito-vs {
  font-size: 1rem;
  font-weight: 700;
  flex-shrink: 0;
  text-align: center;
  opacity: 0.45;
  letter-spacing: 0.1em;
}

@media (max-width: 640px) {
  .conflitos-row {
    flex-direction: column;
  }
}
</style>
