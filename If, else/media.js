const System = {
    out: {
        println: function (elemento) {console.log(elemento)}
    }
}
let nota1 = 10
let nota2 = 10
let media = (nota1+nota2)/2
if(media<6) {
    System.out.println("reprovado")
}
else {
    System.out.println("aprovado")
}