# Presentation System Guide

A complete component library for building sophisticated technical presentations with Slidev. This guide covers theme setup, component usage, and practical examples for creating a new presentation.

---

## Quick Start

Your presentation inherits a complete visual identity:
- **Design**: Glassmorphism, dark/light modes, accent colors
- **Typography**: Space Grotesk (sans), JetBrains Mono (code)
- **Components**: 28 custom Vue components for layouts and content
- **Theme Config**: Already configured in `slides.md`

### To create a new presentation:

1. Copy the frontmatter from `slides.md`:
```yaml
---
theme: seriph
colorSchema: both
themeConfig:
  appearance: dark
  shortTitle: "Your Title Here"
background: false
fonts:
  sans: Space Grotesk
  serif: Space Grotesk
  mono: JetBrains Mono
  provider: none
class: text-left
---
```

2. Use components from this guide to build slides
3. All styling, spacing, and colors are pre-configured

### To run the presentation:

```bash
npm install
npm run dev
# Visit http://localhost:3030
```

Edit `slides.md` to see changes live.

---

## Content & Layout Components

### **GlassCard** — Reusable container with glassmorphism

Wraps content in a glass container with blur, glow, and border system.

```vue
<GlassCard title="Optional Title" subtitle="CATEGORY">
  Your content here
</GlassCard>
```

**Props:**
- `title` (string, optional) — Card title
- `subtitle` (string, optional) — Small uppercase label above title

**Usage:** Wrap any content block, lists, or explanations.

---

### **BeforeAfter** — Side-by-side comparison

Shows before/after or two alternative approaches.

```vue
<BeforeAfter language="pt">
  <template #before>
    Manual review
  </template>
  <template #after>
    AI-assisted review
  </template>
</BeforeAfter>
```

**Props:**
- `language` ("pt" | default) — Sets "ANTES/DEPOIS" (pt) or "BEFORE/AFTER" (en)
- `before` / `after` (string, optional) — Text alternatives to slots

---

### **Subtitle** — Secondary text below headline

Smaller, muted text for explanations or declarations.

```vue
<Subtitle>
  Your subtitle or supporting text here
</Subtitle>
```

---

### **Spacer** — Vertical spacing

Creates empty space between elements.

```vue
<Spacer :h="48" />
```

**Props:**
- `h` (number, default 24) — Height in pixels

---

## Visual Highlighting & Emphasis

### **HighLight** — Inline text highlight

Emphasizes a word or phrase within text.

```vue
Você vai ao contrato quando o problema <HighLight color="#EC635E">
  já aconteceu
</HighLight>.
```

**Props:**
- `color` (string, optional) — Hex color (default: green #35996e)
- `glow` (boolean, default false) — Adds text-shadow glow effect

---

### **MetricCard** — Large metric display

Shows a number with a label. Stack multiple for dashboards.

```vue
<MetricCard
  value="78%"
  label="redução do tempo"
/>
```

**Props:**
- `value` (string, required) — Main metric (number, percentage, ratio)
- `label` (string, required) — Description below

**Usage:**
```vue
<!-- 2-column layout -->
<div class="rf-metrics-2">
  <MetricCard value="78%" label="redução" />
  <MetricCard value="92%" label="consenso" />
</div>

<!-- 3-column layout -->
<div class="rf-metrics-3">
  <MetricCard value="78%" label="tempo" />
  <MetricCard value="18" label="especialistas" />
  <MetricCard value="92%" label="consenso" />
</div>

<!-- 4-column layout -->
<div class="rf-metrics-4">
  <MetricCard value="78%" label="tempo" />
  <MetricCard value="18" label="especialistas" />
  <MetricCard value="3" label="rodadas" />
  <MetricCard value="92%" label="consenso" />
</div>
```

---

### **HighlightStat** — Extra large metric (hero style)

Displays a dramatic number with caption below.

```vue
<HighlightStat value="4h → 18min" caption="triagem contratual" />
```

**Props:**
- `value` (string, required) — Main value
- `caption` (string, required) — Description

---

### **RiskCard** — Risk indicator with level

Highlights a risk with color-coded severity.

```vue
<RiskCard level="high" title="Hallucination Risk">
  LLMs podem gerar interpretações incorretas sem grounding.
</RiskCard>
```

**Props:**
- `level` ("low" | "medium" | "high", default "medium")
  - low: green (#35996e)
  - medium: amber (#f59e0b)
  - high: red (#ef4444)
- `title` (string, required) — Risk title

---

### **Callout** — Information callout boxes

Contextual alerts for warnings, info, or danger.

```vue
<Callout type="warning">
  LLMs may generate plausible but incorrect outputs.
</Callout>
```

**Props:**
- `type` ("info" | "warning" | "danger", default "info")

---

## Data & Knowledge Components

### **Citation** — Academic citations with hover popup

Inline citations that reveal full reference on hover.

```vue
Será que <Citation id="wang_accuracy_1996" mode="citet" />
propõem uma visão multidimensional.

A qualidade <Citation id="wang_accuracy_1996" mode="citep" />.
```

**Props:**
- `id` (string, required) — Citation key from `data/references.json`
- `mode` ("citet" | "citep", default "citep")
  - `citet`: "Author (year)" — use in text
  - `citep`: "(Author, year)" — use in parentheses

**Setup:**
- Citations must be in `data/references.json`
- Fields: `apa_citet`, `apa_citep`, `apa_reference`, `abstract`, `url`

---

### **PromptCard** — AI prompt display

Styled container for extraction prompts or instructions.

```vue
<PromptCard title="Extração de Dados" :compact="false">
  Você é um assessor jurídico especialista.
  Extraia:
  - Categoria
  - Número de posições
  - Valor mensal
  - Fornecedor
</PromptCard>
```

**Props:**
- `title` (string, default "Extraction Prompt")
- `compact` (boolean, default false) — Reduces padding

---

### **DocumentViewer** — Document or content frame

Frame for displaying document-like content.

```vue
<DocumentViewer title="CONTRATO">
  <p>Conteúdo do documento...</p>
</DocumentViewer>
```

**Props:**
- `title` (string, optional, default "DOCUMENT")

---

### **ContractClause** — Legal clause display

Highlights a contract clause with risk level.

```vue
<ContractClause clause="3.2" risk="high">
  Clause content and explanation
</ContractClause>
```

**Props:**
- `clause` (string, required) — Clause number (e.g., "3.2")
- `risk` (string, optional) — Risk level (low/medium/high, default "medium")

---

## Architecture & Process Components

### **Venn** — Three-circle Venn diagram

Visualize intersection of three concepts (business, tech, etc).

```vue
<Venn
  top="Contratos"
  left="Análise e projeção"
  right="Algoritmos e IA"
  center="Seu papel"
  size="430px"
  :transpLight="0.20"
  :transpDark="0.15"
/>
```

**Props:**
- `top`, `left`, `right`, `center` (string) — Labels (use `\\n` for line breaks in props)
- `size` (string, default "720px") — Total diagram width
- `centerSize` (string, optional) — Override center text font size
- `transpLight` (number, default 0.14) — Light mode transparency
- `transpDark` (number, default 0.10) — Dark mode transparency

---

### **DecisionFlow** — Vertical decision steps

Linear flow of yes/no decisions or process steps.

```vue
<DecisionFlow
  :steps="[
    'Sensitive data?',
    'External LLM allowed?',
    'Grounding available?',
    'Human validation required',
    'Release answer'
  ]"
/>
```

**Props:**
- `steps` (array of strings, required) — List of decision points

---

### **ArchitectureFlow** — Mermaid-based architecture

Container for Mermaid diagrams (flowcharts, graphs).

```vue
<ArchitectureFlow>

\`\`\`mermaid
graph LR
A[Data] --> B[Embeddings]
B --> C[Vector DB]
C --> D[LLM]
\`\`\`

</ArchitectureFlow>
```

---

### **ArchitectureLayers** — Vertical layer stack

Shows layered system architecture (UI → Logic → Data).

```vue
<ArchitectureLayers
  :layers="['Frontend', 'API Layer', 'Business Logic', 'Database']"
/>
```

**Props:**
- `layers` (array of strings, required) — Ordered layers from top to bottom

---

### **Timeline** — Numbered timeline

Sequential list with auto-numbered items.

```vue
<Timeline
  :items="[
    'First phase of adoption',
    'Integration with existing systems',
    'Team training and rollout',
    'Measurement and optimization'
  ]"
/>
```

**Props:**
- `items` (array of strings, required)

---

### **HumanInLoop** — Human-AI interaction indicator

Shows bidirectional human-AI collaboration symbol.

```vue
<HumanInLoop />
```

No props. Use standalone or with explanatory text around it.

---

## LLM & Chat Components

### **LLMChat** — LLM conversation block

Shows a user prompt and LLM response in chat format.

```vue
<LLMChat 
  prompt="Analyze contractual risk."
  model="GPT-5.5"
  provider="OpenAI"
  version="2026-05"
>
  Analyzing procurement clauses...
  Checking compliance requirements...
  Evaluating contractual risks...
</LLMChat>
```

**Props:**
- `prompt` (string) — User question/instruction
- `model` (string, optional) — Model name (e.g., "GPT-5.5")
- `provider` (string, optional) — Provider (e.g., "OpenAI")
- `version` (string, optional) — Version date
- `streaming` (boolean, optional) — Shows blinking cursor

**Output format:** Shows prompt in lighter section, response in darker section.

---

### **StreamingLLM** — Streaming response animation

Simulates real-time LLM output with blinking cursor.

```vue
<StreamingLLM model="GPT-5.5">
  Analyzing procurement clauses...

  Checking compliance requirements...

  Evaluating contractual risks...

  Generating grounded response...
</StreamingLLM>
```

**Props:**
- `model` (string, optional, default "General LLM")

---

### **PromptBlock** — Preformatted prompt text

Displays prompts as code blocks with pre-wrapping.

```vue
<PromptBlock title="PROMPT">
  Você é um especialista em contratos.
  Extraia informações cruciais do documento.
</PromptBlock>
```

**Props:**
- `title` (string, optional, default "PROMPT")

---

## UI & Display Components

### **BrowserWindow** — Simulated browser frame

Shows content as if in a browser window (with traffic lights).

```vue
<BrowserWindow title="ChatGPT">
  # Your Content
  Can be markdown, components, anything.
</BrowserWindow>
```

**Props:**
- `title` (string, optional) — Browser title bar text

---

### **TerminalBlock** — Terminal/code output

Styled like a terminal with top dots.

```vue
<TerminalBlock>
  > user:
  Explain RAG architecture.

  > assistant:
  Retrieval-Augmented Generation combines:
  - vector search
  - embeddings
  - LLM reasoning
</TerminalBlock>
```

No props. Use slots for output text.

---

### **ImagePanel** — Image with optional layout

Display images with multiple position and size options.

```vue
<!-- Centered image -->
<ImagePanel
  src="/rag.png"
  position="center"
  width="70%"
  fit="contain"
  caption="RAG Pipeline"
/>

<!-- Image on left, content on right -->
<ImagePanel
  src="/rag.png"
  position="left"
  caption="Retrieval-Augmented Generation"
>
  ### Contextual AI systems
  - embeddings
  - vector search
  - grounded answers
</ImagePanel>

<!-- Full-bleed image -->
<ImagePanel
  src="/rag.png"
  position="full"
  fit="cover"
/>
```

**Props:**
- `src` (string, required) — Image path
- `alt` (string, optional) — Alt text
- `caption` (string, optional) — Caption below image
- `position` ("left" | "right" | "center" | "full")
  - `left`/`right`: Image beside content slot
  - `center`: Centered with padding
  - `full`: Full-bleed (fills entire slide)
- `width` (string, optional) — For center position (e.g., "55%")
- `fit` ("cover" | "contain", default "cover")

---

### **ProgressiveReveal** — Click-to-reveal content

Shows content only after a click (animated reveal).

```vue
<ProgressiveReveal :step="1">
  ## Hidden until click 1
</ProgressiveReveal>

<ProgressiveReveal :step="2">
  ## Hidden until click 2
</ProgressiveReveal>

<ProgressiveReveal :step="3">
  ## Hidden until click 3
</ProgressiveReveal>
```

**Props:**
- `step` (number, optional, default 1) — Click number to reveal

---

### **BottomBar** — Fixed footer bar

Auto-displays on every slide with title and link.

```vue
<BottomBar title="IA na Gestão de Contratos" />
```

**Props:**
- `title` (string, optional) — Overrides `shortTitle` from config

**Note:** Usually goes in `layouts/default.vue` or used sparingly.

---

### **Counter** — Interactive counter

Simple +/- button with state.

```vue
<Counter :count="0" />
```

**Props:**
- `count` (number, default 0) — Starting value

---

## CSS Utility Classes

Pre-configured grid classes for metric layouts:

```vue
<!-- 2-column metric layout -->
<div class="rf-metrics-2">
  <MetricCard ... />
  <MetricCard ... />
</div>

<!-- 3-column metric layout -->
<div class="rf-metrics-3">
  <MetricCard ... />
  <MetricCard ... />
  <MetricCard ... />
</div>

<!-- 4-column metric layout -->
<div class="rf-metrics-4">
  <MetricCard ... />
  <MetricCard ... />
  <MetricCard ... />
  <MetricCard ... />
</div>

<!-- Standard grid layout -->
<div class="grid grid-cols-2 gap-6 mt-10">
  <div class="glass p-6">Content</div>
  <div class="glass p-6">Content</div>
</div>
```

---

## Color & Design System

### CSS Variables

Available throughout all components:

```css
--rf-primary        /* #35996e - Primary accent green */
--rf-secondary      /* Secondary text color */
--rf-text          /* Main text color */
--rf-muted         /* Muted/secondary text */
--rf-link          /* Link color */
--rf-link-hover    /* Link hover state */
--rf-bottom-text   /* Bottom bar text */
--rf-bottom-border /* Bottom bar border */
```

### Glassmorphism Classes

All glass containers use `.glass` class:
- Blur effect (20px)
- Semi-transparent background
- Border with 0.08 opacity
- Box shadow

### Colors Used in Components

- **Primary Green**: `#35996e`
- **Accent Red/Pink**: `#E0496C`, `#EC635E`
- **Accent Purple**: `#9678E8`
- **Accent Cyan**: `#7DD5DB`
- **Accent Yellow**: `#ABDB2A`, `#e2f81b`, `#f59e0b`

---

## Common Patterns

### Full-width content with glass effect

```vue
<div class="glass mt-8 p-8">
  Your content here
</div>
```

### Side-by-side comparison layout

```vue
<div class="grid grid-cols-2 gap-6 mt-10">
  <div class="glass p-6">
    ### Before
    Content
  </div>
  <div class="glass p-6">
    ### After
    Content
  </div>
</div>
```

### Hero metric section

```vue
<Spacer :h="48" />

<div class="rf-metrics-2">
  <MetricCard value="78%" label="redução do tempo" />
  <MetricCard value="92%" label="consenso dos especialistas" />
</div>
```

### Architecture with Venn + Description

```vue
<div class="grid gap-0 mt-15 items-center" 
     style="grid-template-columns: 1fr 1fr;">
  <div>
    <Venn
      top="Your Area"
      left="Left Concept"
      right="Right Concept"
      center="Your Role"
    />
  </div>
  <div>
    <!-- Explanation content -->
  </div>
</div>
```

### Before/After with decision flow

```vue
<BeforeAfter language="pt">
  <template #before>
    Manual process
  </template>
  <template #after>
    AI-assisted process
  </template>
</BeforeAfter>

<DecisionFlow :steps="[...]" />
```

---

## Typography Defaults

- **Sans**: Space Grotesk (main text)
- **Mono**: JetBrains Mono (code, labels)
- **Heading size**: Responds to slide hierarchy (h1, h2, h3)
- **Line height**: 1.6–1.8 in most components
- **Letter spacing**: Tighter in headings (-0.03em), looser in labels (0.12em)

---

## Dark & Light Mode

All components support both modes automatically:

```vue
<template>
  <!-- Component automatically adapts -->
  <GlassCard>Content works in both modes</GlassCard>
</template>
```

Light mode uses:
- Lighter backgrounds
- Darker text
- Adjusted colors for contrast

Switch with browser's `prefers-color-scheme` or Slidev's color toggle.

---

## Best Practices

1. **Spacing**: Use `<Spacer>` for intentional gaps between major sections
2. **Hierarchy**: Use h1, h2, h3 for structure; components for emphasis
3. **Color**: Let components define colors; override `color` props only when needed
4. **Images**: Use `ImagePanel` for all images; position with props not manual layout
5. **Metrics**: Group related metrics in `rf-metrics-2/3/4` grids
6. **Citations**: Always verify reference keys exist in `data/references.json`
7. **Props**: Pass dynamic props via `:prop` binding (e.g., `:step="1"`)
8. **Slots**: Named slots like `#before` and `#after` are preferred over text props

---

## Example Slide Deck Structure

```markdown
---
theme: seriph
colorSchema: both
themeConfig:
  appearance: dark
  shortTitle: "Your Presentation Title"
background: false
fonts:
  sans: Space Grotesk
  mono: JetBrains Mono
  provider: none
class: text-left
---

# Your Presentation Title

<div class="glass mt-8">
  Subtitle or description here.
  <div class="mt-6 flex gap-3">
    <span class="tag">Tag 1</span>
    <span class="tag">Tag 2</span>
    <span class="tag">Tag 3</span>
  </div>
</div>

---

# Main Topic

<BeforeAfter language="pt">
  <template #before>
    Traditional approach
  </template>
  <template #after>
    AI-enhanced approach
  </template>
</BeforeAfter>

---

# Impact Metrics

<div class="rf-metrics-3">
  <MetricCard value="78%" label="reduction in time" />
  <MetricCard value="18" label="expert reviewers" />
  <MetricCard value="92%" label="consensus achieved" />
</div>

---

# Next Steps

<Timeline :items="[
  'Phase 1: Pilot',
  'Phase 2: Rollout',
  'Phase 3: Measurement',
]" />

```

---

## Learn More

- [Slidev documentation](https://sli.dev/) — Framework reference
- `slides.md` — Real-world usage examples from this project
- `slides-model.md` — Component showcase and testing
- `./components/` — Source code for all components
- [Space Grotesk font](https://fonts.google.com/specimen/Space+Grotesk)
- [JetBrains Mono font](https://www.jetbrains.com/lp/mono/)
