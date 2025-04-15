function reajuste(){
    let nome = window.prompt('Qual é o nome do funcionário?')

    let salarioString =  window.prompt(`Qual é o salário de ${nome}?`)
    let salario;
    let salarioFormatado;

    if (salarioString !== null) {
        let salarioLimpo = salarioString.replace(/[^\d.,-]/g, '')
        salarioLimpo = salarioLimpo.replace(',', '.')
        salario = parseFloat(salarioLimpo)

        if (!isNaN(salario)) {
            salarioFormatado = salario.toLocaleString('pt-BR', {
              style:'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,  
            })
           
        }else {
            window.alert('Entrada invalida')
            return
        }
    }else {
            window.alert('nenhum valor')
            return
        }  
    
        let porcentagem = window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)
        let procentagemNum = parseFloat(porcentagem)

        if (!isNaN(salario) && !isNaN(procentagemNum)){
        let reaj = (salario * procentagemNum) / 100
        let soma = salario + ((salario * procentagemNum) / 100)
        let res = window.document.getElementById('res')
        
        res.innerHTML = `<p><strong><big>${nome} recebeu um aumento salarial!</big></strong></p>`
        res.innerHTML += `<p>O salário atual era ${salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 })}.</p>
        <p>Com um aumento de ${porcentagem}%, o salário vai aumentar ${reaj.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 })}.</p><p> E a partir daí, ${nome} vai passar a ganhar ${soma.toLocaleString('pt-BR', { style:'currency', currency:'BRL', minimumFractionDigits:2, maximumFractionDigits:2})}.`
        }else {
            window.alert("Erro: Salário inválido.")
        }
        
    }
    

   

  
