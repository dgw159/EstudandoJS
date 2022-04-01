// PI * raio * raio
const PI = 3.14;
let raio = 10;
let resultado = PI * raio * raio;

console.log("o valor da area eh: " + resultado + " m2.")
console.log(Math.PI)

let a = 7;
let b = 94;
let temp = a;

a = b;
b = temp; 

console.log(a)
console.log(b)


const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

// usando math

const rraio = 5.6
const aarea = Math.PI * Math.pow(rraio, 2)

console.log(aarea)
console.log(typeof Math)