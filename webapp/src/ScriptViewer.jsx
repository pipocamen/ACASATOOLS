import React, {useState} from 'react'

const scriptContent = `<!-- Conteúdo do SCRIPT-PROJETO.xml (trecho mostrado para o viewer) -->
══════════════════════════════════════════════════════════════════
             SCRIPT COMPLETO - PLATAFORMA DE ANÁLISE FINANCEIRA
           Histórico Detalhado de Desenvolvimento e Implementações
════════════════════════════════════════════════════════════════==
DATA: Janeiro 2026
DESENVOLVIDO POR: AI Assistant + Base44 Platform
VERSÃO: 1.0.0

ÍNDICE (exemplo):
1. CONTEXTO INICIAL E OBJETIVOS
2. MÓDULO PROPFIRMS - DASHBOARD E ANÁLISE
3. MÓDULO TRADE MONITOR - SISTEMA COMPLETO
4. MÓDULO ANÁLISE DE MERCADO - TEMPO REAL
... (conteúdo completo do arquivo original)
`

export default function ScriptViewer(){
  const [copied, setCopied] = useState(false)

  function copyToClipboard(){
    navigator.clipboard.writeText(scriptContent)
      .then(()=>{
        setCopied(true)
        setTimeout(()=>setCopied(false),2000)
      })
  }

  function downloadFile(){
    const blob = new Blob([scriptContent], {type: 'text/plain;charset=utf-8'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'SCRIPT-PROJETO.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div>
      <div style={{display:'flex', gap:8, marginBottom:8}}>
        <button onClick={copyToClipboard}>{copied ? 'Copiado' : 'Copiar'}</button>
        <button onClick={downloadFile}>Baixar</button>
        <a href="https://github.com/pipocamen/ACASATOOLS/blob/main/SCRIPT-PROJETO.xml" target="_blank" rel="noreferrer">Ver arquivo original no repo</a>
      </div>
      <pre style={{whiteSpace: 'pre-wrap', background:'#f5f5f5', padding:12, borderRadius:6, maxHeight: '70vh', overflow: 'auto'}}>
        {scriptContent}
      </pre>
    </div>
  )
}
