function calcular() {
    let a = window.prompt('Qual é o valor de a?')
    let aNum = Number(a)
    let b = window.prompt('Qual é o valor de b?')
    let bNum = Number(b)
    let c = window.prompt('Qual é o valor de c?')
    let cNUm = Number(c)

    let delta = (b**2) - 4*(a)*(c)

    let res = document.getElementById('res')
    res.innerHTML = `<p><strong><big>Resolvendo Bhaskara</big></strong></p>`
    res.innerHTML += `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c}=0</strong></p>
    <p>O calculo realizado será <strong> &#916;= ${b}<sup>2</sup> - 4 . ${delta} . ${c}</strong>
    <p> O valor calculado foi <b><mark>&#916; = ${delta}</mark></b> `
}
//x = -b ± √(b² – 4ac)/ 2a