import { perguntar } from "../func-externa/inquirer.js"

var question = {
        type: 'input',
        name: 'diaSemana',
        message: 'Qual é o dia da semana'
    }

async function semana() {
    let res = await perguntar(question)
    let diaSemana = parseInt(res.diaSemana)
    switch(diaSemana) {
        case 1: console.log("domingo")
            break
        case 2: console.log("segunda")
            break
        case 3: console.log("terça")
            break
        case 4: console.log("quarta")
            break
        case 5: console.log("quinta")
            break
        case 6: console.log("sexta")
            break
        case 7: console.log("sábado")
            break
        default:
    }
}

export {semana}