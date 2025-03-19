import { perguntar } from "../func-externa/inquirer.js"

var question = {
    type: 'input',
    name: 'celsius',
    message: 'Digite a temperatura em graus celsius'    
}

async function fahrenheit() {
    let res = await perguntar(question)
    let celsius = parseInt(res.celsius)
    let Fahrenheit = celsius * 1.8 + 32
    console.log(Fahrenheit)
}

export {fahrenheit}