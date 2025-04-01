function carregar() {
    var msg = window.document.getElementById('msg')//objeto criado para a mensagem
    var img = window.document.getElementById('imagem')//objeto criado para a foto
    var data = new Date()//pegar a data atual
    var hora = data.getHours()//pegara a hora atual
  
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas!`//mensagem de dentro da div msg

    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#D9C091'
    } else if(hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#F2E529'
    }else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#012340'
    }
}




