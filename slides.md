---
colorSchema: both
themeConfig:
  appearance: dark
  shortTitle: "A era da IA generativa"
fonts:
  sans: Space Grotesk
  serif: Space Grotesk
  mono: JetBrains Mono
  provider: none
class: text-left
---

<CoverSlide
  eyebrow="FGV EAESP"
  title="A era da IA generativa"
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

# O que é IA generativa — em uma linha

<div class="flex flex-col justify-center gap-4 mt-6" style="height: 320px;">

  <div v-click class="glass p-5" style="border-color: rgba(99,211,161,0.4);">
    <p style="font-size: 1.05rem; line-height: 1.7; margin: 0;">
      IA tradicional <span style="color: var(--rf-text-muted);">→</span>
      <strong style="color: var(--rf-primary);">classifica, prevê ou recomenda</strong>
      a partir de padrões históricos.
    </p>
    <p style="font-size: 0.78rem; color: var(--rf-text-muted); margin: 0.5rem 0 0;">
      Ex: spam filter, recomendação de produto, detecção de fraude.
    </p>
  </div>

  <div v-click class="glass p-5" style="border-color: rgba(226,248,27,0.4);">
    <p style="font-size: 1.05rem; line-height: 1.7; margin: 0;">
      IA generativa <span style="color: var(--rf-text-muted);">→</span>
      <strong style="color: var(--rf-highlight);">produz conteúdo novo</strong>
      — texto, imagem, código, áudio — que não existia antes.
    </p>
    <p style="font-size: 0.78rem; color: var(--rf-text-muted); margin: 0.5rem 0 0;">
      Ex: ChatGPT, Claude, Gemini, Midjourney, GitHub Copilot.
    </p>
  </div>

  <div v-click class="glass p-5" style="border-color: rgba(255,255,255,0.1);">
    <p style="font-size: 0.9rem; line-height: 1.6; margin: 0; color: var(--rf-text-muted);">
      A mudança não é incremental. É de categoria:
      a máquina deixou de <em>processar</em> linguagem e passou a <em>falar</em>.
    </p>
  </div>

</div>

::note::
O ponto de virada não foi só técnico — foi de interface. Quando qualquer pessoa passou a conversar em linguagem natural com um computador e receber uma resposta coerente, a barreira de acesso desapareceu.

---

# Como ela funciona — sem fórmulas

<div class="grid grid-cols-2 gap-4 mt-5">

  <div class="flex flex-col gap-3">

    <div v-click class="glass p-4" style="border-left: 3px solid var(--rf-primary);">
      <span class="rf-eyebrow" style="display:block; margin-bottom: 0.4rem;">1. Treinamento</span>
      <p style="font-size: 0.82rem; line-height: 1.6; margin: 0; color: var(--rf-text-secondary);">
        O modelo lê uma fração enorme da internet — livros, artigos, código, conversas.
        Aprende <strong>padrões de linguagem</strong>: o que palavra vem depois de qual, em qual contexto.
      </p>
    </div>

    <div v-click class="glass p-4" style="border-left: 3px solid var(--rf-primary);">
      <span class="rf-eyebrow" style="display:block; margin-bottom: 0.4rem;">2. Compressão</span>
      <p style="font-size: 0.82rem; line-height: 1.6; margin: 0; color: var(--rf-text-secondary);">
        Esses padrões viram bilhões de parâmetros — números que codificam relações
        entre conceitos. O modelo não "memoriza" textos; aprende <strong>estrutura</strong>.
      </p>
    </div>

    <div v-click class="glass p-4" style="border-left: 3px solid var(--rf-primary);">
      <span class="rf-eyebrow" style="display:block; margin-bottom: 0.4rem;">3. Geração</span>
      <p style="font-size: 0.82rem; line-height: 1.6; margin: 0; color: var(--rf-text-secondary);">
        Quando você escreve algo, o modelo calcula a sequência de tokens mais
        <strong>provável e coerente</strong> para continuar — palavra por palavra.
      </p>
    </div>

  </div>

  <div v-click class="glass p-5 flex flex-col justify-center" style="border-color: rgba(226,248,27,0.25);">
    <span class="rf-eyebrow" style="display:block; margin-bottom: 0.8rem;">a metáfora certa</span>
    <p style="font-size: 0.88rem; line-height: 1.75; margin: 0; color: var(--rf-text-secondary);">
      Não é uma <strong style="color: var(--rf-text-primary);">enciclopédia</strong> que você consulta.<br>
      Não é um <strong style="color: var(--rf-text-primary);">mecanismo de busca</strong>.<br><br>
      É um <strong style="color: var(--rf-highlight);">gerador de texto muito sofisticado</strong>
      que aprendeu como humanos escrevem sobre qualquer assunto —
      e por isso parece que sabe tudo.
    </p>
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

# Tanto faz o modelo? Atenção aos flash × pro

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

  <div v-click>
    <Terminal
      modelName="Claude Sonnet 4.5"
      fontSize="0.72rem"
      :streamSpeed="18"
      :conversation="[{
        user: 'Você é um analista de contratos. Identifique as cláusulas de rescisão do contrato abaixo e liste em tabela: cláusula | tipo de rescisão | prazo. Use só o documento. Se não encontrar, escreva N/E.',
        response: 'Cláusula 12.1 | Rescisão por inadimplência | 30 dias após notificação\nCláusula 12.3 | Rescisão imotivada | 60 dias de aviso prévio\nCláusula 13.2 | Rescisão por força maior | Imediato\nPrazo de vigência | N/E — não especificado no documento.'
      }]"
    />
  </div>

</div>

::note::
Papel + Tarefa + Contexto + Formato + Restrições. Cinco elementos. Não precisa usar todos sempre — mas quando a resposta decepcionar, o problema quase sempre é a ausência de um deles.

---

# Prompt ruim × prompt bom

<div class="grid grid-cols-2 gap-5 mt-5">

  <div class="flex flex-col gap-3">
    <div class="rf-eyebrow" style="color: #EC635E;">❌ Prompt sem estrutura</div>

    <div v-click>
      <Terminal
        modelName="ChatGPT"
        fontSize="0.72rem"
        :streamSpeed="16"
        :conversation="[
          { user: 'Me fala sobre esse contrato', response: 'Claro! Para analisar o contrato, preciso que você me envie o documento. Em geral, contratos costumam conter partes, objeto, prazo, valor, penalidades e cláusulas de rescisão. Posso ajudar com qualquer dúvida específica que você tiver.' }
        ]"
      />
    </div>

    <div v-click class="glass p-3" style="border-color: rgba(236,99,94,0.4); font-size: 0.75rem; line-height: 1.5; color: var(--rf-text-muted);">
      Sem papel, sem tarefa específica, sem contexto, sem formato. A IA não sabe o que você quer — e chuta razoavelmente.
    </div>
  </div>

  <div class="flex flex-col gap-3">
    <div class="rf-eyebrow" style="color: var(--rf-primary);">✓ Prompt estruturado</div>

    <div v-click>
      <Terminal
        modelName="Claude Sonnet 4.5"
        fontSize="0.72rem"
        :streamSpeed="16"
        :conversation="[
          { user: 'Você é um analista de risco. Liste em bullet as 3 maiores exposições financeiras deste contrato. Use só o documento. Se não encontrar, escreva N/E.', response: '• Multa por rescisão antecipada: 20% do valor total remanescente (cláusula 8.4)\n• Reajuste unilateral do fornecedor: até 15% a.a. sem necessidade de aditivo (cláusula 5.2)\n• Ausência de limitação de responsabilidade civil: N/E — não especificado.' }
        ]"
      />
    </div>

    <div v-click class="glass p-3" style="border-color: rgba(99,211,161,0.4); font-size: 0.75rem; line-height: 1.5; color: var(--rf-text-muted);">
      Mesmo modelo, mesmo documento. A diferença está inteiramente no prompt — não na IA.
    </div>
  </div>

</div>

::note::
O modelo é o mesmo. O que muda é a qualidade da instrução. Prompting é uma habilidade, não um talento — aprende-se com prática e estrutura.

---

# Cinco usos de alto retorno para profissionais de negócio

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
    <span style="color: var(--rf-text-muted);">MECE, árvores de decisão, frameworks — o modelo como sparring partner.</span>
  </div>

  <div v-click class="glass p-3 flex flex-col gap-2" style="font-size: 0.75rem; line-height: 1.5;">
    <span style="font-size: 1.4rem;">⚙️</span>
    <strong style="color: var(--rf-primary);">Automação de rotinas</strong>
    <span style="color: var(--rf-text-muted);">Transcrição de reuniões, padronização de dados, geração de templates.</span>
  </div>

</div>

<div v-click class="glass p-3 mt-4" style="font-size: 0.78rem; line-height: 1.6; border-color: rgba(226,248,27,0.3);">
  <strong style="color: var(--rf-highlight);">Regra prática:</strong>
  se a tarefa envolve ler, resumir, comparar, redigir ou estruturar texto —
  a IA provavelmente faz em 10% do tempo. Se envolve decisão final com consequência real — você é insubstituível.
</div>

::note::
O retorno não vem de substituir pessoas. Vem de eliminar o trabalho de preparação que consome tempo mas não exige julgamento.

---

<!-- ═══════════════════════════════════════════
     SEÇÃO 4: LIMITES
═══════════════════════════════════════════ -->

# Os Dois Conflitos da IA

<div class="flex items-center gap-4 mt-4" style="font-size: 0.8rem; line-height: 1.4;">

<div class="glass p-3 flex-1" style="border-color: rgba(99,211,161,0.45); text-align: center;">

<span style="color: #63d3a1; font-weight: 700;">🧠 Fiel ao treinamento</span>
Ser completa. Agradar. Parecer confiante. Nunca deixar uma pergunta sem resposta.

</div>

<div style="font-size: 1rem; font-weight: 700; flex-shrink: 0; text-align: center; opacity: 0.45; letter-spacing: 0.1em;">vs</div>

<div class="glass p-3 flex-1" style="border-color: rgba(226,248,27,0.45); text-align: center;">

<span style="color: #e2f81b; font-weight: 700;">📋 Seguir suas instruções</span>
Ser precisa. Dizer N/E. Citar a fonte. Usar só o que está no documento.

</div>

</div>

<div class="grid grid-cols-3 gap-2 mt-3" style="font-size: 0.7rem; line-height: 1.35;">

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

<Venn />

<div v-click="2" class="glass p-4" style="position: absolute; left: 0; top: 55px; width: 190px; border-color: rgba(236,99,94,0.45);">
  <div style="color: #EC635E; font-weight: 700; font-size: 0.82rem; margin-bottom: 0.4rem; line-height: 1.3;">⚠ A IA pode perder informação</div>
  <p style="font-size: 0.75rem; line-height: 1.5; opacity: 0.7; margin: 0;">Algo estava no contrato, mas não apareceu na resposta.</p>
</div>

<div v-click="3" class="glass p-4" style="position: absolute; right: 0; top: 55px; width: 190px; border-color: rgba(226,248,27,0.45);">
  <div style="color: #e2f81b; font-weight: 700; font-size: 0.82rem; margin-bottom: 0.4rem; line-height: 1.3;">⚠ A IA pode inventar informação</div>
  <p style="font-size: 0.75rem; line-height: 1.5; opacity: 0.7; margin: 0;">Algo apareceu na resposta, mas não estava no contrato.</p>
</div>

</div>

::note::
Dois problemas opostos — ao mesmo tempo. Recall: ela não cobre tudo e não avisa o que perdeu. Alucinação: ela vai além do que estava no documento sem avisar.

---

<!-- ═══════════════════════════════════════════
     SEÇÃO 5: PROMPTS EXEMPLOS
═══════════════════════════════════════════ -->

# Prompts para o dia a dia — análise de documentos

<div class="grid grid-cols-2 gap-4 mt-4">

  <div class="flex flex-col gap-3">

    <div class="rf-eyebrow mb-1">Templates prontos para copiar</div>

    <div v-click class="glass p-3" style="font-size: 0.75rem; line-height: 1.6;">
      <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">📄 Resumo executivo</span>
      <code style="font-size: 0.7rem; color: var(--rf-text-muted); white-space: pre-wrap;">Resuma o documento abaixo em no máximo 5 bullets. Cada bullet deve ter: tema | achado principal | implicação prática. Use só o que está no texto. Se não houver implicação clara, escreva N/A.</code>
    </div>

    <div v-click class="glass p-3" style="font-size: 0.75rem; line-height: 1.6;">
      <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">⚠️ Mapeamento de riscos</span>
      <code style="font-size: 0.7rem; color: var(--rf-text-muted); white-space: pre-wrap;">Você é um analista de risco jurídico. Leia o contrato abaixo e liste em tabela os pontos de atenção: cláusula | risco | severidade (alta/média/baixa) | recomendação. Use só o documento. N/E se não encontrar.</code>
    </div>

    <div v-click class="glass p-3" style="font-size: 0.75rem; line-height: 1.6;">
      <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">🔍 Comparação entre versões</span>
      <code style="font-size: 0.7rem; color: var(--rf-text-muted); white-space: pre-wrap;">Compare os dois documentos abaixo. Liste as diferenças em tabela: item | versão A | versão B | impacto da mudança. Ignore formatação, foque em conteúdo substantivo.</code>
    </div>

  </div>

  <div v-click>
    <Terminal
      modelName="Claude Sonnet 4.5"
      fontSize="0.7rem"
      :streamSpeed="15"
      :loop="true"
      :conversation="[
        { user: 'Resuma em 3 bullets: tema | achado | implicação. Só o documento. N/A se não houver implicação.', response: '• Prazo | Contrato vigente até dez/2026, renovação automática por 12 meses | Risco de renovação indesejada se não houver notificação com 90 dias de antecedência\n• Pagamento | Reajuste anual pelo IPCA + 2% (cláusula 6.1) | Exposição acima da inflação em cenários de IPCA elevado\n• Rescisão | Multa de 20% sobre saldo remanescente | N/A — valor já mapeado no orçamento de risco' }
      ]"
    />
  </div>

</div>

::note::
O template de resumo executivo funciona para qualquer documento. A chave é o "N/A se não houver" — força o modelo a ser honesto sobre ausências em vez de inventar implicações.

---

# Prompts para o dia a dia — comunicação e estruturação

<div class="grid grid-cols-2 gap-4 mt-4">

  <div class="flex flex-col gap-3">

    <div v-click class="glass p-3" style="font-size: 0.75rem; line-height: 1.6;">
      <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">✉️ E-mail difícil</span>
      <code style="font-size: 0.7rem; color: var(--rf-text-muted); white-space: pre-wrap;">Escreva um e-mail para [cargo/nome] comunicando [situação]. Tom: direto e respeitoso. Máximo 5 parágrafos. Não use jargão corporativo. Termine com uma pergunta ou próximo passo claro.</code>
    </div>

    <div v-click class="glass p-3" style="font-size: 0.75rem; line-height: 1.6;">
      <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">🧮 Estruturação de problema</span>
      <code style="font-size: 0.7rem; color: var(--rf-text-muted); white-space: pre-wrap;">Quero estruturar o seguinte problema de negócio: [descreva]. Me faça 5 perguntas que me ajudem a clarificar o problema antes de propor soluções. Uma pergunta por vez.</code>
    </div>

    <div v-click class="glass p-3" style="font-size: 0.75rem; line-height: 1.6;">
      <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">🎯 Preparação para reunião</span>
      <code style="font-size: 0.7rem; color: var(--rf-text-muted); white-space: pre-wrap;">Vou ter uma reunião com [perfil do interlocutor] sobre [tema]. Com base no contexto abaixo, sugira: 3 pontos que devo reforçar, 2 objeções prováveis e como respondê-las, 1 pergunta de fechamento.</code>
    </div>

    <div v-click class="glass p-3" style="border-color: rgba(226,248,27,0.3); font-size: 0.75rem; line-height: 1.6;">
      <span style="color: var(--rf-highlight); font-weight: 700; display: block; margin-bottom: 0.3rem;">💡 Meta-prompt: peça crítica</span>
      <code style="font-size: 0.7rem; color: var(--rf-text-muted); white-space: pre-wrap;">Leia o texto abaixo e aponte: 1 argumento fraco, 1 informação que pode estar errada, 1 ponto que o leitor vai questionar. Seja direto — não me poupe.</code>
    </div>

  </div>

  <div v-click>
    <Terminal
      modelName="Claude Sonnet 4.5"
      fontSize="0.7rem"
      :streamSpeed="15"
      :loop="true"
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

# Por onde começar — esta semana

<div class="grid grid-cols-2 gap-5 mt-5">

  <div class="flex flex-col gap-3">

    <div v-click class="glass p-4" style="border-left: 3px solid var(--rf-primary); font-size: 0.82rem; line-height: 1.6;">
      <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">1. Escolha uma tarefa repetitiva</span>
      Algo que você faz toda semana com texto: resumo, e-mail padrão, ata, relatório.
      Tente delegar para a IA com um prompt estruturado.
    </div>

    <div v-click class="glass p-4" style="border-left: 3px solid var(--rf-primary); font-size: 0.82rem; line-height: 1.6;">
      <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">2. Use o modelo certo</span>
      Para explorar e rascunhar: Flash/Haiku (rápido, barato).
      Para revisar e decidir: Pro/Opus/Sonnet (mais cuidadoso).
    </div>

    <div v-click class="glass p-4" style="border-left: 3px solid var(--rf-primary); font-size: 0.82rem; line-height: 1.6;">
      <span style="color: var(--rf-primary); font-weight: 700; display: block; margin-bottom: 0.3rem;">3. Sempre revise a saída</span>
      Leia o que a IA produziu com a mesma atenção que você leria o trabalho de um estagiário talentoso mas novato. Ele pode ter inventado alguma coisa.
    </div>

    <div v-click class="glass p-4" style="border-left: 3px solid var(--rf-highlight); font-size: 0.82rem; line-height: 1.6;">
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
      :loop="true"
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