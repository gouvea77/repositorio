export default function scrollAnimado() {
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
