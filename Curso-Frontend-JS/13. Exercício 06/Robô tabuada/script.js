const numero = parseFloat(prompt("Digite um número: "))
const limite = 5

for(i = 0; i <= limite; i++){
    let calculo = i * numero
    console.log(numero + " * " + i + " = " + calculo)
}