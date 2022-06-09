const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu-navegacion");
hamburguer.addEventListener("click", ()=>{
    menu.classList.toggle("spread");
});
window.addEventListener('click', (e)=>{
    if (menu.classList.contains('spread') && e.target != menu && e.target != hamburguer) menu.classList.toggle("spread");
});

//# sourceMappingURL=index.c6002a34.js.map
