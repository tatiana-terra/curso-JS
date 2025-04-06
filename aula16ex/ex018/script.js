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
    if (isNumero(num.value) && !inLista(num.value, valores)) {
    
    }else {
       window.alert('Valor inválido ou já encontrado na lista.') 
    }
}