<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>Cinco usos de alto retorno</h1>

    <div class="usos-grid mt-5">
      <div class="glass p-3 flex flex-col gap-2" style="font-size: 0.75rem; line-height: 1.5;">
        <span style="font-size: 1.4rem;">📄</span>
        <strong style="color: var(--rf-primary);">Análise de documentos</strong>
        <span style="color: var(--rf-text-muted);">Contratos, relatórios, atas. Extração estruturada em segundos.</span>
      </div>

      <div class="glass p-3 flex flex-col gap-2" style="font-size: 0.75rem; line-height: 1.5;">
        <span style="font-size: 1.4rem;">✉️</span>
        <strong style="color: var(--rf-primary);">Comunicação</strong>
        <span style="color: var(--rf-text-muted);">E-mails difíceis, apresentações, resumos executivos com tom ajustável.</span>
      </div>

      <div class="glass p-3 flex flex-col gap-2" style="font-size: 0.75rem; line-height: 1.5;">
        <span style="font-size: 1.4rem;">🔍</span>
        <strong style="color: var(--rf-primary);">Pesquisa rápida</strong>
        <span style="color: var(--rf-text-muted);">Benchmark de mercado, síntese de literatura, comparativo de opções.</span>
      </div>

      <div class="glass p-3 flex flex-col gap-2" style="font-size: 0.75rem; line-height: 1.5;">
        <span style="font-size: 1.4rem;">🧮</span>
        <strong style="color: var(--rf-primary);">Estruturação de problemas</strong>
        <span style="color: var(--rf-text-muted);">Ideação, árvores de decisão, frameworks.</span>
      </div>

      <div class="glass p-3 flex flex-col gap-2" style="font-size: 0.75rem; line-height: 1.5;">
        <span style="font-size: 1.4rem;">⚙️</span>
        <strong style="color: var(--rf-primary);">Automação de rotinas</strong>
        <span style="color: var(--rf-text-muted);">Transcrição de reuniões, padronização de dados, geração de templates.</span>
      </div>
    </div>

    <div class="glass p-3 mt-4" style="font-size: 0.78rem; line-height: 1.6; border-color: rgba(226,248,27,0.3);">
      <strong style="color: var(--rf-highlight);">Regra prática:</strong>
      se a tarefa envolve ler, resumir, comparar, redigir ou estruturar texto:
      a IA provavelmente faz em 10% do tempo. Se envolve decisão final com consequência real: o humano é <strong>insubstituível</strong>.
    </div>
  </SlideSection>
</template>

<style scoped>
.usos-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.6rem;
}

@media (max-width: 980px) {
  .usos-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .usos-grid {
    grid-template-columns: 1fr;
  }
}
</style>
