<template>
  <div class="extraction-table-root" :class="{ 'is-compact': compact }" ref="tableRoot">
    <slot>
      <!-- Fallback to prop-based table if no slot content -->
      <table v-if="headers && rows" class="extraction-table">
        <thead>
          <tr>
            <th v-for="(header, i) in headers" :key="header" :style="getColumnStyle(i)">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
            <td v-for="(value, colIndex) in row" :key="colIndex" :style="getColumnStyle(colIndex)">
              <div :class="{ 'highlight-value': isCurrency(value) }">
                {{ value }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue'

interface Props {
  headers?: string[]
  rows?: any[][]
  compact?: boolean
  colWidths?: string[]
}

const props = defineProps<Props>()

const tableRoot = ref<HTMLElement | null>(null)

const getColumnStyle = (index: number) => {
  if (props.colWidths && props.colWidths[index]) {
    return { width: props.colWidths[index] }
  }
  return {}
}

const isCurrency = (val: any) => {
  if (typeof val !== 'string') return false
  return val.includes('R$')
}

const applyHighlights = () => {
  if (!tableRoot.value) return
  // Target both prop-rendered and slot-rendered cells
  const cells = tableRoot.value.querySelectorAll('td')
  cells.forEach(cell => {
    if (cell.textContent?.includes('R$')) {
      cell.classList.add('currency-cell')
    }
  })
}

onMounted(applyHighlights)
onUpdated(applyHighlights)
</script>

<style scoped>
.extraction-table-root {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  border-radius: 16px;
  border: 1px solid var(--rf-border-primary);
  background: var(--rf-surface-primary);
  backdrop-filter: blur(12px);
  box-shadow: var(--rf-shadow-soft);
}

/* Compact mode: smaller font and padding */
.extraction-table-root.is-compact :deep(td),
.extraction-table-root.is-compact :deep(th) {
  padding: 10px 14px;
  font-size: 0.8rem;
}
.extraction-table-root.is-compact :deep(th) {
  font-size: 0.65rem;
}

/* Custom scrollbar */
.extraction-table-root::-webkit-scrollbar {
  height: 6px;
}
.extraction-table-root::-webkit-scrollbar-thumb {
  background: var(--rf-border-secondary);
  border-radius: 10px;
}

:deep(table) {
  width: 100%;
  border-collapse: collapse;
  font-family: "Space Grotesk", sans-serif;
  table-layout: auto;
}

:deep(thead) {
  background: color-mix(in srgb, var(--rf-primary) 12%, #000);
}

:deep(th) {
  padding: 14px 20px;
  text-align: left;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--rf-text-primary);
  border-bottom: 1px solid var(--rf-border-secondary);
  white-space: nowrap;
}

:deep(tr) {
  transition: background 0.2s ease;
}

:deep(tr:nth-child(even)) {
  background: rgba(255, 255, 255, 0.02);
}

:deep(tr:hover) {
  background: rgba(255, 255, 255, 0.05);
}

:deep(td) {
  padding: 14px 20px;
  font-size: 0.9rem;
  color: var(--rf-text-secondary);
  border-bottom: 1px solid var(--rf-border-primary);
}

:deep(tr:last-child td) {
  border-bottom: none;
}

.highlight-value,
:deep(.currency-cell) {
  color: var(--rf-highlight);
  font-weight: 700;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85rem;
}

.is-compact .highlight-value,
.is-compact :deep(.currency-cell) {
  font-size: 0.75rem;
}

/* Light mode overrides (following established project pattern) */
html.light .extraction-table-root {
  background: #ffffff !important;
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

html.light .extraction-table-root :deep(thead) {
  background: #f1f5f9 !important;
}

html.light .extraction-table-root :deep(th) {
  color: #0f172a !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

html.light .extraction-table-root :deep(td) {
  color: #334155 !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

html.light .extraction-table-root :deep(tr:nth-child(even)) {
  background: rgba(0, 0, 0, 0.02) !important;
}

html.light .extraction-table-root :deep(tr:hover) {
  background: rgba(0, 0, 0, 0.04) !important;
}
</style>
