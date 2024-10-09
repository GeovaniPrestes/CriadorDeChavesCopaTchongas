const personagem = [
  'Akuma',
  'Alex',
  'Dudley',
  'Elena',
  'Hugo Andore',
  'Ibuki',
  'Ken Masters',
  'Necro',
  'Oro',
  'Ryu',
  'Sean Matsuda',
  'Urien',
  'Yang',
  'Yun',
  'Gill',
  'Chun-Li',
  'Makoto',
  'Q',
  'Remy',
  'Twelve',
]

function GerarSelects() {
  for (var i = 1; i <= 3; i++) {
  
    var select = document.createElement('select')
    select.setAttribute('id', 'personagem' + i)

    select.appendChild(document.createElement('option'))
    select.onchange =  function (sel) {
        ModificarPersonagemSelecionado(sel.target);
    }

    for (var j = 0; j < personagem.length; j++) {
      var option = document.createElement('option')
      option.innerHTML = personagem[j]
      option.setAttribute('value', personagem[j])
      select.appendChild(option)
    }

    var titulo = document.createElement('label')
    titulo.innerHTML = 'Personagem ' + i + ': ';
    document.getElementById('personagens').appendChild(titulo)
    document.getElementById('personagens').appendChild(select)
  }
}

function ModificarPersonagemSelecionado(sel){
    var personagemSelecionado = sel.options[sel.selectedIndex].value;
    var id =  sel.getAttribute('id');
    
}

GerarSelects()
