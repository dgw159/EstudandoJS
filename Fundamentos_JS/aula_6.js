function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2,4)
imprimirSoma(2)
imprimirSoma(2, 4, 5 , 6)
imprimirSoma()

function soma(a, b = 0){
    return a + b
}

soma(2, 4)
console.log(soma(2, 4))
console.log(soma(2))
console.log(soma())
