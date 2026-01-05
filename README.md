# ACASATOOLS - Web Viewer

Este commit adiciona uma aplicação web simples que visualiza o arquivo `SCRIPT-PROJETO.xml` e fornece ações básicas (copiar/baixar). A aplicação está em `webapp`.

Como publicar diretamente no GitHub (sem usar pastas locais)

1. Entre no repositório: https://github.com/pipocamen/ACASATOOLS
2. Para cada arquivo listado no diretório `webapp/` e `.github/workflows/deploy.yml`:
   - Clique em "Add file" → "Create new file"
   - Cole o conteúdo do arquivo (copiado deste README/arquivo listados aqui)
   - Commit (botão "Commit new file") diretamente na branch `main`
3. Depois de todos os arquivos terem sido adicionados:
   - Vá para a aba "Actions" no repositório e aguarde o job "Build and Deploy Webapp" rodar automaticamente (é disparado em push para `main`).
   - Se o job terminar com sucesso, o site será publicado na branch `gh-pages`.
4. Verifique Settings → Pages para o URL do site (ou acesse https://pipocamen.github.io/ACASATOOLS/).

Execução local opcional (não necessária):
- Se quiser rodar localmente (opcional), clone o repo e execute:
  1. cd webapp
  2. npm install
  3. npm run dev

Observações:
- O workflow usa o token automático do GitHub Actions para publicar (não é necessário configurar segredos).
- Se preferir editar de forma rápida sem clonar, use o editor do GitHub (pressione `.` no repositório) para abrir o editor web e editar/criar arquivos.
- Se quiser um ambiente de desenvolvimento online com terminal, considere usar GitHub Codespaces (se disponível) ou services como Gitpod.
