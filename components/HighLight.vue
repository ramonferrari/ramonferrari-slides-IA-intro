<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: ""
  },
  glow: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <span
    class="rf-accent"
    :class="{
      'rf-accent-glow': glow
    }"
    :style="color ? { color } : {}"
  >
    <slot />
  </span>
</template>
<style scoped>
.rf-accent {
  color:
    #35996e;
  font-weight:
    600;
  text-shadow:
    none !important;
}
.rf-accent-glow {
  text-shadow:
    0 0 18px currentColor;
}
html.light .rf-accent {
  color:
    #2f8d65;
}
</style>