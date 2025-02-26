function verificarLogin() {
  var username = document.getElementById("UsernameCadas").value;
  var senha = document.getElementById("SenhaCadas").value;
  var usuarioArmazenado = JSON.parse(localStorage.getItem("usuario"));

  if (usuarioArmazenado && usuarioArmazenado.username === username && usuarioArmazenado.senha === senha) {
    window.location.href = 'inicio.html';
  } else {
    alert("Dados de login inválidos. Tente novamente.");
  }
}
