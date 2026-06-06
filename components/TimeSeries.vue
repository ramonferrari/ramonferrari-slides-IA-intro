<template>
  <div class="slide-root">

    <!-- ══ COL 1 ══ -->
    <div class="features-col r1">

      <div class="mini-doc">
        <div class="mini-doc-title">RELATÓRIO</div>
        <div class="mini-doc-line" /><div class="mini-doc-line s" />
        <div class="mini-doc-line" /><div class="mini-doc-line xs" />
        <div class="mini-doc-line" /><div class="mini-doc-line s" />
        <div class="mini-doc-line" />
        <div class="mini-doc-status">Alerta ativo</div>
      </div>

      <div>
        <div class="features-divider" />
        <div class="features-title"><br>Série monitorada</div>
      </div>

      <div class="feat-list r2">
        <div class="feat-item">
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Valor pago/mês</span>
            <span class="feat-sub">série principal</span>
          </div>
        </div>
        <div class="feat-item">
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Sazonalidade</span>
            <span class="feat-sub">padrão histórico</span>
          </div>
        </div>
        <div class="feat-item">
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
              <line x1="2" y1="20" x2="22" y2="20"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Desvio padrão</span>
            <span class="feat-sub">±1σ histórico</span>
          </div>
        </div>
        <div class="feat-item">
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Score anomalia</span>
            <span class="feat-sub">saída do modelo</span>
          </div>
        </div>
      </div>

    </div>

    <!-- ══ COL 2: Chart ══ -->
    <div class="chart-col r2">
      <div class="chart-wrap">
        <svg width="100%" viewBox="0 0 490 432" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="ts-area-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stop-color="color-mix(in srgb, var(--rf-primary) 28%, transparent)"/>
              <stop offset="100%" stop-color="color-mix(in srgb, var(--rf-primary) 02%, transparent)"/>
            </linearGradient>
            <linearGradient id="ts-spike-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stop-color="rgba(255,87,88,0.20)"/>
              <stop offset="100%" stop-color="rgba(255,87,88,0.04)"/>
            </linearGradient>
            <filter id="ts-dot-glow">
              <feGaussianBlur stdDeviation="1.5" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="ts-spike-glow">
              <feGaussianBlur stdDeviation="6" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <!-- title -->
          <text x="246" y="15" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="3" font-weight="700"
            fill="var(--rf-primary)" letter-spacing=".18em">
            PAGAMENTOS MENSAIS
          </text>

          <!-- grid h -->
          <line x1="52" y1="390" x2="440" y2="390" stroke="rgba(255,255,255,0.12)" stroke-width=".8"/>
          <line x1="52" y1="298" x2="440" y2="298" stroke="rgba(255,255,255,0.06)" stroke-width=".6"/>
          <line x1="52" y1="205" x2="440" y2="205" stroke="rgba(255,255,255,0.06)" stroke-width=".6"/>
          <line x1="52" y1="112" x2="440" y2="112" stroke="rgba(255,255,255,0.06)" stroke-width=".6"/>
          <line x1="52" y1="20"  x2="440" y2="20"  stroke="rgba(255,255,255,0.04)" stroke-width=".6"/>
          <!-- grid v -->
          <line x1="52"  y1="20" x2="52"  y2="390" stroke="rgba(255,255,255,0.12)" stroke-width=".8"/>
          <line x1="208" y1="20" x2="208" y2="390" stroke="rgba(255,255,255,0.04)" stroke-width=".6"/>
          <line x1="364" y1="20" x2="364" y2="390" stroke="rgba(255,255,255,0.07)" stroke-width=".7"/>
          <line x1="440" y1="20" x2="440" y2="390" stroke="rgba(255,255,255,0.04)" stroke-width=".6"/>

          <!-- Y labels -->
          <text x="46" y="394" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">0</text>
          <text x="46" y="302" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">25</text>
          <text x="46" y="209" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">50</text>
          <text x="46" y="116" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">75</text>
          <text x="46" y="24"  text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">100</text>

          <!-- X labels (quarterly) -->
          <text x="52"  y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">Jan'23</text>
          <text x="208" y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">Jul'23</text>
          <text x="364" y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">Jan'24</text>
          <text x="440" y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">Abr'24</text>

          <!-- axis labels -->
          <text x="246" y="421" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="3" font-weight="700"
            fill="var(--rf-primary)" letter-spacing=".08em">MESES</text>
          <text x="14" y="205" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="3" font-weight="700"
            fill="var(--rf-primary)" letter-spacing=".06em"
            transform="rotate(-90,14,205)">R$ MIL / MÊS</text>

          <!-- ── Normal band ── -->
          <rect class="ts-band" x="52" y="224" width="388" height="74"
            fill="color-mix(in srgb, var(--rf-primary) 07%, transparent)"/>
          <line class="ts-band" x1="52" y1="224" x2="440" y2="224"
            stroke="color-mix(in srgb, var(--rf-primary) 32%, transparent)" stroke-width=".7" stroke-dasharray="4,3"/>
          <line class="ts-band" x1="52" y1="298" x2="440" y2="298"
            stroke="color-mix(in srgb, var(--rf-primary) 32%, transparent)" stroke-width=".7" stroke-dasharray="4,3"/>
          <text class="ts-band" x="60" y="257"
            font-family="JetBrains Mono,monospace" font-size="2.4"
            fill="var(--rf-primary)">intervalo esperado  ±1σ</text>

          <!-- ── Area fill under line ── -->
          <polyline class="ts-area"
            points="52,272 78,261 104,279 130,249 156,268 182,257 208,275 234,242 260,264 286,253 312,282 338,246 364,261 390,68 416,234 440,249 440,390 52,390"
            fill="url(#ts-area-grad)" stroke="none"/>

          <!-- ── Anomaly zone vertical highlight ── -->
          <rect class="anomaly-zone" x="373" y="20" width="40" height="370"
            fill="rgba(255,87,88,0.07)"/>

          <!-- ── Main line (draw-on animation) ── -->
          <polyline class="ts-line"
            points="52,272 78,261 104,279 130,249 156,268 182,257 208,275 234,242 260,264 286,253 312,282 338,246 364,261 390,68 416,234 440,249"
            fill="none" stroke="var(--rf-primary)" stroke-width="1.8"
            stroke-linecap="round" stroke-linejoin="round"/>

          <!-- ── Regular data dots ── -->
          <g class="ts-dots" filter="url(#ts-dot-glow)">
            <circle cx="52"  cy="272" r="2.5" fill="color-mix(in srgb, var(--rf-primary) 85%, transparent)"/>
            <circle cx="78"  cy="261" r="2.5" fill="color-mix(in srgb, var(--rf-primary) 85%, transparent)"/>
            <circle cx="104" cy="279" r="2.5" fill="color-mix(in srgb, var(--rf-primary) 85%, transparent)"/>
            <circle cx="130" cy="249" r="2.5" fill="color-mix(in srgb, var(--rf-primary) 85%, transparent)"/>
            <circle cx="156" cy="268" r="2.5" fill="color-mix(in srgb, var(--rf-primary) 85%, transparent)"/>
            <circle cx="182" cy="257" r="2.5" fill="color-mix(in srgb, var(--rf-primary) 85%, transparent)"/>
            <circle cx="208" cy="275" r="2.5" fill="color-mix(in srgb, var(--rf-primary) 85%, transparent)"/>
            <circle cx="234" cy="242" r="2.5" fill="color-mix(in srgb, var(--rf-primary) 85%, transparent)"/>
            <circle cx="260" cy="264" r="2.5" fill="color-mix(in srgb, var(--rf-primary) 85%, transparent)"/>
            <circle cx="286" cy="253" r="2.5" fill="color-mix(in srgb, var(--rf-primary) 85%, transparent)"/>
            <circle cx="312" cy="282" r="2.5" fill="color-mix(in srgb, var(--rf-primary) 85%, transparent)"/>
            <circle cx="338" cy="246" r="2.5" fill="color-mix(in srgb, var(--rf-primary) 85%, transparent)"/>
            <circle cx="364" cy="261" r="2.5" fill="color-mix(in srgb, var(--rf-primary) 85%, transparent)"/>
            <circle cx="416" cy="234" r="2.5" fill="color-mix(in srgb, var(--rf-primary) 85%, transparent)"/>
            <circle cx="440" cy="249" r="2.5" fill="color-mix(in srgb, var(--rf-primary) 85%, transparent)"/>
          </g>

          <!-- ── Vertical dashed marker at anomaly (draw from bottom) ── -->
          <line class="ts-vmarker"
            x1="390" y1="390" x2="390" y2="68"
            stroke="rgba(255,87,88,0.55)" stroke-width=".9"
            stroke-dasharray="4,3" stroke-linecap="round"/>

          <!-- ── Anomaly spike dot (pulsing) ── -->
          <g class="ts-anomaly-dot" filter="url(#ts-spike-glow)">
            <circle cx="390" cy="68" r="14" fill="rgba(255,87,88,0.15)"/>
            <circle cx="390" cy="68" r="7"  fill="rgba(255,87,88,0.92)"/>
          </g>

          <!-- ── Annotation callout ── -->
          <g class="ts-annotation">
            <rect x="270" y="24" width="150" height="30" rx="3"
              fill="color-mix(in srgb, rgba(255,87,88,1) 12%, transparent)" stroke="rgba(255,87,88,0.55)" stroke-width=".6"/>
            <text x="345" y="38" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="3.0" font-weight="700"
              fill="rgba(255,87,88,0.95)" letter-spacing=".02em">FEV 2024 — ANOMALIA</text>
            <text x="345" y="49" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.8"
              fill="var(--rf-highlight)">R$ 87k  (+149%)</text>
            <line x1="390" y1="54" x2="390" y2="61"
              stroke="rgba(255,87,88,0.55)" stroke-width=".7" stroke-linecap="round"/>
          </g>

          <!-- anomaly X label (red, shown with annotation) -->
          <text class="ts-annotation" x="390" y="415" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="3" font-weight="700"
            fill="rgba(255,87,88,0.85)">Fev'24</text>

        </svg>
      </div>
    </div>

    <!-- ══ COL 3: Result ══ -->
    <div class="result-col">

      <div class="r3">
        <div class="result-label">Anomalia detectada:</div>
      </div>

      <div class="result-date-box r4" style="animation-delay:3.0s">
        <div class="result-date">FEV 2024</div>
        <div class="result-delta">+149%</div>
        <div class="result-delta-sub">vs. média histórica</div>
      </div>

      <div class="r4" style="animation-delay:3.2s">
        <div class="result-label">Valor esperado:</div>
      </div>

      <div class="result-value-box r4" style="animation-delay:3.3s">
        <div class="result-number">R$ 35</div>
        <div class="result-unit">mil/mês</div>
      </div>

      <div class="r4" style="animation-delay:3.4s">
        <div class="result-label" style="color:#FF5758;">Valor detectado:</div>
      </div>

      <div class="result-value-box result-value-box-warn r4" style="animation-delay:3.5s">
        <div class="result-number result-number-warn">R$ 87</div>
        <div class="result-unit">mil/mês</div>
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
  width: 100%; height: auto;
  display: grid;
  grid-template-columns: 220px 1fr 200px;
  align-items: stretch;
  font-family: "Space Grotesk", sans-serif;
  margin-top: 2.5rem;
}

/* ─── COL 1 ─────────────────────────────────────────── */
.features-col {
  position: relative; z-index: 1;
  display: flex; flex-direction: column;
  padding: 0.5rem 1rem 0.5rem 1.2rem;
  gap: 0.55rem;
  border-right: 1px solid var(--rf-border-primary);
}
.mini-doc {
  position: relative;
  background: var(--rf-surface-secondary);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 6px;
  padding: 0.5rem 0.6rem;
  align-self: flex-start; width: 80%;
}
.mini-doc::after {
  content: ""; position: absolute; right: -2px; bottom: -2px;
  width: 24px; height: 24px;
  background:
    linear-gradient(45deg,  transparent 40%, color-mix(in srgb, var(--rf-primary) 15%, transparent) 40%),
    linear-gradient(-45deg, transparent 40%, color-mix(in srgb, var(--rf-primary) 10%, transparent) 40%);
  border-radius: 0 0 6px 0;
}
.mini-doc-title {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.44rem; font-weight: 700; letter-spacing: 0.1em;
  color: var(--rf-text-secondary); text-align: center;
  margin-bottom: 0.25rem; padding-bottom: 0.2rem;
  border-bottom: 1px solid var(--rf-border-primary);
}
.mini-doc-line { height: 1.5px; background: var(--rf-border-primary); border-radius: 1px; margin-bottom: 2px; }
.mini-doc-line.s  { width: 70%; }
.mini-doc-line.xs { width: 50%; }
.mini-doc-status {
  font-size: 0.42rem; font-style: italic; font-weight: 600;
  color: #FF5758; margin-top: 0.2rem;
}
.features-divider { height: 2px; width: 36px; background: var(--rf-primary); border-radius: 2px; margin-bottom: 0.15rem; }
.features-title { font-size: 1.15rem; font-weight: 800; letter-spacing: -0.03em; color: var(--rf-text-primary); line-height: 1.15; }
.feat-list { display: flex; flex-direction: column; gap: 0.4rem; }
.feat-item { display: flex; align-items: center; gap: 0.55rem; }
.feat-icon {
  width: 30px; height: 30px; flex-shrink: 0;
  border-radius: 8px;
  background: color-mix(in srgb, var(--ic, var(--rf-primary)) 9%, transparent);
  border: 1px solid color-mix(in srgb, var(--ic, var(--rf-primary)) 24%, transparent);
  display: flex; align-items: center; justify-content: center;
}
.feat-icon svg { width: 15px; height: 15px; }
.feat-text { display: flex; flex-direction: column; gap: 1px; }
.feat-label { font-size: 0.74rem; font-weight: 700; color: var(--rf-text-secondary); }
.feat-sub { font-size: 0.52rem; color: var(--rf-text-muted); font-family: "JetBrains Mono", monospace; }

/* ─── COL 2 ─────────────────────────────────────────── */
.chart-col {
  position: relative; z-index: 1;
  display: flex; flex-direction: column;
  height: 340px; padding: 0.3rem 0.6rem;
  border-right: 1px solid var(--rf-border-primary);
}
.chart-wrap { flex: 1; position: relative; min-height: 0; display: flex; align-items: flex-start; }
.chart-wrap svg { width: 100%; height: auto; max-height: 320px; display: block; }

/* ─── COL 3 ─────────────────────────────────────────── */
.result-col {
  position: relative; z-index: 1;
  display: flex; flex-direction: column;
  padding: 0.5rem 0.8rem; gap: 0.5rem;
}
.result-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.52rem; font-weight: 700; letter-spacing: 0.12em;
  color: var(--rf-primary); text-transform: uppercase;
}
.result-date-box {
  display: flex; flex-direction: column; align-self: flex-start;
  border: 1.5px solid #FF5758; border-radius: 10px;
  padding: 0.45rem 0.65rem;
  background: color-mix(in srgb, #FF5758 6%, transparent);
  gap: 0.08rem;
}
.result-date {
  font-size: 1.35rem; font-weight: 800; letter-spacing: -0.03em;
  color: #FF5758; line-height: 1;
}
.result-delta {
  font-size: 1.6rem; font-weight: 800; letter-spacing: -0.04em;
  color: var(--rf-highlight); line-height: 1;
}
.result-delta-sub {
  font-size: 0.50rem; font-weight: 600; color: var(--rf-text-muted);
  font-family: "JetBrains Mono", monospace; letter-spacing: 0.03em;
}
.result-value-box {
  align-self: flex-start;
  border: 1.5px solid var(--rf-primary);
  border-radius: 10px; padding: 0.45rem 0.65rem;
  background: color-mix(in srgb, var(--rf-primary) 5%, transparent);
}
.result-value-box-warn {
  border-color: #FF5758;
  background: color-mix(in srgb, #FF5758 5%, transparent);
}
.result-number {
  font-size: 2.2rem; font-weight: 800; letter-spacing: -0.04em;
  color: var(--rf-primary); line-height: 1;
}
.result-number-warn { color: #FF5758; }
.result-unit { font-size: 0.7rem; font-weight: 700; color: var(--rf-text-secondary); letter-spacing: -0.01em; }

/* ─── SVG chart animations ───────────────────────────── */

/* Normal band: appears first */
.ts-band { opacity: 0; animation: fadeIn .6s ease 0.4s forwards; }

@keyframes fadeIn { to { opacity: 1; } }

/* Area fill under line */
.ts-area { opacity: 0; animation: fadeIn 1.2s ease 0.8s forwards; }

/* Main line draw-on (total path ≈ 802px, use 820) */
.ts-line {
  stroke-dasharray: 820;
  stroke-dashoffset: 820;
  animation: draw-ts 2.0s cubic-bezier(.22,1,.36,1) 0.6s forwards;
}
@keyframes draw-ts { to { stroke-dashoffset: 0; } }

/* Regular dots appear mid-draw */
.ts-dots { opacity: 0; animation: fadeUp .5s ease 1.8s forwards; }

/* Anomaly zone highlight */
.anomaly-zone { opacity: 0; animation: fadeIn .5s ease 2.8s forwards; }

/* Vertical marker draws from bottom (y=390) to anomaly top (y=68), length=322 */
.ts-vmarker {
  stroke-dasharray: 325;
  stroke-dashoffset: 325;
  animation: draw-vline .7s ease 2.9s forwards;
}
@keyframes draw-vline { to { stroke-dashoffset: 0; } }

/* Anomaly dot: appear then pulse */
@keyframes ts-spike-pulse {
  0%,100% { filter: drop-shadow(0 0 5px rgba(255,87,88,.65)); }
  50%      { filter: drop-shadow(0 0 18px rgba(255,87,88,1.0)); }
}
.ts-anomaly-dot {
  opacity: 0;
  animation:
    fadeUp .4s ease 3.1s forwards,
    ts-spike-pulse 2s ease-in-out 3.6s infinite;
}

/* Annotation callout */
.ts-annotation { opacity: 0; animation: fadeUp .5s ease 3.3s forwards; }

/* ─── Reveal animations ───────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(14px); filter: blur(3px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}
.r1 { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.10s forwards; }
.r2 { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.25s forwards; }
.r3 { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.40s forwards; }
.r4 { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 2.40s forwards; }
</style>
