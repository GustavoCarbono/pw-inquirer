import { idadeFor } from "../for/idade.js";
import { mediaFor } from "../for/media.js";
import { sexo } from "../for/sexo.js";

import { idadeWhile } from "../while/idade.js";
import { numero } from "../while/numero.js";
import { pares } from "../while/pares.js";

import { cantina } from "../Switch/cantina.js";
import { semana } from "../Switch/semana.js";
import { signo } from "../Switch/signo.js";

import { idadeIf } from "../If, else/idade.js";
import { mediaIf } from "../If, else/media.js";
import { mediaIf2 } from "../If, else/media2.js";

import { fahrenheit } from "../Aritmético/fahrenheit.js";
import { nota } from "../Aritmético/nota.js";
import { pi } from "../Aritmético/pi.js";

function escolha(opc1, opc2) {
    switch(opc2) {
        case 1:
            escolha1(opc1)
            break;
        case 2:
            escolha2(opc1)
            break;
        case 3:
            escolha3(opc1)
            break;
        default:
    }
}

function escolha1(opc) {
    switch(opc) {
        case 1:
            fahrenheit()
            break
        case 2:
            idadeIf()
            break
        case 3:
            cantina()
            break
        case 4:
            idadeWhile()
            break
        case 5:
            idadeFor()
            break
        default:
    }
}

function escolha2(opc) {
    switch(opc) {
        case 1:
            nota()
            break
        case 2:
            mediaIf()
            break
        case 3:
            semana()
            break
        case 4:
            numero()
            break
        case 5:
            mediaFor()
            break
        default:
    }
}

function escolha3(opc) {
    switch(opc) {
        case 1:
            pi()
            break
        case 2:
            mediaIf2()
            break
        case 3:
            signo()
            break
        case 4:
            pares()
            break
        case 5:
            sexo()
            break
        default:
    }
}

export {escolha}