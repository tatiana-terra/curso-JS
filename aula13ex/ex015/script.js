function verificar(){
    var data = new Date()//pegar a data atual
    var ano = data.getFullYear() //ano atual- full year é quatro digitos.
    var fano = document.getElementById('txtano')//fano-formulário ano q foi o ano que veio no formulário
    var res = document.querySelector('div#res') //resultado 

    if (fano.value.length == 0 || Number(fano.value) > ano) {//se o fano.value(valor em numero do ano digitado).lenght(o cara nao digitou o ano)ou então fano.value for > q o ano atual vai mostrar a mensagem.
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {//Os dados foram preenchidos
        var fsex = document.getElementsByName('radsex')//agora eu pego o sexo pelo name(tem q ter o mesmo nome qudo é radio)
        var idade = ano - Number(fano.value)//idade é igual a ano atual(ano) - valor digitado
        var genero = ''//vazio pq a pessoa vais escolher
        var img = document.createElement('img')//ele vai criar uma tag img
        img.setAttribute('id', 'foto')//com id foto


        if (fsex[0].checked) {//0 e 1 são as duas bolinhas de escolha
            genero = 'Homem'
            document.body.style.background = '#57c9df'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            document.body.style.background = '#df577e'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)//vai add depois da parte de cima ser executada
    }
}