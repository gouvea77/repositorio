export default function fetchGitHub() {
  let fotoPerfil = document.querySelector(".foto-perfil")

  fetch("https://api.github.com/users/gouvea77/repos")
  .then(response => response.json())
  .then(response => fotoPerfil.src = response.owner.avatar_url)
}

