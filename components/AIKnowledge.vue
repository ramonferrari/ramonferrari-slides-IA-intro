<template>
  <div class="slide-root">

    <!-- ══ LEFT: O que a IA sabe ══ -->
    <div class="half half-left r1">

      <div class="viz-area r2">
        <div class="cloud-glow" />
        <div class="cloud-wrap">

          <!-- Floating cards -->
          <div class="cloud-card" style="top:2%;left:36%;--dur:5.2s;--delay:0s;--dx:5px;--dy:-7px;">
            <strong>Wikipedia</strong>Enciclopédia<br/>colaborativa global
          </div>
          <div class="cloud-card" style="top:12%;left:8%;--dur:6s;--delay:.8s;--dx:-4px;--dy:6px;">
            <strong>Notícia</strong>Mercado global<br/>cresce 5% em 2024
          </div>
          <div class="cloud-card" style="top:22%;left:50%;--dur:5.5s;--delay:.3s;--dx:6px;--dy:-5px;">
            <strong>Livro</strong>Gestão estratégica<br/>e inovação
          </div>
          <div class="cloud-card" style="top:34%;left:10%;--dur:4.8s;--delay:1.1s;--dx:-5px;--dy:7px;">
            <strong>Paper</strong>Redes neurais<br/>e aprendizado
          </div>
          <div class="cloud-card" style="top:46%;left:44%;--dur:5.8s;--delay:.5s;--dx:4px;--dy:-6px;">
            <strong>Relatório</strong>Panorama econômico<br/>2024
          </div>
          <div class="cloud-card" style="top:56%;left:8%;--dur:5.3s;--delay:.9s;--dx:-4px;--dy:5px;">
            <strong>Fórum</strong>Stack Overflow,<br/>Reddit, HN
          </div>
          <div class="cloud-card" style="top:64%;left:40%;--dur:4.9s;--delay:.4s;--dx:5px;--dy:-5px;">
            <strong>Legislação</strong>Leis e normas<br/>públicas
          </div>
          <div class="cloud-card" style="top:70%;left:10%;--dur:5.6s;--delay:.2s;--dx:-5px;--dy:6px;">
            <strong>Código</strong>Repositórios<br/>open source
          </div>

          <!-- Label — centered in word cloud -->
          <div class="cloud-label">
            <span></span><br/>Conhecimento<br>Público
          </div>
        </div>
      </div>
    </div>

    <!-- ══ DIVIDER ══ -->
    <div class="divider" />

    <!-- ══ RIGHT: O que a IA não sabe ══ -->
    <div class="half r1" style="animation-delay:.15s">

      <div class="viz-area r3" style="animation-delay:.2s">
        <div class="lock-glow" />
        <div class="cloud-wrap">

          <!-- Floating doc cards -->
          <div class="lock-card" style="top:2%;left:48%;--dur:5.2s;--delay:0s;--dx:5px;--dy:-7px;">
            <strong>Confidencial</strong>Contrato<br/>comercial
          </div>
          <div class="lock-card" style="top:16%;left:12%;--dur:6s;--delay:.8s;--dx:-4px;--dy:6px;">
            <strong>Restrito</strong>Acordo de<br/>fornecimento
          </div>
          <div class="lock-card" style="top:36%;left:58%;--dur:5.5s;--delay:.3s;--dx:6px;--dy:-5px;">
            <strong>Interno</strong>Proposta<br/>comercial
          </div>
          <div class="lock-card" style="top:50%;left:14%;--dur:4.8s;--delay:1.1s;--dx:-5px;--dy:7px;">
            <strong>Privado</strong>Documentos<br/>corporativos
          </div>
          <div class="lock-card" style="top:62%;left:52%;--dur:5.8s;--delay:.5s;--dx:4px;--dy:-6px;">
            <strong>Sigiloso</strong>Estratégia<br/>de preços
          </div>

          <!-- Lock emojis — varying sizes and opacities -->
          <span class="lock" style="top:4%;left:26%;--fs:2.0rem;--op:.88;--dur:5.2s;--delay:0s;--dx:5px;--dy:-7px;">🔒</span>
          <span class="lock" style="top:10%;left:74%;--fs:0.9rem;--op:.48;--dur:4.8s;--delay:.6s;--dx:-4px;--dy:6px;">🔒</span>
          <span class="lock" style="top:20%;left:40%;--fs:0.6rem;--op:.30;--dur:5.5s;--delay:.2s;--dx:6px;--dy:-5px;">🔒</span>
          <span class="lock" style="top:7%;left:60%;--fs:0.8rem;--op:.40;--dur:6s;--delay:1s;--dx:-5px;--dy:7px;">🔒</span>
          <span class="lock" style="top:24%;left:82%;--fs:1.6rem;--op:.75;--dur:4.5s;--delay:.3s;--dx:4px;--dy:-6px;">🔒</span>
          <span class="lock" style="top:30%;left:50%;--fs:0.5rem;--op:.25;--dur:5.8s;--delay:.9s;--dx:-6px;--dy:5px;">🔒</span>
          <span class="lock" style="top:42%;left:28%;--fs:1.2rem;--op:.60;--dur:5s;--delay:.5s;--dx:5px;--dy:-4px;">🔒</span>
          <span class="lock" style="top:46%;left:72%;--fs:0.7rem;--op:.35;--dur:4.6s;--delay:.7s;--dx:-4px;--dy:6px;">🔒</span>
          <span class="lock" style="top:56%;left:36%;--fs:0.9rem;--op:.45;--dur:5.3s;--delay:1.2s;--dx:4px;--dy:-5px;">🔒</span>
          <span class="lock" style="top:60%;left:78%;--fs:1.4rem;--op:.80;--dur:5.6s;--delay:.8s;--dx:6px;--dy:-7px;">🔒</span>
          <span class="lock" style="top:66%;left:22%;--fs:2.2rem;--op:.90;--dur:5.1s;--delay:1.4s;--dx:-5px;--dy:4px;">🔒</span>
          <span class="lock" style="top:70%;left:64%;--fs:0.6rem;--op:.28;--dur:4.7s;--delay:.1s;--dx:4px;--dy:-6px;">🔒</span>
          <span class="lock" style="top:18%;left:16%;--fs:1.4rem;--op:.68;--dur:4.3s;--delay:.6s;--dx:5px;--dy:-5px;">🔒</span>

          <!-- Label — centered at 30% like cloud-label -->
          <div class="lock-label">
            Dados<br>Privados
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
// Standalone — inherits all --rf-* tokens
</script>

<style scoped>
/* ─── Root ─────────────────────────────────────────── */
.slide-root {
  position: relative;
  width: 100%; height: 100%;
  display: grid;
  grid-template-columns: 1fr 8px 1fr;
  font-family: "Space Grotesk", sans-serif;
  overflow: hidden;
}

/* ─── Halves ────────────────────────────────────────── */
.half {
  position: relative; z-index: 1;
  display: flex; flex-direction: column;
  align-items: center;
  padding: 0.7rem 1.4rem 0.6rem;
  gap: 0.5rem;
  grid-row: 1 / -1;
}
.half-left { border-right: none; }

/* ─── Header ────────────────────────────────────────── */
.col-header {
  display: flex; align-items: center; gap: 0.65rem;
  width: 100%;
  padding-bottom: 0.45rem;
  border-bottom: 1px solid var(--rf-border-primary);
  flex-shrink: 0;
}
.col-icon {
  width: 36px; height: 36px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.col-icon svg { width: 19px; height: 19px; }
.col-icon-p {
  background: color-mix(in srgb, var(--rf-primary)   10%, transparent);
  border: 1px solid color-mix(in srgb, var(--rf-primary)   28%, transparent);
}
.col-icon-h {
  background: color-mix(in srgb, var(--rf-highlight) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--rf-highlight) 28%, transparent);
}
.col-title { font-size: 1.05rem; font-weight: 800; letter-spacing: -.02em; line-height: 1; }
.col-title-p { color: var(--rf-primary); }
.col-title-h { color: var(--rf-highlight); }
.col-title-line { height: 2px; width: 100%; margin-top: 3px; border-radius: 2px; }
.col-title-line-p { background: linear-gradient(90deg, var(--rf-primary),   transparent); }
.col-title-line-h { background: linear-gradient(90deg, var(--rf-highlight), transparent); }

/* ─── Viz area ──────────────────────────────────────── */
.viz-area {
  flex: 1; width: 100%;
  display: flex; align-items: center; justify-content: center;
  min-height: 0; position: relative;
}

/* ─── Word cloud (left) ─────────────────────────────── */
.cloud-wrap {
  position: relative;
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
}
.cloud-glow {
  position: absolute; inset: 0;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--rf-primary) 14%, transparent) 0%, transparent 68%);
  pointer-events: none;
}

@keyframes fw {
  from { transform: translate(0, 0); }
  to   { transform: translate(var(--dx, 3px), var(--dy, -5px)); }
}

.cloud-card {
  position: absolute;
  background: var(--rf-surface-primary);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 6px;
  padding: 4px 8px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.28rem; line-height: 1.5;
  color: var(--rf-text-muted);
  animation: fw var(--dur, 5s) ease-in-out var(--delay, 0s) infinite alternate;
}
.cloud-card strong {
  color: var(--rf-primary);
  font-size: 0.30rem; display: block;
  text-transform: uppercase; letter-spacing: 0.06em;
}

.cloud-label {
  position: absolute;
  top: 30%; left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.3rem; font-weight: 800; letter-spacing: 0.06em;
  color: var(--rf-text-primary);
  text-transform: uppercase; text-align: center; line-height: 1.2;
  white-space: nowrap;
  text-shadow: 0 0 20px color-mix(in srgb, var(--rf-primary) 30%, transparent);
  pointer-events: none;
}
.cloud-label span { color: var(--rf-primary); }

/* ─── Lock cloud (right) ────────────────────────────── */
.lock-glow {
  position: absolute; inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(255, 87, 88, 0.16) 0%, transparent 68%);
  pointer-events: none;
}

.lock {
  position: absolute;
  font-size: var(--fs, 1rem);
  opacity: var(--op, 0.6);
  filter: drop-shadow(0 0 6px rgba(255, 87, 88, 0.45));
  animation: fw var(--dur, 4s) ease-in-out var(--delay, 0s) infinite alternate;
  line-height: 1;
  user-select: none;
}

.lock-card {
  position: absolute;
  background: rgba(255, 87, 88, 0.06);
  border: 1px solid rgba(255, 87, 88, 0.28);
  border-radius: 6px;
  padding: 4px 8px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.28rem; line-height: 1.5;
  color: rgba(255, 255, 255, 0.55);
  animation: fw var(--dur, 5s) ease-in-out var(--delay, 0s) infinite alternate;
}
.lock-card strong {
  color: #FF5758;
  font-size: 0.30rem; display: block;
  text-transform: uppercase; letter-spacing: 0.06em;
}

.lock-label {
  position: absolute;
  top: 30%; left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.3rem; font-weight: 800; letter-spacing: 0.06em;
  color: #FF5758;
  text-transform: uppercase; text-align: center; line-height: 1.2;
  white-space: nowrap;
  text-shadow: 0 0 24px rgba(255, 87, 88, 0.50);
  pointer-events: none;
  z-index: 2;
}

/* ─── Divider ───────────────────────────────────────── */
.divider {
  position: relative; z-index: 1;
  display: flex; align-items: center; justify-content: center;
  grid-row: 1 / -1;
}
.divider::before {
  content: ""; position: absolute; top: 8%; bottom: 8%; left: 3px; width: 1px;
  background: linear-gradient(180deg, transparent, var(--rf-border-secondary) 30%, var(--rf-border-secondary) 70%, transparent);
}
.divider::after {
  content: ""; position: absolute; top: 8%; bottom: 8%; left: 3px; width: 1px;
  background: linear-gradient(
    180deg,
    transparent,
    color-mix(in srgb, var(--rf-primary)   50%, transparent) 30%,
    color-mix(in srgb, var(--rf-highlight) 50%, transparent) 70%,
    transparent
  );
  filter: blur(2px);
  animation: dp 3s ease-in-out infinite;
}
@keyframes dp { 0%,100%{ opacity:.35; } 50%{ opacity:.85; } }

/* ─── Reveal animations ─────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); filter: blur(4px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}
.r1 { opacity: 0; animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) 0.10s forwards; }
.r2 { opacity: 0; animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) 0.25s forwards; }
.r3 { opacity: 0; animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) 0.40s forwards; }
</style>