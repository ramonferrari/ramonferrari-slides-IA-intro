<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>Como a IA Generativa funciona</h1>

    <div class="grid grid-cols-2 gap-4 mt-5">
      <div class="flex flex-col gap-3">
        <div class="glass p-4" style="border-left: 3px solid var(--rf-primary);">
          <span class="rf-eyebrow" style="display:block; margin-bottom: 0.4rem;">1. Treinamento</span>
          <p style="font-size: 0.82rem; line-height: 1.6; margin: 0; color: var(--rf-text-secondary);">
            O modelo lê uma fração enorme da internet: livros, artigos, código, conversas.
            Aprende <strong>padrões de linguagem</strong>: o que palavra vem depois de qual, em qual contexto.
          </p>
        </div>
        <div class="glass p-4" style="border-left: 3px solid var(--rf-primary);">
          <span class="rf-eyebrow" style="display:block; margin-bottom: 0.4rem;">2. Compressão</span>
          <p style="font-size: 0.82rem; line-height: 1.6; margin: 0; color: var(--rf-text-secondary);">
            Esses padrões viram <strong>bilhões</strong> de parâmetros. São números que codificam relações
            entre conceitos. O modelo não "memoriza" textos; ele aprende <strong>estrutura</strong>.
          </p>
        </div>
        <div class="glass p-4" style="border-left: 3px solid var(--rf-primary);">
          <span class="rf-eyebrow" style="display:block; margin-bottom: 0.4rem;">3. Geração</span>
          <p style="font-size: 0.82rem; line-height: 1.6; margin: 0; color: var(--rf-text-secondary);">
            Quando você escreve algo, o modelo calcula a sequência de tokens mais
            <strong>provável e coerente</strong> como a próxima palavra.
          </p>
        </div>
      </div>
      <div class="glass p-5 flex flex-col justify-center" style="border-color: rgba(226,248,27,0.25);">
        <div>
          <span class="rf-eyebrow" style="display:block; margin-bottom: 0.8rem;">a metáfora certa</span>
          <p style="font-size: 0.88rem; line-height: 1.75; margin: 0; color: var(--rf-text-secondary);">
            Não é uma <strong style="color: var(--rf-text-primary);">enciclopédia</strong> que você consulta.<br>
            Não é um <strong style="color: var(--rf-text-primary);">mecanismo de busca</strong>.<br><br>
            É um <strong style="color: var(--rf-highlight);">gerador de texto muito sofisticado</strong>
            que aprendeu como humanos escrevem sobre qualquer assunto (e por isso parece que sabe tudo).
          </p>
        </div>
      </div>
    </div>
  </SlideSection>
</template>
