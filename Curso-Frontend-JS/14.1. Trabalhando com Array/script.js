const exemplo = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(exemplo)

// PUSH Adiocina elemento no final do arrya:
exemplo.push("Boromir")
console.log(exemplo)

// UNSHIFT Adiciona elemento no começo do array
exemplo.unshift("Arwen")
console.log(exemplo)

// POP: Remove o último elemento do array
const ultimoElemento = exemplo.pop()
console.log("Removendo o último elemento: "+ ultimoElemento)
console.log(exemplo)

// SHIFT: Remove o primeiro elemento do array
const primeiroElemento = exemplo.shift()
console.log("Removendo o primeiro elemento: " + primeiroElemento)
console.log(exemplo)

// INCLUDES: Pesquisa um elemento dentro do array
const pesquisar = exemplo.includes("Pippin")
console.log(pesquisar)

// INDEXOF: Retorna o índice da pesquisa dentro do array
const indece = exemplo.indexOf("Gandalf")
console.log(indece)

// SLICE: Corta uma parte do array
const hobbits = exemplo.slice(0,4)
const outros = exemplo.slice(-4)
console.log(hobbits)
console.log(outros)

// CONCAT: Concatemar ou Juntas elementos dentro da string
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)