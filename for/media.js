import { perguntar } from "../func-externa/inquirer.js"

var question = {
        type: 'input',
        name: 'ax',
        message: 'Digite o valor desejado'
    }

async function mediaFor() {
    let a = []
    let soma = 0
    for(let i=0; i<10; i++) {
        let res = await perguntar(question)
        a[i] = parseInt(res.ax)
        soma = soma + a[i]
    }
    let media = soma/10
    console.log("A média é " + media)
}

export {mediaFor}