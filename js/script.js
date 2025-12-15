document.addEventListener("DOMContentLoaded", () => {
    bootWindow();
    typeReadme();
    windowButtons();
});

// animacao de "boot"
function bootWindow() {
    const windowEl = document.querySelector(".window");

    windowEl.style.opacity = "0";
    windowEl.style.transform = "translateY(20px) scale(0.98)";

    setTimeout(() => {
    windowEl.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    windowEl.style.opacity = "1";
    windowEl.style.transform = "translateY(0) scale(1)";
  }, 300);
}

// efeito de digitacao no readme
function typeReadme() {
    const pre = document.querySelector(".readme pre");
    const readmeText = `👋 Olá, visitante!

- Área: Desenvolvimento / Análise de Dados
- Local: Curitiba - PR, Brasil
- Skills Dev:
  • Java, Python, PHP
  • HTML, CSS, JavaScript
  • Git e GitHub | Banco de Dados
- Skills Data Analyst:
  • Power BI, Excel
  • Análise Crítica e Insights Estratégicos

📄 Currículo
→ curriculo.pdf
`;

    let index = 0;
    pre.textContent = "";

    function type() {
        if (index < readmeText.length) {
            pre.textContent += readmeText.charAt(index);
            index++;
            setTimeout(type, 18);
        } else {
            // quando termina, transforma o texto em link real
            const finalLink = pre.textContent;
            pre.innerHTML = finalLink.replace(
                "curriculo.pdf",
                `<a href="assets/curriculo-diogo.pdf" target="_blank" rel="noopener noreferrer">curriculo.pdf</a>`
            );
        }
    }
    setTimeout(type, 700); //comeca depois do boot da janela
}

// botao X da janela (fake xp)
function windowButtons() {
    const buttons = document.querySelectorAll(".window-buttons button");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            // feedback visual
            btn.style.background = "#bbb";

            setTimeout(() => {
                btn.style.background = "#dcdcdc";
            }, 120);

            // se for o botão X
            if (btn.textContent.trim() === "X") {
                window.open(
                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    "_blank",
                    "noopener,noreferrer"
                );
            }
        });
    });
}