<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
  caption?: string
  position?: "left" | "right" | "center" | "full"
  width?: string
  maxWidth?: string
  fit?: "cover" | "contain"
}>()
</script>
<template>
  <!-- FULL -->
  <div
    v-if="position === 'full'"
    class="rf-image-full glass"
  >
    <img
      :src="src"
      :alt="alt"
      :class="fit || 'cover'"
    />
    <div
      v-if="caption"
      class="rf-caption"
    >
      {{ caption }}
    </div>
  </div>
  <!-- CENTER -->
  <div v-else-if="position === 'center'" style="text-align: center;">
    <div class="glass" style="display: inline-block; padding: 1.5rem;">
      <img
        :src="src"
        :alt="alt"
        :class="fit || 'contain'"
        :style="{ width: width || '70%', maxWidth: maxWidth, borderRadius: '18px', display: 'block' }"
      />
    </div>
    <div v-if="caption" class="rf-caption">{{ caption }}</div>
  </div>
  <!-- SIDE -->
  <div
    v-else
    class="rf-image-panel"
    :class="{ reverse: position === 'right' }"
  >
    <div class="glass rf-image-side">
      <img
        :src="src"
        :alt="alt"
        :class="fit || 'cover'"
      />
      <div
        v-if="caption"
        class="rf-caption"
      >
        {{ caption }}
      </div>
    </div>
    <div class="rf-content-side">
      <slot />
    </div>
  </div>
</template>
<style scoped>
.rf-image-panel {
  display: grid;
  grid-template-columns:
    1.1fr 1fr;
  gap: 2rem;
  align-items: center;
}
.rf-image-panel.reverse {
  grid-template-columns:
    1fr 1.1fr;
}
.rf-image-panel.reverse .rf-image-side {
  order: 2;
}
.rf-image-panel.reverse .rf-content-side {
  order: 1;
}
.rf-image-side {
  overflow: hidden;
  padding: 1rem;
}
.rf-image-wrapper {
  padding: 1.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.rf-image-side img,
.rf-image-full img {
  width: 100%;
  border-radius: 18px;
  display: block;
}
.rf-image-wrapper img {
  border-radius: 18px;
  display: block;
  width: auto;
  height: auto;
}
.rf-content-side {
  line-height: 1.7;
}
.rf-image-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.rf-image-full {
  padding: 1rem;
}
.rf-caption {
  margin-top: 0.8rem;
  opacity: 0.7;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
}
.cover {
  object-fit: cover;
}
.contain {
  object-fit: contain;
}
</style>