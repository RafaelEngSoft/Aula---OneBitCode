// Veículo 01
const veiculo1 = prompt("Digite o modelo do primeiro carro: ")
const velocidade1 = prompt("Qual a velocidade do " + veiculo1 + "?")

// Veículo 02
const veiculo2 = prompt("Digite o modelo do segundo carro: ")
const velocidade2 = prompt("Qual a velocidade do " + veiculo2 + "?")

// Verificando qual é o mais rápido.
if (velocidade1 > velocidade2){
    window.alert(veiculo1 +" tem a velocidade de " + velocidade1 + " portante, é o mais rápido.")
} else if(velocidade1 < velocidade2){
    window.alert(veiculo2 + " tem a velocidade de " + velocidade2 + " portanto, é o mais rápido.")
}else if (velocidade1 == velocidade2){
    window.alert("Ambos veículos tem a mesma velocidade")
}else{
    window.alert("Erro! tente novamente.")
}



