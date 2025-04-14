function clicar() {
    let prod = window.prompt('Que produto você está comprando?')
    let valor = window.prompt(`Quanto custa o(a) ${prod} que você está comprando?`)
    let pag = window.prompt(`Qual foi o valor que você deu para pagar o (a) ${prod}?`)

    let ivalor = Number(valor)
    let ipag = Number(pag)

    let troco = ipag - ivalor
    let falta = ivalor - ipag
    

    if (ivalor == ipag) {
       window.alert('Pagamento confirmado. Volte Sempre!')
    }else { 

        if ( ivalor < ipag) {
        window.alert(`Você comprou um(a) ${prod} que custou R$ ${ivalor}. Deu R$ ${ipag} em dinheiro e vai receber R$ ${troco} de troco. Volte Sempre!`)
        }   
        if( ipag < ivalor) { 
        window.alert(`Desculpe!Você comprou um(a) ${prod} que custou R$ ${ivalor}. Deu R$ ${ipag} em dinheiro. Está faltando R$ ${falta}.Obrigada!`)

        while (ipag < ivalor){
            window.prompt(`Pague ${falta}.`)
            ipag = valorTot
        }
        }
    } 
}