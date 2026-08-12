<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>O que a IA não substitui</h1>

    <div class="grid grid-cols-3 gap-4 mt-6">
      <div class="glass p-4 flex flex-col gap-3" style="border-top: 3px solid #EC635E;">
        <span style="font-size: 1.5rem;">⚖️</span>
        <strong style="color: var(--rf-text-primary); font-size: 0.88rem;">Julgamento com consequência</strong>
        <p style="font-size: 0.77rem; color: var(--rf-text-muted); line-height: 1.6; margin: 0;">
          Demissões, aprovações de crédito, diagnósticos, decisões estratégicas irreversíveis.
          A IA pode preparar o material. A responsabilidade é sua.
        </p>
      </div>

      <div class="glass p-4 flex flex-col gap-3" style="border-top: 3px solid #EC635E;">
        <span style="font-size: 1.5rem;">🤝</span>
        <strong style="color: var(--rf-text-primary); font-size: 0.88rem;">Relação e confiança</strong>
        <p style="font-size: 0.77rem; color: var(--rf-text-muted); line-height: 1.6; margin: 0;">
          Negociações complexas, liderança em crise, construção de cultura.
          Nenhum prompt substitui presença e credibilidade pessoal.
        </p>
      </div>

      <div class="glass p-4 flex flex-col gap-3" style="border-top: 3px solid #EC635E;">
        <span style="font-size: 1.5rem;">🧭</span>
        <strong style="color: var(--rf-text-primary); font-size: 0.88rem;">Contexto organizacional</strong>
        <p style="font-size: 0.77rem; color: var(--rf-text-muted); line-height: 1.6; margin: 0;">
          A IA não sabe quem é o stakeholder difícil, qual é a história política do projeto,
          o que está nas entrelinhas. Você sim.
        </p>
      </div>
    </div>

    <div class="glass p-4 mt-4" style="border-color: rgba(99,211,161,0.35); font-size: 0.82rem; line-height: 1.7; text-align: center;">
      A vantagem competitiva não vai para quem usa IA.<br>
      Vai para quem sabe <strong style="color: var(--rf-primary);">onde usá-la</strong> e
      <strong style="color: var(--rf-highlight);">onde não usá-la</strong>.
    </div>
  </SlideSection>
</template>
