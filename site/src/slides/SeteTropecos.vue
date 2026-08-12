<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>Os 7 tropeços de quem começa</h1>

    <div class="tropecos-grid mt-3">
      <div class="erro-item">
        <span class="erro-num">1</span>
        <span>usar como <b>buscador confiável</b> — ela não é o Google</span>
      </div>
      <div class="erro-item">
        <span class="erro-num">2</span>
        <span>não <b>checar a resposta</b> antes de usar</span>
      </div>
      <div class="erro-item">
        <span class="erro-num">3</span>
        <span>fazer perguntas <b>vagas e genéricas</b></span>
      </div>
      <div class="erro-item">
        <span class="erro-num">4</span>
        <span>não dar <b>contexto</b> suficiente</span>
      </div>
      <div class="erro-item">
        <span class="erro-num">5</span>
        <span>achar que ela <b>lembra</b> da conversa passada — mesa limpa, lembra?</span>
      </div>
      <div class="erro-item erro-grave">
        <span class="erro-num grave">6</span>
        <span>colar <b>dado sigiloso</b> em ferramenta pública</span>
      </div>
      <div class="erro-item erro-full">
        <span class="erro-num">7</span>
        <span>esperar <b>perfeição de primeira</b> — iterar é o uso normal</span>
      </div>
    </div>

    <p style="text-align: center; margin-top: 1.6rem; font-size: 0.95rem; color: var(--rf-text-muted); font-style: italic;">todo mundo comete os sete — a diferença é <span style="color: var(--rf-primary);">quanto tempo demora pra parar</span></p>
  </SlideSection>
</template>

<style scoped>
.tropecos-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem 2rem;
}

.erro-full {
  grid-column: 1 / -1;
  justify-content: center;
}

@media (max-width: 780px) {
  .tropecos-grid {
    grid-template-columns: 1fr;
  }
}

.erro-item {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  background: var(--rf-surface-primary);
  border: 1px solid var(--rf-border-primary);
  border-radius: 12px;
  padding: 0.65rem 1rem;
  font-size: 0.95rem;
  color: var(--rf-text-secondary);
  backdrop-filter: blur(12px);
}
.erro-item b { color: var(--rf-text-primary); }
.erro-num {
  flex-shrink: 0;
  width: 30px; height: 30px;
  border-radius: 50%;
  border: 1.5px solid var(--rf-primary);
  color: var(--rf-primary);
  font-family: "JetBrains Mono", monospace;
  font-weight: 700;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.erro-grave { border-color: rgba(236,99,94,0.4); }
.erro-num.grave { border-color: #EC635E; color: #EC635E; }
</style>
