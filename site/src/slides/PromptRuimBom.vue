<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()

const conversationRuim = [
  {
    user: 'Me fala sobre esse contrato',
    response:
      'Claro! Para analisar o contrato, preciso que você me envie o documento. Em geral, contratos costumam conter partes, objeto, prazo, valor, penalidades e cláusulas de rescisão. Posso ajudar com qualquer dúvida específica que você tiver.',
  },
]

const conversationBom = [
  {
    user:
      'Você é um analista de risco. Liste em bullet as 3 maiores exposições financeiras deste contrato. Use só o documento. Se não encontrar, escreva N/E.',
    response:
      '• Multa por rescisão antecipada: 20% do valor total remanescente (cláusula 8.4)\n• Reajuste unilateral do fornecedor: até 15% a.a. sem necessidade de aditivo (cláusula 5.2)\n• Ausência de limitação de responsabilidade civil: N/E',
  },
]
</script>

<template>
  <SlideSection :id="id">
    <h1>Prompt ruim × prompt bom</h1>

    <div class="grid grid-cols-2 gap-5 mt-5">
      <div class="flex flex-col gap-3">
        <div class="rf-eyebrow" style="color: #EC635E;">❌ Prompt sem estrutura</div>

        <div class="glass p-3" style="border-color: rgba(236,99,94,0.4); font-size: 0.75rem; line-height: 1.5; color: var(--rf-text-muted);">
          Sem papel, sem tarefa específica, sem contexto, sem formato. A IA não sabe o que você quer. Vai dar um chute razoável.
        </div>

        <Terminal modelName="ChatGPT" fontSize="0.72rem" :streamSpeed="16" :conversation="conversationRuim" />
      </div>
      <div class="flex flex-col gap-3">
        <div class="rf-eyebrow" style="color: var(--rf-primary);">✓ Prompt estruturado</div>

        <div class="glass p-3" style="border-color: rgba(99,211,161,0.4); font-size: 0.75rem; line-height: 1.5; color: var(--rf-text-muted);">
          Mesmo modelo, mesmo documento. A diferença está inteiramente no prompt, não na IA.
        </div>

        <Terminal modelName="Claude Sonnet 4.5" fontSize="0.72rem" :streamSpeed="16" :conversation="conversationBom" />
      </div>
    </div>
  </SlideSection>
</template>
