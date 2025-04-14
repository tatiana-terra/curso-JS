function clicar() {
    let numero =  window.prompt('Digite um número inteiro qualquer.')
    let num = Number(numero)
    let ant = num - 1
    let suc = num + (1)
    let res = window.alert(`Antes de ${num}, temos o número ${ant}. Depois de ${num}, temos o número ${suc}`)
}