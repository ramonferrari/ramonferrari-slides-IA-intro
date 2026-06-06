<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const models = ref([
  {
    id: 'claude',
    name: 'Claude',
    org: 'Anthropic',
    value: 94.2,
    color: '#F97316',
    gradient: 'linear-gradient(90deg, #c2410c, #F97316)',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    org: 'OpenAI',
    value: 91.5,
    color: '#10a37f',
    gradient: 'linear-gradient(90deg, #059669, #34d399)',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    org: 'Google',
    value: 88.8,
    color: '#818cf8',
    gradient: 'linear-gradient(90deg, #4285F4, #818cf8)',
  },
])

const sorted = computed(() =>
  [...models.value].sort((a, b) => b.value - a.value)
)

let timer = null

function nudge(v) {
  const delta = (Math.random() - 0.48) * 6
  return Math.round(Math.min(98, Math.max(78, v + delta)) * 10) / 10
}

onMounted(() => {
  timer = setInterval(() => {
    models.value = models.value.map(m => ({ ...m, value: nudge(m.value) }))
  }, 1400)
})

onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div style="padding: 0.5rem 2rem;">

    <div style="display:flex; align-items:center; justify-content:center; gap:0.6rem; margin-bottom:2rem;">
      <span class="live-dot" />
      <span style="font-size:0.65rem; text-transform:uppercase; letter-spacing:0.14em; opacity:1.0; font-family:'Space Grotesk',sans-serif; color: var(--rf-text-primary);">
        Score médio — benchmarks públicos — em tempo real
      </span>
    </div>

    <TransitionGroup name="race" tag="div" class="bars">
      <div v-for="m in sorted" :key="m.id" class="bar-row">

        <div class="bar-label">
          <div :style="`font-size:0.9rem; font-weight:700; color:${m.color}; font-family:'Space Grotesk',sans-serif;`">
            {{ m.name }}
          </div>
          <div style="font-size:0.6rem; opacity:1.0; font-family:'Space Grotesk',sans-serif; letter-spacing:0.06em; text-transform:uppercase; color: var(--rf-text-primary);">
            {{ m.org }}
          </div>
        </div>

        <div class="bar-track">
          <div
            class="bar-fill"
            :style="`width:${m.value}%; background:${m.gradient};`"
          />
        </div>

        <div style="width:48px; flex-shrink:0; font-size:0.82rem; font-weight:700; font-family:'JetBrains Mono',monospace; color: var(--rf-text-primary); text-align:right;">
          {{ m.value.toFixed(1) }}
        </div>

      </div>
    </TransitionGroup>

    <div style="text-align:center; margin-top:2rem; font-size:0.65rem; opacity:1.0; font-family:'Space Grotesk',sans-serif; letter-spacing:0.06em; color: var(--rf-text-primary);">
      Nenhum modelo mantém a liderança por muito tempo.
    </div>

  </div>
</template>

<style scoped>
.bars {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.bar-row {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.bar-label {
  width: 130px;
  flex-shrink: 0;
  text-align: right;
}

.bar-track {
  flex: 1;
  height: 40px;
  background: rgba(255,255,255,0.04);
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.08);
  overflow: hidden;
  position: relative;
}

.bar-fill {
  position: absolute;
  inset: 0;
  right: auto;
  border-radius: 10px;
  opacity: 0.75;
  transition: width 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}

.race-move {
  transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}

.live-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--rf-highlight);
  display: inline-block;
  animation: pulse 1.3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.25; transform: scale(0.7); }
}
</style>
