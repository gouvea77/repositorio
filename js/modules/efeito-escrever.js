export default function efeitoEscrever() {
  const texto = document.querySelector(".texto")
  const textoArray = texto.innerHTML.split('');
  texto.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      texto.innerHTML += letra;
    }, 30 * i);
  });
}
