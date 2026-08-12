# Site responsivo — A era da IA Generativa

Versão em HTML/CSS responsivo da apresentação, gerada a partir do conteúdo de
`../slides.md` e reaproveitando os **mesmos componentes Vue** de `../components/`
(sem passar pelo motor de apresentação do Slidev). Em vez de slides de 16:9
avançados por clique, o conteúdo vira uma página única, rolável, com seções
que se reorganizam por breakpoint (grids colapsam para 1 coluna, títulos
quebram linha, o diagrama SVG de "Os Dois Limites" reflui em telas estreitas
etc.).

## Rodando localmente

```bash
cd site
npm install
npm run dev       # http://localhost:5173
npm run build     # gera site/dist (estático)
npm run preview   # serve o build de produção
```

## Como está organizado

- `src/App.vue` — casca da página: nav sticky com sumário (painel deslizante,
  com scrollspy), progresso de leitura, rodapé.
- `src/components/SlideSection.vue` — wrapper de cada seção; replica a classe
  `.slidev-layout` do tema original (heading centralizado, fundo com glow) e
  o auto-encolhimento de `<h1>` que existia em `layouts/default.vue`.
- `src/slides/*.vue` — uma seção por slide original, na mesma ordem de
  `slides.md`. As notas do apresentador (`::note::` e `<!-- -->`) não são
  renderizadas — são material de apoio para quem apresenta ao vivo, não para
  quem lê a página.
- `src/styles/app.css` — apenas os acréscimos responsivos (colapso de grids,
  painel de navegação, `.tag`, etc.) — o visual em si continua vindo de
  `../styles/theme.css`, importado sem alterações.
- `uno.config.ts` — UnoCSS com o preset Tailwind-like, para suportar as
  classes utilitárias (`grid grid-cols-2 gap-6 …`) já usadas no conteúdo
  original, do mesmo jeito que o Slidev/UnoCSS fazia.
- Os componentes de `../components/*.vue` são auto-importados via
  `unplugin-vue-components` (mesmo mecanismo do Slidev), então nenhum slide
  precisa importar `<CoverSlide>`, `<MetricCard>` etc. manualmente.

## Decisões de adaptação (Slidev → responsivo)

- **`v-click` / `clicks:`**: removidos — como não há mais "avançar slide",
  o conteúdo aparece todo de uma vez. A única exceção é o slide "Do
  'criança' ao usável: 4 saltos", que virou um stepper interativo (clique
  em cada linha ou nos botões "anterior/próximo salto") para preservar a
  narrativa progressiva do original.
- **`<SectionDivider>`**: esse componente era referenciado em `slides.md`
  mas não existe em `components/`. Foi recriado localmente em
  `SectionPrompt.vue`, com o mesmo texto ("04 · Engenharia de Prompt…").
- **Layouts com posicionamento absoluto fixo** (ex.: a foto do slide "Quem
  sou eu?", o diagrama SVG de "Os Dois Limites da IA", o pipeline de 5
  colunas do "motor LLM"): foram redesenhados para flex/grid responsivos,
  com breakpoints próprios, no lugar das coordenadas em pixel pensadas para
  o canvas fixo 16:9 do Slidev.
- **`<AIKnowledge />`**: internamente depende de `height: 100%` herdado do
  palco fixo do Slidev; aqui recebe uma altura explícita
  (`min(58vh, 480px)`) para funcionar em fluxo normal de página.

## Deploy

Este projeto tem `package.json`/`vite.config.ts` próprios em `site/`, agindo
como um site separado por enquanto — não altera o build do Slidev na raiz
do repositório (`npm run build` na raiz continua gerando a apresentação via
`slidev build`, e é o que `vercel.json`/`netlify.toml` da raiz apontam).
Para publicar este site no lugar da apresentação atual (ou em uma URL própria),
é preciso apontar o serviço de deploy para `site/` (build command
`npm install && npm run build`, output `site/dist`) — isso não foi feito
automaticamente para não sobrescrever o deploy existente sem confirmação.
