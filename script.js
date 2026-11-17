
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
