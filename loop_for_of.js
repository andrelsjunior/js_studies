lista_ingredientes = [
    "salaminho",
    "azeitona",
    "pão",
    "parmesão",
    "cheddar",
    "alface",
    "cenoura"
]

for(indice in lista_ingredientes){
    console.log(indice, lista_ingredientes[indice])
} console.log('A lista contém: ', lista_ingredientes.length, ' elementos.')

console.log('')
console.log('')
console.log('')

for(ingrediente of lista_ingredientes){
    console.log(ingrediente);
}

console.log('')
console.log('')
console.log('')
console.log('')
console.log('')
console.log('##########################')
console.log('')
console.log('')
console.log('')
console.log('')
console.log('')

contatos = ["kayo", "adilton", "mateus", "bindeli", "deonides", "joe", "washington", "vinícius"]

// Jeito #1
function enviar_mensagem(nome) {
    if(nome==="vinícius"){
        console.log("Vamos jogar PUBG, bobo da corte?")
    } else console.log("Vamos jogar PUBG,", nome + "?")
}

for(contato of contatos) {
    enviar_mensagem(contato)
    console.log("")
}

// Jeito #2
for(contato of contatos) {
    if(nome==="vinícius"){
        console.log("Vamos jogar PUBG, bobo da corte?")
    } else console.log("Vamos jogar PUBG,", nome + "?") 
}