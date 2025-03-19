const System = {
    out: {
        println: function (elemento) {console.log(elemento)}
    }
}
let idade = 17
if(idade<10) {
    System.out.println("criança")
} else if(idade>=10 && idade<18) {
    System.out.println("adolescente")
} else if(idade>=18 && idade<60) {
    System.out.println("adulto")
} else {
    System.out.println("idoso")
}