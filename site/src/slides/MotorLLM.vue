<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>O motor tem nome: LLM</h1>

    <div style="text-align: center; margin-top: 0.4rem; margin-bottom: 1.4rem;">
      <span style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: var(--rf-text-muted);"><b style="color: var(--rf-primary); font-size: 1.3rem;">L</b>arge <b style="color: var(--rf-primary); font-size: 1.3rem;">L</b>anguage <b style="color: var(--rf-primary); font-size: 1.3rem;">M</b>odel: modelo de linguagem grande</span>
    </div>

    <div class="llm-pipeline">
      <div class="glass llm-step">
        <div class="llm-num">FASE 1</div>
        <svg viewBox="0 0 32 32" class="llm-icon"><path d="M16 7 c-3 -2.5 -7 -3 -11 -2 v18 c4 -1 8 -0.5 11 2 c3 -2.5 7 -3 11 -2 V5 c-4 -1 -8 -0.5 -11 2 Z" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linejoin="round"/><path d="M16 7 v18" stroke="var(--rf-primary)" stroke-width="1.5"/></svg>
        <div class="llm-title">Pré-treino</div>
        <div class="llm-desc">"lê" bilhões de páginas: livros, sites, código</div>
      </div>
      <div class="llm-arrow">→</div>
      <div class="glass llm-step">
        <div class="llm-num">RESULTADO</div>
        <svg viewBox="0 0 32 32" class="llm-icon"><circle cx="9" cy="10" r="2" fill="var(--rf-primary)"/><circle cx="23" cy="8" r="2" fill="var(--rf-primary)" opacity="0.7"/><circle cx="16" cy="17" r="2" fill="var(--rf-primary)"/><circle cx="8" cy="24" r="2" fill="var(--rf-primary)" opacity="0.7"/><circle cx="24" cy="23" r="2" fill="var(--rf-primary)"/><path d="M10.5 11.5 L14.5 15.5 M21.5 9.5 L17.5 15.5 M14.5 18.5 L9.5 22.5 M17.5 18.5 L22.5 21.5" stroke="var(--rf-primary)" stroke-width="1.2" opacity="0.5"/></svg>
        <div class="llm-title">Padrões</div>
        <div class="llm-desc">aprende o que costuma vir junto (não "entende" como você)</div>
      </div>
      <div class="llm-arrow">→</div>
      <div class="glass llm-step">
        <div class="llm-num">FASE 2</div>
        <svg viewBox="0 0 32 32" class="llm-icon"><path d="M16 4 l2.7 6.5 7 .6 -5.3 4.6 1.6 6.9 -6 -3.7 -6 3.7 1.6 -6.9 -5.3 -4.6 7 -.6 Z" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linejoin="round"/><path d="M23 24 l4 4 M25 22 l4 4" stroke="var(--rf-primary)" stroke-width="1.4" stroke-linecap="round" opacity="0.6"/></svg>
        <div class="llm-title">Ajuste fino</div>
        <div class="llm-desc">é lapidado por humanos pra ser útil, seguro… e <span style="color: var(--rf-highlight);">agradável</span></div>
      </div>
    </div>

    <p style="text-align: center; margin-top: 1.5rem; font-size: 0.95rem; color: var(--rf-text-muted);">é matemática e estatística sofisticadas, com resultado que <span style="color: var(--rf-primary);">parece humano</span></p>
  </SlideSection>
</template>

<style scoped>
.llm-pipeline {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 1.25rem;
  align-items: stretch;
}

.llm-step {
  padding: 1.1rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.45rem;
}
.llm-num {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  color: var(--rf-text-muted);
}
.llm-icon { width: 34px; height: 34px; }
.llm-title { font-size: 1.1rem; font-weight: 700; color: var(--rf-text-primary); }
.llm-desc { font-size: 0.85rem; color: var(--rf-text-secondary); line-height: 1.5; }
.llm-arrow {
  align-self: center;
  color: var(--rf-primary);
  font-size: 1.6rem;
  font-weight: 700;
}

@media (max-width: 780px) {
  .llm-pipeline {
    grid-template-columns: 1fr;
  }
  .llm-arrow {
    transform: rotate(90deg);
  }
}
</style>
