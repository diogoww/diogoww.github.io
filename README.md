## diogo-varaschin.exe – Portfolio Retro

Este projeto é um **portfólio pessoal** com visual inspirado no **Windows XP / old school**, feito para apresentar quem sou, minhas skills e minhas redes de forma simples e divertida.

### 🖥️ Visão geral do projeto
- **Nome da janela**: `diogo-varaschin.exe`
- **Layout**: uma janela única simulando um aplicativo antigo
- **Conteúdo principal**:
  - Foto de perfil e nome completo
  - Subtítulo com atuação (`dev fullstack & data analyst`)
  - Links para redes sociais (Instagram, LinkedIn, GitHub e Spotify)
  - Um “README” interno com efeito de digitação, apresentando minhas informações
  - Controles de idioma (PT/EN) e modo escuro

### 🛠️ Tecnologias utilizadas
- **HTML5**: estrutura da página (`index.html`)
- **CSS3**: estilização e responsividade
  - `reset.css` – reset de estilos base
  - `variables.css` – variáveis de cores, fontes etc.
  - `body.css` – estilos globais do `body`
  - `window.css` – estilos da janela principal (header, body, botões)
  - `profile.css` – área de perfil (foto, nome, subtítulo)
  - `socials.css` – ícones e layout das redes sociais
  - `readme.css` – estilo do bloco de texto digitado
  - `responsive.css` – ajustes para telas menores
  - `index.css` – ponto de entrada que importa todos os demais CSS
- **JavaScript (Vanilla)**: interações e animações (`js/script.js`)
  - Animação de “boot” da janela ao carregar
  - Efeito de digitação do texto do README interno
  - Alternância de idioma e atualização dinâmica dos textos
  - Alternância de tema claro/escuro com persistência
  - Comportamento dos botões da janela (incluindo o botão `X`, que abre um link “surpresa”)
- **Fonts & Icons externos**:
  - Google Fonts (`VT323`, `IBM Plex Mono`)
  - Boxicons (ícones das redes sociais)

### 📁 Estrutura de pastas
- **`index.html`**: arquivo principal da aplicação.
- **`/css`**: todos os estilos separados por responsabilidade, facilitando manutenção e leitura.
- **`/js`**:
  - `script.js`: concentra a lógica de:
    - animação de entrada da janela (`bootWindow`)
    - efeito de digitação do texto (`typeReadme`)
    - interação com botões da janela (`windowButtons`)
- **`/assets`**:
  - `diogow.jpeg`: foto de perfil
  - `curriculo-diogo.pdf`: currículo em PDF disponível na pasta de assets
  - `oldpcicon.png`: ícone da página (favicon)
  - `windows-xp.jpg`: imagem de fundo/apoio para o visual retrô (caso usada no CSS)

### 🎯 Objetivo do projeto
- Ter um **portfólio simples, direto e memorável**, que:
  - Mostra rapidamente quem sou e o que faço
  - Destaca minhas principais **skills em desenvolvimento** e **análise de dados**
  - Oferece acesso rápido às minhas **redes sociais**
  - Brinca com a nostalgia de interfaces antigas, mas com código moderno e organizado

### ▶️ Como executar o projeto
- **Clone ou baixe** este repositório.
- Abra o arquivo **`index.html`** diretamente no navegador (duplo clique já funciona).
- Certifique-se de manter a mesma estrutura de pastas:
  - `index.html`
  - `css/`
  - `js/`
  - `assets/`
- Não é necessário servidor ou build: é um projeto **100% estático**.

### 🧩 Como o código está organizado
- **HTML**:
  - Um `main.window` que representa a janela do “programa”
  - `window-header`: título da janela + botões (minimizar, maximizar, fechar)
  - `window-body`: dividido em:
    - `section.profile` – foto, nome, subtítulo e redes
    - `section.readme` – área onde o texto digitado aparece (`<pre id="readme-text">`)
- **CSS**:
  - Quebra em múltiplos arquivos para isolar responsabilidades (janela, perfil, socials, responsivo etc.)
  - `index.css` faz o papel de “hub” importando todos os outros.
- **JavaScript**:
  - Funções separadas por comportamento:
    - `bootWindow()` – cuida da animação de entrada
    - `typeReadme()` – gerencia o texto com efeito de digitação do README interno
    - `initI18n()` – controla idioma e troca de textos na interface
    - `initTheme()` – alterna o tema claro/escuro e salva a preferência
    - `windowButtons()` – lida com o clique nos botões da janela (incluindo o redirecionamento do `X`)

### 🌱 Possíveis melhorias futuras
- Adicionar **mais seções**: projetos, timeline, skills detalhadas, stack de tecnologias.
- Animações adicionais inspiradas em outros sistemas/huds antigos.
- Versão PWA simples para “instalar” o portfólio como app.

---

Se quiser usar este projeto como base, sinta-se à vontade para **clonar, adaptar e personalizar** com suas próprias cores, fontes, textos e links. 🙂
