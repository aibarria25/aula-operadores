//Exercícios de interpretação de código

/*
1- 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // false 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // true

console.log("d. ", typeof resultado) //boolean

2- 
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)


No console sera impreso o primeiro numero digitado pelo usuario seguido do segundo numero
porque tudo o que é digitado no prompt vira string

3- 
Os numeros digitados precisam serem convertidos de string para number
*/

//Exercícios de escrita de código

//1-
const idadeUsuario = prompt('Quantos anos você tem?:')
const idadeAmigo = prompt('Qual é a idade do seu melhor amigo?:')
const comparacao = idadeUsuario > idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?", comparacao)
const diferenca = Number(idadeUsuario) - Number(idadeAmigo)
//const diferenca = idadeUsuario - idadeAmigo
console.log(diferenca)

//2-
//a
let numeroPar = prompt("Digite um número par: ")
//b
numeroParB = Number(numeroPar)
console.log(typeof numeroParB)
let resto = numeroParB % 2
console.log(resto)



//c - Ao digitar um numero par o console imprime 0

//d - Ao digitar um numero imparno console é impresso 1


//3 - 
let idadeAnos = prompt('Quantos anos você tem?:')
let idadeAnosNumero = Number(idadeAnos)
console.log(typeof idadeAnosNumero)

let idadeMeses = idadeAnosNumero * 12
console.log('Idade em meses:', idadeMeses)

let idadeDias = idadeAnosNumero * 365
console.log('Idade em dias:', idadeDias)

let idadeHoras = idadeDias * 24
console.log('Idade em horas:', idadeHoras)


//4-
let numero1 = prompt('Digite um número:')
let numero2 = prompt('Digite outro numero:')

let numero1B = Number(numero1) 
console.log(typeof numero1B)

let numero2B = Number(numero2)
console.log(typeof numero2B)

let a = numero1B > numero2B
let b = numero1B === numero2B
let c = numero1B % numero2B
let d = numero2B % numero1B

console.log('O primeiro numero é maior que segundo?:', a)
console.log('O primeiro numero é igual ao segundo?:', b)
console.log('O primeiro numero é divisível pelo segundo?:', c)
console.log('O segundo numero é divisível pelo primeiro?:', d)