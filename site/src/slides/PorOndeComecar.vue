<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()

const conversation = [
  {
    user: 'Qual a diferença prática entre usar Claude Pro e Claude Haiku para análise de contratos?',
    response:
      'Para triagem inicial — extrair partes, datas, valores — Haiku é suficiente e 10x mais rápido. Para identificar ambiguidades, cláusulas incomuns ou risco interpretativo, use Pro: ele sustenta raciocínio mais longo e erra menos em nuances jurídicas. Regra prática: Haiku para estruturar, Pro para julgar.',
  },
]
</script>

<template>
  <SlideSection :id="id">
    <h1>Por onde começar: esta semana</h1>

    <div class="grid grid-cols-2 gap-5 mt-5">
      <div class="flex flex-col gap-3">
        <div class="glass p-4" style="border-left: 3px solid var(--rf-primary); font-size: 0.8rem; line-height: 1.6;">
          <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">1. Escolha uma tarefa repetitiva</span>
          Algo que você faz toda semana com texto: resumo, e-mail padrão, ata, relatório.
          Tente delegar para a IA com um prompt estruturado.
        </div>

        <div class="glass p-4" style="border-left: 3px solid var(--rf-primary); font-size: 0.8rem; line-height: 1.6;">
          <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">2. Use o modelo certo</span>
          Para explorar e rascunhar: Flash/Haiku (rápido, barato).
          Para revisar e decidir: Pro/Opus/Sonnet (mais cuidadoso).
        </div>

        <div class="glass p-4" style="border-left: 3px solid var(--rf-primary); font-size: 0.8rem; line-height: 1.6;">
          <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">3. Sempre revise a saída</span>
          Leia o que a IA produziu com a mesma atenção que você leria o trabalho de um estagiário talentoso mas novato. Ele pode ter inventado alguma coisa.
        </div>

        <div class="glass p-4" style="border-left: 3px solid var(--rf-highlight); font-size: 0.8rem; line-height: 1.6;">
          <span style="color: var(--rf-highlight); font-weight: 700; display: block; margin-bottom: 0.3rem;">4. Itere o prompt</span>
          Se a resposta decepcionou, não culpe o modelo — revise a instrução.
          Adicione papel, formato ou restrição. Tente de novo.
        </div>
      </div>

      <div class="flex flex-col justify-center">
        <Terminal
          modelName="Claude Sonnet 4.5"
          fontSize="0.72rem"
          :streamSpeed="20"
          :loop="false"
          :conversation="conversation"
        />
      </div>
    </div>
  </SlideSection>
</template>
