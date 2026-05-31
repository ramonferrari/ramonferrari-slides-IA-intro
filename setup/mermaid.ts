import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      primaryColor: '#35996e',
      primaryTextColor: '#dfe7e2',
      primaryBorderColor: '#35996e',
      lineColor: '#35996e',
      secondaryColor: '#35996e',
      tertiaryColor: '#35996e',
      mainBkg: 'rgba(255,255,255,0.04)',
      nodeBorder: '#35996e',
      clusterBkg: 'rgba(255,255,255,0.06)',
      clusterBorder: '#35996e',
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: '16px',
    },
    flowchart: {
      htmlLabels: true,
      useMaxWidth: false,
    },
  }
})
