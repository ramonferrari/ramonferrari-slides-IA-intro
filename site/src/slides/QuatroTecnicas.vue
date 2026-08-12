<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>Quatro técnicas para conhecer</h1>

    <div class="grid grid-cols-2 gap-5 mt-2">
      <div class="glass tech-card">
        <div class="tech-head">
          <svg viewBox="0 0 24 24" class="tech-icon"><circle cx="12" cy="12" r="8" fill="none" stroke="var(--rf-primary)" stroke-width="1.5"/><circle cx="12" cy="12" r="4" fill="none" stroke="var(--rf-primary)" stroke-width="1.5"/><circle cx="12" cy="12" r="1.2" fill="var(--rf-primary)"/></svg>
          <b>Instruir sem exemplos</b>
          <span class="tag">zero-shot</span>
        </div>
        <div class="tech-body">"Classifica esse e-mail como urgente ou não." (o mais comum no dia a dia)</div>
      </div>
      <div class="glass tech-card">
        <div class="tech-head">
          <svg viewBox="0 0 24 24" class="tech-icon"><rect x="4" y="4" width="12" height="8" rx="2" fill="none" stroke="var(--rf-primary)" stroke-width="1.4" opacity="0.4"/><rect x="6" y="8" width="12" height="8" rx="2" fill="none" stroke="var(--rf-primary)" stroke-width="1.4" opacity="0.7"/><rect x="8" y="12" width="12" height="8" rx="2" fill="none" stroke="var(--rf-primary)" stroke-width="1.5"/></svg>
          <b>Dar 2–3 exemplos</b>
          <span class="tag">few-shot</span>
        </div>
        <div class="tech-body">Mostre o padrão que você quer e ele copia o formato. Ótimo pra padronizar.</div>
      </div>
      <div class="glass tech-card">
        <div class="tech-head">
          <svg viewBox="0 0 24 24" class="tech-icon"><circle cx="5" cy="12" r="2.2" fill="none" stroke="var(--rf-primary)" stroke-width="1.5"/><circle cx="12" cy="12" r="2.2" fill="none" stroke="var(--rf-primary)" stroke-width="1.5"/><circle cx="19" cy="12" r="2.2" fill="none" stroke="var(--rf-primary)" stroke-width="1.5"/><path d="M7.2 12 h2.6 M14.2 12 h2.6" stroke="var(--rf-primary)" stroke-width="1.5"/></svg>
          <b>"Pense passo a passo"</b>
          <span class="tag">chain-of-thought</span>
        </div>
        <div class="tech-body">Melhora bastante a qualidade em problemas de raciocínio.</div>
      </div>
      <div class="glass tech-card">
        <div class="tech-head">
          <svg viewBox="0 0 24 24" class="tech-icon"><path d="M4 6 q8 -4 16 0 v5 q0 7 -8 9 q-8 -2 -8 -9 Z" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linejoin="round"/><circle cx="9.5" cy="11" r="1.2" fill="var(--rf-primary)"/><circle cx="14.5" cy="11" r="1.2" fill="var(--rf-primary)"/><path d="M9.5 15 q2.5 2 5 0" fill="none" stroke="var(--rf-primary)" stroke-width="1.4" stroke-linecap="round"/></svg>
          <b>Atribuir uma persona</b>
          <span class="tag">role prompting</span>
        </div>
        <div class="tech-body">"Aja como um instrutor explicando pra iniciante." (a gente já usou)</div>
      </div>
    </div>
  </SlideSection>
</template>

<style scoped>
.tech-card { padding: 1.1rem 1.3rem; }
.tech-head { display: flex; align-items: center; gap: 0.7rem; margin-bottom: 0.5rem; flex-wrap: wrap; }
.tech-head b { color: var(--rf-text-primary); font-size: 1rem; }
.tech-head .tag { margin-left: auto; font-size: 0.58rem; }
.tech-icon { width: 26px; height: 26px; flex-shrink: 0; }
.tech-body { font-size: 0.88rem; color: var(--rf-text-secondary); }
</style>
