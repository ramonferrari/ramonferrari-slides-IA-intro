<template>
  <div class="rf-browser">
    <div class="rf-browser-top">
      <div class="rf-browser-dots">
        <span />
        <span />
        <span />
      </div>
      <div class="rf-browser-title">
        {{ title }}
      </div>
    </div>
    <div class="rf-browser-content">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>
<style scoped>
.rf-browser {
  overflow: hidden;
  border-radius: 28px;
  border:
    1px solid rgba(255,255,255,0.08);
  background:
    rgba(255,255,255,0.03);
  backdrop-filter:
    blur(20px);
  box-shadow:
    0 20px 60px rgba(0,0,0,0.35);
}
.rf-browser-top {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 52px;
  padding: 0 20px;
  border-bottom:
    1px solid rgba(255,255,255,0.06);
  background:
    rgba(255,255,255,0.03);
}
.rf-browser-dots {
  display: flex;
  gap: 8px;
}
.rf-browser-dots span {
  width: 12px;
  height: 12px;
  border-radius: 999px;
}
.rf-browser-dots span:nth-child(1) {
  background: #ff5f57;
}
.rf-browser-dots span:nth-child(2) {
  background: #febc2e;
}
.rf-browser-dots span:nth-child(3) {
  background: #28c840;
}
.rf-browser-title {
  font-size: 0.82rem;
  color:
    rgba(255,255,255,0.55);
  font-family:
    "JetBrains Mono",
    monospace;
}
.rf-browser-content {
  padding: 2rem;
}
</style>