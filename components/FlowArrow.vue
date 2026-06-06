<template>
  <div class="arrow-container">
    <svg width="40" height="40" viewBox="0 0 40 60" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="arrow-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgba(226,248,27,0.3)"/>
          <stop offset="100%" stop-color="rgba(99,211,161,0.6)"/>
        </linearGradient>
      </defs>
      <!-- Shaft -->
      <line x1="20" y1="8" x2="20" y2="48"
        stroke="url(#arrow-grad)" stroke-width="2" stroke-linecap="round"/>
      <!-- Head -->
      <polygon points="20,55 14,42 26,42"
        fill="rgba(99,211,161,0.8)"/>
    </svg>
  </div>
</template>

<style scoped>
.arrow-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: -0.3rem 0 -0.3rem 0;
  line-height: 0;
}

svg {
  filter: drop-shadow(0 0 4px rgba(99,211,161,0.3));
  display: block;
}
</style>
