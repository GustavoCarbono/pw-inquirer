import inquirer from 'inquirer'

async function perguntar(name, message) {
    let question = {
        type: 'input',
        name: name,
        message: message
    }
    let res = await inquirer.prompt(question)
    return res
}

export {perguntar}