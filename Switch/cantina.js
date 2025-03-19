import { perguntar } from "../func-externa/inquirer.js"

var question = {
        type: 'input',
        name: 'codigo',
        message: 'Qual o código do produto'
    }

async function cantina() {
    let res = await perguntar(question)
    let codigo = parseInt(res.codigo)
    switch(codigo) {
        case 1: 
            console.log("Cachorro Quente")
            break
        case 2: 
            console.log("Cheeseburguer")
            break
        case 3: 
            console.log("X-Salada")
            break
        case 4: 
            console.log("Misto Quente")
            break
        case 5: 
            console.log("Pão na Chapa")
            break
    }
}

export {cantina}