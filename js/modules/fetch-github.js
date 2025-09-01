export default function fetchGitHub() {
  let fotoPerfil = document.querySelector(".foto-perfil")

  fetch("https://api.github.com/users/gouvea77")
  .then(response => response.json())
  .then(response => fotoPerfil.src = response.avatar_url)

}

