import { perguntar } from "../func-externa/inquirer.js"

var question= [
    {
        type: 'input',
        name: 'nota1',
        message: 'Qual é a primeira nota'
    },
    {
        type: 'input',
        name: 'nota2',
        message: 'Qual é a segunda nota'
    }
]

async function mediaIf2() {
    let res = await perguntar(question)
    let nota1 = parseInt(res.nota1)
    let nota2 = parseInt(res.nota2)
    let media = Math.abs((nota1+nota2)/2)
    if(media<4) {
        console.log("reprovado")
    }
    else if(media<6) {
    console.log("você está de recuperação")
    }
    else {
        console.log("aprovado")
    }
}

export {mediaIf2}