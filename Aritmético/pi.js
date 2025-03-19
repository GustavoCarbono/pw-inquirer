import { perguntar } from "../func-externa/inquirer.js"

var question = {
    type: 'input',
    name: 'raio',
    message: 'Qual o raio do circulo'
}

async function pi() {
    let res = await perguntar(question)
    const pi = 3.14
    var raio = parseFloat(res.raio)
    console.log(pi*raio*2)
}

export {pi}