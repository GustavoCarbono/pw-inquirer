import { perguntar } from "./func-externa/inquirer.js"
import { escolha } from "./func-externa/switch.js"

var question = [
    {
        type: 'input',
        name: 'opc1',
        message: 'Escolha a opção aritmético[1], if e else[2], switch[3], while[4], for[5]'
    },
    {
        type: 'input',
        name: 'opc2',
        message: 'Escolha o exercício [1], [2], [3]'
    }
]

var res = await perguntar(question)

var opc1 = res.opc1
var opc2 = res.opc2


escolha(opc1, opc2)