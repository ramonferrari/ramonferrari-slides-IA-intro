<script setup lang="ts">
const props = defineProps({
  prompt: {
    type: String,
    default: ""
  },
  model: {
    type: String,
    default: ""
  },
  provider: {
    type: String,
    default: ""
  },
  version: {
    type: String,
    default: ""
  }
})
const modelLabel =
  props.model
    ? [
        props.model,
        props.provider,
        props.version
      ]
        .filter(Boolean)
        .join(" · ")
    : "General LLM"
</script>
<template>
  <div class="rf-llm">
    <div class="rf-user">
      <div class="rf-user-label">
        user
      </div>
      <div class="rf-user-content">
        {{ prompt }}
      </div>
    </div>
    <div class="rf-response">
      <div class="rf-model">
        {{ modelLabel }}
      </div>
      <div class="rf-response-content">
  <slot />

  <span
    v-if="streaming"
    class="rf-cursor"
  >
    ▋
  </span>
</div>
    </div>
  </div>
</template>
<style scoped>
.rf-llm {
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
.rf-user {
  padding: 1.4rem 1.6rem;
  border-bottom:
    1px solid rgba(255,255,255,0.06);
}
.rf-user-label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color:
    rgba(255,255,255,0.42);
  margin-bottom: 0.6rem;
  font-family:
    "JetBrains Mono",
    monospace;
}
.rf-user-content {
  color:
    rgba(255,255,255,0.92);
}
.rf-response {
  padding: 1.6rem;
}
.rf-model {
  margin-bottom: 1rem;
  color:
    #E0496C;
  font-size: 0.74rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-family:
    "JetBrains Mono",
    monospace;
}
.rf-response-content {
  color:
    rgba(255,255,255,0.84);
  line-height: 1.8;
}
</style>