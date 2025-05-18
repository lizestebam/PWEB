document.forms["myForm"].addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const comentario = document.getElementById("comentario").value.trim();
  const visita = document.querySelector('input[name="visita"]:checked');
  const error = document.getElementById("error");

  if (nome === "" || email === "" || comentario === "") {
    error.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  if (nome.length < 10) {
    error.textContent = "O nome deve conter no mínimo 10 caracteres.";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    error.textContent = "Insira um endereço de email válido.";
    return;
  }

  if (comentario.length < 20) {
    error.textContent = "O comentário deve conter no mínimo 20 caracteres.";
    return;
  }

  if (visita.value === "Não") {
    alert("Que bom que você voltou a visitar esta página!");
  } else {
    alert("Volte sempre à esta página!");
  }

  error.textContent = "";
  alert("Formulário enviado com sucesso!");
});

function limpar() {
  document.forms["myForm"].reset();
  document.getElementById("error").textContent = "";
}
