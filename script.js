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


// function efeitoEscrever2() {
//   const texto2 = document.querySelector(".texto-footer")
//   const ele = document.querySelector("footer")
//   const bottom = ele.getBoundingClientRect();
//   console.log(bottom);

//   function typeWriteR(texto2) {
//     const textoArray2 = texto2.innerText.split('');
//     texto2.innerHTML = "";
//     textoArray2.forEach((letra, i) => {
//       setTimeout(() => texto2.innerHTML += letra, 90 * i);
//     });
//   }

//   typeWriteR(texto2);
// }
// efeitoEscrever2();