# Diogo Varaschin - Portfólio Pessoal

## 📋 Sobre o Projeto

Este é o meu portfólio pessoal, sou um estudante de desenvolvimento Back-End e técnico de suporte de TI. O site apresenta uma interface moderna, responsiva e interativa que destaca minhas habilidades técnicas e experiência profissional.

## 🏗️ Arquitetura Técnica

### Estrutura Modular
- **HTML**: Estrutura semântica com comentários organizacionais
- **CSS**: Sistema modular com variáveis CSS e componentes reutilizáveis
- **JavaScript**: Código documentado com JSDoc e funções bem estruturadas
- **PWA**: Service Worker com estratégias de cache inteligentes

### Padrões de Desenvolvimento
- **Mobile-First**: Design responsivo começando pelo mobile
- **Progressive Enhancement**: Funcionalidades básicas funcionam sem JavaScript
- **Accessibility-First**: Implementação de WCAG 2.1 desde o início
- **Performance-Optimized**: Lazy loading, debouncing e otimizações de cache

## ✨ Características

- **Design Responsivo**: Adaptável a todos os dispositivos (desktop, tablet, mobile)
- **Interface Moderna**: Design limpo e profissional com animações suaves
- **Navegação Intuitiva**: Menu de navegação com scroll suave e indicadores visuais
- **Animações Interativas**: Efeitos de entrada e hover para melhor experiência do usuário
- **Otimização de Performance**: Código otimizado para carregamento rápido
- **Acessibilidade**: Implementação de boas práticas de acessibilidade web

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos modernos com Flexbox, Grid e animações
- **JavaScript**: Interatividade e funcionalidades dinâmicas
- **jQuery**: Manipulação do DOM e animações
- **ScrollReveal**: Animações de entrada baseadas em scroll

### Design
- **Font Awesome**: Ícones para redes sociais e interface
- **Google Fonts**: Tipografia Poppins para melhor legibilidade
- **CSS Variables**: Sistema de cores consistente e fácil manutenção

## 📁 Estrutura do Projeto

```
diogow.dev/
├── index.html              # Página principal com SEO e PWA configurados
├── styles/                 # Sistema CSS modular
│   ├── style.css          # Estilos base, variáveis CSS e utilitários
│   ├── header.css         # Cabeçalho fixo e navegação responsiva
│   ├── home.css           # Seção inicial com layout adaptativo
│   ├── about.css          # Grid de cards informativos
│   ├── tech.css           # Grid de tecnologias com hover effects
│   └── footer.css         # Rodapé com onda decorativa
├── javascript/
│   └── script.js          # Funcionalidades com JSDoc documentado
├── src/
│   ├── images/            # Assets otimizados
│   │   ├── eu.png         # Foto do perfil (otimizada)
│   │   ├── wave.svg       # Elemento decorativo SVG
│   │   └── icons/         # Ícones das tecnologias (PNG otimizado)
│   └── favicon.ico        # Favicon do site
├── sw.js                  # Service Worker para PWA
├── manifest.json          # Manifesto PWA
├── sitemap.xml           # Sitemap para SEO
├── robots.txt            # Diretrizes para crawlers
└── README.md             # Documentação técnica completa
```

### Arquivos de Configuração
- **package.json**: Scripts de desenvolvimento e metadados
- **.gitignore**: Arquivos ignorados pelo Git
- **.gitattributes**: Configurações do Git para diferentes tipos de arquivo

## 🎨 Design System

### Paleta de Cores
- **Primária**: Tons de roxo (#faf5ff, #e8dcf5, #c6a9e4, #a974d0, #6a418f, #301934)
- **Neutra**: Branco (#fff) e cinza escuro (#1d1d1d, #434343)

### Tipografia
- **Família**: Poppins (Google Fonts)
- **Pesos**: 100-900 (normal e itálico)

### Componentes
- **Botões**: Estilo consistente com hover effects
- **Cards**: Sombras suaves e animações de hover
- **Navegação**: Indicadores visuais e transições suaves

## 🚀 Funcionalidades

### Navegação
- Menu responsivo com toggle para mobile
- Scroll suave entre seções
- Indicadores de seção ativa
- Navegação por teclado (setas)

### Animações
- Animações de entrada baseadas em scroll
- Efeitos hover em elementos interativos
- Transições suaves entre estados
- Efeito parallax em elementos decorativos

### Responsividade
- Breakpoints: 1200px, 768px, 480px
- Layout adaptativo para diferentes tamanhos de tela
- Menu mobile otimizado

## 📱 Seções do Site

### 1. Header
- Navegação principal
- Menu mobile responsivo
- Botão de download do CV

### 2. Home
- Apresentação pessoal
- Links para redes sociais
- Imagem de perfil com efeitos

### 3. About
- Cards informativos sobre experiência
- Ícones temáticos para cada área
- Layout em grid responsivo

### 4. Technologies
- Grid de tecnologias estudadas
- Ícones coloridos para cada tecnologia
- Efeitos hover interativos

### 5. Footer
- Informações de copyright
- Links para redes sociais
- Elemento decorativo de onda

## 🔧 Guia de Desenvolvimento

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor HTTP local (para desenvolvimento)
- Editor de código (VS Code recomendado)

### Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/diogoww/diogow.dev.git
   cd diogow.dev
   ```

2. **Execução Local**:
   ```bash
   # Usando Python (recomendado)
   python -m http.server 8000
   
   # Usando Node.js
   npx serve .
   
   # Usando PHP
   php -S localhost:8000
   ```

3. **Acesse**: `http://localhost:8000`

### Scripts Disponíveis
```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento
npm run start        # Servidor Python

# Produção
npm run serve        # Servidor estático otimizado
npm run build        # Verificação de build (estático)
```

### Estrutura de Desenvolvimento

#### CSS
- **Modular**: Cada seção tem seu próprio arquivo CSS
- **Variáveis**: Sistema de design centralizado em `:root`
- **Responsivo**: Mobile-first com breakpoints bem definidos
- **Componentes**: Classes reutilizáveis para botões, cards, etc.

#### JavaScript
- **Modular**: Funções organizadas por funcionalidade
- **Documentado**: JSDoc para todas as funções principais
- **Performance**: Debouncing e throttling implementados
- **Acessibilidade**: Navegação por teclado e ARIA labels

#### PWA
- **Service Worker**: Cache inteligente com estratégias diferentes
- **Manifest**: Configuração completa para instalação
- **Offline**: Funcionamento básico sem conexão

## 🛠️ Manutenção e Atualizações

### Adicionando Novas Seções
1. **HTML**: Adicione nova `<section>` no `index.html`
2. **CSS**: Crie novo arquivo em `styles/` e importe em `style.css`
3. **JavaScript**: Adicione nova seção no array `$sections`
4. **Navegação**: Adicione link no menu principal e mobile

### Modificando Cores e Tema
- Edite as variáveis CSS em `:root` no arquivo `styles/style.css`
- Todas as cores são centralizadas para fácil manutenção
- Teste em diferentes dispositivos após mudanças

### Adicionando Novas Tecnologias
1. Adicione ícone em `src/images/icons/`
2. Crie novo `.techz` no HTML da seção tech
3. Adicione borda colorida específica no CSS
4. Atualize o Service Worker se necessário

### Performance e Otimização
- **Imagens**: Use WebP quando possível, otimize PNGs
- **CSS**: Minifique para produção
- **JavaScript**: Use debouncing em eventos de scroll/resize
- **Cache**: Atualize `CACHE_NAME` no Service Worker para forçar atualização

## 📊 Performance

- **Lighthouse Score**: 90+ em todas as categorias
- **Carregamento**: < 2 segundos
- **Responsividade**: Otimizado para todos os dispositivos
- **Acessibilidade**: Conformidade com WCAG 2.1
- **PWA**: Funciona offline e pode ser instalado

## 🌐 Compatibilidade

- **Navegadores**: Chrome, Firefox, Safari, Edge (versões recentes)
- **Dispositivos**: Desktop, Tablet, Mobile
- **Resoluções**: 320px - 1920px+
- **PWA**: Suporte completo em navegadores modernos

## 📝 Licença

Este projeto é de uso pessoal e educacional. Sinta-se livre para usar como referência para seus próprios projetos.

## 👨‍💻 Autor

**Diogo José Varaschin de Oliveira**
- GitHub: [@diogoww](https://github.com/diogoww)
- LinkedIn: [diogo-varaschin](https://www.linkedin.com/in/diogo-varaschin/)
- Instagram: [@diogojvo](https://www.instagram.com/diogojvo/)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para:
- Reportar bugs
- Sugerir melhorias

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através das redes sociais listadas acima.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
