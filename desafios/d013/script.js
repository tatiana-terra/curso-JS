function notas() {
    let aluno = window.prompt('Qual é o nome do aluno?')

    
    let nota1 = window.prompt(`Primeira nota de ${aluno}`)
    nota1 = nota1.replace(',','.')
    let n1 = Number.parseFloat(nota1)
    let n1Form = n1.toFixed(2)
    n1Form = n1Form.replace('.',',')

    let nota2 = window.prompt(`Segunda nota de ${aluno}`)
    nota2 = nota2.replace(',','.')
    let n2 = Number.parseFloat(nota2)
    let n2Form = n2.toFixed(2)
    n2Form = n2Form.replace('.',',')
    

    let res = window.document.getElementById('res')
    res.innerHTML = `<p><strong><big>Analisando a situação de ${aluno}</big></strong></p>`
    
   
    let media = ((n1 + n2 ) / 2)
    media = parseFloat(media).toFixed(2)
    m = media.replace('.',',')

    res.innerHTML += `<p>Com as notas ${n1Form} e ${n2Form}, a <strong> média é ${media}</p>`

    if ( media < 3.00){  
        let notaAluno = window.document.getElementById('notaAluno')      
        notaAluno.innerHTML = `<p>Com média abaixo de 3,0, o aluno está <strong><mark style = 'background-color:#e748486b;color:red;'>REPROVADO</mark></p>`
    }else if (media >= 3 && media < 6){
        notaAluno.innerHTML = `<p>Com média entre 3,0 e 6,0 o aluno está <strong><mark style = 'background-color:#ffff00;color:#735801;'>RECUPERAÇÃO</mark></p>`
    }else {
        notaAluno.innerHTML = `<p>Com média acima de 6,0 o aluno está <strong><mark style = 'background-color:#adff2f;color:#008000;'>APROVADO</mark></p>`
    }

   
    
}