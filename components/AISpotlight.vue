<template>
  <div class="scene-wrap">
    <svg class="scene" viewBox="0 0 960 390" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="asp-laser-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stop-color="var(--rf-primary)" stop-opacity="0"/>
          <stop offset="30%"  stop-color="var(--rf-primary)" stop-opacity=".7"/>
          <stop offset="70%"  stop-color="var(--rf-primary)" stop-opacity=".9"/>
          <stop offset="100%" stop-color="var(--rf-primary)" stop-opacity=".3"/>
        </linearGradient>
        <radialGradient id="asp-torch-rad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stop-color="var(--rf-primary)" stop-opacity=".6"/>
          <stop offset="60%"  stop-color="var(--rf-primary)" stop-opacity=".15"/>
          <stop offset="100%" stop-color="var(--rf-primary)" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="asp-doc-surf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stop-color="var(--rf-primary)" stop-opacity=".12"/>
          <stop offset="100%" stop-color="var(--rf-primary)" stop-opacity=".03"/>
        </linearGradient>
        <radialGradient id="asp-badge-rad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stop-color="var(--rf-highlight)" stop-opacity=".3"/>
          <stop offset="100%" stop-color="var(--rf-highlight)" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="asp-beam-hit" cx="50%" cy="40%" r="55%">
          <stop offset="0%"   stop-color="var(--rf-primary)" stop-opacity=".18"/>
          <stop offset="100%" stop-color="var(--rf-primary)" stop-opacity="0"/>
        </radialGradient>
        <filter id="asp-blur6"><feGaussianBlur stdDeviation="6"/></filter>
        <filter id="asp-blur3"><feGaussianBlur stdDeviation="3"/></filter>
        <filter id="asp-blur1"><feGaussianBlur stdDeviation="1.2"/></filter>
      </defs>

      <!-- ══ DOC GRID 4×3 ══ -->
      <!-- ROW 0 — y=20 -->
      <g class="r1">
        <!-- [0,0] -->
        <g transform="translate(14,20)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.05)" stroke="var(--rf-text-primary)" stroke-opacity=".12" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="var(--rf-primary)" fill-opacity=".6"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="2" font-weight="700" fill="white" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="var(--rf-text-secondary)" stroke-opacity=".55" stroke-width=".8"/>
          <line x1="8" y1="34" x2="78" y2="34" stroke="var(--rf-text-secondary)" stroke-opacity=".35" stroke-width=".8"/>
          <line x1="8" y1="41" x2="90" y2="41" stroke="var(--rf-text-secondary)" stroke-opacity=".35" stroke-width=".8"/>
          <line x1="8" y1="48" x2="65" y2="48" stroke="var(--rf-text-secondary)" stroke-opacity=".35" stroke-width=".8"/>
          <line x1="8" y1="55" x2="90" y2="55" stroke="var(--rf-text-secondary)" stroke-opacity=".25" stroke-width=".8"/>
          <line x1="8" y1="62" x2="80" y2="62" stroke="var(--rf-text-secondary)" stroke-opacity=".25" stroke-width=".8"/>
          <line x1="8" y1="69" x2="90" y2="69" stroke="var(--rf-text-secondary)" stroke-opacity=".20" stroke-width=".8"/>
          <line x1="8" y1="76" x2="70" y2="76" stroke="var(--rf-text-secondary)" stroke-opacity=".20" stroke-width=".8"/>
          <line x1="8" y1="90" x2="90" y2="90" stroke="var(--rf-text-secondary)" stroke-opacity=".15" stroke-width=".8"/>
          <line x1="8" y1="97" x2="75" y2="97" stroke="var(--rf-text-secondary)" stroke-opacity=".15" stroke-width=".8"/>
        </g>
        <!-- [1,0] -->
        <g transform="translate(126,20)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.05)" stroke="var(--rf-text-primary)" stroke-opacity=".12" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="var(--rf-primary)" fill-opacity=".6"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="2" font-weight="700" fill="white" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="var(--rf-text-secondary)" stroke-opacity=".55" stroke-width=".8"/>
          <line x1="8" y1="34" x2="70" y2="34" stroke="var(--rf-text-secondary)" stroke-opacity=".35" stroke-width=".8"/>
          <line x1="8" y1="41" x2="90" y2="41" stroke="var(--rf-text-secondary)" stroke-opacity=".35" stroke-width=".8"/>
          <line x1="8" y1="55" x2="90" y2="55" stroke="var(--rf-text-secondary)" stroke-opacity=".25" stroke-width=".8"/>
          <line x1="8" y1="69" x2="65" y2="69" stroke="var(--rf-text-secondary)" stroke-opacity=".25" stroke-width=".8"/>
          <line x1="8" y1="83" x2="90" y2="83" stroke="var(--rf-text-secondary)" stroke-opacity=".20" stroke-width=".8"/>
          <line x1="8" y1="97" x2="72" y2="97" stroke="var(--rf-text-secondary)" stroke-opacity=".15" stroke-width=".8"/>
        </g>
        <!-- [2,0] ⚠ -->
        <g transform="translate(238,20)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.05)" stroke="var(--rf-text-primary)" stroke-opacity=".12" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="var(--rf-primary)" fill-opacity=".6"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="2" font-weight="700" fill="white" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="var(--rf-text-secondary)" stroke-opacity=".55" stroke-width=".8"/>
          <line x1="8" y1="34" x2="90" y2="34" stroke="var(--rf-text-secondary)" stroke-opacity=".35" stroke-width=".8"/>
          <line x1="8" y1="41" x2="75" y2="41" stroke="var(--rf-text-secondary)" stroke-opacity=".35" stroke-width=".8"/>
          <line x1="8" y1="55" x2="90" y2="55" stroke="var(--rf-text-secondary)" stroke-opacity=".25" stroke-width=".8"/>
          <line x1="8" y1="69" x2="90" y2="69" stroke="var(--rf-text-secondary)" stroke-opacity=".20" stroke-width=".8"/>
          <line x1="8" y1="83" x2="68" y2="83" stroke="var(--rf-text-secondary)" stroke-opacity=".15" stroke-width=".8"/>
          <g class="warn w2" transform="translate(74,88)">
            <polygon points="8,1 15,13 1,13" fill="none" stroke="var(--rf-highlight)" stroke-opacity=".9" stroke-width="1.1" stroke-linejoin="round"/>
            <line x1="8" y1="5" x2="8" y2="9" stroke="var(--rf-highlight)" stroke-opacity=".9" stroke-width="1.1" stroke-linecap="round"/>
            <circle cx="8" cy="11" r=".7" fill="var(--rf-highlight)" fill-opacity=".9"/>
          </g>
        </g>
        <!-- [3,0] -->
        <g transform="translate(350,20)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.05)" stroke="var(--rf-text-primary)" stroke-opacity=".12" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="var(--rf-primary)" fill-opacity=".6"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="2" font-weight="700" fill="white" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="var(--rf-text-secondary)" stroke-opacity=".55" stroke-width=".8"/>
          <line x1="8" y1="34" x2="82" y2="34" stroke="var(--rf-text-secondary)" stroke-opacity=".35" stroke-width=".8"/>
          <line x1="8" y1="41" x2="90" y2="41" stroke="var(--rf-text-secondary)" stroke-opacity=".35" stroke-width=".8"/>
          <line x1="8" y1="55" x2="90" y2="55" stroke="var(--rf-text-secondary)" stroke-opacity=".25" stroke-width=".8"/>
          <line x1="8" y1="69" x2="78" y2="69" stroke="var(--rf-text-secondary)" stroke-opacity=".20" stroke-width=".8"/>
          <line x1="8" y1="83" x2="90" y2="83" stroke="var(--rf-text-secondary)" stroke-opacity=".15" stroke-width=".8"/>
        </g>

        <!-- ROW 1 — y=142 -->
        <!-- [0,1] ⚠ -->
        <g transform="translate(14,142)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.05)" stroke="var(--rf-text-primary)" stroke-opacity=".12" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="var(--rf-primary)" fill-opacity=".5"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="2" font-weight="700" fill="white" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="var(--rf-text-secondary)" stroke-opacity=".50" stroke-width=".8"/>
          <line x1="8" y1="34" x2="72" y2="34" stroke="var(--rf-text-secondary)" stroke-opacity=".35" stroke-width=".8"/>
          <line x1="8" y1="41" x2="90" y2="41" stroke="var(--rf-text-secondary)" stroke-opacity=".35" stroke-width=".8"/>
          <line x1="8" y1="55" x2="80" y2="55" stroke="var(--rf-text-secondary)" stroke-opacity=".25" stroke-width=".8"/>
          <line x1="8" y1="69" x2="90" y2="69" stroke="var(--rf-text-secondary)" stroke-opacity=".20" stroke-width=".8"/>
          <line x1="8" y1="83" x2="65" y2="83" stroke="var(--rf-text-secondary)" stroke-opacity=".15" stroke-width=".8"/>
          <g class="warn w3" transform="translate(74,88)">
            <polygon points="8,1 15,13 1,13" fill="none" stroke="var(--rf-highlight)" stroke-opacity=".85" stroke-width="1.1" stroke-linejoin="round"/>
            <line x1="8" y1="5" x2="8" y2="9" stroke="var(--rf-highlight)" stroke-opacity=".85" stroke-width="1.1" stroke-linecap="round"/>
            <circle cx="8" cy="11" r=".7" fill="var(--rf-highlight)" fill-opacity=".85"/>
          </g>
        </g>
        <!-- [1,1] -->
        <g transform="translate(126,142)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.05)" stroke="var(--rf-text-primary)" stroke-opacity=".12" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="var(--rf-primary)" fill-opacity=".5"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="2" font-weight="700" fill="white" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="var(--rf-text-secondary)" stroke-opacity=".55" stroke-width=".8"/>
          <line x1="8" y1="34" x2="90" y2="34" stroke="var(--rf-text-secondary)" stroke-opacity=".35" stroke-width=".8"/>
          <line x1="8" y1="48" x2="68" y2="48" stroke="var(--rf-text-secondary)" stroke-opacity=".35" stroke-width=".8"/>
          <line x1="8" y1="62" x2="90" y2="62" stroke="var(--rf-text-secondary)" stroke-opacity=".25" stroke-width=".8"/>
          <line x1="8" y1="76" x2="76" y2="76" stroke="var(--rf-text-secondary)" stroke-opacity=".20" stroke-width=".8"/>
          <line x1="8" y1="90" x2="90" y2="90" stroke="var(--rf-text-secondary)" stroke-opacity=".15" stroke-width=".8"/>
        </g>
        <!-- [2,1] -->
        <g transform="translate(238,142)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.05)" stroke="var(--rf-text-primary)" stroke-opacity=".12" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="rgba(99,211,161,.5)"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="2" font-weight="700" fill="white" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="var(--rf-text-secondary)" stroke-opacity=".50" stroke-width=".8"/>
          <line x1="8" y1="34" x2="80" y2="34" stroke="var(--rf-text-secondary)" stroke-opacity=".35" stroke-width=".8"/>
          <line x1="8" y1="41" x2="90" y2="41" stroke="var(--rf-text-secondary)" stroke-opacity=".35" stroke-width=".8"/>
          <line x1="8" y1="48" x2="62" y2="48" stroke="var(--rf-highlight)" stroke-opacity=".3" stroke-width=".8"/>
          <line x1="8" y1="62" x2="90" y2="62" stroke="var(--rf-text-secondary)" stroke-opacity=".20" stroke-width=".8"/>
          <line x1="8" y1="76" x2="80" y2="76" stroke="var(--rf-text-secondary)" stroke-opacity=".15" stroke-width=".8"/>
        </g>
        <!-- [3,1] ⚠ -->
        <g transform="translate(350,142)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.05)" stroke="var(--rf-text-primary)" stroke-opacity=".12" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="var(--rf-primary)" fill-opacity=".5"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="2" font-weight="700" fill="white" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="var(--rf-text-secondary)" stroke-opacity=".50" stroke-width=".8"/>
          <line x1="8" y1="34" x2="74" y2="34" stroke="var(--rf-text-secondary)" stroke-opacity=".35" stroke-width=".8"/>
          <line x1="8" y1="55" x2="68" y2="55" stroke="var(--rf-text-secondary)" stroke-opacity=".25" stroke-width=".8"/>
          <line x1="8" y1="69" x2="90" y2="69" stroke="var(--rf-text-secondary)" stroke-opacity=".20" stroke-width=".8"/>
          <line x1="8" y1="83" x2="78" y2="83" stroke="var(--rf-text-secondary)" stroke-opacity=".15" stroke-width=".8"/>
          <g class="warn w4" transform="translate(74,88)">
            <polygon points="8,1 15,13 1,13" fill="none" stroke="var(--rf-highlight)" stroke-opacity=".8" stroke-width="1.1" stroke-linejoin="round"/>
            <line x1="8" y1="5" x2="8" y2="9" stroke="var(--rf-highlight)" stroke-opacity=".8" stroke-width="1.1" stroke-linecap="round"/>
            <circle cx="8" cy="11" r=".7" fill="var(--rf-highlight)" fill-opacity=".8"/>
          </g>
        </g>

        <!-- ROW 2 — y=264 -->
        <!-- [0,2] -->
        <g transform="translate(14,264)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.04)" stroke="var(--rf-text-primary)" stroke-opacity=".10" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="var(--rf-primary)" fill-opacity=".4"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="2" font-weight="700" fill="white" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="var(--rf-text-secondary)" stroke-opacity=".50" stroke-width=".8"/>
          <line x1="8" y1="41" x2="90" y2="41" stroke="var(--rf-text-secondary)" stroke-opacity=".25" stroke-width=".8"/>
          <line x1="8" y1="55" x2="70" y2="55" stroke="var(--rf-text-secondary)" stroke-opacity=".20" stroke-width=".8"/>
          <line x1="8" y1="69" x2="90" y2="69" stroke="var(--rf-text-secondary)" stroke-opacity=".15" stroke-width=".8"/>
          <line x1="8" y1="83" x2="82" y2="83" stroke="var(--rf-text-secondary)" stroke-opacity=".15" stroke-width=".8"/>
        </g>
        <!-- [1,2] -->
        <g transform="translate(126,264)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.04)" stroke="var(--rf-text-primary)" stroke-opacity=".10" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="var(--rf-primary)" fill-opacity=".4"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="2" font-weight="700" fill="white" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="var(--rf-text-secondary)" stroke-opacity=".45" stroke-width=".8"/>
          <line x1="8" y1="41" x2="66" y2="41" stroke="var(--rf-text-secondary)" stroke-opacity=".25" stroke-width=".8"/>
          <line x1="8" y1="55" x2="90" y2="55" stroke="var(--rf-text-secondary)" stroke-opacity=".20" stroke-width=".8"/>
          <line x1="8" y1="69" x2="74" y2="69" stroke="var(--rf-text-secondary)" stroke-opacity=".15" stroke-width=".8"/>
          <line x1="8" y1="83" x2="90" y2="83" stroke="var(--rf-text-secondary)" stroke-opacity=".15" stroke-width=".8"/>
        </g>
        <!-- [2,2] ⚠ -->
        <g transform="translate(238,264)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.04)" stroke="var(--rf-text-primary)" stroke-opacity=".10" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="var(--rf-primary)" fill-opacity=".4"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="2" font-weight="700" fill="white" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="var(--rf-text-secondary)" stroke-opacity=".45" stroke-width=".8"/>
          <line x1="8" y1="41" x2="90" y2="41" stroke="var(--rf-text-secondary)" stroke-opacity=".25" stroke-width=".8"/>
          <line x1="8" y1="55" x2="90" y2="55" stroke="var(--rf-text-secondary)" stroke-opacity=".20" stroke-width=".8"/>
          <line x1="8" y1="69" x2="72" y2="69" stroke="var(--rf-highlight)" stroke-opacity=".28" stroke-width=".8"/>
          <line x1="8" y1="83" x2="90" y2="83" stroke="var(--rf-text-secondary)" stroke-opacity=".15" stroke-width=".8"/>
          <g class="warn" transform="translate(74,88)">
            <polygon points="8,1 15,13 1,13" fill="none" stroke="var(--rf-highlight)" stroke-opacity=".75" stroke-width="1.1" stroke-linejoin="round"/>
            <line x1="8" y1="5" x2="8" y2="9" stroke="var(--rf-highlight)" stroke-opacity=".75" stroke-width="1.1" stroke-linecap="round"/>
            <circle cx="8" cy="11" r=".7" fill="var(--rf-highlight)" fill-opacity=".75"/>
          </g>
        </g>
        <!-- [3,2] -->
        <g transform="translate(350,264)">
          <rect width="98" height="108" rx="5" fill="rgba(255,255,255,0.04)" stroke="var(--rf-text-primary)" stroke-opacity=".10" stroke-width=".8"/>
          <rect x="8" y="8" width="24" height="10" rx="2" fill="rgba(99,211,161,.4)"/>
          <text x="20" y="16" font-family="JetBrains Mono,monospace" font-size="2" font-weight="700" fill="white" text-anchor="middle">PDF</text>
          <line x1="8" y1="26" x2="90" y2="26" stroke="var(--rf-text-secondary)" stroke-opacity=".45" stroke-width=".8"/>
          <line x1="8" y1="41" x2="90" y2="41" stroke="var(--rf-text-secondary)" stroke-opacity=".20" stroke-width=".8"/>
          <line x1="8" y1="55" x2="82" y2="55" stroke="var(--rf-text-secondary)" stroke-opacity=".20" stroke-width=".8"/>
          <line x1="8" y1="69" x2="90" y2="69" stroke="var(--rf-text-secondary)" stroke-opacity=".15" stroke-width=".8"/>
          <line x1="8" y1="83" x2="66" y2="83" stroke="var(--rf-text-secondary)" stroke-opacity=".15" stroke-width=".8"/>
        </g>
      </g><!-- /r1 grid -->

      <!-- ══ AI ELEMENT ══ -->
      <g class="r1">
        <circle cx="516" cy="160" r="30" fill="url(#asp-torch-rad)" :filter="'url(#asp-blur3)'"/>
        <circle cx="516" cy="160" r="24" fill="none" stroke="var(--rf-primary)" stroke-opacity=".55" stroke-width="2"/>
        <circle cx="516" cy="160" r="17" fill="var(--rf-primary)" fill-opacity=".10" stroke="var(--rf-primary)" stroke-opacity=".30" stroke-width="1"/>
        <text x="516" y="166" font-family="Space Grotesk,sans-serif" font-size="5.5" font-weight="800"
          fill="var(--rf-primary)" fill-opacity=".95" text-anchor="middle" letter-spacing=".5">AI</text>
      </g>

      <!-- ══ FLOW ARROW ══ -->
      <g class="r2">

        <!-- Halo externo -->
        <line x1="462" y1="196" x2="548" y2="196"
          stroke="var(--rf-primary)" stroke-opacity=".10" stroke-width="12" stroke-linecap="round" :filter="'url(#asp-blur6)'"/>
        <!-- Glow médio -->
        <line x1="462" y1="196" x2="548" y2="196"
          stroke="var(--rf-primary)" stroke-opacity=".22" stroke-width="5" stroke-linecap="round" :filter="'url(#asp-blur3)'"/>
        <!-- Glow fino -->
        <line x1="462" y1="196" x2="548" y2="196"
          stroke="var(--rf-primary)" stroke-opacity=".50" stroke-width="1.5" stroke-linecap="round" :filter="'url(#asp-blur1)'"/>
        <!-- Núcleo com traço animado -->
        <line x1="462" y1="196" x2="548" y2="196"
          class="arrow-flow" stroke="var(--rf-primary)" stroke-opacity=".90" stroke-width="0.8"/>

        <!-- Ponta da seta: halo -->
        <polygon points="546,188 562,196 546,204"
          fill="var(--rf-primary)" fill-opacity=".20" :filter="'url(#asp-blur3)'"/>
        <!-- Ponta da seta: preenchimento -->
        <polygon points="547,190 560,196 547,202"
          fill="var(--rf-primary)" fill-opacity=".90"/>

        <!-- Ponto de origem -->
        <circle cx="462" cy="196" r="5" fill="var(--rf-primary)" fill-opacity=".12" :filter="'url(#asp-blur3)'"/>
        <circle cx="462" cy="196" r="2.5" fill="var(--rf-primary)" fill-opacity=".75"/>

        <!-- Partícula viajante -->
        <circle r="3.5" fill="var(--rf-highlight)" fill-opacity=".85" :filter="'url(#asp-blur1)'">
          <animate attributeName="cx" from="462" to="548" dur="1.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1"/>
          <animate attributeName="cy" from="196" to="196" dur="1.4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.82;1" dur="1.4s" repeatCount="indefinite"/>
        </circle>
      </g>

      <!-- ══ OPEN DOCUMENT ══ -->
      <g class="doc-float r3">
        <rect x="572" y="60" width="228" height="220" rx="6"
          fill="url(#asp-beam-hit)" :filter="'url(#asp-blur6)'"/>
        <rect x="572" y="60" width="228" height="220" rx="6"
          fill="url(#asp-doc-surf)" stroke="var(--rf-primary)" stroke-opacity=".30" stroke-width="1.2"/>
        <line x1="572" y1="62" x2="800" y2="62" stroke="var(--rf-primary)" stroke-opacity=".15" stroke-width=".8"/>
        <!-- PDF badge -->
        <rect x="584" y="70" width="28" height="12" rx="3" fill="var(--rf-primary)" fill-opacity=".75"/>
        <text x="598" y="79" font-family="JetBrains Mono,monospace" font-size="2.5" font-weight="700"
          fill="white" text-anchor="middle">PDF</text>
        <!-- Scan brackets -->
        <path d="M 600,90 L 578,90 L 578,110" fill="none" stroke="var(--rf-primary)" stroke-opacity=".8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M 772,90 L 794,90 L 794,110" fill="none" stroke="var(--rf-primary)" stroke-opacity=".8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M 592,266 L 578,266 L 578,246" fill="none" stroke="var(--rf-primary)" stroke-opacity=".5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M 780,266 L 794,266 L 794,246" fill="none" stroke="var(--rf-primary)" stroke-opacity=".5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Content lines -->
        <line x1="590" y1="104" x2="786" y2="104" stroke="var(--rf-text-secondary)" stroke-opacity=".55" stroke-width="1"/>
        <line x1="590" y1="114" x2="760" y2="114" stroke="var(--rf-text-secondary)" stroke-opacity=".35" stroke-width="1"/>
        <line x1="590" y1="124" x2="786" y2="124" stroke="var(--rf-text-secondary)" stroke-opacity=".35" stroke-width="1"/>
        <line x1="590" y1="134" x2="740" y2="134" stroke="var(--rf-text-secondary)" stroke-opacity=".25" stroke-width="1"/>
        <line x1="590" y1="144" x2="786" y2="144" stroke="var(--rf-text-secondary)" stroke-opacity=".25" stroke-width="1"/>
        <line x1="590" y1="154" x2="750" y2="154" stroke="var(--rf-text-secondary)" stroke-opacity=".20" stroke-width="1"/>

        <!-- RISK BADGE -->
        <g class="badge-g">
          <ellipse cx="686" cy="210" rx="105" ry="50" fill="url(#asp-badge-rad)" :filter="'url(#asp-blur6)'"/>
          <rect x="584" y="164" width="204" height="76" rx="6"
            fill="var(--rf-highlight)" fill-opacity=".09" stroke="var(--rf-highlight)" stroke-opacity=".65" stroke-width="1.5"/>
          <rect x="585" y="165" width="202" height="74" rx="5" fill="var(--rf-highlight)" fill-opacity=".05"/>
          <g transform="translate(596,178)">
            <polygon points="11,1 21,18 1,18" fill="var(--rf-highlight)" fill-opacity=".12"
              stroke="var(--rf-highlight)" stroke-opacity=".95" stroke-width="1.4" stroke-linejoin="round"/>
            <line x1="11" y1="7" x2="11" y2="12" stroke="var(--rf-highlight)" stroke-opacity=".95" stroke-width="1.4" stroke-linecap="round"/>
            <circle cx="11" cy="15.5" r=".9" fill="var(--rf-highlight)" fill-opacity=".95"/>
          </g>
          <text x="622" y="192" font-family="JetBrains Mono,monospace" font-size="2.4" font-weight="700"
            fill="var(--rf-highlight)" fill-opacity=".95" letter-spacing=".05em">CLÁUSULA DE RISCO</text>
          <line x1="590" y1="199" x2="782" y2="199" stroke="var(--rf-highlight)" stroke-opacity=".22" stroke-width=".8"/>
          <text x="596" y="213" font-family="Space Grotesk,sans-serif" font-size="2.8" font-weight="600"
            fill="rgba(255,255,255,.88)">Multa de 30% sobre o valor total</text>
          <text x="596" y="227" font-family="Space Grotesk,sans-serif" font-size="2.8" font-weight="600"
            fill="rgba(255,255,255,.88)">em caso de rescisão antecipada.</text>
        </g>

        <!-- Signature -->
        <text x="640" y="256" font-family="Space Grotesk,sans-serif" font-size="3" font-style="italic" font-weight="300"
          fill="rgba(255,255,255,.18)" letter-spacing=".3">Assinado em 15/03/2025</text>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
// No props — standalone visual slide component
</script>

<style scoped>
/* ─── Wrapper: flows naturally below h1 ─────────── */
.scene-wrap {
  width: 100%;
  overflow: hidden;
}

.scene {
  display: block;
  width: 100%;
  height: auto;
  overflow: hidden;
}

/* ─── Animations ────────────────────────────────────── */
@keyframes pulse-warn {
  0%,100% { opacity:.7; transform:scale(1); }
  50%      { opacity:1;  transform:scale(1.2); }
}
@keyframes pulse-badge {
  0%,100% { filter:drop-shadow(0 0 5px rgba(226,248,27,.35)); }
  50%      { filter:drop-shadow(0 0 18px rgba(226,248,27,.8)); }
}
@keyframes float-doc {
  0%,100% { transform:translateY(0); }
  50%      { transform:translateY(-4px); }
}
@keyframes flow {
  from { stroke-dashoffset: 13; }
  to   { stroke-dashoffset: 0; }
}
@keyframes fadeUp {
  from { opacity:0; transform:translateY(16px); filter:blur(4px); }
  to   { opacity:1; transform:translateY(0);    filter:blur(0); }
}
@keyframes particle {
  0%   { opacity:0; transform:translate(0,0); }
  30%  { opacity:.6; }
  100% { opacity:0; transform:translate(var(--dx),var(--dy)); }
}

.warn   { animation: pulse-warn  2s   ease-in-out infinite; }
.w2     { animation-delay: .5s; }
.w3     { animation-delay: 1s; }
.w4     { animation-delay: 1.5s; }
.badge-g   { animation: pulse-badge  2.5s ease-in-out infinite; }
.doc-float { animation: float-doc    4s   ease-in-out infinite; }
.arrow-flow { stroke-dasharray: 8 5; animation: flow 0.9s linear infinite; }

.r1 { opacity:0; animation: fadeUp .9s cubic-bezier(.22,1,.36,1) .10s forwards; }
.r2 { opacity:0; animation: fadeUp .9s cubic-bezier(.22,1,.36,1) .35s forwards; }
.r3 { opacity:0; animation: fadeUp .9s cubic-bezier(.22,1,.36,1) .60s forwards; }

</style>
