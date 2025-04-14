

function clicar() {
    let medida = window.prompt(`Digite uma distância em metros (m).`)
    let imed = Number.parseFloat(medida)
    
    let dm = imed * 10
    let cm = imed * (10**2)
    let mm = imed * (10**3)
    let dam = imed / 10
    let hm = imed / (10**2)
    let km = imed / (10**3)

    let res = window.document.getElementById('ires')
    res.innerHTML = ''
    res.innerHTML = `<p><strong><big>A distância de ${medida} metros, corresponde a...</big></strong></p>`
    res.innerHTML += `<p>${km} quilômetros (Km)</p>
    <p>${dam} decâmetros (Dam)</p>
    <p>${hm} hectômetros (Hm)</p>
    <p>${dm} decímetros (dm)</p>
    <p>${cm} centimetros (cm)</p>
    <p>${mm} milimetros (mm)</p>`
}

