<template>
  <div class="rf-terminal">
    <div class="rf-terminal-top">
      <span />
      <span />
      <span />
    </div>
    <div class="rf-terminal-body">
      <slot />
    </div>
  </div>
</template>
<style scoped>
.rf-terminal {
  overflow: hidden;
  border-radius: 24px;
  background:
    #0a0f14;
  border:
    1px solid rgba(255,255,255,0.08);
  box-shadow:
    0 20px 60px rgba(0,0,0,0.35);
}
.rf-terminal-top {
  display: flex;
  gap: 8px;
  padding:
    14px 18px;
  border-bottom:
    1px solid rgba(255,255,255,0.06);
}
.rf-terminal-top span {
  width: 11px;
  height: 11px;
  border-radius: 999px;
  background:
    rgba(255,255,255,0.24);
}
.rf-terminal-body {
  padding: 1.5rem;
  font-family:
    "JetBrains Mono",
    monospace;
  font-size: 0.92rem;
  line-height: 1.8;
  color:
    rgba(220,235,228,0.92);
}
</style>