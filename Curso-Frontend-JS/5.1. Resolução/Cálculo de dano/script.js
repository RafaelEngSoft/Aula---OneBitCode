const atacante = prompt("Qual é o nome do personagem atacante?")
const poderAtaque = parseFloat(prompt("Qual é o seu poder de ataque?"))

const defensor = prompt("Qual o é o nome do personagem defenso?")
let pontosVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
const poderDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"))
const possuiEscudo = prompt("Ele possui escudo? (Sim / Não)")


let danoCausado = 0

if(poderAtaque > poderDefesa && possuiEscudo === Não){
    danoCausado = poderAtaque - poderDefesa}
    else if(poderAtaque > poderDefesa && possuiEscudo === Sim){
        danoCausado = (poderAtaque - poderDefesa) / 2
    }

pontosVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)