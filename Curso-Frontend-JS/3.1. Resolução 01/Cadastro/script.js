const primeiroNome = prompt("Informe o primeiro nome do recruta:");
const segundoNome = prompt("Informe o segundo nome do recruta:");
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta?");
const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta?");

window.alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome: " + primeiroNome + segundoNome +
    "\nCampo de estudo: " + campoDeEstudo +
    "\nAno de nascimento: " + (2026 - anoDeNascimento)
)