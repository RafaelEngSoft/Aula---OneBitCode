/*

1. Perguntar o nome do turista.
2. Perguntar se deseja adicionar uma cidade a lista.
3. perguntar se deseja adicionar outra cidade a lista.
4. Caso a respota seja não, encerrar o loop.
5. Informe quais cidades foram adicionadas e quantas foram no total.

*/

const nome = prompt(
    "Olá turista! Qual é o seu nome?"
)

let cidades = ""
let contagem = 0

let continuar = prompt(
    "Você visitou alguma cidade? (Sim/Não)"
)

while (continuar === "Sim") {
    let adicinarCidade = prompt(
        "Qual é o nome da cidade visitada?"
    )

    cidades += " - " + adicinarCidade + "\n"

    contagem++

    continuar = prompt(
        "Você visitou mais alguma cidade? (Sim/Não)"
    )
}

window.alert(
    "Turista: " + nome +
    "\nQuantidade de cidade visitada:  " + contagem +
    "\nCidades visitadas:\n" + cidades
)

