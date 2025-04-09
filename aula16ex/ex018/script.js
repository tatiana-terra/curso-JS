let num = window.document.getElementById('fnum')
let lista = window.document.getElementById('flista')
let res = window.document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adcionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {//Se for um número e nçao estiver na lista !quer dizer não em JS
        valores.push(Number(num.value))//valores(indice)push(add um elemento no vetor) add um number que esta dentro de num.value
        let item = document.createElement('option')//criei um item, criei um elemento q é um option(uma tag option)
        item.text = `Valor ${num.value} adcionado.`//o item vai er um valor text - string
        lista.appendChild(item)//pra add na lista 
        res.innerHTML = ''
    }else {
       window.alert('Valor inválido ou já encontrado na lista.') 
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adcione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]//o maior valor é o  na posição 0
        let menor = valores[0]// e o menor  valor é o da posição 0
        let soma = 0
        let media = 0


        for (let pos in valores) {//pra cada posiçao em valores vou fazer um teste
            soma += valores[pos]//soma que recebe 0 vai somando os valores que foram a aparecendo nas posições.

            if (valores[pos] > maior)//se valores na posiçao pos for maior do que o maior valor
                maior = valores[pos]//o maior valor passa a ser valores pos( deixa de ser o anterior e passa a ser esse)
           if (valores[pos] < menor)//se os valores na posição pos for menor do que o menor valor
                menor = valores[pos]//o menor valor passa a ser o valores pos 
        }        
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadatrados.</p>`
        res.innerHTML += `<p>O maior valor encontrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}