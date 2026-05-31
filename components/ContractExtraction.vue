<template>
  <div class="slide-root">

    <!-- ══ LEFT: PDF ══ -->
    <div class="pdf-col r1">
      <div class="doc-stack">
        <div class="doc-shadow doc-shadow-1" />
        <div class="doc-shadow doc-shadow-2" />

        <div class="doc-card">
          <div class="doc-title">
            <span class="pdf-badge">PDF</span>
            Contrato de Prestação de Serviços
          </div>

          <div class="clause-head">Cláusula Terceira – Do Objeto</div>
          <div class="clause-body">3.1. O presente contrato tem por objeto a prestação de serviços especializados, nos termos e condições aqui estabelecidos, obrigando-se as partes por si e sucessores, a qualquer título.</div>

          <div class="clause-head">Cláusula Sexta – Do Prazo</div>
          <div class="clause-body">6.1. O prazo de vigência do presente instrumento será de <span class="hl" data-n="1">12 (doze) meses</span>, contados da data de sua assinatura, podendo ser prorrogado por iguais e sucessivos períodos, mediante acordo entre as partes.</div>

          <div class="clause-head">Cláusula Oitava – Do Reajuste</div>
          <div class="clause-body">8.1. O valor contratado será <span class="hl" data-n="2">reajustado anualmente</span>, de acordo com a variação acumulada do <span class="hl" data-n="3">IPCA/IBGE</span>, ou outro índice que venha a substituí-lo, mediante simples apostilamento.</div>

          <div class="clause-head">Cláusula Décima – Da Multa</div>
          <div class="clause-body">10.1. Em caso de inadimplemento, a parte infratora ficará sujeita à multa moratória de <span class="hl" data-n="4">2% (dois por cento)</span> sobre o valor devido, por dia de atraso, <span class="hl" data-n="5">limitada a 20% (vinte por cento)</span> do valor total do contrato, sem prejuízo das demais penalidades cabíveis.</div>

          <div class="clause-head">Cláusula Décima Terceira – Da Rescisão</div>
          <div class="clause-body">13.1. O presente contrato poderá ser rescindido de pleno direito, independentemente de notificação judicial ou extrajudicial, nas hipóteses previstas em lei e neste instrumento.</div>

          <div class="clause-ellipsis">...</div>
        </div>
      </div>

    </div>

    <!-- ══ RIGHT: Extracted Fields ══ -->
    <div class="fields-col">

      <!-- 1 → "12 meses" -->
      <div class="field-card field-card-active fc1">
        <div class="field-icon field-icon-h">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--rf-highlight)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        <div class="field-body">
          <span class="field-label">Vigência</span>
          <span class="field-value field-value-h">12 meses</span>
        </div>
        <div class="field-badge">1</div>
      </div>

      <!-- 2 → "reajustado anualmente" -->
      <div class="field-card field-card-active fc2">
        <div class="field-icon field-icon-h">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--rf-highlight)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
            <polyline points="17 6 23 6 23 12"/>
          </svg>
        </div>
        <div class="field-body">
          <span class="field-label">Reajuste</span>
          <span class="field-value field-value-h">Anual</span>
        </div>
        <div class="field-badge">2</div>
      </div>

      <!-- 3 → "IPCA/IBGE" -->
      <div class="field-card field-card-active fc3">
        <div class="field-icon field-icon-h">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--rf-highlight)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"/>
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6"  y1="20" x2="6"  y2="14"/>
          </svg>
        </div>
        <div class="field-body">
          <span class="field-label">Índice</span>
          <span class="field-value field-value-h">IPCA/IBGE</span>
        </div>
        <div class="field-badge">3</div>
      </div>

      <!-- 4 → "2% (dois por cento)" -->
      <div class="field-card field-card-active fc4">
        <div class="field-icon field-icon-h">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--rf-highlight)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="5" x2="5" y2="19"/>
            <circle cx="6.5" cy="6.5" r="2.5"/>
            <circle cx="17.5" cy="17.5" r="2.5"/>
          </svg>
        </div>
        <div class="field-body">
          <span class="field-label">Multa</span>
          <span class="field-value field-value-h">2% ao dia</span>
        </div>
        <div class="field-badge">4</div>
      </div>

      <!-- 5 → "limitada a 20%" -->
      <div class="field-card field-card-active fc5">
        <div class="field-icon field-icon-h">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--rf-highlight)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div class="field-body">
          <span class="field-label">Teto</span>
          <span class="field-value field-value-h">20% do total</span>
        </div>
        <div class="field-badge">5</div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
// Standalone — no props needed
</script>

<style scoped>
/* ─── Root ─────────────────────────────────────────── */
.slide-root {
  position: relative;
  width: 100%; height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: "Space Grotesk", sans-serif;
  overflow: hidden;
}

/* ─── LEFT: PDF column ──────────────────────────────── */
.pdf-col {
  position: relative; z-index: 1;
  display: flex; align-items: flex-start; justify-content: center;
  padding: 1.4rem 1rem 0;
  border-right: 1px solid var(--rf-border-primary);
}

.doc-stack { position: relative; width: 100%; max-width: 320px; }

.doc-shadow {
  position: absolute;
  border-radius: 6px;
  border: 1px solid var(--rf-border-primary);
  background: var(--rf-surface-primary);
}
.doc-shadow-1 { inset: 0; transform: rotate(3deg)   translate(8px, 6px); }
.doc-shadow-2 { inset: 0; transform: rotate(1.5deg) translate(4px, 3px); }

.doc-card {
  position: relative;
  background: rgba(255,255,255,0.07);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 6px;
  padding: 0.45rem 0.9rem;
  font-size: 0.44rem;
  line-height: 1.5;
  color: var(--rf-text-secondary);
}
.doc-card::before {
  content: ""; position: absolute; inset: 0; border-radius: 6px;
  background: radial-gradient(ellipse at 50% 30%, rgba(99,211,161,0.08) 0%, transparent 65%);
  pointer-events: none;
}

.doc-title {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.44rem; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--rf-text-primary); text-align: center;
  margin-bottom: 0.35rem; padding-bottom: 0.25rem;
  border-bottom: 1px solid var(--rf-border-primary);
}

.pdf-badge {
  display: inline-block;
  background: color-mix(in srgb, var(--rf-primary) 75%, transparent);
  color: #0a1a10;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.42rem; font-weight: 800;
  padding: 1px 5px; border-radius: 3px;
  letter-spacing: 0.04em; margin-right: 5px;
}

.clause-head {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.40rem; font-weight: 700;
  letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--rf-text-muted);
  margin-top: 0.35rem; margin-bottom: 0.10rem;
}

.clause-body { font-size: 0.42rem; line-height: 1.5; }

.clause-ellipsis {
  margin-top: 0.3rem;
  color: var(--rf-text-muted);
  font-family: "JetBrains Mono", monospace;
  font-size: 0.4rem;
}

/* ─── Highlights ────────────────────────────────────── */
.hl {
  background: color-mix(in srgb, var(--rf-highlight) 18%, transparent);
  border: 1px solid color-mix(in srgb, var(--rf-highlight) 55%, transparent);
  border-radius: 2px;
  color: color-mix(in srgb, var(--rf-highlight) 95%, transparent);
  font-weight: 700;
  padding: 0 2px;
  position: relative;
}
.hl::after {
  content: attr(data-n);
  position: absolute;
  top: -7px; right: -6px;
  width: 10px; height: 10px;
  background: color-mix(in srgb, var(--rf-highlight) 90%, transparent);
  color: var(--rf-bg, #131414);
  border-radius: 50%;
  font-size: 0.34rem; font-weight: 800;
  display: flex; align-items: center; justify-content: center;
  font-family: "JetBrains Mono", monospace;
  line-height: 10px; text-align: center;
}


/* ─── RIGHT: Fields column ──────────────────────────── */
.fields-col {
  position: relative; z-index: 1;
  display: flex; flex-direction: column;
  justify-content: flex-start;
  padding: 1.4rem 1.2rem 0;
  gap: 0.3rem;
}

/* ─── Field card ────────────────────────────────────── */
.field-card {
  display: flex; align-items: center; gap: 0.55rem;
  background: var(--rf-surface-primary);
  border: 1px solid var(--rf-border-primary);
  border-radius: 10px;
  padding: 0.35rem 0.7rem;
  position: relative; overflow: hidden;
}
.field-card::before {
  content: ""; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, var(--rf-primary), transparent);
  opacity: 0;
}
.field-card-active {
  border-color: color-mix(in srgb, var(--rf-highlight) 45%, transparent);
  background: color-mix(in srgb, var(--rf-highlight) 5%, var(--rf-surface-primary));
}
.field-card-active::before {
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--rf-highlight) 50%, transparent), transparent);
  opacity: 1;
}

/* ─── Field icon ────────────────────────────────────── */
.field-icon {
  width: 34px; height: 34px; flex-shrink: 0;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
}
.field-icon svg { width: 17px; height: 17px; }
.field-icon-p {
  background: color-mix(in srgb, var(--rf-primary)   8%, transparent);
  border: 1px solid color-mix(in srgb, var(--rf-primary)   20%, transparent);
}
.field-icon-h {
  background: color-mix(in srgb, var(--rf-highlight) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--rf-highlight) 30%, transparent);
}

/* ─── Field body ────────────────────────────────────── */
.field-body {
  flex: 1; display: flex;
  align-items: center; justify-content: space-between;
  gap: 0.5rem;
}
.field-label {
  font-size: 0.68rem; font-weight: 700;
  color: var(--rf-text-secondary); letter-spacing: -0.01em;
  white-space: nowrap;
}
.field-value {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.62rem; font-weight: 700;
  color: var(--rf-primary);
  text-align: right; line-height: 1.3;
}
.field-value-h { color: color-mix(in srgb, var(--rf-highlight) 95%, transparent); }

/* ─── Field badge ───────────────────────────────────── */
.field-badge {
  width: 17px; height: 17px; flex-shrink: 0;
  background: color-mix(in srgb, var(--rf-highlight) 15%, transparent);
  border: 1px solid color-mix(in srgb, var(--rf-highlight) 40%, transparent);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.46rem; font-weight: 800;
  color: color-mix(in srgb, var(--rf-highlight) 90%, transparent);
}

/* ─── Reveal animations ─────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); filter: blur(3px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}
.r1  { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.10s forwards; }
.r2  { opacity: 0; animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.25s forwards; }
.fc1 { opacity: 0; animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.40s forwards; }
.fc2 { opacity: 0; animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.55s forwards; }
.fc3 { opacity: 0; animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.70s forwards; }
.fc4 { opacity: 0; animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.85s forwards; }
.fc5 { opacity: 0; animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 1.00s forwards; }
</style>