
const header = document.querySelector("header");

// Adiciona a classe "sticky" ao cabeçalho ao rolar a página
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 40)
});

let menuIcon = document.querySelector('#menu-icon');
let menu = document.querySelector('.menu');


// Menu hamburguer: abrir e fechar
menuIcon.onclick = () => {
    menu.classList.toggle('open');
    if (window.scrollY < 90) {
        header.classList.toggle("sticky");
    }

}

// Esconder o menu ao rolar
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    menu.classList.remove('open');
}

const topo = document.getElementById("top");


// Mostrar/esconder o botão "Voltar ao Topo"
window.addEventListener("scroll", function () {
    topo.classList.toggle("show-top", window.scrollY > 140)
    topo.classList.toggle("hide-top", window.scrollY < 140);
});

window.onload = () => {
    topo.classList.toggle("hide-top");
}