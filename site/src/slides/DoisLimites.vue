<script setup lang="ts">
import SlideSection from '../components/SlideSection.vue'

defineProps<{ id: string }>()
</script>

<template>
  <SlideSection :id="id">
    <h1>Os Dois Limites da IA</h1>

    <div class="limites-wrap mt-2">
      <svg viewBox="0 0 900 355" xmlns="http://www.w3.org/2000/svg" class="limites-svg">
        <defs>
          <radialGradient id="innerGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="var(--rf-primary)" stop-opacity="0.18"/>
            <stop offset="100%" stop-color="var(--rf-primary)" stop-opacity="0.03"/>
          </radialGradient>
          <radialGradient id="inventouGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="var(--rf-highlight)" stop-opacity="0.15"/>
            <stop offset="100%" stop-color="var(--rf-highlight)" stop-opacity="0.02"/>
          </radialGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <style>
            .svg-label { font-size: 13px; font-weight: 400; letter-spacing: 0.03em; font-family: 'Space Grotesk', sans-serif; }
            .svg-label-bold { font-size: 13px; font-weight: 600; letter-spacing: 0; font-family: 'Space Grotesk', sans-serif; }
            .svg-badge { font-size: 11px; font-weight: 600; letter-spacing: 0; font-family: 'Space Grotesk', sans-serif; }
          </style>
        </defs>

        <circle cx="450" cy="183" r="145"
          fill="color-mix(in srgb, var(--rf-primary) 3%, transparent)"
          stroke="#2cc9ec"
          stroke-width="1.5"
          stroke-dasharray="9 6"
          opacity="0.85"/>
        <text x="450" y="27" text-anchor="middle" class="svg-label" fill="#2cc9ec">O que estava no contexto</text>

        <g>
          <circle cx="468" cy="177" r="110" fill="url(#innerGrad)" stroke="var(--rf-primary)" stroke-width="1.5" filter="url(#softGlow)"/>
          <circle cx="412" cy="138" r="3" fill="var(--rf-primary)" opacity="0.75"/>
          <line x1="420" y1="138" x2="542" y2="138" stroke="var(--rf-primary)" stroke-width="1.8" stroke-linecap="round" opacity="0.55"/>
          <circle cx="412" cy="157" r="3" fill="var(--rf-primary)" opacity="0.75"/>
          <line x1="420" y1="157" x2="524" y2="157" stroke="var(--rf-primary)" stroke-width="1.8" stroke-linecap="round" opacity="0.5"/>
          <circle cx="412" cy="176" r="3" fill="var(--rf-primary)" opacity="0.75"/>
          <line x1="420" y1="176" x2="538" y2="176" stroke="var(--rf-primary)" stroke-width="1.8" stroke-linecap="round" opacity="0.55"/>
          <circle cx="412" cy="195" r="3" fill="var(--rf-primary)" opacity="0.75"/>
          <line x1="420" y1="195" x2="514" y2="195" stroke="var(--rf-primary)" stroke-width="1.8" stroke-linecap="round" opacity="0.5"/>
          <circle cx="412" cy="214" r="3" fill="var(--rf-primary)" opacity="0.75"/>
          <line x1="420" y1="214" x2="528" y2="214" stroke="var(--rf-primary)" stroke-width="1.8" stroke-linecap="round" opacity="0.55"/>
          <text x="468" y="308" text-anchor="middle" class="svg-label-bold" fill="color-mix(in srgb, var(--rf-primary) 85%, transparent)">O que a IA achou</text>
        </g>

        <g>
          <circle cx="323" cy="153" r="3.5" fill="#EC635E" opacity="0.55"/>
          <circle cx="312" cy="183" r="3"   fill="#EC635E" opacity="0.45"/>
          <circle cx="319" cy="213" r="3.5" fill="#EC635E" opacity="0.55"/>
          <circle cx="336" cy="137" r="2.5" fill="#EC635E" opacity="0.35"/>
          <circle cx="341" cy="167" r="3"   fill="#EC635E" opacity="0.45"/>
          <circle cx="331" cy="198" r="2.5" fill="#EC635E" opacity="0.4"/>
          <circle cx="349" cy="145" r="2.5" fill="#EC635E" opacity="0.3"/>
          <circle cx="346" cy="222" r="2.5" fill="#EC635E" opacity="0.35"/>
          <circle cx="321" cy="173" r="2"   fill="#EC635E" opacity="0.3"/>
          <rect x="240" y="108" width="72" height="22" rx="5" fill="rgba(236,99,94,0.12)" stroke="#EC635E" stroke-width="1" opacity="0.9"/>
          <text x="276" y="123" text-anchor="middle" class="svg-badge" fill="#EC635E">perdeu</text>
        </g>

        <g>
          <circle cx="636" cy="250" r="58" fill="url(#inventouGrad)" stroke="var(--rf-highlight)" stroke-width="1.5" stroke-dasharray="7 5" opacity="0.85"/>
          <line x1="582" y1="237" x2="688" y2="237" stroke="var(--rf-highlight)" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
          <line x1="580" y1="251" x2="690" y2="251" stroke="var(--rf-highlight)" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
          <line x1="584" y1="265" x2="684" y2="265" stroke="var(--rf-highlight)" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
          <rect x="598" y="310" width="80" height="22" rx="5" fill="color-mix(in srgb, var(--rf-highlight) 10%, transparent)" stroke="var(--rf-highlight)" stroke-width="1" opacity="0.9"/>
          <text x="638" y="325" text-anchor="middle" class="svg-badge" fill="var(--rf-highlight)">inventou</text>
        </g>
      </svg>

      <div class="limite-card limite-card-left glass p-4" style="border-color: rgba(236,99,94,0.45);">
        <div style="color: #EC635E; font-weight: 700; font-size: 0.82rem; margin-bottom: 0.4rem; line-height: 1.3;">⚠ A IA pode perder informação</div>
        <p style="font-size: 0.75rem; line-height: 1.5; opacity: 0.7; margin: 0;">Algo estava no contexto, mas não apareceu na resposta.</p>
      </div>

      <div class="limite-card limite-card-right glass p-4" style="border-color: color-mix(in srgb, var(--rf-highlight) 45%, transparent);">
        <div style="color: var(--rf-highlight); font-weight: 700; font-size: 0.82rem; margin-bottom: 0.4rem; line-height: 1.3;">⚠ A IA pode inventar informação</div>
        <p style="font-size: 0.75rem; line-height: 1.5; opacity: 0.7; margin: 0;">Algo apareceu na resposta, mas não estava no contexto.</p>
      </div>
    </div>
  </SlideSection>
</template>

<style scoped>
.limites-wrap {
  position: relative;
}

.limites-svg {
  width: 100%;
  height: auto;
  display: block;
}

@media (min-width: 860px) {
  .limite-card {
    position: absolute;
    top: 55px;
    width: 190px;
  }
  .limite-card-left {
    left: 0;
  }
  .limite-card-right {
    right: 0;
  }
}

@media (max-width: 859px) {
  .limites-wrap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .limite-card {
    width: 100%;
  }
}
</style>
