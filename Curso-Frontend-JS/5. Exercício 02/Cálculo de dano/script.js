// Personagem 01:
const nome_1 = "Naruto"
const poderATK_1 = 50
const poderDEF_1 = 30
let pontosVida_1 = 100
const escudo_1 = 0

// Personagem 02:
const nome_2 = "Sakura"
const poderATK_2 = 50
const poderDEF_2 = 50
let pontosVida_2 = 100
const escudo_2 = 1

// Simulando combate Personagem 01 atacando personagem 02
if (poderATK_1 > poderDEF_2 && escudo_2 == 0) {
    let danoRecebido = poderATK_1 - poderDEF_2
    pontosVida_2 = Math.max(0, pontosVida_2 - danoRecebido) // Evita vida negativa
   
    if (pontosVida_2 > 0) {
        console.log(`O personagem: ${nome_2} sobreviveu com ${pontosVida_2} pontos de vida`)
    } else {
        console.log(`O personagem ${nome_2} não possui pontos de vida!`)
        console.log(`O personagem ${nome_1} é o vencedor!!`)
    }
} else if (poderATK_1 > poderDEF_2 && escudo_2 == 1) {
    let danoRecebido = Math.floor((poderATK_1 - poderDEF_2) / 2)
    pontosVida_2 = Math.max(0, pontosVida_2 - danoRecebido)
    
    if (pontosVida_2 > 0) {
        console.log(`O personagem: ${nome_2} sobreviveu com ${pontosVida_2} pontos de vida`)
    } else {
        console.log(`O personagem ${nome_2} não possui pontos de vida!`)
        console.log(`O personagem ${nome_1} é o vencedor!!`)
    }
} else if (poderATK_1 <= poderDEF_2) {
    console.log("Ataque não gerou nenhum dano, defesa superior ou igual ao ataque.")
    console.log(`Pontos de vida de ${nome_2} é ${pontosVida_2}!`)
}