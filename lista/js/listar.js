var participantes = JSON.parse(localStorage.getItem("participantes")) || [];

function CriarListaDeParticipantes() {
  var tabela = document.getElementById("tabelaParticipantes");
  var i = 0;
  tabela.innerHTML = "";

  GerarCabecalho();

  Array.from(participantes).forEach(function (participante) {
    if (!participante) {
      var linha = document.createElement("tr");
      var linhaNula = document.createElement("td");
      var linkParaDeletar = document.createElement("a");
      linkParaDeletar.setAttribute("onclick", "DeletarLinha(" + i + ")");
      linkParaDeletar.innerHTML = "Deletar";
      linhaNula.appendChild(linkParaDeletar);
      linhaNula.setAttribute("colspan", "6");
      linha.appendChild(linhaNula);
      tabela.appendChild(linha);
    } else {
      var linha = document.createElement("tr");
      var colunaImagem = document.createElement("td");
      var imagemParticipante = document.createElement("img");
      colunaImagem.setAttribute("class", "colunaDeImagem");
      imagemParticipante.src = participante.imagem;
      var colunaNome = document.createElement("td");
      colunaNome.innerHTML = participante.nome;
      colunaImagem.appendChild(imagemParticipante);

      var colunaPersonagem1 = document.createElement("td");
      var imagemPersonagem1 = document.createElement("img");
      imagemPersonagem1.src =
        "../commons/img/" + participante.personagens[0] + ".webp";
      colunaPersonagem1.setAttribute("class", "colunaDeImagem");

      var colunaPersonagem2 = document.createElement("td");
      var imagemPersonagem2 = document.createElement("img");
      imagemPersonagem2.src =
        "../commons/img/" + participante.personagens[1] + ".webp";
      colunaPersonagem2.setAttribute("class", "colunaDeImagem");

      var colunaPersonagem3 = document.createElement("td");
      var imagemPersonagem3 = document.createElement("img");
      imagemPersonagem3.src =
        "../commons/img/" + participante.personagens[2] + ".webp";
      colunaPersonagem3.setAttribute("class", "colunaDeImagem");

      colunaPersonagem1.appendChild(imagemPersonagem1);
      colunaPersonagem2.appendChild(imagemPersonagem2);
      colunaPersonagem3.appendChild(imagemPersonagem3);

      var linkParaDeletar = document.createElement("a");
      linkParaDeletar.setAttribute("onclick", "DeletarLinha(" + i + ")");
      linkParaDeletar.innerHTML = "Deletar";
      var colunaDeletar = document.createElement("td");
      colunaDeletar.appendChild(linkParaDeletar);

      linha.appendChild(colunaImagem);
      linha.appendChild(colunaNome);
      linha.appendChild(colunaPersonagem1);
      linha.appendChild(colunaPersonagem2);
      linha.appendChild(colunaPersonagem3);
      linha.appendChild(colunaDeletar);

      tabela.appendChild(linha);
      i++;
    }
  });
}

CriarListaDeParticipantes();

function DeletarLinha(i) {
  participantes.splice(i, 1);
  CriarListaDeParticipantes();
  localStorage.setItem("participantes", JSON.stringify(participantes));
}

function GerarCabecalho() {
  var tabela = document.getElementById("tabelaParticipantes");
  var tr = document.createElement("tr");
  var thImagem = document.createElement("th");
  var thNome = document.createElement("th");
  var thPersonagem1 = document.createElement("th");
  var thPersonagem2 = document.createElement("th");
  var thPersonagem3 = document.createElement("th");
  var thOpcoes = document.createElement("th");
  thImagem.innerHTML = "Imagem";
  thNome.innerHTML = "Participante";
  thPersonagem1.innerHTML = "Personagem 1";
  thPersonagem2.innerHTML = "Personagem 2";
  thPersonagem3.innerHTML = "Personagem 3";
  thOpcoes.innerHTML = "...";
  tr.appendChild(thImagem);
  tr.appendChild(thNome);
  tr.appendChild(thPersonagem1);
  tr.appendChild(thPersonagem2);
  tr.appendChild(thPersonagem3);
  tr.appendChild(thOpcoes);
  tabela.appendChild(tr);
}
