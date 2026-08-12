<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>E agora??</h1>

    <div class="rf-center text-center" style="min-height: 40vh; position: relative;">
      <div style="position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(99,211,161,0.14) 0%, transparent 65%); filter: blur(40px); pointer-events: none;" />
      <p style="font-family: 'TeX Gyre Pagella', 'Palatino', Georgia, serif; font-style: italic; font-size: clamp(1.6rem, 3.5vw, 3.25rem); line-height: 1.35; max-width: 30ch; margin: 0 auto; color: var(--rf-text-primary); position: relative;">
        A pergunta não é mais<br>se a IA vai mudar seu trabalho.<br><br>
        <span>É se você vai <span style="color: var(--rf-primary);">guiar a inovação</span> <span style="color: var(--rf-text-muted);"><br>(que já está ao seu alcance)</span> <br>ou vê-la passar.</span>
      </p>
    </div>
  </SlideSection>
</template>
