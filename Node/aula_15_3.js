const contadorA = require('./aula_15_1')
const contadorB = require('./aula_15_1')

const contadorC = require('./aula_15_2')()
const contadorD = require('./aula_15_2')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor)
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor)
console.log(contadorD.valor)
