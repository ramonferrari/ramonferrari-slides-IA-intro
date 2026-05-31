<template>
  <div
    class="cover h-full flex flex-col items-center justify-between py-16"
    :style="{
      '--gap-eyebrow':    gapEyebrow,
      '--gap-subtitle':   gapSubtitle,
      '--gap-meta':       gapMeta,
      '--gap-meta-items': gapMetaItems,
    }"
  >

    <div class="cover-bg" />

    <div class="cover-body relative flex flex-col items-center text-center">
      <div v-if="eyebrow" class="rf-eyebrow cover-item" style="--i:0">
        {{ eyebrow }}
      </div>

      <h1 class="rf-hero cover-title cover-item" style="--i:1" v-html="title" />

      <p v-if="subtitle" class="cover-subtitle cover-item" style="--i:2" v-html="subtitle" />
    </div>

    <div class="cover-meta relative cover-item" style="--i:3">
      <div class="cover-divider" />
      <div class="cover-meta-items">
        <div v-if="presenter" class="cover-presenter">{{ presenter }}</div>
        <div v-if="role" class="cover-role">{{ role }}</div>
        <div v-if="location" class="cover-detail">{{ location }}</div>
        <div v-if="date" class="cover-detail">{{ date }}</div>
      </div>
    </div>

  </div>
</template>

<script setup>
defineProps({
  eyebrow:      String,
  title:        { type: String, required: true },
  subtitle:     String,
  presenter:    String,
  role:         String,
  location:     String,
  date:         String,

  // Espaçamento entre cada elemento — altere conforme necessário
  gapEyebrow:    { type: String, default: '1rem'    }, // eyebrow → título
  gapSubtitle:   { type: String, default: '0.25rem'  }, // título → subtítulo
  gapMeta:       { type: String, default: '4rem'    }, // corpo → bloco do apresentador
  gapMetaItems:  { type: String, default: '0.5rem' }, // entre nome / cidade / data
})
</script>

<style scoped>
.cover-bg {
  position: absolute;
  inset: 0;
  background: var(--rf-bg);
  background-image:
    radial-gradient(circle at 100% 0%, var(--rf-glow) 0%, transparent 40%),
    radial-gradient(circle at 0% 100%, var(--rf-glow) 0%, transparent 35%);
}

/* Staggered reveal — each element sets --i to control its delay */
.cover-item {
  opacity: 0;
  animation: coverReveal 1s cubic-bezier(0.22, 1, 0.36, 1)
    calc(0.1s + var(--i) * 0.18s) forwards;
}

@keyframes coverReveal {
  from {
    opacity: 0;
    transform: translateY(28px);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

/* Spacing controlled by props */
h1         { margin-top: var(--gap-eyebrow); }
.cover-subtitle { margin-top: var(--gap-subtitle); }
.cover-meta     { margin-top: var(--gap-meta); }

.cover-meta-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-meta-items);
  padding-top: 1.25rem;
}

/* Divider between body and meta — colored, animated */
.cover-divider {
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--rf-primary), transparent);
  animation: lineExpand 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.55s forwards;
}

@keyframes lineExpand {
  to { width: 96px; }
}

.cover-meta {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cover-title {
  color: var(--rf-text-primary);
}

.cover-subtitle {
  font-size: clamp(1rem, 2.2vw, 1.35rem);
  color: var(--rf-text-secondary);
  line-height: 1.65;
  max-width: 52ch;
  font-weight: 400;
}

.cover-presenter {
  font-size: 1rem;
  font-weight: 600;
  color: var(--rf-text-primary);
}

.cover-role,
.cover-detail {
  font-size: 0.82rem;
  color: var(--rf-text-muted);
  line-height: 1.6;
}
</style>
