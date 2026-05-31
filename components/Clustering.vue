<template>
  <div class="slide-root">

    <!-- ══ COL 1 ══ -->
    <div class="features-col r1">

      <div class="mini-doc">
        <div class="mini-doc-title">CONTRATOS</div>
        <div class="mini-doc-line" /><div class="mini-doc-line s" />
        <div class="mini-doc-line" /><div class="mini-doc-line xs" />
        <div class="mini-doc-line" /><div class="mini-doc-line s" />
        <div class="mini-doc-line" />
        <div class="mini-doc-status">Sem rótulo</div>
      </div>

      <div>
        <div class="features-divider" />
        <div class="features-title"><br>Variáveis de entrada</div>
      </div>

      <div class="feat-list r2">
        <div class="feat-item">
          <div class="feat-icon" style="--ic:#63d3a1">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--ic)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
              <polyline points="17 6 23 6 23 12"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Variação preço</span>
            <span class="feat-sub">desvio vs contrato</span>
          </div>
        </div>
        <div class="feat-item">
          <div class="feat-icon" style="--ic:rgba(150,120,232,1)">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--ic)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"/>
              <polyline points="2 17 12 22 22 17"/>
              <polyline points="2 12 12 17 22 12"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Nº aditivos</span>
            <span class="feat-sub">alterações contratuais</span>
          </div>
        </div>
        <div class="feat-item">
          <div class="feat-icon" style="--ic:rgba(224,73,108,1)">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--ic)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Prazo execução</span>
            <span class="feat-sub">meses de vigência</span>
          </div>
        </div>
        <div class="feat-item">
          <div class="feat-icon" style="--ic:#e2f81b">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--ic)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Cobertura</span>
            <span class="feat-sub">estados atendidos</span>
          </div>
        </div>
      </div>

      <div class="legend r2">
        <div class="legend-item">
          <div class="legend-dot" style="background:#63d3a1"></div>
          <span>Grupo A</span>
        </div>
        <div class="legend-item">
          <div class="legend-dot" style="background:rgba(150,120,232,1)"></div>
          <span>Grupo B</span>
        </div>
        <div class="legend-item">
          <div class="legend-dot" style="background:#FF5758"></div>
          <span>Grupo C</span>
        </div>
      </div>

    </div>

    <!-- ══ COL 2: Chart ══ -->
    <div class="chart-col r2">
      <div class="chart-wrap">
        <svg width="100%" viewBox="0 0 490 432" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="cl-glow-dot">
              <feGaussianBlur stdDeviation="2" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="cl-glow-new">
              <feGaussianBlur stdDeviation="5" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <!-- title -->
          <text x="246" y="15" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="3" font-weight="700"
            fill="rgba(99,211,161,0.65)" letter-spacing=".18em">
            AGRUPAMENTO DE CONTRATOS
          </text>

          <!-- grid h -->
          <line x1="52" y1="390" x2="440" y2="390" stroke="rgba(255,255,255,0.12)" stroke-width=".8"/>
          <line x1="52" y1="298" x2="440" y2="298" stroke="rgba(255,255,255,0.06)" stroke-width=".6"/>
          <line x1="52" y1="205" x2="440" y2="205" stroke="rgba(255,255,255,0.06)" stroke-width=".6"/>
          <line x1="52" y1="112" x2="440" y2="112" stroke="rgba(255,255,255,0.06)" stroke-width=".6"/>
          <line x1="52" y1="20"  x2="440" y2="20"  stroke="rgba(255,255,255,0.04)" stroke-width=".6"/>
          <!-- grid v -->
          <line x1="52"  y1="20" x2="52"  y2="390" stroke="rgba(255,255,255,0.12)" stroke-width=".8"/>
          <line x1="149" y1="20" x2="149" y2="390" stroke="rgba(255,255,255,0.04)" stroke-width=".6"/>
          <line x1="246" y1="20" x2="246" y2="390" stroke="rgba(255,255,255,0.04)" stroke-width=".6"/>
          <line x1="343" y1="20" x2="343" y2="390" stroke="rgba(255,255,255,0.04)" stroke-width=".6"/>

          <!-- Y labels -->
          <text x="46" y="394" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">0</text>
          <text x="46" y="302" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">25</text>
          <text x="46" y="209" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">50</text>
          <text x="46" y="116" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">75</text>
          <text x="46" y="24"  text-anchor="end" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">100</text>
          <!-- X labels -->
          <text x="52"  y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">0</text>
          <text x="149" y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">25</text>
          <text x="246" y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">50</text>
          <text x="343" y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">75</text>
          <text x="440" y="404" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="3" fill="rgba(255,255,255,0.35)">100</text>
          <!-- axis labels -->
          <text x="246" y="420" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="3" font-weight="700"
            fill="rgba(99,211,161,0.60)" letter-spacing=".08em">VARIAÇÃO DE PREÇO (%)</text>
          <text x="14" y="205" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="3" font-weight="700"
            fill="rgba(99,211,161,0.60)" letter-spacing=".06em"
            transform="rotate(-90,14,205)">Nº ADITIVOS</text>

          <!-- ── Cluster ellipses — grow from centroid ── -->
          <!-- A: top-left  cx=135 cy=105 -->
          <g class="ell-a" style="transform-origin:135px 105px">
            <ellipse cx="135" cy="105" rx="72" ry="55"
              fill="rgba(99,211,161,0.07)" stroke="#63d3a1" stroke-width="1.2"
              stroke-dasharray="6,3" stroke-opacity="0.42"/>
          </g>
          <!-- B: bottom-center  cx=245 cy=330 -->
          <g class="ell-b" style="transform-origin:245px 330px">
            <ellipse cx="245" cy="330" rx="80" ry="52"
              fill="rgba(150,120,232,0.07)" stroke="rgba(150,120,232,1)" stroke-width="1.2"
              stroke-dasharray="6,3" stroke-opacity="0.42"/>
          </g>
          <!-- C: top-right  cx=360 cy=120 -->
          <g class="ell-c" style="transform-origin:360px 120px">
            <ellipse cx="360" cy="120" rx="68" ry="58"
              fill="rgba(255,87,88,0.07)" stroke="#FF5758" stroke-width="1.2"
              stroke-dasharray="6,3" stroke-opacity="0.42"/>
          </g>

          <!-- group labels (inside each ellipse, low opacity) -->
          <text x="135" y="170" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="2.5" font-weight="700"
            fill="rgba(99,211,161,0.38)" class="g-label">GRUPO A</text>
          <text x="245" y="284" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="2.5" font-weight="700"
            fill="rgba(150,120,232,0.38)" class="g-label">GRUPO B</text>
          <text x="360" y="188" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="2.5" font-weight="700"
            fill="rgba(255,87,88,0.38)" class="g-label">GRUPO C</text>

          <!-- ── Data points ── -->

          <!-- Cluster A (green) — high amendments, low-mid price variation -->
          <g filter="url(#cl-glow-dot)">
            <circle cx="78"  cy="90"  r="3.5" fill="rgba(99,211,161,0.82)"/>
            <circle cx="95"  cy="75"  r="3"   fill="rgba(99,211,161,0.75)"/>
            <circle cx="112" cy="100" r="3.5" fill="rgba(99,211,161,0.80)"/>
            <circle cx="130" cy="72"  r="3"   fill="rgba(99,211,161,0.70)"/>
            <circle cx="148" cy="85"  r="3.5" fill="rgba(99,211,161,0.78)"/>
            <circle cx="82"  cy="115" r="3"   fill="rgba(99,211,161,0.72)"/>
            <circle cx="100" cy="132" r="3.5" fill="rgba(99,211,161,0.80)"/>
            <circle cx="122" cy="110" r="3"   fill="rgba(99,211,161,0.68)"/>
            <circle cx="152" cy="118" r="3.5" fill="rgba(99,211,161,0.76)"/>
            <circle cx="168" cy="98"  r="3"   fill="rgba(99,211,161,0.72)"/>
            <circle cx="92"  cy="148" r="3"   fill="rgba(99,211,161,0.65)"/>
            <circle cx="135" cy="152" r="3.5" fill="rgba(99,211,161,0.74)"/>
            <circle cx="115" cy="135" r="3"   fill="rgba(99,211,161,0.70)"/>
          </g>

          <!-- Cluster B (purple) — few amendments, mid price variation -->
          <g filter="url(#cl-glow-dot)">
            <circle cx="178" cy="315" r="3.5" fill="rgba(150,120,232,0.85)"/>
            <circle cx="198" cy="298" r="3"   fill="rgba(150,120,232,0.78)"/>
            <circle cx="218" cy="322" r="3.5" fill="rgba(150,120,232,0.82)"/>
            <circle cx="240" cy="290" r="3"   fill="rgba(150,120,232,0.72)"/>
            <circle cx="260" cy="308" r="3.5" fill="rgba(150,120,232,0.80)"/>
            <circle cx="182" cy="338" r="3"   fill="rgba(150,120,232,0.70)"/>
            <circle cx="205" cy="355" r="3.5" fill="rgba(150,120,232,0.78)"/>
            <circle cx="242" cy="342" r="3"   fill="rgba(150,120,232,0.68)"/>
            <circle cx="268" cy="328" r="3.5" fill="rgba(150,120,232,0.76)"/>
            <circle cx="288" cy="315" r="3"   fill="rgba(150,120,232,0.72)"/>
            <circle cx="200" cy="368" r="3"   fill="rgba(150,120,232,0.65)"/>
            <circle cx="248" cy="372" r="3.5" fill="rgba(150,120,232,0.74)"/>
            <circle cx="308" cy="340" r="3"   fill="rgba(150,120,232,0.68)"/>
          </g>

          <!-- Cluster C (red) — high amendments, high price variation -->
          <g filter="url(#cl-glow-dot)">
            <circle cx="305" cy="100" r="3.5" fill="rgba(255,87,88,0.85)"/>
            <circle cx="325" cy="82"  r="3"   fill="rgba(255,87,88,0.78)"/>
            <circle cx="345" cy="108" r="3.5" fill="rgba(255,87,88,0.82)"/>
            <circle cx="365" cy="80"  r="3"   fill="rgba(255,87,88,0.72)"/>
            <circle cx="382" cy="98"  r="3.5" fill="rgba(255,87,88,0.80)"/>
            <circle cx="298" cy="128" r="3"   fill="rgba(255,87,88,0.70)"/>
            <circle cx="318" cy="148" r="3.5" fill="rgba(255,87,88,0.78)"/>
            <circle cx="348" cy="135" r="3"   fill="rgba(255,87,88,0.68)"/>
            <circle cx="372" cy="125" r="3.5" fill="rgba(255,87,88,0.76)"/>
            <circle cx="390" cy="110" r="3"   fill="rgba(255,87,88,0.72)"/>
            <circle cx="308" cy="165" r="3"   fill="rgba(255,87,88,0.65)"/>
            <circle cx="348" cy="170" r="3.5" fill="rgba(255,87,88,0.74)"/>
            <circle cx="372" cy="158" r="3"   fill="rgba(255,87,88,0.70)"/>
            <circle cx="395" cy="148" r="3.5" fill="rgba(255,87,88,0.76)"/>
          </g>

          <!-- ── Centroid crosshairs (appear after ellipses) ── -->

          <!-- Centroid A -->
          <g class="centroid-a">
            <circle cx="135" cy="105" r="5" fill="rgba(99,211,161,0.18)" stroke="#63d3a1" stroke-width="1.5"/>
            <line x1="122" y1="105" x2="148" y2="105" stroke="#63d3a1" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="135" y1="92"  x2="135" y2="118" stroke="#63d3a1" stroke-width="1.5" stroke-linecap="round"/>
          </g>

          <!-- Centroid B -->
          <g class="centroid-b">
            <circle cx="245" cy="330" r="5" fill="rgba(150,120,232,0.18)" stroke="rgba(150,120,232,1)" stroke-width="1.5"/>
            <line x1="232" y1="330" x2="258" y2="330" stroke="rgba(150,120,232,1)" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="245" y1="317" x2="245" y2="343" stroke="rgba(150,120,232,1)" stroke-width="1.5" stroke-linecap="round"/>
          </g>

          <!-- Centroid C -->
          <g class="centroid-c">
            <circle cx="360" cy="120" r="5" fill="rgba(255,87,88,0.18)" stroke="#FF5758" stroke-width="1.5"/>
            <line x1="347" y1="120" x2="373" y2="120" stroke="#FF5758" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="360" y1="107" x2="360" y2="133" stroke="#FF5758" stroke-width="1.5" stroke-linecap="round"/>
          </g>

          <!-- ── New vendor (yellow) ── -->
          <g class="new-vendor" filter="url(#cl-glow-new)">
            <circle cx="428" cy="52" r="8"  fill="rgba(226,248,27,0.90)"/>
            <circle cx="428" cy="52" r="14" fill="rgba(226,248,27,0.15)"/>
          </g>

          <!-- Distance line: new vendor → nearest centroid (C) -->
          <line class="dist-line" x1="428" y1="52" x2="360" y2="120"
            stroke="rgba(226,248,27,0.60)" stroke-width="1.2"
            stroke-dasharray="4,3" stroke-linecap="round"/>

          <!-- distance label near midpoint -->
          <text x="406" y="78" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="2.5" font-weight="600"
            fill="rgba(226,248,27,0.70)" class="appear-30s">d=88</text>

          <!-- NOVO CONTRATO callout -->
          <g class="appear-24s">
            <rect x="196" y="34" width="155" height="22" rx="3"
              fill="rgba(20,18,0,0.90)" stroke="rgba(226,248,27,0.50)" stroke-width=".6"/>
            <text x="273" y="48"
              font-family="JetBrains Mono,monospace" font-size="2.8" font-weight="700"
              fill="rgba(226,248,27,0.95)" text-anchor="middle" letter-spacing=".04em">NOVO CONTRATO</text>
            <line x1="351" y1="56" x2="416" y2="54"
              stroke="rgba(226,248,27,0.50)" stroke-width=".6" stroke-linecap="round"/>
          </g>

        </svg>
      </div>
    </div>

    <!-- ══ COL 3: Result ══ -->
    <div class="result-col">

      <div class="r3">
        <div class="result-label">Cluster atribuído:</div>
      </div>

      <div class="result-class-box r4">
        <div class="result-badge">GRUPO C</div>
        <div class="result-dist">
          <span class="dist-val">88</span>
          <span class="dist-sub">dist. centróide</span>
        </div>
      </div>

      <div class="r4" style="animation-delay:2.5s">
        <div class="result-label" style="color:rgba(150,120,232,1);">Perfil do grupo:</div>
      </div>

      <div class="factors-list r4" style="animation-delay:2.6s">
        <div class="factor-item">
          <div class="factor-header">
            <span class="factor-name">Variação preço</span>
            <span class="factor-val" style="color:#FF5758">92%</span>
          </div>
          <div class="factor-track">
            <div class="factor-fill" style="width:92%;background:#FF5758"></div>
          </div>
        </div>
        <div class="factor-item">
          <div class="factor-header">
            <span class="factor-name">Nº aditivos</span>
            <span class="factor-val" style="color:#FF5758">85%</span>
          </div>
          <div class="factor-track">
            <div class="factor-fill" style="width:85%;background:#FF5758"></div>
          </div>
        </div>
        <div class="factor-item">
          <div class="factor-header">
            <span class="factor-name">Prazo</span>
            <span class="factor-val" style="color:rgba(150,120,232,1)">68%</span>
          </div>
          <div class="factor-track">
            <div class="factor-fill" style="width:68%;background:rgba(150,120,232,0.80)"></div>
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
.mini-doc-line { height: 1.5px; background: var(--rf-border-primary); border-radius: 1px; margin-bottom: 2px; }
.mini-doc-line.s  { width: 70%; }
.mini-doc-line.xs { width: 50%; }
.mini-doc-status {
  font-size: 0.42rem; font-style: italic; font-weight: 300;
  color: rgba(224,73,108,1); margin-top: 0.2rem;
}
.features-divider { height: 2px; width: 36px; background: var(--rf-primary); border-radius: 2px; margin-bottom: 0.15rem; }
.features-title { font-size: 1.15rem; font-weight: 800; letter-spacing: -0.03em; color: var(--rf-text-primary); line-height: 1.15; }
.feat-list { display: flex; flex-direction: column; gap: 0.4rem; }
.feat-item { display: flex; align-items: center; gap: 0.55rem; }
.feat-icon {
  width: 30px; height: 30px; flex-shrink: 0;
  border-radius: 8px;
  background: color-mix(in srgb, var(--ic, #63d3a1) 9%, transparent);
  border: 1px solid color-mix(in srgb, var(--ic, #63d3a1) 24%, transparent);
  display: flex; align-items: center; justify-content: center;
}
.feat-icon svg { width: 15px; height: 15px; }
.feat-text { display: flex; flex-direction: column; gap: 1px; }
.feat-label { font-size: 0.74rem; font-weight: 700; color: var(--rf-text-secondary); }
.feat-sub { font-size: 0.52rem; color: var(--rf-text-muted); font-family: "JetBrains Mono", monospace; }
.legend {
  display: flex; flex-direction: column; gap: 0.28rem;
  padding: 0.42rem 0.55rem;
  background: var(--rf-surface-secondary);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 6px;
  align-self: flex-start; width: 80%;
}
.legend-item { display: flex; align-items: center; gap: 0.42rem; font-size: 0.58rem; font-weight: 600; color: var(--rf-text-secondary); font-family: "JetBrains Mono", monospace; }
.legend-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

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
.result-class-box {
  display: flex; flex-direction: column; align-self: flex-start;
  border: 1.5px solid #FF5758; border-radius: 10px;
  padding: 0.45rem 0.65rem;
  background: color-mix(in srgb, #FF5758 6%, transparent);
  gap: 0.15rem;
}
.result-badge { font-size: 1.8rem; font-weight: 800; letter-spacing: -0.04em; color: #FF5758; line-height: 1; }
.result-dist { display: flex; flex-direction: column; gap: 1px; }
.dist-val { font-size: 1.1rem; font-weight: 800; letter-spacing: -0.03em; color: #e2f81b; line-height: 1; }
.dist-sub { font-size: 0.52rem; font-weight: 700; letter-spacing: 0.05em; color: var(--rf-text-muted); font-family: "JetBrains Mono", monospace; }
.factors-list { display: flex; flex-direction: column; gap: 0.45rem; width: 100%; }
.factor-item  { display: flex; flex-direction: column; gap: 0.18rem; }
.factor-header { display: flex; justify-content: space-between; align-items: center; }
.factor-name { font-size: 0.60rem; font-weight: 600; color: var(--rf-text-secondary); font-family: "JetBrains Mono", monospace; }
.factor-val  { font-size: 0.60rem; font-weight: 700; font-family: "JetBrains Mono", monospace; }
.factor-track { height: 3px; background: rgba(255,255,255,0.08); border-radius: 2px; overflow: hidden; }
.factor-fill  { height: 100%; border-radius: 2px; }

/* ─── Cluster ellipse grow ────────────────────────────── */
@keyframes ell-grow {
  from { transform: scale(0); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}
.ell-a { transform: scale(0); animation: ell-grow 0.9s cubic-bezier(.22,1,.36,1) 0.7s forwards; }
.ell-b { transform: scale(0); animation: ell-grow 0.9s cubic-bezier(.22,1,.36,1) 0.9s forwards; }
.ell-c { transform: scale(0); animation: ell-grow 0.9s cubic-bezier(.22,1,.36,1) 1.1s forwards; }

/* ─── Centroid crosshairs ─────────────────────────────── */
.centroid-a { opacity: 0; animation: fadeUp 0.4s ease 1.6s forwards; }
.centroid-b { opacity: 0; animation: fadeUp 0.4s ease 1.7s forwards; }
.centroid-c { opacity: 0; animation: fadeUp 0.4s ease 1.8s forwards; }

/* ─── Group labels ────────────────────────────────────── */
.g-label { opacity: 0; animation: fadeUp 0.5s ease 1.4s forwards; }

/* ─── New vendor pulse ────────────────────────────────── */
@keyframes cl-pulse {
  0%,100% { filter: drop-shadow(0 0 4px rgba(226,248,27,.5)); }
  50%      { filter: drop-shadow(0 0 14px rgba(226,248,27,.9)); }
}
.new-vendor {
  opacity: 0;
  animation: cl-pulse 2s ease-in-out 2.2s infinite, fadeUp .4s ease 2.2s forwards;
}

/* ─── Distance line draw-on ───────────────────────────── */
.dist-line {
  stroke-dashoffset: 92;
  stroke-dasharray: 92;
  opacity: 0;
  animation: draw-dist 0.7s ease 2.7s forwards;
}
@keyframes draw-dist {
  from { stroke-dashoffset: 92; opacity: 1; }
  to   { stroke-dashoffset: 0;  opacity: 1; }
}

/* ─── Appear classes ──────────────────────────────────── */
.appear-24s { opacity: 0; animation: fadeUp .5s ease 2.4s forwards; }
.appear-30s { opacity: 0; animation: fadeUp .4s ease 3.0s forwards; }

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
