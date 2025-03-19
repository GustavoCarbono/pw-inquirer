import { perguntar } from "../func-externa/inquirer"

async function media() {
    let a = []
    let soma = 0
    for(let i=0; i<10; i++) {
        a[i] = await perguntar(a[i], "Digite o valor desejado")
        soma = soma + a[i]
    }
    let media = soma/10
    console.log("A média é " + media)
}

export {media}