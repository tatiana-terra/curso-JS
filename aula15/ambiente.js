let num =[ 5, 8, 9, 2, 3]
num.push(1)//add um valor na ultima posição
//a ordem nas linhas do código influenciam o funcionamento do código
num.sort()//coloca em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)//num.length é o comprimento do vetor
console.log(`O primeiro valor do vetor é ${num[0]}.`)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

let posição = num.indexOf(4)
if (posição == -1) {
    console.log(`O valor nçao foi encontrado`)
} else {
    console.logh(`O valor 4 está na posição ${posição}`)
}

