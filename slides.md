---
colorSchema: both
themeConfig:
  appearance: dark
  shortTitle: "A era da IA Generativa"
fonts:
  sans: Space Grotesk
  serif: Space Grotesk
  mono: JetBrains Mono
  provider: none
class: text-left
---

<CoverSlide
  title="A era da IA Generativa"
  subtitle="O que muda quando computadores passam a gerar conteúdo?"
  presenter="R. M. Ferrari"
  date="Julho de 2026"
/>

::note::
Bem-vindos. Hoje não é uma aula de programação. É uma aula de leitura crítica de uma tecnologia que já está no seu dia a dia — queira ou não.

---

# Quem sou eu?

<div class="grid grid-cols-2 gap-8">
<div>

<CircularImage
  src="./rf.JPG" 
  size="220px"
  borderColor="var(--rf-highlight)"
  :scale="1.1"
  x="100"
  y="180"
/>
</div>

<div class="prose" style="position: absolute; right: 60px; top: 180px; width: 550px; font-size: 1.1rem; line-height: 1.6;">

- Baiano, 15 anos no RJ, 2 anos em Vitória.
- Atuação por ~15 anos em processamento de dados sísmicos
- Coordenador e Cientista de Dados na Petrobras
- Doutorando em Adm. de Empresas (FGV EAESP)
  - Qualidade de informação em sistemas de LLM
</div>
</div>

::note::
Apresentação pessoal. Perfil de pesquisador-praticante: cientista de dados na indústria + doutorando FGV EAESP pesquisando qualidade epistêmica em sistemas com LLMs.

---


# Você já usa IA todo dia

<div class="grid gap-6 mt-2" style="grid-template-columns: 1fr 1fr;">
  <div class="glass" style="padding: 1.6rem;">
    <div style="width: 52px; height: 52px; border-radius: 14px; background: var(--rf-surface-secondary); border: 1px solid var(--rf-border-secondary); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
      <svg viewBox="0 0 32 32" style="width: 30px; height: 30px;">
        <rect x="3" y="12" width="26" height="14" rx="3" fill="none" stroke="var(--rf-primary)" stroke-width="1.6" />
        <path d="M7 17 h2 M12 17 h2 M17 17 h2 M22 17 h3 M9 21.5 h14" stroke="var(--rf-primary)" stroke-width="1.6" stroke-linecap="round" />
        <path d="M16 12 V8 a3 3 0 0 1 3 -3" fill="none" stroke="var(--rf-primary)" stroke-width="1.6" stroke-linecap="round" />
      </svg>
    </div>
    <div style="font-weight: 700; font-size: 1.15rem; color: var(--rf-text-primary); margin-bottom: 0.3rem;">Corretor do teclado</div>
    <div style="font-size: 0.95rem;">prevê a próxima palavra enquanto você digita</div>
    <div style="margin-top: 1.1rem; background: var(--rf-surface-secondary); border: 1px solid var(--rf-border-secondary); border-radius: 10px; padding: 0.5rem 0.9rem; display: flex; gap: 1.2rem; justify-content: center; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem;">
      <span style="color: var(--rf-text-muted);">atrasada</span>
      <span style="color: var(--rf-highlight); font-weight: 700; border-bottom: 2px solid var(--rf-highlight);">atrasado</span>
      <span style="color: var(--rf-text-muted);">às</span>
    </div>
    <div style="margin-top: 0.5rem; text-align: center; font-size: 0.8rem; color: var(--rf-text-muted); font-style: italic;">"vou chegar <b style="color: var(--rf-highlight);">atrasado</b>…"</div>
  </div>
  <div class="glass" style="padding: 1.6rem;">
    <div style="width: 52px; height: 52px; border-radius: 14px; background: var(--rf-surface-secondary); border: 1px solid var(--rf-border-secondary); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
      <svg viewBox="0 0 32 32" style="width: 30px; height: 30px;">
        <rect x="12" y="4" width="8" height="15" rx="4" fill="none" stroke="var(--rf-primary)" stroke-width="1.6" />
        <path d="M8 15 a8 8 0 0 0 16 0 M16 23 v5 M12 28 h8" fill="none" stroke="var(--rf-primary)" stroke-width="1.6" stroke-linecap="round" />
        <path d="M5 12 q-2 3 0 6 M27 12 q2 3 0 6" fill="none" stroke="var(--rf-primary)" stroke-width="1.4" stroke-linecap="round" opacity="0.55" />
      </svg>
    </div>
    <div style="font-weight: 700; font-size: 1.15rem; color: var(--rf-text-primary); margin-bottom: 0.3rem;">Assistente de voz</div>
    <div style="font-size: 0.95rem;">Alexa, Siri: entende o que você fala e responde</div>
    <div style="margin-top: 1.1rem; display: flex; align-items: center; justify-content: center; gap: 6px; height: 52px;">
      <span v-for="(h, i) in [14, 26, 38, 22, 32, 16, 28, 12]" :key="i" :style="`display:inline-block; width: 5px; height: ${h}px; border-radius: 3px; background: color-mix(in srgb, var(--rf-primary) ${45 + (i % 3) * 20}%, transparent);`" />
    </div>
  </div>
</div>

<p style="text-align: center; font-style: italic; color: var(--rf-primary); margin-top: 1.6rem; font-size: 1.05rem;">IA invisível. Já virou rotina. Você nem percebe.</p>

<!--
Antes de qualquer coisa técnica, deixa eu provar essa afirmação. Dois exemplos. Primeiro, o corretor do teclado do celular, aquele que sugere a próxima palavra enquanto você digita. Isso é um modelo prevendo texto. Guardem esse, porque ele volta. Segundo, assistente de voz: Alexa, Siri. Você fala, ela entende e responde. Isso é IA processando linguagem. Nenhum de vocês fez curso pra usar essas coisas. Elas simplesmente entraram na rotina. O ponto é: IA não é bicho de sete cabeças nem coisa de ficção. Já está no bolso de vocês. E, o que talvez surpreenda, já está na plataforma também.
-->

---


# E ela já trabalha nos bastidores

<SensorFlow />

<p style="text-align: center; margin-top: 1.4rem; font-size: 1.15rem; color: var(--rf-text-primary);">Isso é IA. E <span style="color: var(--rf-primary); font-weight: 700;">não tem nada de generativa</span>.</p>

<!--
Agora sai do celular e vem pra indústria. Classificação de eventos de falha em equipamento: sensor manda o dado, um modelo aprende como é o funcionamento normal e dispara um alerta quando algo foge do padrão. Isso já existe rodando em plantas industriais, ajudando a evitar parada não planejada. E olha que importante: isso é inteligência artificial de verdade. E não tem absolutamente nada de generativa. Ela não escreve, não conversa, não cria. Ela classifica: normal ou anormal. Guardem essa distinção, porque no próximo slide ela organiza tudo. Existe IA que decide entre caixas, e existe IA que cria coisa nova.
-->

---
clicks: 3
---

<!-- ═══════════════════════════════════════════
     SEÇÃO 1: O QUE É
═══════════════════════════════════════════ -->

# O que é IA generativa

<div class="flex flex-col justify-center gap-4 mt-6" style="height: 320px;">

  <div v-click class="glass p-5" style="border-color: rgba(99,211,161,0.4);">
    <p style="font-size: 1.05rem; line-height: 1.7; margin: 0;">
      IA tradicional <span style="color: var(--rf-text-muted);">→ </span>
      <strong style="color: var(--rf-primary);">classifica, prevê ou recomenda</strong>
      a partir de padrões históricos.
    </p>
    <p style="font-size: 0.78rem; color: var(--rf-text-muted); margin: 0.5rem 0 0;">
      Ex: spam filter, recomendação de produto, detecção de fraude.
    </p>
  </div>

  <div v-click class="glass p-5" style="border-color: rgba(226,248,27,0.4);">
    <p style="font-size: 1.05rem; line-height: 1.7; margin: 0;">
      IA generativa <span style="color: var(--rf-text-muted);">→ </span>
      <strong style="color: var(--rf-highlight);">produz conteúdo novo</strong>: texto, imagem, código, áudio.
    </p>
    <p style="font-size: 0.78rem; color: var(--rf-text-muted); margin: 0.5rem 0 0;">
      Ex: ChatGPT, Claude, Gemini, Midjourney, GitHub Copilot.
    </p>
  </div>

</div>

::note::
O ponto de virada não foi só técnico — foi de interface. Quando qualquer pessoa passou a conversar em linguagem natural com um computador e receber uma resposta coerente, a barreira de acesso desapareceu.

---


# IA que cria conteúdo novo

<div style="max-width: 660px; margin: 0 auto; display: flex; flex-direction: column; gap: 0.4rem;">
  <PromptCard title="seu pedido" compact>
    Me escreve uma receita de bolo <b>sem lactose</b>, pra <b>doze pessoas</b>, em tom <b>bem-humorado</b>.
  </PromptCard>
  <div style="display: flex; align-items: center; justify-content: center; gap: 0.7rem; padding: 0.15rem 0;">
    <svg viewBox="0 0 20 44" style="width: 16px; height: 34px;">
      <line x1="10" y1="2" x2="10" y2="32" stroke="var(--rf-primary)" stroke-width="2" stroke-dasharray="5 4" />
      <path d="M4 30 L10 40 L16 30" fill="none" stroke="var(--rf-primary)" stroke-width="2" stroke-linejoin="round" />
    </svg>
    <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.62rem; letter-spacing: 0.2em; color: var(--rf-primary); text-transform: uppercase;">conteúdo NOVO gerado, não recuperado</span>
  </div>
  <StreamingLLM model="IA generativa">
    <span style="font-size: 0.9rem;">Bolo dos Doze Corajosos (zero lactose, zero drama): 3 ovos, 2 xícaras de farinha, leite de coco no lugar do leite... e a parte mais difícil: esperar esfriar sem provar.</span>
  </StreamingLLM>
  <div style="display: flex; justify-content: center; gap: 0.7rem; margin-top: 0.7rem;">
    <span class="tag">texto</span>
    <span class="tag">imagem</span>
    <span class="tag">código</span>
    <span class="tag">áudio</span>
  </div>
</div>

<!--
Vamos à definição, sem jargão. Quando você pesquisa no Google "receita de bolo", ele te devolve uma lista de páginas que já existem: ele recupera o que já está lá. A IA generativa faz outra coisa. Quando você pede "me escreve uma receita de bolo sem lactose, pra doze pessoas, em tom bem-humorado", ela não vai copiar uma receita de um banco de dados. Ela constrói aquela resposta, pedaço por pedaço, com base nos padrões que aprendeu. O resultado é algo que não existia antes daquele instante. Essa é a diferença que muda tudo. O buscador recupera; a generativa cria. E vale pra texto, imagem, código, áudio. Pra essa diferença ficar de vez, deixa eu apresentar dois personagens: o crítico e o artista.
-->

---

# Já é presente, não futuro

<div class="rf-metrics-3 mt-10">
  <MetricCard value="~78%" label="das organizações já usam GenAI em ao menos 1 função" />
  <MetricCard value="US$ 395 bi" label="mercado global estimado em 2026" />
  <MetricCard value="+327%" label="crescimento de sistemas multi-agente em < 4 meses" />
</div>

<p style="text-align: center; margin-top: 2.4rem; font-size: 0.78rem; color: var(--rf-text-muted);">estimativas de mercado (McKinsey · GM Insights/Statista · Databricks): conferir fonte primária antes de apresentar</p>

<!--
Rápido, só pra dimensionar. Cerca de 78% das grandes organizações já usam IA generativa em pelo menos uma área do negócio. Isso é agora, 2026, não promessa. O mercado global gira na casa das centenas de bilhões de dólares. E sistemas onde vários agentes de IA trabalham juntos cresceram mais de 300% em poucos meses. Não guardem os números; guardem o recado: isso saiu do laboratório e entrou na operação das empresas. Razão de sobra pra gente entender direito o que é essa coisa.

[Slide OPCIONAL. Sem fonte primária conferida: pular ou falar em ordens de grandeza.]
-->

---

# Como a IA Generativa funciona

<div class="grid grid-cols-2 gap-4 mt-5">
<div class="flex flex-col gap-3">
<div v-click class="glass p-4" style="border-left: 3px solid var(--rf-primary);">
<span class="rf-eyebrow" style="display:block; margin-bottom: 0.4rem;">1. Treinamento</span>
<p style="font-size: 0.82rem; line-height: 1.6; margin: 0; color: var(--rf-text-secondary);">
O modelo lê uma fração enorme da internet: livros, artigos, código, conversas.
Aprende <strong>padrões de linguagem</strong>: o que palavra vem depois de qual, em qual contexto.
</p>
</div>
<div v-click class="glass p-4" style="border-left: 3px solid var(--rf-primary);">
<span class="rf-eyebrow" style="display:block; margin-bottom: 0.4rem;">2. Compressão</span>
<p style="font-size: 0.82rem; line-height: 1.6; margin: 0; color: var(--rf-text-secondary);">
Esses padrões viram <strong>bilhões</strong> de parâmetros. São números que codificam relações
entre conceitos. O modelo não "memoriza" textos; ele aprende <strong>estrutura</strong>.
</p>
</div>
<div v-click class="glass p-4" style="border-left: 3px solid var(--rf-primary);">
<span class="rf-eyebrow" style="display:block; margin-bottom: 0.4rem;">3. Geração</span>
<p style="font-size: 0.82rem; line-height: 1.6; margin: 0; color: var(--rf-text-secondary);">
Quando você escreve algo, o modelo calcula a sequência de tokens mais
<strong>provável e coerente</strong> como a próxima palavra.
</p>
</div>
</div>
<div v-click class="glass p-5 flex flex-col justify-center" style="border-color: rgba(226,248,27,0.25);">
<div>
<span class="rf-eyebrow" style="display:block; margin-bottom: 0.8rem;">a metáfora certa</span>
<p style="font-size: 0.88rem; line-height: 1.75; margin: 0; color: var(--rf-text-secondary);">
Não é uma <strong style="color: var(--rf-text-primary);">enciclopédia</strong> que você consulta.<br>
Não é um <strong style="color: var(--rf-text-primary);">mecanismo de busca</strong>.<br><br>
É um <strong style="color: var(--rf-highlight);">gerador de texto muito sofisticado</strong>
que aprendeu como humanos escrevem sobre qualquer assunto (e por isso parece que sabe tudo).
</p>
</div>
</div>
</div>

::note::
A metáfora da enciclopédia é perigosa porque cria a expectativa de que o modelo tem respostas certas armazenadas. Ele não tem. Ele tem padrões. Por isso ele erra com confiança.

---

# O que a IA sabe

<AIKnowledge />

::note::
O knowledge cutoff é um limite concreto — mas o problema maior é o que acontece quando ela não sabe e não avisa. Segue.

---

# De onde vem o que ela sabe

<div class="grid gap-6 mt-2" style="grid-template-columns: 1fr 1.2fr;">
  <div class="glass" style="padding: 1.3rem 1.5rem;">
    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; letter-spacing: 0.2em; color: var(--rf-text-muted); margin-bottom: 0.9rem;">A DIETA DE TREINAMENTO</div>
    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.55rem; font-size: 0.95rem;">
      <li style="display: flex; align-items: center; gap: 0.7rem;"><span class="src-dot" />livros e enciclopédias</li>
      <li style="display: flex; align-items: center; gap: 0.7rem;"><span class="src-dot" />sites e artigos da internet</li>
      <li style="display: flex; align-items: center; gap: 0.7rem;"><span class="src-dot" />artigos científicos e notícias</li>
      <li style="display: flex; align-items: center; gap: 0.7rem;"><span class="src-dot" />código de programação</li>
      <li style="display: flex; align-items: center; gap: 0.7rem;"><span class="src-dot" />fóruns e discussões <span style="font-size: 0.75rem; color: var(--rf-text-muted);">(com filtros)</span></li>
    </ul>
    <div style="margin-top: 1rem; padding-top: 0.8rem; border-top: 1px solid var(--rf-border-primary); font-size: 0.82rem; color: var(--rf-text-muted); font-style: italic;">resultado: sabe um pouco de <span style="color: var(--rf-primary);">quase tudo</span>, com profundidade que varia</div>
  </div>
  <div v-click class="glass" style="padding: 1.3rem 1.5rem; border-color: color-mix(in srgb, var(--rf-highlight) 35%, transparent);">
    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; letter-spacing: 0.2em; color: var(--rf-highlight); margin-bottom: 1rem;">DATA DE CORTE</div>
    <div style="display: flex; align-items: center; gap: 0; margin-bottom: 0.5rem;">
      <div style="flex: 1.6; height: 14px; border-radius: 7px 0 0 7px; background: linear-gradient(90deg, color-mix(in srgb, var(--rf-primary) 25%, transparent), var(--rf-primary));" />
      <div style="flex-shrink: 0; width: 14px; height: 14px; background: var(--rf-highlight); border-radius: 3px; transform: rotate(45deg); margin: 0 4px; box-shadow: 0 0 12px color-mix(in srgb, var(--rf-highlight) 60%, transparent);" />
      <div style="flex: 1; height: 14px; border-radius: 0 7px 7px 0; border: 1.5px dashed var(--rf-border-secondary); background: transparent;" />
    </div>
    <div style="display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 0.62rem; color: var(--rf-text-muted); margin-bottom: 1.1rem;">
      <span style="color: var(--rf-primary);">tudo que ela leu no treino</span>
      <span style="color: var(--rf-highlight);">corte</span>
      <span>daqui pra frente: <b style="color: var(--rf-text-primary);">não sabe</b></span>
    </div>
    <div style="font-size: 0.95rem; line-height: 1.6;">O treinamento parou num dia. Depois desse dia, ela <b style="color: var(--rf-text-primary);">simplesmente não sabe</b> o que aconteceu. A não ser que alguém conte na conversa.</div>
    <div style="display: flex; gap: 0.6rem; margin-top: 1rem; flex-wrap: wrap;">
      <span class="tag"> <li> busca na web: só quando ativada </li> </span>
      <span class="tag"> <li> seus documentos internos: nunca leu</li> </span>
    </div>
  </div>
</div>

<style>
.src-dot {
  flex-shrink: 0;
  width: 9px; height: 9px;
  background: var(--rf-primary);
  border-radius: 2px;
  opacity: 0.85;
}
</style>

<!--
De onde vem tanto conhecimento? De um treinamento que consumiu quantidades imensas de texto: enciclopédias, livros digitalizados, artigos científicos, sites, fóruns, muito código de programação. Por isso ela sabe um pouco de quase tudo (medicina, direito, culinária, engenharia), mas com profundidade que varia. E tem um detalhe que confunde todo iniciante: a data de corte. O treinamento parou num dia específico. Os modelos que vocês vão usar hoje foram treinados até algum ponto do passado recente. Tudo que aconteceu depois, pra eles, não existe. Notícia de ontem, norma revisada mês passado, o resultado do jogo: ela não sabe, a não ser que você conte ou que a ferramenta tenha busca na web ativada. Guardem isso, porque explica muita resposta desatualizada com cara de certeza. E saber de onde o conhecimento vem também explica no que ela é ótima e onde ela tropeça. Olha o mapa.

[Se quiser citar cortes específicos (ex.: modelos atuais com corte em 2025), conferir a data real de cada modelo na semana da aula.]
-->

---
clicks: 2
---

# O motor tem nome: LLM

<div style="text-align: center; margin-top: 0.4rem; margin-bottom: 1.4rem;">
  <span style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: var(--rf-text-muted);"><b style="color: var(--rf-primary); font-size: 1.3rem;">L</b>arge <b style="color: var(--rf-primary); font-size: 1.3rem;">L</b>anguage <b style="color: var(--rf-primary); font-size: 1.3rem;">M</b>odel: modelo de linguagem grande</span>
</div>

<div class="grid gap-5" style="grid-template-columns: 1fr auto 1fr auto 1fr; align-items: stretch;">
  <div class="glass llm-step">
    <div class="llm-num">FASE 1</div>
    <svg viewBox="0 0 32 32" class="llm-icon"><path d="M16 7 c-3 -2.5 -7 -3 -11 -2 v18 c4 -1 8 -0.5 11 2 c3 -2.5 7 -3 11 -2 V5 c-4 -1 -8 -0.5 -11 2 Z" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linejoin="round"/><path d="M16 7 v18" stroke="var(--rf-primary)" stroke-width="1.5"/></svg>
    <div class="llm-title">Pré-treino</div>
    <div class="llm-desc">"lê" bilhões de páginas: livros, sites, código</div>
  </div>
  <div class="llm-arrow" v-click="1">→</div>
  <div v-click="1" class="glass llm-step">
    <div class="llm-num">RESULTADO</div>
    <svg viewBox="0 0 32 32" class="llm-icon"><circle cx="9" cy="10" r="2" fill="var(--rf-primary)"/><circle cx="23" cy="8" r="2" fill="var(--rf-primary)" opacity="0.7"/><circle cx="16" cy="17" r="2" fill="var(--rf-primary)"/><circle cx="8" cy="24" r="2" fill="var(--rf-primary)" opacity="0.7"/><circle cx="24" cy="23" r="2" fill="var(--rf-primary)"/><path d="M10.5 11.5 L14.5 15.5 M21.5 9.5 L17.5 15.5 M14.5 18.5 L9.5 22.5 M17.5 18.5 L22.5 21.5" stroke="var(--rf-primary)" stroke-width="1.2" opacity="0.5"/></svg>
    <div class="llm-title">Padrões</div>
    <div class="llm-desc">aprende o que costuma vir junto (não "entende" como você)</div>
  </div>
  <div class="llm-arrow" v-click="2">→</div>
  <div v-click="2" class="glass llm-step">
    <div class="llm-num">FASE 2</div>
    <svg viewBox="0 0 32 32" class="llm-icon"><path d="M16 4 l2.7 6.5 7 .6 -5.3 4.6 1.6 6.9 -6 -3.7 -6 3.7 1.6 -6.9 -5.3 -4.6 7 -.6 Z" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linejoin="round"/><path d="M23 24 l4 4 M25 22 l4 4" stroke="var(--rf-primary)" stroke-width="1.4" stroke-linecap="round" opacity="0.6"/></svg>
    <div class="llm-title">Ajuste fino</div>
    <div class="llm-desc">é lapidado por humanos pra ser útil, seguro… e <span style="color: var(--rf-highlight);">agradável</span></div>
  </div>
</div>

<p style="text-align: center; margin-top: 1.5rem; font-size: 0.95rem; color: var(--rf-text-muted);">é matemática e estatística sofisticadas, com resultado que <span style="color: var(--rf-primary);">parece humano</span></p>

<style>
.llm-step {
  padding: 1.1rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.45rem;
}
.llm-num {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  color: var(--rf-text-muted);
}
.llm-icon { width: 34px; height: 34px; }
.llm-title { font-size: 1.1rem; font-weight: 700; color: var(--rf-text-primary); }
.llm-desc { font-size: 0.85rem; color: var(--rf-text-secondary); line-height: 1.5; }
.llm-arrow {
  align-self: center;
  color: var(--rf-primary);
  font-size: 1.6rem;
  font-weight: 700;
}
</style>

<!--
O motor por trás do ChatGPT, do Claude e do Gemini tem nome: LLM, sigla em inglês pra modelo de linguagem grande. A vida dele tem duas fases. Na primeira, o pré-treino, ele "lê" bilhões de páginas. O que sobra disso é um mapa de padrões, não uma biblioteca decorada: o que costuma vir junto com o quê. Ele não entende como a gente entende; ele reconhece padrões com uma sofisticação tão grande que o resultado parece humano. Na segunda fase, o ajuste fino, humanos lapidam esse modelo cru pra ele ser útil, seguro e seguir instruções. E aqui nasce um detalhe que volta lá na frente: ele também é treinado pra agradar. Guardem essa palavra. Agora, o primeiro segredo prático desse motor: ele não lê palavras como você.
-->

---


# Ela lê em pedaços: tokens

<TokenBlocks />

<p style="text-align: center; margin-top: 1.2rem; font-size: 0.95rem; color: var(--rf-text-muted);">token = menor unidade processada · por isso ela tropeça em soletração e contas</p>

<!--
Antes de gerar texto, a máquina precisa ler. E ela não lê palavra inteira: quebra o texto em pedaços chamados tokens. Um token pode ser uma palavra curta, um pedaço de palavra ("apren" e "dizado") ou até uma pontuação. Por isso ela às vezes tropeça ao soletrar ou numa conta: ela não vê a palavra como você vê. Na prática de vocês, isso importa por uma razão que eu mostro no próximo slide: tudo que ela lê precisa caber num espaço limitado. E esse espaço tem uma imagem perfeita: uma mesa de trabalho.
-->

---


# A janela de contexto é uma mesa

<Contextdesk />

::note::
Essa distinção muda como você usa a ferramenta. Contexto é recurso escasso. O que você coloca nele determina a qualidade da resposta.

---


# No fundo: qual a próxima palavra?

<NextTokenBars />

<p style="text-align: center; margin-top: 0.8rem; font-size: 0.98rem; font-style: italic; color: var(--rf-text-secondary);">ele gera o texto mais <b style="color: var(--rf-primary);">plausível</b>, não necessariamente o <b style="color: var(--rf-highlight);">verdadeiro</b></p>

<!--
Agora o segredo. E ele é surpreendentemente simples. No fundo, tudo que o modelo faz é responder uma pergunta, repetida milhares de vezes: qual é a próxima palavra mais provável? Lembram do corretor do teclado, lá do começo? Você digita "a capital do Brasil é" e ele sugere "Brasília". O LLM faz o mesmo, com profundidade muito maior: pega tudo que foi escrito até agora e gera uma lista de probabilidades pro próximo pedaço. Escolhe um, encaixa, e recomeça. É autocompletar em loop, token por token. Tem um botão chamado temperatura: baixa, ele joga seguro no mais provável; alta, ele arrisca palavras menos óbvias (mais criativo, às vezes mais errado). Guardem isto, porque é a regra de ouro do uso seguro: ele gera o texto mais plausível, não necessariamente o verdadeiro. Por isso a gente sempre confere antes de agir. E tem outra consequência: se ele completa a partir do que você entrega, então o que você entrega vale ouro. É exatamente a próxima parte da nossa conversa.
-->

---

<SectionDivider number="04" title="Engenharia de Prompt: a habilidade que fica" />

<!--
[passagem rápida: "daqui pra frente é o que vocês vão usar amanhã de manhã"]
-->



<!-- ═══════════════════════════════════════════
     SEÇÃO 2: O ECOSSISTEMA
═══════════════════════════════════════════ -->

# Corrida das IAs

<AICompetition />

::note::
O mercado se moveu de um player dominante para uma corrida real. Isso importa para você: significa que a escolha de modelo já é uma decisão estratégica, não só técnica.

---

# Modelo leve × pro

<ModelComparison />

::note::
Flash/Haiku/Mini = rápido e barato, bom para tarefas simples e volume alto. Pro/Opus/o1 = lento e caro, bom para raciocínio complexo e decisões de alto risco. Usar o errado nos dois sentidos é desperdício.

---

<!-- ═══════════════════════════════════════════
     SEÇÃO 3: COMO USAR BEM
═══════════════════════════════════════════ -->


# Do "criança" ao usável: 4 saltos

<div class="grid gap-6 mt-1" style="grid-template-columns: 1fr 1fr;">
  <div style="display: flex; flex-direction: column; gap: 0.45rem;">
    <div class="salto">
      <span class="salto-label">TAREFA</span>
      <span>escreve um e-mail sobre a parada de manutenção</span>
    </div>
    <div v-click="1" class="salto salto-new">
      <span class="salto-label">+ PAPEL</span>
      <span>você é o coordenador de manutenção</span>
    </div>
    <div v-click="2" class="salto salto-new">
      <span class="salto-label">+ CONTEXTO</span>
      <span>parada de 3 dias · afeta a equipe da área X · motivo: troca da bomba Y</span>
    </div>
    <div v-click="3" class="salto salto-new">
      <span class="salto-label">+ FORMATO</span>
      <span>no máximo 5 linhas, em tópicos, sem jargão técnico</span>
    </div>
  </div>
  <div style="display: grid;">
    <div style="grid-area: 1/1;" v-click.hide="1">
      <div class="resp">
        <div class="resp-model">IA · estágio 1</div>
        "Prezados, informamos que haverá uma parada de manutenção em data a definir. Contamos com a compreensão de todos. Atenciosamente."
        <div class="resp-note">genérico. serve? mais ou menos.</div>
      </div>
    </div>
    <div style="grid-area: 1/1;" v-click="[1, 2]">
      <div class="resp">
        <div class="resp-model">IA · estágio 2</div>
        "Equipe, aqui é da coordenação de manutenção. Teremos uma parada programada em breve; em seguida envio o detalhamento das frentes e horários."
        <div class="resp-note">o tom mudou. ainda vago.</div>
      </div>
    </div>
    <div style="grid-area: 1/1;" v-click="[2, 3]">
      <div class="resp">
        <div class="resp-model">IA · estágio 3</div>
        "Equipe da área X: entre os dias 12 e 14 teremos parada de 3 dias para a troca da bomba Y. As atividades da área ficam suspensas no período; retomada prevista para o dia 15, turno da manhã."
        <div class="resp-note">específico. deixou de ser genérico.</div>
      </div>
    </div>
    <div style="grid-area: 1/1;" v-click="3">
      <div class="resp resp-final">
        <div class="resp-model">IA · estágio 4</div>
        <b>Parada de manutenção · área X</b><br>
        • Quando: dias 12–14 (3 dias)<br>
        • Motivo: troca da bomba Y<br>
        • Impacto: atividades da área suspensas<br>
        • Retomada: dia 15, manhã<br>
        • Dúvidas: coordenação de manutenção
        <div class="resp-note ok">pronto pra mandar.</div>
      </div>
    </div>
  </div>
</div>

<div style="display: flex; justify-content: center; gap: 0.7rem; margin-top: 1.1rem;">
  <span class="tag" style="color: var(--rf-primary); border-color: color-mix(in srgb, var(--rf-primary) 55%, transparent);">Tarefa</span>
  <span class="tag" :style="$clicks >= 1 ? 'color: var(--rf-primary); border-color: color-mix(in srgb, var(--rf-primary) 55%, transparent);' : ''">Papel</span>
  <span class="tag" :style="$clicks >= 2 ? 'color: var(--rf-primary); border-color: color-mix(in srgb, var(--rf-primary) 55%, transparent);' : ''">Contexto</span>
  <span class="tag" :style="$clicks >= 3 ? 'color: var(--rf-primary); border-color: color-mix(in srgb, var(--rf-primary) 55%, transparent);' : ''">Formato</span>
</div>

<style>
.salto {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: var(--rf-surface-primary);
  border: 1px solid var(--rf-border-secondary);
  border-radius: 12px;
  padding: 0.6rem 0.9rem;
  font-size: 0.88rem;
  color: var(--rf-text-secondary);
  backdrop-filter: blur(12px);
}
.salto-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--rf-primary);
  flex: 0 0 84px;
}
.salto-new { animation: salto-in 1.6s var(--rf-ease); }
@keyframes salto-in {
  0%  { border-color: var(--rf-primary); box-shadow: 0 0 22px rgba(99,211,161,0.35); }
  100% { border-color: var(--rf-border-secondary); box-shadow: none; }
}
.resp {
  background: var(--rf-surface-primary);
  border: 1px solid var(--rf-border-primary);
  border-radius: 16px;
  padding: 1rem 1.2rem;
  font-size: 0.88rem;
  color: var(--rf-text-secondary);
  line-height: 1.55;
  backdrop-filter: blur(12px);
}
.resp-final { border-color: color-mix(in srgb, var(--rf-primary) 50%, transparent); box-shadow: 0 0 26px rgba(99,211,161,0.12); }
.resp-model {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--rf-text-muted);
  margin-bottom: 0.5rem;
}
.resp-note {
  margin-top: 0.6rem;
  font-size: 0.75rem;
  font-style: italic;
  color: var(--rf-text-muted);
}
.resp-note.ok { color: var(--rf-primary); }
</style>

<!--
Vamos construir um prompt juntos, ao vivo, com uma tarefa de vocês: comunicar uma parada de manutenção. Primeiro, o pedido cru, jeito "criança": "escreve um e-mail sobre a parada de manutenção". [mostra saída genérica] Serve? Mais ou menos. Agora eu adiciono um papel: "você é o coordenador de manutenção". Repara como o tom já muda. Agora o contexto: "parada de três dias, afeta a equipe da área X, motivo é a troca da bomba Y". Ficou específico, deixou de ser genérico. Por fim, formato e restrição: "no máximo cinco linhas, em tópicos, sem jargão técnico". [mostra saída final] Olha o salto. Não mudei de ferramenta, não mudei de modelo. Mudei o que eu dei pra ele. Esses quatro (Papel, Tarefa, Contexto, Formato) são o que eu quero que vocês levem pra casa. Existem outros, mas com esses quatro você já vira a chave. E eles valem pra qualquer tarefa, não só manutenção. Olha só.

[Regra: só o estágio 1 pode ser ao vivo no chat; estágios 2–4 são pré-definidos no slide, imunes à rede.]
-->

---


# Quatro técnicas para conhecer

<div class="grid gap-5 mt-2" style="grid-template-columns: 1fr 1fr;">
  <div class="glass tech-card">
    <div class="tech-head">
      <svg viewBox="0 0 24 24" class="tech-icon"><circle cx="12" cy="12" r="8" fill="none" stroke="var(--rf-primary)" stroke-width="1.5"/><circle cx="12" cy="12" r="4" fill="none" stroke="var(--rf-primary)" stroke-width="1.5"/><circle cx="12" cy="12" r="1.2" fill="var(--rf-primary)"/></svg>
      <b>Instruir sem exemplos</b>
      <span class="tag">zero-shot</span>
    </div>
    <div class="tech-body">"Classifica esse e-mail como urgente ou não." (o mais comum no dia a dia)</div>
  </div>
  <div v-click="1" class="glass tech-card">
    <div class="tech-head">
      <svg viewBox="0 0 24 24" class="tech-icon"><rect x="4" y="4" width="12" height="8" rx="2" fill="none" stroke="var(--rf-primary)" stroke-width="1.4" opacity="0.4"/><rect x="6" y="8" width="12" height="8" rx="2" fill="none" stroke="var(--rf-primary)" stroke-width="1.4" opacity="0.7"/><rect x="8" y="12" width="12" height="8" rx="2" fill="none" stroke="var(--rf-primary)" stroke-width="1.5"/></svg>
      <b>Dar 2–3 exemplos</b>
      <span class="tag">few-shot</span>
    </div>
    <div class="tech-body">Mostre o padrão que você quer e ele copia o formato. Ótimo pra padronizar.</div>
  </div>
  <div v-click="2" class="glass tech-card">
    <div class="tech-head">
      <svg viewBox="0 0 24 24" class="tech-icon"><circle cx="5" cy="12" r="2.2" fill="none" stroke="var(--rf-primary)" stroke-width="1.5"/><circle cx="12" cy="12" r="2.2" fill="none" stroke="var(--rf-primary)" stroke-width="1.5"/><circle cx="19" cy="12" r="2.2" fill="none" stroke="var(--rf-primary)" stroke-width="1.5"/><path d="M7.2 12 h2.6 M14.2 12 h2.6" stroke="var(--rf-primary)" stroke-width="1.5"/></svg>
      <b>"Pense passo a passo"</b>
      <span class="tag">chain-of-thought</span>
    </div>
    <div class="tech-body">Melhora bastante a qualidade em problemas de raciocínio.</div>
  </div>
  <div v-click="3" class="glass tech-card">
    <div class="tech-head">
      <svg viewBox="0 0 24 24" class="tech-icon"><path d="M4 6 q8 -4 16 0 v5 q0 7 -8 9 q-8 -2 -8 -9 Z" fill="none" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linejoin="round"/><circle cx="9.5" cy="11" r="1.2" fill="var(--rf-primary)"/><circle cx="14.5" cy="11" r="1.2" fill="var(--rf-primary)"/><path d="M9.5 15 q2.5 2 5 0" fill="none" stroke="var(--rf-primary)" stroke-width="1.4" stroke-linecap="round"/></svg>
      <b>Atribuir uma persona</b>
      <span class="tag">role prompting</span>
    </div>
    <div class="tech-body">"Aja como um instrutor explicando pra iniciante." (a gente já usou)</div>
  </div>
</div>

<style>
.tech-card { padding: 1.1rem 1.3rem; }
.tech-head { display: flex; align-items: center; gap: 0.7rem; margin-bottom: 0.5rem; }
.tech-head b { color: var(--rf-text-primary); font-size: 1rem; }
.tech-head .tag { margin-left: auto; font-size: 0.58rem; }
.tech-icon { width: 26px; height: 26px; flex-shrink: 0; }
.tech-body { font-size: 0.88rem; color: var(--rf-text-secondary); }
</style>

<!--
Pra quem quiser ir além, quatro nomes que vão aparecer. Zero-shot: você só instrui, sem exemplo. O mais comum. Few-shot: você dá dois ou três exemplos do que quer e ele pega o padrão; ótimo pra padronizar formato. Chain-of-thought: você pede "pense passo a passo", e a qualidade em problemas de raciocínio melhora bastante. E role prompting, que a gente já usou: dar uma persona, "aja como um instrutor explicando pra iniciante". Não precisa decorar os nomes; precisa saber que existem esses botões pra girar quando a resposta não vier boa. Com esse repertório, dá pra escolher e usar bem qualquer assistente de IA generativa.
-->

---

# Prompt ruim × prompt bom

<div class="grid grid-cols-2 gap-5 mt-5">
<div class="flex flex-col gap-3">
<div class="rf-eyebrow" style="color: #EC635E;">❌ Prompt sem estrutura</div>

<div class="glass p-3" style="border-color: rgba(236,99,94,0.4); font-size: 0.75rem; line-height: 1.5; color: var(--rf-text-muted);">
Sem papel, sem tarefa específica, sem contexto, sem formato. A IA não sabe o que você quer. Vai dar um chute razoável.
</div>



<div v-click>
<Terminal modelName="ChatGPT" fontSize="0.72rem" :streamSpeed="16" :conversation="[{user: 'Me fala sobre esse contrato',response: 'Claro! Para analisar o contrato, preciso que você me envie o documento. Em geral, contratos costumam conter partes, objeto, prazo, valor, penalidades e cláusulas de rescisão. Posso ajudar com qualquer dúvida específica que você tiver.'}]" />
</div>

</div>
<div class="flex flex-col gap-3">
<div class="rf-eyebrow" style="color: var(--rf-primary);">✓ Prompt estruturado</div>

<div class="glass p-3" style="border-color: rgba(99,211,161,0.4); font-size: 0.75rem; line-height: 1.5; color: var(--rf-text-muted);">
Mesmo modelo, mesmo documento. A diferença está inteiramente no prompt, não na IA.
</div>

<div v-click>
<Terminal modelName="Claude Sonnet 4.5" fontSize="0.72rem" :streamSpeed="16" :conversation="[{user: 'Você é um analista de risco. Liste em bullet as 3 maiores exposições financeiras deste contrato. Use só o documento. Se não encontrar, escreva N/E.',response: '• Multa por rescisão antecipada: 20% do valor total remanescente (cláusula 8.4)\n• Reajuste unilateral do fornecedor: até 15% a.a. sem necessidade de aditivo (cláusula 5.2)\n• Ausência de limitação de responsabilidade civil: N/E'}]" />
</div>

</div>
</div>

::note::
O modelo é o mesmo. O que muda é a qualidade da instrução. Prompting é uma habilidade, não um talento — aprende-se com prática e estrutura.

---

# Cinco usos de alto retorno

<div class="grid grid-cols-5 gap-2 mt-5">

  <div v-click class="glass p-3 flex flex-col gap-2" style="font-size: 0.75rem; line-height: 1.5;">
    <span style="font-size: 1.4rem;">📄</span>
    <strong style="color: var(--rf-primary);">Análise de documentos</strong>
    <span style="color: var(--rf-text-muted);">Contratos, relatórios, atas. Extração estruturada em segundos.</span>
  </div>

  <div v-click class="glass p-3 flex flex-col gap-2" style="font-size: 0.75rem; line-height: 1.5;">
    <span style="font-size: 1.4rem;">✉️</span>
    <strong style="color: var(--rf-primary);">Comunicação</strong>
    <span style="color: var(--rf-text-muted);">E-mails difíceis, apresentações, resumos executivos com tom ajustável.</span>
  </div>

  <div v-click class="glass p-3 flex flex-col gap-2" style="font-size: 0.75rem; line-height: 1.5;">
    <span style="font-size: 1.4rem;">🔍</span>
    <strong style="color: var(--rf-primary);">Pesquisa rápida</strong>
    <span style="color: var(--rf-text-muted);">Benchmark de mercado, síntese de literatura, comparativo de opções.</span>
  </div>

  <div v-click class="glass p-3 flex flex-col gap-2" style="font-size: 0.75rem; line-height: 1.5;">
    <span style="font-size: 1.4rem;">🧮</span>
    <strong style="color: var(--rf-primary);">Estruturação de problemas</strong>
    <span style="color: var(--rf-text-muted);">Ideação, árvores de decisão, frameworks.</span>
  </div>

  <div v-click class="glass p-3 flex flex-col gap-2" style="font-size: 0.75rem; line-height: 1.5;">
    <span style="font-size: 1.4rem;">⚙️</span>
    <strong style="color: var(--rf-primary);">Automação de rotinas</strong>
    <span style="color: var(--rf-text-muted);">Transcrição de reuniões, padronização de dados, geração de templates.</span>
  </div>

</div>

<div v-click class="glass p-3 mt-4" style="font-size: 0.78rem; line-height: 1.6; border-color: rgba(226,248,27,0.3);">
  <strong style="color: var(--rf-highlight);">Regra prática:</strong>
  se a tarefa envolve ler, resumir, comparar, redigir ou estruturar texto: 
  a IA provavelmente faz em 10% do tempo. Se envolve decisão final com consequência real: o humano é <strong>insubstituível</strong>.
</div>

::note::
O retorno não vem de substituir pessoas. Vem de eliminar o trabalho de preparação que consome tempo mas não exige julgamento.

---

<!-- ═══════════════════════════════════════════
     SEÇÃO 4: LIMITES
═══════════════════════════════════════════ -->

# Os Dois Conflitos da IA

<div class="flex items-center gap-4 mt-4" style="font-size: 0.8rem; line-height: 1.4;">

<div class="glass p-3 flex-1" style="border-color: var(--rf-primary); text-align: center;">

<span style="color: var(--rf-primary); font-weight: 700;">🧠 Fiel ao treinamento</span><br><br>
Ser completa. Agradar. Parecer confiante. Nunca deixar uma pergunta sem resposta.

</div>

<div style="font-size: 1rem; font-weight: 700; flex-shrink: 0; text-align: center; opacity: 0.45; letter-spacing: 0.1em;">vs</div>

<div class="glass p-3 flex-1" style="border-color: var(--rf-highlight); text-align: center;">

<span style="color: var(--rf-highlight); font-weight: 700;">📋 Seguir suas instruções</span><br><br>
Ser precisa. Dizer "não encontrei". Citar a fonte. Usar só o que está no documento.

</div>

</div>

::note::
Antes de falar nos limites técnicos, é importante entender o conflito de objetivos. A IA não falha por acidente — ela falha porque foi treinada para um objetivo (agradar, ser completa) que às vezes entra em rota de colisão com o que você precisa (precisão, rastreabilidade, contenção).

---

# Os Dois Limites da IA

<div class="relative" style="height: 355px; margin-top: 0.5rem;">

<svg viewBox="0 0 900 355" xmlns="http://www.w3.org/2000/svg" style="position: absolute; inset: 0; width: 100%; height: 100%;">
  <defs>
    <radialGradient id="innerGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="var(--rf-primary)" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="var(--rf-primary)" stop-opacity="0.03"/>
    </radialGradient>
    <radialGradient id="inventouGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="var(--rf-highlight)" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="var(--rf-highlight)" stop-opacity="0.02"/>
    </radialGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <style>
      .svg-label { font-size: 13px; font-weight: 400; letter-spacing: 0.03em; font-family: 'Space Grotesk', sans-serif; }
      .svg-label-bold { font-size: 13px; font-weight: 600; letter-spacing: 0; font-family: 'Space Grotesk', sans-serif; }
      .svg-badge { font-size: 11px; font-weight: 600; letter-spacing: 0; font-family: 'Space Grotesk', sans-serif; }
    </style>
  </defs>

  <!-- CLIQUE 0: sempre visível — contrato -->
  <circle cx="450" cy="183" r="145"
    fill="color-mix(in srgb, var(--rf-primary) 3%, transparent)"
    stroke="#2cc9ec"
    stroke-width="1.5"
    stroke-dasharray="9 6"
    opacity="0.85"/>
  <text x="450" y="27" text-anchor="middle"
    class="svg-label"
    style="font-size:13px; font-weight:500; letter-spacing:0.03em; font-family:'Space Grotesk',sans-serif;"
    fill="#2cc9ec">O que estava no contexto</text>

  <!-- CLIQUE 1: o que a IA achou -->
  <g v-click>
    <circle cx="468" cy="177" r="110"
      fill="url(#innerGrad)"
      stroke="var(--rf-primary)"
      stroke-width="1.5"
      filter="url(#softGlow)"/>
    <circle cx="412" cy="138" r="3" fill="var(--rf-primary)" opacity="0.75"/>
    <line x1="420" y1="138" x2="542" y2="138" stroke="var(--rf-primary)" stroke-width="1.8" stroke-linecap="round" opacity="0.55"/>
    <circle cx="412" cy="157" r="3" fill="var(--rf-primary)" opacity="0.75"/>
    <line x1="420" y1="157" x2="524" y2="157" stroke="var(--rf-primary)" stroke-width="1.8" stroke-linecap="round" opacity="0.5"/>
    <circle cx="412" cy="176" r="3" fill="var(--rf-primary)" opacity="0.75"/>
    <line x1="420" y1="176" x2="538" y2="176" stroke="var(--rf-primary)" stroke-width="1.8" stroke-linecap="round" opacity="0.55"/>
    <circle cx="412" cy="195" r="3" fill="var(--rf-primary)" opacity="0.75"/>
    <line x1="420" y1="195" x2="514" y2="195" stroke="var(--rf-primary)" stroke-width="1.8" stroke-linecap="round" opacity="0.5"/>
    <circle cx="412" cy="214" r="3" fill="var(--rf-primary)" opacity="0.75"/>
    <line x1="420" y1="214" x2="528" y2="214" stroke="var(--rf-primary)" stroke-width="1.8" stroke-linecap="round" opacity="0.55"/>
    <text x="468" y="308" text-anchor="middle"
      class="svg-label-bold"
      style="font-size:13px; font-weight:600; letter-spacing:0; font-family:'Space Grotesk',sans-serif;"
      fill="color-mix(in srgb, var(--rf-primary) 85%, transparent)">O que a IA achou</text>
  </g>

  <!-- CLIQUE 2: perdeu (vermelho) -->
  <g v-click>
    <circle cx="323" cy="153" r="3.5" fill="#EC635E" opacity="0.55"/>
    <circle cx="312" cy="183" r="3"   fill="#EC635E" opacity="0.45"/>
    <circle cx="319" cy="213" r="3.5" fill="#EC635E" opacity="0.55"/>
    <circle cx="336" cy="137" r="2.5" fill="#EC635E" opacity="0.35"/>
    <circle cx="341" cy="167" r="3"   fill="#EC635E" opacity="0.45"/>
    <circle cx="331" cy="198" r="2.5" fill="#EC635E" opacity="0.4"/>
    <circle cx="349" cy="145" r="2.5" fill="#EC635E" opacity="0.3"/>
    <circle cx="346" cy="222" r="2.5" fill="#EC635E" opacity="0.35"/>
    <circle cx="321" cy="173" r="2"   fill="#EC635E" opacity="0.3"/>
    <rect x="240" y="108" width="72" height="22" rx="5"
      fill="rgba(236,99,94,0.12)" stroke="#EC635E" stroke-width="1" opacity="0.9"/>
    <text x="276" y="123" text-anchor="middle"
      class="svg-badge"
      style="font-size:11px; font-weight:600; font-family:'Space Grotesk',sans-serif;"
      fill="#EC635E">perdeu</text>
  </g>

  <!-- CLIQUE 3: inventou (verde-limão) -->
  <g v-click>
    <circle cx="636" cy="250" r="58"
      fill="url(#inventouGrad)"
      stroke="var(--rf-highlight)"
      stroke-width="1.5"
      stroke-dasharray="7 5"
      opacity="0.85"/>
    <line x1="582" y1="237" x2="688" y2="237" stroke="var(--rf-highlight)" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
    <line x1="580" y1="251" x2="690" y2="251" stroke="var(--rf-highlight)" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
    <line x1="584" y1="265" x2="684" y2="265" stroke="var(--rf-highlight)" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
    <rect x="598" y="310" width="80" height="22" rx="5"
      fill="color-mix(in srgb, var(--rf-highlight) 10%, transparent)" stroke="var(--rf-highlight)" stroke-width="1" opacity="0.9"/>
    <text x="638" y="325" text-anchor="middle"
      class="svg-badge"
      style="font-size:11px; font-weight:600; font-family:'Space Grotesk',sans-serif;"
      fill="var(--rf-highlight)">inventou</text>
  </g>

</svg>

<!-- Left card: aparece no clique 2 (junto com os pontos vermelhos) -->
<div v-click="2" class="glass p-4" style="position: absolute; left: 0; top: 55px; width: 190px; border-color: rgba(236,99,94,0.45);">
  <div style="color: #EC635E; font-weight: 700; font-size: 0.82rem; margin-bottom: 0.4rem; line-height: 1.3;">⚠ A IA pode perder informação</div>
  <p style="font-size: 0.75rem; line-height: 1.5; opacity: 0.7; margin: 0;">Algo estava no contexto, mas não apareceu na resposta.</p>
</div>

<!-- Right card: aparece no clique 3 (junto com o círculo amarelo) -->
<div v-click="3" class="glass p-4" style="position: absolute; right: 0; top: 55px; width: 190px; border-color: color-mix(in srgb, var(--rf-highlight) 45%, transparent);">
  <div style="color: var(--rf-highlight); font-weight: 700; font-size: 0.82rem; margin-bottom: 0.4rem; line-height: 1.3;">⚠ A IA pode inventar informação</div>
  <p style="font-size: 0.75rem; line-height: 1.5; opacity: 0.7; margin: 0;">Algo apareceu na resposta, mas não estava no contexto.</p>
</div>

</div>

::note::
Dois problemas opostos — ao mesmo tempo. Recall: ela não cobre tudo e não avisa o que perdeu. Alucinação: ela vai além do que estava no documento sem avisar. Os próximos dois slides detalham cada um.


---

# O que a IA não substitui

<div class="grid grid-cols-3 gap-4 mt-6">

  <div v-click class="glass p-4 flex flex-col gap-3" style="border-top: 3px solid #EC635E;">
    <span style="font-size: 1.5rem;">⚖️</span>
    <strong style="color: var(--rf-text-primary); font-size: 0.88rem;">Julgamento com consequência</strong>
    <p style="font-size: 0.77rem; color: var(--rf-text-muted); line-height: 1.6; margin: 0;">
      Demissões, aprovações de crédito, diagnósticos, decisões estratégicas irreversíveis.
      A IA pode preparar o material. A responsabilidade é sua.
    </p>
  </div>

  <div v-click class="glass p-4 flex flex-col gap-3" style="border-top: 3px solid #EC635E;">
    <span style="font-size: 1.5rem;">🤝</span>
    <strong style="color: var(--rf-text-primary); font-size: 0.88rem;">Relação e confiança</strong>
    <p style="font-size: 0.77rem; color: var(--rf-text-muted); line-height: 1.6; margin: 0;">
      Negociações complexas, liderança em crise, construção de cultura.
      Nenhum prompt substitui presença e credibilidade pessoal.
    </p>
  </div>

  <div v-click class="glass p-4 flex flex-col gap-3" style="border-top: 3px solid #EC635E;">
    <span style="font-size: 1.5rem;">🧭</span>
    <strong style="color: var(--rf-text-primary); font-size: 0.88rem;">Contexto organizacional</strong>
    <p style="font-size: 0.77rem; color: var(--rf-text-muted); line-height: 1.6; margin: 0;">
      A IA não sabe quem é o stakeholder difícil, qual é a história política do projeto,
      o que está nas entrelinhas. Você sim.
    </p>
  </div>

</div>

<div v-click class="glass p-4 mt-4" style="border-color: rgba(99,211,161,0.35); font-size: 0.82rem; line-height: 1.7; text-align: center;">
  A vantagem competitiva não vai para quem usa IA.<br>
  Vai para quem sabe <strong style="color: var(--rf-primary);">onde usá-la</strong> e
  <strong style="color: var(--rf-highlight);">onde não usá-la</strong>.
</div>

::note::
Encerramento com o ponto que mais importa para esse público: a IA amplia capacidade, não transfere responsabilidade. O profissional que entende essa fronteira se diferencia.

---


# Os 7 tropeços de quem começa

<div class="grid gap-x-8 gap-y-3 mt-3" style="grid-template-columns: 1fr 1fr;">
  <div class="erro-item">
    <span class="erro-num">1</span>
    <span>usar como <b>buscador confiável</b> — ela não é o Google</span>
  </div>
  <div v-click="1" class="erro-item">
    <span class="erro-num">2</span>
    <span>não <b>checar a resposta</b> antes de usar</span>
  </div>
  <div v-click="2" class="erro-item">
    <span class="erro-num">3</span>
    <span>fazer perguntas <b>vagas e genéricas</b></span>
  </div>
  <div v-click="3" class="erro-item">
    <span class="erro-num">4</span>
    <span>não dar <b>contexto</b> suficiente</span>
  </div>
  <div v-click="4" class="erro-item">
    <span class="erro-num">5</span>
    <span>achar que ela <b>lembra</b> da conversa passada — mesa limpa, lembra?</span>
  </div>
  <div v-click="5" class="erro-item erro-grave">
    <span class="erro-num grave">6</span>
    <span>colar <b>dado sigiloso</b> em ferramenta pública</span>
  </div>
  <div v-click="6" class="erro-item" style="grid-column: 1 / -1; justify-content: center;">
    <span class="erro-num">7</span>
    <span>esperar <b>perfeição de primeira</b> — iterar é o uso normal</span>
  </div>
</div>

<p style="text-align: center; margin-top: 1.6rem; font-size: 0.95rem; color: var(--rf-text-muted); font-style: italic;">todo mundo comete os sete — a diferença é <span style="color: var(--rf-primary);">quanto tempo demora pra parar</span></p>

<style>
.erro-item {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  background: var(--rf-surface-primary);
  border: 1px solid var(--rf-border-primary);
  border-radius: 12px;
  padding: 0.65rem 1rem;
  font-size: 0.95rem;
  color: var(--rf-text-secondary);
  backdrop-filter: blur(12px);
}
.erro-item b { color: var(--rf-text-primary); }
.erro-num {
  flex-shrink: 0;
  width: 30px; height: 30px;
  border-radius: 50%;
  border: 1.5px solid var(--rf-primary);
  color: var(--rf-primary);
  font-family: "JetBrains Mono", monospace;
  font-weight: 700;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.erro-grave { border-color: rgba(236,99,94,0.4); }
.erro-num.grave { border-color: #EC635E; color: #EC635E; }
</style>

<!--
Anos vendo gente começar a usar IA, os mesmos sete tropeços aparecem sempre. Um: usar como buscador — perguntar fato atual pra quem tem data de corte e inventa com confiança. Dois: não checar antes de mandar — o e-mail sai com erro assinado por você. Três e quatro andam juntos: pergunta vaga, sem contexto — resposta genérica, frustração. Cinco: achar que ela lembra da semana passada — vocês já sabem, mesa limpa a cada conversa. Seis — e esse eu marquei em vermelho de propósito: colar dado sigiloso em ferramenta pública. Sete: desistir porque a primeira resposta veio fraca — iterar é o uso normal, não é falha sua nem dela. Se reconheceram em alguns? Ótimo, é sinal de que já usaram. E o de vermelho, junto com o hábito de validar, é tão sério no nosso contexto que vira regra — regra que não se negocia.
-->

---

# Duas regras que não se negociam

<div class="grid gap-7 mt-6" style="grid-template-columns: 1fr 1fr;">
  <div class="rule-card">
    <div class="rule-num">REGRA 1</div>
    <svg viewBox="0 0 48 48" class="rule-icon">
      <rect x="10" y="21" width="28" height="19" rx="4" fill="none" stroke="var(--rf-primary)" stroke-width="2" />
      <path d="M16 21 v-5 a8 8 0 0 1 16 0 v5" fill="none" stroke="var(--rf-primary)" stroke-width="2" />
      <circle cx="24" cy="30" r="2.6" fill="var(--rf-primary)" />
      <path d="M24 32.5 v4" stroke="var(--rf-primary)" stroke-width="2" stroke-linecap="round" />
    </svg>
    <div class="rule-text">Dado sensível: <b>só no ambiente corporativo</b> autorizado pela sua empresa. Nunca em ferramenta pública.</div>
  </div>
  <div class="rule-card">
    <div class="rule-num">REGRA 2</div>
    <svg viewBox="0 0 48 48" class="rule-icon">
      <path d="M24 5 L40 11 v10 c0 10 -6.5 16.5 -16 19 -9.5 -2.5 -16 -9 -16 -19 V11 Z" fill="none" stroke="var(--rf-primary)" stroke-width="2" stroke-linejoin="round" />
      <path d="M16.5 24 l5 5 L32 18.5" fill="none" stroke="var(--rf-primary)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <div class="rule-text"><b>Validou? Só então aja</b> sobre a resposta. A IA rascunha; quem responde pela decisão é você.</div>
  </div>
</div>

<style>
.rule-card {
  background: var(--rf-bg-soft);
  border: 1px solid var(--rf-border-secondary);
  outline: 1px solid var(--rf-border-primary);
  outline-offset: 4px;
  border-radius: var(--rf-radius);
  padding: 2rem 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.1rem;
  box-shadow: var(--rf-shadow);
}
.rule-num {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  color: var(--rf-highlight);
}
.rule-icon { width: 62px; height: 62px; }
.rule-text { font-size: 1.18rem; color: var(--rf-text-secondary); line-height: 1.6; }
.rule-text b { color: var(--rf-text-primary); }
</style>

<!--
Duas regras que eu peço que saiam daqui gravadas. Primeira: dado sensível da companhia fica no ambiente corporativo autorizado pela empresa. Não cola informação interna, dado de operação, nada disso numa ferramenta pública da internet. Ferramentas corporativas existem justamente pra vocês terem o poder da IA sem esse risco. Segunda regra: valide antes de agir. Se a resposta vai virar decisão, comunicado oficial, parâmetro de operação — confira contra a fonte, contra a norma, contra quem entende. A IA rascunha; quem responde pela decisão é você. Ferramenta boa não substitui julgamento — ela acelera o seu. E existe um jeito prático de exercitar esse julgamento na hora H.

[Alinhar com a política interna de uso de IA / classificação da informação, citando a norma vigente se houver.]
-->

---
clicks: 5
---

# Por onde começar: esta semana

<div class="grid grid-cols-2 gap-5 mt-5">

  <div class="flex flex-col gap-3">

  <div v-click class="glass p-4" style="border-left: 3px solid var(--rf-primary); font-size: 0.6rem; line-height: 1.6;">
      <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">1. Escolha uma tarefa repetitiva</span>
      Algo que você faz toda semana com texto: resumo, e-mail padrão, ata, relatório.
      Tente delegar para a IA com um prompt estruturado.
    </div>

  <div v-click class="glass p-4" style="border-left: 3px solid var(--rf-primary); font-size: 0.6rem; line-height: 1.6;">
      <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">2. Use o modelo certo</span>
      Para explorar e rascunhar: Flash/Haiku (rápido, barato).
      Para revisar e decidir: Pro/Opus/Sonnet (mais cuidadoso).
    </div>

   <div v-click class="glass p-4" style="border-left: 3px solid var(--rf-primary); font-size: 0.6rem; line-height: 1.6;">
      <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">3. Sempre revise a saída</span>
      Leia o que a IA produziu com a mesma atenção que você leria o trabalho de um estagiário talentoso mas novato. Ele pode ter inventado alguma coisa.
    </div>

  <div v-click class="glass p-4" style="border-left: 3px solid var(--rf-highlight); font-size: 0.6rem; line-height: 1.6;">
      <span style="color: var(--rf-highlight); font-weight: 700; display: block; margin-bottom: 0.3rem;">4. Itere o prompt</span>
      Se a resposta decepcionou, não culpe o modelo — revise a instrução.
      Adicione papel, formato ou restrição. Tente de novo.
    </div>

  </div>

  <div v-click class="flex flex-col justify-center">
    <Terminal
      modelName="Claude Sonnet 4.5"
      fontSize="0.72rem"
      :streamSpeed="20"
      :loop="false"
      :conversation="[{
        user: 'Qual a diferença prática entre usar Claude Pro e Claude Haiku para análise de contratos?',
        response: 'Para triagem inicial — extrair partes, datas, valores — Haiku é suficiente e 10x mais rápido. Para identificar ambiguidades, cláusulas incomuns ou risco interpretativo, use Pro: ele sustenta raciocínio mais longo e erra menos em nuances jurídicas. Regra prática: Haiku para estruturar, Pro para julgar.'
      }]"
    />
  </div>

</div>

::note::
Termino com ação concreta. O aprendizado de IA se consolida em uso — não em leitura. Uma tarefa real essa semana vale mais do que 10 apresentações.

---


# As perguntas que sempre aparecem

<div class="grid gap-4 mt-2" style="grid-template-columns: 1fr 1fr;">
  <div class="faq-card glass">
    <div class="faq-q">"A IA vai me substituir?"</div>
    <div class="faq-a">Ela muda funções e elimina tarefa repetitiva. A vantagem fica com <b>quem usa bem</b> — não com quem ignora.</div>
  </div>
  <div v-click="1" class="faq-card glass">
    <div class="faq-q">"Posso confiar cegamente?"</div>
    <div class="faq-a"><b>Nunca.</b> É um rascunho inicial muito bom. A palavra final é sua — sempre.</div>
  </div>
  <div v-click="2" class="faq-card glass">
    <div class="faq-q">"Ela lembra do que falei semana passada?"</div>
    <div class="faq-a">Por padrão, não — <b>mesa limpa</b> a cada conversa. Algumas ferramentas têm memória ativável.</div>
  </div>
  <div v-click="3" class="faq-card glass">
    <div class="faq-q">"Ela acessa meu computador, minha câmera?"</div>
    <div class="faq-a">Não. Ela só vê <b>o que você digita ou anexa</b> na conversa.</div>
  </div>
  <div v-click="4" class="faq-card glass">
    <div class="faq-q">"Ela aprende com o que eu digito?"</div>
    <div class="faq-a">Depende do plano. Ferramenta pública gratuita, <b>pode usar</b> pra treino; ambiente corporativo costuma ter garantias contratuais contra isso.</div>
  </div>
  <div v-click="5" class="faq-card glass">
    <div class="faq-q">"Preciso saber programar?"</div>
    <div class="faq-a"><b>Não.</b> Você conversa em português. A habilidade é de comunicação, não de código.</div>
  </div>
</div>

<style>
.faq-card { padding: 0.9rem 1.2rem; }
.faq-q {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--rf-primary);
  margin-bottom: 0.35rem;
}
.faq-a { font-size: 0.85rem; color: var(--rf-text-secondary); line-height: 1.5; }
.faq-a b { color: var(--rf-text-primary); }
</style>

<!--
Seis perguntas que sempre aparecem — respondo de uma vez. "Vai me substituir?" Ela muda funções e come tarefa repetitiva; a vantagem fica com quem aprende a usar, e é exatamente o que vocês fizeram hoje. "Posso confiar cegamente?" Nunca — rascunho ótimo, decisão sua. "Ela lembra da semana passada?" Não: mesa limpa a cada conversa, vocês já sabem. "Acessa meu computador?" Não — só vê o que você digita ou anexa. "Aprende com o que eu digito?" Na ferramenta pública gratuita, pode acontecer; no ambiente corporativo há garantias contratuais. E "preciso saber programar?" Não. É português. Habilidade de comunicação, não de código. Agora sim: a jornada inteira num mapa só.
-->

---


# E agora??

<Spacer :h="20"/>

<div class="rf-center text-center">
  <div style="position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(99,211,161,0.14) 0%, transparent 65%); filter: blur(40px); pointer-events: none;" />
  <p style="font-family: 'TeX Gyre Pagella', 'Palatino', Georgia, serif; font-style: italic; font-size: clamp(2rem, 3.5vw, 3.25rem); line-height: 1.35; max-width: 30ch; margin: 0 auto; color: var(--rf-text-primary); position: relative;">
    A pergunta não é mais<br>se a IA vai mudar seu trabalho.<br><Spacer :h="10"/>
    <span v-click>É se você vai <span style="color: var(--rf-primary);">guiar a inovação</span> <span style="color: var(--rf-text-muted);"><br>(que já está ao seu alcance)</span> <br>ou vê-la passar.</span>
  </p>
</div>

<!--
Pra fechar. A tecnologia que a gente abriu hoje não é mágica — vocês agora sabem: ela prevê a próxima palavra, quebra texto em tokens, presta atenção no contexto. Ela tem limites reais. Mas é muito poderosa nas mãos de quem sabe dirigir. E dirigir bem não é habilidade técnica — é saber qual problema vale resolver, ter o contexto de operação pra perceber quando a resposta está errada, e ter o julgamento pra validar antes de agir. Isso é de vocês, não da máquina. A frase na tela é o que eu quero que levem pra casa. Obrigado — e agora eu abro pra perguntas.
-->

---

<CoverSlide
  title="Obrigado"
  subtitle="Perguntas?"
  presenter="R. M. Ferrari"
  date="Julho de 2026"
/>

::note::
Abrir para perguntas. Se houver tempo, demo ao vivo com um prompt de análise de documento trazido pela audiência.