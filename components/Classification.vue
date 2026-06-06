<template>
  <div class="slide-root">

    <!-- ══ COL 1: Features ══ -->
    <div class="features-col r1">

      <div class="mini-doc">
        <div class="mini-doc-title">FORNECEDOR</div>
        <div class="mini-doc-line" /><div class="mini-doc-line s" />
        <div class="mini-doc-line" /><div class="mini-doc-line xs" />
        <div class="mini-doc-line" /><div class="mini-doc-line s" />
        <div class="mini-doc-line" />
        <div class="mini-doc-status">Análise IA</div>
      </div>

      <div>
        <div class="features-divider" />
        <div class="features-title"><br>Atributos avaliados</div>
      </div>

      <div class="feat-list r2">
        <div class="feat-item">
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Histórico</span>
            <span class="feat-sub">ocorrências passadas</span>
          </div>
        </div>
        <div class="feat-item">
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Score preço</span>
            <span class="feat-sub">vs mercado</span>
          </div>
        </div>
        <div class="feat-item">
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Documentação</span>
            <span class="feat-sub">completude</span>
          </div>
        </div>
        <div class="feat-item">
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Compliance</span>
            <span class="feat-sub">regularidade</span>
          </div>
        </div>
      </div>


    </div>

    <!-- ══ COL 2: Chart ══ -->
    <div class="chart-col r2">
      <div class="chart-wrap">
        <svg width="100%" viewBox="0 0 490 432" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id="cls-blob-green" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stop-color="color-mix(in srgb, var(--rf-primary) 20%, transparent)"/>
              <stop offset="100%" stop-color="color-mix(in srgb, var(--rf-primary) 0%, transparent)"/>
            </radialGradient>
            <radialGradient id="cls-blob-purple" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stop-color="rgba(150,120,232,0.20)"/>
              <stop offset="100%" stop-color="rgba(150,120,232,0)"/>
            </radialGradient>
            <radialGradient id="cls-blob-red" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stop-color="rgba(255,87,88,0.20)"/>
              <stop offset="100%" stop-color="rgba(255,87,88,0)"/>
            </radialGradient>
            <filter id="cls-glow-dot">
              <feGaussianBlur stdDeviation="2" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="cls-glow-new">
              <feGaussianBlur stdDeviation="5" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <!-- Chart title -->
          <text x="246" y="15" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="3" font-weight="700"
            fill="var(--rf-primary)" letter-spacing=".18em">
            CLASSIFICAÇÃO DE FORNECEDORES
          </text>

          <!-- Grid lines horizontal -->
          <line x1="52" y1="390" x2="440" y2="390" stroke="rgba(255,255,255,0.12)" stroke-width=".8"/>
          <line x1="52" y1="298" x2="440" y2="298" stroke="rgba(255,255,255,0.06)" stroke-width=".6"/>
          <line x1="52" y1="205" x2="440" y2="205" stroke="rgba(255,255,255,0.06)" stroke-width=".6"/>
          <line x1="52" y1="112" x2="440" y2="112" stroke="rgba(255,255,255,0.06)" stroke-width=".6"/>
          <line x1="52" y1="20"  x2="440" y2="20"  stroke="rgba(255,255,255,0.04)" stroke-width=".6"/>

          <!-- Grid lines vertical -->
          <line x1="52"  y1="20" x2="52"  y2="390" stroke="rgba(255,255,255,0.12)" stroke-width=".8"/>
          <line x1="149" y1="20" x2="149" y2="390" stroke="rgba(255,255,255,0.04)" stroke-width=".6"/>
          <line x1="246" y1="20" x2="246" y2="390" stroke="rgba(255,255,255,0.04)" stroke-width=".6"/>
          <line x1="343" y1="20" x2="343" y2="390" stroke="rgba(255,255,255,0.04)" stroke-width=".6"/>

          <!-- Y axis labels -->
          <text x="46" y="394" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">0</text>
          <text x="46" y="302" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">25</text>
          <text x="46" y="209" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">50</text>
          <text x="46" y="116" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">75</text>
          <text x="46" y="24"  text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">100</text>

          <!-- X axis labels -->
          <text x="52"  y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">0</text>
          <text x="149" y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">25</text>
          <text x="246" y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">50</text>
          <text x="343" y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">75</text>
          <text x="440" y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">100</text>

          <!-- Axis labels -->
          <text x="246" y="420" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="3" font-weight="700"
            fill="var(--rf-primary)" letter-spacing=".08em">SCORE DE PREÇO</text>
          <text x="14" y="205" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="3" font-weight="700"
            fill="var(--rf-primary)" letter-spacing=".06em"
            transform="rotate(-90,14,205)">SCORE DE RISCO</text>

          <!-- Region glow blobs -->
          <ellipse cx="115" cy="348" rx="85" ry="58" fill="url(#cls-blob-green)" class="r-blob"/>
          <ellipse cx="258" cy="238" rx="72" ry="56" fill="url(#cls-blob-purple)" class="r-blob"/>
          <ellipse cx="373" cy="128" rx="72" ry="56" fill="url(#cls-blob-red)" class="r-blob"/>

          <!-- Region labels -->
          <text x="96" y="285" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="2.5" font-weight="700"
            fill="var(--rf-primary)" class="r-label">PADRÃO</text>
          <text x="248" y="185" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="2.5" font-weight="700"
            fill="rgba(150,120,232,0.38)" class="r-label">ATENÇÃO</text>
          <text x="393" y="85" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="2.5" font-weight="700"
            fill="rgba(255,87,88,0.38)" class="r-label">RISCO</text>

          <!-- Decision boundary lines (separating the 3 classes diagonally) -->
          <!-- Boundary 1: Padrão | Atenção -->
          <line class="b-line" x1="52" y1="115" x2="262" y2="390"
            stroke="color-mix(in srgb, var(--rf-text-primary) 55%, transparent)" stroke-width="1.8" stroke-dasharray="5,3" stroke-linecap="round"/>
          <!-- Boundary 2: Atenção | Risco -->
          <line class="b-line" x1="161" y1="20" x2="440" y2="316"
            stroke="color-mix(in srgb, var(--rf-text-primary) 55%, transparent)" stroke-width="1.8" stroke-dasharray="5,3" stroke-linecap="round"/>

          <!-- Green cluster (Padrão) -->
          <g filter="url(#cls-glow-dot)">
            <circle cx="75"  cy="355" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 82%, transparent)"/>
            <circle cx="90"  cy="340" r="3"   fill="color-mix(in srgb, var(--rf-primary) 75%, transparent)"/>
            <circle cx="105" cy="362" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 80%, transparent)"/>
            <circle cx="120" cy="348" r="3"   fill="color-mix(in srgb, var(--rf-primary) 70%, transparent)"/>
            <circle cx="88"  cy="372" r="3"   fill="color-mix(in srgb, var(--rf-primary) 72%, transparent)"/>
            <circle cx="115" cy="330" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 78%, transparent)"/>
            <circle cx="135" cy="355" r="3"   fill="color-mix(in srgb, var(--rf-primary) 68%, transparent)"/>
            <circle cx="98"  cy="318" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 76%, transparent)"/>
            <circle cx="145" cy="338" r="3"   fill="color-mix(in srgb, var(--rf-primary) 72%, transparent)"/>
            <circle cx="128" cy="372" r="3"   fill="color-mix(in srgb, var(--rf-primary) 65%, transparent)"/>
            <circle cx="155" cy="320" r="3.5" fill="color-mix(in srgb, var(--rf-primary) 80%, transparent)"/>
            <circle cx="78"  cy="305" r="3"   fill="color-mix(in srgb, var(--rf-primary) 68%, transparent)"/>
            <circle cx="162" cy="348" r="3"   fill="color-mix(in srgb, var(--rf-primary) 74%, transparent)"/>
          </g>

          <!-- Purple cluster (Atenção) -->
          <g filter="url(#cls-glow-dot)">
            <circle cx="225" cy="240" r="3.5" fill="rgba(150,120,232,0.85)"/>
            <circle cx="248" cy="225" r="3"   fill="rgba(150,120,232,0.78)"/>
            <circle cx="262" cy="248" r="3.5" fill="rgba(150,120,232,0.82)"/>
            <circle cx="238" cy="260" r="3"   fill="rgba(150,120,232,0.72)"/>
            <circle cx="275" cy="232" r="3.5" fill="rgba(150,120,232,0.80)"/>
            <circle cx="255" cy="268" r="3"   fill="rgba(150,120,232,0.70)"/>
            <circle cx="288" cy="215" r="3.5" fill="rgba(150,120,232,0.78)"/>
            <circle cx="278" cy="255" r="3"   fill="rgba(150,120,232,0.68)"/>
            <circle cx="215" cy="222" r="3"   fill="rgba(150,120,232,0.75)"/>
            <circle cx="300" cy="238" r="3.5" fill="rgba(150,120,232,0.76)"/>
            <circle cx="242" cy="208" r="3"   fill="rgba(150,120,232,0.72)"/>
          </g>

          <!-- Red cluster (Risco) -->
          <g filter="url(#cls-glow-dot)">
            <circle cx="340" cy="130" r="3.5" fill="rgba(255,87,88,0.85)"/>
            <circle cx="358" cy="115" r="3"   fill="rgba(255,87,88,0.78)"/>
            <circle cx="372" cy="138" r="3.5" fill="rgba(255,87,88,0.82)"/>
            <circle cx="348" cy="150" r="3"   fill="rgba(255,87,88,0.72)"/>
            <circle cx="385" cy="120" r="3.5" fill="rgba(255,87,88,0.80)"/>
            <circle cx="365" cy="155" r="3"   fill="rgba(255,87,88,0.70)"/>
            <circle cx="395" cy="105" r="3.5" fill="rgba(255,87,88,0.78)"/>
            <circle cx="378" cy="168" r="3"   fill="rgba(255,87,88,0.68)"/>
            <circle cx="328" cy="118" r="3"   fill="rgba(255,87,88,0.75)"/>
            <circle cx="408" cy="135" r="3.5" fill="rgba(255,87,88,0.76)"/>
          </g>

          <!-- New vendor (outlier — above risk cluster) -->
          <g class="new-vendor" filter="url(#cls-glow-new)">
            <circle cx="393" cy="39" r="8"  fill="color-mix(in srgb, var(--rf-highlight) 90%, transparent)"/>
            <circle cx="393" cy="39" r="14" fill="color-mix(in srgb, var(--rf-highlight) 15%, transparent)"/>
          </g>

          <!-- Callout: NOVO FORNECEDOR -->
          <g class="appear-24s">
            <rect x="210" y="32" width="155" height="22" rx="3"
              fill="color-mix(in srgb, var(--rf-surface-primary) 72%, transparent)" stroke="color-mix(in srgb, var(--rf-highlight) 50%, transparent)" stroke-width=".6"/>
            <text x="287" y="46"
              font-family="JetBrains Mono,monospace" font-size="2.8" font-weight="700"
              fill="var(--rf-highlight)" text-anchor="middle" letter-spacing=".04em">NOVO FORNECEDOR</text>
          </g>

          <!-- "zona de risco" label -->
          <g class="appear-2s">
            <rect x="308" y="162" width="74" height="18" rx="3"
              fill="color-mix(in srgb, rgba(255,87,88,1) 12%, transparent)" stroke="rgba(255,87,88,0.40)" stroke-width=".6"/>
            <text x="345" y="174"
              font-family="Space Grotesk,sans-serif" font-size="3" font-weight="600"
              fill="rgba(255,87,88,0.90)" text-anchor="middle">zona de risco</text>
          </g>

        </svg>
      </div>

      <div class="legend-horizontal r2">
        <div class="legend-item">
          <div class="legend-dot" style="background:var(--rf-primary)"></div>
          <span>Padrão</span>
        </div>
        <div class="legend-item">
          <div class="legend-dot" style="background:rgba(150,120,232,1)"></div>
          <span>Atenção</span>
        </div>
        <div class="legend-item">
          <div class="legend-dot" style="background:#FF5758"></div>
          <span>Risco</span>
        </div>
      </div>
    </div>

    <!-- ══ COL 3: Result ══ -->
    <div class="result-col">

      <div class="r3">
        <div class="result-label">Classificação IA:</div>
      </div>

      <div class="result-class-box r4">
        <div class="result-badge">RISCO</div>
        <div class="result-conf">
          <span class="conf-pct">94%</span>
          <span class="conf-sub">confiança</span>
        </div>
      </div>

      <div class="r4" style="animation-delay:2.5s">
        <div class="result-label" style="color:rgba(150,120,232,1);">Fatores de risco:</div>
      </div>

      <div class="factors-list r4" style="animation-delay:2.6s">
        <div class="factor-item">
          <div class="factor-header">
            <span class="factor-name">Preço</span>
            <span class="factor-val" style="color:#FF5758">88%</span>
          </div>
          <div class="factor-track">
            <div class="factor-fill" style="width:88%;background:#FF5758"></div>
          </div>
        </div>
        <div class="factor-item">
          <div class="factor-header">
            <span class="factor-name">Histórico</span>
            <span class="factor-val" style="color:#FF5758">76%</span>
          </div>
          <div class="factor-track">
            <div class="factor-fill" style="width:76%;background:#FF5758"></div>
          </div>
        </div>
        <div class="factor-item">
          <div class="factor-header">
            <span class="factor-name">Docs</span>
            <span class="factor-val" style="color:rgba(150,120,232,1)">52%</span>
          </div>
          <div class="factor-track">
            <div class="factor-fill" style="width:52%;background:rgba(150,120,232,0.80)"></div>
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
.mini-doc-status {
  font-size: 0.42rem; font-style: italic; font-weight: 300;
  color: var(--rf-primary); margin-top: 0.2rem;
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
  background: color-mix(in srgb, var(--ic, var(--rf-primary)) 9%, transparent);
  border: 1px solid color-mix(in srgb, var(--ic, var(--rf-primary)) 24%, transparent);
  display: flex; align-items: center; justify-content: center;
}
.feat-icon svg { width: 15px; height: 15px; }
.feat-text { display: flex; flex-direction: column; gap: 1px; }
.feat-label { font-size: 0.74rem; font-weight: 700; color: var(--rf-text-secondary); }
.feat-sub {
  font-size: 0.52rem; color: var(--rf-text-muted);
  font-family: "JetBrains Mono", monospace;
}

.legend-horizontal {
  display: flex; flex-direction: row; gap: 1.2rem;
  padding: 1.2rem 0 0 0;
  justify-content: center;
}
.legend-item {
  display: flex; align-items: center; gap: 0.42rem;
  font-size: 0.58rem; font-weight: 600;
  color: var(--rf-text-secondary);
  font-family: "JetBrains Mono", monospace;
}
.legend-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

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

.result-class-box {
  display: flex; flex-direction: column;
  align-self: flex-start;
  border: 1.5px solid #FF5758;
  border-radius: 10px;
  padding: 0.45rem 0.65rem;
  background: color-mix(in srgb, #FF5758 6%, transparent);
  gap: 0.15rem;
}
.result-badge {
  font-size: 2.1rem; font-weight: 800; letter-spacing: -0.04em;
  color: #FF5758; line-height: 1;
}
.result-conf { display: flex; flex-direction: column; gap: 1px; }
.conf-pct {
  font-size: 1.1rem; font-weight: 800; letter-spacing: -0.03em;
  color: var(--rf-highlight); line-height: 1;
}
.conf-sub {
  font-size: 0.52rem; font-weight: 700; letter-spacing: 0.05em;
  color: var(--rf-text-muted);
  font-family: "JetBrains Mono", monospace;
}

.factors-list { display: flex; flex-direction: column; gap: 0.45rem; width: 100%; }
.factor-item  { display: flex; flex-direction: column; gap: 0.18rem; }
.factor-header { display: flex; justify-content: space-between; align-items: center; }
.factor-name {
  font-size: 0.60rem; font-weight: 600;
  color: var(--rf-text-secondary);
  font-family: "JetBrains Mono", monospace;
}
.factor-val {
  font-size: 0.60rem; font-weight: 700;
  font-family: "JetBrains Mono", monospace;
}
.factor-track {
  height: 3px; background: rgba(255,255,255,0.08); border-radius: 2px; overflow: hidden;
}
.factor-fill { height: 100%; border-radius: 2px; }

/* ─── SVG element animations ─────────────────────────── */
.r-blob  { opacity: 0; animation: fadeUp 0.7s ease 0.4s forwards; }
.r-label { opacity: 0; animation: fadeUp 0.5s ease 0.9s forwards; }
.b-line  { opacity: 0; animation: fadeUp 0.5s ease 1.3s forwards; }

@keyframes cls-pulse {
  0%,100% { filter: drop-shadow(0 0 4px color-mix(in srgb, var(--rf-highlight) 50%, transparent)); }
  50%      { filter: drop-shadow(0 0 14px color-mix(in srgb, var(--rf-highlight) 90%, transparent)); }
}
.new-vendor {
  opacity: 0;
  animation: cls-pulse 2s ease-in-out 2.2s infinite, fadeUp .4s ease 2.2s forwards;
}

/* Delayed appear classes */
.appear-2s  { opacity: 0; animation: fadeUp .5s ease 2.0s forwards; }
.appear-24s { opacity: 0; animation: fadeUp .5s ease 2.4s forwards; }

/* ─── Reveal animations ─────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(14px); filter: blur(3px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}
.r1 { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.10s forwards; }
.r2 { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.25s forwards; }
.r3 { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.40s forwards; }
.r4 { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 2.40s forwards; }
</style>
