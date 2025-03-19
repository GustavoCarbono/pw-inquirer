import { perguntar } from "../func-externa/inquirer"

async function idadeFor() {
    let idadeVelho = 10000
    let idadeNovo = 0

    let anoAtual = await perguntar(anoAtual, "Digite o ano Atual")

    for(let i = 0; i <= 10; i++) {
        let anoNasc = await perguntar(anoNasc, "Digite o ano de nascimento")
        idade = anoAtual - anoNasc
        console.log(idade)
        if(idade>idadevelho) {
            idadeVelho = idade
        }
        if(idade<idadeNovo) {
            idadeNovo = idade
        }
    }
    console.log("A idade do mais novo é " + idadeNovo)
    console.log("A idade do mais velho é " + idadeVelho)
}

export {idadeFor}