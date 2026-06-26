let velocidade = 0

do {
    window.alert("A Velocidade do veiculo é " + velocidade + "km/hr")
    velocidade -= 20    
} while (velocidade > 0);

window.alert("Velocidade final: " + velocidade + "km/hr")