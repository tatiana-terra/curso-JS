function desconto() {
    let prod = window.prompt('Qual é o produto que você está comprando?')
    let preco = window.prompt(`Qual é o preço do ${prod}?`)
    let ipreco = Number.parseFloat(preco).toFixed(2)
    let desc =(ipreco*10)/100
    let idesc = Number.parseFloat(desc).toFixed(2) 
    let descTot = ipreco - desc
    let idescTot = Number.parseFloat(descTot).toFixed(2)
    let res = document.getElementById('ires')
    
    res.innerHTML = `<p>Calculando desconto de 10% para ${prod}. </p>`
    res.innerHTML += `<p> O preço original era R$ ${ipreco}. </p>
    <p> Você acaba de ganhar R$ ${idesc} de desconto (-10%).</p>
    <p>No fim, você vai pagar R$ ${idescTot} no produto ${prod}.</p>`

}