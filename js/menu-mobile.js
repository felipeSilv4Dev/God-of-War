const menu = document.getElementById("menu");
const ulMenu = document.getElementById("ul-menu");
const header = document.querySelector("header");
const container = document.querySelector(".container-info");
const h1 = document.querySelector(".container-info h1");
const p = document.querySelector(".container-info p");
const img = document.querySelector(".container img");
const body = document.querySelector(".bg-imagem");

function menuMobile() {
  if (menu) {
    function activeMenu(event) {
      event.preventDefault();

      menu.classList.toggle("active");
      ulMenu.classList.toggle("active");
    }

    ["touchstart", "click"].forEach((eventos) => {
      menu.addEventListener(eventos, activeMenu);
    });

    ["touchstart", "click"].forEach((eventos) => {
      body.addEventListener(eventos, (body) => {
        console.log(body.target);

        if (
          body.target == container ||
          body.target == header ||
          body.target == h1 ||
          body.target == p ||
          body.target == img
        ) {
          ulMenu.classList.remove("active");
          menu.classList.remove("active");
        }
      });
    });
  }
}
menuMobile();
