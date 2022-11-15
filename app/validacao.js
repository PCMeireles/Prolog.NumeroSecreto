function verificaValorValido(chute){

    const numero = +chute

    if (chuteInvalido(numero)) {
        // console.log("não é um numero")
        elementoChute.innerHTML += '<div>não é um numero, cabeção !</div>'
        return
    }

    if (chuteForaDoValor(numero)) {
        // console.log(`numero secreto inválido: deve estar entre: ${menorValor} e ${maoirValor}`)
        elementoChute.innerHTML += `<div>numero secreto está entre: ${menorValor} e ${maoirValor}</div>`
        return
        }

    if (numero === numeroSecreto) {
            document.body.innerHTML = `
            <h2>Você acertou !!</h2>
            <h3>o numero secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML +=  `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else {
        elementoChute.innerHTML +=  `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }


}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function chuteForaDoValor(numero) {
    return numero > maoirValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})