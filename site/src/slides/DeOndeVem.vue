<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>De onde vem o que ela sabe</h1>

    <div class="fonte-grid mt-2">
      <div class="glass" style="padding: 1.3rem 1.5rem;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; letter-spacing: 0.2em; color: var(--rf-text-muted); margin-bottom: 0.9rem;">A DIETA DE TREINAMENTO</div>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.55rem; font-size: 0.95rem;">
          <li style="display: flex; align-items: center; gap: 0.7rem;"><span class="src-dot" />livros e enciclopédias</li>
          <li style="display: flex; align-items: center; gap: 0.7rem;"><span class="src-dot" />sites e artigos da internet</li>
          <li style="display: flex; align-items: center; gap: 0.7rem;"><span class="src-dot" />artigos científicos e notícias</li>
          <li style="display: flex; align-items: center; gap: 0.7rem;"><span class="src-dot" />código de programação</li>
          <li style="display: flex; align-items: center; gap: 0.7rem;"><span class="src-dot" />fóruns e discussões <span style="font-size: 0.75rem; color: var(--rf-text-muted);">(com filtros)</span></li>
        </ul>
        <div style="margin-top: 1rem; padding-top: 0.8rem; border-top: 1px solid var(--rf-border-primary); font-size: 0.82rem; color: var(--rf-text-muted); font-style: italic;">resultado: sabe um pouco de <span style="color: var(--rf-primary);">quase tudo</span>, com profundidade que varia</div>
      </div>
      <div class="glass" style="padding: 1.3rem 1.5rem; border-color: color-mix(in srgb, var(--rf-highlight) 35%, transparent);">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; letter-spacing: 0.2em; color: var(--rf-highlight); margin-bottom: 1rem;">DATA DE CORTE</div>
        <div style="display: flex; align-items: center; gap: 0; margin-bottom: 0.5rem;">
          <div style="flex: 1.6; height: 14px; border-radius: 7px 0 0 7px; background: linear-gradient(90deg, color-mix(in srgb, var(--rf-primary) 25%, transparent), var(--rf-primary));" />
          <div style="flex-shrink: 0; width: 14px; height: 14px; background: var(--rf-highlight); border-radius: 3px; transform: rotate(45deg); margin: 0 4px; box-shadow: 0 0 12px color-mix(in srgb, var(--rf-highlight) 60%, transparent);" />
          <div style="flex: 1; height: 14px; border-radius: 0 7px 7px 0; border: 1.5px dashed var(--rf-border-secondary); background: transparent;" />
        </div>
        <div style="display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 0.62rem; color: var(--rf-text-muted); margin-bottom: 1.1rem;">
          <span style="color: var(--rf-primary);">tudo que ela leu no treino</span>
          <span style="color: var(--rf-highlight);">corte</span>
          <span>daqui pra frente: <b style="color: var(--rf-text-primary);">não sabe</b></span>
        </div>
        <div style="font-size: 0.95rem; line-height: 1.6;">O treinamento parou num dia. Depois desse dia, ela <b style="color: var(--rf-text-primary);">simplesmente não sabe</b> o que aconteceu. A não ser que alguém conte na conversa.</div>
        <div style="display: flex; gap: 0.6rem; margin-top: 1rem; flex-wrap: wrap;">
          <span class="tag">busca na web: só quando ativada</span>
          <span class="tag">seus documentos internos: nunca leu</span>
        </div>
      </div>
    </div>
  </SlideSection>
</template>

<style scoped>
.src-dot {
  flex-shrink: 0;
  width: 9px;
  height: 9px;
  background: var(--rf-primary);
  border-radius: 2px;
  opacity: 0.85;
}

.fonte-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 1.5rem;
}

@media (max-width: 780px) {
  .fonte-grid {
    grid-template-columns: 1fr;
  }
}
</style>
