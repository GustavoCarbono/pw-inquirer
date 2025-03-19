const System = {
    out: {
        println: function (elemento) {console.log(elemento)}
    }
}
let nota1 = 10
let nota2 = 10
let media = Math.abs((nota1+nota2)/2)
if(media<4) {
    System.out.println("reprovado")
}
else if(media<6) {
System.out.println("você está de recuperação")
}
else {
    System.out.println("aprovado")
}