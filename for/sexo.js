function sexo() {
    for(let i = 1; i <= 100; i++) {
        let res = i % 10
        if(res==0) {
        console.log("Multiplo de 10")
        }
        console.log(i)
    }
}

export {sexo}