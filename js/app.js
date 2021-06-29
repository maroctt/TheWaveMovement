const cerrar = () => {
  const hamburgerMenu = document.querySelector(".hamburgerMenu");
  const navbar = document.querySelector(".navbar");
  const menu = document.querySelector(".navList");

  hamburgerMenu.addEventListener("click", () => {
    navbar.classList.toggle("cerrar");
    menu.classList.toggle("menuActive");
  });
};
cerrar();
