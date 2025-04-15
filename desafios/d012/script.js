function verificar() {
    let ant = window.prompt('Qual era o preço anterior do produto?')
    let antNumFomatado;
    let anterior;

    if ( ant !== null) {
        let antNum = ant.replace(/[^\d.,-]/g, '')
        antNum = antNum.replace(',', '.')
        antNumFomatado =  parseFloat(antNum)

        if (!isNaN (antNumFomatado)) {
            anterior = antNumFomatado.toLocaleString('pt-BR', {style:'currency', 
                currency:'BRL', 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2, })
        }
    }
   
    let at = window.prompt('Qual é o preço atual do produto?')
    let atNumFormatado;
    let atual;

    if ( at !==null){
        let atNum = at.replace(/[^\d.,-]/g, '')
        atNum = atNum.replace(',', '.')
        atNumFormatado = parseFloat(atNum)

        if (!isNaN (atNumFormatado)) {
            atual = atNumFormatado.toLocaleString('pt-BR', 
                {style:'currency', 
                currency:'BRL', 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2, })
        }
    }   

    let res = window.document.getElementById('res')
    res.innerHTML = `<p><strong><big>Analisando os valores informados</big></strong></p>`

    res.innerHTML += `<p>O produto custava ${anterior} e agora custa ${atual}</p>`

    if (anterior > atual) {
        res.innerHTML += `<p>O produto está mais barato.</p>`
    }else {
        res.innerHTML += `<p>O produto está mais caro.</p>`
    }
    
    let baixou = (antNumFomatado - atNumFormatado)
        baixou = baixou.toLocaleString('pt-BR', 
            {style:'currency', 
            currency:'BRL', 
            minimumFractionDigits: 2,
            maximumFractionDigits: 2, })
    let aumento = (atNumFormatado - antNumFomatado )
        aumento = aumento.toLocaleString('pt-BR', 
            {style:'currency', 
            currency:'BRL', 
            minimumFractionDigits: 2,
            maximumFractionDigits: 2, })

    if (anterior > atual) {
        
        res.innerHTML += `<p> O preço caiu ${baixou} em relação ao preço anterior. </p>`
    }else {
        res.innerHTML += `<p> O preço aumentou ${aumento} em relação ao preço anterior. </p>`
    }

    let difAntNumMaior =  antNumFomatado - atNumFormatado
    let difAtNumMaior = atNumFormatado - antNumFomatado

    if (difAntNumMaior) {
        let porcBaixou 
    } if(difAtNumMaior){
        let porcAum
    }

    let porcBaixou = difAntNumMaior / atNumFormatado
    let porVarBaixou = (porcBaixou * 100).toFixed(2)
    porVarBaixou = porVarBaixou.replace('.',',')
    let porcAum = difAtNumMaior / antNumFomatado
    let porVarAum = (porcAum * 100).toFixed(2)
    porVarAum = porVarAum.replace('.',',')
    
    if (anterior > atual) {
        res.innerHTML += `<p>Uma variação de ${porVarBaixou}% pra baixo.</p>`
    } else {
        res.innerHTML += `<p>Uma variação de ${porVarAum}% pra cima.</p>`
    }
    

    

    
    
    
   

}