function abrirCurso(selectElement) {
  const cursoSelecionado = selectElement.value;

  if (cursoSelecionado === "") return;

  const confirmar = confirm(`Deseja abrir informações sobre o curso de ${cursoSelecionado}?`);

  if (confirmar) {
    const informacoes = {
      "ADS": "Análise e Desenvolvimento de Sistemas: Curso focado em desenvolvimento de software e banco de dados.",
      "GE": "Gestão Empresarial: Curso voltado à administração e processos empresariais.",
      "MEC": "Engenharia Mecânica: Curso técnico com foco em projetos e processos mecânicos.",
      "LOG": "Logística: Gestão da cadeia de suprimentos e transporte.",
      "FM": "Fabricação Mecânica: Voltado à produção e controle de processos industriais."
    };

    const conteudo = `
      <html>
        <head><title>${cursoSelecionado}</title></head>
        <body>
          <h1>Curso: ${cursoSelecionado}</h1>
          <p>${informacoes[cursoSelecionado]}</p>
        </body>
      </html>
    `;

    const novaJanela = window.open("", "_blank", "width=600,height=300");
    novaJanela.document.write(conteudo);
    novaJanela.document.close();
  }

  selectElement.value = "";
}
