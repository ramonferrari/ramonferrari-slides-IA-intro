<template>
  <div class="slide-root">

    <!-- ══ COL 1 ══ -->
    <div class="features-col r1">

      <div class="mini-doc">
        <div class="mini-doc-title">LICITAÇÃO</div>
        <div class="mini-doc-line" /><div class="mini-doc-line s" />
        <div class="mini-doc-line" /><div class="mini-doc-line xs" />
        <div class="mini-doc-line" /><div class="mini-doc-line s" />
        <div class="mini-doc-line" />
        <div class="mini-doc-status">Em análise</div>
      </div>

      <div>
        <div class="features-divider" />
        <div class="features-title"><br>Entidades do grafo</div>
      </div>

      <div class="feat-list r2">
        <div class="feat-item">
          <div class="feat-icon" style="--ic:var(--rf-highlight)">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--ic)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Órgão público</span>
            <span class="feat-sub">contratante</span>
          </div>
        </div>
        <div class="feat-item">
          <div class="feat-icon" style="--ic:rgba(150,120,232,1)">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--ic)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Licitação</span>
            <span class="feat-sub">processo licitatório</span>
          </div>
        </div>
        <div class="feat-item">
          <div class="feat-icon" style="--ic:var(--rf-primary)">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--ic)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Fornecedor</span>
            <span class="feat-sub">empresa licitante</span>
          </div>
        </div>
        <div class="feat-item">
          <div class="feat-icon feat-icon-dashed" style="--ic:rgba(224,73,108,1)">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--ic)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <div class="feat-text">
            <span class="feat-label">Sócio / Pessoa</span>
            <span class="feat-sub feat-sub-alert">vínculo oculto</span>
          </div>
        </div>
      </div>

      <div class="edge-legend r2">
        <div class="edge-item">
          <svg width="28" height="8"><line x1="0" y1="4" x2="28" y2="4" stroke="rgba(255,255,255,0.30)" stroke-width="1.5"/></svg>
          <span>relação direta</span>
        </div>
        <div class="edge-item">
          <svg width="28" height="8"><line x1="0" y1="4" x2="28" y2="4" stroke="rgba(224,73,108,0.85)" stroke-width="1.5" stroke-dasharray="4,2"/></svg>
          <span>vínculo oculto</span>
        </div>
      </div>

    </div>

    <!-- ══ COL 2: Graph ══ -->
    <div class="chart-col r2">
      <div class="chart-wrap">
        <svg width="100%" viewBox="0 0 490 432" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="gph-dot-glow">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="gph-hidden-glow">
              <feGaussianBlur stdDeviation="5" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="gph-silva-glow">
              <feGaussianBlur stdDeviation="6" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <!-- title -->
          <text x="245" y="15" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="3" font-weight="700"
            fill="var(--rf-primary)" letter-spacing=".18em">
            REDE DE VÍNCULOS
          </text>

          <!-- radar rings from ÓRGÃO (245,72) — network atmosphere -->
          <circle cx="245" cy="72" r="104" fill="none" stroke="color-mix(in srgb, var(--rf-highlight) 05%, transparent)" stroke-width=".8"/>
          <circle cx="245" cy="72" r="208" fill="none" stroke="color-mix(in srgb, var(--rf-highlight) 03%, transparent)" stroke-width=".8"/>
          <circle cx="245" cy="72" r="308" fill="none" stroke="color-mix(in srgb, var(--rf-highlight) 02%, transparent)" stroke-width=".8"/>

          <!-- ── Phase 1: visible edges (draw-on) ── -->

          <!-- ÓRGÃO → LICIT.147 -->
          <line class="e1" x1="245" y1="72" x2="132" y2="170"
            stroke="rgba(255,255,255,0.18)" stroke-width=".9" stroke-linecap="round"/>
          <!-- ÓRGÃO → LICIT.089 -->
          <line class="e2" x1="245" y1="72" x2="245" y2="170"
            stroke="rgba(255,255,255,0.18)" stroke-width=".9" stroke-linecap="round"/>
          <!-- ÓRGÃO → LICIT.203 -->
          <line class="e3" x1="245" y1="72" x2="358" y2="170"
            stroke="rgba(255,255,255,0.18)" stroke-width=".9" stroke-linecap="round"/>
          <!-- LICIT.147 → FORN.A -->
          <line class="e4" x1="132" y1="170" x2="92" y2="278"
            stroke="rgba(255,255,255,0.18)" stroke-width=".9" stroke-linecap="round"/>
          <!-- LICIT.089 → FORN.B -->
          <line class="e5" x1="245" y1="170" x2="245" y2="278"
            stroke="rgba(255,255,255,0.18)" stroke-width=".9" stroke-linecap="round"/>
          <!-- LICIT.203 → FORN.C -->
          <line class="e6" x1="358" y1="170" x2="398" y2="278"
            stroke="rgba(255,255,255,0.18)" stroke-width=".9" stroke-linecap="round"/>

          <!-- ── Phase 2: hidden edges (J.SILVA, revealed) ── -->

          <!-- glow layer: J.SILVA → FORN.A -->
          <line class="he1"
            x1="245" y1="370" x2="92" y2="278"
            stroke="rgba(224,73,108,0.22)" stroke-width="8" stroke-linecap="round"
            filter="url(#gph-hidden-glow)"/>
          <!-- sharp line: J.SILVA → FORN.A -->
          <line class="he1"
            x1="245" y1="370" x2="92" y2="278"
            stroke="rgba(224,73,108,0.85)" stroke-width="1.5"
            stroke-dasharray="4,3" stroke-linecap="round"/>

          <!-- glow layer: J.SILVA → FORN.C -->
          <line class="he2"
            x1="245" y1="370" x2="398" y2="278"
            stroke="rgba(224,73,108,0.22)" stroke-width="8" stroke-linecap="round"
            filter="url(#gph-hidden-glow)"/>
          <!-- sharp line: J.SILVA → FORN.C -->
          <line class="he2"
            x1="245" y1="370" x2="398" y2="278"
            stroke="rgba(224,73,108,0.85)" stroke-width="1.5"
            stroke-dasharray="4,3" stroke-linecap="round"/>

          <!-- ── ÓRGÃO node ── -->
          <g class="n-orgao" filter="url(#gph-dot-glow)">
            <circle cx="245" cy="72" r="18"
              fill="color-mix(in srgb, var(--rf-highlight) 10%, transparent)" stroke="color-mix(in srgb, var(--rf-highlight) 70%, transparent)" stroke-width="1.5"/>
          </g>
          <text x="245" y="76" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="2.8" font-weight="700"
            fill="var(--rf-highlight)" class="n-orgao">ÓRGÃO</text>
          <text x="245" y="101" text-anchor="middle"
            font-family="JetBrains Mono,monospace" font-size="2.4"
            fill="rgba(255,255,255,0.38)" class="n-orgao">público</text>

          <!-- ── LICIT nodes (rounded rects) ── -->
          <g class="n-licits">
            <rect x="107" y="159" width="50" height="22" rx="3"
              fill="rgba(150,120,232,0.15)" stroke="rgba(150,120,232,0.65)" stroke-width="1.2"/>
            <text x="132" y="172" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.4" font-weight="700"
              fill="rgba(150,120,232,0.90)">L-147</text>
            <text x="132" y="192" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.2"
              fill="rgba(255,255,255,0.35)">licitação</text>

            <rect x="220" y="159" width="50" height="22" rx="3"
              fill="rgba(150,120,232,0.15)" stroke="rgba(150,120,232,0.65)" stroke-width="1.2"/>
            <text x="245" y="172" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.4" font-weight="700"
              fill="rgba(150,120,232,0.90)">L-089</text>
            <text x="245" y="192" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.2"
              fill="rgba(255,255,255,0.35)">licitação</text>

            <rect x="333" y="159" width="50" height="22" rx="3"
              fill="rgba(150,120,232,0.15)" stroke="rgba(150,120,232,0.65)" stroke-width="1.2"/>
            <text x="358" y="172" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.4" font-weight="700"
              fill="rgba(150,120,232,0.90)">L-203</text>
            <text x="358" y="192" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.2"
              fill="rgba(255,255,255,0.35)">licitação</text>
          </g>

          <!-- ── FORN nodes ── -->
          <g class="n-forns" filter="url(#gph-dot-glow)">
            <!-- FORN. A -->
            <circle cx="92" cy="278" r="15"
              fill="color-mix(in srgb, var(--rf-primary) 12%, transparent)" stroke="color-mix(in srgb, var(--rf-primary) 65%, transparent)" stroke-width="1.5"/>
            <text x="92" y="282" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.6" font-weight="700"
              fill="var(--rf-primary)">A</text>
            <text x="92" y="301" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.4"
              fill="rgba(255,255,255,0.45)">FORN. A</text>
            <text x="92" y="309" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.0"
              fill="rgba(255,255,255,0.28)">ganhou L-147</text>

            <!-- FORN. B -->
            <circle cx="245" cy="278" r="15"
              fill="color-mix(in srgb, var(--rf-primary) 12%, transparent)" stroke="color-mix(in srgb, var(--rf-primary) 65%, transparent)" stroke-width="1.5"/>
            <text x="245" y="282" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.6" font-weight="700"
              fill="var(--rf-primary)">B</text>
            <text x="245" y="301" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.4"
              fill="rgba(255,255,255,0.45)">FORN. B</text>
            <text x="245" y="309" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.0"
              fill="rgba(255,255,255,0.28)">ganhou L-089</text>

            <!-- FORN. C -->
            <circle cx="398" cy="278" r="15"
              fill="color-mix(in srgb, var(--rf-primary) 12%, transparent)" stroke="color-mix(in srgb, var(--rf-primary) 65%, transparent)" stroke-width="1.5"/>
            <text x="398" y="282" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.6" font-weight="700"
              fill="var(--rf-primary)">C</text>
            <text x="398" y="301" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.4"
              fill="rgba(255,255,255,0.45)">FORN. C</text>
            <text x="398" y="309" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.0"
              fill="rgba(255,255,255,0.28)">ganhou L-203</text>
          </g>

          <!-- ── J.SILVA node (hidden, revealed) ── -->
          <g class="silva-node" filter="url(#gph-silva-glow)">
            <circle cx="245" cy="370" r="16"
              fill="rgba(224,73,108,0.18)" stroke="rgba(224,73,108,0.90)" stroke-width="1.8"
              stroke-dasharray="4,2"/>
            <text x="245" y="374" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.5" font-weight="700"
              fill="rgba(224,73,108,0.95)">J.S.</text>
          </g>
          <!-- J.SILVA labels -->
          <g class="silva-label">
            <text x="245" y="395" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.4" font-weight="700"
              fill="rgba(224,73,108,0.85)">J. SILVA</text>
            <text x="245" y="403" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.2"
              fill="rgba(224,73,108,0.55)">sócio em comum</text>
          </g>

          <!-- !! badge above J.SILVA -->
          <g class="silva-badge">
            <rect x="220" y="348" width="50" height="12" rx="3"
              fill="rgba(255,87,88,0.90)"/>
            <text x="245" y="357" text-anchor="middle"
              font-family="JetBrains Mono,monospace" font-size="2.4" font-weight="700"
              fill="#fff" letter-spacing=".04em">OCULTO</text>
          </g>

        </svg>
      </div>
    </div>

    <!-- ══ COL 3: Result ══ -->
    <div class="result-col">

      <div class="r3">
        <div class="result-label">Vínculo oculto:</div>
      </div>

      <div class="result-class-box r4">
        <div class="result-badge">CONFLITO</div>
        <div class="result-sub">
          <span class="sub-val">2</span>
          <span class="sub-unit">fornecedores</span>
        </div>
        <div class="result-sub">
          <span class="sub-val">1</span>
          <span class="sub-unit">sócio em comum</span>
        </div>
      </div>

      <div class="r4" style="animation-delay:2.8s">
        <div class="result-label" style="color:rgba(224,73,108,1);">Cadeia identificada:</div>
      </div>

      <div class="chain-box r4" style="animation-delay:2.9s">
        <div class="chain-node cn-forn">A</div>
        <div class="chain-conn"></div>
        <div class="chain-node cn-person">J. SILVA</div>
        <div class="chain-conn"></div>
        <div class="chain-node cn-forn">C</div>
      </div>

      <div class="r4" style="animation-delay:3.1s">
        <div class="risk-tags">
          <span class="risk-tag">Potencial cartel</span>
          <span class="risk-tag">Concorrência fictícia</span>
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
  font-size: 0.42rem; font-style: italic; font-weight: 300;
  color: var(--rf-highlight); margin-top: 0.2rem;
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
.feat-icon-dashed {
  border-style: dashed !important;
}
.feat-icon svg { width: 15px; height: 15px; }
.feat-text { display: flex; flex-direction: column; gap: 1px; }
.feat-label { font-size: 0.74rem; font-weight: 700; color: var(--rf-text-secondary); }
.feat-sub { font-size: 0.52rem; color: var(--rf-text-muted); font-family: "JetBrains Mono", monospace; }
.feat-sub-alert { color: rgba(224,73,108,0.80) !important; font-style: italic; }

.edge-legend {
  display: flex; flex-direction: column; gap: 0.28rem;
  padding: 0.42rem 0.55rem;
  background: var(--rf-surface-secondary);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 6px;
  align-self: flex-start; width: 80%;
}
.edge-item {
  display: flex; align-items: center; gap: 0.42rem;
  font-size: 0.56rem; font-weight: 600;
  color: var(--rf-text-secondary);
  font-family: "JetBrains Mono", monospace;
}

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
  gap: 0.18rem;
}
.result-badge { font-size: 1.75rem; font-weight: 800; letter-spacing: -0.04em; color: #FF5758; line-height: 1; }
.result-sub { display: flex; align-items: baseline; gap: 0.3rem; }
.sub-val { font-size: 1.0rem; font-weight: 800; color: var(--rf-highlight); line-height: 1; }
.sub-unit { font-size: 0.52rem; font-weight: 600; color: var(--rf-text-muted); font-family: "JetBrains Mono", monospace; }

/* chain visualization */
.chain-box {
  display: flex; align-items: center; gap: 0;
  background: var(--rf-surface-secondary);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 8px; padding: 0.4rem 0.5rem;
  flex-wrap: wrap; row-gap: 0.2rem;
}
.chain-node {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.52rem; font-weight: 700;
  padding: 0.18rem 0.4rem;
  border-radius: 4px;
}
.cn-forn {
  background: color-mix(in srgb, var(--rf-primary) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--rf-primary) 35%, transparent);
  color: var(--rf-primary);
}
.cn-person {
  background: color-mix(in srgb, rgba(224,73,108,1) 10%, transparent);
  border: 1px solid color-mix(in srgb, rgba(224,73,108,1) 35%, transparent);
  color: rgba(224,73,108,1);
}
.chain-conn {
  flex: 1; height: 1px; min-width: 8px;
  background: rgba(224,73,108,0.40);
}

.risk-tags { display: flex; flex-direction: column; gap: 0.25rem; }
.risk-tag {
  display: inline-flex; align-self: flex-start;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.50rem; font-weight: 700; letter-spacing: 0.04em;
  padding: 0.18rem 0.45rem;
  border-radius: 4px;
  color: #FF5758;
  background: color-mix(in srgb, #FF5758 8%, transparent);
  border: 1px solid color-mix(in srgb, #FF5758 25%, transparent);
}

/* ─── SVG edge draw-on animations ────────────────────── */
@keyframes draw-edge {
  from { stroke-dashoffset: var(--dl); opacity: 1; }
  to   { stroke-dashoffset: 0;         opacity: 1; }
}

/* each edge: initial opacity 0 so it's invisible until animation fires */
.e1 { opacity:0; --dl:155; stroke-dasharray:155; animation: draw-edge .5s ease 0.5s forwards; }
.e2 { opacity:0; --dl:100; stroke-dasharray:100; animation: draw-edge .4s ease 0.6s forwards; }
.e3 { opacity:0; --dl:155; stroke-dasharray:155; animation: draw-edge .5s ease 0.7s forwards; }
.e4 { opacity:0; --dl:120; stroke-dasharray:120; animation: draw-edge .5s ease 0.9s forwards; }
.e5 { opacity:0; --dl:112; stroke-dasharray:112; animation: draw-edge .4s ease 1.0s forwards; }
.e6 { opacity:0; --dl:120; stroke-dasharray:120; animation: draw-edge .5s ease 1.1s forwards; }

/* ─── SVG node appear animations ─────────────────────── */
.n-orgao  { opacity:0; animation: fadeUp .6s cubic-bezier(.22,1,.36,1) 0.3s forwards; }
.n-licits { opacity:0; animation: fadeUp .6s cubic-bezier(.22,1,.36,1) 0.8s forwards; }
.n-forns  { opacity:0; animation: fadeUp .6s cubic-bezier(.22,1,.36,1) 1.2s forwards; }

/* ─── J.SILVA reveal ─────────────────────────────────── */
@keyframes silva-appear {
  from { opacity:0; transform: scale(0.4); filter: blur(6px); }
  to   { opacity:1; transform: scale(1);   filter: blur(0); }
}
@keyframes silva-pulse {
  0%,100% { filter: drop-shadow(0 0 5px rgba(224,73,108,.5)); }
  50%      { filter: drop-shadow(0 0 16px rgba(224,73,108,.9)); }
}
.silva-node {
  opacity:0;
  transform-origin: 245px 370px;
  animation:
    silva-appear 0.7s cubic-bezier(.22,1,.36,1) 2.1s forwards,
    silva-pulse 2s ease-in-out 2.9s infinite;
}
.silva-label { opacity:0; animation: fadeUp .4s ease 2.4s forwards; }
.silva-badge { opacity:0; animation: fadeUp .4s ease 2.6s forwards; }

/* ─── Hidden edges draw-on ────────────────────────────── */
@keyframes draw-hidden {
  from { stroke-dashoffset: 185; opacity: 1; }
  to   { stroke-dashoffset: 0;   opacity: 1; }
}
.he1 { opacity:0; stroke-dasharray:185; animation: draw-hidden .8s ease 2.8s forwards; }
.he2 { opacity:0; stroke-dasharray:185; animation: draw-hidden .8s ease 3.0s forwards; }

/* ─── Appear classes ──────────────────────────────────── */
.appear-24s { opacity:0; animation: fadeUp .5s ease 2.4s forwards; }

/* ─── Reveal animations ───────────────────────────────── */
@keyframes fadeUp {
  from { opacity:0; transform: translateY(14px); filter: blur(3px); }
  to   { opacity:1; transform: translateY(0);    filter: blur(0); }
}
.r1 { opacity:0; animation: fadeUp .8s cubic-bezier(.22,1,.36,1) 0.10s forwards; }
.r2 { opacity:0; animation: fadeUp .8s cubic-bezier(.22,1,.36,1) 0.25s forwards; }
.r3 { opacity:0; animation: fadeUp .8s cubic-bezier(.22,1,.36,1) 0.40s forwards; }
.r4 { opacity:0; animation: fadeUp .8s cubic-bezier(.22,1,.36,1) 2.40s forwards; }
</style>
