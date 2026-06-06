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
  eyebrow="FGV EAESP"
  title="A era da IA Generativa"
  subtitle="O que muda quando computadores passam a gerar conteúdo?"
  presenter="R. M. Ferrari"
  location="São Paulo, SP"
  date="Março de 2026"
/>

::note::
Bem-vindos. Hoje não é uma aula de programação. É uma aula de leitura crítica de uma tecnologia que já está no seu dia a dia — queira ou não.

---

# Quem sou eu?

<div class="grid grid-cols-2 gap-8">
<div>

<CircularImage
  src="https://github.com/ramonferrari.png"
  size="180px"
  borderColor="var(--rf-highlight)"
  :scale="1.1"
  x="120"
  y="200"
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

# A IA não tem memória. Tem mesa de trabalho.

<Contextdesk />

::note::
Essa distinção muda como você usa a ferramenta. Contexto é recurso escasso. O que você coloca nele determina a qualidade da resposta.

---

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

# A anatomia de um bom prompt

<div class="grid grid-cols-2 gap-4 mt-4">
<div class="flex flex-col gap-2">
<div v-click class="glass p-3" style="border-left: 3px solid var(--rf-primary); font-size: 0.8rem; line-height: 1.55;">
<span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.25rem;">① Papel</span>
Diga quem o modelo deve ser nesse contexto.<br>
<span style="color: var(--rf-text-muted);">Ex: "Você é um analista de contratos focado em risco operacional."</span>
</div>
<div v-click class="glass p-3" style="border-left: 3px solid var(--rf-primary); font-size: 0.8rem; line-height: 1.55;">
<span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.25rem;">② Tarefa</span>
Uma instrução clara. Verbo no imperativo. Sem ambiguidade.<br>
<span style="color: var(--rf-text-muted);">Ex: "Identifique as cláusulas de rescisão e liste em tópicos."</span>
</div>
<div v-click class="glass p-3" style="border-left: 3px solid var(--rf-primary); font-size: 0.8rem; line-height: 1.55;">
<span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.25rem;">③ Contexto</span>
Dê o material relevante. Quanto mais específico, menos a IA vai adivinhar.<br>
<span style="color: var(--rf-text-muted);">Ex: cole o contrato, descreva o setor, o tipo de cliente.</span>
</div>
</div>
<div class="flex flex-col gap-2">
<div v-click class="glass p-3" style="border-left: 3px solid var(--rf-primary); font-size: 0.8rem; line-height: 1.55;">
<span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.25rem;">④ Formato de saída</span>
Diga como quer receber. Tabela, bullet, parágrafo, JSON, e-mail.<br>
<span style="color: var(--rf-text-muted);">Ex: "Responda em tabela com colunas: cláusula | risco | recomendação."</span>
</div>
<div v-click class="glass p-3" style="border-left: 3px solid rgba(226,248,27,0.7); font-size: 0.8rem; line-height: 1.55;">
<span style="color: var(--rf-highlight); font-weight: 700; display: block; margin-bottom: 0.25rem;">⑤ Restrições</span>
O que <em>não</em> fazer é tão importante quanto o que fazer.<br>
<span style="color: var(--rf-text-muted);">Ex: "Use apenas o documento enviado. Se não encontrar, escreva N/E."</span>
</div>

</div>
</div>

::note::
Papel + Tarefa + Contexto + Formato + Restrições. Cinco elementos. Não precisa usar todos sempre — mas quando a resposta decepcionar, o problema quase sempre é a ausência de um deles.

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

<div class="grid grid-cols-3 gap-2 mt-3" style="font-size: 0.6rem; line-height: 1.35;">

<div v-click class="glass p-3" style="border-top: 2px solid #EC635E;">

<span style="color: #EC635E; font-weight: 700;">"Se não encontrar, põe N/E"</span>

Treinamento: resposta vazia não agrada.

→ IA inventa **8%** com total confiança.

</div>

<div v-click class="glass p-3" style="border-top: 2px solid #EC635E;">

<span style="color: #EC635E; font-weight: 700;">"Extraia só o valor total"</span>

Treinamento: ser completo é ser útil.

→ IA adiciona interpretações e avisos que ninguém pediu.

</div>

<div v-click class="glass p-3" style="border-top: 2px solid #EC635E;">

<span style="color: #EC635E; font-weight: 700;">"Use só o documento enviado"</span>

Treinamento: multas ficam entre 5–10%.

→ IA "preenche" cláusula vaga com conhecimento geral.

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
    fill="#2cc9ec">O que estava no contrato</text>

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
  <p style="font-size: 0.75rem; line-height: 1.5; opacity: 0.7; margin: 0;">Algo estava no contrato, mas não apareceu na resposta.</p>
</div>

<!-- Right card: aparece no clique 3 (junto com o círculo amarelo) -->
<div v-click="3" class="glass p-4" style="position: absolute; right: 0; top: 55px; width: 190px; border-color: color-mix(in srgb, var(--rf-highlight) 45%, transparent);">
  <div style="color: var(--rf-highlight); font-weight: 700; font-size: 0.82rem; margin-bottom: 0.4rem; line-height: 1.3;">⚠ A IA pode inventar informação</div>
  <p style="font-size: 0.75rem; line-height: 1.5; opacity: 0.7; margin: 0;">Algo apareceu na resposta, mas não estava no contrato.</p>
</div>

</div>

::note::
Dois problemas opostos — ao mesmo tempo. Recall: ela não cobre tudo e não avisa o que perdeu. Alucinação: ela vai além do que estava no documento sem avisar. Os próximos dois slides detalham cada um.


---

<!-- ═══════════════════════════════════════════
     SEÇÃO 5: PROMPTS EXEMPLOS
═══════════════════════════════════════════ -->

# Prompt #1: análise de documentos

<div class="grid grid-cols-2 gap-4 mt-4">

  <div class="flex flex-col gap-3">

  <div v-click class="glass p-3" style="font-size: 0.6rem; line-height: 1.6;">
      <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">📄 Resumo executivo</span>
      <code style="font-size: 0.7rem; color: var(--rf-text-muted); white-space: pre-wrap; background: transparent;">Resuma o documento abaixo em no máximo 5 bullets. Cada bullet deve ter: tema | achado principal | implicação prática. Use só o que está no texto. Se não houver implicação clara, escreva N/A.</code>
    </div>

  <div v-click class="glass p-3" style="font-size: 0.6rem; line-height: 1.6;">
      <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">⚠️ Mapeamento de riscos</span>
      <code style="font-size: 0.7rem; color: var(--rf-text-muted); white-space: pre-wrap; background: transparent;">Você é um analista de risco jurídico. Leia o contrato abaixo e liste em tabela os pontos de atenção: cláusula | risco | severidade (alta/média/baixa) | recomendação. Use só o documento. N/E se não encontrar.</code>
    </div>

  <div v-click class="glass p-3" style="font-size: 0.6rem; line-height: 1.6;">
      <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">🔍 Comparação entre versões</span>
      <code style="font-size: 0.7rem; color: var(--rf-text-muted); white-space: pre-wrap; background: transparent;">Compare os dois documentos abaixo. Liste as diferenças em tabela: item | versão A | versão B | impacto da mudança. Ignore formatação, foque em conteúdo substantivo.</code>
    </div>

  </div>

  <div v-click>
    <Terminal
      modelName="Claude Sonnet 4.5"
      fontSize="0.7rem"
      :streamSpeed="15"
      :conversation="[
        { user: 'Resuma em 3 bullets: tema | achado | implicação. Só o documento. N/A se não houver implicação.', response: '• Prazo | Contrato vigente até dez/2026, renovação automática por 12 meses | Risco de renovação indesejada se não houver notificação com 90 dias de antecedência\n• Pagamento | Reajuste anual pelo IPCA + 2% (cláusula 6.1) | Exposição acima da inflação em cenários de IPCA elevado\n• Rescisão | Multa de 20% sobre saldo remanescente | N/A — valor já mapeado no orçamento de risco' }
      ]"
    />
  </div>

</div>

::note::
O template de resumo executivo funciona para qualquer documento. A chave é o "N/A se não houver" — força o modelo a ser honesto sobre ausências em vez de inventar implicações.

---

# Prompt #2: comunicação e estruturação

<div class="grid grid-cols-2 gap-4 mt-4">

  <div class="flex flex-col gap-3">

  <div v-click class="glass p-3" style="font-size: 0.6rem; line-height: 1.6;">
      <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">✉️ E-mail difícil</span>
      <code style="font-size: 0.7rem; color: var(--rf-text-muted); white-space: pre-wrap;">Escreva um e-mail para [cargo/nome] comunicando [situação]. Tom: direto e respeitoso. Máximo 5 parágrafos. Não use jargão corporativo. Termine com uma pergunta ou próximo passo claro.</code>
    </div>

  <div v-click class="glass p-3" style="font-size: 0.6rem; line-height: 1.6;">
      <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">🧮 Estruturação de problema</span>
      <code style="font-size: 0.7rem; color: var(--rf-text-muted); white-space: pre-wrap;">Quero estruturar o seguinte problema de negócio: [descreva]. Me faça 5 perguntas que me ajudem a clarificar o problema antes de propor soluções. Uma pergunta por vez.</code>
    </div>

  <div v-click class="glass p-3" style="font-size: 0.6rem; line-height: 1.6;">
      <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">🎯 Preparação para reunião</span>
      <code style="font-size: 0.7rem; color: var(--rf-text-muted); white-space: pre-wrap;">Vou ter uma reunião com [perfil do interlocutor] sobre [tema]. Com base no contexto abaixo, sugira: 3 pontos que devo reforçar, 2 objeções prováveis e como respondê-las, 1 pergunta de fechamento.</code>
    </div>

  </div>

  <div v-click>
    <Terminal
      modelName="Claude Sonnet 4.5"
      fontSize="0.7rem"
      :streamSpeed="15"
      :loop="false"
      :conversation="[
        { user: 'Quero estruturar: nosso churn aumentou 12% no Q3. Me faça uma pergunta por vez para clarificar antes de sugerir causas.', response: 'Entendido. Primeira pergunta: o aumento de 12% é em relação ao Q2 deste ano ou ao Q3 do ano anterior?' },
        { user: 'Em relação ao Q2 deste ano.', response: 'Obrigado. Segunda pergunta: o churn se concentra em algum segmento específico de clientes — por tamanho, setor ou tempo de contrato?' }
      ]"
    />
  </div>

</div>

::note::
O meta-prompt de crítica é subestimado. Usar a IA para atacar seu próprio argumento antes da reunião é uma das aplicações de maior retorno para profissionais de negócio.

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

<CoverSlide
  eyebrow="FGV EAESP"
  title="Obrigado"
  subtitle="Perguntas?"
  presenter="R. M. Ferrari"
  location="São Paulo, SP"
  date="Março de 2026"
/>

::note::
Abrir para perguntas. Se houver tempo, demo ao vivo com um prompt de análise de documento trazido pela audiência.