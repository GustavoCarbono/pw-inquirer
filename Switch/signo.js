import { perguntar } from "../func-externa/inquirer.js"

var question = [
    {
        type: 'input',
        name: 'diaNasc',
        message: 'Qual dia você nasceu'
    },
    {
        type: 'input',
        name: 'mesNasc',
        message: 'Qual mes você nasceu'
    }
]

async function signo() {
    let res = await perguntar(question)
    let diaNasc = parseInt(res.diaNasc)
    let mesNasc = parseInt(res.mesNasc)
    switch(mesNasc) {
        case 1:
        if(diaNasc<21) {
            console.log("você é de capricórnio")
        } else {
            console.log("você é de aquário")
        }
        break
        case 2:
        if(diaNasc<20) {
            console.log("você é de aquário")
        } else {
            console.log("você é de peixes")
        }
        break
        case 3:
        if(diaNasc<21) {
            console.log("você é de peixes")
        } else {
            console.log("você é de áries")
        }
        break
        case 4:
        if(diaNasc<21) {
            console.log("você é de áries")
        } else {
            console.log("você é de touro")
        }
        break
        case 5:
        if(diaNasc<21) {
            console.log("você é de touro")
        } else {
            console.log("você é de gêmeos")
        }
        break
        case 6:
        if(diaNasc<21) {
            console.log("você é de gêmeos")
        } else {
            console.log("você é de câncer")
        }
        break
        case 7:
        if(diaNasc<23) {
            console.log("você é de câncer")
        } else {
            console.log("você é de leão")
        }
        break
        case 8:
        if(diaNasc<23) {
            console.log("você é de leão")
        } else {
            console.log("você é de virgem")
        }
        break
        case 9:
        if(diaNasc<24) {
            console.log("você é de virgem")
        } else {
            console.log("você é de libra")
        }
        break
        case 10:
        if(diaNasc<24) {
            console.log("você é de libra")
        } else {
            console.log("você é de escorpião")
        }
        break
        case 11:
        if(diaNasc<24) {
            console.log("você é de escorpião")
        } else {
            console.log("você é de sagitário")
        }
        break
        case 12:
        if(diaNasc<23) {
            console.log("você é de sagitário")
        } else {
            console.log("você é de capricórnio")
        }
        break
        default:
    }
}

export {signo}