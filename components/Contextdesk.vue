<template>
  <div class="contextdesk-root">

    <!-- ── BODY ── -->
    <div class="body-row">

      <!-- Left: subtitle -->
      <div class="left-col rf-reveal-2">
        <div class="table-icon">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="14" width="40" height="6" rx="3" fill="none" stroke="var(--rf-primary)" stroke-width="2"/>
            <rect x="8"  y="20" width="4"  height="18" rx="2" fill="none" stroke="var(--rf-primary)" stroke-width="2"/>
            <rect x="36" y="20" width="4"  height="18" rx="2" fill="none" stroke="var(--rf-primary)" stroke-width="2"/>
          </svg>
        </div>
        <p class="subtitle">
          Tudo que ela usa precisa estar
          <span class="accent">em cima da mesa</span>
          ao mesmo tempo.
        </p>
      </div>

      <!-- Center: the desk -->
      <div class="desk-wrap rf-reveal-3">

        <!-- Desk surface -->
        <div class="desk-surface">

          <!-- Corner warning indicators -->
          <span class="corner corner-tl" />
          <span class="corner corner-tr" />
          <span class="corner corner-bl" />
          <span class="corner corner-br" />

          <!-- JANELA DE CONTEXTO label -->
          <div class="desk-label">
            <span class="label-line" />
            <span class="label-text">JANELA DE CONTEXTO</span>
            <span class="label-line" />
          </div>

          <!-- Three panels -->
          <div class="panels">

            <!-- Panel 1: Documents -->
            <div class="panel panel-docs">
              <div class="panel-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect x="6" y="3" width="16" height="20" rx="2" stroke="var(--rf-primary)" stroke-width="1.5"/>
                  <path d="M10 9h8M10 13h8M10 17h5" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linecap="round"/>
                  <rect x="10" y="7" width="12" height="16" rx="2" fill="var(--rf-surface-primary)" stroke="var(--rf-border-secondary)" stroke-width="1"/>
                </svg>
              </div>
              <div class="panel-title">Documentos</div>
              <div class="doc-stack">
                <div class="doc doc-3" />
                <div class="doc doc-2" />
                <div class="doc doc-1">
                  <div class="doc-line" />
                  <div class="doc-line short" />
                  <div class="doc-line" />
                  <div class="doc-line short" />
                  <div class="doc-line" />
                  <div class="doc-highlight" />
                  <div class="doc-line" />
                </div>
                <div class="pdf-badge">PDF</div>
              </div>
            </div>

            <!-- Panel 2: Chat history -->
            <div class="panel panel-chat">
              <div class="panel-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect x="3" y="5" width="26" height="18" rx="3" stroke="var(--rf-primary)" stroke-width="1.5"/>
                  <path d="M8 28l4-5h8" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 12h6M9 16h10" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
                </svg>
              </div>
              <div class="panel-title">Histórico da conversa</div>
              <div class="chat-messages">
                <div class="msg msg-user">
                  <span class="msg-who">Você</span>
                  <span class="msg-text">Qual o prazo de vigência?</span>
                </div>
                <div class="msg msg-ai">
                  <span class="msg-who ai">IA</span>
                  <span class="msg-text">O prazo é de 12 meses...</span>
                </div>
                <div class="msg msg-user">
                  <span class="msg-who">Você</span>
                  <span class="msg-text">Existe previsão de reajuste?</span>
                </div>
                <div class="msg msg-ai">
                  <span class="msg-who ai">IA</span>
                  <span class="msg-text">Sim, reajuste anual pelo IPCA.</span>
                </div>
                <div class="msg msg-user">
                  <span class="msg-who">Você</span>
                  <span class="msg-text">Qual a multa por atraso no pagamento?</span>
                </div>
              </div>
            </div>

            <!-- Panel 3: Current question -->
            <div class="panel panel-question">
              <div class="panel-icon panel-icon-highlight">
                <svg viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="12" stroke="var(--rf-highlight)" stroke-width="1.5"/>
                  <path d="M13 12.5c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.5-1 2.3-2 2.8-.9.5-1 .8-1 1.7" stroke="var(--rf-highlight)" stroke-width="1.5" stroke-linecap="round"/>
                  <circle cx="16" cy="22" r="1" fill="var(--rf-highlight)"/>
                </svg>
              </div>
              <div class="panel-title highlight">Pergunta atual</div>
              <div class="question-box">
                <div class="question-icon">?</div>
                <p class="question-text">Qual a multa<br />por atraso no<br />pagamento?</p>
              </div>
            </div>

          </div><!-- /panels -->

          <!-- Warning icons bottom -->
          <div class="warnings">
            <span class="warn">⚠</span>
            <span class="warn">⚠</span>
            <span class="warn">⚠</span>
          </div>

        </div><!-- /desk-surface -->

      </div><!-- /desk-wrap -->

    </div><!-- /body-row -->


  </div>
</template>

<script setup lang="ts">
// Standalone logic removed to support standard Markdown H1
</script>

<style scoped>
/* ─── Root ─────────────────────────────────────────────
   Now behaves as a regular block element
──────────────────────────────────────────────────────── */
.contextdesk-root {
  position: relative;
  width: 100%;
  font-family: "Space Grotesk", sans-serif;
  display: flex;
  flex-direction: column;
  padding: 3rem 0 1rem;
  gap: 1.2rem;
}

/* ─── Z-index baseline ──────────────────────────────── */
.body-row, .tagline,
.left-col, .desk-wrap {
  position: relative;
  z-index: 1;
}

/* ─── Body row ──────────────────────────────────────── */
.body-row {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  min-height: 0;
}

/* ─── Left col ──────────────────────────────────────── */
.left-col {
  flex: 0 0 220px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}

.table-icon {
  width: 52px; height: 52px;
  background: var(--rf-surface-primary);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
.table-icon svg { width: 100%; height: 100%; }

.subtitle {
  font-size: 1rem;
  line-height: 1.65;
  color: var(--rf-text-secondary);
  margin: 0;
}
.accent { color: var(--rf-primary); font-weight: 600; }

/* ─── Desk wrap ─────────────────────────────────────── */
.desk-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

/* ─── Desk surface ──────────────────────────────────── */
.desk-surface {
  width: 100%;
  background: var(--rf-surface-primary);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 20px;
  box-shadow:
    0 0 0 1px var(--rf-border-primary),
    0 0 40px var(--rf-glow),
    inset 0 1px 0 var(--rf-border-primary);
  padding: 1.2rem 1.4rem 1rem;
  position: relative;
  backdrop-filter: blur(20px);
}

/* Scanning line */
.desk-surface::before {
  content: "";
  position: absolute;
  left: 0; right: 0; top: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--rf-primary), transparent);
  animation: scan 3s ease-in-out infinite;
  border-radius: 20px;
  opacity: 0.5;
}
@keyframes scan {
  0%   { top: 0%;   opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

/* ─── Corners ───────────────────────────────────────── */
.corner {
  position: absolute;
  width: 14px; height: 14px;
  border-color: var(--rf-highlight);
  border-style: solid;
  opacity: 0.7;
}
.corner-tl { top: -1px;    left: -1px;  border-width: 2px 0 0 2px; border-radius: 4px 0 0 0; }
.corner-tr { top: -1px;    right: -1px; border-width: 2px 2px 0 0; border-radius: 0 4px 0 0; }
.corner-bl { bottom: -1px; left: -1px;  border-width: 0 0 2px 2px; border-radius: 0 0 0 4px; }
.corner-br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; border-radius: 0 0 4px 0; }

/* ─── Desk label ────────────────────────────────────── */
.desk-label {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  justify-content: center;
  margin-top: 0.5rem;
  margin-bottom: 0.9rem;
}
.label-text {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.65rem;
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

/* ─── Three panels ──────────────────────────────────── */
.panels {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 0.75rem;
}

.panel {
  background: var(--rf-surface-primary);
  border: 1px solid var(--rf-border-primary);
  border-radius: 14px;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 160px;
  transition: border-color 0.3s var(--rf-ease);
}
.panel:hover {
  border-color: var(--rf-border-secondary);
}

.panel-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px; height: 36px;
  background: var(--rf-surface-secondary);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 10px;
  margin: 0 auto;
}
.panel-icon svg { width: 26px; height: 26px; }

/* Highlight variant for question panel icon */
.panel-icon-highlight {
  background: color-mix(in srgb, var(--rf-highlight) 8%, transparent);
  border-color: color-mix(in srgb, var(--rf-highlight) 25%, transparent);
}

.panel-title {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--rf-text-primary);
  text-align: center;
}
.panel-title.highlight { color: var(--rf-highlight); }

/* ─── Doc stack ─────────────────────────────────────── */
.doc-stack {
  position: relative;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.doc {
  position: absolute;
  width: 72px;
  background: var(--rf-surface-secondary);
  border: 1px solid var(--rf-border-primary);
  border-radius: 4px;
}
.doc-3 { height: 72px; bottom: 0; left: 50%; transform: translateX(-50%) rotate(-5deg) translateX(-4px); opacity: 0.4; }
.doc-2 { height: 76px; bottom: 0; left: 50%; transform: translateX(-50%) rotate(-2deg) translateX(-1px); opacity: 0.6; }
.doc-1 {
  height: 80px; bottom: 0; left: 50%;
  transform: translateX(-50%);
  background: var(--rf-surface-secondary);
  border-color: var(--rf-border-secondary);
  padding: 6px 7px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  z-index: 2;
}
.doc-line {
  height: 2px;
  background: var(--rf-border-secondary);
  border-radius: 2px;
}
.doc-line.short { width: 60%; }
.doc-highlight {
  height: 2px;
  background: var(--rf-primary);
  border-radius: 2px;
  opacity: 0.8;
}
.pdf-badge {
  position: absolute;
  top: 4px; right: 4px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.5rem;
  font-weight: 700;
  background: var(--rf-highlight);
  color: var(--rf-bg);
  padding: 1px 5px;
  border-radius: 3px;
  letter-spacing: 0.05em;
  z-index: 3;
}

/* ─── Chat messages ─────────────────────────────────── */
.chat-messages {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  flex: 1;
  overflow: hidden;
}
.msg {
  display: flex;
  gap: 0.35rem;
  align-items: flex-start;
}
.msg-who {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.52rem;
  font-weight: 700;
  color: var(--rf-text-muted);
  white-space: nowrap;
  padding-top: 1px;
  min-width: 28px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.msg-who.ai { color: var(--rf-primary); }
.msg-text {
  font-size: 0.6rem;
  color: var(--rf-text-secondary);
  line-height: 1.4;
}
.msg-ai .msg-text { color: var(--rf-primary); opacity: 0.75; }

/* ─── Question panel ────────────────────────────────── */
.panel-question {
  border-color: color-mix(in srgb, var(--rf-highlight) 25%, transparent);
  background: color-mix(in srgb, var(--rf-highlight) 4%, var(--rf-surface-primary));
  box-shadow: 0 0 20px color-mix(in srgb, var(--rf-highlight) 6%, transparent);
}
.question-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid color-mix(in srgb, var(--rf-highlight) 30%, transparent);
  border-radius: 10px;
  padding: 0.6rem;
  background: color-mix(in srgb, var(--rf-highlight) 4%, transparent);
  animation: pulse-border 2.5s ease-in-out infinite;
}
@keyframes pulse-border {
  0%, 100% {
    border-color: color-mix(in srgb, var(--rf-highlight) 30%, transparent);
    box-shadow: 0 0 8px color-mix(in srgb, var(--rf-highlight) 6%, transparent);
  }
  50% {
    border-color: color-mix(in srgb, var(--rf-highlight) 70%, transparent);
    box-shadow: 0 0 18px color-mix(in srgb, var(--rf-highlight) 15%, transparent);
  }
}
.question-icon {
  font-size: 1.4rem;
  color: var(--rf-highlight);
  font-weight: 800;
  line-height: 1;
}
.question-text {
  font-size: 0.62rem;
  font-weight: 700;
  color: var(--rf-text-primary);
  text-align: center;
  line-height: 1.5;
  margin: 0;
}

/* ─── Warnings ──────────────────────────────────────── */
.warnings {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 0.75rem;
  padding: 0.5rem 0 0;
}
.warn {
  color: var(--rf-highlight);
  font-size: 0.85rem;
  opacity: 0.75;
  animation: blink 2s ease-in-out infinite;
  text-align: center;
}
.warn:nth-child(2) { animation-delay: 0.7s; }
.warn:nth-child(3) { animation-delay: 1.4s; }
@keyframes blink {
  0%, 100% { opacity: 0.75; }
  50%       { opacity: 0.20; }
}

/* ─── Overflow zone ─────────────────────────────────── */
.overflow-zone {
  width: 100%;
  border: 1px dashed var(--rf-border-primary);
  border-top: none;
  border-radius: 0 0 12px 12px;
  padding: 0.35rem 1rem;
  display: flex;
  justify-content: center;
}
.overflow-text {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.58rem;
  color: var(--rf-text-muted);
  letter-spacing: 0.08em;
}

/* ─── Tagline ────────────────────────────────────────── */
.tagline {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 700;
  color: var(--rf-text-primary);
  letter-spacing: -0.02em;
  text-align: center;
  padding-top: 0.4rem;
}

/* ─── Reveal animations ─────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); filter: blur(6px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}
.rf-reveal-1 { opacity: 0; animation: fadeUp 0.9s var(--rf-ease, cubic-bezier(0.22,1,0.36,1)) 0.1s forwards; }
.rf-reveal-2 { opacity: 0; animation: fadeUp 0.9s var(--rf-ease, cubic-bezier(0.22,1,0.36,1)) 0.3s forwards; }
.rf-reveal-3 { opacity: 0; animation: fadeUp 0.9s var(--rf-ease, cubic-bezier(0.22,1,0.36,1)) 0.5s forwards; }
</style>