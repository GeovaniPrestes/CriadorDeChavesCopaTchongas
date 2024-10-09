const personagem = [
  'Akuma',
  'Alex',
  'Chun-Li',
  'Dudley',
  'Elena',
  'Gill',
  'Hugo Andore',
  'Ibuki',
  'Ken Masters',
  'Makoto',
  'Necro',
  'Oro',
  'Q',
  'Remy',
  'Ryu',
  'Sean Matsuda',
  'Twelve',
  'Urien',
  'Yang',
  'Yun',
]

function GerarSelects() {
  for (var i = 1; i <= 3; i++) {
    var select = document.createElement('select')
    select.setAttribute('id', 'personagem' + i)

    select.appendChild(document.createElement('option'))
    select.onchange = function (sel) {
      ModificarPersonagemSelecionado(sel.target)
    }

    for (var j = 0; j < personagem.length; j++) {
      var option = document.createElement('option')
      option.innerHTML = personagem[j]
      option.setAttribute('value', personagem[j])
      select.appendChild(option)
    }

    var img = document.createElement('img');
    img.setAttribute('class', 'imagemPrevia');
    img.setAttribute('id', 'personagem' + i + '-img');
    var titulo = document.createElement('label')
    titulo.innerHTML = 'Personagem ' + i + ': '
    document.getElementById('personagens').appendChild(titulo)
    document.getElementById('personagens').appendChild(select);
    document.getElementById('personagens').appendChild(img)
  }
}

function ModificarPersonagemSelecionado(sel) {
  var personagemSelecionado = sel.options[sel.selectedIndex].value
  var id = sel.getAttribute('id')
  document
    .getElementById(id + '-img')
    .setAttribute('src', '../img/' + personagemSelecionado + '.webp')
}

GerarSelects()
