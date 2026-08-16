<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps<{ activeId: string }>()

type Mode = 'off' | 'laser' | 'draw'

const mode = ref<Mode>('off')
const color = ref('#ff4d4f')
const isFullscreen = ref(false)
const canvasEl = ref<HTMLCanvasElement | null>(null)
const laserEl = ref<HTMLDivElement | null>(null)

const colors = ['#ff4d4f', '#ffd43b', '#40c057', '#339af0', '#ffffff']

let ctx: CanvasRenderingContext2D | null = null
let drawing = false
let lastX = 0
let lastY = 0

function resizeCanvas() {
  const c = canvasEl.value
  if (!c) return
  c.width = window.innerWidth
  c.height = window.innerHeight
  ctx = c.getContext('2d')
  if (ctx) {
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
  }
}

function clearCanvas() {
  if (ctx && canvasEl.value) ctx.clearRect(0, 0, canvasEl.value.width, canvasEl.value.height)
}

function setMode(next: Mode) {
  mode.value = mode.value === next ? 'off' : next
}

function onPointerMove(e: PointerEvent) {
  if (mode.value === 'laser' && laserEl.value) {
    laserEl.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  }
}

function startDraw(e: PointerEvent) {
  if (mode.value !== 'draw' || !ctx) return
  drawing = true
  lastX = e.clientX
  lastY = e.clientY
}

function moveDraw(e: PointerEvent) {
  if (!drawing || mode.value !== 'draw' || !ctx) return
  ctx.strokeStyle = color.value
  ctx.lineWidth = 4
  ctx.beginPath()
  ctx.moveTo(lastX, lastY)
  ctx.lineTo(e.clientX, e.clientY)
  ctx.stroke()
  lastX = e.clientX
  lastY = e.clientY
}

function endDraw() {
  drawing = false
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.().catch(() => {})
  } else {
    document.exitFullscreen?.()
  }
}

function onFullscreenChange() {
  isFullscreen.value = !!document.fullscreenElement
}

function onKeydown(e: KeyboardEvent) {
  const target = e.target as HTMLElement | null
  if (target && ['INPUT', 'TEXTAREA'].includes(target.tagName)) return
  if (e.metaKey || e.ctrlKey || e.altKey) return

  if (e.key === 'l' || e.key === 'L') setMode('laser')
  else if (e.key === 'd' || e.key === 'D') setMode('draw')
  else if (e.key === 'Escape') mode.value = 'off'
  else if ((e.key === 'c' || e.key === 'C') && mode.value === 'draw') clearCanvas()
  else if (e.key === 'f' || e.key === 'F') toggleFullscreen()
}

watch(
  () => props.activeId,
  () => clearCanvas(),
)

onMounted(() => {
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('keydown', onKeydown)
  document.addEventListener('fullscreenchange', onFullscreenChange)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeCanvas)
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('keydown', onKeydown)
  document.removeEventListener('fullscreenchange', onFullscreenChange)
})
</script>

<template>
  <div ref="laserEl" class="rf-laser" v-show="mode === 'laser'" aria-hidden="true" />

  <canvas
    ref="canvasEl"
    class="rf-draw-canvas"
    :class="{ 'is-active': mode === 'draw' }"
    @pointerdown="startDraw"
    @pointermove="moveDraw"
    @pointerup="endDraw"
    @pointerleave="endDraw"
  />

  <div class="rf-toolkit" role="toolbar" aria-label="Ferramentas de apresentação">
    <div v-if="mode === 'draw'" class="rf-toolkit-colors">
      <button
        v-for="c in colors"
        :key="c"
        type="button"
        class="rf-toolkit-swatch"
        :class="{ 'is-active': color === c }"
        :style="{ background: c }"
        :aria-label="`Cor ${c}`"
        @click="color = c"
      />
      <button type="button" class="rf-toolkit-btn rf-toolkit-btn--small" title="Limpar (C)" aria-label="Limpar desenho" @click="clearCanvas">🧹</button>
    </div>

    <button
      type="button"
      class="rf-toolkit-btn"
      :class="{ 'is-active': mode === 'laser' }"
      title="Ponteiro laser (L)"
      aria-label="Ativar ponteiro laser"
      @click="setMode('laser')"
    >🔴</button>
    <button
      type="button"
      class="rf-toolkit-btn"
      :class="{ 'is-active': mode === 'draw' }"
      title="Desenhar (D)"
      aria-label="Ativar desenho livre"
      @click="setMode('draw')"
    >✏️</button>
    <button
      type="button"
      class="rf-toolkit-btn"
      :class="{ 'is-active': isFullscreen }"
      title="Tela cheia (F)"
      aria-label="Alternar tela cheia"
      @click="toggleFullscreen"
    >⛶</button>
  </div>
</template>

<style scoped>
.rf-laser {
  position: fixed;
  top: 0;
  left: 0;
  width: 22px;
  height: 22px;
  margin: -11px 0 0 -11px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 45, 45, 0.95) 0%, rgba(255, 45, 45, 0.55) 45%, rgba(255, 45, 45, 0) 75%);
  box-shadow: 0 0 18px 6px rgba(255, 45, 45, 0.55);
  pointer-events: none;
  z-index: 300;
  will-change: transform;
}

.rf-draw-canvas {
  position: fixed;
  inset: 0;
  z-index: 250;
  pointer-events: none;
  touch-action: none;
}

.rf-draw-canvas.is-active {
  pointer-events: auto;
  cursor: crosshair;
}

.rf-toolkit {
  position: fixed;
  right: clamp(0.75rem, 2vw, 1.5rem);
  bottom: clamp(0.75rem, 2vw, 1.5rem);
  z-index: 260;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.rf-toolkit-colors {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: color-mix(in srgb, var(--rf-bg) 88%, transparent);
  backdrop-filter: blur(10px);
  border: 1px solid var(--rf-border-primary);
  border-radius: 999px;
  padding: 0.4rem 0.5rem;
}

.rf-toolkit-swatch {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  padding: 0;
}

.rf-toolkit-swatch.is-active {
  border-color: var(--rf-text-primary);
}

.rf-toolkit-btn {
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid var(--rf-border-primary);
  background: color-mix(in srgb, var(--rf-bg) 88%, transparent);
  backdrop-filter: blur(10px);
  color: var(--rf-text-primary);
  font-size: 1.1rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.rf-toolkit-btn--small {
  width: 32px;
  height: 32px;
  font-size: 0.9rem;
}

.rf-toolkit-btn.is-active {
  border-color: var(--rf-highlight);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--rf-highlight) 40%, transparent);
}

@media print {
  .rf-toolkit,
  .rf-laser,
  .rf-draw-canvas {
    display: none !important;
  }
}
</style>
