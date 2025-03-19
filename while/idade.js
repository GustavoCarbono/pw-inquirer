import { perguntar } from "../func-externa/inquirer.js"

var question = [
    {
        type: 'input',
        name: 'anoAtual',
        message: 'Digite o ano atual'
    },
    {
        type: 'input',
        name: 'anoNasc',
        message: 'Digite o ano de nascimento'
    }
]

async function idadeWhile() {
    let res1 = await perguntar(question[0])
    let anoAtual = parseInt(res1.anoAtual)
    let i = 1
    while (i<=6) {
        let res2 = await perguntar(question[1])
        let anoNasc = parseInt(res2.anoNasc)
        let idade = anoAtual - anoNasc
        i++
        if (idade<18) {
            console.log("Você tem " + idade + " e você é menor de idade")
        } else {
            console.log("Você tem " + idade + " e você é maior de idade")
        }
    }
}

export {idadeWhile}