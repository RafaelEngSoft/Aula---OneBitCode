const x = parseFloat(prompt("Informe o primeiro número"));
const y = parseFloat(prompt("Informe o segundo número"));

const soma = x + y;
const multiplicacao = x * y;
const subtracao = x - y;
const divisao = x / y;


window.alert(
    "Resultado: \n" +
    "\nSoma = " + soma +
    "\nMultiplicação = " + multiplicacao +
    "\nSubtração = " + subtracao +
    "\nDivisão = " + divisao
)