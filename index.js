import { perguntar } from "./func-externa/inquirer"
import { escolha } from "./func-externa/switch"

var opc1 = perguntar(opc1, "Escolha a opção [1], if e else[2], switch[3], while[4], for[5]")
var opc2 = perguntar(opc2, "Escolha o exercício [1], [2], [3]")

escolha(opc1, opc2)