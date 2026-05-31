<script setup lang="ts">
const props = defineProps({
  top: {
    type: String,
    default: "Business"
  },
  left: {
    type: String,
    default: "Statistics"
  },
  right: {
    type: String,
    default: "Computing"
  },
  center: {
    type: String,
    default: "Data Science"
  },
  size: {
    type: String,
    default: "720px"
  },
  transpLight: {
    type: Number,
    default: 0.14
  },
  transpDark: {
    type: Number,
    default: 0.10
  },
  centerSize: {
    type: String,
    default: ""
  },
})
function splitLines(text: string) {
  return text
    .replace(/\\n/g, '\n')
    .split('\n')
}
const topLines =
  splitLines(props.top)
const leftLines =
  splitLines(props.left)
const rightLines =
  splitLines(props.right)
const centerLines =
  splitLines(props.center)
</script> 
/*
IMPORTANT:
Slidev/Vue receives:
center="Ciência de\\nDados"
So we convert literal "\n"
into actual line breaks.
*/
<template>
  <div
    class="rf-venn-wrapper"
    :style="{ width: size }"
  >
    <svg
      viewBox="0 0 700 560"
      class="rf-venn"
    >
      <!-- LEFT -->
      <circle
        cx="238"
        cy="300"
        r="170"
        class="rf-circle rf-left"
        :style="{
          fill: `rgba(150,120,232,${transpDark})`
        }"
      />
      <!-- RIGHT -->
      <circle
        cx="462"
        cy="300"
        r="170"
        class="rf-circle rf-right"
        :style="{
          fill: `rgba(224,73,108,${transpDark})`
        }"
      />
      <!-- TOP -->
      <circle
        cx="350"
        cy="170"
        r="170"
        class="rf-circle rf-top"
        :style="{
          fill: `rgba(53,153,110,${transpDark})`
        }"
      />
      <!-- LABELS -->
      <text
        x="210"
        y="340"
        text-anchor="middle"
        class="rf-label"
      >
        <tspan
          v-for="(line, index) in leftLines"
          :key="index"
          x="190"
          :dy="index === 0 ? 0 : 24"
        >
          {{ line }}
        </tspan>
</text>
      <text
        x="480"
        y="340"
        text-anchor="middle"
        class="rf-label"
      >
        <tspan
          v-for="(line, index) in rightLines"
          :key="index"
          x="500"
          :dy="index === 0 ? 0 : 24"
        >
          {{ line }}
        </tspan>
      </text>
      <text
        x="350"
        y="90"
        text-anchor="middle"
        class="rf-label"
      >
        <tspan
          v-for="(line, index) in topLines"
          :key="index"
          x="350"
          :dy="index === 0 ? 0 : 24"
        >
          {{ line }}
        </tspan>
      </text>
      <!-- CENTER -->
      <text
        x="350"
        y="260"
        text-anchor="middle"
        class="rf-center-title"
        :style="{ fontSize: centerSize + 'px' }"
      >
        <tspan
          v-for="(line, index) in centerLines"
          :key="index"
          x="350"
          :dy="index === 0 ? 0 : 24"
        >
          {{ line }}
        </tspan>
      </text>
    </svg>
  </div>
</template>
<style scoped>
.rf-venn-wrapper {
  margin:
    0 auto;
  display:
    flex;
  justify-content:
    center;
}
.rf-venn {
  width:
    100%;
  height:
    auto;
  overflow:
    visible;
}
/* CIRCLES */
.rf-circle {
  stroke-width:
    2.5px;
  transition:
    all 0.35s ease;
}
.rf-circle:hover {
  fill-opacity:
    0.16;
}
/* COLORS */
.rf-top {
  stroke:
    rgba(53,153,110,0.85);
  filter:
    drop-shadow(0 0 24px rgba(53,153,110,0.14));
}
.rf-left {
  stroke:
    rgba(150,120,232,0.82);
  filter:
    drop-shadow(0 0 24px rgba(150,120,232,0.12));
}
.rf-right {
  stroke:
    rgba(224,73,108,0.82);
  filter:
    drop-shadow(0 0 24px rgba(224,73,108,0.12));
}
/* LABELS */
.rf-label {
  fill:
    rgba(255,255,255,0.92);
  font-size:
    1.25rem;
  font-weight:
    600;
  font-family:
    "Space Grotesk",
    sans-serif;
  letter-spacing:
    -0.03em;
}
/* CENTER */
.rf-center-title {
  fill:
    rgba(255,255,255,0.98);
  font-size:
    1.15rem;
  font-weight:
    700;
  letter-spacing:
    -0.03em;
  font-family:
    "Space Grotesk",
    sans-serif;
}
/* LIGHT MODE */
html.light .rf-top {
  fill:
    v-bind('`rgba(47,141,101,${transpLight})`');
  stroke:
    rgba(47,141,101,0.78);
}
html.light .rf-left {
  fill:
    v-bind('`rgba(124,92,214,${transpLight})`');
  stroke:
    rgba(124,92,214,0.72);
}
html.light .rf-right {
  fill:
    v-bind('`rgba(214,77,110,${transpLight})`');
  stroke:
    rgba(214,77,110,0.72);
}
html.light .rf-label {
  fill:
    #111827;
}
html.light .rf-center-title {
  fill:
    #111827;
}
</style>