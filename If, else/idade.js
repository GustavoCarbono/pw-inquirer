import { perguntar } from "../func-externa/inquirer.js"

var question = {
    type: 'input',
    name: 'idade',
    message: 'Qual é sua idade'
}
async function idadeIf() {
    let res = await perguntar(question)
    let idade = parseInt(res.idade)
    if(idade<10) {
        console.log("criança")
    } else if(idade>=10 && idade<18) {
        console.log("adolescente")
    } else if(idade>=18 && idade<60) {
        console.log("adulto")
    } else {
        console.log("idoso")
    }
}

export {idadeIf}