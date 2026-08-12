<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>Quem sou eu?</h1>

    <div class="flex flex-col md:flex-row items-center gap-10 mt-4" style="justify-content: center;">
      <CircularImage src="/rf.JPG" size="220px" borderColor="var(--rf-highlight)" />

      <ul style="max-width: 520px; font-size: 1.1rem; line-height: 1.6; list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.7rem;">
        <li>Baiano, 15 anos no RJ, 2 anos em Vitória.</li>
        <li>Atuação por ~15 anos em processamento de dados sísmicos</li>
        <li>Coordenador e Cientista de Dados na Petrobras</li>
        <li>
          Doutorando em Adm. de Empresas (FGV EAESP)
          <ul style="margin-top: 0.35rem; padding-left: 1.2rem; font-size: 0.95rem; color: var(--rf-text-muted);">
            <li>Qualidade de informação em sistemas de LLM</li>
          </ul>
        </li>
      </ul>
    </div>
  </SlideSection>
</template>
