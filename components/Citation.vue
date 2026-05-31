<script setup lang="ts">
import references from '../data/references.json'
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  mode: {
    type: String,
    default: 'citep' // citep | citet
  }
})
const refData =
  (references as Record<string, any>)[
    props.id.toLowerCase()
  ]
function citationText() {
  if (!refData) {
    return `[missing: ${props.id}]`
  }
  if (props.mode === 'citet') {
    return refData.apa_citet
  }
  return refData.apa_citep
}
</script>
<template>
  <a
  class="rf-citation"
  :href="refData?.url || '#'"
  target="_blank"
  rel="noopener noreferrer"
>
    <!-- INLINE CITATION -->
    <span class="rf-citation-text">
      {{ citationText() }}
    </span>
    <!-- POPUP -->
    <div
      v-if="refData"
      class="rf-citation-popup"
    >
      <!-- FULL REFERENCE -->
      <div class="rf-citation-reference">
        {{ refData.apa_reference }}
      </div>
      <!-- ABSTRACT -->
      <div
        v-if="refData.abstract"
        class="rf-citation-abstract"
      >
        {{ refData.abstract }}
      </div>
    </div>
  </a>
</template>
<style scoped>
/* ════════════════════════════════════════════
   INLINE CITATION
════════════════════════════════════════════ */
.rf-citation {
  position:
    relative;
  display:
    inline;
  cursor:
    help;
  color:
    inherit;
  text-decoration:
    none;
  font-weight:
    inherit;
  line-height:
    inherit;
  vertical-align:
    baseline;
  }
/* TEXT */
.rf-citation-text {
  transition:
    opacity 0.2s ease,
    color 0.2s ease;
  color:
    var(--rf-link);
}
.rf-citation-link {

  text-shadow:
    none !important;
}
/* ════════════════════════════════════════════
   POPUP — BASE STATE
════════════════════════════════════════════ */
.rf-citation-popup {
  position:
    fixed;
  left:
    50%;
  top:
    50%;
  width:
    min(720px, calc(100vw - 64px));
  max-height:
    min(70vh, 720px);
  overflow:
    auto;
  z-index:
    9999;
  opacity:
    0;
  visibility:
    hidden;
  pointer-events:
    none;
  transform:
    translate(-50%, -48%);
  transition:
    opacity 0.18s ease,
    transform 0.18s ease,
    visibility 0.18s ease,
    border-color 0.18s ease;
  border-radius:
    28px;
  padding:
    1.4rem;
  background:
    rgba(15,23,42,0.96);
  border:
    1px solid rgba(255,255,255,0.08);
  backdrop-filter:
    blur(28px);
  box-shadow:
    0 30px 80px rgba(0,0,0,0.45);
  overflow-wrap:
    break-word;
}
/* ════════════════════════════════════════════
   SHOW ON HOVER
════════════════════════════════════════════ */
.rf-citation:hover .rf-citation-popup,
.rf-citation-popup:hover {
  opacity:
    1;
  visibility:
    visible;
  pointer-events:
    auto;
  transform:
    translate(-50%, -50%);
  border-color:
    #e2f81b;
}
/* ════════════════════════════════════════════
   REFERENCE
════════════════════════════════════════════ */
.rf-citation-reference {
  color:
    rgba(255,255,255,0.96);
  line-height:
    1.6;
  font-size:
    0.86rem;
  font-weight:
    500;
}
/* ════════════════════════════════════════════
   ABSTRACT
════════════════════════════════════════════ */
.rf-citation-abstract {
  margin-top:
    1rem;
  padding-top:
    1rem;
  border-top:
    1px solid rgba(255,255,255,0.08);
  color:
    rgba(255,255,255,0.72);
  line-height:
    1.6;
  font-size:
    0.82rem;
  max-height:
    260px;
  overflow:
    auto;
  display:
    -webkit-box;
  line-clamp:
    8;
  -webkit-line-clamp:
    8;
  -webkit-box-orient:
    vertical;
  overflow:
    hidden;
}
/* ════════════════════════════════════════════
   LIGHT MODE
════════════════════════════════════════════ */
html.light .rf-citation-popup {
  background:
    rgba(255,255,255,0.96);
  border:
    1px solid rgba(15,23,42,0.08);
}
html.light .rf-citation-reference {
  color:
    rgba(17,24,39,0.96);
}
html.light .rf-citation-abstract {
  color:
    rgba(17,24,39,0.72);
  border-top:
    1px solid rgba(15,23,42,0.08);
}
</style>