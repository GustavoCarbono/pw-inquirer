import { perguntar } from "../func-externa/inquirer.js"

async function numero() {
    let lim = await perguntar(lim, "Qual a quantidade de número que você deseja somar")
    let i = 1
    let x = 2
    while (x<=lim) {
        i = i + x
        x++
        console.log(i)
    }
}

export {numero}