<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import { useNav } from '@slidev/client'
import BottomBar from "../components/BottomBar.vue"
import TopBar from "../components/TopBar.vue"

const props = defineProps({
  title: { type: String },
})

const { currentPage } = useNav()
const layoutEl = ref<HTMLElement | null>(null)

async function fitH1() {
  await nextTick()
  const el = layoutEl.value?.querySelector<HTMLElement>('h1:not(.rf-hero)')
  if (!el) return
  el.style.fontSize = ''
  while (el.scrollWidth > el.offsetWidth + 2) {
    const curr = parseFloat(getComputedStyle(el).fontSize)
    if (curr <= 14) break
    el.style.fontSize = (curr - 1) + 'px'
  }
}

onMounted(fitH1)
watch(currentPage, fitH1)
</script>

<template>
  <div ref="layoutEl" class="slidev-layout default relative h-full">
    <TopBar />
    <slot />
    <BottomBar :title="props.title" />
  </div>
</template>
