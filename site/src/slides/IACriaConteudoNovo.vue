<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>IA que cria conteúdo novo</h1>

    <div style="max-width: 660px; margin: 0 auto; display: flex; flex-direction: column; gap: 0.4rem;">
      <PromptCard title="seu pedido" compact>
        Me escreve uma receita de bolo <b>sem lactose</b>, pra <b>doze pessoas</b>, em tom <b>bem-humorado</b>.
      </PromptCard>
      <div style="display: flex; align-items: center; justify-content: center; gap: 0.7rem; padding: 0.15rem 0;">
        <svg viewBox="0 0 20 44" style="width: 16px; height: 34px;">
          <line x1="10" y1="2" x2="10" y2="32" stroke="var(--rf-primary)" stroke-width="2" stroke-dasharray="5 4" />
          <path d="M4 30 L10 40 L16 30" fill="none" stroke="var(--rf-primary)" stroke-width="2" stroke-linejoin="round" />
        </svg>
        <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.62rem; letter-spacing: 0.2em; color: var(--rf-primary); text-transform: uppercase;">conteúdo NOVO gerado, não recuperado</span>
      </div>
      <StreamingLLM model="IA generativa">
        <span style="font-size: 0.9rem;">Bolo dos Doze Corajosos (zero lactose, zero drama): 3 ovos, 2 xícaras de farinha, leite de coco no lugar do leite... e a parte mais difícil: esperar esfriar sem provar.</span>
      </StreamingLLM>
      <div style="display: flex; justify-content: center; gap: 0.7rem; margin-top: 0.7rem; flex-wrap: wrap;">
        <span class="tag">texto</span>
        <span class="tag">imagem</span>
        <span class="tag">código</span>
        <span class="tag">áudio</span>
      </div>
    </div>
  </SlideSection>
</template>
