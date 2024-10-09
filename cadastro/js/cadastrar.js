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

    var img = document.createElement('img')
    img.setAttribute('class', 'imagemPrevia')
    img.setAttribute('id', 'personagem' + i + '-img')
    var titulo = document.createElement('label')
    titulo.innerHTML = 'Personagem ' + i + ': '
    document.getElementById('personagens').appendChild(titulo)
    document.getElementById('personagens').appendChild(select)
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

document
  .getElementById('formularioCadastro')
  .addEventListener('submit', function (evento) {
    evento.preventDefault()
    if (!ValidarCampos()) return
  })

function ValidarCampos() {
  var nome = document.getElementById('nome').value

  var imagem = document.getElementById('imagem')

  if (nome.length <= 0) {
    alert('Informe o nome do participante')
    return false
  }

  if (ValidarPersonagensSelecionados()) return false

  return true
}

function ValidarPersonagensSelecionados() {
  var personagem1 = document.getElementById('personagem1').options[
    document.getElementById('personagem1').selectedIndex
  ].value
  var personagem2 = document.getElementById('personagem2').options[
    document.getElementById('personagem2').selectedIndex
  ].value
  var personagem3 = document.getElementById('personagem3').options[
    document.getElementById('personagem3').selectedIndex
  ].value

  console.log(personagem1)
  console.log(personagem2)
  console.log(personagem3)

  if (
    personagem1.length <= 0 ||
    personagem2.length <= 0 ||
    personagem3.length <= 0
  ) {
    alert('Você ainda não selecionou todos os personagens.')
    return true
  }

  if (
    personagem1 != personagem2 &&
    personagem2 != personagem3 &&
    personagem1 != personagem3
  )
    return false

  alert('Favor selecionar 3 personagens diferentes.')
  return true
}
