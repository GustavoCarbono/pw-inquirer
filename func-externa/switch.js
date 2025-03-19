import { func } from "./func.js";

console.log(func[1])

function escolha(opc1, opc2) {
    func[opc1--][opc2--]
}

export {escolha}