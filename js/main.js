const form = document.getElementById('calculadora-masculina')
const body = document.querySelector('body')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()

  const peso = getInputValue('peso')
  const altura = getInputValue('altura')
  const idade = getInputValue('idade')
  const fact = getSelectedValue('fact')
  const sexo = getSelectedValue('Sexo')

  const gdc = Math.round(
    sexo === 'mulher'
      ? 655.1 + 9.563 * peso + 1.85 * altura - 4.676 * idade - 100
      : 66.5 + 13.75 * peso + 5.003 * altura - 6.75 * idade - 120
  )

  const colors = sexo
  //console.log(colors)

  //console.log(gdc)

  const result = Math.round(gdc * Number(fact))

  // console.log(result)

  const perderpeso = result - 450
  const ganharpeso = result + 450

  //console.log(perderpeso)
  //console.log(ganharpeso)

  let output = ''
  output += `
	<h3>Aqui está o resultado:</h3>
	<div class="info">
		
			<p>
				Seu metabolismo basal é de <strong>${gdc}</strong> calorias.
			</p>
			<p>
				Para manter o seu peso você precisa consumir em média <strong>${result}</strong> calorias.
			</li>
			<p>
				Para perder peso você precisa consumir em média <strong>${perderpeso}</strong> calorias.
			</p>
			<p>
				Para ganhar peso você precisa consumir em média <strong>${ganharpeso}</strong> calorias.
			</p>
		
	</div>
	`

  document.querySelector('#calc #dailyCal').innerHTML = output

  function homen() {
    if (colors == 'homen') {
      body.classList.add('homen')
    } else {
      body.classList.remove('homen')
    }
  }
  homen()
  function mulher() {
    if (colors == 'mulher') {
      body.classList.add('mulher')
    } else {
      body.classList.remove('mulher')
    }
  }
  mulher()
}

function getSelectedValue(id) {
  const select = document.getElementById(id)

  return select.options[select.selectedIndex].value
}

function getInputValue(id) {
  return Number(document.getElementById(id).value)
}

//*======= =======*//
