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
    const text = pre.innerText;

    let index = 0;
    pre.innerText = "";

    function type() {
        if (index < text.length) {
            pre.innerText += text.charAt(index);
            index++;
            setTimeout(type, 18); //velocidade retro
        }
    }

    setTimeout(type, 700); // espera o boot terminar
}

