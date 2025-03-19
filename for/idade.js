import { perguntar } from "../func-externa/inquirer.js"

var question = [
    {
        type: 'input',
        name: 'anoAtual',
        message: 'Digite o ano Atual'
    },
    {
        type: 'input',
        name: 'anoNasc',
        message: 'Digite o ano de nascimento'
    }
]

async function idadeFor() {

    let idadeVelho = 10000
    let idadeNovo = 0

    let res1 = await perguntar(question[0])

    let anoAtual = parseInt(res1.anoAtual)

    for(let i = 0; i <= 10; i++) {
        let res2 = await perguntar(question[1])
        let anoNasc = parseInt(res2.anoNasc)
        let idade = anoAtual - anoNasc
        console.log(idade)
        if(idade>idadeVelho) {
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