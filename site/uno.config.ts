import { defineConfig, presetWind, presetTypography } from 'unocss'

export default defineConfig({
  presets: [presetWind(), presetTypography()],
  shortcuts: {
    tag: 'inline-flex items-center font-mono text-[0.68rem] tracking-[0.08em] uppercase px-3 py-1 rounded-full border border-[var(--rf-border-secondary)] text-[var(--rf-text-muted)] bg-[var(--rf-surface-secondary)]',
  },
})
