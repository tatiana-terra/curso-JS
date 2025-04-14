let cot = window.prompt('Antes de mais nada. Quanto está a cotação do dolar agora?')
let icot = Number.parseFloat(cot)

function converter() {
    let din = window.prompt('Quantos R$ você tem na carteira?')
    let idin = Number.parseFloat(din)
    let tot = idin / icot

    let res = document.getElementById('ires')
    res.innerHTML = `<p>Você consegue comprar <strong>US$ ${tot}</strong>.</p>`
}

