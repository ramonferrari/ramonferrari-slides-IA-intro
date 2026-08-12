<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps<{
  id: string
  hero?: boolean
}>()

const rootEl = ref<HTMLElement | null>(null)
let resizeObserver: ResizeObserver | null = null

async function fitH1() {
  await nextTick()
  const el = rootEl.value?.querySelector<HTMLElement>('h1:not(.rf-hero)')
  if (!el) return
  el.style.fontSize = ''
  let guard = 0
  while (el.scrollWidth > el.offsetWidth + 2 && guard < 200) {
    const curr = parseFloat(getComputedStyle(el).fontSize)
    if (curr <= 14) break
    el.style.fontSize = curr - 1 + 'px'
    guard++
  }
}

onMounted(() => {
  fitH1()
  if (rootEl.value) {
    resizeObserver = new ResizeObserver(() => fitH1())
    resizeObserver.observe(rootEl.value)
  }
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
})
</script>

<template>
  <section
    :id="props.id"
    ref="rootEl"
    class="rf-slide slidev-layout"
    :class="{ 'rf-slide--hero': props.hero }"
    data-slide
  >
    <div class="rf-slide-inner">
      <slot />
    </div>
  </section>
</template>
