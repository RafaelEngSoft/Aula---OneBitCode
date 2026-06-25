const entrada = window.prompt("Digite o valor em metros (m) que deseja converter: ")
const valorMetros = parseFloat(entrada)

const opcao = parseFloat(window.prompt("Selecione a opção que deseja converter: \n1. Milímetro (mm) \n2. Centímetro (cm) \n3. Decímetro (dm) \n4. Decâmetro (dam) \n5. Hectômetro (hm) \n6. Quilômetro (km")


/* 
Conversão de metros (m)	Fórmula

Metros → Milímetros (mm)	mm = m × 1000
Metros → Centímetros (cm)	cm = m × 100
Metros → Decímetros (dm)	dm = m × 10
Metros → Decâmetros (dam)	dam = m ÷ 10
Metros → Hectômetros (hm)	hm = m ÷ 100
Metros → Quilômetros (km)	km = m ÷ 1000

*/)

let calculo = 0

switch (opcao) {
    case 1:
        calculo = valorMetros * 1000
        window.alert("Metros: " + valorMetros + "\nMilímetros: " + calculo)
        break;
    case 2:
        calculo = valorMetros * 100
        window.alert("Metros: " + valorMetros + "\nCentímetros: " + calculo)
        break
    case 3:
        calculo = valorMetros * 10
        window.alert("Metros: " + valorMetros + "\nDecímetros: " + calculo)
        break
    case 4:
        calculo = valorMetros / 10
        window.alert("Metros: " + valorMetros + "\nDecâmetros: " + calculo)
        break
    case 5:
        calculo = valorMetros / 100
        window.alert("Metros: " + valorMetros + "\nHectômetros: " + calculo)
        break
    case 6:
        calculo = valorMetros / 1000
        window.alert("Metros: " + valorMetros + "\nQuilômetros: " + calculo)
        break
    default:
        window.alert("Nenhuma opção selecionada! Finalizando...")
        break;
}

