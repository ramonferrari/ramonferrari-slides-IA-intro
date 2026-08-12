<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <div class="section-divider">
      <span class="section-divider-num">04</span>
      <h2 class="section-divider-title">Engenharia de Prompt: a habilidade que fica</h2>
    </div>
  </SlideSection>
</template>

<style scoped>
.section-divider {
  min-height: 46vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
}

.section-divider-num {
  font-family: "JetBrains Mono", monospace;
  font-size: clamp(1rem, 2.4vw, 1.3rem);
  letter-spacing: 0.4em;
  color: var(--rf-highlight);
}

.section-divider-title {
  font-family: "TeX Gyre Pagella", "Palatino Linotype", "Palatino", Georgia, serif;
  font-weight: 700;
  font-size: clamp(1.8rem, 5vw, 3.2rem);
  line-height: 1.15;
  max-width: 22ch;
  color: var(--rf-text-primary);
  margin: 0;
}
</style>
