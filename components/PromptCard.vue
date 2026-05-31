<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "Extraction Prompt"
  },
  compact: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <div
    class="rf-prompt"
    :class="{
      'rf-prompt-compact': compact
    }"
  >
    <div class="rf-prompt-header">
      <div class="rf-prompt-dot" />
      <div class="rf-prompt-title">
        {{ title }}
      </div>
    </div>
    <div class="rf-prompt-content">
      <slot />
    </div>
  </div>
</template>
<style scoped>
.rf-prompt {
  border-radius:
    28px;
  border:
    1px solid rgba(255,255,255,0.08);
  background:
    rgba(255,255,255,0.03);
  backdrop-filter:
    blur(20px);
  padding:
    1.4rem;
  box-shadow:
    0 20px 60px rgba(0,0,0,0.32);
  font-size: inherit;
}
.rf-prompt-compact {
  padding:
    1rem;
}
.rf-prompt-header {
  display:
    flex;
  align-items:
    center;
  gap:
    0.7rem;
  margin-bottom:
    1rem;
}
.rf-prompt-dot {
  width:
    10px;
  height:
    10px;
  border-radius:
    999px;
  background:
    #35996e;
  box-shadow:
    0 0 18px rgba(53,153,110,0.45);
}
.rf-prompt-title {
  font-size:
    0.76rem;
  text-transform:
    uppercase;
  letter-spacing:
    0.12em;
  color:
    rgba(255,255,255,0.52);
  font-family:
    "JetBrains Mono",
    monospace;
}
.rf-prompt-content {
  white-space:
    pre-wrap;
  line-height:
    1.7;
  font-size:
    inherit;
  color:
    rgba(255,255,255,0.90);
}
html.light .rf-prompt {
  background:
    rgba(255,255,255,0.82);
  border-color:
    rgba(15,23,42,0.08);
}
html.light .rf-prompt-title {
  color:
    rgba(15,23,42,0.52);
}
html.light .rf-prompt-content {
  color:
    #111827;
}
.rf-prompt-content :deep(p),
.rf-prompt-content :deep(ul),
.rf-prompt-content :deep(li) {
  font-size:
    inherit;
  line-height:
    inherit;
}
.rf-prompt-content :deep(p) {
  margin:
    0;
}
.rf-prompt-content :deep(ul) {
  margin-top:
    0.8rem;
  padding-left:
    1.2rem;
}
.rf-prompt-content :deep(p),
.rf-prompt-content :deep(ul),
.rf-prompt-content :deep(li) {
  font-size:
    inherit;
  line-height:
    inherit;
  color:
    inherit;
  opacity:
    inherit;
  font-weight:
    inherit;
}
.rf-prompt-content :deep(p) {
  margin:
    0;
}
.rf-prompt-content :deep(p + p),
.rf-prompt-content :deep(p + ul),
.rf-prompt-content :deep(ul + p) {
  margin-top:
    0.9rem;
}
</style>