var participantes = JSON.parse(localStorage.getItem("participantes")) || [];

function CriarListaDeParticipantes() {
  var tabela = document.getElementById("tabelaParticipantes");

  Array.from(participantes).forEach(function (participante) {
    if (!participante) {
        var linha = document.createElement("tr");
        var colunaImagem = document.createElement("td");
        linha.appendChild(colunaImagem);
        tabela.appendChild(linha);
    } else {
      var linha = document.createElement("tr");
      var colunaImagem = document.createElement("td");
      var imagemParticipante = document.createElement("img");
      imagemParticipante.src = participante.imagem;
      var colunaNome = document.createElement('td')
      colunaNome.innerHTML = participante.nome;
      colunaImagem.appendChild(imagemParticipante);
      linha.appendChild(colunaImagem);
      linha.appendChild(colunaNome)
      tabela.appendChild(linha);
    }
  });
}

CriarListaDeParticipantes();
