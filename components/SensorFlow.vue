<template>
  <div class="sensor-root rf-reveal-2">
    <div class="sensor-surface">
      <span class="corner corner-tl" /><span class="corner corner-tr" />
      <span class="corner corner-bl" /><span class="corner corner-br" />

      <div class="flow-label">
        <span class="label-line" />
        <span class="label-text">MACHINE LEARNING · MONITORAMENTO DE EQUIPAMENTO</span>
        <span class="label-line" />
      </div>

      <div class="stations">

        <!-- Station 1: Sensor -->
        <div class="station">
          <div class="station-icon">
            <svg viewBox="0 0 120 60" class="wave-svg">
              <path
                d="M0 30 Q 7.5 8, 15 30 T 30 30 T 45 30 T 60 30 T 75 30 T 90 30 T 105 30 T 120 30"
                fill="none" stroke="var(--rf-primary)" stroke-width="2" class="wave-path" />
              <path
                d="M0 30 Q 7.5 8, 15 30 T 30 30 T 45 30 T 60 30 T 75 30 T 90 30 T 105 30 T 120 30"
                fill="none" stroke="var(--rf-primary)" stroke-width="2" opacity="0.25" />
            </svg>
          </div>
          <div class="station-name">SENSOR</div>
          <div class="station-desc">vibração, temperatura, pressão (o dado bruto)</div>
        </div>

        <div class="flow-arrow">
          <svg viewBox="0 0 60 20">
            <line x1="2" y1="10" x2="46" y2="10" stroke="var(--rf-primary)" stroke-width="2" class="arrow-line" />
            <path d="M44 4 L56 10 L44 16" fill="none" stroke="var(--rf-primary)" stroke-width="2" stroke-linejoin="round" />
          </svg>
        </div>

        <!-- Station 2: Model -->
        <div class="station">
          <div class="station-icon">
            <svg viewBox="0 0 120 60">
              <g stroke="var(--rf-primary)" stroke-width="1" opacity="0.5">
                <line x1="30" y1="15" x2="60" y2="20" /><line x1="30" y1="15" x2="60" y2="40" />
                <line x1="30" y1="45" x2="60" y2="20" /><line x1="30" y1="45" x2="60" y2="40" />
                <line x1="60" y1="20" x2="90" y2="30" /><line x1="60" y1="40" x2="90" y2="30" />
              </g>
              <circle cx="30" cy="15" r="5" fill="var(--rf-bg)" stroke="var(--rf-primary)" stroke-width="1.5" class="n n1" />
              <circle cx="30" cy="45" r="5" fill="var(--rf-bg)" stroke="var(--rf-primary)" stroke-width="1.5" class="n n2" />
              <circle cx="60" cy="20" r="5" fill="var(--rf-bg)" stroke="var(--rf-primary)" stroke-width="1.5" class="n n3" />
              <circle cx="60" cy="40" r="5" fill="var(--rf-bg)" stroke="var(--rf-primary)" stroke-width="1.5" class="n n4" />
              <circle cx="90" cy="30" r="6" fill="var(--rf-bg)" stroke="var(--rf-primary)" stroke-width="1.5" class="n n5" />
            </svg>
          </div>
          <div class="station-name">MODELO</div>
          <div class="station-desc">aprende o padrão normal de funcionamento</div>
        </div>

        <div class="flow-arrow">
          <svg viewBox="0 0 60 20">
            <line x1="2" y1="10" x2="46" y2="10" stroke="var(--rf-primary)" stroke-width="2" class="arrow-line d2" />
            <path d="M44 4 L56 10 L44 16" fill="none" stroke="var(--rf-primary)" stroke-width="2" stroke-linejoin="round" />
          </svg>
        </div>

        <!-- Station 3: Alert -->
        <div class="station">
          <div class="station-icon alert-icon">
            <svg viewBox="0 0 120 60">
              <g class="alert-blink">
                <path d="M60 8 L88 52 L32 52 Z" fill="none" stroke="var(--rf-highlight)" stroke-width="2.5" stroke-linejoin="round" />
                <line x1="60" y1="24" x2="60" y2="38" stroke="var(--rf-highlight)" stroke-width="2.5" stroke-linecap="round" />
                <circle cx="60" cy="45" r="1.8" fill="var(--rf-highlight)" />
              </g>
            </svg>
          </div>
          <div class="station-name highlight">ALERTA</div>
          <div class="station-desc">"fugiu do padrão": normal ou anormal</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.sensor-root {
  width: 100%;
  font-family: "Space Grotesk", sans-serif;
}

.sensor-surface {
  position: relative;
  background: var(--rf-surface-primary);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 20px;
  box-shadow:
    0 0 0 1px var(--rf-border-primary),
    0 0 40px var(--rf-glow),
    inset 0 1px 0 var(--rf-border-primary);
  backdrop-filter: blur(20px);
  padding: 1.2rem 1.8rem 1.6rem;
  overflow: hidden;
}
.sensor-surface::before {
  content: "";
  position: absolute;
  left: 0; right: 0; top: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--rf-primary), transparent);
  animation: scan 3s ease-in-out infinite;
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

.flow-label {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  justify-content: center;
  margin-bottom: 1.1rem;
}
.label-text {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  color: var(--rf-primary);
  font-weight: 600;
  text-transform: uppercase;
  opacity: 0.8;
  white-space: nowrap;
}
.label-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--rf-border-secondary));
}
.label-line:last-child {
  background: linear-gradient(90deg, var(--rf-border-secondary), transparent);
}

/* ── Stations ── */
.stations {
  display: flex;
  align-items: stretch;
  gap: 0.6rem;
}
.station {
  flex: 1;
  background: var(--rf-surface-primary);
  border: 1px solid var(--rf-border-primary);
  border-radius: 14px;
  padding: 1rem 0.9rem 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: border-color 0.3s var(--rf-ease);
}
.station:hover { border-color: var(--rf-border-secondary); }

.station-icon {
  width: 100%;
  max-width: 150px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--rf-surface-secondary);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 10px;
  padding: 6px 10px;
}
.station-icon svg { width: 100%; height: 100%; }

.station-name {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--rf-text-primary);
}
.station-name.highlight { color: var(--rf-highlight); }

.station-desc {
  font-size: 0.78rem;
  color: var(--rf-text-muted);
  text-align: center;
  line-height: 1.4;
}

/* ── Sine wave animation ── */
.wave-path {
  stroke-dasharray: 240;
  stroke-dashoffset: 240;
  animation: wave-draw 2.4s linear infinite;
}
@keyframes wave-draw {
  to { stroke-dashoffset: 0; }
}

/* ── Model nodes pulse ── */
.n { animation: nodePulse 2.4s ease-in-out infinite; }
.n1 { animation-delay: 0s; }
.n2 { animation-delay: 0.2s; }
.n3 { animation-delay: 0.5s; }
.n4 { animation-delay: 0.7s; }
.n5 { animation-delay: 1.0s; }
@keyframes nodePulse {
  0%, 100% { fill: var(--rf-bg); }
  50%      { fill: rgba(99,211,161,0.55); }
}

/* ── Arrows ── */
.flow-arrow {
  align-self: center;
  width: 56px;
  flex-shrink: 0;
}
.flow-arrow svg { width: 100%; }
.arrow-line {
  stroke-dasharray: 6 5;
  animation: dash-flow 1.2s linear infinite;
}
.arrow-line.d2 { animation-delay: 0.6s; }
@keyframes dash-flow {
  to { stroke-dashoffset: -11; }
}

/* ── Alert blink ── */
.alert-icon {
  background: color-mix(in srgb, var(--rf-highlight) 6%, var(--rf-surface-secondary));
  border-color: color-mix(in srgb, var(--rf-highlight) 25%, transparent);
}
.alert-blink { animation: blink 1.8s ease-in-out infinite; }
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.25; }
}

/* ── Reveal ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); filter: blur(6px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}
.rf-reveal-2 { opacity: 0; animation: fadeUp 0.9s var(--rf-ease) 0.25s forwards; }
</style>
