<template>
  <div class="rf-subtitle">
    <slot />
  </div>
</template>
<style scoped>
.rf-subtitle {
  margin-top:
    0.5rem;
  margin-bottom:
    1.2rem;
  font-size:
    1.05rem;
  line-height:
    1.6;
  color:
    rgba(255,255,255,0.58);
  max-width:
    900px;
  font-weight:
    400;
}
html.light .rf-subtitle {
  color:
    rgba(17,24,39,0.62);
}
</style>