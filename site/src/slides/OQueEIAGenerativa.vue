<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>O que é IA generativa</h1>

    <div class="flex flex-col justify-center gap-4 mt-6">
      <div class="glass p-5" style="border-color: rgba(99,211,161,0.4);">
        <p style="font-size: 1.05rem; line-height: 1.7; margin: 0;">
          IA tradicional <span style="color: var(--rf-text-muted);">→ </span>
          <strong style="color: var(--rf-primary);">classifica, prevê ou recomenda</strong>
          a partir de padrões históricos.
        </p>
        <p style="font-size: 0.78rem; color: var(--rf-text-muted); margin: 0.5rem 0 0;">
          Ex: spam filter, recomendação de produto, detecção de fraude.
        </p>
      </div>

      <div class="glass p-5" style="border-color: rgba(226,248,27,0.4);">
        <p style="font-size: 1.05rem; line-height: 1.7; margin: 0;">
          IA generativa <span style="color: var(--rf-text-muted);">→ </span>
          <strong style="color: var(--rf-highlight);">produz conteúdo novo</strong>: texto, imagem, código, áudio.
        </p>
        <p style="font-size: 0.78rem; color: var(--rf-text-muted); margin: 0.5rem 0 0;">
          Ex: ChatGPT, Claude, Gemini, Midjourney, GitHub Copilot.
        </p>
      </div>
    </div>
  </SlideSection>
</template>
