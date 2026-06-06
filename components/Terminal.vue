<template>
  <div class="terminal" :style="terminalStyle" ref="terminalRef">
    <!-- Title bar -->
    <div class="term-bar">
      <div class="term-dots">
        <span class="dot dot-red" />
        <span class="dot dot-yellow" />
        <span class="dot dot-green" />
      </div>
      <span class="term-title">{{ modelName || 'terminal' }}</span>
      <span class="term-spacer" />
    </div>

    <!-- Body -->
    <div class="term-body" ref="bodyRef">
      <div
        v-for="(entry, i) in entries"
        :key="i"
        class="term-entry"
      >
        <!-- User prompt -->
        <div class="term-prompt">
          <span class="prompt-symbol">User:</span>
          <div class="prompt-user">{{ entry.user }}</div>
        </div>

        <!-- Model response -->
        <div class="term-response" v-if="entry.revealed !== undefined">
          <span class="response-name" :style="{ color: modelColor }">
            {{ modelLabel }}
          </span>
          <span class="response-text">
            {{ entry.revealed }}<span
              class="cursor-blink"
              v-if="streamingIndex === i && !entry.done"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const props = defineProps({
  conversation: {
    type: Array,
    default: () => [
      {
        user: 'Explica o que é uma context window em uma linha.',
        response: 'É a memória de trabalho do modelo: tudo que ele pode "ver" durante uma única sessão — histórico, arquivos, instruções e resultados de ferramentas.',
      },
    ],
  },
  modelName: {
    type: String,
    default: 'Claude Sonnet 4.5',
  },
  fontSize: {
    type: String,
    default: '0.88rem',
  },
  streamSpeed: {
    type: Number,
    default: 22,
  },
  entryDelay: {
    type: Number,
    default: 600,
  },
  loop: {
    type: Boolean,
    default: false,
  },
})

const terminalRef = ref(null)
const isVisible = useElementVisibility(terminalRef)

const modelColor = computed(() => {
  const n = (props.modelName || '').toLowerCase()
  if (n.includes('claude') || n.includes('anthropic')) return '#e8845a'
  if (n.includes('chatgpt') || n.includes('openai') || n.includes('gpt')) return '#63d3a1'
  if (n.includes('gemini') || n.includes('google')) return '#5ba4f5'
  return 'var(--rf-text-muted)'
})

const modelLabel = computed(() => props.modelName || 'Model')

const terminalStyle = computed(() => ({
  fontSize: props.fontSize,
}))

const entries = ref([])
const streamingIndex = ref(-1)
const bodyRef = ref(null)

let charTimer = null
let entryTimer = null

function reset() {
  clearTimeout(charTimer)
  clearTimeout(entryTimer)
  entries.value = []
  streamingIndex.value = -1
}

function streamEntry(idx) {
  const src = props.conversation[idx]
  if (!src) return

  entries.value.push({ ...src, revealed: '', done: false })
  streamingIndex.value = idx

  const full = src.response
  let pos = 0

  function nextChar() {
    if (pos <= full.length) {
      entries.value[idx].revealed = full.slice(0, pos)
      pos++
      scrollBottom()
      charTimer = setTimeout(nextChar, props.streamSpeed)
    } else {
      entries.value[idx].done = true
      streamingIndex.value = -1

      const nextIdx = idx + 1
      if (nextIdx < props.conversation.length) {
        entryTimer = setTimeout(() => streamEntry(nextIdx), props.entryDelay)
      } else if (props.loop) {
        entryTimer = setTimeout(() => {
          reset()
          streamEntry(0)
        }, props.entryDelay * 3)
      }
    }
  }

  nextChar()
}

function scrollBottom() {
  nextTick(() => {
    if (bodyRef.value) bodyRef.value.scrollTop = bodyRef.value.scrollHeight
  })
}

watch(isVisible, (visible) => {
  if (visible) {
    reset()
    setTimeout(() => streamEntry(0), 400)
  }
})

onMounted(() => {
  if (isVisible.value) {
    streamEntry(0)
  }
})

onUnmounted(() => {
  clearTimeout(charTimer)
  clearTimeout(entryTimer)
})

watch(() => props.conversation, () => {
  reset()
  streamEntry(0)
}, { deep: true })
</script>

<style scoped>
.terminal {
  border-radius: 14px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.07),
    0 24px 60px rgba(0,0,0,0.55),
    0 0 80px rgba(30, 60, 120, 0.18);
  font-family: "JetBrains Mono", "Fira Code", "Cascadia Code", monospace;
  background: #0d1b2e;
  max-width: 100%;
}

:global(html.light) .terminal {
  background: #f5e8c0;
  box-shadow:
    0 0 0 1px rgba(0,0,0,0.10),
    0 24px 60px rgba(0,0,0,0.18);
}

.term-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.9rem;
  background: #162035;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  user-select: none;
}

:global(html.light) .term-bar {
  background: #e8d89a;
  border-bottom: 1px solid rgba(0,0,0,0.08);
}

.term-dots {
  display: flex;
  gap: 6px;
  align-items: center;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
}

.dot-red    { background: #ff5f57; box-shadow: 0 0 4px rgba(255,95,87,0.5); }
.dot-yellow { background: #ffbd2e; box-shadow: 0 0 4px rgba(255,189,46,0.5); }
.dot-green  { background: #28c840; box-shadow: 0 0 4px rgba(40,200,64,0.5); }

.term-title {
  flex: 1;
  text-align: center;
  font-size: 0.72em;
  letter-spacing: 0.04em;
  color: rgba(255,255,255,0.35);
  font-family: "Space Grotesk", sans-serif;
}

:global(html.light) .term-title {
  color: rgba(0,0,0,0.35);
}

.term-spacer {
  width: 42px;
}

.term-body {
  padding: 1.1rem 1.3rem 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  max-height: 340px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255,255,255,0.1) transparent;
  transition: max-height 0.3s ease-out;
}

:global(html.light) .term-body {
  scrollbar-color: rgba(0,0,0,0.1) transparent;
}

.term-prompt {
  display: flex;
  align-items: flex-start;
  gap: 0.5em;
  line-height: 1.55;
  margin-bottom: 0.6rem;
}

.prompt-symbol {
  color: #63d3a1;
  flex-shrink: 0;
  margin-top: 0.05em;
  font-size: 0.9em;
}

:global(html.light) .prompt-symbol {
  color: #2f8d65;
}

.prompt-user {
  color: rgba(255,255,255,0.88);
  white-space: pre-wrap;
  word-break: break-word;
}

:global(html.light) .prompt-user {
  color: rgba(20,20,20,0.88);
}

.term-response {
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  padding-left: 0.1em;
  line-height: 1.7;
}

.response-name {
  font-size: 0.82em;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.response-text {
  color: rgba(255,255,255,0.72);
  white-space: pre-wrap;
  word-break: break-word;
}

:global(html.light) .response-text {
  color: rgba(30,20,10,0.72);
}

.cursor-blink {
  display: inline-block;
  width: 0.55em;
  height: 1.1em;
  background: rgba(255,255,255,0.65);
  vertical-align: text-bottom;
  border-radius: 1px;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
}

:global(html.light) .cursor-blink {
  background: rgba(0,0,0,0.5);
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
</style>
