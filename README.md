# Portfolio

Landing page pessoal (one-page/SPA) em React + Vite + Tailwind CSS.

## Estrutura
- `web/` — código-fonte (React + TypeScript + Tailwind). É aqui que o site é editado.
- `index.html`, `assets/`, `img/` (raiz) — build de produção gerado a partir de `web/`, servido diretamente pelo GitHub Pages.
- `CNAME` — domínio customizado (não mexer).

## Como editar
1. `cd web`
2. `npm install`
3. `npm run dev` — servidor local com hot reload.
4. Edite os componentes em `web/src/components/`.

## Como publicar
O GitHub Pages serve os arquivos estáticos direto da raiz/branch `main`, sem build automático. Depois de alterar o site:

```bash
cd web
npm run build
cp -r dist/. ..
```

Isso atualiza `index.html`, `assets/` e `img/` na raiz do repositório. Confira as mudanças com `git status` e faça commit normalmente.

## Stack
- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Fontes: Archivo, Instrument Serif, JetBrains Mono (Google Fonts)
