<template>
  <div class="datavscontract-root">

    <!-- ══ LEFT: Cientista de Dados ══ -->
    <div class="col col-left r1">
      <div class="col-header">
        <div class="col-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        </div>
        <div>
          <div class="col-title">Cientista de dados</div>
          <div class="col-subtitle">Informação bruta, bagunçada e espalhada</div>
          <div class="col-title-line" />
        </div>
      </div>

      <div class="artifacts">
        <!-- Data table -->
        <div class="artifact">
          <div class="artifact-title">Dataset</div>
          <table class="data-table">
            <thead>
              <tr>
                <th>Feature</th><th>Score A</th><th>Score B</th><th>Label</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>row_001</td><td>12.458</td><td>8.211</td><td class="accent">0.71</td></tr>
              <tr><td>row_002</td><td>3.782</td><td>6.092</td><td>0.24</td></tr>
              <tr><td>row_003</td><td>9.104</td><td>1.537</td><td class="accent">0.19</td></tr>
              <tr><td>row_004</td><td>2.987</td><td>4.668</td><td>0.62</td></tr>
              <tr><td>row_005</td><td>7.421</td><td>2.301</td><td>0.33</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Code block -->
        <div class="artifact" style="grid-row: span 2;">
          <div class="artifact-title">Pipeline</div>
          <div class="code-block">
            <span class="code-kw">import</span> pandas <span class="code-kw">as</span> pd<br/>
            <span class="code-kw">from</span> sklearn <span class="code-kw">import</span> <span class="code-fn">pipeline</span><br/>
            <br/>
            <span class="code-cm"># load contracts</span><br/>
            df = pd.<span class="code-fn">read_parquet</span>(<br/>
            &nbsp;&nbsp;<span class="code-str">"contratos.parquet"</span><br/>
            )<br/>
            <br/>
            <span class="code-cm"># extract features</span><br/>
            X = <span class="code-fn">extract_fields</span>(df)<br/>
            y = df[<span class="code-str">"risco"</span>]<br/>
            <br/>
            model.<span class="code-fn">fit</span>(X, y)<br/>
            preds = model.<span class="code-fn">predict</span>(X_new)
          </div>
        </div>

        <!-- Scatter -->
        <div class="artifact">
          <div class="artifact-title">Clusters</div>
          <div class="scatter-wrap">
            <svg class="scatter-svg" viewBox="0 0 110 70" xmlns="http://www.w3.org/2000/svg">
              <line x1="8" y1="62" x2="105" y2="62" stroke="rgba(255,255,255,0.12)" stroke-width="0.5"/>
              <line x1="8" y1="5"  x2="8"   y2="62" stroke="rgba(255,255,255,0.12)" stroke-width="0.5"/>
              <circle cx="20" cy="48" r="2.5" fill="rgba(99,211,161,0.7)"/>
              <circle cx="28" cy="52" r="2"   fill="rgba(99,211,161,0.6)"/>
              <circle cx="24" cy="44" r="2"   fill="rgba(99,211,161,0.5)"/>
              <circle cx="34" cy="50" r="2.5" fill="rgba(99,211,161,0.65)"/>
              <circle cx="18" cy="55" r="1.8" fill="rgba(99,211,161,0.5)"/>
              <circle cx="30" cy="40" r="2"   fill="rgba(99,211,161,0.55)"/>
              <circle cx="72" cy="18" r="2.5" fill="rgba(226,248,27,0.7)"/>
              <circle cx="80" cy="14" r="2"   fill="rgba(226,248,27,0.6)"/>
              <circle cx="76" cy="22" r="2"   fill="rgba(226,248,27,0.5)"/>
              <circle cx="86" cy="18" r="2.5" fill="rgba(226,248,27,0.65)"/>
              <circle cx="68" cy="12" r="1.8" fill="rgba(226,248,27,0.5)"/>
              <circle cx="82" cy="26" r="2"   fill="rgba(226,248,27,0.55)"/>
              <circle cx="48" cy="34" r="2"   fill="rgba(255,255,255,0.25)"/>
              <circle cx="54" cy="30" r="2"   fill="rgba(255,255,255,0.2)"/>
              <circle cx="44" cy="28" r="1.8" fill="rgba(255,255,255,0.22)"/>
              <circle cx="58" cy="38" r="2"   fill="rgba(255,255,255,0.18)"/>
              <path d="M 38,8 Q 55,35 65,58" stroke="rgba(99,211,161,0.3)" stroke-width="0.8" stroke-dasharray="2,2" fill="none"/>
              <text x="14" y="68" style="font-family:'JetBrains Mono',monospace;font-size:4px;fill:rgba(99,211,161,0.6);">Baixo risco</text>
              <text x="66" y="10" style="font-family:'JetBrains Mono',monospace;font-size:4px;fill:rgba(226,248,27,0.6);">Alto risco</text>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- ══ DIVIDER ══ -->
    <div class="divider visible">
      <div class="divider-badge">=</div>
    </div>

    <!-- ══ RIGHT: Gestão de Contratos ══ -->
    <div class="col r2" v-click>
      <div class="col-header">
        <div class="col-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
        </div>
        <div>
          <div class="col-title">Gestão de contratos</div>
          <div class="col-subtitle">Contratos densos, anexos, versões e cláusulas</div>
          <div class="col-title-line col-title-line-h" />
        </div>
      </div>

      <div class="artifacts">
        <!-- Contract + clauses -->
        <div class="artifact" style="grid-row: span 2;">
          <div class="artifact-title">Contrato</div>
          <div class="contract-card">
            <div class="contract-title">CONTRATO</div>
            <div class="contract-lines">
              <div class="c-line" /><div class="c-line s" />
              <div class="c-line" /><div class="c-line" />
              <div class="c-line xs" /><div class="c-line" />
              <div class="c-line s" /><div class="c-line" />
            </div>
            <div class="contract-footer">
              <div class="contract-seal">
                <svg viewBox="0 0 12 12" fill="none" width="10" height="10">
                  <circle cx="6" cy="6" r="4" stroke="rgba(99,211,161,0.5)" stroke-width="0.8"/>
                  <circle cx="6" cy="6" r="1.5" fill="rgba(99,211,161,0.3)"/>
                </svg>
              </div>
              <div class="contract-sig">Assinado digitalmente</div>
            </div>
          </div>
          <div class="clauses-panel">
            <div class="clauses-title">Cláusulas</div>
            <div class="clause-item"><div class="clause-dot" />Obrigações<div class="clause-bar"><div class="clause-bar-fill" style="width:85%" /></div></div>
            <div class="clause-item"><div class="clause-dot" />Penalidades<div class="clause-bar"><div class="clause-bar-fill" style="width:60%" /></div></div>
            <div class="clause-item"><div class="clause-dot" />Confidencialidade<div class="clause-bar"><div class="clause-bar-fill" style="width:45%" /></div></div>
            <div class="clause-item"><div class="clause-dot" />Rescisão<div class="clause-bar"><div class="clause-bar-fill" style="width:70%" /></div></div>
            <div class="clause-item"><div class="clause-dot" />Indenização<div class="clause-bar"><div class="clause-bar-fill" style="width:30%" /></div></div>
          </div>
        </div>

        <!-- Versions -->
        <div class="artifact">
          <div class="artifact-title">Versões</div>
          <div class="version-row"><div class="version-dot version-dot-current" /><span class="version-tag version-tag-current">v3.0</span><span class="version-date">20/05/2025</span></div>
          <div class="version-row"><div class="version-dot version-dot-old" /><span class="version-tag">v2.1</span><span class="version-date">10/04/2025</span></div>
          <div class="version-row"><div class="version-dot version-dot-old" /><span class="version-tag">v2.0</span><span class="version-date">15/03/2025</span></div>
          <div class="version-row"><div class="version-dot version-dot-old" /><span class="version-tag">v1.0</span><span class="version-date">01/02/2025</span></div>
        </div>

        <!-- Annexes -->
        <div class="artifact">
          <div class="artifact-title">Anexos</div>
          <div class="annexes">
            <div v-for="(a, i) in annexes" :key="i" class="annex-item">
              <div class="annex-icon">
                <svg viewBox="0 0 16 16" fill="none" stroke="var(--rf-primary)" stroke-width="1.2">
                  <path d="M9 2H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6z"/>
                  <polyline points="9 2 9 6 13 6"/>
                </svg>
              </div>
              <div>
                <div class="annex-row">
                  <span class="annex-pdf">PDF</span>
                  <span class="annex-name">{{ a.name }}</span>
                </div>
                <div class="annex-desc">{{ a.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const annexes = [
  { name: 'Anexo I',   desc: 'Escopo do serviço' },
  { name: 'Anexo II',  desc: 'Tabela de Preços' },
  { name: 'Anexo III', desc: 'SLA de Atendimento' },
]
</script>

<style scoped>
/* ─── Root ─────────────────────────────────────────── */
.datavscontract-root {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  font-family: "Space Grotesk", sans-serif;
  padding: 1.5rem 0;
}

/* ─── Columns ───────────────────────────────────────── */
.col {
  position: relative; z-index: 1;
  display: flex; flex-direction: column;
  padding: 0.5rem 1rem;
  gap: 0.4rem;
  min-width: 0;
}
.col-left { border-right: 1px solid var(--rf-border-primary); }

/* ─── Header ────────────────────────────────────────── */
.col-header { display: flex; align-items: center; gap: 0.6rem; flex-shrink: 0; }
.col-icon {
  width: 34px; height: 34px; flex-shrink: 0;
  background: var(--rf-surface-secondary);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
}
.col-icon svg { width: 18px; height: 18px; }

.col-title {
  font-size: 1rem; font-weight: 800;
  letter-spacing: -0.02em; color: var(--rf-text-primary); line-height: 1;
}
.col-subtitle {
  font-size: 0.6rem; font-weight: 600;
  color: var(--rf-primary); line-height: 1.2; margin-top: 1px;
  letter-spacing: -0.01em;
}
.col-title-line {
  height: 2px; width: 100%; margin-top: 2px;
  background: linear-gradient(90deg, var(--rf-primary), transparent);
  border-radius: 2px;
}
.col-title-line-h {
  background: linear-gradient(90deg, var(--rf-primary), transparent);
}

/* ─── Artifacts grid ────────────────────────────────── */
.artifacts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4rem;
  margin-top: 0.2rem;
}
.artifact {
  background: var(--rf-surface-primary);
  border: 1px solid var(--rf-border-primary);
  border-radius: 8px;
  padding: 0.4rem 0.5rem;
  display: flex; flex-direction: column; gap: 0.25rem;
  position: relative; overflow: hidden;
}
.artifact::before {
  content: ""; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, var(--rf-primary), transparent);
  opacity: 0.3;
}
.artifact-title {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.44rem; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--rf-primary); opacity: 0.8; flex-shrink: 0;
}

/* ─── Data table ────────────────────────────────────── */
.data-table { width: 100%; border-collapse: collapse; }
.data-table th {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.36rem; font-weight: 700;
  color: var(--rf-text-muted); letter-spacing: 0.08em; text-transform: uppercase;
  padding: 1px 2px; border-bottom: 1px solid var(--rf-border-primary); text-align: right;
}
.data-table th:first-child { text-align: left; }
.data-table td {
  font-family: "JetBrains Mono", monospace; font-size: 0.4rem;
  color: var(--rf-text-secondary); padding: 1px 2px;
  text-align: right; border-bottom: 1px solid var(--rf-border-primary);
}
.data-table td:first-child { text-align: left; color: var(--rf-text-muted); }
.data-table tr:last-child td { border-bottom: none; }
.data-table td.accent { color: var(--rf-primary); font-weight: 600; }

/* ─── Code block ────────────────────────────────────── */
.code-block {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.36rem; line-height: 1.7;
  color: var(--rf-text-muted); flex: 1;
}
.code-kw  { color: var(--rf-primary); }
.code-fn  { color: color-mix(in srgb, var(--rf-primary) 70%, transparent); }
.code-str { color: color-mix(in srgb, var(--rf-highlight) 60%, transparent); }
.code-cm  { color: rgba(255,255,255,0.2); }

/* ─── Scatter ───────────────────────────────────────── */
.scatter-wrap { position: relative; height: 85px; }
.scatter-svg  { width: 100%; height: 100%; }

/* ─── Contract card ─────────────────────────────────── */
.contract-card {
  background: var(--rf-surface-secondary);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 5px; padding: 0.35rem 0.5rem;
}
.contract-title {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.44rem; font-weight: 700; letter-spacing: 0.12em;
  color: var(--rf-text-primary); text-align: center;
  margin-bottom: 0.25rem; padding-bottom: 0.15rem;
  border-bottom: 1px solid var(--rf-border-secondary);
}
.contract-lines { display: flex; flex-direction: column; gap: 2px; margin-bottom: 0.25rem; }
.c-line { height: 1.5px; border-radius: 1px; background: var(--rf-border-secondary); }
.c-line.s  { width: 75%; }
.c-line.xs { width: 50%; }
.contract-footer { display: flex; align-items: center; gap: 0.3rem; }
.contract-seal {
  width: 14px; height: 14px; border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--rf-primary) 30%, transparent);
  display: flex; align-items: center; justify-content: center;
}
.contract-sig {
  font-size: 0.44rem; font-style: italic; font-weight: 300;
  color: var(--rf-text-muted);
}

/* ─── Clauses panel ─────────────────────────────────── */
.clauses-panel {
  background: var(--rf-surface-primary);
  border: 1px solid var(--rf-border-primary);
  border-radius: 6px; padding: 0.3rem 0.4rem; margin-top: 0.2rem;
}
.clauses-title {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.38rem; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--rf-text-muted); margin-bottom: 0.2rem;
  padding-bottom: 0.15rem; border-bottom: 1px solid var(--rf-border-primary);
}
.clause-item {
  display: flex; align-items: center; gap: 0.3rem;
  padding: 1px 0; font-size: 0.44rem;
  color: var(--rf-text-secondary);
  border-bottom: 1px solid var(--rf-border-primary);
}
.clause-item:last-child { border-bottom: none; }
.clause-dot {
  width: 2px; height: 2px; border-radius: 50%;
  background: var(--rf-primary); flex-shrink: 0;
}
.clause-bar {
  margin-left: auto; height: 2px; width: 16px;
  border-radius: 1px; background: var(--rf-border-secondary);
  position: relative; overflow: hidden;
}
.clause-bar-fill {
  position: absolute; left: 0; top: 0; height: 100%;
  background: var(--rf-primary); border-radius: 1px; opacity: 0.6;
}

/* ─── Versions ──────────────────────────────────────── */
.version-row {
  display: flex; align-items: center; gap: 0.35rem; padding: 1px 0;
  font-family: "JetBrains Mono", monospace; font-size: 0.4rem;
  border-bottom: 1px solid var(--rf-border-primary);
}
.version-row:last-child { border-bottom: none; }
.version-dot { width: 4px; height: 4px; border-radius: 50%; flex-shrink: 0; }
.version-dot-current { background: var(--rf-primary); }
.version-dot-old { background: var(--rf-border-secondary); }
.version-tag { color: var(--rf-text-secondary); font-weight: 700; min-width: 20px; }
.version-tag-current { color: var(--rf-primary); }
.version-date { color: var(--rf-text-muted); font-size: 0.38rem; }

/* ─── Annexes ───────────────────────────────────────── */
.annexes { display: flex; flex-direction: column; gap: 0.2rem; }
.annex-item {
  display: flex; align-items: center; gap: 0.35rem;
  background: var(--rf-surface-primary);
  border: 1px solid var(--rf-border-primary);
  border-radius: 5px; padding: 0.25rem 0.4rem;
}
.annex-icon {
  width: 20px; height: 20px; flex-shrink: 0;
  background: var(--rf-surface-secondary);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 4px;
  display: flex; align-items: center; justify-content: center;
}
.annex-icon svg { width: 11px; height: 11px; }
.annex-row { display: flex; gap: 2px; align-items: center; }
.annex-pdf {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.3rem; font-weight: 700;
  color: var(--rf-highlight); letter-spacing: 0.04em;
}
.annex-name { font-size: 0.46rem; font-weight: 700; color: var(--rf-text-secondary); }
.annex-desc { font-size: 0.38rem; color: var(--rf-text-muted); }

/* ─── Divider ───────────────────────────────────────── */
.divider {
  position: relative; z-index: 1;
  display: flex; align-items: center; justify-content: center;
  width: 2px;
}
.divider::before {
  content: ""; position: absolute; top: 8%; bottom: 8%; left: 0; width: 1px;
  background: linear-gradient(180deg, transparent, var(--rf-border-secondary) 30%, var(--rf-border-secondary) 70%, transparent);
}
.divider.visible::after {
  content: ""; position: absolute; top: 8%; bottom: 8%; left: 0; width: 1px;
  background: linear-gradient(180deg, transparent, var(--rf-primary) 30%, var(--rf-primary) 70%, transparent);
  filter: blur(2px); opacity: 0.6;
  animation: dp 3s ease-in-out infinite;
}
@keyframes dp { 0%,100%{opacity:.35;} 50%{opacity:.8;} }

.divider-badge {
  position: absolute;
  width: 24px; height: 24px;
  background: var(--rf-bg-soft, #171919);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.48rem; font-weight: 700;
  color: var(--rf-text-muted); letter-spacing: 0.04em;
  box-shadow: 0 0 10px var(--rf-glow);
  z-index: 2;
}

/* ─── Reveal animations ─────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); filter: blur(4px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}
.r1 { opacity: 0; animation: fadeUp 0.9s var(--rf-ease, cubic-bezier(0.22,1,0.36,1)) 0.1s  forwards; }
.r2 { opacity: 0; animation: fadeUp 0.9s var(--rf-ease, cubic-bezier(0.22,1,0.36,1)) 0.05s forwards; }
</style>