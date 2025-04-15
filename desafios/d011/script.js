function verificar() {
    let ano = window.prompt('Qual é o ano que você quer verificar?')
    let anoNum = Number(ano)
    let res = window.document.getElementById('res')
    let biss =  window.document.getElementById('biss')
    if ( (anoNum%4) == 0  && ((ano[3,4] !=0,0) || anoNum%400 == 0) ){
        res.innerHTML = `<p><strong><big>Analisando o ano de ${ano}...</big></strong></p>` 
        biss.innerHTML = `<p>O ano de ${ano} <strong><mark style = 'background-color:#adff2f;color:green;'>É BISSEXTO</mark></strong>\u{2705}</p>`     
         
    }else {
        res.innerHTML = `<p><strong><big>Analisando o ano de ${ano}...</big></strong></p>` 
        biss.innerHTML = `<p>O ano de ${ano} <strong><mark style = 'background-color:#fb525275;color:red;'>NÃO É BISSEXTO</mark></strong>\u{274C}</p>` 
    }
}