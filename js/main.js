/*let nome = "Rodrigo Figueira de Oliveira"
alert("Bem-Vindo " + nome)

let list = ['maça', 'pera', 'laranja']
list.pop() // Remove ultimo item do array
list.push('uva') // Adiciona item na ultima posição do array

console.log(list)
console.log(list.length) // Verificar quantos itens tem o array
console.log(list.reverse()) //Mostra ordem inversa dos itens no array
console.log(list.toString()) // Transforma a lista em string
console.log(list.join(' / ')) // Transforma a lista em string e adiciona separador entre os itens */

/*let idade = prompt('Qual a sua idade?')
if (idade > 18) {
    alert('Maior de idade')
} else {
    alert('Menor de idade')
}*/

/*let cont = 0
while ( cont <= 5 ) {
    console.log(cont)
    cont++
}*/

/*let cont = 0
for (cont = 0; cont <= 5; cont++) {
    alert(cont)
}*/

/*let d = new Date()
//alert(d)
alert(d.getDay())
alert(d.getMonth() + 1)
alert(d.getFullYear())*/

/*function soma(x, y) {
    return x + y
}
alert(soma(5, 12))*/
 
function clicou() {
   document.getElementById('agradecimento').innerHTML = "<b>Bem vindo</b>"
}
function redirecionar() {
    window.open("https://github.com/Rodrigo-ooliveira")
}
function trocar (elemento) {
    //document.getElementById("mousemove").innerHTML = "Passou neh"
    elemento.innerHTML = "Passou neh"
}
function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse"
    elemento.innerHTML = "Passe o mouse"
}
function load() {
    alert("Pagina carregada")
}
