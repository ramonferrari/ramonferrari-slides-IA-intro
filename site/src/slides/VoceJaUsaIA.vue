<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>Você já usa IA todo dia</h1>

    <div class="grid grid-cols-2 gap-6 mt-2">
      <div class="glass" style="padding: 1.6rem;">
        <div style="width: 52px; height: 52px; border-radius: 14px; background: var(--rf-surface-secondary); border: 1px solid var(--rf-border-secondary); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          <svg viewBox="0 0 32 32" style="width: 30px; height: 30px;">
            <rect x="3" y="12" width="26" height="14" rx="3" fill="none" stroke="var(--rf-primary)" stroke-width="1.6" />
            <path d="M7 17 h2 M12 17 h2 M17 17 h2 M22 17 h3 M9 21.5 h14" stroke="var(--rf-primary)" stroke-width="1.6" stroke-linecap="round" />
            <path d="M16 12 V8 a3 3 0 0 1 3 -3" fill="none" stroke="var(--rf-primary)" stroke-width="1.6" stroke-linecap="round" />
          </svg>
        </div>
        <div style="font-weight: 700; font-size: 1.15rem; color: var(--rf-text-primary); margin-bottom: 0.3rem;">Corretor do teclado</div>
        <div style="font-size: 0.95rem;">prevê a próxima palavra enquanto você digita</div>
        <div style="margin-top: 1.1rem; background: var(--rf-surface-secondary); border: 1px solid var(--rf-border-secondary); border-radius: 10px; padding: 0.5rem 0.9rem; display: flex; gap: 1.2rem; justify-content: center; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem;">
          <span style="color: var(--rf-text-muted);">atrasada</span>
          <span style="color: var(--rf-highlight); font-weight: 700; border-bottom: 2px solid var(--rf-highlight);">atrasado</span>
          <span style="color: var(--rf-text-muted);">às</span>
        </div>
        <div style="margin-top: 0.5rem; text-align: center; font-size: 0.8rem; color: var(--rf-text-muted); font-style: italic;">"vou chegar <b style="color: var(--rf-highlight);">atrasado</b>…"</div>
      </div>
      <div class="glass" style="padding: 1.6rem;">
        <div style="width: 52px; height: 52px; border-radius: 14px; background: var(--rf-surface-secondary); border: 1px solid var(--rf-border-secondary); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          <svg viewBox="0 0 32 32" style="width: 30px; height: 30px;">
            <rect x="12" y="4" width="8" height="15" rx="4" fill="none" stroke="var(--rf-primary)" stroke-width="1.6" />
            <path d="M8 15 a8 8 0 0 0 16 0 M16 23 v5 M12 28 h8" fill="none" stroke="var(--rf-primary)" stroke-width="1.6" stroke-linecap="round" />
            <path d="M5 12 q-2 3 0 6 M27 12 q2 3 0 6" fill="none" stroke="var(--rf-primary)" stroke-width="1.4" stroke-linecap="round" opacity="0.55" />
          </svg>
        </div>
        <div style="font-weight: 700; font-size: 1.15rem; color: var(--rf-text-primary); margin-bottom: 0.3rem;">Assistente de voz</div>
        <div style="font-size: 0.95rem;">Alexa, Siri: entende o que você fala e responde</div>
        <div style="margin-top: 1.1rem; display: flex; align-items: center; justify-content: center; gap: 6px; height: 52px;">
          <span v-for="(h, i) in [14, 26, 38, 22, 32, 16, 28, 12]" :key="i" :style="`display:inline-block; width: 5px; height: ${h}px; border-radius: 3px; background: color-mix(in srgb, var(--rf-primary) ${45 + (i % 3) * 20}%, transparent);`" />
        </div>
      </div>
    </div>

    <p style="text-align: center; font-style: italic; color: var(--rf-primary); margin-top: 1.6rem; font-size: 1.05rem;">IA invisível. Já virou rotina. Você nem percebe.</p>
  </SlideSection>
</template>
