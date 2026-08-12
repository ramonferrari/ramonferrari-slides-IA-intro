<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>As perguntas que sempre aparecem</h1>

    <div class="grid grid-cols-2 gap-4 mt-2">
      <div class="faq-card glass">
        <div class="faq-q">"A IA vai me substituir?"</div>
        <div class="faq-a">Ela muda funções e elimina tarefa repetitiva. A vantagem fica com <b>quem usa bem</b> — não com quem ignora.</div>
      </div>
      <div class="faq-card glass">
        <div class="faq-q">"Posso confiar cegamente?"</div>
        <div class="faq-a"><b>Nunca.</b> É um rascunho inicial muito bom. A palavra final é sua — sempre.</div>
      </div>
      <div class="faq-card glass">
        <div class="faq-q">"Ela lembra do que falei semana passada?"</div>
        <div class="faq-a">Por padrão, não — <b>mesa limpa</b> a cada conversa. Algumas ferramentas têm memória ativável.</div>
      </div>
      <div class="faq-card glass">
        <div class="faq-q">"Ela acessa meu computador, minha câmera?"</div>
        <div class="faq-a">Não. Ela só vê <b>o que você digita ou anexa</b> na conversa.</div>
      </div>
      <div class="faq-card glass">
        <div class="faq-q">"Ela aprende com o que eu digito?"</div>
        <div class="faq-a">Depende do plano. Ferramenta pública gratuita, <b>pode usar</b> pra treino; ambiente corporativo costuma ter garantias contratuais contra isso.</div>
      </div>
      <div class="faq-card glass">
        <div class="faq-q">"Preciso saber programar?"</div>
        <div class="faq-a"><b>Não.</b> Você conversa em português. A habilidade é de comunicação, não de código.</div>
      </div>
    </div>
  </SlideSection>
</template>

<style scoped>
.faq-card { padding: 0.9rem 1.2rem; }
.faq-q {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--rf-primary);
  margin-bottom: 0.35rem;
}
.faq-a { font-size: 0.85rem; color: var(--rf-text-secondary); line-height: 1.5; }
.faq-a b { color: var(--rf-text-primary); }
</style>
