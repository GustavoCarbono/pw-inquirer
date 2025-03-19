import { perguntar } from "../func-externa/inquirer"

async function pares() {
    let lim = await perguntar(lim, "Qual a quantidade de número que você deseja somar")
    let x = 0
    let i = 0
    while (x<lim) {
        i = x + 2
        x+=2
        console.log(i)
    }
}

export {pares}