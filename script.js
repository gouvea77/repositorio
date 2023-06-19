

function typeWriteR(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML ="";
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 30*i);
  });
}

const titulo = document.querySelector(".texto")
typeWriteR(titulo);

