// Calculadora simples demonstrando entrada de dados, operadores aritméticos e atribuição.

const numero1 = Number(prompt("Informe o primeiro número:"));
const numero2 = Number(prompt("Informe o segundo número:"));

let resultado = numero1 + numero2;
console.log(`Soma: ${numero1} + ${numero2} = ${resultado}`);

resultado = numero1 - numero2;
console.log(`Subtração: ${numero1} - ${numero2} = ${resultado}`);

resultado = numero1 * numero2;
console.log(`Multiplicação: ${numero1} * ${numero2} = ${resultado}`);

if (numero2 !== 0) {
  resultado = numero1 / numero2;
  console.log(`Divisão: ${numero1} / ${numero2} = ${resultado}`);
} else {
  console.log("Divisão: não é possível dividir por zero.");
}

resultado = numero1 % numero2;
console.log(`Resto: ${numero1} % ${numero2} = ${resultado}`);

let acumulador = numero1;
acumulador += numero2;
console.log(`Após acumulador += numero2: ${acumulador}`);

acumulador -= numero2;
console.log(`Após acumulador -= numero2: ${acumulador}`);

acumulador *= numero2;
console.log(`Após acumulador *= numero2: ${acumulador}`);

if (numero2 !== 0) {
  acumulador /= numero2;
  console.log(`Após acumulador /= numero2: ${acumulador}`);
} else {
  console.log("Não é possível demonstrar '/=' com divisor zero.");
}
