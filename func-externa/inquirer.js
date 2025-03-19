import inquirer from 'inquirer'

async function perguntar(question) {
    const resp = await inquirer.prompt(question)
    return resp
}

export {perguntar}