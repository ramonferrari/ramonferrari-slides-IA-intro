<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  src: string
  alt?: string
  size?: string | number
  scale?: number
  borderColor?: string
  borderWidth?: string | number
  x?: string | number
  y?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  size: '160px',
  scale: 1,
  borderColor: 'var(--rf-primary)',
  borderWidth: '4px'
})

const parseUnit = (val: string | number | undefined) => {
  if (val === undefined) return undefined
  if (typeof val === 'number') return `${val}px`
  if (typeof val === 'string' && /^\d+(\.\d+)?$/.test(val)) return `${val}px`
  return val
}

const containerStyle = computed(() => {
  const sizeVal = parseUnit(props.size)
  const borderVal = parseUnit(props.borderWidth)
  
  const s: Record<string, any> = {
    width: sizeVal,
    height: sizeVal,
    border: `${borderVal} solid ${props.borderColor}`,
    transform: `scale(${props.scale})`
  }

  if (props.x !== undefined || props.y !== undefined) {
    s.position = 'absolute'
    s.zIndex = 10
    if (props.x !== undefined) s.left = parseUnit(props.x)
    if (props.y !== undefined) s.top = parseUnit(props.y)
  }
  
  return s
})
</script>

<template>
  <div class="circular-image-container" :style="containerStyle">
    <img :src="src" :alt="alt" class="circular-image" />
  </div>
</template>

<style scoped>
.circular-image-container {
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--rf-shadow);
  background: var(--rf-surface-primary);
  aspect-ratio: 1 / 1;
  transition: transform 0.4s var(--rf-ease);
  flex-shrink: 0;
  position: relative;
}

.circular-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
