const palavra = prompt("Informe uma palavra")
let palavraInvertida = ""

for(let i = palavra.length - 1; i >= 0; i--){
    palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida) {
    alert(palavra + " é uma palíndromo!")
}else{
    alert(
        palavra + " Não é uma palíndromo\n\n" +
        palavra + " != " + palavraInvertida
    )
}