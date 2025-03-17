let operacion = prompt("Ingrese la operación (+, -, *, /, %):");
let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));

if (isNaN(numero1)) {
    console.error("Debe ingresar números válidos")
}

if (isNaN(numero2)) {
    console.error("Debe ingresar números válidos")
}

if (operacion === '/') {
    if (numero2 === 0) {
        console.log("Error: No se puede dividir por cero.");
    }
}

if (operacion === '%') {
    if (numero2 === 0) {
        console.log("Error: No se puede calcular el módulo con divisor cero.");
    }
}

let resultado;
if (operacion === "+") {
    resultado = numero1 + numero2;
} else if (operacion === "-") {
    resultado = numero1 - numero2;
} else if (operacion === "*") {
    resultado = numero1 * numero2;
} else if (operacion === "/") {
    resultado = numero1 / numero2;
} else if (operacion === "%") {
    resultado = numero1 % numero2;
} else {
    console.log("Error: Operación no válida.");
}

console.log("El resultado de " + numero1 + " " + operacion + " " + numero2 + " es: " + resultado);