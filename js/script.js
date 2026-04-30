document.addEventListener("DOMContentLoaded", () => {
        bootWindow();
        initI18n();
        initTheme();
        windowButtons();
        protectProfileImage();
});

const translations = {
        pt: {
                langLabel: "Selecionar idioma",
                themeToggle: "Alternar modo escuro",
                subtitle: "dev fullstack & data analyst",
                profileAlt: "foto de perfil",
                socialsNav: "Redes sociais",
                socialInstagram: "Instagram",
                socialLinkedin: "LinkedIn",
                socialGithub: "GitHub",
                socialSpotify: "Spotify",
                btnMinimize: "Minimizar",
                btnMaximize: "Maximizar",
                btnClose: "Fechar",
                readme: `👋 ola, visitante!

sou o Diogo, apaixonado por tecnologia, musica e esportes!
aqui vai um pouco sobre mim! 👇

- idiomas: pt-BR, en, es
- area: desenvolvimento fullstack / data analyst
- local: Curitiba - PR, Brasil
- dev skills:
    • java, python, PHP
    • HTML, CSS, JavaScript
    • git & gitHub | databases
- data analyst skills:
    • power BI, excel
    • analise critica & insights estrategicos
`
        },
        en: {
                langLabel: "Select language",
                themeToggle: "Toggle dark mode",
                subtitle: "dev fullstack & data analyst",
                profileAlt: "profile photo",
                socialsNav: "Social networks",
                socialInstagram: "Instagram",
                socialLinkedin: "LinkedIn",
                socialGithub: "GitHub",
                socialSpotify: "Spotify",
                btnMinimize: "Minimize",
                btnMaximize: "Maximize",
                btnClose: "Close",
                readme: `👋 hello, visitor!

i'm Diogo, passionate about technology, music, and sports!
here's a bit about me! 👇

- languages: pt-BR, en, es
- field: fullstack development / data analyst
- location: Curitiba - PR, Brasil
- dev skills:
    • java, python, PHP
    • HTML, CSS, JavaScript
    • git & gitHub | databases
- data analyst skills:
    • power BI, excel
    • critical analysis & strategic insights
`
        }
};

const STORAGE_KEYS = {
        lang: "portfolio_lang",
        theme: "portfolio_theme"
};

let activeLang = "pt";
let typingTimeout = null;

// animacao de "boot"
function bootWindow() {
    const windowEl = document.querySelector(".window");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
        return;
    }

    windowEl.style.opacity = "0";
    windowEl.style.transform = "translateY(20px) scale(0.98)";

    setTimeout(() => {
        windowEl.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        windowEl.style.opacity = "1";
        windowEl.style.transform = "translateY(0) scale(1)";
    }, 300);
}

// efeito de digitacao no readme
function typeReadme(text) {
    const pre = document.querySelector(".readme pre");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (typingTimeout) {
        clearTimeout(typingTimeout);
    }

    pre.textContent = "";

    if (prefersReducedMotion) {
        pre.textContent = text;
        return;
    }

    let index = 0;

    function type() {
        if (index < text.length) {
            pre.textContent += text.charAt(index);
            index++;
            typingTimeout = setTimeout(type, 18);
        }
    }

    typingTimeout = setTimeout(type, 700); //comeca depois do boot da janela
}

function initI18n() {
    const savedLang = (() => { try { return localStorage.getItem(STORAGE_KEYS.lang); } catch { return null; } })();
    activeLang = translations[savedLang] ? savedLang : "pt";

    const langButtons = document.querySelectorAll(".lang-btn");
    const langGroup = document.querySelector(".lang-toggle");
    const themeToggle = document.querySelector("#theme-toggle");

    langButtons.forEach(btn => {
        btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });

    if (langGroup) {
        langGroup.setAttribute("aria-label", translations[activeLang].langLabel);
    }

    if (themeToggle) {
        themeToggle.setAttribute("aria-label", translations[activeLang].themeToggle);
    }

    applyTranslations();
    setActiveLanguageButton();
}

function setLanguage(lang) {
    if (!translations[lang]) {
        return;
    }

    activeLang = lang;
    try { localStorage.setItem(STORAGE_KEYS.lang, lang); } catch { /* storage unavailable */ }
    applyTranslations();
    setActiveLanguageButton();
}

function applyTranslations() {
    const dict = translations[activeLang];
    const nodes = document.querySelectorAll("[data-i18n]");

    document.documentElement.lang = activeLang === "pt" ? "pt-BR" : "en";

    nodes.forEach(node => {
        const key = node.getAttribute("data-i18n");
        const attr = node.getAttribute("data-i18n-attr");
        const value = dict[key];

        if (!value) {
            return;
        }

        if (attr) {
            node.setAttribute(attr, value);
            return;
        }

        node.textContent = value;
    });

    typeReadme(dict.readme);

    const langGroup = document.querySelector(".lang-toggle");
    const themeToggle = document.querySelector("#theme-toggle");

    if (langGroup) {
        langGroup.setAttribute("aria-label", dict.langLabel);
    }

    if (themeToggle) {
        themeToggle.setAttribute("aria-label", dict.themeToggle);
    }
}

function setActiveLanguageButton() {
    const langButtons = document.querySelectorAll(".lang-btn");

    langButtons.forEach(btn => {
        const isActive = btn.dataset.lang === activeLang;
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
}

function initTheme() {
    const savedTheme = (() => { try { return localStorage.getItem(STORAGE_KEYS.theme); } catch { return null; } })();
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme ? savedTheme === "dark" : prefersDark;

    applyTheme(isDark ? "dark" : "light");

    const themeToggle = document.querySelector("#theme-toggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const nextTheme = document.body.classList.contains("theme-dark") ? "light" : "dark";
            applyTheme(nextTheme);
        });
    }
}

function applyTheme(theme) {
    const isDark = theme === "dark";
    document.body.classList.toggle("theme-dark", isDark);
    try { localStorage.setItem(STORAGE_KEYS.theme, theme); } catch { /* storage unavailable */ }

    const icon = document.querySelector("#theme-toggle i");
    if (icon) {
        icon.className = isDark ? "bx bx-sun" : "bx bx-moon";
    }
}

function protectProfileImage() {
    const img = document.querySelector(".profile img");
    if (img) {
        img.addEventListener("contextmenu", e => e.preventDefault());
    }
}

// botao X da janela (fake xp)
function windowButtons() {
    const buttons = document.querySelectorAll(".window-buttons button");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const isCloseButton = btn.dataset.action === "close";
            const originalColor = getComputedStyle(btn).backgroundColor;
            
            // feedback visual
            btn.style.backgroundColor = "#bbb";

            setTimeout(() => {
                btn.style.backgroundColor = originalColor;
                // Remove o foco para evitar estado preso
                btn.blur();
            }, 120);

            // se for o botão X
            if (isCloseButton) {
                const newWindow = window.open(
                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    "_blank"
                );
                // Remove a referência ao opener para segurança
                if (newWindow) {
                    newWindow.opener = null;
                }
            }
        });
    });
}