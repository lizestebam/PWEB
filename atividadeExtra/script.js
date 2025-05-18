let alunos = [];
const maxAlunos = 10;

document.getElementById("alunoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const ra = document.getElementById("ra").value.trim();
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);

  if (!/^\d{5}$/.test(ra)) {
    alert("RA deve conter exatamente 5 dígitos numéricos.");
    return;
  }

  if (nome.split(" ").length < 2) {
    alert("Digite o nome completo (nome + sobrenome).");
    return;
  }

  const notas = [nota1, nota2, nota3];
  if (notas.some(nota => isNaN(nota) || nota < 0 || nota > 10)) {
    alert("Todas as notas devem estar entre 0 e 10.");
    return;
  }

  const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

  alunos.push({ nome, ra, media: parseFloat(media) });

  atualizarLista();

  if (alunos.length === maxAlunos) {
    document.getElementById("alunoForm").remove();
    mostrarMediaGeral();
  } else {
    document.querySelector("h2").textContent = `Cadastro de Alunos (${alunos.length + 1} de ${maxAlunos})`;
    document.getElementById("alunoForm").reset();
  }
});

function atualizarLista() {
  const lista = document.getElementById("listaAlunos");
  lista.innerHTML = "";

  alunos.forEach((aluno, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${aluno.nome} (RA: ${aluno.ra}) - Média: ${aluno.media}`;
    lista.appendChild(li);
  });
}

function mostrarMediaGeral() {
  const mediaTotal = (alunos.reduce((soma, aluno) => soma + aluno.media, 0) / alunos.length).toFixed(2);
  document.getElementById("mediaGeral").textContent = `Média Geral da Turma: ${mediaTotal}`;
}
