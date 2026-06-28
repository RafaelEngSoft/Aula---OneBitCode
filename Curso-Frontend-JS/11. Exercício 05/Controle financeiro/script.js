/**
 * Exibir a quantidade de dinheiro diheiro disponível.
 * Perguntar qual a opção o usuário deseja:
 * Adicionar, Remover ou sair.
 * Após a operação o deve retornar ao menu, ate que a opção sair seja selecionada.
 */

let saldo = 0;
let opcao = "";

do {
    opcao = prompt(
        "Bem-vindo ao controle financeiro" +
        "\nSaldo atual: " + saldo + "\n\n" +
        "\n1. Adicionar saldo." +
        "\n2. Remover saldo" +
        "\n3. Sair"
    )

    switch (opcao) {
        case "1":
            const adicionar = parseFloat(prompt("Qual o valor que deseja adicionar?"))
            saldo += adicionar
            alert("Saldo atualizado: " + saldo)

            break;
        case "2":
            const remover = parseFloat(prompt("Qual o valor que deseja remover?"))
            if (remover > saldo) {
                alert("Saldo insuficiente!")
            } else {
                saldo -= remover
                alert("Saldo atualizado: " + saldo)
            }
            break;
        case "3":
            alert("Você escolheu sair.")
            break

        default:
            alert("Opção inválida!")
            break;
    }
} while (opcao != "3");

alert("Programa encerrado...")