function calcularSalario(hora, valorPorHora){
    let c
    c = hora * valorPorHora
    return "Salario igual a RS: " + c
}

console.log(calcularSalario(150, 40.5))

function receberNomeDoMes(numero) {
    switch(numero){
    case 1:
    return "janeiro";
    case 2:
    return "fevereiro";
    case 3:
    return "março";
    case 4:
    return "abril";
    case 5:
    return "maio";
    case 6:
    return "junho";
    case 7:
    return "julho";
    case 8:
    return "agosto";
    case 9:
    return "setembro";
    case 10:
    return "outubro";
    case 11:
    return "novembro";
    case 12:
    return "dezembro";
    }
    }


console.log(receberNomeDoMes(1))
console.log(receberNomeDoMes(9))    
