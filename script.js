
const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");

function fecharMenu() {
    menu.classList.remove("menu-aberto");
    botaoMenu.classList.remove("ativo");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
}

botaoMenu.addEventListener("click", () => {
    const aberto = menu.classList.toggle("menu-aberto");

    botaoMenu.classList.toggle("ativo", aberto);
    botaoMenu.setAttribute("aria-expanded", String(aberto));
    botaoMenu.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});

// Fecha o menu ao selecionar um link
menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", fecharMenu);
});

// Fecha o menu ao pressionar Escape
document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        fecharMenu();
    }
});



// ========================================
// SCROLL REVEAL - SOLUÇÕES ESTRATÉGICAS
// ========================================

const cardsSolucoes = document.querySelectorAll(
    ".grid-cards .card"
);

const movimentoPermitido = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
).matches;

if (movimentoPermitido && "IntersectionObserver" in window) {

    const observador = new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.remove("reveal-pendente");
                entrada.target.classList.add("reveal-visivel");

                observador.unobserve(entrada.target);
            }

        });

    }, {
        threshold: 0.15
    });

    cardsSolucoes.forEach((card, indice) => {

        card.classList.add("reveal-pendente");

        card.style.transitionDelay = `${indice * 120}ms`;

        observador.observe(card);
    });
}



// ========================================
// ILUMINAÇÃO DINÂMICA DOS CARDS
// ========================================

const cardsNeon = document.querySelectorAll(
    ".grid-cards .card"
);

const permiteHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
).matches;

if (permiteHover) {

    cardsNeon.forEach((card) => {

        card.addEventListener("pointermove", (evento) => {

            const posicao = card.getBoundingClientRect();

            const x = evento.clientX - posicao.left;
            const y = evento.clientY - posicao.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);

        });

    });
}
