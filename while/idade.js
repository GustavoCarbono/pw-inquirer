import { perguntar } from "../func-externa/inquirer.js"

async function idadeWhile() {
    let anoAtual = await perguntar(anoAtual, "Digite o ano atual")
    i = 1
    while (i<=6) {
        let anoNasc = await perguntar(anoNasc, "Qual é seu ano de nascimento")
        let idade = anoAtual - anoNasc
        i++
        if (idade<18) {
            console.log("Você tem " + idade + " e você é menor de idade")
        } else {
            console.log("Você tem " + idade + " e você é mairo de idade")
        }
    }
}

export {idadeWhile}