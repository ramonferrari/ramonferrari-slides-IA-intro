<template>
  <div class="tokens-root rf-reveal-2">
    <div class="tokens-surface">
      <span class="corner corner-tl" /><span class="corner corner-tr" />
      <span class="corner corner-bl" /><span class="corner corner-br" />

      <div class="tok-label">
        <span class="label-line" />
        <span class="label-text">TOKENIZAÇÃO</span>
        <span class="label-line" />
      </div>

      <!-- Example 1 -->
      <div class="example">
        <div class="phrase">"aprendizado de máquina"</div>
        <div class="block-row">
          <div
            v-for="(t, i) in mainTokens"
            :key="i"
            class="tok-block"
            :class="`tone-${i % 3}`"
            :style="{ animationDelay: `${0.5 + i * 0.35}s` }"
          >{{ t }}</div>
        </div>
        <!-- bracket ruler -->
        <div class="ruler" :style="{ animationDelay: `${0.5 + mainTokens.length * 0.35 + 0.2}s` }">
          <svg viewBox="0 0 400 22" preserveAspectRatio="none" class="bracket-svg">
            <path d="M4 2 L4 14 Q4 18 8 18 L192 18 L200 22 L208 18 L392 18 Q396 18 396 14 L396 2"
              fill="none" stroke="var(--rf-primary)" stroke-width="1.5" opacity="0.7" />
          </svg>
          <div class="ruler-text">{{ mainTokens.length }} TOKENS</div>
        </div>
      </div>

      <!-- Example 2 -->
      <div class="example small" :style="{ animationDelay: `${0.5 + mainTokens.length * 0.35 + 0.9}s` }">
        <div class="phrase small-phrase">até nome próprio quebra:</div>
        <div class="block-row">
          <div class="tok-block small-block tone-0">Petro</div>
          <div class="tok-block small-block tone-1">bras</div>
          <div class="mini-note">→ 2 tokens</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const mainTokens = ['apren', 'dizado', ' de', ' máq', 'uina']
</script>

<style scoped>
.tokens-root {
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  font-family: "Space Grotesk", sans-serif;
}

.tokens-surface {
  position: relative;
  background: var(--rf-surface-primary);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 20px;
  box-shadow:
    0 0 0 1px var(--rf-border-primary),
    0 0 40px var(--rf-glow),
    inset 0 1px 0 var(--rf-border-primary);
  backdrop-filter: blur(20px);
  padding: 1.2rem 2rem 1.6rem;
  overflow: hidden;
}
.tokens-surface::before {
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

.tok-label {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  justify-content: center;
  margin-bottom: 1.2rem;
}
.label-text {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.62rem;
  letter-spacing: 0.25em;
  color: var(--rf-primary);
  font-weight: 600;
  text-transform: uppercase;
  opacity: 0.8;
}
.label-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--rf-border-secondary));
}
.label-line:last-child {
  background: linear-gradient(90deg, var(--rf-border-secondary), transparent);
}

/* ── Examples ── */
.example {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
}
.example.small {
  margin-top: 1.4rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--rf-border-primary);
  opacity: 0;
  animation: fadeUp 0.8s var(--rf-ease) forwards;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
}

.phrase {
  font-size: 1.05rem;
  color: var(--rf-text-secondary);
  font-style: italic;
}
.small-phrase { font-size: 0.85rem; color: var(--rf-text-muted); }

.block-row {
  display: flex;
  align-items: center;
  gap: 4px;
}

.tok-block {
  font-family: "JetBrains Mono", monospace;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--rf-text-primary);
  padding: 0.55rem 0.8rem;
  border-radius: 10px;
  border: 1px solid var(--rf-border-secondary);
  white-space: pre;
  opacity: 0;
  animation: popIn 0.5s var(--rf-ease) forwards;
}
.tone-0 { background: rgba(99,211,161,0.10); }
.tone-1 { background: rgba(99,211,161,0.20); }
.tone-2 { background: rgba(99,211,161,0.30); }

.small-block {
  font-size: 0.95rem;
  padding: 0.3rem 0.55rem;
  animation: none;
  opacity: 1;
}

.mini-note {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.7rem;
  color: var(--rf-primary);
  margin-left: 0.5rem;
  letter-spacing: 0.08em;
}

/* ── Ruler ── */
.ruler {
  width: 100%;
  max-width: 420px;
  opacity: 0;
  animation: fadeUp 0.7s var(--rf-ease) forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
}
.bracket-svg { width: 100%; height: 20px; transform: scaleY(-1); }
.ruler-text {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  color: var(--rf-primary);
}

/* ── Motion ── */
@keyframes popIn {
  from { opacity: 0; transform: translateY(16px) scale(0.9); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); filter: blur(5px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}
.rf-reveal-2 { opacity: 0; animation: fadeUp 0.9s var(--rf-ease) 0.2s forwards; }
</style>
