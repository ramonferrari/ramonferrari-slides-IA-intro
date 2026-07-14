<template>
  <div class="ntb-root rf-reveal-2">
    <div class="ntb-surface">
      <span class="corner corner-tl" /><span class="corner corner-tr" />
      <span class="corner corner-bl" /><span class="corner corner-br" />

      <!-- prompt line -->
      <div class="prompt-line">
        <div class="prompt-dot" />
        <div class="prompt-text">
          A capital do Brasil é
          <span class="chosen-token">Brasília</span>
          <span class="caret">▋</span>
        </div>
      </div>

      <!-- loop hint -->
      <div class="loop-hint">
        <svg viewBox="0 0 20 20" class="loop-icon">
          <path d="M10 3 A7 7 0 1 1 3.5 7.5" fill="none" stroke="var(--rf-primary)" stroke-width="1.8" stroke-linecap="round" />
          <path d="M2.5 3.5 L3.5 8 L8 6.5" fill="none" stroke="var(--rf-primary)" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" />
        </svg>
        <span>escolhe → adiciona → repete</span>
      </div>

      <!-- probability bars -->
      <div class="bars">
        <div v-for="(b, i) in bars" :key="b.token" class="bar-row" :style="{ animationDelay: `${0.4 + i * 0.18}s` }">
          <span class="bar-token" :class="{ winner: i === 0 }">{{ b.token }}</span>
          <div class="bar-track">
            <div
              class="bar-fill"
              :class="{ winner: i === 0 }"
              :style="{ width: `${probs[i]}%` }"
            />
          </div>
          <span class="bar-pct" :class="{ winner: i === 0 }">{{ probs[i] < 1 ? '<1' : probs[i] }}%</span>
        </div>
      </div>

      <!-- temperature toggle -->
      <div class="temp-row">
        <span class="temp-label">TEMPERATURA</span>
        <button class="temp-chip" :class="{ active: !hot }" @click="hot = false">
          ❄ baixa · previsível
        </button>
        <button class="temp-chip hot" :class="{ active: hot }" @click="hot = true">
          🔥 alta · criativa
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const hot = ref(false)

const bars = [
  { token: 'Brasília', cold: 92, hot: 55 },
  { token: 'uma',      cold: 3,  hot: 20 },
  { token: 'Rio',      cold: 2,  hot: 15 },
  { token: 'outros…',  cold: 0.9, hot: 10 },
]

const probs = computed(() => bars.map(b => (hot.value ? b.hot : b.cold)))
</script>

<style scoped>
.ntb-root {
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  font-family: "Space Grotesk", sans-serif;
}

.ntb-surface {
  position: relative;
  background: var(--rf-surface-primary);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 20px;
  box-shadow:
    0 0 0 1px var(--rf-border-primary),
    0 0 40px var(--rf-glow),
    inset 0 1px 0 var(--rf-border-primary);
  backdrop-filter: blur(20px);
  padding: 1.3rem 1.8rem 1.2rem;
  overflow: hidden;
}
.ntb-surface::before {
  content: "";
  position: absolute;
  left: 0; right: 0; top: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--rf-primary), transparent);
  animation: scan 3.2s ease-in-out infinite;
  opacity: 0.5;
}
@keyframes scan {
  0%   { top: 0%;   opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

.corner {
  position: absolute;
  width: 14px; height: 14px;
  border-color: var(--rf-highlight);
  border-style: solid;
  opacity: 0.7;
  z-index: 2;
}
.corner-tl { top: -1px;    left: -1px;  border-width: 2px 0 0 2px; border-radius: 4px 0 0 0; }
.corner-tr { top: -1px;    right: -1px; border-width: 2px 2px 0 0; border-radius: 0 4px 0 0; }
.corner-bl { bottom: -1px; left: -1px;  border-width: 0 0 2px 2px; border-radius: 0 0 0 4px; }
.corner-br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; border-radius: 0 0 4px 0; }

/* ── Prompt line ── */
.prompt-line {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: var(--rf-surface-secondary);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 12px;
  padding: 0.7rem 1rem;
}
.prompt-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--rf-primary);
  box-shadow: 0 0 8px var(--rf-primary);
  flex-shrink: 0;
}
.prompt-text {
  font-family: "JetBrains Mono", monospace;
  font-size: 1.05rem;
  color: var(--rf-text-primary);
}
.chosen-token {
  display: inline-block;
  color: var(--rf-bg);
  background: var(--rf-primary);
  border-radius: 6px;
  padding: 0 8px;
  font-weight: 700;
  margin-left: 2px;
  opacity: 0;
  animation: tokenLand 0.7s var(--rf-ease) 1.6s forwards;
}
@keyframes tokenLand {
  0%   { opacity: 0; transform: translateY(26px) scale(0.85); }
  60%  { opacity: 1; transform: translateY(-4px) scale(1.04); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
.caret {
  color: var(--rf-primary);
  animation: caretBlink 1s steps(1) infinite;
  margin-left: 3px;
}
@keyframes caretBlink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

/* ── Loop hint ── */
.loop-hint {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.4rem;
  margin: 0.45rem 0.2rem 0.7rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  color: var(--rf-text-muted);
  text-transform: uppercase;
}
.loop-icon { width: 14px; height: 14px; animation: spin 4s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

/* ── Bars ── */
.bars {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}
.bar-row {
  display: grid;
  grid-template-columns: 110px 1fr 52px;
  align-items: center;
  gap: 0.8rem;
  opacity: 0;
  animation: fadeUp 0.6s var(--rf-ease) forwards;
}
.bar-token {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85rem;
  color: var(--rf-text-secondary);
  text-align: right;
}
.bar-token.winner { color: var(--rf-text-primary); font-weight: 700; }

.bar-track {
  height: 22px;
  background: var(--rf-surface-secondary);
  border: 1px solid var(--rf-border-primary);
  border-radius: 6px;
  overflow: hidden;
}
.bar-fill {
  height: 100%;
  background: color-mix(in srgb, var(--rf-primary) 55%, transparent);
  border-radius: 5px;
  transition: width 0.8s var(--rf-ease);
}
.bar-fill.winner {
  background: var(--rf-primary);
  box-shadow: inset 0 0 0 1.5px var(--rf-highlight), 0 0 14px color-mix(in srgb, var(--rf-primary) 40%, transparent);
}

.bar-pct {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8rem;
  color: var(--rf-text-muted);
}
.bar-pct.winner { color: var(--rf-primary); font-weight: 700; }

/* ── Temperature toggle ── */
.temp-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1.1rem;
  padding-top: 0.9rem;
  border-top: 1px dashed var(--rf-border-primary);
}
.temp-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  color: var(--rf-text-muted);
}
.temp-chip {
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.78rem;
  color: var(--rf-text-muted);
  background: var(--rf-surface-primary);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 999px;
  padding: 5px 14px;
  cursor: pointer;
  transition: all 0.3s var(--rf-ease);
}
.temp-chip.active {
  color: var(--rf-primary);
  border-color: color-mix(in srgb, var(--rf-primary) 55%, transparent);
  box-shadow: 0 0 14px color-mix(in srgb, var(--rf-primary) 15%, transparent);
}
.temp-chip.hot.active {
  color: var(--rf-highlight);
  border-color: color-mix(in srgb, var(--rf-highlight) 45%, transparent);
  box-shadow: 0 0 14px color-mix(in srgb, var(--rf-highlight) 12%, transparent);
}

/* ── Motion ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); filter: blur(5px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}
.rf-reveal-2 { opacity: 0; animation: fadeUp 0.9s var(--rf-ease) 0.2s forwards; }
</style>
