import React from 'react'
import ScriptViewer from './ScriptViewer'

export default function App(){
  return (
    <div style={{fontFamily: 'Inter, system-ui, sans-serif', padding: 24}}>
      <header>
        <h1>ACASATOOLS - Script Viewer</h1>
        <p>Visualizador do SCRIPT-PROJETO.xml e ferramentas básicas (copiar, baixar).</p>
      </header>
      <main style={{marginTop: 16}}>
        <ScriptViewer />
      </main>
    </div>
  )
}
