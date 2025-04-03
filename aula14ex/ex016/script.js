function contar() {
    let fim = document.getElementById('txtf') 
    let passo = document.getElementById('txtp')
    let ini = document.getElementById('txti')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ 
       res.innerHTML = 'Impossível contar!' 
 
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1//Se ele for <=0 ele vai considerar que passo seja 1            
        }
        
        if (i < f){
            //Contagem crescente
            for (let c = i; c <= f; c += p){/*contador(c) recebe(=) inicio(i). enquanto contador(c) for menor ou igual(<=) a fim(f), o contador(c) vai receber ele mesmo mais(+=) o passo(p).*/
                res.innerHTML += ` ${c} \u{1F449}`/*vai ser o que o res já tem(contando) mais o c*/
            }          
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {/*contador(c) recebe(=) inicio(i). enquanto contador(c) for menor ou igual(<=) a fim(f), o contador(c) vai receber ele mesmo menos(-=) o passo(p).*/
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}

