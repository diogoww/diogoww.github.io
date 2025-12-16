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
    const readmeText = `👋 hello, visitor!

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

📄 resume
→ resume.pdf
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
                "resume.pdf",
                `<a href="assets/curriculo-diogo.pdf" target="_blank" rel="noopener noreferrer">resume.pdf</a>`
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
            const isCloseButton = btn.textContent.trim() === "X";
            const originalColor = isCloseButton ? "#e81123" : "#dcdcdc";
            
            // feedback visual
            btn.style.background = "#bbb";

            setTimeout(() => {
                btn.style.background = originalColor;
                // Remove o foco para evitar estado preso
                btn.blur();
            }, 120);

            // se for o botão X
            if (isCloseButton) {
                window.open(
                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    "_blank",
                    "noopener,noreferrer"
                );
            }
        });
    });
}