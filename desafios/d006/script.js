function converter() {
    let temp = window.prompt('Digite uma temperatura em °C(Celsius):')
    let itemp = Number.parseFloat(temp)
    let kel = (itemp + 273.15).toFixed(2)
    
    let far = ((itemp * 1.8) + 32).toFixed(2)
    
    let res= window.document.getElementById('ires')


    res.innerHTML = (`<p><strong><big>A temperatura de ${itemp}°C, corresponda a ...</big></strong></p>`)
    res.innerHTML += (`<p>${kel} °K (Kelvin) </p><p> ${far}°F ( Fahrenheit)</p>`)
} 
