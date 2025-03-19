import { perguntar } from "../func-externa/inquirer.js"

var question = [
    {
        type: 'input',
        name: 'n1',
        message: 'Digite o valor 1'
    },
    {
        type: 'input',
        name: 'n2',
        message: 'Digite o valor 2'
    }
]

async function nota() { 
    let res = await perguntar(question)
    let nota1 = parseInt(res.n1)
    let nota2 = parseInt(res.n2)
    let media = (nota1+nota2)/2
    System.out.println(media)
}

export {nota}