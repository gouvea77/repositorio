export default function fetchGitHub() {
  let fotoPerfil = document.querySelector(".foto-perfil")

  fetch("https://api.github.com/users/gouvea77/repos")
  .then(response => response.json())
  .then((response) => {
    response.forEach(e => {
      console.log(e.owner.avatar_url)
      fotoPerfil.src = e.owner.avatar_url
    });
  })
}

