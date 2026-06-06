<script setup lang="ts">
import { ref, onMounted, computed, watch, nextTick } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const props = defineProps({
  value: { type: [Number, String], required: true },
  duration: { type: Number, default: 2500 },
  padding: { type: Number, default: 0 }
})

const target = ref(null)
const isVisible = useElementVisibility(target)

const digits = computed(() => {
  let s = String(props.value)
  if (props.padding > 0 && !isNaN(Number(s))) {
    s = s.padStart(props.padding, '0')
  }
  return s.split('')
})

const animatedDigits = ref<number[]>([])

const runAnimation = async () => {
  const targetDigits = digits.value.map(d => {
    const n = parseInt(d)
    return isNaN(n) ? -1 : n
  })
  
  animatedDigits.value = targetDigits.map(n => n === -1 ? -1 : 0)
  
  await nextTick()
  setTimeout(() => {
    animatedDigits.value = [...targetDigits]
  }, 150)
}

watch(isVisible, (visible) => {
  if (visible) {
    runAnimation()
  }
})

onMounted(() => {
  if (isVisible.value) {
    runAnimation()
  }
})

watch(() => props.value, runAnimation)

</script>

<template>
  <span ref="target" class="animated-number-container">
    <span v-for="(digit, idx) in digits" :key="idx" class="digit-box">
      <div 
        v-if="animatedDigits[idx] !== -1"
        class="digit-strip" 
        :style="{ 
          transform: `translateY(-${((animatedDigits[idx] || 0) * 10)}%)`,
          transition: `transform ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`
        }"
      >
        <div v-for="n in 10" :key="n" class="digit-val">{{ n - 1 }}</div>
      </div>
      <div v-else class="digit-val static-char">{{ digit }}</div>
    </span>
  </span>
</template>

<style scoped>
.animated-number-container {
  display: inline-flex;
  align-items: baseline;
  height: 1.1em;
  line-height: 1.1em;
}

.digit-box {
  display: inline-block;
  height: 1.1em;
  overflow: hidden;
  position: relative;
}

.digit-strip {
  display: flex;
  flex-direction: column;
  will-change: transform;
}

.digit-val {
  height: 1.1em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-variant-numeric: tabular-nums;
  min-width: 1ch;
  line-height: 1.1;
}

.static-char {
  min-width: 0.3ch;
}
</style>
