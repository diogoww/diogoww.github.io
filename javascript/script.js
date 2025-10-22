/* ===========================================
   CONFIGURAÇÃO INICIAL E VARIÁVEIS GLOBAIS
   =========================================== */

// Aguarda o DOM estar completamente carregado antes de executar o código
/* ===========================================
   SCRIPT PRINCIPAL
   - Navegação (menu mobile, scroll suave, destaque de seção)
   - Animações (ScrollReveal/IntersectionObserver)
   - PWA (registro do Service Worker)
   =========================================== */

$(document).ready(function() {
    
    // Configurações globais do site
    const config = {
        scrollOffset: 100,        // Distância mínima de scroll para ativar efeitos
        animationDuration: 800,    // Duração das animações em milissegundos
        mobileBreakpoint: 1170     // Breakpoint para considerar como mobile
    };

    // Cache de elementos DOM para melhor performance
    const $window = $(window);           // Objeto window do jQuery
    const $body = $('body');             // Elemento body
    const $header = $('header');         // Cabeçalho do site
    const $mobileBtn = $('#mobile_btn'); // Botão do menu mobile
    const $mobileMenu = $('#mobile_menu'); // Menu mobile
    const $sections = $('section');      // Todas as seções do site
    const $navItems = $('.nav-item');    // Itens de navegação
    const $html = $('html');             // Elemento html para scroll suave

    // Inicializa todas as funcionalidades
    init();

    /* ===========================================
       FUNÇÃO DE INICIALIZAÇÃO
       =========================================== */
    
    /**
     * Função principal que inicializa todas as funcionalidades do site
     * @function init
     * @description Configura event listeners, animações e estados iniciais
     */
    function init() {
        setupEventListeners();      // Configura todos os event listeners
        setupScrollReveal();        // Configura animações de scroll
        setupSmoothScrolling();     // Configura scroll suave
        checkInitialScroll();       // Verifica posição inicial do scroll
    }

    /* ===========================================
       CONFIGURAÇÃO DE EVENT LISTENERS
       =========================================== */
    
    /**
     * Configura todos os event listeners do site
     * @function setupEventListeners
     * @description Vincula eventos de UI, navegação e acessibilidade
     */
    function setupEventListeners() {
        // Event listener para o botão do menu mobile
        $mobileBtn.on('click', toggleMobileMenu);
        
        // Fecha o menu mobile quando clica em um link de navegação
        $('.nav-item a').on('click', closeMobileMenu);
        
        // Event listener para scroll - atualiza navegação e efeitos
        $window.on('scroll', handleScroll);
        
        // Event listener para redimensionamento da janela
        $window.on('resize', handleResize);
        
        // Event listener para teclado - navegação por teclado
        $(document).on('keydown', handleKeydown);
        
        // Event listener para links de navegação suave
        $('a[href^="#"]').on('click', handleSmoothScroll);
    }

    /* ===========================================
       FUNCIONALIDADES DO MENU MOBILE
       =========================================== */
    
    /**
     * Alterna a exibição do menu mobile
     * @function toggleMobileMenu
     * @description Mostra/esconde o menu mobile e alterna ícone do botão
     */
    function toggleMobileMenu() {
        $mobileMenu.toggleClass('active');                    // Mostra/esconde o menu
        $mobileBtn.find('i').toggleClass('fa-bars fa-x');     // Muda o ícone do botão
        $body.toggleClass('menu-open');                       // Adiciona classe ao body
        
        // Adiciona animação de rotação ao botão
        $mobileBtn.addClass('rotate');
        setTimeout(() => $mobileBtn.removeClass('rotate'), 300);
    }

    /**
     * Fecha o menu mobile
     * @function closeMobileMenu
     * @description Esconde o menu mobile e restaura o ícone original
     */
    function closeMobileMenu() {
        $mobileMenu.removeClass('active');                    // Esconde o menu
        $mobileBtn.find('i').removeClass('fa-x').addClass('fa-bars'); // Volta ícone original
        $body.removeClass('menu-open');                       // Remove classe do body
    }

    /* ===========================================
       FUNCIONALIDADES DE SCROLL
       =========================================== */
    
    /**
     * Manipula eventos de scroll - atualiza navegação e efeitos visuais
     * @function handleScroll
     * @description Controla header dinâmico, navegação ativa e efeitos parallax
     */
    function handleScroll() {
        const scrollTop = $window.scrollTop();              // Posição atual do scroll
        
        // Adiciona classe 'scrolled' ao header quando scroll passa do offset
        if (scrollTop > config.scrollOffset) {
            $header.addClass('scrolled');
        } else {
            $header.removeClass('scrolled');
        }
        
        // Atualiza navegação ativa baseada na seção visível
        updateActiveNavigation(scrollTop);
        
        // Aplica efeitos de parallax
        applyParallax(scrollTop);
    }

    /**
     * Atualiza qual item de navegação está ativo baseado na seção visível
     * @function updateActiveNavigation
     * @param {number} scrollTop - Posição atual do scroll
     * @description Calcula qual seção está visível e marca o item correspondente como ativo
     */
    function updateActiveNavigation(scrollTop) {
        let activeSectionIndex = 0;                    // Índice da seção ativa
        const headerHeight = $header.outerHeight();    // Altura do header

        // Percorre todas as seções para encontrar qual está visível
        $sections.each(function(i) {
            const $section = $(this);
            const sectionTop = $section.offset().top - headerHeight - 50;    // Topo da seção
            const sectionBottom = sectionTop + $section.outerHeight();        // Fundo da seção

            // Se o scroll está dentro desta seção, marca como ativa
            if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
                activeSectionIndex = i;
                return false;  // Para o loop
            }
        });

        // Remove classe 'active' de todos os itens e adiciona ao ativo
        $navItems.removeClass('active');
        $navItems.eq(activeSectionIndex).addClass('active');
    }

    /**
     * Aplica efeitos de parallax aos elementos especificados
     * @function applyParallax
     * @param {number} scrollTop - Posição atual do scroll
     * @description Move elementos decorativos com velocidade reduzida para criar efeito parallax
     */
    function applyParallax(scrollTop) {
        const parallaxElements = $('.shape, .parallax');  // Elementos com parallax
        const speed = 0.5;                                // Velocidade do parallax
        
        // Aplica transformação de parallax a cada elemento
        parallaxElements.each(function() {
            const $element = $(this);
            const yPos = -(scrollTop * speed);            // Calcula posição Y
            $element.css('transform', `translateY(${yPos}px)`);
        });
    }

    /* ===========================================
       FUNCIONALIDADES DE RESPONSIVIDADE
       =========================================== */
    
    /**
     * Manipula redimensionamento da janela
     * @function handleResize
     * @description Fecha o menu mobile quando a tela fica maior que o breakpoint
     */
    function handleResize() {
        // Se a tela ficou maior que o breakpoint mobile, fecha o menu
        if ($window.width() > config.mobileBreakpoint) {
            closeMobileMenu();
        }
    }

    /* ===========================================
       NAVEGAÇÃO POR TECLADO
       =========================================== */
    
    /**
     * Manipula eventos de teclado para navegação
     * @function handleKeydown
     * @param {KeyboardEvent} e - Evento de teclado
     * @description ESC fecha menu mobile; setas navegam entre seções
     */
    function handleKeydown(e) {
        // ESC - Fecha o menu mobile
        if (e.keyCode === 27) {
            closeMobileMenu();
        }
        
        // Setas para cima/baixo - Navega entre seções
        if (e.keyCode === 38 || e.keyCode === 40) {
            e.preventDefault();                    // Previne scroll padrão
            navigateWithArrows(e.keyCode);         // Navega entre seções
        }
    }

    /**
     * Navega entre seções usando as setas do teclado
     * @function navigateWithArrows
     * @param {number} keyCode - Código da tecla pressionada (38=↑, 40=↓)
     * @description Calcula próxima seção e executa scroll suave
     */
    function navigateWithArrows(keyCode) {
        const currentSection = getCurrentSection();    // Seção atual
        const totalSections = $sections.length;         // Total de seções
        
        let nextSection;
        
        // Seta para cima (38) - vai para seção anterior
        if (keyCode === 38) { 
            nextSection = currentSection > 0 ? currentSection - 1 : totalSections - 1;
        } 
        // Seta para baixo (40) - vai para próxima seção
        else { 
            nextSection = currentSection < totalSections - 1 ? currentSection + 1 : 0;
        }
        
        // Faz scroll para a seção calculada
        scrollToSection(nextSection);
    }

    /**
     * Retorna o índice da seção atual baseado na posição do scroll
     * @function getCurrentSection
     * @returns {number} Índice da seção atualmente visível
     * @description Calcula qual seção está mais visível na viewport
     */
    function getCurrentSection() {
        const scrollTop = $window.scrollTop();          // Posição atual do scroll
        const headerHeight = $header.outerHeight();      // Altura do header
        
        let currentSection = 0;                          // Seção atual (padrão: primeira)
        
        // Percorre todas as seções para encontrar qual está visível
        $sections.each(function(i) {
            const $section = $(this);
            const sectionTop = $section.offset().top - headerHeight - 50;    // Topo da seção
            const sectionBottom = sectionTop + $section.outerHeight();      // Fundo da seção
            
            // Se o scroll está dentro desta seção, marca como atual
            if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
                currentSection = i;
                return false;  // Para o loop
            }
        });
        
        return currentSection;
    }

    /* ===========================================
       SCROLL SUAVE
       =========================================== */
    
    /**
     * Faz scroll suave para uma seção específica
     * @function scrollToSection
     * @param {number} sectionIndex - Índice da seção alvo
     * @description Executa animação de scroll suave até a seção especificada
     */
    function scrollToSection(sectionIndex) {
        const $targetSection = $sections.eq(sectionIndex);  // Seção alvo
        const headerHeight = $header.outerHeight();         // Altura do header
        const targetOffset = $targetSection.offset().top - headerHeight; // Posição alvo
        
        // Anima o scroll até a posição alvo
        $html.animate({
            scrollTop: targetOffset
        }, config.animationDuration, 'easeInOutQuart');
    }

    /**
     * Manipula cliques em links de navegação suave
     * @function handleSmoothScroll
     * @param {Event} e - Evento de clique
     * @description Intercepta cliques em âncoras internas e executa scroll suave
     */
    function handleSmoothScroll(e) {
        const href = $(this).attr('href');              // URL do link
        
        // Se o link tem âncora (começa com #)
        if (href.length > 1) {
            e.preventDefault();                         // Previne comportamento padrão
            const $target = $(href);                    // Elemento alvo
            
            // Se o elemento alvo existe
            if ($target.length) {
                const headerHeight = $header.outerHeight();         // Altura do header
                const targetOffset = $target.offset().top - headerHeight; // Posição alvo
                
                // Anima o scroll até a posição alvo
                $html.animate({
                    scrollTop: targetOffset
                }, config.animationDuration, 'easeInOutQuart');
            }
        }
    }

    /* ===========================================
       CONFIGURAÇÃO DO SCROLLREVEAL
       =========================================== */
    
    /**
     * Configura animações de entrada com ScrollReveal
     * @function setupScrollReveal
     * @description Inicializa ScrollReveal com configurações específicas para cada elemento
     */
    function setupScrollReveal() {
        // Verifica se a biblioteca ScrollReveal está disponível
        if (typeof ScrollReveal !== 'undefined') {
            // Configuração padrão do ScrollReveal
            const sr = ScrollReveal({
                distance: '60px',                        // Distância da animação
                duration: 1000,                          // Duração da animação
                delay: 200,                              // Delay inicial
                easing: 'cubic-bezier(0.5, 0, 0, 1)',   // Curva de animação
                origin: 'bottom',                        // Direção de origem
                reset: false                             // Não reseta ao sair da tela
            });

            // Animações específicas para cada elemento
            sr.reveal('#cta', {
                origin: 'left',                          // Vem da esquerda
                duration: 1200,                         // Duração específica
                distance: '50px'                        // Distância específica
            });

            sr.reveal('#banner', {
                origin: 'right',                         // Vem da direita
                duration: 1200,                         // Duração específica
                distance: '50px',                       // Distância específica
                delay: 300                              // Delay específico
            });

            sr.reveal('.infos-me', {
                origin: 'bottom',                        // Vem de baixo
                duration: 1000,                         // Duração específica
                distance: '40px',                       // Distância específica
                interval: 200                           // Intervalo entre elementos
            });

            sr.reveal('.techz', {
                origin: 'bottom',                        // Vem de baixo
                duration: 800,                          // Duração específica
                distance: '30px',                       // Distância específica
                interval: 150                           // Intervalo entre elementos
            });

            sr.reveal('#footer_items', {
                origin: 'bottom',                        // Vem de baixo
                duration: 1000,                         // Duração específica
                distance: '40px'                        // Distância específica
            });
        }
    }

    /* ===========================================
       CONFIGURAÇÃO DE SCROLL SUAVE
       =========================================== */
    
    /**
     * Configura o easing personalizado para scroll suave
     * @function setupSmoothScrolling
     * @description Adiciona função de easing personalizada para animações mais suaves
     */
    function setupSmoothScrolling() {
        // Adiciona função de easing personalizada para animações mais suaves
        $.easing.easeInOutQuart = function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        };
    }

    /**
     * Verifica posição inicial do scroll e atualiza estados
     * @function checkInitialScroll
     * @description Se a página carregar já rolada, força atualização do header/menu
     */
    function checkInitialScroll() {
        if ($window.scrollTop() > 0) {
            handleScroll();
        }
    }

    /**
     * Utilitário para limitar frequência de execução de funções
     * @function debounce
     * @param {Function} func - Função a ser executada
     * @param {number} wait - Tempo de espera em milissegundos
     * @returns {Function} Função com debounce aplicado
     * @description Evita execução excessiva de funções em eventos frequentes como scroll/resize
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Throttle para performance
    const throttledScroll = debounce(handleScroll, 16);
    $window.on('scroll', throttledScroll);

    // Adicionar classes CSS para animações
    $body.addClass('js-loaded');
    
    // Preloader (se necessário)
    $(window).on('load', function() {
        $body.addClass('page-loaded');
    });

    // Registrar Service Worker para PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('SW registered: ', registration);
                })
                .catch((registrationError) => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }

    // Intersection Observer para animações mais eficientes
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);

        // Observar elementos
        $('.infos-me, .techz, .card').each(function() {
            observer.observe(this);
        });
    }
});

// Remover CSS adicional antigo que pode conflitar
// (Remover o bloco que injeta .nav-item a::before e hover)