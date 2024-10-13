var participantes = JSON.parse(localStorage.getItem("participantes")) || [];

var quartas = [];
var semi = [];
var final = [];
var terceiroLugar = [];

function GerarQuartas() {
  if (participantes.length == 0) {
    alert("Irmão volta lá e cadastra pelo menos um corno");
    window.location.href = "../cadastro/cadastrar.html";
  }

  if (participantes.length < 8) {
    for (var i = participantes.length; i < 8; i++)
      participantes.push({ vazio: true, nome: "WO" });
  }

  var posicoesSorteadas = [];
  while (quartas.length < 8) {
    var cablocoSelecionado = Math.floor(Math.random() * 8);
    var achou = posicoesSorteadas.find(
      (elemento) => elemento == cablocoSelecionado
    );
    if (!isNaN(achou)) continue;

    posicoesSorteadas.push(cablocoSelecionado);
    quartas.push(cablocoSelecionado);
  }
  GerarChaves(quartas);
}

function GerarChaves(lista) {
  for (var i = 0; i < lista.length / 2; i++) {
    var div = document.createElement("div");
    var competidor1 = document.createElement("div");
    var competidor2 = document.createElement("div");
    competidor1.innerHTML = participantes[lista[i * 2]].nome;
    competidor2.innerHTML = participantes[lista[i * 2 + 1]].nome;
    div.appendChild(competidor1);
    div.appendChild(competidor2);

    if (lista.length == 8) {
      var sexo = document.getElementById("quartas");
      sexo.appendChild(div);
    }
  }
}

GerarQuartas();
