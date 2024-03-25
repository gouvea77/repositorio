function efeitoEscrever() {
  const texto = document.querySelector(".texto")
  
  function typeWriteR(texto) {
    const textoArray = texto.innerHTML.split('');
    texto.innerHTML = "";
    textoArray.forEach((letra, i) => {
      setTimeout(() => texto.innerHTML += letra, 30 * i);
    });
  }

  typeWriteR(texto);
}
efeitoEscrever();


function scrollSuave() {
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


function scrollAnimado() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const topo = section.getBoundingClientRect().top - windowMetade;
        if (topo < 0) {
          section.classList.add("scroll");
        }
      })
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
scrollAnimado();