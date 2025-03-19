const System = {
    out: {
        println: function (elemento) {console.log(elemento)}
    }
}
let diaNasc = 22
let mesNasc = 7
switch(mesNasc) {
    case 1: 
    if(diaNasc<21) {
        System.out.println("você é de capricórnio")
    } else {
        System.out.println("você é de aquário")
    }
    break
    case 2: 
    if(diaNasc<20) {
        System.out.println("você é de aquário")
    } else {
        System.out.println("você é de peixes")
    }
    break
    case 3: 
    if(diaNasc<21) {
        System.out.println("você é de peixes")
    } else {
        System.out.println("você é de áries")
    }
    break
    case 4: 
    if(diaNasc<21) {
        System.out.println("você é de áries")
    } else {
        System.out.println("você é de touro")
    }
    break
    case 5: 
    if(diaNasc<21) {
        System.out.println("você é de touro")
    } else {
        System.out.println("você é de gêmeos")
    }
    break
    case 6: 
    if(diaNasc<21) {
        System.out.println("você é de gêmeos")
    } else {
        System.out.println("você é de câncer")
    }
    break
    case 7: 
    if(diaNasc<23) {
        System.out.println("você é de câncer")
    } else {
        System.out.println("você é de leão")
    }
    break
    case 8: 
    if(diaNasc<23) {
        System.out.println("você é de leão")
    } else {
        System.out.println("você é de virgem")
    }
    break
    case 9: 
    if(diaNasc<24) {
        System.out.println("você é de virgem")
    } else {
        System.out.println("você é de libra")
    }
    break
    case 10: 
    if(diaNasc<24) {
        System.out.println("você é de libra")
    } else {
        System.out.println("você é de escorpião")
    }
    break
    case 11: 
    if(diaNasc<24) {
        System.out.println("você é de escorpião")
    } else {
        System.out.println("você é de sagitário")
    }
    break
    case 12: 
    if(diaNasc<23) {
        System.out.println("você é de sagitário")
    } else {
        System.out.println("você é de capricórnio")
    }
    break
    default: break
}