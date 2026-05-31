<script setup lang="ts">
const props = defineProps<{
  before?: string
  after?: string
  language?: string
}>()
const beforeLabel =
  props.language === 'pt'
    ? 'ANTES'
    : 'BEFORE'
const afterLabel =
  props.language === 'pt'
    ? 'DEPOIS'
    : 'AFTER'
</script>
<template>
  <div class="rf-before-after">
    <div class="glass rf-side">
      <div class="rf-label rf-before">
        {{ beforeLabel }}
      </div>
      <div class="rf-content">
        <slot name="before">
          {{ before }}
        </slot>
      </div>
    </div>
    <div class="glass rf-side">
      <div class="rf-label rf-after">
        {{ afterLabel }}
      </div>
      <div class="rf-content">
        <slot name="after">
          {{ after }}
        </slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
.rf-before-after {
  display:
    grid;
  grid-template-columns:
    repeat(2, minmax(0,1fr));
  gap:
    1.5rem;
}
.rf-label {
  font-size:
    0.72rem;
  letter-spacing:
    0.14em;
  margin-bottom:
    1rem;
  font-family:
    "JetBrains Mono",
    monospace;
}
.rf-before {
  color:
    #7DD5DB;
}
.rf-after {
  color:
    #f59e0b;
}
.rf-content {
  line-height:
    1.7;
}
</style>