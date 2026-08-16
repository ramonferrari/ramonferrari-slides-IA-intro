<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { slideMeta } from './slideMeta'
import PresentationToolkit from './components/PresentationToolkit.vue'

import CoverIntro from './slides/CoverIntro.vue'
import QuemSouEu from './slides/QuemSouEu.vue'
import VoceJaUsaIA from './slides/VoceJaUsaIA.vue'
import Bastidores from './slides/Bastidores.vue'
import OQueEIAGenerativa from './slides/OQueEIAGenerativa.vue'
import IACriaConteudoNovo from './slides/IACriaConteudoNovo.vue'
import JaEPresente from './slides/JaEPresente.vue'
import ComoFunciona from './slides/ComoFunciona.vue'
import OQueAIASabe from './slides/OQueAIASabe.vue'
import DeOndeVem from './slides/DeOndeVem.vue'
import MotorLLM from './slides/MotorLLM.vue'
import Tokens from './slides/Tokens.vue'
import JanelaContexto from './slides/JanelaContexto.vue'
import ProximaPalavra from './slides/ProximaPalavra.vue'
import SectionPrompt from './slides/SectionPrompt.vue'
import CorridaDasIAs from './slides/CorridaDasIAs.vue'
import ModeloLevePro from './slides/ModeloLevePro.vue'
import QuatroSaltos from './slides/QuatroSaltos.vue'
import QuatroTecnicas from './slides/QuatroTecnicas.vue'
import PromptRuimBom from './slides/PromptRuimBom.vue'
import CincoUsos from './slides/CincoUsos.vue'
import DoisConflitos from './slides/DoisConflitos.vue'
import DoisLimites from './slides/DoisLimites.vue'
import OQueNaoSubstitui from './slides/OQueNaoSubstitui.vue'
import SeteTropecos from './slides/SeteTropecos.vue'
import DuasRegras from './slides/DuasRegras.vue'
import PorOndeComecar from './slides/PorOndeComecar.vue'
import PerguntasFrequentes from './slides/PerguntasFrequentes.vue'
import EAgora from './slides/EAgora.vue'
import CoverFinal from './slides/CoverFinal.vue'

const navOpen = ref(false)
const activeId = ref('inicio')
const progress = ref(0)

const groupedNav = computed(() => {
  const groups: { name: string; items: typeof slideMeta }[] = []
  for (const item of slideMeta) {
    if (!item.group) continue
    let g = groups.find((g) => g.name === item.group)
    if (!g) {
      g = { name: item.group, items: [] }
      groups.push(g)
    }
    g.items.push(item)
  }
  return groups
})

let observer: IntersectionObserver | null = null

function onScroll() {
  const doc = document.documentElement
  const scrollable = doc.scrollHeight - doc.clientHeight
  progress.value = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0
}

function closeNav() {
  navOpen.value = false
}

function goToOffset(offset: number) {
  const ids = slideMeta.map((s) => s.id)
  const currentIndex = Math.max(0, ids.indexOf(activeId.value))
  const nextIndex = Math.min(ids.length - 1, Math.max(0, currentIndex + offset))
  const el = document.getElementById(ids[nextIndex])
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const pagingKeys: Record<string, number> = {
  ArrowRight: 1,
  ArrowDown: 1,
  PageDown: 1,
  ' ': 1,
  ArrowLeft: -1,
  ArrowUp: -1,
  PageUp: -1,
}

function onPagingKeydown(e: KeyboardEvent) {
  const target = e.target as HTMLElement | null
  if (target && ['INPUT', 'TEXTAREA', 'BUTTON', 'A'].includes(target.tagName)) return
  if (e.metaKey || e.ctrlKey || e.altKey) return
  const offset = pagingKeys[e.key]
  if (offset === undefined) return
  e.preventDefault()
  goToOffset(offset)
}

onMounted(() => {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-slide]'))
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible[0]) activeId.value = visible[0].target.id
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
  )
  sections.forEach((s) => observer!.observe(s))

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onPagingKeydown)
  onScroll()
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onPagingKeydown)
})
</script>

<template>
  <a href="#inicio" class="rf-skip-link">Pular para o conteúdo</a>

  <header class="rf-nav">
    <a href="#inicio" class="rf-nav-brand" @click="closeNav">
      A era da IA Generativa <b>· R. M. Ferrari</b>
    </a>

    <button
      type="button"
      class="rf-nav-toggle"
      :aria-expanded="navOpen"
      aria-label="Abrir sumário da apresentação"
      @click="navOpen = !navOpen"
    >
      {{ navOpen ? '✕ fechar' : '☰ sumário' }}
    </button>

    <nav class="rf-nav-links" :class="{ 'is-open': navOpen }" aria-label="Sumário da apresentação">
      <template v-for="group in groupedNav" :key="group.name">
        <span class="rf-nav-group-label">{{ group.name }}</span>
        <a
          v-for="item in group.items"
          :key="item.id"
          :href="`#${item.id}`"
          :class="{ 'is-active': activeId === item.id }"
          @click="closeNav"
        >{{ item.title }}</a>
      </template>
    </nav>

    <div class="rf-progress" :style="{ width: progress + '%' }" />
  </header>

  <div class="rf-nav-backdrop" :class="{ 'is-open': navOpen }" @click="closeNav" />

  <main id="main">
    <CoverIntro id="inicio" />
    <QuemSouEu id="quem-sou-eu" />
    <VoceJaUsaIA id="voce-ja-usa-ia" />
    <Bastidores id="bastidores" />

    <OQueEIAGenerativa id="o-que-e-ia-generativa" />
    <IACriaConteudoNovo id="ia-cria-conteudo-novo" />
    <JaEPresente id="ja-e-presente" />
    <ComoFunciona id="como-funciona" />
    <OQueAIASabe id="o-que-a-ia-sabe" />
    <DeOndeVem id="de-onde-vem" />
    <MotorLLM id="motor-llm" />
    <Tokens id="tokens" />
    <JanelaContexto id="janela-contexto" />
    <ProximaPalavra id="proxima-palavra" />

    <SectionPrompt id="section-prompt" />
    <CorridaDasIAs id="corrida-das-ias" />
    <ModeloLevePro id="modelo-leve-pro" />

    <QuatroSaltos id="quatro-saltos" />
    <QuatroTecnicas id="quatro-tecnicas" />
    <PromptRuimBom id="prompt-ruim-bom" />
    <CincoUsos id="cinco-usos" />

    <DoisConflitos id="dois-conflitos" />
    <DoisLimites id="dois-limites" />
    <OQueNaoSubstitui id="o-que-nao-substitui" />
    <SeteTropecos id="sete-tropecos" />
    <DuasRegras id="duas-regras" />

    <PorOndeComecar id="por-onde-comecar" />
    <PerguntasFrequentes id="perguntas-frequentes" />
    <EAgora id="e-agora" />
    <CoverFinal id="obrigado" />
  </main>

  <footer class="rf-footer">
    <a href="https://ramonferrari.dev" target="_blank" rel="noopener">ramonferrari.dev</a>
    <span>·</span>
    <a href="#inicio">voltar ao início</a>
  </footer>

  <PresentationToolkit :active-id="activeId" />
</template>
