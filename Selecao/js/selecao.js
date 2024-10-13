var participantes = JSON.parse(localStorage.getItem("participantes")) || [];

function GerarSelects() {
  var select1 = document.getElementById("select1");
  var select2 = document.getElementById("select2");

  var op = document.createElement("option");
  op.setAttribute("value", -1);
  select1.appendChild(op);
  op = document.createElement("option");
  op.setAttribute("value", -1);
  select2.appendChild(op);

  select1.onchange = function (sel) {
    ModificarParticipanteSelecionado(sel.target, 1);
  };
  select2.onchange = function (sel) {
    ModificarParticipanteSelecionado(sel.target, 2);
  };

  for (var j = 0; j < participantes.length; j++) {
    var option2 = document.createElement("option");
    option2.innerHTML = participantes[j].nome;
    option2.setAttribute("value", j);
    var option1 = document.createElement("option");
    option1.innerHTML = participantes[j].nome;
    option1.setAttribute("value", j);
    select1.appendChild(option1);
    select2.appendChild(option2);
  }
}

function ModificarParticipanteSelecionado(sel, posicao) {
  var index = sel.options[sel.selectedIndex].value;

  if (index == -1) {
    document.getElementById("participante" + posicao).src =
      "../commons/img/vash.webp";
  }

  if (posicao == 1) {
    document.getElementById("participante1").src = participantes[index].imagem;
    document.getElementById("nomeParticipante1").innerHTML =
      participantes[index].nome;
  } else {
    document.getElementById("participante2").src = participantes[index].imagem;
    document.getElementById("nomeParticipante2").innerHTML =
      participantes[index].nome;
  }
}

GerarSelects();

function GerarCombate() {
  var per1 = Math.round(Math.random() * 2);
  var per2 = Math.round(Math.random() * 2);

  var macaco1 = document.getElementById("select1");
  var valorSel1 = macaco1.options[macaco1.selectedIndex].value;
  var macaco2 = document.getElementById("select2");
  var valorSel2 = macaco1.options[macaco2.selectedIndex].value;

  if (valorSel1 == -1 || valorSel2 == -1 || valorSel1 == valorSel2) {
    alert("FILHO DA PUTA SELECIONA ESSA MERDA DIREITO");
    return;
  }

  document.getElementById("participantes").style.display = "none";
  document.getElementById("oponentes").style.display = "block";

  document.getElementById("boneco1").innerHTML =
    participantes[valorSel1].personagens[per1];
  document.getElementById("macaco1").innerHTML =
    participantes[valorSel1].nome;
  document.getElementById("imgBoneco1").src =
    "../commons/img/" + participantes[valorSel1].personagens[per1] + ".webp";
  document.getElementById("boneco2").innerHTML =
    participantes[valorSel2].personagens[per2];
    document.getElementById("macaco2").innerHTML =
    participantes[valorSel2].nome;
  document.getElementById("imgBoneco2").src =
    "../commons/img/" + participantes[valorSel2].personagens[per2] + ".webp";
}

function NovaLuta(){
    document.getElementById("participantes").style.display = "block";
  document.getElementById("oponentes").style.display = "none";
}
