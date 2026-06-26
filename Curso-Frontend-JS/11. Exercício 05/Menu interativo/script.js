/**
 * 1. O sistema deve iniciar mostrando 5 opções no menu.
 * 2. As 04 primeiras não precisam de nenhuma funcionalidade específica.
 * 3. A última opção deve ser a opção "Encerrar".
 * 4. Ao clicar em uma das 04 primeiras opções, o programa deve mostrar qual foi a opção selecionada, e volta para o menu principal
 * 5. Ao selecionar a opção "Encerrar", o sistemas deve ser encerrado exibindo uma mensagem "Encerrando sistema! Até logo..."
 */
let opcao = ""

do {
    opcao = prompt(
        "========== Menu interativo ==========" +
        "\nSelecione uma das opções:" +
        "\n1. Financeiro" +
        "\n2. Almoxarifado" +
        "\n3. Expedição" +
        "\n4. Produção" +
        "\n5. Encerrar" +
        "\n==============================="
    )

    switch (opcao) {
        case "1":
            alert("Você selecionou a opção Financeiro!")
            break;
        case "2":
            alert("Você selecionou a opção Almoxarifado!")
            break;
        case "3":
            alert("Você selecionou a opção Expedição!")
            break;
        case "4":
            alert("Você selecionou a opção Produção!")
            break;
        case "5":
            alert("Você selecionou a opção Encerrar!")
            break;

        default:
            alert("Opção inválida!")
            break;
    }
} while (opcao != "5");

alert("Sistema encerrado! Até logo...")