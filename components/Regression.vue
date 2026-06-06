<template>
  <div class="slide-root">

    <!-- ══ COL 1: Features ══ -->
    <div class="features-col r1">

      <div class="mini-doc">
        <div class="mini-doc-title">CONTRATO</div>
        <div class="mini-doc-line" /><div class="mini-doc-line s" />
        <div class="mini-doc-line" /><div class="mini-doc-line xs" />
        <div class="mini-doc-line" /><div class="mini-doc-line s" />
        <div class="mini-doc-line" />
        <div class="mini-doc-sig">Assinado</div>
      </div>

      <div>
        <div class="features-divider" />
        <div class="features-title"><br> Histórico contratos</div>
      </div>

      <div class="feat-list r2">
        <div class="feat-item">
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Metragem</span>
            <span class="feat-sub">m² do contrato</span>
          </div>
        </div>
        <div class="feat-item">
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Frequência</span>
            <span class="feat-sub">mensal/semanal</span>
          </div>
        </div>
        <div class="feat-item">
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Cidade</span>
            <span class="feat-sub">localização</span>
          </div>
        </div>
        <div class="feat-item">
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v2m0 8v2M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-1 2.2-2.5 3s-2.5 1.5-2.5 3a2.5 2.5 0 0 0 5 0"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Valor pago</span>
            <span class="feat-sub">R$ do contrato</span>
          </div>
        </div>
      </div>

    </div>

    <!-- ══ COL 2: Chart ══ -->
    <div class="chart-col r2">
      <div class="chart-wrap">
        <svg width="100%" viewBox="0 0 490 432" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id="rg-dot-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stop-color="var(--rf-primary)"/>
              <stop offset="100%" stop-color="color-mix(in srgb, var(--rf-primary) 0%, transparent)"/>
            </radialGradient>
            <radialGradient id="rg-out-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stop-color="var(--rf-highlight)"/>
              <stop offset="100%" stop-color="color-mix(in srgb, var(--rf-highlight) 0%, transparent)"/>
            </radialGradient>
            <filter id="rg-glow-dot">
              <feGaussianBlur stdDeviation="2.5" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="rg-glow-out">
              <feGaussianBlur stdDeviation="4" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <!-- ── CHART TITLE inside chart top area ── -->
          <text x="246" y="15"
            text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="3" font-weight="700"
            fill="var(--rf-primary)" letter-spacing=".18em">
            CONTRATOS ANTERIORES
          </text>

          <!-- Grid lines horizontal -->
          <line x1="52" y1="390" x2="440" y2="390" stroke="rgba(255,255,255,0.12)" stroke-width=".8"/>
          <line x1="52" y1="316" x2="440" y2="316" stroke="rgba(255,255,255,0.06)" stroke-width=".6"/>
          <line x1="52" y1="242" x2="440" y2="242" stroke="rgba(255,255,255,0.06)" stroke-width=".6"/>
          <line x1="52" y1="168" x2="440" y2="168" stroke="rgba(255,255,255,0.06)" stroke-width=".6"/>
          <line x1="52" y1="94"  x2="440" y2="94"  stroke="rgba(255,255,255,0.06)" stroke-width=".6"/>
          <line x1="52" y1="20"  x2="440" y2="20"  stroke="rgba(255,255,255,0.04)" stroke-width=".6"/>

          <!-- Grid lines vertical -->
          <line x1="52"  y1="20" x2="52"  y2="390" stroke="rgba(255,255,255,0.12)" stroke-width=".8"/>
          <line x1="128" y1="20" x2="128" y2="390" stroke="rgba(255,255,255,0.04)" stroke-width=".6"/>
          <line x1="204" y1="20" x2="204" y2="390" stroke="rgba(255,255,255,0.04)" stroke-width=".6"/>
          <line x1="280" y1="20" x2="280" y2="390" stroke="rgba(255,255,255,0.04)" stroke-width=".6"/>
          <line x1="356" y1="20" x2="356" y2="390" stroke="rgba(255,255,255,0.04)" stroke-width=".6"/>

          <!-- Y axis labels -->
          <text x="46" y="394" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">0</text>
          <text x="46" y="320" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">20</text>
          <text x="46" y="246" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">40</text>
          <text x="46" y="172" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">60</text>
          <text x="46" y="98"  text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">80</text>
          <text x="46" y="24"  text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">100</text>

          <!-- X axis labels -->
          <text x="52"  y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">0</text>
          <text x="128" y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">500</text>
          <text x="204" y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">1.000</text>
          <text x="280" y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">1.500</text>
          <text x="356" y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">2.000</text>
          <text x="432" y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">2.500</text>

          <!-- Axis labels -->
          <text x="246" y="420" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="3" font-weight="700"
            fill="var(--rf-primary)" letter-spacing=".08em">METRAGEM (m²)</text>
          <text x="14" y="205" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="3" font-weight="700"
            fill="var(--rf-primary)" letter-spacing=".06em"
            transform="rotate(-90,14,205)">VALOR PAGO (R$ MIL/MÊS)</text>

          <!-- Data points -->
          <g filter="url(#rg-glow-dot)">
            <circle cx="70"  cy="331" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 80%, transparent)"/>
            <circle cx="84"  cy="363" r="3"   fill="color-mix(in srgb, var(--rf-primary) 75%, transparent)"/>
            <circle cx="95"  cy="329" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 80%, transparent)"/>
            <circle cx="108" cy="355" r="3"   fill="color-mix(in srgb, var(--rf-primary) 70%, transparent)"/>
            <circle cx="118" cy="297" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 78%, transparent)"/>
            <circle cx="130" cy="322" r="3"   fill="color-mix(in srgb, var(--rf-primary) 72%, transparent)"/>
            <circle cx="142" cy="277" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 80%, transparent)"/>
            <circle cx="155" cy="314" r="3"   fill="color-mix(in srgb, var(--rf-primary) 68%, transparent)"/>
            <circle cx="165" cy="288" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 76%, transparent)"/>
            <circle cx="178" cy="312" r="3"   fill="color-mix(in srgb, var(--rf-primary) 72%, transparent)"/>
            <circle cx="190" cy="260" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 80%, transparent)"/>
            <circle cx="200" cy="277" r="3"   fill="color-mix(in srgb, var(--rf-primary) 70%, transparent)"/>
            <circle cx="212" cy="238" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 78%, transparent)"/>
            <circle cx="218" cy="280" r="3"   fill="color-mix(in srgb, var(--rf-primary) 65%, transparent)"/>
            <circle cx="228" cy="244" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 74%, transparent)"/>
            <circle cx="238" cy="272" r="3"   fill="color-mix(in srgb, var(--rf-primary) 72%, transparent)"/>
            <circle cx="248" cy="214" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 80%, transparent)"/>
            <circle cx="255" cy="247" r="3"   fill="color-mix(in srgb, var(--rf-primary) 68%, transparent)"/>
            <circle cx="265" cy="212" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 76%, transparent)"/>
            <circle cx="272" cy="258" r="3"   fill="color-mix(in srgb, var(--rf-primary) 70%, transparent)"/>
            <circle cx="282" cy="216" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 80%, transparent)"/>
            <circle cx="292" cy="234" r="3"   fill="color-mix(in srgb, var(--rf-primary) 68%, transparent)"/>
            <circle cx="300" cy="189" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 74%, transparent)"/>
            <circle cx="310" cy="213" r="3"   fill="color-mix(in srgb, var(--rf-primary) 70%, transparent)"/>
            <circle cx="318" cy="185" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 78%, transparent)"/>
            <circle cx="328" cy="221" r="3"   fill="color-mix(in srgb, var(--rf-primary) 65%, transparent)"/>
            <circle cx="335" cy="187" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 76%, transparent)"/>
            <circle cx="344" cy="208" r="3"   fill="color-mix(in srgb, var(--rf-primary) 72%, transparent)"/>
            <circle cx="352" cy="155" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 80%, transparent)"/>
            <circle cx="360" cy="188" r="3"   fill="color-mix(in srgb, var(--rf-primary) 68%, transparent)"/>
            <circle cx="370" cy="157" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 76%, transparent)"/>
            <circle cx="378" cy="193" r="3"   fill="color-mix(in srgb, var(--rf-primary) 70%, transparent)"/>
            <circle cx="386" cy="159" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 78%, transparent)"/>
            <circle cx="394" cy="176" r="3"   fill="color-mix(in srgb, var(--rf-primary) 65%, transparent)"/>
            <circle cx="402" cy="131" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 74%, transparent)"/>
            <circle cx="410" cy="161" r="3"   fill="color-mix(in srgb, var(--rf-primary) 70%, transparent)"/>
            <circle cx="418" cy="136" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 80%, transparent)"/>
            <circle cx="426" cy="169" r="3"   fill="color-mix(in srgb, var(--rf-primary) 68%, transparent)"/>
          </g>

          <!-- Regression line glow -->
          <line x1="52" y1="360" x2="438" y2="132"
            stroke="color-mix(in srgb, var(--rf-primary) 20%, transparent)" stroke-width="8"
            stroke-linecap="round" style="filter:blur(4px)"/>
          <!-- Regression line draw-on -->
          <line class="reg-line" x1="52" y1="360" x2="438" y2="132"
            stroke="color-mix(in srgb, var(--rf-primary) 75%, transparent)" stroke-width="2" stroke-linecap="round"/>

          <!-- "padrão real" label -->
          <rect x="291" y="199" width="90" height="22" rx="3"
            fill="color-mix(in srgb, var(--rf-surface-primary) 72%, transparent)" stroke="color-mix(in srgb, var(--rf-primary) 40%, transparent)" stroke-width=".6"
            class="appear-2s"/>
          <text x="336" y="213"
            font-family="Space Grotesk,sans-serif" font-size="3" font-weight="600"
            fill="var(--rf-primary)" text-anchor="middle" class="appear-2s">padrão real</text>
          <line x1="336" y1="199" x2="340" y2="191"
            stroke="color-mix(in srgb, var(--rf-primary) 50%, transparent)" stroke-width=".6" stroke-linecap="round"
            class="appear-2s"/>

          <!-- Outlier dot -->
          <g class="outlier-dot" filter="url(#rg-glow-out)">
            <circle cx="432" cy="40" r="7"  fill="color-mix(in srgb, var(--rf-highlight) 90%, transparent)"/>
            <circle cx="432" cy="40" r="12" fill="color-mix(in srgb, var(--rf-highlight) 15%, transparent)"/>
          </g>

          <!-- Outlier dashed line -->
           <g class="appear-24s">
          <line class="outlier-line" x1="432" y1="47" x2="432" y2="132"
            stroke="color-mix(in srgb, var(--rf-highlight) 60%, transparent)" stroke-width="1.2" stroke-linecap="round"/>
          </g>

          <!-- PROPOSTA label -->
          <g class="appear-24s">
            <rect x="210" y="29" width="200" height="22" rx="3"
              fill="color-mix(in srgb, var(--rf-surface-primary) 72%, transparent)" stroke="color-mix(in srgb, var(--rf-highlight) 45%, transparent)" stroke-width=".6"/>
            <text x="310" y="43"
              font-family="JetBrains Mono,monospace" font-size="3" font-weight="700"
              fill="var(--rf-highlight)" text-anchor="middle" letter-spacing=".04em">PROPOSTA ACIMA DO PADRÃO</text>
          </g>

          <!-- Delta arrow -->
          <line x1="444" y1="47" x2="444" y2="125"
            stroke="#FF5758" stroke-width="1" stroke-dasharray="2,2"
            class="appear-40s"/>
          <polygon points="444,42 441,50 447,50" fill="#FF5758" class="appear-40s"/>
          <polygon points="444,130 441,122 447,122" fill="#FF5758" class="appear-40s"/>
          <text x="450" y="95"
            font-family="JetBrains Mono,monospace" font-size="3" font-weight="700"
            fill="#FF5758" class="appear-40s">R$24k</text>

        </svg>
      </div>
    </div>

    <!-- ══ COL 3: Result ══ -->
    <div class="result-col">

      <div class="r3">
        <div class="result-label">Valor justo estimado:</div>
      </div>

      <div class="result-value-box r4">
        <div class="result-number">R$ 47</div>
        <div class="result-unit">mil/mês</div>
      </div>

      <div class="r4" style="animation-delay:2.5s">
        <div class="result-label" style="color:var(--rf-highlight);">Fornecedor pediu:</div>
      </div>

      <div class="result-value-box result-value-box-warn r4" style="animation-delay:2.6s">
        <div class="result-number result-number-warn">R$ 71</div>
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

/* ─── COL 1: Features ───────────────────────────────── */
.features-col {
  position: relative; z-index: 1;
  display: flex; flex-direction: column;
  justify-content: flex-start;
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
  align-self: flex-start;
  width: 80%;
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
.mini-doc-line {
  height: 1.5px; background: var(--rf-border-primary); border-radius: 1px; margin-bottom: 2px;
}
.mini-doc-line.s  { width: 70%; }
.mini-doc-line.xs { width: 50%; }
.mini-doc-sig {
  font-size: 0.42rem; font-style: italic; font-weight: 300;
  color: var(--rf-text-muted); margin-top: 0.2rem;
}

.features-divider { height: 2px; width: 36px; background: var(--rf-primary); border-radius: 2px; margin-bottom: 0.15rem; }
.features-title {
  font-size: 1.15rem; font-weight: 800; letter-spacing: -0.03em;
  color: var(--rf-text-primary); line-height: 1.15;
}

.feat-list { display: flex; flex-direction: column; gap: 0.4rem; }
.feat-item { display: flex; align-items: center; gap: 0.55rem; }
.feat-icon {
  width: 30px; height: 30px; flex-shrink: 0;
  border-radius: 8px;
  background: color-mix(in srgb, var(--rf-primary) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--rf-primary) 22%, transparent);
  display: flex; align-items: center; justify-content: center;
}
.feat-icon svg { width: 15px; height: 15px; }
.feat-text { display: flex; flex-direction: column; gap: 1px; }
.feat-label { font-size: 0.74rem; font-weight: 700; color: var(--rf-text-secondary); }
.feat-sub {
  font-size: 0.52rem; color: var(--rf-text-muted);
  font-family: "JetBrains Mono", monospace;
}

/* ─── COL 2: Chart ──────────────────────────────────── */
.chart-col {
  position: relative; z-index: 1;
  display: flex; flex-direction: column;
  height: 340px;
  padding: 0.3rem 0.6rem;
  border-right: 1px solid var(--rf-border-primary);
}
.chart-wrap {
  flex: 1;
  position: relative;
  min-height: 0;
  display: flex;
  align-items: flex-start;
}
.chart-wrap svg {
  width: 100%;
  height: auto;
  max-height: 320px;
  display: block;
}

/* ─── COL 3: Result ─────────────────────────────────── */
.result-col {
  position: relative; z-index: 1;
  display: flex; flex-direction: column;
  justify-content: flex-start;
  padding: 0.5rem 0.8rem;
  gap: 0.5rem;
}

.result-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.52rem; font-weight: 700; letter-spacing: 0.12em;
  color: var(--rf-primary); text-transform: uppercase;
}
.result-value-box {
  align-self: flex-start;
  border: 1.5px solid var(--rf-primary);
  border-radius: 10px;
  padding: 0.45rem 0.65rem;
  background: color-mix(in srgb, var(--rf-primary) 5%, transparent);
}
.result-value-box-warn {
  border-color: var(--rf-highlight);
  background: color-mix(in srgb, var(--rf-highlight) 5%, transparent);
}
.result-number {
  font-size: 2.2rem; font-weight: 800; letter-spacing: -0.04em;
  color: var(--rf-primary); line-height: 1;
}
.result-number-warn { color: var(--rf-highlight); }
.result-unit {
  font-size: 0.7rem; font-weight: 700;
  color: var(--rf-text-secondary); letter-spacing: -0.01em;
}

/* ─── Chart animations ──────────────────────────────── */
@keyframes draw-reg {
  from { stroke-dashoffset: 600; }
  to   { stroke-dashoffset: 0; }
}
.reg-line {
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  animation: draw-reg 1.2s cubic-bezier(.22,1,.36,1) 0.8s forwards;
}

@keyframes outlier-pulse {
  0%,100% { filter: drop-shadow(0 0 4px color-mix(in srgb, var(--rf-highlight) 50%, transparent)); }
  50%      { filter: drop-shadow(0 0 12px color-mix(in srgb, var(--rf-highlight) 90%, transparent)); }
}
.outlier-dot {
  opacity: 0;
  animation: outlier-pulse 2s ease-in-out 2.2s infinite, fadeUp .4s ease 2.2s forwards;
}

@keyframes draw-dash {
  from { stroke-dashoffset: 120; }
  to   { stroke-dashoffset: 0; }
}
.outlier-line {
  stroke-dasharray: 4,4;
  stroke-dashoffset: 120;
  animation: draw-dash .8s ease 2s forwards;
}

/* Delayed appear classes */
.appear-2s  { opacity: 0; animation: fadeUp .5s ease 2.0s forwards; }
.appear-24s { opacity: 0; animation: fadeUp .5s ease 2.4s forwards; }
.appear-26s { opacity: 0; animation: fadeUp .4s ease 2.6s forwards; }
.appear-28s { opacity: 0; animation: fadeUp .4s ease 2.8s forwards; }
.appear-40s { opacity: 0; animation: fadeUp .4s ease 4.0s forwards; }

/* ─── Reveal animations ─────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(14px); filter: blur(3px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}
.r1 { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.10s forwards; }
.r2 { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.25s forwards; }
.r3 { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.40s forwards; }
.r4 { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 2.40s forwards; }
.r5 { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 2.70s forwards; }
</style>
