export interface SlideMeta {
  id: string
  title: string
  group: string
}

export const slideMeta: SlideMeta[] = [
  { id: 'inicio', title: 'Início', group: '' },
  { id: 'quem-sou-eu', title: 'Quem sou eu?', group: 'Abertura' },
  { id: 'voce-ja-usa-ia', title: 'Você já usa IA todo dia', group: 'Abertura' },
  { id: 'bastidores', title: 'Nos bastidores', group: 'Abertura' },

  { id: 'o-que-e-ia-generativa', title: 'O que é IA generativa', group: 'O que é' },
  { id: 'ia-cria-conteudo-novo', title: 'IA que cria conteúdo novo', group: 'O que é' },
  { id: 'ja-e-presente', title: 'Já é presente, não futuro', group: 'O que é' },
  { id: 'como-funciona', title: 'Como a IA Generativa funciona', group: 'O que é' },
  { id: 'o-que-a-ia-sabe', title: 'O que a IA sabe', group: 'O que é' },
  { id: 'de-onde-vem', title: 'De onde vem o que ela sabe', group: 'O que é' },
  { id: 'motor-llm', title: 'O motor tem nome: LLM', group: 'O que é' },
  { id: 'tokens', title: 'Ela lê em pedaços: tokens', group: 'O que é' },
  { id: 'janela-contexto', title: 'A janela de contexto', group: 'O que é' },
  { id: 'proxima-palavra', title: 'A próxima palavra', group: 'O que é' },

  { id: 'section-prompt', title: 'Engenharia de Prompt', group: 'Ecossistema' },
  { id: 'corrida-das-ias', title: 'Corrida das IAs', group: 'Ecossistema' },
  { id: 'modelo-leve-pro', title: 'Modelo leve × pro', group: 'Ecossistema' },

  { id: 'quatro-saltos', title: 'Do "criança" ao usável', group: 'Como usar bem' },
  { id: 'quatro-tecnicas', title: 'Quatro técnicas', group: 'Como usar bem' },
  { id: 'prompt-ruim-bom', title: 'Prompt ruim × bom', group: 'Como usar bem' },
  { id: 'cinco-usos', title: 'Cinco usos de alto retorno', group: 'Como usar bem' },

  { id: 'dois-conflitos', title: 'Os dois conflitos', group: 'Limites' },
  { id: 'dois-limites', title: 'Os dois limites', group: 'Limites' },
  { id: 'o-que-nao-substitui', title: 'O que a IA não substitui', group: 'Limites' },
  { id: 'sete-tropecos', title: '7 tropeços de quem começa', group: 'Limites' },
  { id: 'duas-regras', title: 'Duas regras que não se negociam', group: 'Limites' },

  { id: 'por-onde-comecar', title: 'Por onde começar', group: 'Fechamento' },
  { id: 'perguntas-frequentes', title: 'Perguntas frequentes', group: 'Fechamento' },
  { id: 'e-agora', title: 'E agora?', group: 'Fechamento' },
  { id: 'obrigado', title: 'Obrigado', group: 'Fechamento' },
]
