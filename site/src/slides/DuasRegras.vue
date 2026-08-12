<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>Duas regras que não se negociam</h1>

    <div class="grid grid-cols-2 gap-7 mt-6">
      <div class="rule-card">
        <div class="rule-num">REGRA 1</div>
        <svg viewBox="0 0 48 48" class="rule-icon">
          <rect x="10" y="21" width="28" height="19" rx="4" fill="none" stroke="var(--rf-primary)" stroke-width="2" />
          <path d="M16 21 v-5 a8 8 0 0 1 16 0 v5" fill="none" stroke="var(--rf-primary)" stroke-width="2" />
          <circle cx="24" cy="30" r="2.6" fill="var(--rf-primary)" />
          <path d="M24 32.5 v4" stroke="var(--rf-primary)" stroke-width="2" stroke-linecap="round" />
        </svg>
        <div class="rule-text">Dado sensível: <b>só no ambiente corporativo</b> autorizado pela sua empresa. Nunca em ferramenta pública.</div>
      </div>
      <div class="rule-card">
        <div class="rule-num">REGRA 2</div>
        <svg viewBox="0 0 48 48" class="rule-icon">
          <path d="M24 5 L40 11 v10 c0 10 -6.5 16.5 -16 19 -9.5 -2.5 -16 -9 -16 -19 V11 Z" fill="none" stroke="var(--rf-primary)" stroke-width="2" stroke-linejoin="round" />
          <path d="M16.5 24 l5 5 L32 18.5" fill="none" stroke="var(--rf-primary)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div class="rule-text"><b>Validou? Só então aja</b> sobre a resposta. A IA rascunha; quem responde pela decisão é você.</div>
      </div>
    </div>
  </SlideSection>
</template>

<style scoped>
.rule-card {
  background: var(--rf-bg-soft);
  border: 1px solid var(--rf-border-secondary);
  outline: 1px solid var(--rf-border-primary);
  outline-offset: 4px;
  border-radius: var(--rf-radius);
  padding: 2rem 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.1rem;
  box-shadow: var(--rf-shadow);
}
.rule-num {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  color: var(--rf-highlight);
}
.rule-icon { width: 62px; height: 62px; }
.rule-text { font-size: 1.18rem; color: var(--rf-text-secondary); line-height: 1.6; }
.rule-text b { color: var(--rf-text-primary); }
</style>
