const Texto = function(a){
    return "Olá, " + a + "!"
}

console.log(Texto("David"))

/*
function imprimir(NOME){
    const sau = "Olá"
    return [sau, NOME].join(', ').concat("!")
}

console.log(imprimir("David"))

*/

const idade = function(a){
    const b = 365 
    return b * a
}

console.log(idade(25))
console.log(idade(70))