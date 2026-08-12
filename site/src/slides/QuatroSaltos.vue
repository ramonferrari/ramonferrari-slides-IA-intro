<script setup lang="ts">
import { ref, computed } from 'vue'
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()

const saltos = [
  { label: 'TAREFA', text: 'escreve um e-mail sobre a parada de manutenção' },
  { label: '+ PAPEL', text: 'você é o coordenador de manutenção' },
  { label: '+ CONTEXTO', text: 'parada de 3 dias · afeta a equipe da área X · motivo: troca da bomba Y' },
  { label: '+ FORMATO', text: 'no máximo 5 linhas, em tópicos, sem jargão técnico' },
]

const respostas = [
  {
    model: 'IA · estágio 1',
    html: '"Prezados, informamos que haverá uma parada de manutenção em data a definir. Contamos com a compreensão de todos. Atenciosamente."',
    note: 'genérico. serve? mais ou menos.',
    final: false,
  },
  {
    model: 'IA · estágio 2',
    html: '"Equipe, aqui é da coordenação de manutenção. Teremos uma parada programada em breve; em seguida envio o detalhamento das frentes e horários."',
    note: 'o tom mudou. ainda vago.',
    final: false,
  },
  {
    model: 'IA · estágio 3',
    html: '"Equipe da área X: entre os dias 12 e 14 teremos parada de 3 dias para a troca da bomba Y. As atividades da área ficam suspensas no período; retomada prevista para o dia 15, turno da manhã."',
    note: 'específico. deixou de ser genérico.',
    final: false,
  },
  {
    model: 'IA · estágio 4',
    html: '<b>Parada de manutenção · área X</b><br>• Quando: dias 12–14 (3 dias)<br>• Motivo: troca da bomba Y<br>• Impacto: atividades da área suspensas<br>• Retomada: dia 15, manhã<br>• Dúvidas: coordenação de manutenção',
    note: 'pronto pra mandar.',
    final: true,
  },
]

const stage = ref(0)

const tagActive = (n: number) => stage.value >= n
</script>

<template>
  <SlideSection :id="id">
    <h1>Do "criança" ao usável: 4 saltos</h1>

    <div class="grid grid-cols-2 gap-6 mt-1">
      <div class="flex flex-col gap-2">
        <button
          v-for="(s, i) in saltos"
          :key="s.label"
          type="button"
          class="salto"
          :class="{ 'salto-new': stage === i, 'salto-dim': i > stage }"
          @click="stage = i"
        >
          <span class="salto-label">{{ s.label }}</span>
          <span>{{ s.text }}</span>
        </button>
      </div>

      <div class="resp" :class="{ 'resp-final': respostas[stage].final }">
        <div class="resp-model">{{ respostas[stage].model }}</div>
        <div v-html="respostas[stage].html" />
        <div class="resp-note" :class="{ ok: respostas[stage].final }">{{ respostas[stage].note }}</div>
      </div>
    </div>

    <div class="flex justify-center gap-2 mt-4">
      <button type="button" class="step-btn" :disabled="stage === 0" @click="stage = Math.max(0, stage - 1)">← anterior</button>
      <button type="button" class="step-btn" :disabled="stage === 3" @click="stage = Math.min(3, stage + 1)">próximo salto →</button>
    </div>

    <div class="flex justify-center gap-2 mt-4" style="flex-wrap: wrap;">
      <span class="tag" :class="{ 'tag-on': true }">Tarefa</span>
      <span class="tag" :class="{ 'tag-on': tagActive(1) }">Papel</span>
      <span class="tag" :class="{ 'tag-on': tagActive(2) }">Contexto</span>
      <span class="tag" :class="{ 'tag-on': tagActive(3) }">Formato</span>
    </div>
  </SlideSection>
</template>

<style scoped>
.salto {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: var(--rf-surface-primary);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 12px;
  padding: 0.65rem 0.9rem;
  font-size: 0.88rem;
  color: var(--rf-text-secondary);
  backdrop-filter: blur(12px);
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  transition: border-color 0.3s var(--rf-ease), opacity 0.3s var(--rf-ease);
}
.salto-dim {
  opacity: 0.45;
}
.salto-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--rf-primary);
  flex: 0 0 84px;
}
.salto-new {
  border-color: var(--rf-primary);
  box-shadow: 0 0 22px rgba(99, 211, 161, 0.22);
}
.resp {
  background: var(--rf-surface-primary);
  border: 1px solid var(--rf-border-primary);
  border-radius: 16px;
  padding: 1rem 1.2rem;
  font-size: 0.88rem;
  color: var(--rf-text-secondary);
  line-height: 1.55;
  backdrop-filter: blur(12px);
  align-self: start;
}
.resp-final {
  border-color: color-mix(in srgb, var(--rf-primary) 50%, transparent);
  box-shadow: 0 0 26px rgba(99, 211, 161, 0.12);
}
.resp-model {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--rf-text-muted);
  margin-bottom: 0.5rem;
}
.resp-note {
  margin-top: 0.6rem;
  font-size: 0.75rem;
  font-style: italic;
  color: var(--rf-text-muted);
}
.resp-note.ok {
  color: var(--rf-primary);
}
.step-btn {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  background: var(--rf-surface-secondary);
  border: 1px solid var(--rf-border-secondary);
  color: var(--rf-text-primary);
  border-radius: 999px;
  padding: 0.5rem 1.1rem;
  cursor: pointer;
}
.step-btn:disabled {
  opacity: 0.35;
  cursor: default;
}
.tag-on {
  color: var(--rf-primary);
  border-color: color-mix(in srgb, var(--rf-primary) 55%, transparent);
}
</style>
