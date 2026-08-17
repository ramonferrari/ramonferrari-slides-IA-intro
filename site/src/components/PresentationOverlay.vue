<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{
  mode: 'off' | 'laser' | 'draw'
  color: string
}>()

const canvasEl = ref<HTMLCanvasElement | null>(null)
const laserEl = ref<HTMLDivElement | null>(null)

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

function onPointerMove(e: PointerEvent) {
  if (props.mode === 'laser' && laserEl.value) {
    laserEl.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  }
}

function startDraw(e: PointerEvent) {
  if (props.mode !== 'draw' || !ctx) return
  drawing = true
  lastX = e.clientX
  lastY = e.clientY
}

function moveDraw(e: PointerEvent) {
  if (!drawing || props.mode !== 'draw' || !ctx) return
  ctx.strokeStyle = props.color
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

onMounted(() => {
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  window.addEventListener('pointermove', onPointerMove)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeCanvas)
  window.removeEventListener('pointermove', onPointerMove)
})

defineExpose({ clearCanvas })
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
  /* Abaixo da nav (z-index 50) para não capturar cliques nela — o
     desenho deve ficar só sobre o conteúdo do slide, nunca sobre a
     barra superior/botões. */
  z-index: 45;
  pointer-events: none;
  touch-action: none;
}

.rf-draw-canvas.is-active {
  pointer-events: auto;
  cursor: crosshair;
}

@media print {
  .rf-laser,
  .rf-draw-canvas {
    display: none !important;
  }
}
</style>
