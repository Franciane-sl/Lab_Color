// ===== DARK MODE =====
const btnDark = document.getElementById("darkModeBtn");
const body = document.body;
const logo = document.querySelector(".logo img");

btnDark.addEventListener("click", () => {
    body.classList.toggle("dark");

    // alterna ícone do botão
    btnDark.textContent = body.classList.contains("dark") ? "☀️" : "🌙";

    // troca a logo no dark mode
    if (body.classList.contains("dark")) {
        logo.src = "Assets/LogoFundoEscuro.png"; 
    } else {
        logo.src = "Assets/LogoFundoClaro.png"; 
    }
});


// ===== COPIAR CÓDIGO DOS CARDS =====
const cards = document.querySelectorAll(".card");
const msg = document.getElementById("msg-copiado");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const codigo = card.textContent.trim();

        navigator.clipboard.writeText(codigo)
            .then(() => {
                card.classList.add("copiado");

                setTimeout(() => {
                    card.classList.remove("copiado");
                }, 800);

                msg.classList.add("show");

                setTimeout(() => {
                    msg.classList.remove("show");
                }, 2000);
            });
    });
});
