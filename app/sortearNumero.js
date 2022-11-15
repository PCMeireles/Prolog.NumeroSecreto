
const menorValor = 2
const maoirValor = 5


const numeroSecreto = geraNumeroAleatorio()

function geraNumeroAleatorio() {

    return parseInt(Math.random() * maoirValor + 1)
    
}
console.log('numero Secreto:', numeroSecreto)

const elementoMenorValor = document.getElementById("menor-valor")
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById("maior-valor")
elementoMaiorValor.innerHTML =  maoirValor