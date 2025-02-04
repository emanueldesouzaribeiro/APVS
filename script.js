// Animação ao rolar a página
document.addEventListener("scroll", function () {
    let elementos = document.querySelectorAll("ilustracao-do-conceito-de-seguro-de-automovel_114360-22825-removebg-preview.png, .sobre img");
    elementos.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

// Suavizar rolagem ao clicar no menu
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});