function efeitoEscrever() {
  function typeWriteR(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = "";
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 30 * i);
    });
  }

  const titulo = document.querySelector(".texto")
  typeWriteR(titulo);
}
efeitoEscrever();


function scrollSuave (){
  const linksInternos = document.querySelectorAll(".js-menu");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection)
  });
}
scrollSuave();