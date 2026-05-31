<script setup lang="ts">
import { useNav } from '@slidev/client'

defineProps<{ title?: string }>()

const { currentPage, total } = useNav()
</script>
<template>
  <footer class="rf-bottom-bar">
    <a href="http://ramonferrari.dev" target="_blank">ramonferrari.dev</a>
    <span class="rf-bottom-page">{{ currentPage }}/{{ total }}</span>
  </footer>
</template>
<style scoped>
/* ════════════════════════════════════════════
   BOTTOM BAR
════════════════════════════════════════════ */
.rf-bottom-bar {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  font-family: "JetBrains Mono", monospace;
}

.rf-bottom-bar a {
  color: var(--rf-link);
  font-weight: 600;
  letter-spacing: 0.16em;
  text-decoration: none !important;
  border-bottom: none !important;
  box-shadow: none !important;
}

.rf-bottom-bar a:hover {
  color: var(--rf-link-hover);
}

.rf-bottom-page {
  color: var(--rf-text-secondary);
  letter-spacing: 0.12em;
}
</style>