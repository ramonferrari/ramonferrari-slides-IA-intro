<script setup lang="ts">
import { computed } from 'vue'
import { useNav, configs } from '@slidev/client'

const { currentPage } = useNav()

const shortTitle = configs.themeConfig?.shortTitle || ''
const colonIdx = shortTitle.indexOf(':')
const supertitleMain = colonIdx >= 0 ? shortTitle.slice(0, colonIdx + 1) : shortTitle
const supertitleAfter = colonIdx >= 0 ? shortTitle.slice(colonIdx + 1) : ''

const show = computed(() => currentPage.value !== 1 && !!shortTitle)
</script>

<template>
  <div v-if="show" class="rf-supertitle-bar">
    <span class="rf-supertitle-main">{{ supertitleMain }}</span><span
      v-if="supertitleAfter"
      class="rf-supertitle-after"
    >{{ supertitleAfter }}</span>
  </div>
</template>
